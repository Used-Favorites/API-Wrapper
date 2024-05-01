import { Request, Response } from "express";
import { ControllerFunction } from "../types/Controller";
import { getRouteFilePaths } from "../utils/Completions";

const userController = {
    HelloWorld: async (req: Request, res: Response) => {
        return res.status(200).json({ message: "Hello, World!" });
    },
    test: async (req: Request, res: Response)  => {
        return res.status(200).json({ message: getRouteFilePaths() }); // Correction here
    }
}

export default userController;
