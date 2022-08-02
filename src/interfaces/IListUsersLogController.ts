import { Request, Response } from "express";

export default interface IListUsersLogController {
  handle(req: Request, res: Response): Promise<Response>;
}
