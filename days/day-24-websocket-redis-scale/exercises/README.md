# Exercises | Bài thực hành — Day 24 | Ngày 24

> **Real-time Event Streaming & WebSockets Scale**

## Goal | Mục tiêu

**EN:** NestJS + Socket.io Redis adapter cluster; test cross-instance realtime messages.

**VI:** Dựng cụm WebSocket với NestJS kết hợp Socket.io Redis Adapter, kiểm thử việc gửi tin nhắn realtime xuyên suốt giữa các instance chạy độc lập.

## Steps | Các bước

**EN:**
1. 2 instance Nest + Socket.io Redis adapter
2. Client A connect instance 1; emit; Client B instance 2 nhận
3. Optional: SSE endpoint stream ticks

**VI:**
1. 2 instance Nest + Socket.io Redis adapter
2. Client A connect instance 1; emit; Client B instance 2 nhận
3. Optional: SSE endpoint stream ticks

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Screenshot cross-instance message

**VI:** Screenshot cross-instance message

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
