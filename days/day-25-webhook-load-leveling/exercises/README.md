# Exercises | Bài thực hành — Day 25 | Ngày 25

> **Data Ingestion & Backpressure Handling**

## Goal | Mục tiêu

**EN:** Webhook endpoint surviving ~5k req/s by pushing payloads to Redis first.

**VI:** Viết một endpoint webhook có khả năng chịu tải đột biến 5,000 req/s bằng cách đẩy trực tiếp payload vào Redis nhằm giảm tải ngay cho hệ thống.

## Steps | Các bước

**EN:**
1. POST /webhook → LPUSH redis queue → 202 Accepted
2. Worker BRPOP batch insert DB
3. autocannon 5k req/s — server không OOM

**VI:**
1. POST /webhook → LPUSH redis queue → 202 Accepted
2. Worker BRPOP batch insert DB
3. autocannon 5k req/s — server không OOM

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Metrics queue depth + insert rate

**VI:** Metrics queue depth + insert rate

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
