import express from 'express';

import { userController } from '../controllers/userController';

const userRouter = express.Router();

userRouter.get("/test", (req, res) => {
    userController.test(req, res);
})

userRouter.post("/findbyid", (req, res) => {
    userController.findbyid(req, res);
})

userRouter.post("/create", (req, res) => {
    userController.create(req, res);
})


export default userRouter;