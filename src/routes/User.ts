import express from "express";

import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/create", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.description = 'Endpoint
      para criar um novo usuário.' */
  userController.create(req, res);
});

userRouter.get("/list", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.description = 'Endpoint
      para listar todos os usuários.' */
  userController.list(req, res);
});

userRouter.get("/list/:id", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.description = 'Endpoint
      para listar um usuário pelo id.' */
  userController.listById(req, res);
});

userRouter.put("/update/:id", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.description = 'Endpoint
      para atualizar um usuário pelo id.' */
  userController.update(req, res);
});

userRouter.delete("/delete/:id", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.description = 'Endpoint
      para deletar um usuário pelo id.' 
      #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do usuário',
        required: true,
        type: 'integer'
      } */
  userController.delete(req, res);
});

export default userRouter;
