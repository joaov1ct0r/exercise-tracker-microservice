import { Document } from "mongoose";

export default interface IExercisesModel extends Document {
  userId: string;
  description: string;
  duration: number;
  date: Date;
}
