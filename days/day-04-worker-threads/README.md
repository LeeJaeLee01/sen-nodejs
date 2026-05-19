# Day 4 | Ngày 4: Concurrency & Worker Threads

> **Phase 01 | Giai đoạn 01** — Node.js Internals & Performance Optimization | Node.js Internals & Tối ưu hiệu năng

## Topic | Chủ đề

**EN:** Concurrency & Worker Threads  
**VI:** Concurrency & Worker Threads

## Core concepts | Nội dung cốt lõi

**EN:** CPU-bound work with Worker Threads. Compare Worker Threads vs Cluster. SharedArrayBuffer.

**VI:** Xử lý tác vụ CPU-bound bằng Worker Threads. So sánh hiệu năng giữa Worker Threads và Cluster Module. Chia sẻ bộ nhớ qua SharedArrayBuffer.

## Daily practice | Nhiệm vụ thực hành

**EN:** Implement heavy hash/encrypt module with Worker Threads; benchmark vs single-thread.

**VI:** Triển khai một module mã hóa/băm dữ liệu nặng bằng Worker Threads, đo lường throughput và so sánh với việc chạy đơn luồng thông thường.

## Folder structure | Cấu trúc thư mục

```
days/day-04-worker-threads/
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
