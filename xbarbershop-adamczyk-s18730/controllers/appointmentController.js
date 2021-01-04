exports.showAppointments = (req, res, next) => {
    res.render('pages/appointment/appointments', { navLocation: 'appointments'});
}

exports.showAddAppointmentForm = (req, res, next) => {
    res.render('pages/appointment/add', {});
}
