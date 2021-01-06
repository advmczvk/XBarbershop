const Sequelize = require('sequelize');

const sequelize = new Sequelize('xbarbershop', 'root', 'root', {
    dialect: 'mysql',
    host: 'localhost'
});

module.exports = sequelize;