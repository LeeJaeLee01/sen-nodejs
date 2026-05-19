# 30-Day Senior Node.js & NestJS Roadmap | Lộ trình 30 ngày

**EN:** Structured practice repo for Node.js internals, enterprise NestJS, database/caching, messaging, and cloud/DevOps.

**VI:** Kho luyện tập có cấu trúc để nâng cao Node.js internals, NestJS doanh nghiệp, database/caching, messaging và cloud/DevOps.

> Docs are **bilingual (EN + VI)**. See [docs/BILINGUAL.md](docs/BILINGUAL.md).

## Quick start | Bắt đầu nhanh

```bash
cd sen-nodejs
docker compose up -d
cd days/day-01-event-loop-libuv
npm run day:01:1   # xem exercises/README.md
```

### Phase 1 scripts | Giai đoạn 1

| Lệnh | Bài |
|------|-----|
| `npm run day:01:1` | Event loop — thứ tự callback |
| `npm run day:01:2` | Block event loop server |
| `npm run day:01:3` | setTimeout vs setImmediate trong I/O |
| `npm run day:02` | Memory leak lab |
| `npm run day:03:gen` + `npm run day:03` | Streams parse log |
| `npm run day:04` | Worker threads benchmark |
| `npm run day:05` | Async error wrapper |

## 5 phases | 5 giai đoạn

| Phase | EN | VI | Days |
|-------|----|----|------|
| [01](phases/phase-01-nodejs-internals/) | Node.js Internals & Performance | Node.js Internals & Hiệu năng | 1–5 |
| [02](phases/phase-02-nestjs-enterprise/) | Advanced NestJS & Enterprise | NestJS nâng cao & Kiến trúc DN | 6–12 |
| [03](phases/phase-03-database-caching/) | Database & Caching at Scale | Database & Caching quy mô lớn | 13–20 |
| [04](phases/phase-04-messaging-event-driven/) | Messaging & Event-Driven | Messaging & Event-Driven | 21–25 |
| [05](phases/phase-05-cloud-devops/) | Cloud, DevOps & Observability | Cloud, DevOps & Observability | 26–30 |

## Daily workflow | Quy trình mỗi ngày

1. Read `days/day-XX-*/README.md` | Đọc README
2. Complete `exercises/` | Làm bài thực hành
3. Fill `notes/LEARNINGS.md` (EN + VI) | Điền ghi chú song ngữ
4. Check `progress/TRACKER.md` | Đánh dấu tiến độ

## Docs | Tài liệu

- [Roadmap](docs/ROADMAP.md)
- [Progress](progress/TRACKER.md)
- [Bilingual convention](docs/BILINGUAL.md)
