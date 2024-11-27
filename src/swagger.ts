import express from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Configuração do Swagger
const swaggerDefinition = {
  openapi: '3.0.0',  // Versão do OpenAPI
  info: {
    title: 'CarroBluetooth API',
    version: '1.0.0',
    description: 'Documentação da API para o projeto CarroBluetooth',
  },
  servers: [
    {
      url: 'http://localhost:5000', // URL onde a API está rodando
    },
  ],
};

// Opções para o swagger-jsdoc
const options = {
  swaggerDefinition,
  apis: ['./src/routes/*.ts'],  // Aqui apontamos para os arquivos das rotas
};

// Gerando a especificação Swagger
const swaggerSpec = swaggerJsdoc(options);

// Função que configura o Swagger UI no Express
export const setupSwagger = (app: express.Application) => {
  // Rota para acessar a documentação Swagger
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};
