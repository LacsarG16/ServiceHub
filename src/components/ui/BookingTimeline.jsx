import React from 'react';
import { CheckCircle, Circle } from 'lucide-react';
import { STATUS_CONFIG } from '../../context/BookingContext';

const BookingTimeline = ({ booking }) => {
    if (!booking || !booking.statusHistory) {
        return null;
    }

    const timelineSteps = [
        { status: 'pending', label: 'Request Submitted' },
        { status: 'approved', label: 'Approved by Provider' },
        { status: 'confirmed', label: 'Deposit Paid' },
        { status: 'in_progress', label: 'Service in Progress' },
        { status: 'awaiting_payment', label: 'Awaiting Final Payment' },
        { status: 'completed', label: 'Service Completed' },
        { status: 'reviewed', label: 'Reviewed' }
    ];

    // Get the index of the current status
    const currentStatusIndex = timelineSteps.findIndex(step => step.status === booking.status);

    // Check if booking was cancelled or declined
    const isCancelled = booking.status === 'cancelled';
    const isDeclined = booking.status === 'declined';
    const isExpired = booking.status === 'expired';

    if (isCancelled || isDeclined || isExpired) {
        return (
            <div style={{
                padding: '1.5rem',
                borderRadius: 'var(--radius-xl)',
                background: 'rgba(239, 68, 68, 0.05)',
                border: '1px solid rgba(239, 68, 68, 0.1)',
                textAlign: 'center'
            }}>
                <div style={{
                    fontSize: '2rem',
                    marginBottom: '0.5rem'
                }}>
                    {STATUS_CONFIG[booking.status]?.icon}
                </div>
                <h4 style={{
                    fontSize: '1.1rem',
                    fontWeight: '700',
                    color: STATUS_CONFIG[booking.status]?.color,
                    marginBottom: '0.25rem'
                }}>
                    Booking {STATUS_CONFIG[booking.status]?.label}
                </h4>
                {booking.cancellationReason && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Reason: {booking.cancellationReason}
                    </p>
                )}
                {booking.declineReason && (
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                        Reason: {booking.declineReason}
                    </p>
                )}
            </div>
        );
    }

    return (
        <div style={{
            padding: '2rem',
            borderRadius: 'var(--radius-2xl)',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            backdropFilter: 'var(--glass-blur)',
            WebkitBackdropFilter: 'var(--glass-blur)'
        }}>
            <h3 style={{
                fontSize: '1.1rem',
                fontWeight: '800',
                color: 'var(--text-main)',
                marginBottom: '2rem'
            }}>
                Booking Progress
            </h3>

            <div style={{ position: 'relative' }}>
                {/* Vertical Line */}
                <div style={{
                    position: 'absolute',
                    left: '15px',
                    top: '20px',
                    bottom: '20px',
                    width: '2px',
                    background: 'var(--glass-border)'
                }} />

                {/* Active Progress Line */}
                <div style={{
                    position: 'absolute',
                    left: '15px',
                    top: '20px',
                    height: `${(currentStatusIndex / (timelineSteps.length - 1)) * 100}%`,
                    width: '2px',
                    background: 'var(--primary)',
                    transition: 'height 0.5s ease'
                }} />

                {/* Timeline Steps */}
                {timelineSteps.map((step, index) => {
                    const isCompleted = index <= currentStatusIndex;
                    const isCurrent = index === currentStatusIndex;
                    const historyEntry = booking.statusHistory?.find(h => h.to === step.status);

                    return (
                        <div
                            key={step.status}
                            style={{
                                position: 'relative',
                                paddingLeft: '3.5rem',
                                paddingBottom: index < timelineSteps.length - 1 ? '2rem' : '0',
                                minHeight: '60px'
                            }}
                        >
                            {/* Circle Icon */}
                            <div style={{
                                position: 'absolute',
                                left: '0',
                                top: '0',
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                background: isCompleted ? 'var(--primary)' : 'var(--background)',
                                border: `2px solid ${isCompleted ? 'var(--primary)' : 'var(--glass-border)'}`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: isCompleted ? 'white' : 'var(--text-muted)',
                                boxShadow: isCurrent ? '0 0 0 4px rgba(6, 182, 212, 0.1)' : 'none',
                                transition: 'all 0.3s ease',
                                zIndex: 1
                            }}>
                                {isCompleted ? (
                                    <CheckCircle size={16} fill="currentColor" />
                                ) : (
                                    <Circle size={12} />
                                )}
                            </div>

                            {/* Step Content */}
                            <div>
                                <h4 style={{
                                    fontSize: '0.95rem',
                                    fontWeight: isCompleted ? '700' : '600',
                                    color: isCompleted ? 'var(--text-main)' : 'var(--text-muted)',
                                    marginBottom: '0.25rem'
                                }}>
                                    {step.label}
                                </h4>
                                {historyEntry && (
                                    <p style={{
                                        fontSize: '0.8rem',
                                        color: 'var(--text-muted)'
                                    }}>
                                        {new Date(historyEntry.timestamp).toLocaleString('en-US', {
                                            month: 'short',
                                            day: 'numeric',
                                            hour: '2-digit',
                                            minute: '2-digit'
                                        })}
                                    </p>
                                )}
                                {isCurrent && (
                                    <span style={{
                                        display: 'inline-block',
                                        marginTop: '0.5rem',
                                        padding: '0.25rem 0.75rem',
                                        borderRadius: '8px',
                                        background: 'rgba(6, 182, 212, 0.1)',
                                        color: 'var(--primary)',
                                        fontSize: '0.75rem',
                                        fontWeight: '700'
                                    }}>
                                        Current Status
                                    </span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default BookingTimeline;
