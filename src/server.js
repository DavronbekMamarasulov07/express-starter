import express from "express";
import "dotenv/config";
import connectDB from "./config/db.js";

const app = express();
app.use(express.json());
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`),
);
