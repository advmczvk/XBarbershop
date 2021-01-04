exports.showServices = (req, res, next) => {
    res.render('pages/service/services', { navLocation: 'services'});
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