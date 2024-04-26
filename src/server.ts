import swaggerUi from 'swagger-ui-express';
import swaggerFile from './assets/swagger-output.json';
import bodyParser from 'body-parser';

import express from 'express';
const server = express();

server.use(bodyParser.json())
server.use('/doc', swaggerUi.serve, swaggerUi.setup(swaggerFile))

server.listen(process.env.PORT || 3000, () => {
    console.log(`Server is running!\nAPI documentation: http://localhost:${process.env.PORT || 3000}/doc`)
})

/* Endpoints */
require('./src/endpoints')(server)

export default server;