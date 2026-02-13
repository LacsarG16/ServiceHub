const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const errorHandler = require('./middleware/errorHandler');

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/api/health', (req, res) => {
    res.json({ status: 'up', timestamp: new Date().toISOString() });
});

// Auth Routes
app.use('/api/auth', require('./routes/auth'));

// Booking Routes
app.use('/api/bookings', require('./routes/bookings'));

// Service Routes
app.use('/api/services', require('./routes/services'));

// Stat Routes
app.use('/api/stats', require('./routes/stats'));

// Error Handler
app.use(errorHandler);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
