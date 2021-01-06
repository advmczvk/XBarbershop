const Service = require("../../model/sequelize/Service");
const Appointment = require("../../model/sequelize/Appointment");
const Client = require("../../model/sequelize/Client");

exports.getServices = () => {
    return Service.findAll();
};

exports.getServiceById = (serId) => {
    return Service.findByPk(serId,
        {
            include: [{
                model: Appointment,
                as: 'appointments',
                include: [{
                    model: Client,
                    as: 'client'
                }]
            }]
        });
};

exports.createService = (newServiceData) => {
    return Service.create({
        name: newServiceData.name,
        price: newServiceData.price,
        time: newServiceData.time
    });
};

exports.updateService = (serId, serData) => {
    const name = serData.name;
    const price = serData.price;
    const time = serData.time;
    return Service.update(serData, {where: {_id: serId }});
};

exports.deleteClient = (serId) => {
    return Service.destroy({
        where: { _id: serId }
    });

}; 