/** English translations for bilingual docs (VI source: generate-roadmap CURRICULUM) */
module.exports = {
  phases: {
    '01': 'Node.js Internals & Performance Optimization',
    '02': 'Advanced NestJS & Enterprise Architecture',
    '03': 'Database & Caching at Scale',
    '04': 'High-Throughput Messaging & Event-Driven Systems',
    '05': 'Cloud Architecture, DevOps & Observability',
  },
  days: {
    1: {
      concepts:
        'Deep dive into Event Loop phases (timers, pending, poll, check, close). How libuv’s thread pool handles asynchronous work.',
      action:
        'Verify order of process.nextTick, setImmediate, Promise.resolve. Block the Event Loop and measure latency.',
    },
    2: {
      concepts:
        'V8 memory layout (Heap/Stack, New/Old Space). Garbage Collection (Scavenge, Mark-Sweep-Compact).',
      action:
        'Profile an intentional memory leak with Clinic.js or Chrome DevTools; find and fix it completely.',
    },
    3: {
      concepts:
        'Large data with Streams. Backpressure to avoid memory blow-up. Custom Readable/Writable/Transform streams.',
      action:
        'Build a multi-GB log parser using Transform streams with RAM under 50MB.',
    },
    4: {
      concepts:
        'CPU-bound work with Worker Threads. Compare Worker Threads vs Cluster. SharedArrayBuffer.',
      action:
        'Implement heavy hash/encrypt module with Worker Threads; benchmark vs single-thread.',
    },
    5: {
      concepts:
        'Advanced async/await, unhandled rejections in distributed systems, centralized error handling.',
      action:
        'Design an async error wrapper with structured logs to monitoring.',
    },
    6: {
      concepts:
        'Custom Providers (Value, Class, Factory). Provider scopes (Transient, Request, Singleton) and performance impact.',
      action:
        'Dynamic Config Module fetching secrets from AWS Secrets Manager at bootstrap.',
    },
    7: {
      concepts:
        'Custom execution contexts and metadata reflection for reusable cross-cutting decorators.',
      action:
        'RBAC/ABAC with Custom Decorator, Guard, and Reflector for dynamic tenant permissions.',
    },
    8: {
      concepts:
        'Advanced monorepo layout. gRPC and custom transporters. Shared libraries.',
      action:
        'NestJS monorepo: 2 microservices over gRPC + shared data-access (TypeORM/Prisma).',
    },
    9: {
      concepts:
        'DDD in NestJS: Entities, Aggregates, Repositories, Value Objects, Application Services isolated from transport.',
      action:
        'Refactor a CRUD module to DDD with domain logic independent of framework and DB.',
    },
    10: {
      concepts:
        'CQRS with @nestjs/cqrs. Basic event sourcing and event handlers.',
      action:
        'Apply CQRS to high-traffic checkout: optimize writes, separate invoice reads.',
    },
    11: {
      concepts:
        'Complex unit mocking. E2E with Testcontainers for real PostgreSQL/Redis in Docker.',
      action:
        'Full E2E for multi-tenant API with Testcontainers-isolated DB.',
    },
    12: {
      concepts:
        'Fastify adapter vs Express. Injection chain tuning, serverless cold start.',
      action:
        'Benchmark Express vs Fastify at ~10k req/s; reduce module RAM footprint.',
    },
    13: {
      concepts:
        'EXPLAIN (ANALYZE, BUFFERS). Indexes: B-Tree, GIN for JSONB, GiST. Anti-patterns.',
      action:
        'Optimize a slow multi-JOIN query with EXPLAIN ANALYZE; target >90% faster.',
    },
    14: {
      concepts:
        'Table partitioning (Range, List, Hash) on PostgreSQL. Operating partitioned tables at scale.',
      action:
        'Time-series partitioning for a log table with millions of rows.',
    },
    15: {
      concepts:
        'Cache stampede, penetration, avalanche. Write-through vs cache-aside.',
      action:
        'Lock or XFetch (probabilistic early expiration) in NestJS to prevent cache stampede.',
    },
    16: {
      concepts:
        'Race conditions, Redlock with Redis, optimistic vs pessimistic locking.',
      action:
        'Booking module: no double-booking under concurrent load using Redis distributed lock.',
    },
    17: {
      concepts:
        'Shared DB + separate schema multi-tenancy. Dynamic connection pooling without pool exhaustion.',
      action:
        'Optimize tenant connection pool switcher: release and reuse pools efficiently.',
    },
    18: {
      concepts:
        'Materialized views for reporting. CONCURRENT REFRESH without blocking reads/writes.',
      action:
        'Background worker refreshes materialized views async, triggered by Redis events.',
    },
    19: {
      concepts:
        'Read/write splitting, routing SELECT to replica, handling replication lag.',
      action:
        'TypeORM or Prisma: SELECT → read replica, writes → master.',
    },
    20: {
      concepts:
        'When to add Elasticsearch/MongoDB. Transactional Outbox for safe SQL → search sync.',
      action:
        'Outbox table + worker publishing to MQ for Elasticsearch sync.',
    },
    21: {
      concepts:
        'BullMQ parent-child jobs, flows, concurrency tuning, rate limits, dead-letter queues.',
      action:
        'Distributed scraper: master job spawns and tracks dependent child jobs.',
    },
    22: {
      concepts:
        'Kafka (partitions, consumer groups, offsets) vs RabbitMQ (exchanges, queues, acks). Idempotency.',
      action:
        'Idempotent NestJS consumer for Kafka/RabbitMQ duplicate events.',
    },
    23: {
      concepts:
        'Distributed transactions, Saga choreography vs orchestration, compensating transactions.',
      action:
        'Order–Payment–Inventory saga via message broker with rollback on payment failure.',
    },
    24: {
      concepts:
        'Scale WebSockets with Redis adapter (pub/sub). SSE for one-way streams.',
      action:
        'NestJS + Socket.io Redis adapter cluster; test cross-instance realtime messages.',
    },
    25: {
      concepts:
        'Burst webhooks, queue-based load leveling before DB writes.',
      action:
        'Webhook endpoint surviving ~5k req/s by pushing payloads to Redis first.',
    },
    26: {
      concepts:
        'ECS/Fargate autoscaling (CPU/memory/custom metrics). S3 multipart, Lambda cold start.',
      action:
        'Config to scale ECS Fargate NestJS on ALB concurrent request count.',
    },
    27: {
      concepts:
        'Infrastructure as code. Reusable Terraform modules for dev/staging/prod.',
      action:
        'Terraform: VPC, ECS cluster, RDS PostgreSQL, ElastiCache Redis for NestJS.',
    },
    28: {
      concepts:
        'GitLab CI/CD caching, blue-green or canary rollback on failed deploy.',
      action:
        'Full GitLab pipeline: build, security scan, ECS deploy, auto-rollback on health fail.',
    },
    29: {
      concepts:
        'Distributed tracing. OpenTelemetry across NestJS microservices.',
      action:
        'OpenTelemetry on gRPC services; export traces to Jaeger/Zipkin.',
    },
    30: {
      concepts:
        'Structured logging (Pino/Winston). Prometheus metrics. Grafana for event loop lag and 5xx.',
      action:
        'Grafana dashboard: event loop lag, heap, active handles, API error rate.',
    },
  },
};
