# Exercises | Bài thực hành — Day 8 | Ngày 8

> **NestJS Monorepo & Microservices**

## Goal | Mục tiêu

**EN:** NestJS monorepo: 2 microservices over gRPC + shared data-access (TypeORM/Prisma).

**VI:** Thiết lập một NestJS Monorepo gồm 2 microservices giao tiếp qua gRPC, chia sẻ chung một thư viện data-access (TypeORM/Prisma).

## Steps | Các bước

**EN:**
1. nest new roadmap-monorepo && nest g app users-service && nest g app orders-service
2. libs/proto + gRPC; Orders gọi Users
3. Shared data-access library (TypeORM hoặc Prisma stub)

**VI:**
1. nest new roadmap-monorepo && nest g app users-service && nest g app orders-service
2. libs/proto + gRPC; Orders gọi Users
3. Shared data-access library (TypeORM hoặc Prisma stub)

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** 2 services gRPC ping/pong + shared lib import

**VI:** 2 services gRPC ping/pong + shared lib import

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
