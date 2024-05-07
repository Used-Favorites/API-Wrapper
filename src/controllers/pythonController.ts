import axios from "axios";
import { Request, Response } from "express";
import { randomProduct } from "../utils/randomData";

const pythonController = {
  testAxios: async (req: Request, res: Response) => {
    axios
      .get("http://127.0.0.1:5000/json-example")
      .then((response) => {
        return res.json(response.data);
      })
      .catch((error) => {
        return res.json(error);
      });
  },
};

export default pythonController;
