# Exercises — Ngày 5: Async Error Handling

```bash
node exercises/async-error-wrapper.js
# npm run day:05
```

**TODO trong code:**
1. Thay `console.error` bằng Pino logger structured
2. Thêm field `requestId`, `tenantId` vào `context`
3. (Tuỳ chọn) Gửi payload tới webhook giả lập monitoring

## Checklist

- [ ] `runSafe` bắt lỗi, không crash process
- [ ] Log JSON có `message`, `stack`, `context`, `ts`
- [ ] Mở rộng wrapper cho `Promise.all` / batch tasks
