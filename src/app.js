const express = require('express');
const morgan = require('morgan');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swagger');
const routes = require('./routes');
const { applySecurity } = require('./middlewares/security');
const { notFound, errorHandler } = require('./middlewares/errorHandler');

const app = express();

applySecurity(app);
app.use(morgan('combined'));
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.use('/api', routes);
app.use(notFound);
app.use(errorHandler);

module.exports = app;
