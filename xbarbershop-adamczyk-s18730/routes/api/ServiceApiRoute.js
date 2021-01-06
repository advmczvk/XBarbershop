const express = require('express');
const router = express.Router();

const serviceApiRoute = require('../../api/ServiceAPI');

router.get('/', serviceApiRoute.getServices);
router.get('/:serId', serviceApiRoute.getServiceById);
router.post('/', serviceApiRoute.createService);
router.put('/:serId', serviceApiRoute.updateService);
router.delete('/:serId', serviceApiRoute.deleteService);

module.exports = router;