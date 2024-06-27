import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const productController = {
  // Lista todos os produtos
  getAllProducts: async (req: Request, res: Response) => {
    try {
      const products = await prisma.products.findMany();
      res.json(products);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  },

  // Busca um produto pelo ID
  getProductById: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const product = await prisma.products.findUnique({
        where: { id: Number(id) },
      });
      if (product) {
        res.json(product);
      } else {
        res.status(404).send("Produto não encontrado");
      }
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  },

  // Cria um novo produto
  createProduct: async (req: Request, res: Response) => {
    try {
      const product = await prisma.products.create({
        data: req.body,
      });
      res.status(201).json(product);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  },

  // Atualiza um produto pelo ID
  updateProduct: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      const product = await prisma.products.update({
        where: { id: Number(id) },
        data: req.body,
      });
      res.json(product);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  },

  // Deleta um produto pelo ID
  deleteProduct: async (req: Request, res: Response) => {
    const { id } = req.params;
    try {
      await prisma.products.delete({
        where: { id: Number(id) },
      });
      res.send("Produto deletado com sucesso");
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  },
};

export default productController;
