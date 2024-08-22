import express from 'express';
const DatasheetRouter = express.Router();
import * as datasheetController from '../controllers/datasheetController';

// Listar todas as datasheets
DatasheetRouter.get('/datasheets', (req, res) => {
    /* #swagger.tags = ['Datasheet']
       #swagger.path = '/datasheet/datasheets'
       #swagger.description = 'Endpoint para listar todas as datasheets.'
       #swagger.responses[200] = {
         description: 'Lista de datasheets retornada com sucesso.',
         schema: { type: 'array', items: { id: 1, description: 'Datasheet description' } }
       }
    */
    datasheetController.getAllDatasheets(req, res);
});

// Listar uma datasheet por ID
DatasheetRouter.get('/datasheets/:id', (req, res) => {
    /* #swagger.tags = ['Datasheet']
       #swagger.path = '/datasheet/datasheets/{id}'
       #swagger.description = 'Endpoint para listar uma datasheet pelo id.'
       #swagger.parameters['id'] = {
         in: 'path',
         description: 'ID da datasheet',
         required: true,
         type: 'integer'
       }
    */
    datasheetController.getDatasheetById(req, res);
});

// Criar uma nova datasheet
DatasheetRouter.post('/datasheets', (req, res) => {
    /* #swagger.tags = ['Datasheet']
       #swagger.path = '/datasheet/datasheets'
       #swagger.produces = ['application/json']
       #swagger.consumes = ['application/json']
       #swagger.description = 'Endpoint para cadastrar uma nova datasheet'
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Datasheet information.',
         required: true,
         schema: { type: 'object', properties: { description: { type: 'string', example: 'Datasheet description' } } }
       }
    */
    datasheetController.createDatasheet(req, res);
});

// Atualizar uma datasheet existente
DatasheetRouter.put('/datasheets/:id', (req, res) => {
    /* #swagger.tags = ['Datasheet']
       #swagger.path = '/datasheet/datasheets/{id}'
       #swagger.description = 'Endpoint para atualizar uma datasheet'
       #swagger.parameters['id'] = {
         in: 'path',
         description: 'ID da datasheet',
         required: true,
         type: 'integer'
       }
       #swagger.parameters['body'] = {
         in: 'body',
         description: 'Datasheet information.',
         required: true,
         schema: { type: 'object', properties: { description: { type: 'string', example: 'Updated description' } } }
       }
    */
    datasheetController.updateDatasheet(req, res);
});

// Excluir uma datasheet
DatasheetRouter.delete('/datasheets/:id', (req, res) => {
    /* #swagger.tags = ['Datasheet']
       #swagger.path = '/datasheet/datasheets/{id}'
       #swagger.description = 'Endpoint para deletar uma datasheet pelo id.'
       #swagger.parameters['id'] = {
         in: 'path',
         description: 'ID da datasheet',
         required: true,
         type: 'integer'
       }
    */
    datasheetController.deleteDatasheet(req, res);
});

export default DatasheetRouter;
