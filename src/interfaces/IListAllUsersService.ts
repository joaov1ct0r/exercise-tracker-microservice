import IUserModel from "./IUserModel";

export default interface IListAllUsersService {
  execute(): Promise<IUserModel[]>;
}
