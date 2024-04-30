import express from 'express';

import userController from '../controllers/userController';

const userRouter = express.Router();

userRouter.get("", (req, res) => {
    userController.HelloWorld(req, res);
});

export default userRouter;