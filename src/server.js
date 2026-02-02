import express from "express";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ message: "API is working" });
});

const PORT = process.env.PORT || 4200;
app.listen(PORT, () =>
  console.log(`Server running on port http://localhost:${PORT}`),
);
