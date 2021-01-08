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
    res.render('pages/service/form', {
        service: {},
        pageTitle: 'New service',
        formMode: 'createNew',
        btnLabel: 'Add',
        formAction: '/services/add',
        navLocation: 'services'
    });
}

exports.showEditServiceForm = (req, res, next) => {
    const serviceID = req.params.serviceID;
    ServiceRepository.getServiceById(serviceID)
    .then(service => {
        res.render('pages/service/form', {
            service: service,
            pageTitle: 'Edit service',
            formMode: 'edit',
            btnLabel: 'Edit',
            formAction: '/services/edit',
            navLocation: 'services'
        });
    })
}

exports.showServiceDetails = (req, res, next) => {
    const serviceID = req.params.serviceID;
    ServiceRepository.getServiceById(serviceID)
    .then(service => {
        res.render('pages/service/form', {
            service: service,
            formMode: 'details',
            pageTitle: 'Service details',
            formAction: '',
            navLocation: 'services'
        }); 
    });
}

exports.addService = (req, res, next) => {
    const serviceData = { ...req.body };
    ServiceRepository.createService(serviceData)
        .then( result => {
            res.redirect('/services');
        });
};

exports.updateService = (req, res, next) => {
    const serviceId = req.body._id;
    const serviceData = { ...req.body };
    ServiceRepository.updateService(serviceId, serviceData)
        .then( result => {
            res.redirect('/services');
        });
};

exports.deleteService = (req, res, next) => {
    const serviceId = req.params.serviceID;
    ServiceRepository.deleteService(serviceId)
        .then( () => {
            res.redirect('/services');
        });
};