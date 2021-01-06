const ClientRepository = require('../repository/sequelize/ClientRepository');

exports.showClients = (req, res, next) => {
    ClientRepository.getClients()
        .then(clients => {
            res.render('pages/client/clients', {
                clients: clients,
                navLocation: 'clients'
            });
        });
}

//!!!!!!!! r_client zamiast client, bo client w ejs jest słowem zarezerwowanym i generuje błędy 

exports.showAddClientForm = (req, res, next) => {
    res.render('pages/client/form', {
        r_client: {},
        pageTitle: 'Add new client',
        formMode: 'createNew',
        btnLabel: 'Add',
        formAction: '/clients/add',
        navLocation: 'clients'
    });
}

exports.showClientDetails = (req, res, next) => {
    const clientId = req.params.clientID;
    ClientRepository.getClientById(clientId)
    .then(client => {
        res.render('pages/client/form', {
            r_client: client,
            formMode: 'details',
            pageTitle: 'Client details',
            formAction: '',
            navLocation: 'clients'
        });
    })
}

exports.showEditClientForm = (req, res, next) => {
    const clientId = req.params.clientID;
    ClientRepository.getClientById(clientId)
    .then(client => {
        res.render('pages/client/form', {
            r_client: client,
            formMode: 'edit',
            pageTitle: 'Edit client',
            btnLabel: 'Edit',
            formAction: '/clients/edit',
            navLocation: 'clients'
        });
    })
}

exports.addClient = (req, res, next) => {
    const clientData = { ...req.body };
    ClientRepository.createClient(clientData)
        .then( result => {
            res.redirect('/clients');
        });
};

exports.updateClient = (req, res, next) => {
    const clientId = req.body._id;
    const clientData = { ...req.body };
    ClientRepository.updateClient(clientId, clientData)
        .then( result => {
            res.redirect('/clients');
        });
};

exports.deleteClient = (req, res, next) => {
    const clientId = req.params.clientID;
    ClientRepository.deleteClient(clientId)
        .then( () => {
            res.redirect('/clients');
        });
};