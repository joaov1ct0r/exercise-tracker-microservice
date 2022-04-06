import 'dotenv/config';

import express from 'express';

import cors from 'cors';

import dbConnection from './config/database.js';

import userRouter from './routes/userRoutes.js';

const app = express();

dbConnection();

app.use(express.json());
