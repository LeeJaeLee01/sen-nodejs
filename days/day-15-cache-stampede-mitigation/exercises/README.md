# Exercises | Bài thực hành — Day 15 | Ngày 15

> **Advanced Caching & Mitigation**

## Goal | Mục tiêu

**EN:** Lock or XFetch (probabilistic early expiration) in NestJS to prevent cache stampede.

**VI:** Triển khai thuật toán khóa phòng ngừa hoặc XFetch (Probabilistic early expiration) trong NestJS để triệt tiêu hoàn toàn rủi ro Cache Stampede.

## Steps | Các bước

**EN:**
1. Redis + Nest CacheModule
2. Mô phỏng stampede: autocannon + cache miss đồng thời
3. Implement mutex lock hoặc XFetch trên getCache

**VI:**
1. Redis + Nest CacheModule
2. Mô phỏng stampede: autocannon + cache miss đồng thời
3. Implement mutex lock hoặc XFetch trên getCache

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Graph latency trước/sau mitigation

**VI:** Graph latency trước/sau mitigation

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
