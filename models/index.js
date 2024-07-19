require('dotenv').config();
const Sequelize = require('sequelize');
const config = require('../config');

let sequelize;

sequelize = new Sequelize(
  `${config.MYSQL_DATABASE}`,
  `${config.MYSQL_USERNAME}`,
  config.MYSQL_ROOT_PASSWORD,
  {
    host: config.MYSQL_HOST,
    port: config.MYSQL_DOCKER_PORT,
    dialect: 'mysql',
    operatorsAliases: 0,
    timezone: '+01:00',

    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.user = require('./auth')(sequelize, Sequelize);
db.confirmation_token = require('./token')(sequelize,Sequelize)
db.confirmation_token.belongsTo(db.user, { foreignKey: 'user_id' });
db.user.hasMany(db.confirmation_token, { foreignKey: 'user_id' });


module.exports = db;
