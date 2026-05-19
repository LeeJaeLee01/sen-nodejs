# Day 22 | Ngày 22: Message Broker Internals (Kafka/RabbitMQ)

> **Phase 04 | Giai đoạn 04** — High-Throughput Messaging & Event-Driven Systems | High-Throughput Messaging & Event-Driven

## Topic | Chủ đề

**EN:** Message Broker Internals (Kafka/RabbitMQ)  
**VI:** Message Broker Internals (Kafka/RabbitMQ)

## Core concepts | Nội dung cốt lõi

**EN:** Kafka (partitions, consumer groups, offsets) vs RabbitMQ (exchanges, queues, acks). Idempotency.

**VI:** Cơ chế hoạt động của Kafka (Partitions, Consumer Groups, Offsets) vs RabbitMQ (Exchanges, Queues, Acks). Đảm bảo tính Idempotency.

## Daily practice | Nhiệm vụ thực hành

**EN:** Idempotent NestJS consumer for Kafka/RabbitMQ duplicate events.

**VI:** Xây dựng một Idempotent Consumer trong NestJS để xử lý các sự kiện từ Kafka/RabbitMQ, đảm bảo dù nhận trùng event hệ thống vẫn không sai lệch.

## Folder structure | Cấu trúc thư mục

```
days/day-22-idempotent-consumer/
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
