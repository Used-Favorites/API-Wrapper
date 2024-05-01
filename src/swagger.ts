import { getRouteFilePaths } from "./utils/Completions";

const swaggerAutogen = require("swagger-autogen")({ openapi: "3.0.0" });
const PORT = process.env.PORT ?? 3000;

const doc = {
  info: {
    version: "1.0.0",
    title: "My API",
    description: "Some description...",
  },
  servers: [
    {
      url: `http://localhost:${PORT}`,
    },
  ],
  components: {
    schemas: {
      someBody: {
        $name: "Jhon Doe",
        $age: 29,
        about: "",
      },
      someResponse: {
        name: "Jhon Doe",
        age: 29,
        diplomas: [
          {
            school: "XYZ University",
            year: 2020,
            completed: true,
            internship: {
              hours: 290,
              location: "XYZ Company",
            },
          },
        ],
      },
      someEnum: {
        "@enum": ["red", "yellow", "green"],
      },
    },
    securitySchemes: {
      bearerAuth: {
        type: "http",
        scheme: "bearer",
      },
    },
  },
};

const outputFile = "./assets/swagger-output.json";



const routesFiles = getRouteFilePaths();

swaggerAutogen(outputFile, routesFiles, doc).then(() => {
  require("./server");
});

