import express from "express";
import dotenv from "dotenv";
import workoutRouter from "./routes/workouts.js";
import userRouter from "./routes/user.js";
import mongoose from "mongoose";
import cors from "cors";
const app = express();
dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/workouts", workoutRouter);
app.use("/user", userRouter);
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("connected to db");
  })
  .catch((error) => {
    console.log(error);
  });
app.listen(3000, () => {
  console.log("server started at 3000");
});
