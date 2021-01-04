exports.showClients = (req, res, next) => {
    res.render('pages/client/clients', { navLocation: 'clients'});
}

exports.showAddClientForm = (req, res, next) => {
    res.render('pages/client/add', {});
}

exports.showClientDetails = (req, res, next) => {
    res.render('pages/client/details', {});
}

exports.showEditClientForm = (req, res, next) => {
    res.render('pages/client/edit', {});
}