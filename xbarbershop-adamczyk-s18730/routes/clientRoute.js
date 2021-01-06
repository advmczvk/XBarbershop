const express = require('express');
const router = express.Router();
const clientController = require('../controllers/clientController');

router.get('/', clientController.showClients);
router.get('/add', clientController.showAddClientForm);
router.get('/details/:clientID', clientController.showClientDetails);
router.get('/edit/:clientID', clientController.showEditClientForm);
router.post('/add', clientController.addClient);
router.post('/edit', clientController.updateClient);
router.get('/delete/:clientID', clientController.deleteClient);

module.exports = router;

