# Day 4 — Interview questions | Câu hỏi phỏng vấn

> **Topic:** Concurrency & Worker Threads  
> **Study notes:** [LEARNINGS.md](./LEARNINGS.md)

Practice answering out loud. Tie answers to **Day 1** (event loop) and **Day 2** (memory/GC) when relevant.

---

## Fundamentals

1. Why is Node.js described as single-threaded, and what does that mean for CPU-bound work on the main thread?
2. What is the difference between **concurrency** and **parallelism** in Node.js?
3. When would you classify a task as **I/O-bound** vs **CPU-bound**? Give examples from a typical REST API.
4. What happens to other HTTP requests if one handler runs a long synchronous loop or 10 rounds of `bcrypt` on the main thread?
5. Why doesn’t “Node is non-blocking” mean all Node code is non-blocking?

---

## Worker Threads

6. What problem do **Worker Threads** solve that the default Node model does not?
7. How do Worker Threads relate to the main thread and the event loop?
8. How do you create a worker in Node.js? What are `workerData` and `parentPort` used for?
9. Can workers share the same JavaScript heap as the main thread? How is data passed between main and worker?
10. What is the cost of spawning a new worker vs reusing a worker pool?
11. When would you use a **fixed pool** of workers instead of creating one worker per request?
12. Why might CPU-bound work in workers show less than linear speedup when you increase worker count?
13. How does the number of workers relate to `os.cpus().length`?
14. What happens if a worker throws an uncaught exception? How should production code handle worker errors?
15. Can you use `require()` / npm modules inside a worker file? Any caveats?

---

## Worker Threads vs Cluster

16. Compare **Worker Threads** and the **Cluster** module. What does each one parallelize?
17. For a NestJS API that only needs more throughput on **stateless HTTP routes**, would you lean toward cluster, workers, or horizontal scaling (more pods)? Why?
18. For **image resizing** or **PDF generation** inside one Node process, which approach fits better: cluster or worker threads?
19. Does cluster give you shared memory between processes? How is that different from `SharedArrayBuffer` between workers?
20. Can you use cluster and worker threads together in one application? Describe a plausible architecture.

---

## SharedArrayBuffer & advanced

21. What is **SharedArrayBuffer**, and when would you use it instead of `postMessage`?
22. What are **Atomics** used for in the context of SharedArrayBuffer?
23. Why did browsers restrict SharedArrayBuffer (Spectre/Meltdown)? Does that affect Node.js server usage?
24. What are the risks of sharing mutable memory between workers without proper synchronization?

---

## NestJS & production

25. Where in a NestJS production API would you offload work to Worker Threads?
26. Why is running `bcrypt.hashSync` in a controller considered an anti-pattern?
27. Would you run password hashing in a worker thread, a separate microservice, or libuv’s thread pool? Defend your choice.
28. How would you expose a CPU-heavy NestJS endpoint without blocking the event loop for other users on the same pod?
29. What metrics would you watch after introducing a worker pool (latency, CPU, memory, event loop lag)?
30. When should you prefer a **message queue + background worker** over in-process Worker Threads?

---

## System design & trade-offs

31. Your API needs to hash 1 million records for a one-off migration. Outline how you would design the job in Node.
32. A single pod has 4 vCPUs. How many hash workers would you configure, and why?
33. What are the downsides of using too many Worker Threads on a memory-constrained container?
34. How does Worker Thread memory usage differ from running the same logic on the main thread?
35. Compare: (a) sync crypto on main thread, (b) worker pool, (c) dedicated Go/Rust service for crypto. When is each appropriate?

---

## Scenario / debugging

36. Production reports high **event loop lag** but low CPU on one core. What do you investigate first?
37. After adding workers, p99 latency improved but **RSS memory doubled**. What might explain that?
38. Benchmark shows 4 workers only give 1.2× speedup on 8 cores. List possible reasons.
39. A developer says: “We’ll fix slow APIs by making everything async with `async/await`.” What is wrong with that advice for CPU-bound tasks?
40. Walk through what your Day 4 benchmark (`benchmark-hash.js`) measures and what a “good” speedup would depend on.

---

## Quick-fire (short answers)

| # | Question |
|---|----------|
| 41 | Is `worker_threads` the same as Web Workers in the browser? |
| 42 | Does each worker have its own V8 isolate and event loop? |
| 43 | Can workers access `process.env`? |
| 44 | What module do you import for Worker Threads? |
| 45 | Name one task that belongs in libuv’s thread pool, not in `worker_threads`. |
| 46 | Name one task that belongs in `worker_threads`, not on the main thread. |
| 47 | If one worker is busy, does the main thread block waiting for it? |
| 48 | What is `isMainThread` used for? |
| 49 | How do you terminate a worker gracefully from the main thread? |
| 50 | Day 1 preview: how does cluster spread incoming TCP connections across processes? |

---

## Links

- [Node.js — Worker threads](https://nodejs.org/api/worker_threads.html)
- [Node.js — Cluster](https://nodejs.org/api/cluster.html)
- Exercises: `../exercises/benchmark-hash.js`, `../exercises/hash-worker.js`
