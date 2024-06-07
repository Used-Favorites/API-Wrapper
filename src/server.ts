import swaggerUi from "swagger-ui-express";
import swaggerFile from "./assets/swagger-output.json";

var path = require('path');
import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

const server = express();
const PORT = process.env.PORT ?? 3000;


//Json parser pro POST
server.use(bodyParser.json());
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })


server.set('views', path.join(__dirname, '/views'));
server.set('view engine', 'ejs');

server.use(cors());
server.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.listen(PORT, () => {
  console.log(
    `\nServer is running!\n\nAPI documentation: http://localhost:${PORT}/doc`
  );
});

export default server;
