# Day 20 | Ngày 20: NoSQL Integration & Transactional Outbox

> **Phase 03 | Giai đoạn 03** — Database & Caching at Scale | Tối ưu Database & Caching ở Quy mô lớn

## Topic | Chủ đề

**EN:** NoSQL Integration & Transactional Outbox  
**VI:** NoSQL Integration & Transactional Outbox

## Core concepts | Nội dung cốt lõi

**EN:** When to add Elasticsearch/MongoDB. Transactional Outbox for safe SQL → search sync.

**VI:** Khi nào tích hợp Elasticsearch/MongoDB. Triển khai Transactional Outbox Pattern để đồng bộ dữ liệu an toàn từ SQL sang Elasticsearch.

## Daily practice | Nhiệm vụ thực hành

**EN:** Outbox table + worker publishing to MQ for Elasticsearch sync.

**VI:** Xây dựng luồng Transactional Outbox lưu sự kiện thay đổi dữ liệu vào DB, một worker sẽ đọc và đẩy lên Message Queue để sync qua Elasticsearch.

## Folder structure | Cấu trúc thư mục

```
days/day-20-transactional-outbox/
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
