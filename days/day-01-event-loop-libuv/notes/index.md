# Day 1 — Key concepts | Khái niệm cần nắm

> **Topic:** Event Loop & Libuv Internals  
> **Chi tiết & câu hỏi ôn tập:** [LEARNINGS.md](./LEARNINGS.md)

---

## 1. Big picture | Bức tranh tổng quan

| # | EN | VI |
|---|----|----|
| 1 | **Single-threaded JavaScript** — one main thread runs your application code. | **JavaScript single-thread** — một luồng chính chạy code ứng dụng. |
| 2 | **Event-driven** — work is scheduled as callbacks when events/I/O complete, not by blocking per connection. | **Hướng sự kiện** — công việc được lên lịch qua callback khi sự kiện/I/O xong, không block theo từng connection. |
| 3 | **I/O-bound vs CPU-bound** — servers mostly wait on I/O; CPU-heavy sync work blocks the whole process. | **I/O-bound vs CPU-bound** — server chủ yếu chờ I/O; code CPU sync nặng block cả process. |
| 4 | **Thread per connection** — one OS thread per client; strong for CPU isolation, weak for many idle connections (RAM, context switch). | **Mỗi connection một thread** — mỗi client một OS thread; mạnh về cô lập CPU, yếu khi nhiều connection rảnh (RAM, context switch). |
| 5 | **I/O multiplexing** — one thread watches many handles (sockets, files) via OS primitives (`epoll`, `kqueue`, IOCP). | **Multiplexing I/O** — một thread theo dõi nhiều handle qua cơ chế OS (`epoll`, `kqueue`, IOCP). |

---

## 2. Event Loop | Vòng lặp sự kiện

| EN | VI |
|----|-----|
| Node’s mechanism that **loops through phases** and runs **callbacks on the main JS thread**. | Cơ chế Node **lặp qua các phase** và chạy **callback trên luồng JS chính**. |
| Solves **efficient I/O concurrency** (many waits multiplexed), **not** CPU parallelism on the main thread. | Giải quyết **đồng thời I/O hiệu quả** (gom nhiều lần chờ), **không** phải song song CPU trên main thread. |
| If one request **blocks the loop** (~3s sync CPU work), **all requests in that process stall** until it finishes. | Một request **block loop** (~3s CPU sync) → **mọi request trong process đó bị trì hoãn** đến khi xong. |

**Phase order (simplified) | Thứ tự phase (đơn giản):**  
`timers → pending callbacks → idle/prepare → poll → check → close callbacks`

| Phase | EN | VI |
|-------|----|----|
| **timers** | Runs due `setTimeout` / `setInterval` callbacks. | Chạy callback `setTimeout` / `setInterval` đã đến hạn. |
| **pending callbacks** | Deferred system callbacks (e.g. some TCP errors). | Callback hệ thống được defer (ví dụ lỗi TCP). |
| **poll** | Waits for I/O; runs I/O-related callbacks (network, disk). | Chờ I/O; chạy callback liên quan I/O (mạng, disk). |
| **check** | Runs `setImmediate` callbacks. | Chạy callback `setImmediate`. |
| **close callbacks** | Cleanup when handles close (e.g. `socket.on('close')`). | Dọn dẹp khi đóng handle (ví dụ `socket.on('close')`). |

---

## 3. Task queues | Hàng đợi tác vụ

| Concept | EN | VI |
|---------|----|----|
| **Call stack** | Runs synchronous code; must empty before the event loop takes the next callback. | Chạy code đồng bộ; phải rỗng trước khi Event Loop lấy callback tiếp theo. |
| **Macrotask** | Scheduled in event-loop phases: `setTimeout`, `setInterval`, `setImmediate`, I/O callbacks. | Lên lịch theo phase: `setTimeout`, `setInterval`, `setImmediate`, callback I/O. |
| **Microtask** | Higher-priority queue: `process.nextTick`, `Promise.then`, `queueMicrotask`. | Hàng ưu tiên cao hơn: `process.nextTick`, `Promise.then`, `queueMicrotask`. |
| **Drain microtasks** | Node runs microtasks (especially `nextTick`) between phases — can starve I/O if abused. | Node chạy microtask (đặc biệt `nextTick`) giữa các phase — lạm dụng có thể “đói” I/O. |

**Typical order (one turn) | Thứ tự thường gặp:**  
`sync` → `nextTick` → `Promise` / `queueMicrotask` → macrotask (`timer` / `immediate` / I/O)

