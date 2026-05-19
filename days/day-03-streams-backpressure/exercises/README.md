# Exercises — Ngày 3: Streams & Backpressure

## Bước 1: Tạo file log mẫu (~50MB)

```bash
node exercises/generate-sample-log.js
```

## Bước 2: Parse với Transform Stream

```bash
node exercises/log-parser.js exercises/sample.log
# npm run day:03
```

**Mục tiêu:** Heap tăng ít (<< kích thước file). Mở rộng: đếm theo level, top IP, v.v.

## Checklist

- [ ] File sample tạo thành công
- [ ] Parser in tổng ERROR và heap delta
- [ ] RAM khi chạy < 50MB (quan sát `htop` hoặc log heap)
