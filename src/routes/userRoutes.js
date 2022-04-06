import express from 'express';

import {
    handleNewUser,
    handleNewExercise
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/users', handleNewUser);

export default userRouter;
