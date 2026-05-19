# Day 13 | Ngày 13: PostgreSQL Deep Optimization & Execution Planner

> **Phase 03 | Giai đoạn 03** — Database & Caching at Scale | Tối ưu Database & Caching ở Quy mô lớn

## Topic | Chủ đề

**EN:** PostgreSQL Deep Optimization & Execution Planner  
**VI:** PostgreSQL Deep Optimization & Execution Planner

## Core concepts | Nội dung cốt lõi

**EN:** EXPLAIN (ANALYZE, BUFFERS). Indexes: B-Tree, GIN for JSONB, GiST. Anti-patterns.

**VI:** Phân tích Query Planner bằng EXPLAIN (ANALYZE, BUFFERS). Tối ưu hóa Index (B-Tree, GIN cho JSONB, GiST). Tránh các lỗi Anti-patterns.

## Daily practice | Nhiệm vụ thực hành

**EN:** Optimize a slow multi-JOIN query with EXPLAIN ANALYZE; target >90% faster.

**VI:** Tìm một câu lệnh SQL phức tạp có nhiều JOIN đang chạy chậm, dùng EXPLAIN ANALYZE tìm nút thắt, đánh index phù hợp để giảm thời gian chạy > 90%.

## Folder structure | Cấu trúc thư mục

```
days/day-13-postgres-explain-optimize/
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
