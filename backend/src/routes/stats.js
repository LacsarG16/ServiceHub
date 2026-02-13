const express = require('express');
const { getProviderStats, getCustomerStats, getActivity } = require('../controllers/statController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.get('/provider', protect, getProviderStats);
router.get('/customer', protect, getCustomerStats);
router.get('/activity', protect, getActivity);

module.exports = router;
