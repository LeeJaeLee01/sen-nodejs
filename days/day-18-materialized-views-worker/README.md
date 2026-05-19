# Day 18 | Ngày 18: Materialized Views & Đồng bộ bất đồng bộ

> **Phase 03 | Giai đoạn 03** — Database & Caching at Scale | Tối ưu Database & Caching ở Quy mô lớn

## Topic | Chủ đề

**EN:** Materialized Views & Đồng bộ bất đồng bộ  
**VI:** Materialized Views & Đồng bộ bất đồng bộ

## Core concepts | Nội dung cốt lõi

**EN:** Materialized views for reporting. CONCURRENT REFRESH without blocking reads/writes.

**VI:** Thiết kế Materialized Views cho dữ liệu báo cáo phức tạp. Chiến lược CONCURRENT REFRESH không làm block luồng đọc ghi của user.

## Daily practice | Nhiệm vụ thực hành

**EN:** Background worker refreshes materialized views async, triggered by Redis events.

**VI:** Cấu hình một background worker tự động làm mới (refresh) các Materialized Views một cách bất đồng bộ dựa trên trigger từ Redis Event.

## Folder structure | Cấu trúc thư mục

```
days/day-18-materialized-views-worker/
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
