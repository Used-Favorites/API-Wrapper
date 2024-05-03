import { Request, Response } from "express";
import { randomProduct } from "../utils/randomData";

const productsController = {
  findProducts: async (req: Request, res: Response) => {
    if (req.query.search === randomProduct.name) {
      res.json({
        message: "Product found",
        product: randomProduct,
      });
    }
  },
};

export default productsController;
