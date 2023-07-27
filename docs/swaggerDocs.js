module.exports = {
    swaggerDefinition: {
      openapi: '3.0.1',
      info: {
        version: '1.0.0',
        title: 'User API',
        description: 'Here signup , login and passwordReset api will be seen!.',
        servers: ['http://localhost:8000'],
      },
      components: {
        securitySchemes: {
          jwt: {
            type: 'http',
            scheme: 'bearer',
            bearerFormat: 'JWT',
          },
        },
      },
    },
    apis: ['routes/*.js'],
  };
  
  