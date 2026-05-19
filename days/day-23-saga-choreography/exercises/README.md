# Exercises | Bài thực hành — Day 23 | Ngày 23

> **Distributed Transactions & Saga Pattern**

## Goal | Mục tiêu

**EN:** Order–Payment–Inventory saga via message broker with rollback on payment failure.

**VI:** Viết luồng xử lý Đặt hàng - Thanh toán - Trừ kho áp dụng Saga Choreography qua Message Broker, có xử lý hoàn tác (rollback dữ liệu) nếu thanh toán lỗi.

## Steps | Các bước

**EN:**
1. 3 services hoặc modules: Order, Payment, Inventory
2. Events: OrderCreated → Payment → Inventory / compensate
3. PaymentFailed → release inventory + cancel order

**VI:**
1. 3 services hoặc modules: Order, Payment, Inventory
2. Events: OrderCreated → Payment → Inventory / compensate
3. PaymentFailed → release inventory + cancel order

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Saga choreography diagram + demo

**VI:** Saga choreography diagram + demo

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
