import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongoDB.js";
import userRouter from "./routes/userRouts.js";

const PORT = process.env.PORT || 4000;
const app = express();

app.use(express.json());
app.use(cors());
await connectDB();

app.use("/api/user", userRouter);
app.get("/", (req, res) => res.send("API Working"));

app.listen(PORT, () => {
  console.log("app listening on port " + PORT);
});
