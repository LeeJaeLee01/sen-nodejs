# Exercises | Bài thực hành — Day 6 | Ngày 6

> **NestJS Core Internals & Custom Providers**

## Goal | Mục tiêu

**EN:** Dynamic Config Module fetching secrets from AWS Secrets Manager at bootstrap.

**VI:** Xây dựng một Dynamic Configuration Module tự động fetch các secret key từ AWS Secrets Manager bất đồng bộ ngay lúc ứng dụng bootstrap.

## Steps | Các bước

**EN:**
1. npx @nestjs/cli new nest-config-lab --package-manager npm --skip-git
2. Tạo SecretsModule.registerAsync() với useFactory fetch AWS Secrets Manager
3. Mock AWS SDK khi dev; inject SecretsService vào AppController

**VI:**
1. npx @nestjs/cli new nest-config-lab --package-manager npm --skip-git
2. Tạo SecretsModule.registerAsync() với useFactory fetch AWS Secrets Manager
3. Mock AWS SDK khi dev; inject SecretsService vào AppController

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Module bootstrap load secrets async; test GET /config masked

**VI:** Module bootstrap load secrets async; test GET /config masked

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
