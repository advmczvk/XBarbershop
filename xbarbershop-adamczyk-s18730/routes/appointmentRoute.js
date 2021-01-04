const express = require('express');
const router = express.Router();
const appointmentController = require('../controllers/appointmentController');

router.get('/', appointmentController.showAppointments);
router.get('/add', appointmentController.showAddAppointmentForm);

module.exports = router;