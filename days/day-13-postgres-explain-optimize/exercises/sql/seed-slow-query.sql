-- Ngày 13: Slow query lab
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_id INT NOT NULL,
  status TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- TODO: INSERT dummy data (100k+ rows)
-- TODO: Query JOIN users without index → EXPLAIN ANALYZE
