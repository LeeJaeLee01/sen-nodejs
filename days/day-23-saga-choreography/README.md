# Day 23 | Ngày 23: Distributed Transactions & Saga Pattern

> **Phase 04 | Giai đoạn 04** — High-Throughput Messaging & Event-Driven Systems | High-Throughput Messaging & Event-Driven

## Topic | Chủ đề

**EN:** Distributed Transactions & Saga Pattern  
**VI:** Distributed Transactions & Saga Pattern

## Core concepts | Nội dung cốt lõi

**EN:** Distributed transactions, Saga choreography vs orchestration, compensating transactions.

**VI:** Quản lý giao dịch phân tán giữa các microservices. Triển khai Saga Pattern dạng Choreography vs Orchestration. Compensating Transactions.

## Daily practice | Nhiệm vụ thực hành

**EN:** Order–Payment–Inventory saga via message broker with rollback on payment failure.

**VI:** Viết luồng xử lý Đặt hàng - Thanh toán - Trừ kho áp dụng Saga Choreography qua Message Broker, có xử lý hoàn tác (rollback dữ liệu) nếu thanh toán lỗi.

## Folder structure | Cấu trúc thư mục

```
days/day-23-saga-choreography/
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
