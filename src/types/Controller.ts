import { Request, Response } from "express";

export type Controller = {
    [key: string]: (req: Request, res: Response) => Promise<Response<any, Record<string, any>>>;
}