import express from "express";
import {
  createWorkout,
  deleteWorkout,
  getWorkout,
  getWorkouts,
  updateWorkout,
} from "../controllers/workouts.js";
import Workout from "../model/workouts.js";
const router = express.Router();

router.get("/", getWorkouts);
//router.get("/:id", getWorkout);
router.post("/", createWorkout);
router.patch("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);

export default router;
