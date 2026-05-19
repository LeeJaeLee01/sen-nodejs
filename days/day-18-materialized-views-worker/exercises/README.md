# Exercises | Bài thực hành — Day 18 | Ngày 18

> **Materialized Views & Đồng bộ bất đồng bộ**

## Goal | Mục tiêu

**EN:** Background worker refreshes materialized views async, triggered by Redis events.

**VI:** Cấu hình một background worker tự động làm mới (refresh) các Materialized Views một cách bất đồng bộ dựa trên trigger từ Redis Event.

## Steps | Các bước

**EN:**
1. CREATE MATERIALIZED VIEW sales_daily ...
2. REFRESH MATERIALIZED VIEW CONCURRENTLY
3. Bull/BullMQ job refresh on Redis pub/sub event

**VI:**
1. CREATE MATERIALIZED VIEW sales_daily ...
2. REFRESH MATERIALIZED VIEW CONCURRENTLY
3. Bull/BullMQ job refresh on Redis pub/sub event

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Worker refresh async; đọc không block

**VI:** Worker refresh async; đọc không block

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
