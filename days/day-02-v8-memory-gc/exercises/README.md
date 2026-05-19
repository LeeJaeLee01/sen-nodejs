# Exercises — Ngày 2: V8 & Memory

## Bài 1: Memory leak cố ý

```bash
node --expose-gc exercises/memory-leak-server.js
# npm run day:02
```

**Thử:**
```bash
curl http://localhost:3001/stats
curl http://localhost:3001/leak    # gọi nhiều lần
curl http://localhost:3001/stats
curl http://localhost:3001/gc      # cần --expose-gc
```

**TODO:** Profile với Chrome DevTools (`node --inspect`) hoặc `clinic heapprofiler -- node ...`. Fix leak trong code (đừng giữ reference vô hạn).

## Checklist

- [ ] Quan sát `heapUsed` tăng sau mỗi `/leak`
- [ ] Tìm object giữ reference (global `leakCache`)
- [ ] Fix và xác nhận heap ổn định sau nhiều request
