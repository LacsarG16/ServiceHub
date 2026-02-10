import React, { createContext, useContext, useState, useEffect } from 'react';

// Booking status constants
export const BOOKING_STATUS = {
    PENDING: 'pending',
    APPROVED: 'approved',
    CONFIRMED: 'confirmed',
    IN_PROGRESS: 'in_progress',
    AWAITING_PAYMENT: 'awaiting_payment',
    COMPLETED: 'completed',
    REVIEWED: 'reviewed',
    CANCELLED: 'cancelled',
    DECLINED: 'declined',
    EXPIRED: 'expired'
};

// Valid status transitions
const STATUS_TRANSITIONS = {
    [BOOKING_STATUS.PENDING]: [BOOKING_STATUS.APPROVED, BOOKING_STATUS.DECLINED, BOOKING_STATUS.CANCELLED],
    [BOOKING_STATUS.APPROVED]: [BOOKING_STATUS.CONFIRMED, BOOKING_STATUS.EXPIRED, BOOKING_STATUS.CANCELLED],
    [BOOKING_STATUS.CONFIRMED]: [BOOKING_STATUS.IN_PROGRESS, BOOKING_STATUS.CANCELLED],
    [BOOKING_STATUS.IN_PROGRESS]: [BOOKING_STATUS.AWAITING_PAYMENT, BOOKING_STATUS.CANCELLED],
    [BOOKING_STATUS.AWAITING_PAYMENT]: [BOOKING_STATUS.COMPLETED],
    [BOOKING_STATUS.COMPLETED]: [BOOKING_STATUS.REVIEWED],
    [BOOKING_STATUS.REVIEWED]: [],
    [BOOKING_STATUS.CANCELLED]: [],
    [BOOKING_STATUS.DECLINED]: [],
    [BOOKING_STATUS.EXPIRED]: []
};

// Status display configuration
export const STATUS_CONFIG = {
    [BOOKING_STATUS.PENDING]: {
        label: 'Pending',
        color: '#f59e0b',
        bgColor: 'rgba(245, 158, 11, 0.1)',
        borderColor: 'rgba(245, 158, 11, 0.2)',
        icon: '⏳'
    },
    [BOOKING_STATUS.APPROVED]: {
        label: 'Approved',
        color: '#7c3aed',
        bgColor: 'rgba(124, 58, 237, 0.1)',
        borderColor: 'rgba(124, 58, 237, 0.2)',
        icon: '✓'
    },
    [BOOKING_STATUS.CONFIRMED]: {
        label: 'Confirmed',
        color: '#10b981',
        bgColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 0.2)',
        icon: '✓✓'
    },
    [BOOKING_STATUS.IN_PROGRESS]: {
        label: 'In Progress',
        color: '#3b82f6',
        bgColor: 'rgba(59, 130, 246, 0.1)',
        borderColor: 'rgba(59, 130, 246, 0.2)',
        icon: '🔧'
    },
    [BOOKING_STATUS.AWAITING_PAYMENT]: {
        label: 'Awaiting Payment',
        color: '#f59e0b',
        bgColor: 'rgba(245, 158, 11, 0.1)',
        borderColor: 'rgba(245, 158, 11, 0.2)',
        icon: '💳'
    },
    [BOOKING_STATUS.COMPLETED]: {
        label: 'Completed',
        color: '#10b981',
        bgColor: 'rgba(16, 185, 129, 0.1)',
        borderColor: 'rgba(16, 185, 129, 0.2)',
        icon: '✅'
    },
    [BOOKING_STATUS.REVIEWED]: {
        label: 'Reviewed',
        color: '#06b6d4',
        bgColor: 'rgba(6, 182, 212, 0.1)',
        borderColor: 'rgba(6, 182, 212, 0.2)',
        icon: '⭐'
    },
    [BOOKING_STATUS.CANCELLED]: {
        label: 'Cancelled',
        color: '#ef4444',
        bgColor: 'rgba(239, 68, 68, 0.1)',
        borderColor: 'rgba(239, 68, 68, 0.2)',
        icon: '✕'
    },
    [BOOKING_STATUS.DECLINED]: {
        label: 'Declined',
        color: '#ef4444',
        bgColor: 'rgba(239, 68, 68, 0.1)',
        borderColor: 'rgba(239, 68, 68, 0.2)',
        icon: '✕'
    },
    [BOOKING_STATUS.EXPIRED]: {
        label: 'Expired',
        color: '#6b7280',
        bgColor: 'rgba(107, 114, 128, 0.1)',
        borderColor: 'rgba(107, 114, 128, 0.2)',
        icon: '⌛'
    }
};

const BookingContext = createContext();

export const useBooking = () => {
    const context = useContext(BookingContext);
    if (!context) {
        throw new Error('useBooking must be used within BookingProvider');
    }
    return context;
};

