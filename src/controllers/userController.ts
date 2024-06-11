import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const userController = {
  create: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    const user = await prisma.user.create({
      data: {
        name,
        email,
        password,
      },
    });

    return res.json(user);
  },

  list: async (req: Request, res: Response) => {
    const users = await prisma.user.findMany();

    return res.json(users);
  },

  listById: async (req: Request, res: Response) => {
    const { id } = req.params;

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    return res.json(user);
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params;
    const { name, email, password } = req.body;

    const user = await prisma.user.update({
      where: {
        id: Number(id),
      },
      data: {
        name,
        email,
        password,
      },
    });

    return res.json(user);
  },

  delete: async (req: Request, res: Response) => {
    const { id } = req.params;

    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return res.json({ message: "User deleted" });
  },
};

export default userController;
