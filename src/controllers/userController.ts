import { Request, Response } from "express";

const users: { name: string; email: string; password: string }[] = [];

const userController = {
  create: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    if (users.find((user) => user.email === email)) {
      return res.status(400).json({
        message: "User already exists",
      });
    }

    users.push({
      name,
      email,
      password,
    });

    res.json({
      message: "User created",
      user: req.body,
    });
  },
};

export default userController;
