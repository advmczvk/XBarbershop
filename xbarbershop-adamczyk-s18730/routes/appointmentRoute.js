const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/', appointmentController.showAppointments);
router.get('/add', appointmentController.showAddAppointmentForm);
router.get('/details/:appID', appointmentController.showAppointmentDetails);
router.get('/edit/:appID', appointmentController.showEditAppointmentForm);
router.post('/add', appointmentController.addAppointment);
router.post('/edit', appointmentController.updateAppointment);
router.get('/delete/:appID', appointmentController.deleteAppointment);

module.exports = router;