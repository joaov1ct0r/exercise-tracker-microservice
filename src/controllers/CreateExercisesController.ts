import { Request, Response } from "express";

import CreateExercisesService from "../services/CreateExercisesService";

import ICreateExercisesService from "../interfaces/ICreateExercisesService";

export default class CreateExercisesController {
  public async handle(req: Request, res: Response): Promise<Response> {
    if (req.params._id === undefined) {
      return res.status(400).json({ error: "_id não encontrado!" });
    }

    if (req.body.description === undefined) {
      return res.status(400).json({ error: "description não encontrado!" });
    }

    if (req.body.duration === undefined) {
      return res.status(400).json({ error: "duration não encontrado!" });
    }

    const userId: string = req.params._id;

    const description: string = req.body.description;

    const duration: string = req.body.duration;

    const date: Date =
      req.body.date !== undefined ? new Date(req.body.date) : new Date();

    const createExercisesService: ICreateExercisesService =
      new CreateExercisesService();

    try {
      const exercise: Object = await createExercisesService.execute(
        userId,
        description,
        duration,
        date
      );

      return res.status(201).json({ exercise });
    } catch (err: any) {
      return res.status(err.statusCode).json({ error: err.message });
    }
  }
}
