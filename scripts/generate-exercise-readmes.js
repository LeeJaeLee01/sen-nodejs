#!/usr/bin/env node
/** Generates exercises/README.md for days 6–30 */

const fs = require('fs');
const path = require('path');
const curriculum = require('./curriculum-vi.json');
const i18n = require('./curriculum-i18n');

const ROOT = path.join(__dirname, '..');

const LABS = {
  6: {
    steps: [
      'npx @nestjs/cli new nest-config-lab --package-manager npm --skip-git',
      'Tạo SecretsModule.registerAsync() với useFactory fetch AWS Secrets Manager',
      'Mock AWS SDK khi dev; inject SecretsService vào AppController',
    ],
    deliverable: 'Module bootstrap load secrets async; test GET /config masked',
  },
  7: {
    steps: [
      'nest new rbac-lab --skip-git',
      '@Permissions(), PermissionsGuard, Reflector đọc metadata',
      'Mock tenant permissions map; test 403 khi thiếu quyền',
    ],
    deliverable: 'Decorator + Guard hoạt động với tenant động',
  },
  8: {
    steps: [
      'nest new roadmap-monorepo && nest g app users-service && nest g app orders-service',
      'libs/proto + gRPC; Orders gọi Users',
      'Shared data-access library (TypeORM hoặc Prisma stub)',
    ],
    deliverable: '2 services gRPC ping/pong + shared lib import',
  },
  9: {
    steps: [
      'Tạo domain/ entity, value object, repository interface',
      'application/ use case không import @nestjs/common',
      'infrastructure/ TypeORM adapter; presentation/ controller mỏng',
    ],
    deliverable: 'CRUD Product tách domain khỏi Nest/DB',
  },
  10: {
    steps: [
      'npm i @nestjs/cqrs',
      'CreateOrderCommand + Handler; GetInvoiceQuery + Handler',
      'Event OrderCreated → projection read model (in-memory hoặc DB)',
    ],
    deliverable: 'Checkout: command ghi, query đọc invoice tách biệt',
  },
  11: {
    steps: [
      'npm i -D @testcontainers/postgresql redis testcontainers',
      'e2e/app.e2e-spec.ts spin Postgres + Redis',
      'Test multi-tenant header + CRUD API',
    ],
    deliverable: 'E2E pass với DB thật trong Docker',
  },
  12: {
    steps: [
      '2 app Nest: main express vs main fastify',
      'npx autocannon -c 100 -d 30 http://localhost:PORT/health',
      'So sánh req/s và RAM (process.memoryUsage)',
    ],
    deliverable: 'Bảng benchmark trong deliverables/benchmark.md',
  },
  13: {
    steps: [
      'docker compose up -d postgres',
      'Chạy sql/seed-slow-query.sql',
      'EXPLAIN (ANALYZE, BUFFERS) → thêm index → so sánh thời gian',
    ],
    deliverable: 'Screenshot EXPLAIN trước/sau; >90% faster',
  },
  14: {
    steps: [
      'CREATE TABLE event_logs (...) PARTITION BY RANGE (created_at)',
      'INSERT generate_series hàng triệu row (script)',
      'Query theo tháng — so sánh với bảng không partition',
    ],
    deliverable: 'DDL partition + ghi chú chiến lược retention',
  },
  15: {
    steps: [
      'Redis + Nest CacheModule',
      'Mô phỏng stampede: autocannon + cache miss đồng thời',
      'Implement mutex lock hoặc XFetch trên getCache',
    ],
    deliverable: 'Graph latency trước/sau mitigation',
  },
  16: {
    steps: [
      'Redis + ioredis',
      'BookingService.reserve(seatId) với Redlock',
      'Load test 100 concurrent POST /book cùng seat',
    ],
    deliverable: 'Chỉ 1 booking thành công; log lock acquire/release',
  },
  17: {
    steps: [
      'TenantConnectionManager: Map tenantId → DataSource',
      'TTL evict pool không dùng; max pools config',
      'Test 50 tenant switch — không leak connection',
    ],
    deliverable: 'Module pool switcher + metrics active pools',
  },
  18: {
    steps: [
      'CREATE MATERIALIZED VIEW sales_daily ...',
      'REFRESH MATERIALIZED VIEW CONCURRENTLY',
      'Bull/BullMQ job refresh on Redis pub/sub event',
    ],
    deliverable: 'Worker refresh async; đọc không block',
  },
  19: {
    steps: [
      '2 Postgres (master/replica) hoặc mock routing',
      'TypeORM Replication config hoặc custom DataSource router',
      'Test SELECT → replica, INSERT → master',
    ],
    deliverable: 'Log query route; handle replication lag note',
  },
  20: {
    steps: [
      'Bảng outbox_events; transaction ghi order + outbox row',
      'Worker poll outbox → publish Redis/RabbitMQ',
      'Consumer sync Elasticsearch (hoặc mock index)',
    ],
    deliverable: 'At-least-once safe sync demo',
  },
  21: {
    steps: [
      'npm i bullmq ioredis',
      'FlowProducer: master scrape job → N child URL jobs',
      'Track progress; DLQ cho failed children',
    ],
    deliverable: 'Master completes when all children done',
  },
  22: {
    steps: [
      'Kafka/RabbitMQ consumer Nest microservice',
      'processed_events(idempotency_key UNIQUE)',
      'Gửi duplicate message — count applied once',
    ],
    deliverable: 'Idempotent handler test',
  },
  23: {
    steps: [
      '3 services hoặc modules: Order, Payment, Inventory',
      'Events: OrderCreated → Payment → Inventory / compensate',
      'PaymentFailed → release inventory + cancel order',
    ],
    deliverable: 'Saga choreography diagram + demo',
  },
  24: {
    steps: [
      '2 instance Nest + Socket.io Redis adapter',
      'Client A connect instance 1; emit; Client B instance 2 nhận',
      'Optional: SSE endpoint stream ticks',
    ],
    deliverable: 'Screenshot cross-instance message',
  },
  25: {
    steps: [
      'POST /webhook → LPUSH redis queue → 202 Accepted',
      'Worker BRPOP batch insert DB',
      'autocannon 5k req/s — server không OOM',
    ],
    deliverable: 'Metrics queue depth + insert rate',
  },
  26: {
    steps: [
      'Viết ecs-autoscaling.json (target tracking ALB request count)',
      'Document CPU vs custom metric tradeoff',
    ],
    deliverable: 'File cấu hình trong exercises/',
  },
  27: {
    steps: [
      'terraform init && terraform plan trong exercises/',
      'Modules: vpc, ecs, rds, elasticache (skeleton OK)',
    ],
    deliverable: 'terraform plan output (không cần apply prod)',
  },
  28: {
    steps: [
      'Hoàn thiện .gitlab-ci.yml: build, trivy, deploy, health, rollback',
      'Document cache Docker layers',
    ],
    deliverable: 'Pipeline YAML + rollback flow diagram',
  },
  29: {
    steps: [
      '@opentelemetry/sdk-node + auto-instrumentations',
      'Export OTLP → Jaeger (docker compose jaeger)',
      'Trace gRPC call qua 2 services',
    ],
    deliverable: 'Screenshot trace waterfall Jaeger',
  },
  30: {
    steps: [
      'prom-client: event loop lag, heap, http duration',
      '/metrics endpoint + import dashboard-roadmap.json Grafana',
    ],
    deliverable: 'dashboard screenshot trong deliverables/',
  },
};

