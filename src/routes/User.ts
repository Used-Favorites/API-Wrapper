import express from 'express';

import userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
    userController.test(req, res);
});

export default userRouter;