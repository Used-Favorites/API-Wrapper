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

userRouter.get("/list", (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint to list all users.'
       #swagger.path = '/user/list' */

  userController.list(req, res);
});

userRouter.get("/list/:id", (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint to list a user by id.'
       #swagger.path = '/user/list/{id}' */

  userController.listById(req, res);
});

userRouter.put("/update/:id", (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint to update a user by id.'
       #swagger.path = '/user/update/{id}'
       #swagger.parameters['updateUser'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: {
                $name: 'John Doe',
                $email: 'jonhdoe@email.com',
                $password: '123456',
            }
    } */

  userController.update(req, res);
});

userRouter.delete("/delete/:id", (req, res) => {
  /* #swagger.tags = ['User']
       #swagger.description = 'Endpoint to delete a user by id.'
       #swagger.path = '/user/delete/{id}' */

  userController.delete(req, res);
});

export default userRouter;
