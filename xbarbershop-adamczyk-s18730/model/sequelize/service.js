const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Service = sequelize.define('Service', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   name: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true
   },
   price: {
       type: Sequelize.DECIMAL(6, 2),
       allowNull: false,
   },
   time: {
       type: Sequelize.INTEGER,
       allowNull: false,
   }
});

module.exports = Service;