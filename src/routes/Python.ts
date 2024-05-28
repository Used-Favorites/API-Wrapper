import express from "express";
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
import pythonController from "../controllers/pythonController";

const PythonRouter = express.Router();

PythonRouter.get("/testAxios", (req, res) => {
  /* #swagger.tags = ['Products']
       #swagger.description = 'Endpoint to test Axios.'
       #swagger.path = '/products/testAxios'
  */
  pythonController.testAxios(req, res);
});

PythonRouter.get("/uploadImg", (req, res) => {
  pythonController.uploaderPy(req, res);
});


PythonRouter.post("/uploadPy",jsonParser, (req, res) => {
  pythonController.uploadPy(req, res);
});


export default PythonRouter;
