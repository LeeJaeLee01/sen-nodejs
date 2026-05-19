# Exercises | Bài thực hành — Day 11 | Ngày 11

> **Enterprise Testing Strategies**

## Goal | Mục tiêu

**EN:** Full E2E for multi-tenant API with Testcontainers-isolated DB.

**VI:** Viết bộ kiểm thử E2E hoàn chỉnh cho một API đa nền tảng (Multi-tenant API) sử dụng thư viện Testcontainers để cô lập hoàn toàn môi trường DB.

## Steps | Các bước

**EN:**
1. npm i -D @testcontainers/postgresql redis testcontainers
2. e2e/app.e2e-spec.ts spin Postgres + Redis
3. Test multi-tenant header + CRUD API

**VI:**
1. npm i -D @testcontainers/postgresql redis testcontainers
2. e2e/app.e2e-spec.ts spin Postgres + Redis
3. Test multi-tenant header + CRUD API

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** E2E pass với DB thật trong Docker

**VI:** E2E pass với DB thật trong Docker

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
