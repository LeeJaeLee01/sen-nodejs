# Exercises | Bài thực hành — Day 21 | Ngày 21

> **Advanced BullMQ Architecture**

## Goal | Mục tiêu

**EN:** Distributed scraper: master job spawns and tracks dependent child jobs.

**VI:** Thiết kế một hệ thống cào dữ liệu phân tán sử dụng BullMQ, trong đó một Master Job sẽ sinh ra và giám sát tiến độ của nhiều Child Jobs phụ thuộc.

## Steps | Các bước

**EN:**
1. npm i bullmq ioredis
2. FlowProducer: master scrape job → N child URL jobs
3. Track progress; DLQ cho failed children

**VI:**
1. npm i bullmq ioredis
2. FlowProducer: master scrape job → N child URL jobs
3. Track progress; DLQ cho failed children

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Master completes when all children done

**VI:** Master completes when all children done

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
