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
            },
            min: {
                args: [0],
                msg: "Price must be greater than 0"
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
            },
            min: {
                args: [0],
                msg: "Time must be greater than 0"
            }
        }
   }
});

module.exports = Service;