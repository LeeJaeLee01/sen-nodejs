# Day 25 | Ngày 25: Data Ingestion & Backpressure Handling

> **Phase 04 | Giai đoạn 04** — High-Throughput Messaging & Event-Driven Systems | High-Throughput Messaging & Event-Driven

## Topic | Chủ đề

**EN:** Data Ingestion & Backpressure Handling  
**VI:** Data Ingestion & Backpressure Handling

## Core concepts | Nội dung cốt lõi

**EN:** Burst webhooks, queue-based load leveling before DB writes.

**VI:** Xử lý lượng lớn dữ liệu đổ về đột biến (Burst Webhooks). Kỹ thuật dùng Queue để hấp thụ tải (Load Leveling) trước khi ghi xuống Database.

## Daily practice | Nhiệm vụ thực hành

**EN:** Webhook endpoint surviving ~5k req/s by pushing payloads to Redis first.

**VI:** Viết một endpoint webhook có khả năng chịu tải đột biến 5,000 req/s bằng cách đẩy trực tiếp payload vào Redis nhằm giảm tải ngay cho hệ thống.

## Folder structure | Cấu trúc thư mục

```
days/day-25-webhook-load-leveling/
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
