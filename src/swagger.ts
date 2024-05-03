import { getRouteFilePaths } from "./utils/Completions";

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
const PORT = process.env.PORT ?? 3000;

const doc = {
  info: {
    version: "1.0.0",
    title: "API Documentation",
    description: "Some description...",
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
};

const outputFile = "./assets/swagger-output.json";

const routesFiles = getRouteFilePaths();

console.log(routesFiles);

swaggerAutogen(outputFile, routesFiles, doc);