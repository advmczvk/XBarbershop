const ServiceRepository = require('../repository/sequelize/ServiceRepository');

exports.showServices = (req, res, next) => {
    ServiceRepository.getServices()
        .then(services => {
            res.render('pages/service/services', {
                services: services,
                navLocation: 'services'
            });
        });
}

exports.showAddServiceForm = (req, res, next) => {
    res.render('pages/service/add', {});
}

exports.showServiceDetails = (req, res, next) => {
    res.render('pages/service/details', {});
}

exports.showEditServiceForm = (req, res, next) => {
    res.render('pages/service/edit', {});
}