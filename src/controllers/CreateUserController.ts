import { Request, Response } from "express";

import CreateUserService from "../services/CreateUserService";

import ICreateUserService from "../interfaces/ICreateUserService";

import IUserModel from "../interfaces/IUserModel";

export default class CreateUserController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const username = req.body.username;

    const createUserService: ICreateUserService = new CreateUserService();

    try {
      const user: IUserModel = await createUserService.execute(username);

      return res.status(201).json({ user });
    } catch (err: any) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  }
}
