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
                apps: allApps,
                allClients: allClients,
                allServices: allServices,
                navLocation: 'appointments'
            });
        });
}

exports.showAddAppointmentForm = (req, res, next) => {
    let allClients, allServices;
    ClientRepository.getClients()
        .then(client => {
            allClients = client;
            return ServiceRepository.getServices();
        })
        .then(services => {
            allServices = services;
            res.render('pages/appointment/form', {
                appointment: {},
                formMode: 'createNew',
                allClients: allClients,
                allServices: allServices,
                pageTitle: 'Add appointment',
                formAction: '/appointments/add',
                navLocation: 'appointments',
                validationErrors: []
            });
        });
}

exports.showEditAppointmentForm = (req, res, next) => {
    const appID = req.params.appID;
    let allClients, allServices;
    ClientRepository.getClients()
        .then(clients => {
            allClients = clients;
            return ServiceRepository.getServices();
        })
        .then(services => {
            allServices = services;
            return AppointmentRepository.getAppointmentById(appID)
        })
        .then(appointment => {
            res.render('pages/appointment/form', {
                appointment: appointment,
                allClients: allClients,
                allServices: allServices,
                formMode: 'edit',
                pageTitle: 'Edit appointment',
                formAction: '/appointments/edit',
                navLocation: 'appointments',
                validationErrors: []
            });
        });
}

exports.showAppointmentDetails = (req, res, next) => {
    const appID = req.params.appID;
    let allClients, allServices;
    ClientRepository.getClients()
        .then(clients => {
            allClients = clients;
            return ServiceRepository.getServices();
        })
        .then(services => {
            allServices = services;
            return AppointmentRepository.getAppointmentById(appID)
        })
        .then(appointment => {
            res.render('pages/appointment/form', {
                appointment: appointment,
                allClients: allClients,
                allServices: allServices,
                formMode: 'details',
                pageTitle: 'Appointment details',
                formAction: '',
                navLocation: 'appointments',
                validationErrors: []
            });

        });
}

exports.addAppointment = (req, res, next) => {
    const appointmentData = { ...req.body };
    AppointmentRepository.createAppointment(appointmentData)
        .then(result => {
            res.redirect('/appointments');
        }).catch(err => {
            let allClients, allServices, thisAppointment = {
                date: appointmentData.date,
                client: { _id: appointmentData.client_id },
                service: { _id: appointmentData.service_id }
            };
            ClientRepository.getClients()
                .then(clients => {
                    allClients = clients;
                    return ServiceRepository.getServices();
                })
                .then(services => {
                    allServices = services;
                    res.render('pages/appointment/form', {
                        appointment: thisAppointment,
                        allClients: allClients,
                        allServices: allServices,
                        pageTitle: 'Add appointment',
                        formMode: 'createNew',
                        formAction: '/appointments/add',
                        navLocation: 'appointments',
                        validationErrors: err.errors
                    });
                }); 
        });
};

exports.updateAppointment = (req, res, next) => {
    const appointmentId = req.body._id;
    const appointmentData = { ...req.body };
    AppointmentRepository.updateAppointment(appointmentId, appointmentData)
        .then(result => {
            res.redirect('/appointments');
        }).catch(err => {
            let allClients, allServices, thisAppointment = {
                date: appointmentData.date,
                client: { _id: appointmentData.client_id },
                service: { _id: appointmentData.service_id }
            };
            ClientRepository.getClients()
                .then(clients => {
                    allClients = clients;
                    return ServiceRepository.getServices();
                })
                .then(services => {
                    allServices = services;
                    res.render('pages/appointment/form', {
                        appointment: thisAppointment,
                        allClients: allClients,
                        allServices: allServices,
                        pageTitle: 'Edit appointment',
                        formMode: 'edit',
                        formAction: '/appointments/edit', 
                        navLocation: 'appointments',
                        validationErrors: err.errors
                    });
                });
        });
};

exports.deleteAppointment = (req, res, next) => {
    const appointmentId = req.params.appID;
    AppointmentRepository.deleteAppointment(appointmentId)
        .then(() => {
            res.redirect('/appointments');
        });
};