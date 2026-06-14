const { Sequelize } = require('sequelize');
const env = require('../config/env');

const sequelize = new Sequelize(env.mysql.database, env.mysql.username, env.mysql.password, {
  host: env.mysql.host,
  port: env.mysql.port,
  dialect: 'mysql',
  logging: false
});

async function connectMySQL() {
  await sequelize.authenticate();
  await sequelize.sync();
}

module.exports = { sequelize, connectMySQL };
