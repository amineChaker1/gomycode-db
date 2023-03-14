import Workout from "../model/workouts.js";
// get all workouts
export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({}).sort({ createdAt: -1 });
    res.status(200).json(workouts);
  } catch (error) {
    res.status(400).json({
      location: "error at getWorkouts ",
      message: error.message,
    });
  }
};
//get a single workout
export const getWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findById(id);
    if (!workout) return res.status(400).json({ error: "no such workout" });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      location: "error at getWorkout ",
      message: error.message,
    });
  }
};
//create a new workout
export const createWorkout = async (req, res) => {
  const { title, load, reps } = req.body;
  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      location: "error at createWorkout ",
      message: error.message,
    });
  }
};
// delete a workout

export const deleteWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndDelete({ _id: id });
    if (!workout) return res.status(400).json({ error: "no such workout" });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      location: "error at deleteWorkout ",
      message: error.message,
    });
  }
};

//update a workout

export const updateWorkout = async (req, res) => {
  try {
    const { id } = req.params;
    const workout = await Workout.findByIdAndUpdate(
      { _id: id },
      { ...req.body }
    );
    if (!workout) return res.status(400).json({ error: "no such workout" });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({
      location: "error at updateWorkout ",
      message: error.message,
    });
  }
};
