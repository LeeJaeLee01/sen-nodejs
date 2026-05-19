# Exercises | Bài thực hành — Day 16 | Ngày 16

> **Distributed Locks & Race Conditions**

## Goal | Mục tiêu

**EN:** Booking module: no double-booking under concurrent load using Redis distributed lock.

**VI:** Viết một module xử lý đặt vé/giữ chỗ, đảm bảo không bị double-booking khi có hàng ngàn user bấm mua cùng lúc nhờ Redis Distributed Lock.

## Steps | Các bước

**EN:**
1. Redis + ioredis
2. BookingService.reserve(seatId) với Redlock
3. Load test 100 concurrent POST /book cùng seat

**VI:**
1. Redis + ioredis
2. BookingService.reserve(seatId) với Redlock
3. Load test 100 concurrent POST /book cùng seat

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Chỉ 1 booking thành công; log lock acquire/release

**VI:** Chỉ 1 booking thành công; log lock acquire/release

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
