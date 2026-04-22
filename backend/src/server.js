import express from "express";
import dotenv from "dotenv";
import generateRoute from "./routes/generate.js";

dotenv.config();

const app = express();
app.use(express.json());

app.use("/api", generateRoute);

app.listen(5000, () => {
  console.log("🚀 Backend running on port 5000");
});
