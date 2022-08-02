import express from "express";

import CreateUserController from "../controllers/CreateUserController.js";

import ICreateUserController from "../interfaces/ICreateUserController.js";

import CreateExercisesController from "../controllers/CreateExercisesController.js";

import ICreateExercisesController from "../interfaces/ICreateExercisesController.js";

import {
  handleNewUser,
  handleNewExercise,
  handleAllUsers,
  handleUserLog,
} from "../controllers/userController.js";

const userRouter = express.Router();

const createUserController: ICreateUserController = new CreateUserController();

const createExercisesController: ICreateExercisesController =
  new CreateExercisesController();

userRouter.get("/users", handleAllUsers);

userRouter.get("/users/:id/logs", handleUserLog);

userRouter.post("/users", createUserController.handle);

userRouter.post("/users/:_id/exercises", createExercisesController.handle);

export default userRouter;
