import 'dotenv/config';

import express from 'express';

import cors from 'cors';

import dbConnection from './config/database.js';

import userRouter from './routes/userRoutes.js';

const app = express();

dbConnection();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(cors());

app.use('/api', userRouter);

app.listen(process.env.SERVER_PORT, () => {
    console.log('Server running');
});
