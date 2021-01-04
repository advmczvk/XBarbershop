const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.showClients);
router.get('/add', clientController.showAddClientForm);
router.get('/details/:clientID', clientController.showClientDetails);
router.get('/edit/:clientID', clientController.showEditClientForm)

module.exports = router;

