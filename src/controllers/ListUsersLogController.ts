import { Request, Response } from "express";

import ListUsersLogService from "../services/ListUsersLogService";

import IListUsersLogService from "../interfaces/IListUsersLogService";

export default class ListUsersLogController {
  public async handle(req: Request, res: Response): Promise<Response> {
    if (req.params.id === undefined || req.params.id === null) {
      return res.json({ error: "_id não encontrado" });
    }

    const userId = req.params.id;

    const findConditions = {};

    findConditions.userId = userId;

    if (
      (req.query.from !== undefined && req.query.from !== "") ||
      (req.query.to !== undefined && req.query.to !== "")
    ) {
      findConditions.date = {};

      if (req.query.from !== undefined && req.query.from !== "") {
        findConditions.date.$gte = new Date(req.query.from);
      }

      if (req.query.to !== undefined && req.query.to !== "") {
        findConditions.date.$lte = new Date(req.query.to);
      }
    }

    const limit: number =
      req.query.limit !== "" ? parseInt(req.query.limit) : 0;

    const listUsersLogService: IListUsersLogService = new ListUsersLogService();

    try {
      const logs: Object = await listUsersLogService.execute(
        userId,
        findConditions,
        limit
      );

      return res.status(200).json({ logs });
    } catch (err: any) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  }
}
