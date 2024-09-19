import swaggerUi from "swagger-ui-express";
import swaggerFile from "./assets/swagger-output.json";
const bodyParser = require('body-parser')
import cors from "cors";
import express from "express";
import ngrok from 'ngrok';
/*(async function() {
  const url = await ngrok.connect();
})();*/
//ngrok.authtoken('2l1aywM45ZhBngYFC1aVWlzETkM_2qH8kxg8Kw8Zchym7PKLP');

const server = express();
const PORT = process.env.PORT ?? 4041;

server.use(["/doc", "/docs"], swaggerUi.serve, swaggerUi.setup(swaggerFile));
server.use(cors({
  origin: '*', // Substitua pelo URL do seu frontend ou use '*' para permitir qualquer origem
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization','ngrok-skip-browser-warning']
}));
//server.use(cors());
//server.use(express.json());
//server.use(express.urlencoded({ extended: false }));
server.use(express.static("public"));
server.use((req, res, next) => {
  res.header("ngrok-skip-browser-warning", "any");
  next();
});

server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.use(express.static("views"));
server.set("view engine", "ejs");
server.set("views", "./views");

server.listen(PORT, () => {
  console.log(
    `\nServer is running!\n\nAPI documentation: http://localhost:${PORT}/doc`
  );
});

export default server;
