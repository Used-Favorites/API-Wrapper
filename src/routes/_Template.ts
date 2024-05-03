import express from "express";

const TemplateRouter = express.Router();

TemplateRouter.get("/", (req, res) => {
  /* #swagger.tags = ['Template']
  #swagger.description = 'Endpoint to test the template route.' 
  #swagger.path = '/'
  */
  res.send("Template route");
});

export default TemplateRouter;
