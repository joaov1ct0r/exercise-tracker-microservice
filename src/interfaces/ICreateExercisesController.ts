import { Request, Response } from "express";

export default interface ICreateExercisesController {
  handle(req: Request, res: Response): Promise<Response>;
}
