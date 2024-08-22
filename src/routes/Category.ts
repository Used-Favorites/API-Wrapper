import express from 'express';
const CategoryRouter = express.Router();
import * as categoryController from '../controllers/categoryController';


// Listar todas as categorias
CategoryRouter.get('/categories', (req, res) => {
  /* #swagger.tags = ['Category']
     #swagger.path = '/category/categories'
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
  categoryController.getAllCategories(req, res);
});

// Listar uma categoria por ID
CategoryRouter.get('/categories/:id', (req, res) => {
  /* #swagger.tags = ['Category']
     #swagger.path = '/category/categories/{id}'
     #swagger.description = 'Endpoint para listar uma categoria pelo id.'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID da categoria',
       required: true,
       type: 'integer'
     }
  */
  categoryController.getCategoryById(req, res);
});

// Criar uma nova categoria
CategoryRouter.post('/categories', (req, res) => {
    console.log('Body received:', req.body);
    console.log('Headers received:', req.headers);
    /* #swagger.tags = ['Category']
       #swagger.path = '/category/categories'
       #swagger.produces = ['application/json']
       #swagger.consumes = ['application/json']
       #swagger.description = 'Endpoint para cadastrar uma nova categoria'
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Category information.',
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
   
    categoryController.createCategory(req, res);
  });
  

// Atualizar uma categoria existente
CategoryRouter.put('/categories/:id', (req, res) => {
  /* #swagger.tags = ['Category']
     #swagger.path = '/category/categories/{id}'
     #swagger.description = 'Endpoint para atualizar uma categoria'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID da categoria',
       required: true,
       type: 'integer'
     }
     #swagger.parameters['newName'] = {
       in: 'body',
       description: 'Category information.',
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
  categoryController.updateCategory(req, res);
});

// Excluir uma categoria
CategoryRouter.delete('/categories/:id', (req, res) => {
  /* #swagger.tags = ['Category']
     #swagger.path = '/category/categories/{id}'
     #swagger.description = 'Endpoint para deletar uma categoria pelo id.'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID da categoria',
       required: true,
       type: 'integer'
     }
  */
  categoryController.deleteCategory(req, res);
});

export default CategoryRouter;
