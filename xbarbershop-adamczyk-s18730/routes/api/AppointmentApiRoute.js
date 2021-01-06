const express = require('express');
const router = express.Router();

const appApiRoute = require('../../api/AppointmentAPI');

router.get('/', appApiRoute.getAppointments);
router.get('/:appId', appApiRoute.getAppointmentById);
router.post('/', appApiRoute.createAppointment);
router.put('/:appId', appApiRoute.updateAppointment);
router.delete('/:appId', appApiRoute.deleteAppointment);

module.exports = router;