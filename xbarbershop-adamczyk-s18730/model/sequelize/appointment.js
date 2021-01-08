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
       allowNull: false,
       validate: {
            notEmpty: {
                msg: "Field is required!"
            },
            isDate: true,
            isAfter: {
                args:[new Date().toISOString()],
                msg: "Date expired"
            }
        }
   },
   client_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field is required!"
            }
        }
   },
   service_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
            notEmpty: {
                msg: "Field is required!"
            }
        }
   }
});

module.exports = Appointment;