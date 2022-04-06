import express from 'express';

import {
    handleNewUser,
    handleNewExercise,
    handleAllUsers,
    handleUserLog
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.get('/users', handleAllUsers);

userRouter.get('/users/:id/logs', handleUserLog);

userRouter.post('/users', handleNewUser);

userRouter.post('/users/:_id/exercises', handleNewExercise);

export default userRouter;
