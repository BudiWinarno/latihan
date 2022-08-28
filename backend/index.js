import express from "express";
import routerProduk from "./routes/index.js";
import db from "./config/database.js";
import cors from "cors";

const app = express();

try {
  await db.authenticate();
  console.log("Koneksi Database OK");
} catch (error) {
  console.log("Koneksi Database Error");
}

app.use(cors());
app.use(express.json());
app.use("/", routerProduk);

app.listen(5000, () => console.log("Server 5000 Running"));
