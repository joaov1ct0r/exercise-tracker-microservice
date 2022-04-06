import express from 'express';

import { handleNewUser } from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/users', handleNewUser);
