import { Request, Response } from "express";

export type ControllerFunction = (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;