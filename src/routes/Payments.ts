import express from 'express';
const PaymentsRouter = express.Router();
import * as PaymentsController from '../controllers/paymentsController';


// Listar todas as categorias
PaymentsRouter.get('/categories', (req, res) => {
  /* #swagger.tags = ['Payments']
     #swagger.path = '/Payments/categories'
     #swagger.description = 'Endpoint para listar todos os usuários.'
     #swagger.responses[200] = {
       description: 'Lista de categorias retornada com sucesso.',
       schema: {
         type: 'array',
         items: {
           id: 1,
           name: 'Eletronics',
         }
       }
     }
  */
  PaymentsController.getAllCategories(req, res);
});

// Listar uma categoria por ID
PaymentsRouter.get('/categories/:id', (req, res) => {
  /* #swagger.tags = ['Payments']
     #swagger.path = '/Payments/categories/{id}'
     #swagger.description = 'Endpoint para listar uma categoria pelo id.'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID da categoria',
       required: true,
       type: 'integer'
     }
  */
  PaymentsController.getPaymentsById(req, res);
});

// Criar uma nova categoria
PaymentsRouter.post('/categories', (req, res) => {
    console.log('Body received:', req.body);
    console.log('Headers received:', req.headers);
    /* #swagger.tags = ['Payments']
       #swagger.path = '/Payments/categories'
       #swagger.produces = ['application/json']
       #swagger.consumes = ['application/json']
       #swagger.description = 'Endpoint para cadastrar uma nova categoria'
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Payments information.',
         required: true,
         schema: {
             type: 'object',
             properties: {
                 name: {
                     type: 'string',
                     example: 'Geladeira'
                 }
             }
         }
       }
    */
   
    PaymentsController.createPayments(req, res);
  });
  

// Atualizar uma categoria existente
PaymentsRouter.put('/categories/:id', (req, res) => {
  /* #swagger.tags = ['Payments']
     #swagger.path = '/Payments/categories/{id}'
     #swagger.description = 'Endpoint para atualizar uma categoria'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID da categoria',
       required: true,
       type: 'integer'
     }
     #swagger.parameters['newName'] = {
       in: 'body',
       description: 'Payments information.',
       required: true,
       schema: {
         type: 'object',
         properties: {
           name: {
             type: 'string',
             example: 'Eletronics'
           }
         }
       }
     }
  */
  PaymentsController.updatePayments(req, res);
});

// Excluir uma categoria
PaymentsRouter.delete('/categories/:id', (req, res) => {
  /* #swagger.tags = ['Payments']
     #swagger.path = '/Payments/categories/{id}'
     #swagger.description = 'Endpoint para deletar uma categoria pelo id.'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID da categoria',
       required: true,
       type: 'integer'
     }
  */
  PaymentsController.deletePayments(req, res);
});

export default PaymentsRouter;
