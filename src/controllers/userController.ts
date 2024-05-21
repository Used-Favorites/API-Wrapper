import { Request, Response } from "express";

const userController = {
  create: async (req: Request, res: Response) => {
    const { name, email, password } = req.body;

    res.json({
      message: "User created",
      user: req.body,
    });
  },
};

export default userController;
