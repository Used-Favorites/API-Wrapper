import { Request, Response } from "express";

const templateController = {
  default: async (req: Request, res: Response) => {
    return res.status(200).json({ message: "Hello, World!" });
  },
};

export default templateController;
