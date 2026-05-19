# Exercises | Bài thực hành — Day 22 | Ngày 22

> **Message Broker Internals (Kafka/RabbitMQ)**

## Goal | Mục tiêu

**EN:** Idempotent NestJS consumer for Kafka/RabbitMQ duplicate events.

**VI:** Xây dựng một Idempotent Consumer trong NestJS để xử lý các sự kiện từ Kafka/RabbitMQ, đảm bảo dù nhận trùng event hệ thống vẫn không sai lệch.

## Steps | Các bước

**EN:**
1. Kafka/RabbitMQ consumer Nest microservice
2. processed_events(idempotency_key UNIQUE)
3. Gửi duplicate message — count applied once

**VI:**
1. Kafka/RabbitMQ consumer Nest microservice
2. processed_events(idempotency_key UNIQUE)
3. Gửi duplicate message — count applied once

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Idempotent handler test

**VI:** Idempotent handler test

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
