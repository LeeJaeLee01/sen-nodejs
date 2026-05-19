# Day 1 | Ngày 1 — Event Loop & Libuv: Concepts & Study Questions

# Khái niệm & Câu hỏi ôn tập

> **How to use | Cách dùng:** Answer in your own words (EN, VI, or both). After running `exercises/`, update answers if runtime behavior differs from your prediction.  
> Trả lời bằng lời của bạn (tiếng Anh, Việt, hoặc cả hai). Sau khi chạy `exercises/`, cập nhật lại nếu kết quả khác dự đoán.

---

## 1. Event Loop | Vòng lặp sự kiện


|                    |                                                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------- |
| **Concept (EN)**   | NodeJS's mechainsm iterates through different phases to execute callbacks in main thread                                                    |
| **Khái niệm (VI)** | Cơ chế của Node.js lặp qua các *phase* để thực thi callback (timer, I/O hoàn thành, `setImmediate`, …) trên **một luồng JavaScript chính**. |



| Question (EN)                                                                                              | Câu hỏi (VI)                                                                                    | Your answer / Câu trả lời                                                                                                                                                                                                                                                                                      |
| ---------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **What for?** What problem does the Event Loop solve without spawning a new thread per request?            | **Để làm gì?** Event Loop giải quyết bài toán gì mà không cần tạo thread mới cho mỗi request?   | The event loop lets one JS thread handle many concurrent I/O-bound requests by starting async work and running callbacks when I/O completes, instead of blocking or spawning (khởi tạo) one OS thread per request. *It mainly solves **efficient I/O concurrency** (multiplexing waits), not CPU parallelism.* |
| **Why?** Why does Node use single-thread + event-driven instead of “one thread per connection”?            | **Tại sao?** Vì sao Node chọn single-thread + event-driven thay vì “mỗi connection một thread”? | NodeJS uses a single-thread + event-driven because most server work is I/O-bound: *multiplexing avoids idle threads per connection (lower RAM, less context switching), but cost of blocking the whole process if CPU work runs on the main thread*                                                            |
| **Production:** If one request blocks the loop for 3s, what happens to other requests in the same process? | **Production:** Một request block loop 3 giây thì các request khác trên cùng process ra sao?    |                                                                                                                                                                                                                                                                                                                |


### So sánh một câu | One-line comparison

**Thread per connection** vs **Node: single-thread + event-driven**


|                | Thread per connection                                                                                      | Node: single-thread + event-driven                                        |
| -------------- | ---------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- |
| **Mạnh**       | CPU song song tự nhiên (nhiều core); một connection block ít ảnh hưởng connection khác (nếu tách thread).  | Rất nhiều connection I/O; RAM thấp; ít context switch.                    |
| **Yếu**        | RAM; scale connection; phức tạp sync (lock, race).                                                         | CPU nặng trên main thread; phải thiết kế async / worker.                  |
| **Strengths**  | Natural CPU parallelism (many cores); one blocked connection affects others less when isolated per thread. | Many concurrent I/O connections; lower RAM; less context switching.       |
| **Weaknesses** | High RAM; harder to scale connections; sync complexity (locks, races).                                     | Heavy CPU on main thread; must design async I/O and workers for CPU work. |


---

## 2. Event Loop phases | Các phase của Event Loop

**Order (simplified) | Thứ tự (đơn giản hóa):**  
`timers → pending callbacks → idle/prepare → poll → check → close callbacks`


| Phase                 | Concept (EN)                                             | Khái niệm (VI)                                        |
| --------------------- | -------------------------------------------------------- | ----------------------------------------------------- |
| **timers**            | Runs `setTimeout` / `setInterval` callbacks that are due | Chạy callback `setTimeout` / `setInterval` đã đến hạn |
| **pending callbacks** | Some deferred system callbacks (e.g. TCP errors)         | Một số callback hệ thống được defer (ví dụ lỗi TCP)   |
| **poll**              | Fetch new I/O; wait for and execute I/O callbacks        | Lấy I/O mới; chờ và xử lý callback I/O                |
| **check**             | Runs `setImmediate` callbacks                            | Chạy callback `setImmediate`                          |
| **close callbacks**   | Cleanup on close (e.g. `socket.on('close')`)             | Dọn dẹp khi đóng handle                               |



