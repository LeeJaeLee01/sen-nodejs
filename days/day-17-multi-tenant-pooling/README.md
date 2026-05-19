# Day 17 | Ngày 17: Multi-Tenant Isolation Deep Dive

> **Phase 03 | Giai đoạn 03** — Database & Caching at Scale | Tối ưu Database & Caching ở Quy mô lớn

## Topic | Chủ đề

**EN:** Multi-Tenant Isolation Deep Dive  
**VI:** Multi-Tenant Isolation Deep Dive

## Core concepts | Nội dung cốt lõi

**EN:** Shared DB + separate schema multi-tenancy. Dynamic connection pooling without pool exhaustion.

**VI:** Kiến trúc Shared Database + Separate Schema. Quản lý dynamic connection pooling tối ưu, tránh cạn kiệt pool khi số lượng tenant tăng cao.

## Daily practice | Nhiệm vụ thực hành

**EN:** Optimize tenant connection pool switcher: release and reuse pools efficiently.

**VI:** Tối ưu hóa module switcher connection pool cho kiến trúc đa tenant (separate-schema) để tự động giải phóng và tái sử dụng pool hiệu quả.

## Folder structure | Cấu trúc thư mục

```
days/day-17-multi-tenant-pooling/
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
