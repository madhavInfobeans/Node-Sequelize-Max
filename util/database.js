const Sequelize = require('sequelize');

const sequelize = new Sequelize('node_max', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

module.exports = sequelize;
