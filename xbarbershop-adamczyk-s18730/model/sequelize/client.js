const Sequelize = require('sequelize');
const sequelize = require('../../config/sequelize/sequelize');

const Client = sequelize.define('Client', {
   _id: {
       type: Sequelize.INTEGER,
       autoIncrement: true,
       allowNull: false,
       primaryKey: true,
   },
   name: {
       type: Sequelize.STRING,
       allowNull: false,
       validate: {
        notEmpty: {
            msg: "Field is required!"
        },
        len: {
            args: [5,120],
            msg: "Name must be in range 5-120"
        },
    }
   },
   email: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true,
       validate: {
        notEmpty: {
            msg: "Field is required!"
        },
        len: {
            args: [5,60],
            msg: "E-mail must be in range 5-60"
        },
        isEmail: {
            msg: 'E-mail incorrect'
        }
    }
   },
   phone: {
       type: Sequelize.STRING,
       allowNull: false,
       unique: true,
       validate: {
        notEmpty: {
            msg: "Field is required!"
        },
        len: {
            args: [9,9],
            msg: "Phone number must be 9 digits"
        },
        isNumeric: {
            msg: "Field must only contain digits"
        }
       }
   }
});

module.exports = Client;