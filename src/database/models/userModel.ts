import { Schema, model } from "mongoose";

import IUserModel from "../../interfaces/IUserModel";

const userSchema = new Schema<IUserModel>({
  username: { type: String, unique: true, required: true },
});

const User = model<IUserModel>("User", userSchema);

export default User;