| Question (EN)                                                                                                                                                       | Câu hỏi (VI)                                                                                                                       | Your answer / Câu trả lời |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- | ------------------------- |
| **What for?** What role does the `poll` phase play in waiting for disk/network data without busy-waiting?                                                           | **Để làm gì?** Phase `poll` “chờ” dữ liệu từ disk/network thế nào mà không busy-wait?                                              |                           |
| **Why?** `setImmediate` is in `check` (after `poll`); `setTimeout(0)` is in `timers` — what does that imply when both are called **inside** `fs.readFile` callback? | **Tại sao?** `setImmediate` ở `check`, `setTimeout(0)` ở `timers` — giải thích gì khi gọi cả hai **trong** callback `fs.readFile`? |                           |
| **Lab:** From main script, which runs first: `setTimeout(0)` or `setImmediate`? Record:                                                                             | **Thực hành:** Từ main script, `setTimeout(0)` hay `setImmediate` chạy trước? Ghi lại:                                             |                           |


---

## 3. Macrotask vs Microtask | Macrotask vs Microtask


| Type          | Examples in Node                                           |
| ------------- | ---------------------------------------------------------- |
| **Macrotask** | `setTimeout`, `setInterval`, `setImmediate`, I/O callbacks |
| **Microtask** | `process.nextTick`, `Promise.then`, `queueMicrotask`       |



| Loại          | Ví dụ trong Node                                          |
| ------------- | --------------------------------------------------------- |
| **Macrotask** | `setTimeout`, `setInterval`, `setImmediate`, callback I/O |
| **Microtask** | `process.nextTick`, `Promise.then`, `queueMicrotask`      |



| Question (EN)                                                                                                                                      | Câu hỏi (VI)                                                                                                       | Your answer / Câu trả lời |
| -------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------ | ------------------------- |
| **What for?** Why have a separate microtask queue instead of putting everything in macrotasks?                                                     | **Để làm gì?** Vì sao cần microtask queue riêng thay vì đưa hết vào macrotask?                                     |                           |
| **Why?** Why does Node drain microtasks (especially `nextTick`) after each phase before moving on? Risk of abusing `nextTick`?                     | **Tại sao?** Vì sao Node ưu tiên drain microtask sau mỗi phase? Rủi ro lạm dụng `nextTick`?                        |                           |
| **Lab:** In `01-microtask-order.js`, do `nextTick` and `Promise.then` run before or after `setTimeout` / `setImmediate`? Explain in 1–2 sentences. | **Thực hành:** Trong output bài 1, `nextTick` và `Promise.then` trước hay sau timer/immediate? Giải thích 1–2 câu: |                           |


---

## 4. `process.nextTick()`


|                    |                                                                                                                                                                                 |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Concept (EN)**   | Schedules a callback to run **right after** the current synchronous code, **before** the event loop continues; Node’s `nextTick` queue runs before the Promise microtask queue. |
| **Khái niệm (VI)** | Đăng ký callback chạy **ngay sau** code đồng bộ hiện tại, **trước** khi Event Loop tiếp tục; hàng `nextTick` chạy trước microtask của Promise.                                  |



| Question (EN)                                                                                    | Câu hỏi (VI)                                                               | Your answer / Câu trả lời |
| ------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------------- | ------------------------- |
| **What for?** When do libraries/core use `nextTick` (e.g. making events async vs sync)?          | **Để làm gì?** Khi nào thư viện/core dùng `nextTick` (emit sync vs async)? |                           |
| **Why?** What happens if you recursively schedule `nextTick` forever (starvation of I/O/timers)? | **Tại sao?** `nextTick` lồng vô hạn gây vấn đề gì với I/O và timer?        |                           |


---

## 5. `setImmediate()` vs `setTimeout(fn, 0)`


| Question (EN)                                                                             | Câu hỏi (VI)                                                                               | Your answer / Câu trả lời |
| ----------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------ | ------------------------- |
| **What for?** When do you use `setImmediate` to “yield” back to the loop after I/O?       | **Để làm gì?** Khi nào dùng `setImmediate` để “nhường” loop sau I/O?                       |                           |
| **Why?** Order on main module may differ from inside I/O callback — did you test? Result: | **Tại sao?** Thứ tự trên main module có thể khác trong I/O callback — bạn đã thử? Kết quả: |                           |


---

## 6. Promise & `queueMicrotask`


|                    |                                                                                                            |
| ------------------ | ---------------------------------------------------------------------------------------------------------- |
| **Concept (EN)**   | `Promise.then` / `catch` / `finally` enqueue microtasks (V8); in Node they run after the `nextTick` queue. |
| **Khái niệm (VI)** | `Promise.then` / `catch` / `finally` đưa vào microtask queue (V8); trong Node chạy sau hàng `nextTick`.    |



