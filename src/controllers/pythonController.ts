import axios from "axios";
import { Request, Response } from "express";
import QueryString from "querystring";

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
  uploaderPy: async (req: Request, res: Response) => {
    return res.render("pyinterface/uploader.ejs");
  },

  uploadPy: async (request: Request, res: Response) => {
    if (request.method == "POST") {
      let body = "";

      request.on("data", function (data) {
        body += data;

        // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
        if (body.length > 1e6) {
          // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
          request.socket.destroy();
        }
      });
      request.on("end", function () {
        const POST = QueryString.parse(body);
        //Para indexar o texto use POST['base64convertido'] e POST['nome']
        //TODO: Conectar com o Python
        //Enviar o base64
        //Redirect para pagina que vai esperar a resposta
        axios
          .post("http://127.0.0.1:5000/addImage", {
            name: POST["nome"],
            imagem: POST["base64convertido"],
          })
          .then((response) => {
            return res.json(response.data);
          })
          .catch((error) => {
            return res.json(error);
          });
      });
    }
  },
};

export default pythonController;
