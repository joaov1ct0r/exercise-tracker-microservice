import User from "../database/models/userModel";

import { Schema } from "mongoose";

import IUserModel from "../interfaces/IUserModel";

import Exercises from "../database/models/exercisesModel";

import BadRequestError from "../errors/BadRequestError";

export default class CreateExercisesService {
  public async execute(
    userId: string,
    description: string,
    duration: string,
    date: Date
  ): Promise<Object> {
    const user:
      | (IUserModel & {
          _id: Schema.Types.ObjectId | undefined;
        })
      | null = await User.findById({ userId });

    if (user === null) {
      throw new BadRequestError("Usuario não encontrado!");
    }

    const newExercise = await Exercises.create({
      userId,
      description,
      duration,
      date,
    });

    return {
      username: user.username,
      _id: newExercise._id,
      description: newExercise.description,
      duration: Number(newExercise.duration),
      date: newExercise.date.toDateString(),
    };
  }
}
