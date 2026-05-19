# Exercises | Bài thực hành — Day 10 | Ngày 10

> **CQRS Pattern**

## Goal | Mục tiêu

**EN:** Apply CQRS to high-traffic checkout: optimize writes, separate invoice reads.

**VI:** Áp dụng CQRS cho luồng đặt hàng (Checkout Flow) có traffic cao để tối ưu luồng xử lý ghi và tách biệt luồng đọc thông tin hóa đơn.

## Steps | Các bước

**EN:**
1. npm i @nestjs/cqrs
2. CreateOrderCommand + Handler; GetInvoiceQuery + Handler
3. Event OrderCreated → projection read model (in-memory hoặc DB)

**VI:**
1. npm i @nestjs/cqrs
2. CreateOrderCommand + Handler; GetInvoiceQuery + Handler
3. Event OrderCreated → projection read model (in-memory hoặc DB)

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Checkout: command ghi, query đọc invoice tách biệt

**VI:** Checkout: command ghi, query đọc invoice tách biệt

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
