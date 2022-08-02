import { Request, Response } from "express";

import ListAllUsersService from "../services/ListAllUsersService";

import IListAllUsersService from "../interfaces/IListAllUsersService";

import IUserModel from "../interfaces/IUserModel";

export default class ListAllUsersController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listAllUsersService: IListAllUsersService = new ListAllUsersService();

    try {
      const users: IUserModel[] = await listAllUsersService.execute();

      return res.status(200).json({ users });
    } catch (err: any) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  }
}
