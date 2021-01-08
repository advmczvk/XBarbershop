const express = require('express');
const router = express.Router();

const serviceApiController = require('../../api/ServiceAPI');

router.get('/', serviceApiController.getServices);
router.get('/:serId', serviceApiController.getServiceById);
router.post('/', serviceApiController.createService);
router.put('/:serId', serviceApiController.updateService);
router.delete('/:serId', serviceApiController.deleteService);

module.exports = router;