# Exercises | Bài thực hành — Day 7 | Ngày 7

> **Advanced Interceptors & Custom Decorators**

## Goal | Mục tiêu

**EN:** RBAC/ABAC with Custom Decorator, Guard, and Reflector for dynamic tenant permissions.

**VI:** Thiết kế hệ thống phân quyền nâng cao (RBAC/ABAC) bằng cách kết hợp Custom Decorator, Guard và Reflector để quét quyền động của Tenant.

## Steps | Các bước

**EN:**
1. nest new rbac-lab --skip-git
2. @Permissions(), PermissionsGuard, Reflector đọc metadata
3. Mock tenant permissions map; test 403 khi thiếu quyền

**VI:**
1. nest new rbac-lab --skip-git
2. @Permissions(), PermissionsGuard, Reflector đọc metadata
3. Mock tenant permissions map; test 403 khi thiếu quyền

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Decorator + Guard hoạt động với tenant động

**VI:** Decorator + Guard hoạt động với tenant động

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
