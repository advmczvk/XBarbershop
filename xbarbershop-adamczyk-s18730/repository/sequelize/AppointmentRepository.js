const Sequelize = require('sequelize');

const Appointment = require('../../model/sequelize/appointment');
const Client = require('../../model/sequelize/client');
const Service = require('../../model/sequelize/service');

exports.getAppointments = () => {
    return Appointment.findAll({include: [
        {
            model: Client,
            as: 'client'
        },
        {
            model: Service,
            as: 'service'
        }]
    });
};


exports.getAppointmentById = (appId) => {
    return Appointment.findByPk(appId, {include: [
            {
                model: Client,
                as: 'client'
            },
            {
                model: Service,
                as: 'service'
            }]
    });
};

exports.createAppointment = (data) => {
    console.log(JSON.stringify(data));

    return Appointment.create({
        date: data.date,
        client_id: data.client_id,
        service_id: data.service_id,
    });
};

exports.updateAppointment = (appId, data) => {
    return Appointment.update(data, {where: {_id: appId }});
}

exports.deleteAppointment = (appId) => {
    return Appointment.destroy({
        where: { _id: appId }
    });
}

exports.deleteManyEmployments = (appointmentIds) => {
    return Appointment.find({ _id: { [Sequelize.Op.in]: appointmentIds }})
}