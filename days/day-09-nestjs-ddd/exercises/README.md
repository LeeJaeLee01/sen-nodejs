# Exercises | Bài thực hành — Day 9 | Ngày 9

> **Domain-Driven Design (DDD) trong NestJS**

## Goal | Mục tiêu

**EN:** Refactor a CRUD module to DDD with domain logic independent of framework and DB.

**VI:** Refactor một module CRUD cũ sang chuẩn kiến trúc DDD, bảo đảm Domain Logic cô lập hoàn toàn, không phụ thuộc vào framework hay DB.

## Steps | Các bước

**EN:**
1. Tạo domain/ entity, value object, repository interface
2. application/ use case không import @nestjs/common
3. infrastructure/ TypeORM adapter; presentation/ controller mỏng

**VI:**
1. Tạo domain/ entity, value object, repository interface
2. application/ use case không import @nestjs/common
3. infrastructure/ TypeORM adapter; presentation/ controller mỏng

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** CRUD Product tách domain khỏi Nest/DB

**VI:** CRUD Product tách domain khỏi Nest/DB

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
