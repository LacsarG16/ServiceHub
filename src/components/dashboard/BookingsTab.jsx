import React, { useState } from 'react';
import {
    Search,
    Filter,
    Calendar as CalendarIcon,
    ChevronLeft,
    ChevronRight,
    MoreHorizontal,
    User,
    Clock,
    DollarSign,
    CheckCircle2,
    XCircle,
    Info
} from 'lucide-react';
import {
    format,
    startOfMonth,
    endOfMonth,
    startOfWeek,
    endOfWeek,
    eachDayOfInterval,
    isSameMonth,
    isSameDay,
    addMonths,
    subMonths,
    isToday
} from 'date-fns';

const BookingsTab = ({ onBookingClick, onAddBooking }) => {
    const [view, setView] = useState('calendar');
    const [currentMonth, setCurrentMonth] = useState(new Date(2026, 1, 1)); // February 2026
    const [selectedDate, setSelectedDate] = useState(new Date(2026, 1, 25)); // Default selection

    // ... internal bookings and status logic ...

    const bookings = [
        { id: 1, customer: "Alice Johnson", service: "Elite Cleaning", date: new Date(2026, 1, 25), time: "09:00 AM", status: "Upcoming", amount: "$120" },
        { id: 2, customer: "Mark Stevenson", service: "Elite Cleaning", date: new Date(2026, 1, 24), time: "02:00 PM", status: "Completed", amount: "$120" },
        { id: 3, customer: "Jenny Wilson", service: "Move-out Special", date: new Date(2026, 1, 23), time: "11:00 AM", status: "Cancelled", amount: "$250" },
        { id: 4, customer: "Robert Fox", service: "Deep Carpet Clean", date: new Date(2026, 1, 26), time: "10:30 AM", status: "Upcoming", amount: "$160" },
        { id: 5, customer: "Sarah Miller", service: "Elite Cleaning", date: new Date(2026, 1, 27), time: "01:00 PM", status: "Upcoming", amount: "$120" },
        { id: 6, customer: "Tom Hanks", service: "Elite Cleaning", date: new Date(2026, 1, 25), time: "03:00 PM", status: "Upcoming", amount: "$120" }
    ];

    // Mock Availability (logic to determine if a date is "Available")
    const getAvailabilityStatus = (date) => {
        const bookingsOnDate = bookings.filter(b => isSameDay(b.date, date));
        const day = date.getDay();

        // Sunday (0) and Saturday (6) are "Limited"
        if (day === 0 || day === 6) {
            return bookingsOnDate.length > 0 ? 'booked' : 'limited';
        }

        if (bookingsOnDate.length >= 2) return 'fully-booked';
        if (bookingsOnDate.length > 0) return 'partially-booked';
        return 'available';
    };

    const nextMonth = () => setCurrentMonth(addMonths(currentMonth, 1));
    const prevMonth = () => setCurrentMonth(subMonths(currentMonth, 1));

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
                    <h3 style={{ fontSize: '1.5rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>{format(currentMonth, 'MMMM yyyy')}</h3>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button onClick={prevMonth} className="glass hover-lift" style={{ padding: '0.6rem', borderRadius: '50%', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }}><ChevronLeft size={20} /></button>
                        <button onClick={nextMonth} className="glass hover-lift" style={{ padding: '0.6rem', borderRadius: '50%', border: '1px solid var(--glass-border)', color: 'var(--text-main)' }}><ChevronRight size={20} /></button>
                    </div>
                </div>

                {/* Legend */}
                <div style={{ display: 'flex', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
                        <span>Available</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--primary)' }}></div>
                        <span>Booked</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: '#ef4444' }}></div>
                        <span>Fully Booked</span>
                    </div>
                </div>
            </div>
        );
    };

    const renderDays = () => {
        const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', marginBottom: '0.5rem' }}>
                {days.map(day => (
                    <div key={day} style={{ textAlign: 'center', fontWeight: '700', fontSize: '0.85rem', color: 'var(--text-muted)', padding: '0.5rem' }}>
                        {day}
                    </div>
                ))}
            </div>
        );
    };

    const renderCells = () => {
        const monthStart = startOfMonth(currentMonth);
        const monthEnd = endOfMonth(monthStart);
        const startDate = startOfWeek(monthStart);
        const endDate = endOfWeek(monthEnd);

        const days = eachDayOfInterval({ start: startDate, end: endDate });

        return (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', background: 'var(--glass-border)', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--glass-border)', boxShadow: 'var(--glass-card-shadow)' }}>
                {days.map(day => {
                    const status = getAvailabilityStatus(day);
                    const isSelected = isSameDay(day, selectedDate);
                    const isCurrentMonth = isSameMonth(day, monthStart);
                    const dayBookings = bookings.filter(b => isSameDay(b.date, day));

                    return (
                        <div
                            key={day.toISOString()}
                            onClick={() => setSelectedDate(day)}
                            style={{
                                minHeight: '110px',
                                background: isSelected ? 'rgba(6, 182, 212, 0.1)' : isCurrentMonth ? 'var(--glass-bg)' : 'rgba(0,0,0,0.02)',
                                backdropFilter: 'blur(8px)',
                                padding: '1rem',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: isSelected ? '2px solid var(--primary)' : '1px solid transparent',
                                position: 'relative',
                                zIndex: isSelected ? 2 : 1
                            }}
                            className="hover-lift"
                        >
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <span style={{
                                    fontSize: '0.9rem',
                                    fontWeight: isToday(day) ? '800' : '500',
                                    color: isToday(day) ? 'var(--primary)' : isCurrentMonth ? 'var(--text-main)' : 'var(--text-muted)'
                                }}>
                                    {format(day, 'd')}
                                </span>
                                {isCurrentMonth && (
                                    <div style={{
                                        width: '8px',
                                        height: '8px',
                                        borderRadius: '50%',
                                        backgroundColor: status === 'available' ? '#10b981' : status === 'fully-booked' ? '#ef4444' : 'var(--primary)'
                                    }}></div>
                                )}
                            </div>

                            <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
                                {dayBookings.slice(0, 2).map((b, idx) => (
                                    <div
                                        key={idx}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            onBookingClick(b);
                                        }}
                                        style={{
                                            fontSize: '0.7rem',
                                            padding: '4px 8px',
                                            borderRadius: '8px',
                                            background: b.status === 'Cancelled' ? 'rgba(239, 68, 68, 0.15)' : 'rgba(6, 182, 212, 0.15)',
                                            color: b.status === 'Cancelled' ? '#ef4444' : 'var(--primary)',
                                            fontWeight: '800',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis',
                                            border: `1px solid ${b.status === 'Cancelled' ? 'rgba(239, 68, 68, 0.2)' : 'rgba(6, 182, 212, 0.2)'}`
                                        }}
                                    >
                                        {b.customer.split(' ')[0]} - {b.time}
                                    </div>
                                ))}
                                {dayBookings.length > 2 && (
                                    <span style={{ fontSize: '0.6rem', color: 'var(--text-muted)', fontWeight: '600' }}>+ {dayBookings.length - 2} more</span>
                                )}
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    };

    const renderDetails = () => {
        const dayBookings = bookings.filter(b => isSameDay(b.date, selectedDate));
        const status = getAvailabilityStatus(selectedDate);

        return (
            <div className="glass-card" style={{ padding: '2.5rem' }}>
                <div style={{ borderBottom: '1px solid var(--glass-border)', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px', marginBottom: '0.75rem' }}>Schedule for {format(selectedDate, 'EEEE, MMM do')}</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span style={{
                            fontSize: '0.85rem',
                            fontWeight: '800',
                            color: status === 'available' ? 'var(--secondary)' : status === 'fully-booked' ? '#ef4444' : 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem',
                            padding: '0.4rem 0.85rem',
                            background: status === 'available' ? 'rgba(16, 185, 129, 0.1)' : status === 'fully-booked' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(6, 182, 212, 0.1)',
                            borderRadius: '12px'
                        }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: status === 'available' ? 'var(--secondary)' : status === 'fully-booked' ? '#ef4444' : 'var(--primary)' }}></div>
                            {status === 'available' ? 'Open for Bookings' : status === 'fully-booked' ? 'Fully Booked' : 'Limited Availability'}
                        </span>
                    </div>
                </div>

                {dayBookings.length > 0 ? (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {dayBookings.map(b => (
                            <div
                                key={b.id}
                                onClick={() => onBookingClick(b)}
                                className="glass hover-lift"
                                style={{ padding: '1.25rem', borderRadius: '18px', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                            >
                                <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                                        <User size={22} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.2rem' }}>{b.customer}</p>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '500' }}>
                                            <Clock size={14} /> {b.time} • {b.service}
                                        </p>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontWeight: '900', fontSize: '1.1rem', color: 'var(--text-main)' }}>{b.amount}</p>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '800',
                                        color: b.status === 'Completed' ? 'var(--secondary)' : b.status === 'Cancelled' ? '#ef4444' : 'var(--primary)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '0.5px'
                                    }}>
                                        {b.status}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div style={{ textAlign: 'center', padding: '3rem 1rem', color: 'var(--text-muted)' }}>
                        <CalendarIcon size={40} style={{ opacity: 0.2, marginBottom: '1rem' }} />
                        <p>No bookings scheduled for this date.</p>
                        <button
                            onClick={onAddBooking}
                            style={{ marginTop: '1.5rem', background: 'none', color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', border: 'none', cursor: 'pointer' }}
                        >
                            + Create Manual Entry
                        </button>
                    </div>
                )}
            </div>
        );
    };

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                <h2 style={{ fontSize: '2rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-1px' }}>My <span className="text-gradient-primary">Bookings</span></h2>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button
                        onClick={onAddBooking}
                        className="btn-primary"
                        style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        + New Booking
                    </button>
                    <div className="glass" style={{ display: 'flex', borderRadius: '16px', padding: '0.35rem', border: '1px solid var(--glass-border)' }}>
                        <button
                            onClick={() => setView('list')}
                            style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', background: view === 'list' ? 'var(--primary)' : 'transparent', color: view === 'list' ? 'white' : 'var(--text-muted)', fontWeight: '800', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
                        >
                            List
                        </button>
                        <button
                            onClick={() => setView('calendar')}
                            style={{ padding: '0.6rem 1.25rem', borderRadius: '12px', background: view === 'calendar' ? 'var(--primary)' : 'transparent', color: view === 'calendar' ? 'white' : 'var(--text-muted)', fontWeight: '800', border: 'none', cursor: 'pointer', transition: 'all 0.3s' }}
                        >
                            Calendar
                        </button>
                    </div>
                </div>
            </div>

            {view === 'list' ? (
                <>
                    <div className="glass-card" style={{
                        padding: '1.75rem 2.25rem',
                        marginBottom: '2.5rem'
                    }}>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, position: 'relative', minWidth: '300px' }}>
                                <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type="text"
                                    placeholder="Search customers or services..."
                                    style={{
                                        width: '100%',
                                        padding: '1rem 1rem 1rem 3.5rem',
                                        borderRadius: '16px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'var(--glass-bg)',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        fontSize: '1rem',
                                        fontWeight: '500'
                                    }}
                                />
                            </div>
                            <button className="glass hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 1.75rem', borderRadius: '16px', border: '1px solid var(--glass-border)', color: 'var(--text-main)', fontWeight: '800', fontSize: '0.95rem' }}>
                                <Filter size={18} strokeWidth={2.5} /> Filters
                            </button>
                        </div>
                    </div>

                    <div className="glass-card" style={{
                        overflow: 'hidden'
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
                            <thead style={{ background: '#fcfdfe' }}>
                                <tr style={{ textAlign: 'left' }}>
                                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer</th>
                                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Service</th>
                                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date & Time</th>
                                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Amount</th>
                                    <th style={{ padding: '1.25rem 2rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                                    <th style={{ padding: '1.25rem 2rem' }}></th>
                                </tr>
                            </thead>
                            <tbody>
                                {bookings.map((booking) => (
                                    <tr
                                        key={booking.id}
                                        onClick={() => onBookingClick(booking)}
                                        style={{ borderBottom: '1px solid var(--glass-border)', cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                        className="hover-lift"
                                    >
                                        <td style={{ padding: '1.25rem 2rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <div style={{
                                                    width: '40px',
                                                    height: '40px',
                                                    borderRadius: '12px',
                                                    background: 'linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)',
                                                    color: 'white',
                                                    display: 'flex',
                                                    alignItems: 'center',
                                                    justifyContent: 'center',
                                                    fontSize: '0.9rem',
                                                    fontWeight: '800',
                                                    boxShadow: '0 4px 10px rgba(59, 130, 246, 0.3)'
                                                }}>
                                                    {booking.customer.charAt(0)}
                                                </div>
                                                <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>{booking.customer}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.25rem 2rem', color: 'var(--text-muted)', fontWeight: '500' }}>{booking.service}</td>
                                        <td style={{ padding: '1.25rem 2rem' }}>
                                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                                <span style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-main)' }}>{format(booking.date, 'MMM dd, yyyy')}</span>
                                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '500' }}>{booking.time}</span>
                                            </div>
                                        </td>
                                        <td style={{ padding: '1.25rem 2rem', fontWeight: '800', color: 'var(--text-main)', fontSize: '1rem' }}>{booking.amount}</td>
                                        <td style={{ padding: '1.25rem 2rem' }}>
                                            <span style={{
                                                padding: '0.45rem 1rem',
                                                borderRadius: 'var(--radius-full)',
                                                fontSize: '0.75rem',
                                                fontWeight: '800',
                                                backgroundColor: booking.status === 'Upcoming' ? 'rgba(6, 182, 212, 0.12)' : booking.status === 'Completed' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(239, 68, 68, 0.12)',
                                                color: booking.status === 'Upcoming' ? 'var(--primary)' : booking.status === 'Completed' ? 'var(--secondary)' : '#ef4444',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1.25rem 2rem', textAlign: 'right' }}>
                                            <button className="glass hover-lift" style={{ color: 'var(--text-muted)', border: '1px solid var(--glass-border)', padding: '0.6rem', borderRadius: '12px' }}>
                                                <MoreHorizontal size={20} />
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </>
            ) : (
                <div style={{ display: 'grid', gridTemplateColumns: '1.8fr 1fr', gap: '2.5rem' }}>
                    <div className="glass-card" style={{
                        padding: '2.5rem'
                    }}>
                        {renderHeader()}
                        {renderDays()}
                        {renderCells()}
                    </div>
                    {renderDetails()}
                </div>
            )}
        </div>
    );
};

export default BookingsTab;
