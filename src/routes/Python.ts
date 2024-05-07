import express from "express";

import pythonController from "../controllers/pythonController";

const PythonRouter = express.Router();

PythonRouter.get("/testAxios", (req, res) => {
  /* #swagger.tags = ['Products']
       #swagger.description = 'Endpoint to test Axios.'
       #swagger.path = '/products/testAxios'
  */
  pythonController.testAxios(req, res);
});

export default PythonRouter;
