# Day 2 — Key concepts | Khái niệm cần nắm

> **Topic:** V8 Engine & Memory Management | V8 Engine & Quản lý bộ nhớ  
> **Chi tiết & câu hỏi ôn tập:** [LEARNINGS.md](./LEARNINGS.md)

---

## 1. Big picture | Bức tranh tổng quan

| # | EN | VI |
|---|----|----|
| 1 | **V8** — Google’s JavaScript engine in Node.js; compiles and runs JS, manages heap memory and GC. | **V8** — engine JavaScript của Google trong Node.js; biên dịch/chạy JS, quản lý heap và GC. |
| 2 | **Automatic memory management** — you allocate objects; V8 reclaims unreachable memory via GC (you don’t `free()` manually). | **Quản lý bộ nhớ tự động** — bạn tạo object; V8 thu hồi bộ nhớ không còn reachable qua GC (không `free()` thủ công). |
| 3 | **Long-running Node process** — memory leaks and GC pauses show up over hours/days in production, not only under load tests. | **Process Node chạy lâu** — leak và pause GC thường lộ ra sau giờ/ngày trên production, không chỉ lúc test tải. |
| 4 | **Day 1 vs Day 2** — Day 1: blocking the **event loop** freezes all work for seconds. Day 2: **heap growth / GC** can slow or **kill** the whole process (OOM). | **Ngày 1 vs Ngày 2** — Ngày 1: **block event loop** đóng băng mọi việc vài giây. Ngày 2: **heap tăng / GC** có thể chậm hoặc **giết** process (OOM). |

**Real-world problems this topic solves | Bài toán thực tế:**

| EN | VI |
|----|-----|
| Process **uses more RAM over time** (memory leak) → slow GC → **OOM** / K8s pod restart. | Process **càng chạy càng tốn RAM** (memory leak) → GC chậm → **OOM** / K8s restart pod. |
| **Latency spikes** from GC **stop-the-world** pauses even when CPU looks idle. | **Latency giật** do GC **stop-the-world** dù CPU không cao. |
| Teams only raise `--max-old-space-size` or container RAM **without profiling** — symptom hidden, root cause remains. | Chỉ tăng `--max-old-space-size` hoặc RAM container **không profile** — che triệu chứng, lỗi gốc còn. |

---

## 2. V8 memory layout | Cấu trúc bộ nhớ V8

| Concept | EN | VI |
|---------|----|----|
| **Stack** | Stores **primitives** and **references** for function calls (frames); small, fast, LIFO; freed when call returns. | Lưu **primitive** và **reference** cho lời gọi hàm; nhỏ, nhanh, LIFO; giải phóng khi hàm return. |
| **Heap** | Stores **objects**, arrays, closures, Buffers — allocated dynamically; managed by GC. | Lưu **object**, array, closure, Buffer — cấp phát động; GC quản lý. |
| **New Space (young generation)** | Short-lived objects; collected often by **Scavenge** (fast, copy surviving objects). | Object sống ngắn; GC bằng **Scavenge** (nhanh, copy object còn sống). |
| **Old Space (old generation)** | Objects that survived enough young GC cycles; collected by **Mark-Sweep-Compact** (slower, less frequent). | Object sống sót qua nhiều vòng young GC; GC bằng **Mark-Sweep-Compact** (chậm hơn, ít hơn). |
| **Promotion** | Objects that stay reachable move from New Space → Old Space. | Object vẫn reachable chuyển từ New Space → Old Space. |

---

## 3. Garbage Collection | Thu gom rác

| Concept | EN | VI |
|---------|----|----|
| **Reachability** | GC keeps objects **still referenced** from roots (globals, stack, closures); unreachable objects can be collected. | GC giữ object **còn được reference** từ root (global, stack, closure); object không reachable có thể thu hồi. |
| **Scavenge** | Young-generation GC; copies survivors; good for short-lived allocations (typical request objects). | GC thế hệ trẻ; copy object sống sót; phù hợp cấp phát ngắn hạn (object theo request). |
| **Mark-Sweep-Compact** | Old-generation GC: mark live objects, sweep dead, optionally compact; can pause the main thread longer. | GC thế hệ già: đánh dấu object sống, quét object chết, có thể compact; pause main thread lâu hơn. |
| **Stop-the-world** | GC pauses JS execution on the main thread during parts of collection → API latency spikes. | GC tạm dừng thực thi JS trên main thread → latency API giật. |
| **Generational hypothesis** | Most objects die young; separating young/old makes GC cheaper overall. | Hầu hết object chết sớm; tách young/old giúp GC hiệu quả hơn. |

