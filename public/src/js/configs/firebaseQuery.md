```markdown
- `collection(db, "collectionName")`: Truy cập vào một collection.
- `doc(db, "collectionName", "docID")`: Truy cập vào một document cụ thể.
- `query()`: Tạo truy vấn với các điều kiện.
- `where(field, operator, value)`: Áp dụng điều kiện lọc (ví dụ: `==`, `>`, `<`, `>=`, `array-contains`, `in`, `array-contains-any`).
- `orderBy(field, direction)`: Sắp xếp (direction: `asc` hoặc `desc`).
- `limit(n)`: Giới hạn số lượng kết quả.
```