import axios from "axios";
import { Request, Response } from "express";
var qs = require('querystring');

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
      if (request.method == 'POST') {
        var body = '';
        
        request.on('data', function (data) {
            body += data;
            
            
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6) { 
                // FLOOD ATTACK OR FAULTY CLIENT, NUKE REQUEST
                request.connection.destroy();
            }
        });
        request.on('end', function () {

            var POST = qs.parse(body);
            //Para indexar o texto use POST['base64convertido']
            //TODO: Conectar com o Python
            //Enviar o base64
            //Redirect para pagina que vai esperar a resposta


        });
      }
},
}

export default pythonController;
