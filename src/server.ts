import swaggerUi from "swagger-ui-express";
import swaggerFile from "./assets/swagger-output.json";

import bodyParser from "body-parser";
import express from "express";

const server = express();
const PORT = process.env.PORT ?? 3000;

server.use(bodyParser.json());
server.use("/doc", swaggerUi.serve, swaggerUi.setup(swaggerFile));

server.listen(PORT, () => {
  console.log(
    `\nServer is running!\n\nAPI documentation: http://localhost:${PORT}/doc`
  );
});

export default server;
