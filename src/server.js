const app = require('./app');
const env = require('./config/env');
const { connectMySQL } = require('./database/mysql');
const { connectMongo } = require('./database/mongo');
const logger = require('./utils/logger');

async function bootstrap() {
  try {
    await connectMySQL();
    await connectMongo();
    app.listen(env.port, () => {
      logger.info(`Servidor rodando em http://localhost:${env.port}`);
      logger.info(`Swagger em http://localhost:${env.port}/docs`);
    });
  } catch (error) {
    logger.error({ message: 'Erro ao iniciar aplicação', error: error.message });
    process.exit(1);
  }
}

bootstrap();
