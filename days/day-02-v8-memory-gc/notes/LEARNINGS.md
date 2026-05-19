# Day 2 | Ngày 2 — Learning Notes | Ghi chú học tập

> **Topic | Chủ đề:** V8 Engine & Quản lý bộ nhớ

---

## Core concepts | Khái niệm cốt lõi

**EN:** V8 memory layout (Heap/Stack, New/Old Space). Garbage Collection (Scavenge, Mark-Sweep-Compact).

**VI:** Cấu trúc bộ nhớ V8 (Heap/Stack, New/Old Space). Cơ chế Garbage Collection (Scavenge, Mark-Sweep-Compact).

---

## Daily practice | Nhiệm vụ thực hành

**EN:** Profile an intentional memory leak with Clinic.js or Chrome DevTools; find and fix it completely.

**VI:** Sử dụng Clinic.js (Bubbleprof/Flame) hoặc Chrome DevTools để profile một ứng dụng dính lỗi Memory Leak cố ý. Tìm và fix lỗi triệt để.

---

## Reflection questions | Câu hỏi ôn tập

### What is it for? | Để làm gì?


| Question (EN)                                        | Câu hỏi (VI)                                           | Your answer / Câu trả lời                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                        |
| ---------------------------------------------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| What real-world problem does today's topic solve?    | Chủ đề hôm nay giải quyết bài toán thực tế nào?        | **Bài toán thực tế**- **Memory leak — process “càng chạy càng nặng”**Cache global, listener không gỡ, closure giữ reference, mảng/object không bao giờ được GC… Heap/RSS tăng dần → **chậm, GC liên tục, cuối cùng OOM** và process bị kill (K8s restart pod). Bài lab /leak mô phỏng đúng kiểu này: mỗi request thêm ~1MB vào leakCache mà không giải phóng.- **Latency bất thường do Garbage Collection**GC (Scavenge, Mark-Sweep-Compact) có lúc **tạm dừng main thread** (stop-the-world). Không hiểu New/Old Space → khó giải thích vì sao API đôi lúc **spike vài trăm ms** dù CPU không cao.- **“Tăng RAM là xong” nhưng không fix gốc**Chỉ tăng --max-old-space-size hoặc limit container mà **không profile** → che triệu chứng, leak vẫn còn → vẫn crash sau vài ngày/tuần.- **Không biết đo và sửa có hệ thống**Chủ đề hôm nay đưa công cụ/quy trình: process.memoryUsage(), heap snapshot, Clinic.js/DevTools → **tìm object còn sống**, sửa reference (như /fix xóa cache), xác nhận heap ổn định.EN: Today's topic solve problem related to process Node run production memory leak (out of memory) or GC slowdowns caused by poor understanding of V8 memory management. |
| Where would you use this in a NestJS production API? | Bạn sẽ dùng điều này ở đâu trên API NestJS production? | **EN:***Use V8/memory knowledge wherever Nest keeps long-lived data: singleton caches, gateways, queues, large DB reads, and in-process uploads — plus ops (memory limits, metrics, heap profiling) when RSS grows or GC pauses spike latency.***VI:***Áp dụng ở mọi chỗ Nest **giữ dữ liệu lâu**: cache singleton, WebSocket gateway, queue consumer, query/load dữ liệu lớn, upload in-memory — và ở tầng **ops** (limit RAM K8s, metric heap, profile khi RSS tăng dần hoặc latency giật do GC).*                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |


### Why does it matter? | Tại sao quan trọng?


| Question (EN)                                                  | Câu hỏi (VI)                                               | Your answer / Câu trả lời |
| -------------------------------------------------------------- | ---------------------------------------------------------- | ------------------------- |
| What breaks if you ignore this concept?                        | Điều gì xảy ra nếu bỏ qua khái niệm này?                   |                           |
| How does this relate to performance, reliability, or security? | Liên quan thế nào tới hiệu năng, độ tin cậy, hoặc bảo mật? |                           |


### Hands-on | Thực hành


| Question (EN)                                        | Câu hỏi (VI)                                 | Your answer / Câu trả lời |
| ---------------------------------------------------- | -------------------------------------------- | ------------------------- |
| What did you observe when running today's exercises? | Bạn quan sát được gì khi chạy bài thực hành? |                           |
| What surprised you compared to your prediction?      | Điều gì khác so với dự đoán ban đầu?         |                           |


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

## Links | Liên kết

- 

