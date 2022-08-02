import IUserModel from "./IUserModel";

export default interface ICreateUserService {
  execute(username: string): Promise<IUserModel>;
}