export const BookingProvider = ({ children }) => {
    const [bookings, setBookings] = useState([]);
    const [notifications, setNotifications] = useState([]);

    // Load bookings from localStorage on mount
    useEffect(() => {
        const savedBookings = localStorage.getItem('bookings');
        if (savedBookings) {
            setBookings(JSON.parse(savedBookings));
        }
    }, []);

    // Save bookings to localStorage whenever they change
    useEffect(() => {
        if (bookings.length > 0) {
            localStorage.setItem('bookings', JSON.stringify(bookings));
        }
    }, [bookings]);

    // Validate status transition
    const canTransitionTo = (currentStatus, newStatus) => {
        const allowedTransitions = STATUS_TRANSITIONS[currentStatus] || [];
        return allowedTransitions.includes(newStatus);
    };

    // Update booking status
    const updateBookingStatus = (bookingId, newStatus, metadata = {}) => {
        setBookings(prevBookings => {
            const booking = prevBookings.find(b => b.id === bookingId);

            if (!booking) {
                console.error(`Booking ${bookingId} not found`);
                return prevBookings;
            }

            if (!canTransitionTo(booking.status, newStatus)) {
                console.error(`Invalid status transition from ${booking.status} to ${newStatus}`);
                return prevBookings;
            }

            // Create status history entry
            const historyEntry = {
                from: booking.status,
                to: newStatus,
                timestamp: new Date().toISOString(),
                ...metadata
            };

            // Emit notification
            emitNotification({
                type: 'status_change',
                bookingId,
                oldStatus: booking.status,
                newStatus,
                timestamp: new Date().toISOString()
            });

            return prevBookings.map(b =>
                b.id === bookingId
                    ? {
                        ...b,
                        status: newStatus,
                        statusHistory: [...(b.statusHistory || []), historyEntry],
                        updatedAt: new Date().toISOString(),
                        ...metadata
                    }
                    : b
            );
        });
    };

    // Create new booking
    const createBooking = (bookingData) => {
        const newBooking = {
            id: `booking_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            status: BOOKING_STATUS.PENDING,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            statusHistory: [{
                from: null,
                to: BOOKING_STATUS.PENDING,
                timestamp: new Date().toISOString()
            }],
            ...bookingData
        };

        setBookings(prev => [...prev, newBooking]);

        emitNotification({
            type: 'booking_created',
            bookingId: newBooking.id,
            timestamp: new Date().toISOString()
        });

        return newBooking;
    };

    // Get bookings by status
    const getBookingsByStatus = (status) => {
        return bookings.filter(b => b.status === status);
    };

    // Get booking by ID
    const getBookingById = (bookingId) => {
        return bookings.find(b => b.id === bookingId);
    };

    // Emit notification
    const emitNotification = (notification) => {
        setNotifications(prev => [...prev, notification]);

        // Dispatch custom event for other components to listen
        const event = new CustomEvent('booking-notification', { detail: notification });
        window.dispatchEvent(event);

        // Auto-remove notification after 5 seconds
        setTimeout(() => {
            setNotifications(prev => prev.filter(n => n !== notification));
        }, 5000);
    };

    // Cancel booking
    const cancelBooking = (bookingId, reason = '') => {
        updateBookingStatus(bookingId, BOOKING_STATUS.CANCELLED, { cancellationReason: reason });
    };

    // Approve booking (provider action)
    const approveBooking = (bookingId, approvalData = {}) => {
        updateBookingStatus(bookingId, BOOKING_STATUS.APPROVED, approvalData);
    };

    // Decline booking (provider action)
    const declineBooking = (bookingId, reason = '') => {
        updateBookingStatus(bookingId, BOOKING_STATUS.DECLINED, { declineReason: reason });
    };

    // Confirm booking (after deposit payment)
    const confirmBooking = (bookingId, paymentData = {}) => {
        updateBookingStatus(bookingId, BOOKING_STATUS.CONFIRMED, { depositPayment: paymentData });
    };

    // Start service
    const startService = (bookingId) => {
        updateBookingStatus(bookingId, BOOKING_STATUS.IN_PROGRESS, { startedAt: new Date().toISOString() });
    };

    // Complete service
    const completeService = (bookingId, completionData = {}) => {
        updateBookingStatus(bookingId, BOOKING_STATUS.AWAITING_PAYMENT, {
            completedAt: new Date().toISOString(),
            ...completionData
        });
    };

    // Mark as paid and completed
    const markAsPaid = (bookingId, paymentData = {}) => {
        updateBookingStatus(bookingId, BOOKING_STATUS.COMPLETED, { finalPayment: paymentData });
    };

    // Add review
    const addReview = (bookingId, reviewData) => {
        updateBookingStatus(bookingId, BOOKING_STATUS.REVIEWED, { review: reviewData });
    };

    const value = {
        bookings,
        notifications,
        createBooking,
        updateBookingStatus,
        getBookingsByStatus,
        getBookingById,
        canTransitionTo,
        cancelBooking,
        approveBooking,
        declineBooking,
        confirmBooking,
        startService,
        completeService,
        markAsPaid,
        addReview,
        BOOKING_STATUS,
        STATUS_CONFIG
    };

    return (
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    );
};

export default BookingContext;
