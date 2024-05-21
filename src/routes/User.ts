import express from "express";

import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/create", (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint to create a new user.'
       #swagger.path = '/user/create'
       #swagger.parameters['newUser'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: {
                $name: 'John Doe',
                $email: 'jonhdoe@email.com',
                $password: '123456',
            }
    } */

  userController.create(req, res);
});

export default userRouter;