---

## 4. Memory metrics | Chỉ số bộ nhớ

| Metric | EN | VI |
|--------|----|----|
| **`heapUsed`** | JS heap currently in use (V8); main signal in lab `/stats`. | Heap JS đang dùng (V8); chỉ số chính trong lab `/stats`. |
| **`heapTotal`** | Total heap allocated by V8 (can grow as needed). | Tổng heap V8 đã cấp phát (có thể tăng khi cần). |
| **`rss`** (Resident Set Size) | Total process memory in RAM (heap + native, buffers, code). | Tổng RAM process đang dùng (heap + native, buffer, code). |
| **`external`** | Memory for C++ objects bound to JS (e.g. Buffers). | Bộ nhớ object C++ gắn với JS (ví dụ Buffer). |
| **`arrayBuffers`** | Memory for `ArrayBuffer` / typed arrays. | Bộ nhớ `ArrayBuffer` / typed array. |

**API:** `process.memoryUsage()` — used in `memory-leak-server.js` `/stats`.

| EN | VI |
|----|-----|
| **Monotonic `heapUsed` / `rss` growth** under steady traffic often indicates a **leak**, not normal GC noise. | **`heapUsed` / `rss` tăng đều** dưới traffic ổn định thường là **leak**, không phải nhiễu GC bình thường. |

---

## 5. Memory leak | Rò rỉ bộ nhớ

| Concept | EN | VI |
|---------|----|----|
| **Memory leak** | Objects stay **reachable** but are no longer needed → heap never shrinks → OOM eventually. | Object vẫn **reachable** nhưng không còn cần → heap không giảm → cuối cùng OOM. |
| **Common causes** | Global caches/maps, event listeners not removed, closures holding large data, unbounded arrays, timers holding references. | Cache/map global, listener không gỡ, closure giữ data lớn, mảng không giới hạn, timer giữ reference. |
| **Lab pattern** | `leakCache` global array — each `/leak` adds ~1MB `Buffer`; GC cannot collect while array holds references. | Mảng global `leakCache` — mỗi `/leak` thêm ~1MB `Buffer`; GC không thu hồi khi mảng còn reference. |
| **Fix** | Remove or bound references: clear cache (`/fix`), TTL, weak patterns, Redis instead of in-process store. | Gỡ hoặc giới hạn reference: xóa cache (`/fix`), TTL, dùng Redis thay store in-process. |
| **Manual GC** | `node --expose-gc` + `global.gc()` — for **experiments only**, not a production fix. | `node --expose-gc` + `global.gc()` — chỉ để **thí nghiệm**, không phải fix production. |

---

## 6. Profiling & debugging | Profile & debug

| Tool / practice | EN | VI |
|-----------------|----|----|
| **`/stats` endpoint** | Observe `heapUsedMB` / `rssMB` rise after repeated `/leak`. | Quan sát `heapUsedMB` / `rssMB` tăng sau nhiều lần `/leak`. |
| **Chrome DevTools** | `node --inspect` → Memory → **Heap snapshot**; find retained objects (e.g. `leakCache`, `Buffer`). | `node --inspect` → Memory → **Heap snapshot**; tìm object còn giữ (ví dụ `leakCache`, `Buffer`). |
| **Clinic.js** | `clinic heapprofiler`, Bubbleprof, Flame — visualize heap growth and hot paths. | `clinic heapprofiler`, Bubbleprof, Flame — trực quan hóa tăng heap và đường nóng. |
| **Workflow** | Reproduce leak → snapshot/compare → find retaining path → fix reference → verify heap stable. | Tái hiện leak → snapshot/so sánh → tìm đường giữ reference → sửa → xác nhận heap ổn định. |

---

## 7. NestJS production | Production NestJS

