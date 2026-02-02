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
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{format(currentMonth, 'MMMM yyyy')}</h3>
                    <div style={{ display: 'flex', gap: '0.5rem' }}>
                        <button onClick={prevMonth} style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--white)', border: '1px solid var(--glass-border)' }}><ChevronLeft size={18} /></button>
                        <button onClick={nextMonth} style={{ padding: '0.5rem', borderRadius: '50%', background: 'var(--white)', border: '1px solid var(--glass-border)' }}><ChevronRight size={18} /></button>
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
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '1px', background: 'var(--glass-border)', borderRadius: 'var(--radius-md)', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
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
                                minHeight: '100px',
                                background: isCurrentMonth ? 'var(--white)' : 'var(--background)',
                                padding: '0.75rem',
                                cursor: 'pointer',
                                transition: 'all 0.2s',
                                border: isSelected ? '2px solid var(--primary)' : '2px solid transparent',
                                position: 'relative'
                            }}
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
                                            fontSize: '0.65rem',
                                            padding: '2px 6px',
                                            borderRadius: '4px',
                                            background: b.status === 'Cancelled' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(59, 130, 246, 0.1)',
                                            color: b.status === 'Cancelled' ? '#ef4444' : 'var(--primary)',
                                            fontWeight: '700',
                                            whiteSpace: 'nowrap',
                                            overflow: 'hidden',
                                            textOverflow: 'ellipsis'
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
            <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'var(--white)', position: 'relative' }}>
                <div style={{ borderBottom: '1px solid #f1f5f9', paddingBottom: '1.5rem', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.1rem', marginBottom: '0.5rem' }}>Schedule for {format(selectedDate, 'EEEE, MMMM do')}</h3>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <span style={{
                            fontSize: '0.8rem',
                            fontWeight: '700',
                            color: status === 'available' ? '#10b981' : status === 'fully-booked' ? '#ef4444' : 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.4rem'
                        }}>
                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: status === 'available' ? '#10b981' : status === 'fully-booked' ? '#ef4444' : 'var(--primary)' }}></div>
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
                                style={{ padding: '1.25rem', borderRadius: 'var(--radius-md)', background: 'var(--background)', border: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
                                onMouseEnter={(e) => e.currentTarget.style.background = 'var(--glass-bg)'}
                                onMouseLeave={(e) => e.currentTarget.style.background = 'var(--background)'}
                            >
                                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--glass-border)' }}>
                                        <User size={20} color="var(--primary)" />
                                    </div>
                                    <div>
                                        <p style={{ fontWeight: '700', marginBottom: '0.1rem' }}>{b.customer}</p>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                                            <Clock size={12} /> {b.time} • {b.service}
                                        </p>
                                    </div>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontWeight: '700', fontSize: '0.9rem' }}>{b.amount}</p>
                                    <span style={{
                                        fontSize: '0.7rem',
                                        fontWeight: '800',
                                        color: b.status === 'Completed' ? '#10b981' : b.status === 'Cancelled' ? '#ef4444' : 'var(--primary)',
                                        textTransform: 'uppercase'
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
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem' }}>Bookings</h2>
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <button
                        onClick={onAddBooking}
                        className="btn-primary"
                        style={{ padding: '0.6rem 1.2rem', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
                    >
                        + New Booking
                    </button>
                    <div style={{ display: 'flex', background: 'white', borderRadius: 'var(--radius-md)', padding: '0.25rem', border: '1px solid #e2e8f0' }}>
                        <button
                            onClick={() => setView('list')}
                            style={{ padding: '0.5rem 1rem', borderRadius: '6px', background: view === 'list' ? 'var(--primary)' : 'transparent', color: view === 'list' ? 'white' : 'var(--text-muted)', fontWeight: '600', border: 'none', cursor: 'pointer' }}
                        >
                            List
                        </button>
                        <button
                            onClick={() => setView('calendar')}
                            style={{ padding: '0.5rem 1rem', borderRadius: '6px', background: view === 'calendar' ? 'var(--primary)' : 'transparent', color: view === 'calendar' ? 'white' : 'var(--text-muted)', fontWeight: '600', border: 'none', cursor: 'pointer' }}
                        >
                            Calendar
                        </button>
                    </div>
                </div>
            </div>

            {view === 'list' ? (
                <>
                    <div style={{
                        padding: '1.5rem 2rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--white)',
                        marginBottom: '2.5rem',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.02)'
                    }}>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                            <div style={{ flex: 1, position: 'relative', minWidth: '300px' }}>
                                <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type="text"
                                    placeholder="Search by customer name or service..."
                                    style={{
                                        width: '100%',
                                        padding: '0.85rem 1rem 0.85rem 3.25rem',
                                        borderRadius: '14px',
                                        borderRadius: '14px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'var(--background)',
                                        outline: 'none',
                                        fontSize: '0.95rem'
                                    }}
                                />
                            </div>
                            <button className="hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0.85rem 1.5rem', borderRadius: '14px', background: 'var(--white)', border: '1px solid var(--glass-border)', color: 'var(--text-main)', fontWeight: '700', fontSize: '0.9rem' }}>
                                <Filter size={18} /> Filters
                            </button>
                        </div>
                    </div>

                    <div style={{
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--white)',
                        overflow: 'hidden',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 30px -5px rgba(0,0,0,0.03)'
                    }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0' }}>
                            <thead style={{ background: 'var(--background)' }}>
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
                                        style={{ borderBottom: '1px solid var(--glass-border)', cursor: 'pointer', transition: 'all 0.2s' }}
                                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--background)'}
                                        onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
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
                                                backgroundColor: booking.status === 'Upcoming' ? 'rgba(59, 130, 246, 0.08)' : booking.status === 'Completed' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                                                color: booking.status === 'Upcoming' ? 'var(--primary)' : booking.status === 'Completed' ? '#10b981' : '#ef4444',
                                                textTransform: 'uppercase',
                                                letterSpacing: '0.5px'
                                            }}>
                                                {booking.status}
                                            </span>
                                        </td>
                                        <td style={{ padding: '1.25rem 2rem', textAlign: 'right' }}>
                                            <button style={{ color: 'var(--text-muted)', background: 'none', border: 'none', padding: '0.5rem', borderRadius: '8px' }} className="hover-lift">
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
                    <div style={{
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--white)',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 30px -5px rgba(0,0,0,0.03)'
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
