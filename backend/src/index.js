import express from "express";
import indexRoutes from "./routes/index.routes.js";
import cors from "cors";
const app = express();
app.use(cors());
app.use(express.json());
const port = 3001;

app.use("/api", indexRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