function pad(n) {
  return String(n).padStart(2, '0');
}

function readme(item) {
  const en = i18n.days[item.day] || {};
  const lab = LABS[item.day] || { steps: ['Xem nhiệm vụ trong README ngày.'], deliverable: 'Hoàn thành theo mô tả.' };
  const stepsVi = lab.steps.map((s, i) => `${i + 1}. ${s}`).join('\n');
  const stepsEn = lab.steps.map((s, i) => `${i + 1}. ${s}`).join('\n');

  return `# Exercises | Bài thực hành — Day ${item.day} | Ngày ${item.day}

> **${item.topic}**

## Goal | Mục tiêu

**EN:** ${en.action || item.action}

**VI:** ${item.action}

## Steps | Các bước

**EN:**
${stepsEn}

**VI:**
${stepsVi}

## Deliverable | Sản phẩm nộp

Lưu vào \`deliverables/\`:

**EN:** ${lab.deliverable}

**VI:** ${lab.deliverable}

## Checklist

- [ ] Đọc lý thuyết trong \`../README.md\`
- [ ] Hoàn thành các bước lab
- [ ] Điền \`../notes/LEARNINGS.md\`
- [ ] Lưu artifact vào \`deliverables/\`
`;
}

for (const item of curriculum) {
  if (item.day <= 5) continue;
  const dir = path.join(ROOT, 'days', `day-${pad(item.day)}-${item.folder}`, 'exercises');
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'README.md'), readme(item));
}

// Starter files for specific days
const starters = {
  13: { 'sql/seed-slow-query.sql': `-- Ngày 13: Slow query lab
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- TODO: INSERT dummy data (100k+ rows)
-- TODO: Query JOIN users without index → EXPLAIN ANALYZE
` },
  27: { 'main.tf': `terraform {
  required_version = ">= 1.5.0"
}
# TODO: module vpc, ecs, rds, elasticache
` },
  28: { '.gitlab-ci.yml': `stages: [build, test, deploy, verify]
# TODO: docker build, trivy, ecs deploy, rollback on failure
` },
  30: { 'dashboard-roadmap.json': JSON.stringify({ title: 'Node.js Roadmap Vitals', panels: [] }, null, 2) },
};

for (const [day, files] of Object.entries(starters)) {
  const c = curriculum.find((x) => x.day === Number(day));
  const base = path.join(ROOT, 'days', `day-${pad(Number(day))}-${c.folder}`, 'exercises');
  for (const [name, content] of Object.entries(files)) {
    const fp = path.join(base, name);
    if (!fs.existsSync(fp)) {
      fs.mkdirSync(path.dirname(fp), { recursive: true });
      fs.writeFileSync(fp, content);
    }
  }
}

console.log('Generated exercises/README.md for days 6–30');
