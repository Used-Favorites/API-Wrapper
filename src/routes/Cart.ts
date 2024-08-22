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

// Excluir um carrinho
CartRouter.delete('/carts/:id', (req, res) => {
    /* #swagger.tags = ['Cart']
       #swagger.path = '/cart/carts/{id}'
       #swagger.description = 'Endpoint para deletar um carrinho pelo id.'
       #swagger.parameters['id'] = {
           in: 'path',
           description: 'ID do carrinho',
           required: true,
           type: 'integer'
       }
    */
    cartController.deleteCart(req, res);
});

export default CartRouter;
