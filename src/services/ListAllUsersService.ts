import User from "../database/models/userModel";

import IUserModel from "../interfaces/IUserModel";

export default class ListAllUsersService {
  public async execute(): Promise<IUserModel[]> {
    const users: IUserModel[] = await User.find({});

    return users;
  }
}
