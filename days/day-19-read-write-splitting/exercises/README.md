# Exercises | Bài thực hành — Day 19 | Ngày 19

> **Database Replication & Read/Write Splitting**

## Goal | Mục tiêu

**EN:** TypeORM or Prisma: SELECT → read replica, writes → master.

**VI:** Cấu hình TypeORM hoặc Prisma để tự động định tuyến toàn bộ câu lệnh SELECT sang cụm DB Read Replica, các câu lệnh tạo/sửa về DB Master.

## Steps | Các bước

**EN:**
1. 2 Postgres (master/replica) hoặc mock routing
2. TypeORM Replication config hoặc custom DataSource router
3. Test SELECT → replica, INSERT → master

**VI:**
1. 2 Postgres (master/replica) hoặc mock routing
2. TypeORM Replication config hoặc custom DataSource router
3. Test SELECT → replica, INSERT → master

## Deliverable | Sản phẩm nộp

Lưu vào `deliverables/`:

**EN:** Log query route; handle replication lag note

**VI:** Log query route; handle replication lag note

## Checklist

- [ ] Đọc lý thuyết trong `../README.md`
- [ ] Hoàn thành các bước lab
- [ ] Điền `../notes/LEARNINGS.md`
- [ ] Lưu artifact vào `deliverables/`
