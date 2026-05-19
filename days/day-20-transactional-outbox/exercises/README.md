# Exercises | Bài thực hành — Day 20 | Ngày 20

> **NoSQL Integration & Transactional Outbox**

## Goal | Mục tiêu

**EN:** Outbox table + worker publishing to MQ for Elasticsearch sync.

**VI:** Xây dựng luồng Transactional Outbox lưu sự kiện thay đổi dữ liệu vào DB, một worker sẽ đọc và đẩy lên Message Queue để sync qua Elasticsearch.

## Steps | Các bước

**EN:**
1. Bảng outbox_events; transaction ghi order + outbox row
2. Worker poll outbox → publish Redis/RabbitMQ
3. Consumer sync Elasticsearch (hoặc mock index)

**VI:**
1. Bảng outbox_events; transaction ghi order + outbox row
2. Worker poll outbox → publish Redis/RabbitMQ
3. Consumer sync Elasticsearch (hoặc mock index)

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** At-least-once safe sync demo

**VI:** At-least-once safe sync demo

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