| Where | EN | VI |
|-------|----|----|
| **Singleton `@Injectable()`** | In-memory `Map`/cache without TTL/eviction. | Cache `Map` in-memory không TTL/eviction. |
| **WebSocket Gateway** | `Map<userId, socket>` not cleaned on disconnect. | `Map<userId, socket>` không dọn khi disconnect. |
| **Queues / events** | Bull/Kafka handler retaining large payloads in module scope. | Handler Bull/Kafka giữ payload lớn trong scope module. |
| **ORM / API** | `find()` entire tables, large GraphQL trees, `multer` memory storage for big uploads. | `find()` cả bảng, GraphQL cây lớn, `multer` memory storage file lớn. |
| **Ops** | K8s `resources.limits.memory`, Prometheus `nodejs_heap_*`, alert on RSS trend, heap profile on incident. | K8s `limits.memory`, metric `nodejs_heap_*`, alert xu hướng RSS, heap profile khi sự cố. |

> **Rule:** Don’t only increase `--max-old-space-size` — find **what still holds references**.

> **Nguyên tắc:** Không chỉ tăng `--max-old-space-size` — tìm **cái gì vẫn giữ reference**.

---

## 8. Performance, reliability, security | Hiệu năng, tin cậy, bảo mật

| Area | EN | VI |
|------|----|----|
| **Performance** | Leaks → more GC work → higher latency; large Old Space → longer mark-sweep pauses. | Leak → GC nhiều hơn → latency cao; Old Space lớn → mark-sweep pause lâu. |
| **Reliability** | OOM kill → pod restart → dropped connections / failed requests during recovery. | OOM kill → restart pod → mất kết nối / request fail lúc phục hồi. |
| **Security** | Unbounded in-memory caches can hold sensitive data longer than intended; memory pressure aids DoS. | Cache in-memory không giới hạn giữ dữ liệu nhạy cảm lâu; áp lực bộ nhớ hỗ trợ DoS. |

**If you ignore this | Bỏ qua khái niệm này:**

| EN | VI |
|----|-----|
| “Works on my machine” then **crashes after days**; unexplained **p99 latency**; firefighting with more RAM instead of fixing code. | Chạy local ổn rồi **sập sau vài ngày**; **p99 latency** khó giải thích; chỉ tăng RAM thay vì sửa code. |

---

## 9. Exercises | Bài thực hành

| Route / command | EN | VI |
|---------------|----|----|
| `memory-leak-server.js` | Intentional leak server for profiling practice. | Server leak cố ý để luyện profile. |
| `GET /leak` | Appends ~1MB to global `leakCache`. | Thêm ~1MB vào `leakCache` global. |
| `GET /stats` | Returns `heapUsedMB`, `rssMB`, `leakCacheEntries`. | Trả `heapUsedMB`, `rssMB`, `leakCacheEntries`. |
| `GET /gc` | Triggers `global.gc()` (requires `--expose-gc`). | Gọi `global.gc()` (cần `--expose-gc`). |
| `GET /fix` | Clears `leakCache` — demonstrates proper fix. | Xóa `leakCache` — minh họa fix đúng. |

```bash
node --expose-gc exercises/memory-leak-server.js
# hoặc: npm run day:02

curl http://localhost:3001/stats
curl http://localhost:3001/leak    # gọi nhiều lần
curl http://localhost:3001/stats
curl http://localhost:3001/gc
curl http://localhost:3001/fix
```

**Checklist | Cần làm:**

| EN | VI |
|----|-----|
| See `heapUsed` rise after each `/leak`. | Thấy `heapUsed` tăng sau mỗi `/leak`. |
| Find retaining reference (global `leakCache`). | Tìm reference giữ object (`leakCache` global). |
| Fix and confirm heap stable after many requests. | Sửa và xác nhận heap ổn định sau nhiều request. |

---

## Links | Liên kết

- [V8 — Trash talk (GC)](https://v8.dev/blog/trash-talk)
- [Node.js — Understanding `process.memoryUsage()`](https://nodejs.org/api/process.html#processmemoryusage)
- [Chrome DevTools — Memory profiling](https://developer.chrome.com/docs/devtools/memory-problems/)
- [Clinic.js](https://clinicjs.org/)
- [LEARNINGS.md](./LEARNINGS.md) — reflection questions & your answers
- Exercises: `../exercises/memory-leak-server.js`, `../exercises/README.md`
