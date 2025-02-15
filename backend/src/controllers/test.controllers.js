import db from "../service/db.js";

export const test = (req, res) => {
  db.query("SELECT * FROM connection_test", (err, results) => {
    if (err) {
      res.status(500).json({ error: "Lỗi truy vấn CSDL" });
      return;
    }
    res.json(results);
  });
};
