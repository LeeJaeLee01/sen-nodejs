# Exercises | Bài thực hành — Day 17 | Ngày 17

> **Multi-Tenant Isolation Deep Dive**

## Goal | Mục tiêu

**EN:** Optimize tenant connection pool switcher: release and reuse pools efficiently.

**VI:** Tối ưu hóa module switcher connection pool cho kiến trúc đa tenant (separate-schema) để tự động giải phóng và tái sử dụng pool hiệu quả.

## Steps | Các bước

**EN:**
1. TenantConnectionManager: Map tenantId → DataSource
2. TTL evict pool không dùng; max pools config
3. Test 50 tenant switch — không leak connection

**VI:**
1. TenantConnectionManager: Map tenantId → DataSource
2. TTL evict pool không dùng; max pools config
3. Test 50 tenant switch — không leak connection

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Module pool switcher + metrics active pools

**VI:** Module pool switcher + metrics active pools

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
