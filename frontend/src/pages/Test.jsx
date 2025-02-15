import { useEffect, useState } from "react";
import axios from "axios";

export default function Test() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    axios
      .get("/api/test")
      .then((response) => {
        console.log("v", response);
        setMessage(response.data[0]?.message || "Không có dữ liệu");
      })
      .catch((error) => {
        setMessage("Lỗi kết nối đến server");
        console.error(error);
      });
  }, []);

  return (
    <div className="">
      <h2>🔗 Kiểm tra kết nối MySQL - Express - React</h2>
      <p>{message}</p>
    </div>
  );
}