| API | EN | VI |
|-----|----|----|
| **`process.nextTick()`** | Runs **right after** current sync code, **before** the loop continues; **before** Promise microtasks. | Chạy **ngay sau** code sync hiện tại, **trước** khi loop tiếp tục; **trước** microtask Promise. |
| **`Promise.then` / async-await** | Enqueues microtasks; in Node, after the `nextTick` queue. | Đưa vào microtask; trong Node, sau hàng `nextTick`. |
| **`setImmediate()`** | Macrotask in **check** phase (after **poll**). | Macrotask ở phase **check** (sau **poll**). |
| **`setTimeout(fn, 0)`** | Macrotask in **timers** phase; order vs `setImmediate` depends on context (main vs I/O callback). | Macrotask ở phase **timers**; thứ tự với `setImmediate` phụ thuộc ngữ cảnh (main vs trong callback I/O). |

---

## 4. Libuv

| Concept | EN | VI |
|---------|----|----|
| **Libuv** | Cross-platform C library: Node’s async I/O, timers, DNS, and event loop integration with the OS. | Thư viện C đa nền tảng: I/O bất đồng bộ, timer, DNS, tích hợp Event Loop với OS. |
| **Non-blocking network I/O** | Handled via OS multiplexing; JS thread stays free while waiting. | Xử lý qua multiplexing OS; luồng JS không block khi chờ. |
| **Thread pool** | Some work (parts of `fs`, `crypto`, `zlib`, DNS) runs on worker threads (default **4**, tune with `UV_THREADPOOL_SIZE`). | Một số tác vụ (`fs`, `crypto`, `zlib`, DNS) chạy trên worker thread (mặc định **4**, chỉnh bằng `UV_THREADPOOL_SIZE`). |
| **Pool saturation** | Many concurrent pool jobs (e.g. 100 `bcrypt.hash`) queue up — latency grows; fix with architecture, not only pool size. | Nhiều job pool đồng thời (ví dụ 100 `bcrypt.hash`) xếp hàng — latency tăng; cần kiến trúc, không chỉ tăng pool. |

---

## 5. Blocking & I/O style | Block loop & kiểu I/O

| Concept | EN | VI |
|---------|----|----|
| **Blocking the event loop** | Long **sync, CPU-bound** work on the main thread freezes timers, I/O callbacks, and other requests. | Code **sync, CPU-bound** lâu trên main thread làm đóng băng timer, callback I/O và request khác. |
| **Sync vs async I/O** | `fs.readFileSync` blocks the loop; `fs.readFile` does not block while waiting — use async on HTTP servers. | `readFileSync` block loop; `readFile` không block lúc chờ — trên HTTP server dùng async. |
| **“Node is non-blocking”** | Means **correct async I/O usage**, not that every line of code is non-blocking. | Có nghĩa **dùng I/O async đúng cách**, không phải mọi dòng code đều không block. |
| **Event loop lag** | Production symptom of blocking or overload; measure and trace CPU work on the main thread. | Triệu chứng production khi block hoặc quá tải; đo và truy vết CPU trên main thread. |

---

## 6. Production checklist | Gợi ý production

| EN | VI |
|----|-----|
| Never run heavy **sync crypto / JSON / loops** on the request path in NestJS/Express. | Không chạy **crypto sync / JSON lớn / vòng lặp nặng** trên luồng xử lý request NestJS/Express. |
| Prefer **workers / cluster / external service** for CPU-bound work. | Ưu tiên **worker / cluster / service riêng** cho tác vụ CPU-bound. |
| After large I/O chunks, **`setImmediate`** can yield so other callbacks run. | Sau chunk I/O lớn, **`setImmediate`** giúp “nhường” loop cho callback khác. |
| Tune **`UV_THREADPOOL_SIZE`** only when pool-bound; otherwise change architecture. | Chỉ tăng **`UV_THREADPOOL_SIZE`** khi thật sự nghẽn pool; không thì đổi kiến trúc. |

---

## 7. Exercises | Bài thực hành

| Script | EN | VI |
|--------|----|----|
| `01-microtask-order.js` | Order: `nextTick` / `Promise` vs `setTimeout` / `setImmediate`. | Thứ tự: `nextTick` / `Promise` vs `setTimeout` / `setImmediate`. |
| `02-block-event-loop.js` | Block loop; measure `/health` latency impact. | Block loop; đo ảnh hưởng latency `/health`. |
| `03-io-callback-order.js` | `setImmediate` vs `setTimeout(0)` inside I/O callback. | `setImmediate` vs `setTimeout(0)` trong callback I/O. |

```bash
npm run day:01:1
npm run day:01:2
npm run day:01:3
```

---

## Links | Liên kết

- [Node.js — Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [Libuv design overview](https://docs.libuv.org/en/v1.x/design.html)
- [LEARNINGS.md](./LEARNINGS.md) — study questions & your answers
