import express from "express";

import userController from "../controllers/userController";

const userRouter = express.Router();

userRouter.post("/create", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/create'
      #swagger.description = 'Endpoint
      para criar um novo usuário.'
      #swagger.parameters['newUser'] = {
            in: 'body',
            description: 'User information.',
            required: true,
            schema: {
                $name: 'John Doe',
                $email: 'jonhdoe@email.com',
                $password: '123456',
                  }
                }
      #swagger.responses[201] = {
        description: 'Usuário criado com sucesso.'
      }
      #swagger.responses[400] = {
        description: 'Erro ao criar usuário.'
      }
      #swagger.responses[500] = {
        description: 'Erro no servidor.'
      }
      */
  userController.create(req, res);
});

userRouter.get("/list", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/list'
      #swagger.description = 'Endpoint
      para listar todos os usuários.'
      #swagger.responses[200] = {
        description: 'Lista de usuários retornada com sucesso.',
        schema: {
          type: 'array',
          items: {
            $id: 1,
            $name: 'John Doe',
            $email: 'john.doe@example.com'
          }
        }
      }
      } */
  userController.list(req, res);
});

userRouter.get("/list/:id", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/list/{id}'
      #swagger.description = 'Endpoint
      para listar um usuário pelo id.' */
  userController.listById(req, res);
});

userRouter.put("/update/:id", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/update/{id}'
      #swagger.description = 'Endpoint
      para atualizar um usuário pelo id.'
      #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do usuário',
        required: true,
        type: 'integer'
      }
      #swagger.parameters['newUser'] = {
        in: 'body',
        description: 'User information.',
        required: true,
        schema: {
            $name: 'John Doe',
            $email: 'calculte@univer.com',
            $password: '123456',
          }
      */
  userController.update(req, res);
});

userRouter.delete("/delete/:id", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/delete/{id}'
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

userRouter.post("/login", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/login'
      #swagger.description = 'Endpoint
      para realizar login.'
      #swagger.parameters['login'] = {
        in: 'body',
        description: 'User information.',
        required: true,
        schema: {
            $email: 'jon@gamil.com',
            $password: '123456',
          }
      }
      #swagger.responses[200] = {
        description: 'Login realizado com sucesso.'
      }
      #swagger.responses[400] = {
        description: 'Erro ao realizar login.'
      }
      #swagger.responses[500] = {
        description: 'Erro no servidor.'
      }
      */
  userController.login(req, res);
});

userRouter.get("/logout", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/logout'
      #swagger.description = 'Endpoint
      para realizar logout.'
      #swagger.responses[200] = {
        description: 'Logout realizado com sucesso.'
      }
      #swagger.responses[400] = {
        description: 'Erro ao realizar logout.'
      }
      #swagger.responses[500] = {
        description: 'Erro no servidor.'
      }
      */
  userController.logout(req, res);
});

export default userRouter;
