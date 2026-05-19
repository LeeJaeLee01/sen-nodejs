# Exercises | Bài thực hành — Day 14 | Ngày 14

> **Advanced Data Partitioning**

## Goal | Mục tiêu

**EN:** Time-series partitioning for a log table with millions of rows.

**VI:** Thiết kế và chạy thử nghiệm cấu trúc phân vùng dữ liệu theo thời gian (Time-series partitioning) cho bảng chứa hàng triệu bản ghi log.

## Steps | Các bước

**EN:**
1. CREATE TABLE event_logs (...) PARTITION BY RANGE (created_at)
2. INSERT generate_series hàng triệu row (script)
3. Query theo tháng — so sánh với bảng không partition

**VI:**
1. CREATE TABLE event_logs (...) PARTITION BY RANGE (created_at)
2. INSERT generate_series hàng triệu row (script)
3. Query theo tháng — so sánh với bảng không partition

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** DDL partition + ghi chú chiến lược retention

**VI:** DDL partition + ghi chú chiến lược retention

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
