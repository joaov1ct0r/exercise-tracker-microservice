import express from 'express';

import {
    handleNewUser,
    handleNewExercise,
    handleAllUsers
} from '../controllers/userController.js';

const userRouter = express.Router();

userRouter.post('/users', handleNewUser);

userRouter.post('/users/:_id/exercises', handleNewExercise);

export default userRouter;
