# Day 1 | Ngày 1: Event Loop & Libuv Internals

> **Phase 01 | Giai đoạn 01** — Node.js Internals & Performance Optimization | Node.js Internals & Tối ưu hiệu năng

## Topic | Chủ đề

**EN:** Event Loop & Libuv Internals  
**VI:** Event Loop & Libuv Internals

## Core concepts | Nội dung cốt lõi

**EN:** Deep dive into Event Loop phases (timers, pending, poll, check, close). How libuv’s thread pool handles asynchronous work.

**VI:** Phân tích sâu các phase của Event Loop (timers, pending, poll, check, close). Cơ chế xử lý bất đồng bộ của libuv thread pool.

## Daily practice | Nhiệm vụ thực hành

**EN:** Verify order of process.nextTick, setImmediate, Promise.resolve. Block the Event Loop and measure latency.

**VI:** Viết script kiểm chứng thứ tự chạy của process.nextTick, setImmediate, Promise.resolve. Tạo kịch bản block Event Loop và đo lường độ trễ.

## Folder structure | Cấu trúc thư mục

```
days/day-01-event-loop-libuv/
├── README.md
├── exercises/
├── notes/LEARNINGS.md
└── deliverables/
```

## Exercises | Bài thực hành

Chi tiết: [exercises/README.md](exercises/README.md)

```bash
npm run day:01:1   # microtask order
npm run day:01:2   # block event loop (server)
npm run day:01:3   # I/O callback order
```

## Checklist

- [ ] Read core theory | Đọc lý thuyết cốt lõi
- [ ] Complete exercises | Hoàn thành bài thực hành
- [ ] Fill `notes/LEARNINGS.md` (EN + VI)
- [ ] Mark done in `progress/TRACKER.md`

## References | Tài liệu tham khảo

- [Node.js Documentation (EN)](https://nodejs.org/en/docs)
- [NestJS Documentation (EN)](https://docs.nestjs.com/)
