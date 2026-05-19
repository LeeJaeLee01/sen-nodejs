# Day 19 | Ngày 19: Database Replication & Read/Write Splitting

> **Phase 03 | Giai đoạn 03** — Database & Caching at Scale | Tối ưu Database & Caching ở Quy mô lớn

## Topic | Chủ đề

**EN:** Database Replication & Read/Write Splitting  
**VI:** Database Replication & Read/Write Splitting

## Core concepts | Nội dung cốt lõi

**EN:** Read/write splitting, routing SELECT to replica, handling replication lag.

**VI:** Cấu hình phân tách luồng Đọc/Ghi (Read/Write splitting). Điều hướng tự động queries đến Replica và Master. Xử lý độ trễ đồng bộ (Replication Lag).

## Daily practice | Nhiệm vụ thực hành

**EN:** TypeORM or Prisma: SELECT → read replica, writes → master.

**VI:** Cấu hình TypeORM hoặc Prisma để tự động định tuyến toàn bộ câu lệnh SELECT sang cụm DB Read Replica, các câu lệnh tạo/sửa về DB Master.

## Folder structure | Cấu trúc thư mục

```
days/day-19-read-write-splitting/
├── README.md
├── exercises/
├── notes/LEARNINGS.md
└── deliverables/
```

## Checklist

- [ ] Read core theory | Đọc lý thuyết cốt lõi
- [ ] Complete exercises | Hoàn thành bài thực hành
- [ ] Fill `notes/LEARNINGS.md` (EN + VI)
- [ ] Mark done in `progress/TRACKER.md`

## References | Tài liệu tham khảo

- [Node.js Documentation (EN)](https://nodejs.org/en/docs)
- [NestJS Documentation (EN)](https://docs.nestjs.com/)
