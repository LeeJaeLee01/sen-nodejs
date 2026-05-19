# Day 25 | Ngày 25 — Learning Notes | Ghi chú học tập

> **Topic | Chủ đề:** Data Ingestion & Backpressure Handling

---

## Core concepts | Khái niệm cốt lõi

**EN:** Burst webhooks, queue-based load leveling before DB writes.

**VI:** Xử lý lượng lớn dữ liệu đổ về đột biến (Burst Webhooks). Kỹ thuật dùng Queue để hấp thụ tải (Load Leveling) trước khi ghi xuống Database.

---

## Daily practice | Nhiệm vụ thực hành

**EN:** Webhook endpoint surviving ~5k req/s by pushing payloads to Redis first.

**VI:** Viết một endpoint webhook có khả năng chịu tải đột biến 5,000 req/s bằng cách đẩy trực tiếp payload vào Redis nhằm giảm tải ngay cho hệ thống.

---

## Reflection questions | Câu hỏi ôn tập

### What is it for? | Để làm gì?

| Question (EN) | Câu hỏi (VI) | Your answer / Câu trả lời |
|---------------|--------------|---------------------------|
| What real-world problem does today's topic solve? | Chủ đề hôm nay giải quyết bài toán thực tế nào? | |
| Where would you use this in a NestJS production API? | Bạn sẽ dùng điều này ở đâu trên API NestJS production? | |

### Why does it matter? | Tại sao quan trọng?

| Question (EN) | Câu hỏi (VI) | Your answer / Câu trả lời |
|---------------|--------------|---------------------------|
| What breaks if you ignore this concept? | Điều gì xảy ra nếu bỏ qua khái niệm này? | |
| How does this relate to performance, reliability, or security? | Liên quan thế nào tới hiệu năng, độ tin cậy, hoặc bảo mật? | |

### Hands-on | Thực hành

| Question (EN) | Câu hỏi (VI) | Your answer / Câu trả lời |
|---------------|--------------|---------------------------|
| What did you observe when running today's exercises? | Bạn quan sát được gì khi chạy bài thực hành? | |
| What surprised you compared to your prediction? | Điều gì khác so với dự đoán ban đầu? | |

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
