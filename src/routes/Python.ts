import express from "express";
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
import pythonController from "../controllers/pythonController";

const PythonRouter = express.Router();

PythonRouter.get("/testAxios", (req, res) => {
  /* #swagger.tags = ['Python']
       #swagger.description = 'Endpoint to test axios in python.'
       #swagger.path = '/products/testAxios'
  */
  pythonController.testAxios(req, res);
});

PythonRouter.get("/uploadImg", (req, res) => {
  /* #swagger.tags = ['Python']
        #swagger.description = 'Endpoint to upload image.'
        #swagger.path = '/products/uploadImg'
    */
  pythonController.uploaderPy(req, res);
});


PythonRouter.post("/uploadPy", jsonParser, (req, res) => {
  /* #swagger.tags = ['Python']
       #swagger.description = 'Endpoint to upload python file.'
       #swagger.path = '/products/uploadPy'
       #swagger.parameters['file'] = {
         in: 'body',
         description: 'Python file',
         required: true,
         type: 'file'
       } */
  pythonController.uploadPy(req, res);
});


export default PythonRouter;
