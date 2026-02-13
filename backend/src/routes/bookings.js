const express = require('express');
const { createBooking, getMyBookings, updateBookingStatus } = require('../controllers/bookingController');
const { protect } = require('../middleware/auth');

const router = express.Router();

router.post('/', protect, createBooking);
router.get('/', protect, getMyBookings);
router.patch('/:id/status', protect, updateBookingStatus);

module.exports = router;
