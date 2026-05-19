# Day 16 | Ngày 16: Distributed Locks & Race Conditions

> **Phase 03 | Giai đoạn 03** — Database & Caching at Scale | Tối ưu Database & Caching ở Quy mô lớn

## Topic | Chủ đề

**EN:** Distributed Locks & Race Conditions  
**VI:** Distributed Locks & Race Conditions

## Core concepts | Nội dung cốt lõi

**EN:** Race conditions, Redlock with Redis, optimistic vs pessimistic locking.

**VI:** Giải quyết Race Conditions trong hệ thống phân tán. Triển khai thuật toán Redlock bằng Redis. So sánh Optimistic vs Pessimistic locking.

## Daily practice | Nhiệm vụ thực hành

**EN:** Booking module: no double-booking under concurrent load using Redis distributed lock.

**VI:** Viết một module xử lý đặt vé/giữ chỗ, đảm bảo không bị double-booking khi có hàng ngàn user bấm mua cùng lúc nhờ Redis Distributed Lock.

## Folder structure | Cấu trúc thư mục

```
days/day-16-redis-distributed-lock/
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
