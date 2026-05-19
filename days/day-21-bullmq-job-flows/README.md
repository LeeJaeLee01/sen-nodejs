# Day 21 | Ngày 21: Advanced BullMQ Architecture

> **Phase 04 | Giai đoạn 04** — High-Throughput Messaging & Event-Driven Systems | High-Throughput Messaging & Event-Driven

## Topic | Chủ đề

**EN:** Advanced BullMQ Architecture  
**VI:** Advanced BullMQ Architecture

## Core concepts | Nội dung cốt lõi

**EN:** BullMQ parent-child jobs, flows, concurrency tuning, rate limits, dead-letter queues.

**VI:** Quản lý Parent-child jobs, chuỗi job phụ thuộc (job flows). Tối ưu hóa Concurrency Tuning, Rate limiting và xử lý Dead-letter Queues.

## Daily practice | Nhiệm vụ thực hành

**EN:** Distributed scraper: master job spawns and tracks dependent child jobs.

**VI:** Thiết kế một hệ thống cào dữ liệu phân tán sử dụng BullMQ, trong đó một Master Job sẽ sinh ra và giám sát tiến độ của nhiều Child Jobs phụ thuộc.

## Folder structure | Cấu trúc thư mục

```
days/day-21-bullmq-job-flows/
├── README.md
├── exercises/
├── notes/LEARNINGS.md
└── deliverables/
```

## Checklist

- [ ] Read core theory | Đọc lý thuyết cốt lõi
- [ ] Complete exercises | Hoàn thành bài thực hành
- [ ] Fill `notes/LEARNINGS.md` (EN + VI)
- [ ] Mark done in `progress/TRACKER.md`

## References | Tài liệu tham khảo

- [Node.js Documentation (EN)](https://nodejs.org/en/docs)
- [NestJS Documentation (EN)](https://docs.nestjs.com/)
