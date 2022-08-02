import { ObjectId, Document } from "mongoose";

export default interface IUserModel extends Document {
  username: string;
  _id?: ObjectId;
}
