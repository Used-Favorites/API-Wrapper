import express, { Request, Response } from 'express';
import * as productController from '../controllers/productController';

const ProductRouter = express.Router();

// Listar todos os produtos
ProductRouter.get('/products', (req: Request, res: Response) => {
  /* #swagger.tags = ['Products']
     #swagger.path = '/products'
     #swagger.description = 'Endpoint para listar todos os produtos.'
     #swagger.responses[200] = {
       description: 'Lista de produtos retornada com sucesso.',
       schema: {
         type: 'array',
         items: {
           id: 1,
           name: 'Produto 1',
           price: 100.00,
           description: 'Descrição do produto 1',
           image: 'url_da_imagem',
           categoryId: 2,
           sellerId: 3,
           buyerId: 4,
           datasheetsId: 5,
           auditTrailId: 6,
           size: 10.5,
           salePrice: 90.00,
           repairCost: 5.00,
           finalPrice: 95.00,
           repaired: true,
           lastModified: '2024-08-22T00:00:00Z',
           interestedParties: 10,
           brand: 'Marca',
           model: 'Modelo',
           condition: 'Novo',
           supplierId: 7,
           cartId: 8
         }
       }
     }
  */
  productController.getAllProducts(req, res);
});

// Listar um produto por ID
ProductRouter.get('/products/:id', (req: Request, res: Response) => {
  /* #swagger.tags = ['Products']
     #swagger.path = '/products/{id}'
     #swagger.description = 'Endpoint para listar um produto pelo ID.'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID do produto',
       required: true,
       type: 'integer'
     }
     #swagger.responses[200] = {
       description: 'Produto retornado com sucesso.',
       schema: {
         id: 1,
         name: 'Produto 1',
         price: 100.00,
         description: 'Descrição do produto 1',
         image: 'url_da_imagem',
         categoryId: 2,
         sellerId: 3,
         buyerId: 4,
         datasheetsId: 5,
         auditTrailId: 6,
         size: 10.5,
         salePrice: 90.00,
         repairCost: 5.00,
         finalPrice: 95.00,
         repaired: true,
         lastModified: '2024-08-22T00:00:00Z',
         interestedParties: 10,
         brand: 'Marca',
         model: 'Modelo',
         condition: 'Novo',
         supplierId: 7,
         cartId: 8
       }
     }
  */
  productController.getProductById(req, res);
});

// Criar um novo produto
ProductRouter.post('/products', (req: Request, res: Response) => {
  /* #swagger.tags = ['Products']
     #swagger.path = '/products'
     #swagger.produces = ['application/json']
     #swagger.consumes = ['application/json']
     #swagger.description = 'Endpoint para cadastrar um novo produto.'
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Informações do produto.',
       required: true,
       schema: {
         type: 'object',
         properties: {
           name: { type: 'string', example: 'Produto 1' },
           price: { type: 'number', example: 100.00 },
           description: { type: 'string', example: 'Descrição do produto 1' },
           image: { type: 'string', example: 'url_da_imagem' },
           categoryId: { type: 'integer', example: 2 },
           sellerId: { type: 'integer', example: 3 },
           buyerId: { type: 'integer', example: 4 },
           datasheetsId: { type: 'integer', example: 5 },
           auditTrailId: { type: 'integer', example: 6 },
           size: { type: 'number', example: 10.5 },
           salePrice: { type: 'number', example: 90.00 },
           repairCost: { type: 'number', example: 5.00 },
           finalPrice: { type: 'number', example: 95.00 },
           repaired: { type: 'boolean', example: true },
           lastModified: { type: 'string', example: '2024-08-22T00:00:00Z' },
           interestedParties: { type: 'integer', example: 10 },
           brand: { type: 'string', example: 'Marca' },
           model: { type: 'string', example: 'Modelo' },
           condition: { type: 'string', example: 'Novo' },
           supplierId: { type: 'integer', example: 7 },
           cartId: { type: 'integer', example: 8 }
         }
       }
     }
  */
  productController.createProduct(req, res);
});

// Atualizar um produto existente
ProductRouter.put('/products/:id', (req: Request, res: Response) => {
  /* #swagger.tags = ['Products']
     #swagger.path = '/products/{id}'
     #swagger.description = 'Endpoint para atualizar um produto existente.'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID do produto',
       required: true,
       type: 'integer'
     }
     #swagger.parameters['body'] = {
       in: 'body',
       description: 'Informações atualizadas do produto.',
       required: true,
       schema: {
         type: 'object',
         properties: {
           name: { type: 'string', example: 'Produto 1' },
           price: { type: 'number', example: 110.00 },
           description: { type: 'string', example: 'Descrição atualizada do produto 1' },
           image: { type: 'string', example: 'url_da_imagem_atualizada' },
           categoryId: { type: 'integer', example: 2 },
           sellerId: { type: 'integer', example: 3 },
           buyerId: { type: 'integer', example: 4 },
           datasheetsId: { type: 'integer', example: 5 },
           auditTrailId: { type: 'integer', example: 6 },
           size: { type: 'number', example: 11.0 },
           salePrice: { type: 'number', example: 95.00 },
           repairCost: { type: 'number', example: 5.00 },
           finalPrice: { type: 'number', example: 100.00 },
           repaired: { type: 'boolean', example: true },
           lastModified: { type: 'string', example: '2024-08-23T00:00:00Z' },
           interestedParties: { type: 'integer', example: 12 },
           brand: { type: 'string', example: 'Nova Marca' },
           model: { type: 'string', example: 'Novo Modelo' },
           condition: { type: 'string', example: 'Usado' },
           supplierId: { type: 'integer', example: 7 },
           cartId: { type: 'integer', example: 8 }
         }
       }
     }
  */
  productController.updateProduct(req, res);
});

// Excluir um produto
ProductRouter.delete('/products/:id', (req: Request, res: Response) => {
  /* #swagger.tags = ['Products']
     #swagger.path = '/products/{id}'
     #swagger.description = 'Endpoint para deletar um produto pelo ID.'
     #swagger.parameters['id'] = {
       in: 'path',
       description: 'ID do produto',
       required: true,
       type: 'integer'
     }
  */
  productController.deleteProduct(req, res);
});

export default ProductRouter;
