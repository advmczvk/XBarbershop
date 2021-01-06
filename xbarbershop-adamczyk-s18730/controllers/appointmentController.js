const AppointmentRepository = require('../repository/sequelize/AppointmentRepository');
const ClientRepository = require('../repository/sequelize/ClientRepository');
const ServiceRepository = require('../repository/sequelize/ServiceRepository');

exports.showAppointments = (req, res, next) => {
    let allApps, allClients, allServices;
    AppointmentRepository.getAppointments()
        .then(apps => {
            allApps = apps;
            return ClientRepository.getClients()
        })
        .then(clients => {
            allClients = clients;
            return ServiceRepository.getServices();
        })
        .then(services => {
            allServices = services;
            res.render('pages/appointment/appointments', {
                bao: 'maslo',
                apps: allApps,
                allClients: allClients,
                allServices: allServices,
                navLocation: 'appointments'
            });
        });
}

exports.showAddAppointmentForm = (req, res, next) => {
    res.render('pages/appointment/add', {});
}
