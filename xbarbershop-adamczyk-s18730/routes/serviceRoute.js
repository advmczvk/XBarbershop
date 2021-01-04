const express = require('express');
const router = express.Router();
const serviceController = require('../controllers/serviceController');

router.get('/', serviceController.showServices);
router.get('/add', serviceController.showAddServiceForm);
router.get('/details/:serviceID', serviceController.showServiceDetails);
router.get('/edit/:serviceID', serviceController.showEditServiceForm)

module.exports = router;
