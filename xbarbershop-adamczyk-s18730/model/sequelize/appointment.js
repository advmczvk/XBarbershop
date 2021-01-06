const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Appointment = sequelize.define('Appointment', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   date: {
       type: Sequelize.DATE,
       allowNull: false
   },
   client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
   },
   service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
   }
});

module.exports = Appointment;