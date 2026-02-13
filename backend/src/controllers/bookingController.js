const prisma = require('../utils/prisma');

const createBooking = async (req, res, next) => {
    try {
        const { serviceId, date, time, message } = req.body;
        const customerId = req.user.id;

        const service = await prisma.service.findUnique({
            where: { id: serviceId }
        });

        if (!service) {
            return res.status(404).json({ message: 'Service not found' });
        }

        const booking = await prisma.booking.create({
            data: {
                serviceId,
                customerId,
                date: new Date(date),
                time,
                message,
                price: service.price || 0,
                status: 'PENDING'
            },
            include: {
                service: {
                    include: {
                        provider: {
                            select: {
                                name: true
                            }
                        }
                    }
                }
            }
        });

        res.status(201).json(booking);
    } catch (error) {
        next(error);
    }
};

const getMyBookings = async (req, res, next) => {
    try {
        const userId = req.user.id;
        const role = req.user.role;

        let bookings;
        if (role === 'CUSTOMER') {
            bookings = await prisma.booking.findMany({
                where: { customerId: userId },
                include: {
                    service: {
                        include: {
                            provider: {
                                select: {
                                    name: true
                                }
                            }
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            });
        } else {
            // For providers, get bookings for their services
            bookings = await prisma.booking.findMany({
                where: {
                    service: {
                        providerId: userId
                    }
                },
                include: {
                    service: true,
                    customer: {
                        select: {
                            name: true,
                            email: true
                        }
                    }
                },
                orderBy: { createdAt: 'desc' }
            });
        }

        res.json(bookings);
    } catch (error) {
        next(error);
    }
};

const updateBookingStatus = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { status } = req.body;
        const userId = req.user.id;

        const booking = await prisma.booking.findUnique({
            where: { id },
            include: {
                service: true
            }
        });

        if (!booking) {
            return res.status(404).json({ message: 'Booking not found' });
        }

        // Only provider of the service or the customer (for cancellation) can update status
        const isProvider = booking.service.providerId === userId;
        const isCustomer = booking.customerId === userId;

        if (!isProvider && !isCustomer) {
            return res.status(403).json({ message: 'Not authorized to update this booking' });
        }

        // Role-based status update restrictions
        if (isCustomer && status !== 'CANCELLED') {
            return res.status(403).json({ message: 'Customers can only cancel bookings' });
        }

        const updatedBooking = await prisma.booking.update({
            where: { id },
            data: { status },
            include: {
                service: true
            }
        });

        res.json(updatedBooking);
    } catch (error) {
        next(error);
    }
};

module.exports = { createBooking, getMyBookings, updateBookingStatus };
