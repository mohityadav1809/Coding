const swaggerUI = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Todo Application',
      version: '1.0.0',
      description: 'API Documentation for Your Todo Application',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Development Server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Path to the API routes folder
};

const specs = swaggerJsDoc(options);

module.exports = (app) => {
  app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(specs));
};