| Question (EN)                                                               | Câu hỏi (VI)                                                          | Your answer / Câu trả lời |
| --------------------------------------------------------------------------- | --------------------------------------------------------------------- | ------------------------- |
| **What for?** How does async/await relate to microtasks under the hood?     | **Để làm gì?** Async/await liên quan thế nào đến microtask?           |                           |
| **Why?** When can `await` inside a tight loop become a performance problem? | **Tại sao?** `await` trong vòng lặp dày khi nào gây vấn đề hiệu năng? |                           |


---

## 7. Libuv


|                    |                                                                                                |
| ------------------ | ---------------------------------------------------------------------------------------------- |
| **Concept (EN)**   | Cross-platform C library powering Node’s async I/O: event loop, thread pool, timers, DNS, etc. |
| **Khái niệm (VI)** | Thư viện C đa nền tảng: I/O bất đồng bộ, thread pool, timer, DNS cho Node.                     |



| Question (EN)                                                                                                   | Câu hỏi (VI)                                                                       | Your answer / Câu trả lời |
| --------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ------------------------- |
| **What for?** What does libuv do between V8/JavaScript and the OS?                                              | **Để làm gì?** Libuv làm gì giữa V8/JS và hệ điều hành?                            |                           |
| **Why?** Distinguish non-blocking network I/O vs work delegated to the **thread pool** (some fs, crypto, zlib). | **Tại sao?** Phân biệt I/O network non-blocking vs tác vụ đẩy vào **thread pool**. |                           |


---

## 8. Libuv thread pool | Thread pool của Libuv


|                    |                                                                                                           |
| ------------------ | --------------------------------------------------------------------------------------------------------- |
| **Concept (EN)**   | Heavy or OS-limited operations run on worker threads (default pool size: 4, `UV_THREADPOOL_SIZE`).        |
| **Khái niệm (VI)** | Tác vụ nặng hoặc OS không hỗ trợ async native chạy trên worker thread (mặc định 4, `UV_THREADPOOL_SIZE`). |



| Question (EN)                                                                                | Câu hỏi (VI)                                                                 | Your answer / Câu trả lời |
| -------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------- | ------------------------- |
| **What for?** What can the pool do while keeping the JS thread free?                         | **Để làm gì?** Pool giúp làm gì mà vẫn không block luồng JS?                 |                           |
| **Why?** 100 concurrent `bcrypt.hash` calls on a pool of 4 — expected latency behavior?      | **Tại sao?** 100 request `bcrypt.hash` với pool 4 thread — latency mong đợi? |                           |
| **Production:** When increase `UV_THREADPOOL_SIZE` vs change architecture (workers/cluster)? | **Production:** Khi nào tăng `UV_THREADPOOL_SIZE` vs đổi kiến trúc?          |                           |


---

## 9. Blocking the Event Loop | Block Event Loop


|                    |                                                                                                                                      |
| ------------------ | ------------------------------------------------------------------------------------------------------------------------------------ |
| **Concept (EN)**   | Long **synchronous, CPU-bound** work on the main thread (`while` loops, huge `JSON.parse`, sync crypto) **freezes** the entire loop. |
| **Khái niệm (VI)** | Code **đồng bộ, CPU-bound** chạy lâu trên luồng chính **đóng băng** toàn bộ Event Loop.                                              |



| Question (EN)                                                                                  | Câu hỏi (VI)                                                                             | Your answer / Câu trả lời                          |
| ---------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------- | -------------------------------------------------- |
| **What for?** What metric should you measure in `02-block-event-loop.js` when `/block` is hit? | **Để làm gì?** Bài 2 nên đo metric gì khi gọi `/block`?                                  |                                                    |
| **Why?** How do `cluster` vs `worker_threads` address blocking differently? (preview Day 4)    | **Tại sao?** `cluster` vs `worker_threads` xử lý block khác nhau thế nào? (gợi ý Ngày 4) |                                                    |
| **Lab:** `/health` latency (ms) — Before: ___                                                  | During block: ___                                                                        | **Thực hành:** Latency `/health` (ms) — Trước: ___ |


---

## 10. Sync vs Async I/O | Đồng bộ vs Bất đồng bộ


