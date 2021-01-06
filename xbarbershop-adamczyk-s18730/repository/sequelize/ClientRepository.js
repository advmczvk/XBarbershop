const Client = require("../../model/sequelize/client");
const Appointment = require("../../model/sequelize/appointment");
const Service = require("../../model/sequelize/service");

exports.getClients = () => {
    return Client.findAll();
};

exports.getClientById = (clientId) => {
    return Client.findByPk(clientId,
        {
            include: [{
                model: Appointment,
                as: 'appointments',
                include: [{
                    model: Service,
                    as: 'service'
                }]
            }]
        });
};

exports.createClient = (newClientData) => {
    return Client.create({
        name: newClientData.name,
        email: newClientData.email,
        phone: newClientData.phone
    });
};

exports.updateClient = (clientId, clientData) => {
    const name = clientData.name;
    const email = clientData.email;
    const phone = clientData.phone;
    return Client.update(clientData, {where: {_id: clientId }});
};

exports.deleteClient = (clientId) => {
    return Client.destroy({
        where: { _id: clientId }
    });

}; 