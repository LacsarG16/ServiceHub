const express = require('express');
const { getAllServices, getServiceById, createService, getRecommendedServices } = require('../controllers/serviceController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/', getAllServices);
router.get('/recommended', getRecommendedServices);
router.get('/:id', getServiceById);
router.post('/', protect, createService);

module.exports = router;
