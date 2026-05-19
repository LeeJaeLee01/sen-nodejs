#!/usr/bin/env node
/**
 * Generates bilingual (EN + VI) day README.md and LEARNINGS.md
 * Run: node scripts/generate-roadmap.js
 */

const fs = require('fs');
const path = require('path');
const curriculum = require('./curriculum-vi.json');
const i18n = require('./curriculum-i18n');

const ROOT = path.join(__dirname, '..');
const SKIP_LEARNINGS_DAYS = new Set([1]);

const PHASES = [
  { id: '01', slug: 'phase-01-nodejs-internals', title: 'Node.js Internals & Tối ưu hiệu năng', days: [1, 2, 3, 4, 5] },
  { id: '02', slug: 'phase-02-nestjs-enterprise', title: 'Advanced NestJS & Kiến trúc Doanh nghiệp', days: [6, 7, 8, 9, 10, 11, 12] },
  { id: '03', slug: 'phase-03-database-caching', title: 'Tối ưu Database & Caching ở Quy mô lớn', days: [13, 14, 15, 16, 17, 18, 19, 20] },
  { id: '04', slug: 'phase-04-messaging-event-driven', title: 'High-Throughput Messaging & Event-Driven', days: [21, 22, 23, 24, 25] },
  { id: '05', slug: 'phase-05-cloud-devops', title: 'Cloud Architecture, DevOps & Observability', days: [26, 27, 28, 29, 30] },
];

function padDay(n) {
  return String(n).padStart(2, '0');
}

function getPhase(dayNum) {
  return PHASES.find((p) => p.days.includes(dayNum));
}

function dayReadme(item) {
  const phase = getPhase(item.day);
  const dayPad = padDay(item.day);
  const en = i18n.days[item.day] || {};
  const phaseTitleEn = i18n.phases[phase.id] || phase.title;

  return `# Day ${item.day} | Ngày ${item.day}: ${item.topic}

> **Phase ${phase.id} | Giai đoạn ${phase.id}** — ${phaseTitleEn} | ${phase.title}

## Topic | Chủ đề

**EN:** ${item.topic}  
**VI:** ${item.topic}

## Core concepts | Nội dung cốt lõi

**EN:** ${en.concepts || ''}

**VI:** ${item.concepts}

## Daily practice | Nhiệm vụ thực hành

**EN:** ${en.action || ''}

**VI:** ${item.action}

## Folder structure | Cấu trúc thư mục

\`\`\`
days/day-${dayPad}-${item.folder}/
├── README.md
├── exercises/
├── notes/LEARNINGS.md
└── deliverables/
\`\`\`

## Checklist

- [ ] Read core theory | Đọc lý thuyết cốt lõi
- [ ] Complete exercises | Hoàn thành bài thực hành
- [ ] Fill \`notes/LEARNINGS.md\` (EN + VI)
- [ ] Mark done in \`progress/TRACKER.md\`

## References | Tài liệu tham khảo

- [Node.js Documentation (EN)](https://nodejs.org/en/docs)
- [NestJS Documentation (EN)](https://docs.nestjs.com/)
`;
}

function learningsTemplate(item) {
  const en = i18n.days[item.day] || {};
  return `# Day ${item.day} | Ngày ${item.day} — Learning Notes | Ghi chú học tập

> **Topic | Chủ đề:** ${item.topic}

---

## Core concepts | Khái niệm cốt lõi

**EN:** ${en.concepts || ''}

**VI:** ${item.concepts}

---

## Daily practice | Nhiệm vụ thực hành

**EN:** ${en.action || ''}

**VI:** ${item.action}

---

## Reflection questions | Câu hỏi ôn tập

### What is it for? | Để làm gì?

| Question (EN) | Câu hỏi (VI) | Your answer / Câu trả lời |
|---------------|--------------|---------------------------|
| What real-world problem does today's topic solve? | Chủ đề hôm nay giải quyết bài toán thực tế nào? | |
| Where would you use this in a NestJS production API? | Bạn sẽ dùng điều này ở đâu trên API NestJS production? | |

### Why does it matter? | Tại sao quan trọng?

| Question (EN) | Câu hỏi (VI) | Your answer / Câu trả lời |
|---------------|--------------|---------------------------|
| What breaks if you ignore this concept? | Điều gì xảy ra nếu bỏ qua khái niệm này? | |
| How does this relate to performance, reliability, or security? | Liên quan thế nào tới hiệu năng, độ tin cậy, hoặc bảo mật? | |

### Hands-on | Thực hành

| Question (EN) | Câu hỏi (VI) | Your answer / Câu trả lời |
|---------------|--------------|---------------------------|
| What did you observe when running today's exercises? | Bạn quan sát được gì khi chạy bài thực hành? | |
| What surprised you compared to your prediction? | Điều gì khác so với dự đoán ban đầu? | |

---

## What I understood | Điều đã hiểu

**EN:**

-

**VI:**

-

---

## Open questions | Câu hỏi còn lại

**EN:**

-

**VI:**

-

---

## Links | Liên kết

-
`;
}

function main() {
  for (const item of curriculum) {
    const dayPad = padDay(item.day);
    const dayDir = path.join(ROOT, 'days', `day-${dayPad}-${item.folder}`);
    fs.mkdirSync(path.join(dayDir, 'exercises'), { recursive: true });
    fs.mkdirSync(path.join(dayDir, 'notes'), { recursive: true });
    fs.mkdirSync(path.join(dayDir, 'deliverables'), { recursive: true });

    fs.writeFileSync(path.join(dayDir, 'README.md'), dayReadme(item));
    if (!SKIP_LEARNINGS_DAYS.has(item.day)) {
      fs.writeFileSync(path.join(dayDir, 'notes', 'LEARNINGS.md'), learningsTemplate(item));
    }
  }

  for (const phase of PHASES) {
    const phaseDir = path.join(ROOT, 'phases', phase.slug);
    const dayLinks = phase.days
      .map((d) => {
        const c = curriculum.find((x) => x.day === d);
        const pad = padDay(d);
        return `- [Day ${d} | Ngày ${d}: ${c.topic}](../days/day-${pad}-${c.folder}/)`;
      })
      .join('\n');
    const phaseTitleEn = i18n.phases[phase.id] || phase.title;
    fs.writeFileSync(
      path.join(phaseDir, 'README.md'),
      `# Phase ${phase.id} | Giai đoạn ${phase.id}: ${phaseTitleEn}\n\n**VI:** ${phase.title}\n\n## Days | Các ngày học\n\n${dayLinks}\n`,
    );
  }

  console.log('Generated bilingual docs for 30 days.');
}

main();
