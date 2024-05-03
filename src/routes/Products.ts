import express from "express";

import productsController from "../controllers/productsController";

const ProductsRouter = express.Router();

ProductsRouter.post("/findProducts", (req, res) => {
  /* #swagger.tags = ['Products']
       #swagger.description = 'Endpoint to find an products.'
       #swagger.path = '/products/findProducts'
  */
  productsController.findProducts(req, res);
});

export default ProductsRouter;
