# Bilingual documentation | Tài liệu song ngữ

All roadmap docs use **English + Vietnamese** in the same file.

Mọi tài liệu lộ trình dùng **Tiếng Anh + Tiếng Việt** trong cùng một file.

## Format

| Pattern | Example |
|---------|---------|
| Headings | `## Event Loop \| Vòng lặp sự kiện` |
| Concepts | `**Concept (EN):**` … `**Khái niệm (VI):**` … |
| Questions | `Question (EN)` \| `Câu hỏi (VI)` \| `Your answer` |

## Regenerate day docs

```bash
node scripts/generate-roadmap.js
```

Day 1 `notes/LEARNINGS.md` is not overwritten (custom detailed sheet).

Ngày 1 `notes/LEARNINGS.md` không bị ghi đè khi chạy script.
