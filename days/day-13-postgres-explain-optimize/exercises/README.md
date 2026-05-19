# Exercises | Bài thực hành — Day 13 | Ngày 13

> **PostgreSQL Deep Optimization & Execution Planner**

## Goal | Mục tiêu

**EN:** Optimize a slow multi-JOIN query with EXPLAIN ANALYZE; target >90% faster.

**VI:** Tìm một câu lệnh SQL phức tạp có nhiều JOIN đang chạy chậm, dùng EXPLAIN ANALYZE tìm nút thắt, đánh index phù hợp để giảm thời gian chạy > 90%.

## Steps | Các bước

**EN:**
1. docker compose up -d postgres
2. Chạy sql/seed-slow-query.sql
3. EXPLAIN (ANALYZE, BUFFERS) → thêm index → so sánh thời gian

**VI:**
1. docker compose up -d postgres
2. Chạy sql/seed-slow-query.sql
3. EXPLAIN (ANALYZE, BUFFERS) → thêm index → so sánh thời gian

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Screenshot EXPLAIN trước/sau; >90% faster

**VI:** Screenshot EXPLAIN trước/sau; >90% faster

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
