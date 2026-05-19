# Exercises | Bài thực hành — Ngày 1

## Bài 1: Thứ tự microtask vs macrotask (main script)

```bash
node exercises/01-microtask-order.js
# hoặc từ repo gốc: npm run day:01:1
```

**Mục tiêu:** Dự đoán thứ tự in ra trước khi chạy; ghi vào `notes/LEARNINGS.md`.

**Kết quả mong đợi (main):** sync → nextTick → Promise → setTimeout → setImmediate (có thể đổi 2–3 tùy phiên bản/OS).

---

## Bài 2: Block Event Loop + đo latency

**Terminal 1:**
```bash
node exercises/02-block-event-loop.js
```

**Terminal 2:**
```bash
while true; do
  curl -s -o /dev/null -w "health: %{time_total}s\n" http://localhost:3000/health
  sleep 0.3
done
```

**Terminal 3 (kích hoạt block):**
```bash
curl http://localhost:3000/block
```

Ghi latency `/health` trước và trong lúc block vào `LEARNINGS.md`.

---

## Bài 3: setTimeout vs setImmediate trong I/O callback

```bash
node exercises/03-io-callback-order.js
```

**Mục tiêu:** So sánh thứ tự với Bài 1 — trong `fs.readFile` callback, `setImmediate` thường chạy trước `setTimeout(0)`.

---

## Checklist

- [ ] Bài 1 — chạy và giải thích thứ tự
- [ ] Bài 2 — đo latency khi block
- [ ] Bài 3 — so sánh main vs I/O callback
