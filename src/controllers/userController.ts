import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
const userController = {
  create: async (req: Request, res: Response) => {
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };

    console.log(req.body, req.params, req.query, req.headers);

    if (!name || !email || !password) {
      return res.status(400).json({ error: "Missing name, email or password" });
    }
    if (password.length < 6) {
      return res
        .status(400)
        .json({ error: "Password must have at least 6 characters" });
    }
    if (await prisma.user.findUnique({ where: { email } })) {
      return res.status(400).json({ error: "Email already in use" });
    }
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
    const usersWithoutPassword = users.map((user) => {
      const { password, ...userWithoutPassword } = user;
      return userWithoutPassword;
    });

    return res.json(usersWithoutPassword);
  },

  listById: async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };

    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    if (!user) return res.status(404).json({ error: "User not found" });

    const userWithoutPassword = user ? { ...user, password: undefined } : null;

    return res.json(userWithoutPassword);
  },

  update: async (req: Request, res: Response) => {
    const { id } = req.params as { id: string };
    const { name, email, password } = req.body as {
      name: string;
      email: string;
      password: string;
    };

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
    const { id } = req.params as { id: string };

    await prisma.user.delete({
      where: {
        id: Number(id),
      },
    });

    return res.json({ message: "User deleted" });
  },
};

export default userController;
