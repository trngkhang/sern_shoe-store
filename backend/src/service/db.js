import mysql from "mysql2";
import "dotenv/config";

// Tạo kết nối đến MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

// Kiểm tra kết nối
db.connect((err) => {
  if (err) {
    console.error("Lỗi kết nối MySQL:", err);
    return;
  }
  console.log("Kết nối MySQL thành công!");
});

export default db;
