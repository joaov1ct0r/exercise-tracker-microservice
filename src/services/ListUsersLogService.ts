import User from "../database/models/userModel";

import Exercises from "../database/models/exercisesModel";

import IUserModel from "../interfaces/IUserModel";

import BadRequestError from "../errors/BadRequestError";

import { Schema } from "mongoose";

export default class ListUsersLogService {
  public async execute(
    userId: string,
    findConditions: string,
    limit: number
  ): Promise<Object> {
    const user:
      | (IUserModel & {
          _id: Schema.Types.ObjectId | undefined;
        })
      | null = await User.findById(userId);

    if (user === null) {
      throw new BadRequestError("Usuario não encontrado!");
    }

    const exercise = await Exercises.find({ findConditions })
      .sort({ date: "asc" })
      .limit(limit)
      .exec();

    return {
      username: user.username,
      _id: user._id,
      log: exercise.map(function (e) {
        return {
          description: e.description,
          duration: e.duration,
          date: e.date.toDateString(),
        };
      }),
      count: exercise.length,
    };
  }
}
