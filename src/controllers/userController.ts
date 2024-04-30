import { Controller } from "../types/Controller";
import { Request, Response } from "express";

const userController: Controller = {
    HelloWorld: async (req: Request, res: Response) => {
        return res.status(200).json({ message: "Hello, World!" });
    },
};

export default userController;
