import express from 'express';
import * as cartController from '../controllers/cartController';

const CartRouter = express.Router();

// Listar todos os carrinhos
CartRouter.get('/carts', (req, res) => {
    /* #swagger.tags = ['Cart']
       #swagger.path = '/cart/carts'
       #swagger.description = 'Endpoint para listar todos os carrinhos.'
       #swagger.responses[200] = {
           description: 'Lista de carrinhos retornada com sucesso.',
           schema: {
               type: 'array',
               items: { $ref: '#/definitions/Cart' }
           }
       }
    */
    cartController.getAllCarts(req, res);
});

// Listar um carrinho por ID
CartRouter.get('/carts/:id', (req, res) => {
    /* #swagger.tags = ['Cart']
       #swagger.path = '/cart/carts/{id}'
       #swagger.description = 'Endpoint para listar um carrinho pelo id.'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID do carrinho',
           required: true,
           type: 'integer'
       }
    */
    cartController.getCartById(req, res);
});

// Criar um novo carrinho
CartRouter.post('/carts', (req, res) => {
    /* #swagger.tags = ['Cart']
       #swagger.path = '/cart/carts'
       #swagger.produces = ['application/json']
       #swagger.consumes = ['application/json']
       #swagger.description = 'Endpoint para cadastrar um novo carrinho'
       #swagger.parameters['body'] = {
           in: 'body',
           description: 'Cart information.',
           required: true,
           schema: { $ref: '#/definitions/Cart' }
       }
    */
    cartController.createCart(req, res);
});

// Atualizar um carrinho existente
CartRouter.put('/carts/:id', (req, res) => {
    /* #swagger.tags = ['Cart']
       #swagger.path = '/cart/carts/{id}'
       #swagger.description = 'Endpoint para atualizar um carrinho'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID do carrinho',
           required: true,
           type: 'integer'
       }
       #swagger.parameters['body'] = {
           in: 'body',
           description: 'Cart information.',
           required: true,
           schema: { $ref: '#/definitions/Cart' }
       }
    */
    cartController.updateCart(req, res);
});

CartRouter.delete('/carts/:id', (req, res) => {
    /* #swagger.tags = ['Cart']
       #swagger.path = '/cart/carts/{id}'
       #swagger.description = 'Endpoint para deletar produtos específicos de um carrinho pelo ID do carrinho. Caso o carrinho fique vazio, ele será deletado.'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID do carrinho a ser atualizado ou deletado.',
           required: true,
           type: 'integer'
       }
       #swagger.parameters['body'] = {
           in: 'body',
           description: 'Lista de IDs dos produtos a serem removidos do carrinho.',
           required: true,
           schema: {
               productIds: [1, 2, 3]
           }
       }
       #swagger.responses[200] = {
           description: 'Carrinho atualizado com os produtos removidos.',
           schema: {
               id: 1,
               userId: 1,
               product: [
                   { id: 4, name: 'Produto Exemplo' }
               ]
           }
       }
       #swagger.responses[204] = {
           description: 'Carrinho deletado com sucesso porque todos os produtos foram removidos.'
       }
       #swagger.responses[404] = {
           description: 'Carrinho não encontrado.'
       }
       #swagger.responses[500] = {
           description: 'Erro ao tentar atualizar ou deletar o carrinho.'
       }
    */
    cartController.deleteCartProduct(req, res);
});

export default CartRouter;
