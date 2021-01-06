const sequelize = require('./sequelize');

const Appointment = require('../../model/sequelize/appointment');
const Client = require('../../model/sequelize/client');
const Service = require('../../model/sequelize/service');

module.exports = () => {
    Client.hasMany(Appointment, {as: 'appointments', foreignKey: {name: 'client_id, allowNull: false'}, constraints: true, onDelete: 'CASCADE'});
    Appointment.belongsTo(Client, {as: 'client', foreignKey: {name: 'client_id', allowNull: false}});
    Service.hasMany(Appointment, {as: 'appointments', foreignKey: {name: 'service_id, allowNull: false'}, constraints: true, onDelete: 'CASCADE'});
    Appointment.belongsTo(Service, {as: 'service', foreignKey: {name: 'service_id', allowNull: false}});

    let allClients, allServices;
    return sequelize
    .sync({force: true})
    .then(() => {
        return Client.findAll();
    })
    .then(clients => {
        if(!clients || clients.length == 0){
            return Client.bulkCreate([
                {name: 'Jan Kowalski', email: 'jkowal@gmail.com', phone: '502931322'},
                {name: 'Jurek Kiler', email: 'jkiler@gmail.com', phone: '503965327'},
                {name: 'Ferdynand Kiepski', email: 'fkiepski@gmail.com', phone: '532736312'}
            ])
            .then(() => {
                return Client.findAll();
            });
        }
        else {
            return clients;
        }
    })
    .then( clients => {
        allClients = clients;
        return Service.findAll();
    })
    .then( services => {
        if( !services || services.length == 0 ) {
            return Service.bulkCreate([
                { name: 'Haircut', price: 80, time: 60 },
                { name: 'Bear', price: 60, time: 45 },
                { name: 'Combo', price: 120, time: 105 },
                { name: 'Trim', price: 30, time: 30 }
            ])
            .then( () => {
                return Client.findAll();
            });
        } else {
            return services;
        }
    })
    .then( services => {
        allServices = services;
        return Appointment.findAll();
    })
    .then( apps => {
        if( !apps || apps.length == 0 ) {
            return Appointment.bulkCreate([
                {date: '2020-01-08', client_id: allClients[0]._id, service_id: allServices[0]._id},
                {date: '2020-01-08', client_id: allClients[1]._id, service_id: allServices[2]._id},
                {date: '2020-01-08', client_id: allClients[2]._id, service_id: allServices[1]._id}                
            ]);
        } else {
            return apps;
        }
    });
};