| Question (EN)                                                                                                     | Câu hỏi (VI)                                                                                           | Your answer / Câu trả lời |
| ----------------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ------------------------- |
| **What for?** `fs.readFile` vs `fs.readFileSync` — when must you **never** use Sync on an HTTP server?            | **Để làm gì?** `readFile` vs `readFileSync` — khi nào **không bao giờ** dùng Sync trên HTTP server?    |                           |
| **Why?** Does “Node is non-blocking” mean **all** Node code is non-blocking, or only **correct** async I/O usage? | **Tại sao?** “Node non-blocking” có nghĩa **mọi** code đều không block hay chỉ khi dùng I/O đúng cách? |                           |


---

## 11. Call stack & task queues | Call stack & hàng đợi tác vụ


|                    |                                                                                                 |
| ------------------ | ----------------------------------------------------------------------------------------------- |
| **Concept (EN)**   | Call stack runs synchronous code; when empty, the event loop pulls callbacks from phase queues. |
| **Khái niệm (VI)** | Call stack chạy code đồng bộ; khi rỗng, Event Loop lấy callback từ queue/phase.                 |



| Question (EN)                                                                                     | Câu hỏi (VI)                                                                     | Your answer / Câu trả lời |
| ------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ------------------------- |
| **What for?** What debugging benefits come from understanding the call stack?                     | **Để làm gì?** Hiểu call stack giúp debug gì?                                    |                           |
| **Why?** Why does `console.log('sync')` always run before `setTimeout(..., 0)` even at 0ms delay? | **Tại sao?** `console.log('sync')` luôn trước `setTimeout(..., 0)` dù delay 0ms? |                           |


---

## Quick summary | Bảng tóm tắt nhanh


| Concept / Khái niệm | One sentence (EN)                                                                                                                                                                                               | Một câu (VI)                                                                                                                             |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Event Loop          | Node.js's core mechanism. It continously loops through specific phases (timer, I/O xong, setImmediate, đóng socket, …) to execute their respective callbacks sequentially on the single main JavaScript thread. | specific: cụ thểrespective: tương ứngsequentially: tuần tự                                                                             |
| poll phase          |                                                                                                                                                                                                                 | Nhiệm vụ cốt lõi của Poll phase là **lắng nghe, chờ đợi và xử lý các callback liên quan đến các tác vụ I/O (Input/Output)** đã hoàn tất. |
| Macrotask           |                                                                                                                                                                                                                 |                                                                                                                                          |
| Microtask           |                                                                                                                                                                                                                 |                                                                                                                                          |
| nextTick            |                                                                                                                                                                                                                 |                                                                                                                                          |
| setImmediate        |                                                                                                                                                                                                                 |                                                                                                                                          |
| Libuv               |                                                                                                                                                                                                                 |                                                                                                                                          |
| Thread pool         |                                                                                                                                                                                                                 |                                                                                                                                          |
| Block loop          |                                                                                                                                                                                                                 |                                                                                                                                          |


---

## End-of-day quiz | Tự kiểm tra cuối ngày


| #   | Question (EN)                                                                         | Câu hỏi (VI)                                                                     | Answer / Trả lời |
| --- | ------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------- | ---------------- |
| 1   | Why does `Promise.then` run before `setTimeout(0)` in `01-microtask-order.js`?        | Vì sao `Promise.then` chạy trước `setTimeout(0)` trong bài 1?                    |                  |
| 2   | What is `setImmediate` used for after processing a large I/O chunk?                   | `setImmediate` dùng để làm gì sau khi xử lý chunk I/O lớn?                       |                  |
| 3   | Why is 10 rounds of bcrypt on the main thread an anti-pattern in NestJS/Express?      | Vì sao bcrypt trên main thread là anti-pattern trên API?                         |                  |
| 4   | Describe order: sync → nextTick → Promise → timer → immediate in a typical poll turn. | Mô tả thứ tự: sync → nextTick → Promise → timer → immediate trong một vòng poll. |                  |
| 5   | First thing you check when production reports high **Event Loop lag**?                | Điều đầu tiên kiểm tra khi production báo **Event Loop lag** cao?                |                  |


---

## What I understood | Điều đã hiểu

**EN:**

- 

**VI:**

- 

---

## Open questions | Câu hỏi còn lại

**EN:**

- 

**VI:**

- 

---

## Links | Liên kết tài liệu

- [Node.js — Event Loop (EN)](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [Libuv design overview (EN)](https://docs.libuv.org/en/v1.x/design.html)
- Exercises | Bài thực hành: `../exercises/01-microtask-order.js`, `../exercises/02-block-event-loop.js`

