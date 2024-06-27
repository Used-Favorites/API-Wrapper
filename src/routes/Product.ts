import express from "express";
import productController from "../controllers/product.controller";

const ProductRouter = express.Router();

ProductRouter.get("/create", (req, res) => {
  /* #swagger.tags = ['Product']
      #swagger.description = 'Endpoint to create a new product.' 
      #swagger.path = '/product/create'
      #swagger.parameters["newProduct"] = {
      in: "body",
      description: "Product information.",
      required: true,
      type: "object",
      schema: { $ref: "#/definitions/Product" },
    };
  #swagger.responses[201] = {
    description: 'Product created successfully.'
  } 
  #swagger.responses[400] = {
    description: 'Bad request.'
  } #swagger.responses[500] = {
    description: 'Internal server error.'
  }
  
  */
  productController.createProduct(req, res);
});

ProductRouter.get("/list", (req, res) => {
  /* #swagger.tags = ['Product']
      #swagger.description = 'Endpoint to list all products.' 
      #swagger.path = '/product/list'
  #swagger.responses[200] = {
    description: 'Products listed successfully.'
  } 
  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
  */
  productController.getAllProducts(req, res);
});

ProductRouter.get("/:id", (req, res) => {
  /* #swagger.tags = ['Product']
      #swagger.description = 'Endpoint to get a product by id.' 
      #swagger.path = '/product/{id}'
  #swagger.parameters["id"] = {
    in: "path",
    description: "Product id.",
    required: true,
    type: "integer"
  };
  #swagger.responses[200] = {
    description: 'Product found.'
  } 
  #swagger.responses[404] = {
    description: 'Product not found.'
  } 
  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
  */
  productController.getProductById(req, res);
});

ProductRouter.put("/:id", (req, res) => {
  /* #swagger.tags = ['Product']
      #swagger.description = 'Endpoint to update a product by id.' 
      #swagger.path = '/product/{id}'
  #swagger.parameters["id"] = {
    in: "path",
    description: "Product id.",
    required: true,
    type: "integer"
  };
  #swagger.parameters["updateProduct"] = {
    in: "body",
    description: "Product information.",
    required: true,
    type: "object",
    schema: { $ref: "#/definitions/Product" },
  };
  #swagger.responses[200] = {
    description: 'Product updated successfully.'
  } 
  #swagger.responses[404] = {
    description: 'Product not found.'
  } 
  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
  */
  productController.updateProduct(req, res);
});

ProductRouter.delete("/:id", (req, res) => {
  /* #swagger.tags = ['Product']
      #swagger.description = 'Endpoint to delete a product by id.'
      #swagger.path = '/product/{id}'
  #swagger.parameters["id"] = {
    in: "path",
    description: "Product id.",
    required: true,
    type: "integer"
  };
  #swagger.responses[200] = {
    description: 'Product deleted successfully.'
  } 
  #swagger.responses[404] = {
    description: 'Product not found.'
  } 
  #swagger.responses[500] = {
    description: 'Internal server error.'
  }
  */
  productController.deleteProduct(req, res);
});

export default ProductRouter;
