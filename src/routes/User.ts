import express from "express";
import userController from "../controllers/user.controller";

const userRouter = express.Router();

userRouter.post("/create", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/create'
      #swagger.description = 'Endpoint para criar um novo usuário.'
      #swagger.parameters['newUser'] = {
            in: 'body',
            description: 'Informações do usuário.',
            required: true,
            schema: {
                $name: 'John Doe',
                $email: 'john.doe@email.com',
                $password: '123456',
                $phone: '+5511999999999',
                  }
                }
      #swagger.responses[201] = {
        description: 'Usuário criado com sucesso.',
        schema: {
          $id: 1,
          $name: 'John Doe',
          $email: 'john.doe@email.com',
          $phone: '+5511999999999'
        }
      }
      #swagger.responses[400] = {
        description: 'Erro ao criar usuário.'
      }
      #swagger.responses[500] = {
        description: 'Erro no servidor.'
      }
      */
  userController.createUser(req, res);
});

userRouter.get("/list", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/list'
      #swagger.description = 'Endpoint para listar todos os usuários.'
      #swagger.responses[200] = {
        description: 'Lista de usuários retornada com sucesso.',
        schema: {
          type: 'array',
          items: {
            $id: 1,
            $name: 'John Doe',
            $email: 'john.doe@example.com',
            $phone: '+5511999999999'
          }
        }
      }
      } */
  userController.list(req, res);
});

userRouter.get("/list/:id", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/{id}'
      #swagger.description = 'Endpoint para listar um usuário pelo ID.'
      #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do usuário',
        required: true,
        schema: {
          type: 'integer'
        }
      }
      #swagger.responses[200] = {
        description: 'Usuário retornado com sucesso.',
        schema: {
          $id: 1,
          $name: 'John Doe',
          $email: 'john.doe@example.com',
          $phone: '+5511999999999'
        }
      }
      #swagger.responses[404] = {
        description: 'Usuário não encontrado.'
      } */
  userController.listById(req, res);
});

userRouter.put("/update/:id", (req, res) => {
  /* 
  #swagger.tags = ['User']
  #swagger.path = '/user/{id}'
  #swagger.description = 'Endpoint para atualizar um usuário pelo ID.'
  
  #swagger.parameters['id'] = {
      in: 'path',
      description: 'ID do usuário',
      required: true,
      schema: {
          type: 'integer'
      }
  }
  #swagger.parameters['updateUser'] = {
      in: 'body',
      description: 'Informações atualizadas do usuário.',
      required: true,
      schema: {
          $name: 'John Doe',
          $email: 'john.doe@email.com',
          $password: '123456',
          $phone: '+5511999999999'
      }
  }
  #swagger.responses[200] = {
      description: 'Usuário atualizado com sucesso.',
      schema: {
        $id: 1,
        $name: 'John Doe',
        $email: 'john.doe@email.com',
        $phone: '+5511999999999'
      }
  }
  #swagger.responses[404] = {
      description: 'Usuário não encontrado.'
  }
  */
  userController.update(req, res);
});

userRouter.delete("/delete/:id", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/{id}'
      #swagger.description = 'Endpoint para deletar um usuário pelo ID.'
      #swagger.parameters['id'] = {
        in: 'path',
        description: 'ID do usuário',
        required: true,
        schema: {
          type: 'integer'
        }
      }
      #swagger.responses[200] = {
        description: 'Usuário deletado com sucesso.'
      }
      #swagger.responses[404] = {
        description: 'Usuário não encontrado.'
      } */
  userController.delete(req, res);
});

userRouter.post("/login", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/login'
      #swagger.description = 'Endpoint para realizar login.'
      #swagger.parameters['login'] = {
        in: 'body',
        description: 'Informações de login do usuário.',
        required: true,
        schema: {
            $email: 'john.doe@email.com',
            $password: '123456',
        }
      }
      #swagger.responses[200] = {
        description: 'Login realizado com sucesso.'
      }
      #swagger.responses[401] = {
        description: 'Senha incorreta.'
      }
      #swagger.responses[404] = {
        description: 'Usuário não encontrado.'
      }
      */
  userController.login(req, res);
});

userRouter.get("/logout", (req, res) => {
  /* #swagger.tags = ['User']
      #swagger.path = '/user/logout'
      #swagger.description = 'Endpoint para realizar logout.'
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
