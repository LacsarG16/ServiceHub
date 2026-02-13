const prisma = require('../utils/prisma');

const getProviderStats = async (req, res, next) => {
    try {
        const providerId = req.user.id;

        const bookings = await prisma.booking.findMany({
            where: {
                service: {
                    providerId: providerId
                }
            }
        });

        const completedBookings = bookings.filter(b => b.status.toUpperCase() === 'COMPLETED');
        const totalRevenue = completedBookings.reduce((sum, b) => sum + b.price, 0);
        const totalBookings = bookings.length;
        const completionRate = totalBookings > 0 ? (completedBookings.length / totalBookings) * 100 : 0;

        res.json({
            totalRevenue,
            totalBookings,
            completedJobs: completedBookings.length,
            completionRate: completionRate.toFixed(1) + '%',
            rating: req.user.rating || 0
        });
    } catch (error) {
        next(error);
    }
};

const getCustomerStats = async (req, res, next) => {
    try {
        const customerId = req.user.id;

        const bookings = await prisma.booking.findMany({
            where: { customerId: customerId }
        });

        const completedBookings = bookings.filter(b => b.status.toUpperCase() === 'COMPLETED');
        const totalSpent = completedBookings.reduce((sum, b) => sum + b.price, 0);

        res.json({
            totalSpent,
            totalBookings: bookings.length,
            completedJobs: completedBookings.length,
            loyaltyPoints: completedBookings.length * 10 // Simple logic
        });
    } catch (error) {
        next(error);
    }
};

const getActivity = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const role = req.user.role;

        let query = {};
        if (role === 'CUSTOMER') {
            query = { customerId: userId };
        } else {
            query = { service: { providerId: userId } };
        }

        const activities = await prisma.booking.findMany({
            where: query,
            take: 10,
            orderBy: { updatedAt: 'desc' },
            include: {
                service: true,
                customer: {
                    select: { name: true }
                }
            }
        });

        // Format activities for the UI
        const formattedActivities = activities.map(activity => ({
            id: activity.id,
            type: activity.status.toLowerCase(),
            message: role === 'CUSTOMER'
                ? `Booking for ${activity.service?.name || 'Service'} is now ${activity.status}`
                : `New status for ${activity.customer?.name || 'Customer'}'s booking: ${activity.status}`,
            time: activity.updatedAt,
            color: activity.status.toUpperCase() === 'COMPLETED' ? '#10b981' : activity.status.toUpperCase() === 'CANCELLED' ? '#ef4444' : 'var(--primary)'
        }));

        res.json(formattedActivities);
    } catch (error) {
        next(error);
    }
};

module.exports = { getProviderStats, getCustomerStats, getActivity };
