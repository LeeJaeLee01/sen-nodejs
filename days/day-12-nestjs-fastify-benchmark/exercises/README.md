# Exercises | Bài thực hành — Day 12 | Ngày 12

> **Performance & Fastify Adapter**

## Goal | Mục tiêu

**EN:** Benchmark Express vs Fastify at ~10k req/s; reduce module RAM footprint.

**VI:** Benchmark so sánh hiệu năng Express vs Fastify trong NestJS dưới mức tải 10,000 req/s; tối ưu hóa cấu trúc module để giảm ram footprint.

## Steps | Các bước

**EN:**
1. 2 app Nest: main express vs main fastify
2. npx autocannon -c 100 -d 30 http://localhost:PORT/health
3. So sánh req/s và RAM (process.memoryUsage)

**VI:**
1. 2 app Nest: main express vs main fastify
2. npx autocannon -c 100 -d 30 http://localhost:PORT/health
3. So sánh req/s và RAM (process.memoryUsage)

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Bảng benchmark trong deliverables/benchmark.md

**VI:** Bảng benchmark trong deliverables/benchmark.md

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
