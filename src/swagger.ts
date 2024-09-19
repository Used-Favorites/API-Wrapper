import { getRouteFilePaths } from "./utils/completios";

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
const PORT = process.env.PORT ?? 4041;
const URL = process.env.URL ?? "localhost";

const doc = {
  info: {
    version: "0.0.1",
    title: "API Documentation",
    description: "API Documentation for the Express API.",
  },
  servers: [
    {
      url: `http://${URL}:${PORT}`,
    },
  ],
  schemes: ["http"],
  consumes: ["application/json"],
  produces: ["application/json"],
  tags: [
    {
      name: "User",
      description: "User routes",
      path: "/user",
    },
    {
      name: "Products",
      description: "Products routes",
      path: "/products",
    },
    {
      name: "Category",
      description: "Category routes",
      path: "/category",
    },
  ],

  definitions: {
    User: {
      type: "object",
      properties: {
        id: { type: "number" },
        name: { type: "string" },
        email: { type: "string" },
      },
    },
    Product: {
      type: "object",
      properties: {
        id: { type: "number" },
        name: { type: "string" },
        price: { type: "number" },
      },
    },
    Category: {
      type: 'object',
      properties: {
        id: {
          type: 'integer',
          format: 'int32',
          example: 1,
        },
        name: {
          type: 'string',
          example: 'Electronics',
        },
      },
    },

  },
};

const outputFile = "./assets/swagger-output.json";

const routesFiles = getRouteFilePaths();

console.log(routesFiles);

swaggerAutogen(outputFile, routesFiles, doc);
