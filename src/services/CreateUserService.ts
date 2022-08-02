import InternalError from "../errors/InternalError";

import User from "../database/models/userModel";

import { Schema } from "mongoose";

import BadRequestError from "../errors/BadRequestError";

import IUserModel from "../interfaces/IUserModel";

export default class CreateUserService {
  public async execute(username: string): Promise<IUserModel> {
    const user:
      | (IUserModel & {
          _id: Schema.Types.ObjectId | undefined;
        })
      | null = await User.findOne({ username });

    if (user !== null) {
      throw new BadRequestError("Usuario já cadastrado!");
    }

    const newUser: IUserModel & {
      _id: Schema.Types.ObjectId | undefined;
    } = await User.create({ username });

    if (newUser._id === undefined) {
      throw new InternalError("Erro Interno!");
    }

    return newUser;
  }
}
