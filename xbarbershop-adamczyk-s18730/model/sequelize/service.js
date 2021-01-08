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
       unique: true,
       validate: {
            notEmpty: {
                msg: "Field is required!"
            },
            len: {
                args: [2,60],
                msg: "Name must be in range 2-60"
            }
        }
   },
   price: {
       type: Sequelize.DECIMAL(6, 2),
       allowNull: false,
       validate: {
            notEmpty: {
                msg: "Field is required!"
            },
            isNumeric: {
                msg: "Must be a digit"
            }
       }
   },
   time: {
       type: Sequelize.INTEGER,
       allowNull: false,
       validate: {
            notEmpty: {
                msg: "Field is required!"
            },
            isNumeric: {
                msg: "Must be a digit"
            }
        }
   }
});

module.exports = Service;