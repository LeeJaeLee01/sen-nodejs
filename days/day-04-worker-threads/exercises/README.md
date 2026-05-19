# Exercises — Ngày 4: Worker Threads

```bash
node exercises/benchmark-hash.js
# npm run day:04
```

**Mục tiêu:** So sánh thời gian main thread vs 4 workers. Ghi speedup vào `LEARNINGS.md`.

**Tùy chỉnh:** `ROUNDS=500 WORKERS=8 node exercises/benchmark-hash.js`

## Checklist

- [ ] Chạy benchmark, ghi ms main vs workers
- [ ] Giải thích vì sao workers nhanh hơn với tác vụ CPU-bound
