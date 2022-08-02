import express from "express";

import cors from "cors";

import dbConnection from "./config/database.js";

import userRouter from "./routes/userRoutes.js";

export default class App {
  public server: express.Application;

  constructor() {
    this.server = express();
    dbConnection();
    this.middlewares();
    this.userRoutes();
  }

  private middlewares() {
    this.server.use(cors());

    this.server.use(express.json());

    this.server.use(express.urlencoded({ extended: true }));
  }

  private userRoutes() {
    this.server.use("/api/user", userRouter);
  }
}
