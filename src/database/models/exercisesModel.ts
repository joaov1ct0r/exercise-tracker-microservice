import { Schema, model } from "mongoose";

import IExercisesModel from "../../interfaces/IExercisesModel";

const exercisesSchema = new Schema<IExercisesModel>({
  userId: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, min: 1, required: true },
  date: { type: Date, default: Date.now },
});

const Exercises = model<IExercisesModel>("Exercises", exercisesSchema);

export default Exercises;
