import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, DollarSign, CheckCircle2, Clock, Bell, TrendingUp, Zap } from 'lucide-react';

const OverviewTab = ({ stats, recentBookings, onBookingClick, onUpgrade }) => {
    // Mock data for sidebars
    const upcomingAppointments = [
        { time: '09:00 AM', customer: 'Alice Johnson', service: 'Elite Cleaning' },
        { time: '02:00 PM', customer: 'Tom Hanks', service: 'Elite Cleaning' },
        { time: '04:30 PM', customer: 'Sarah Miller', service: 'Deep Carpet Clean' }
    ];

    const notifications = [
        { type: 'booking', message: 'New booking from Alice Johnson', time: '2h ago', color: 'var(--primary)' },
        { type: 'review', message: 'New 5-star review received', time: '5h ago', color: '#10b981' },
        { type: 'payment', message: 'Payment received - $120', time: '1d ago', color: 'var(--accent)' }
    ];

    return (
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr 350px', gap: '2rem' }}>
            {/* LEFT SIDEBAR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Today's Date */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    color: 'white',
                    boxShadow: 'var(--shadow-premium)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <Calendar size={16} />
                        <p style={{ fontSize: '0.75rem', opacity: 0.9, fontWeight: '600' }}>TODAY</p>
                    </div>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: '900', marginBottom: '0.25rem' }}>
                        {new Date().getDate()}
                    </h2>
                    <p style={{ fontSize: '0.9rem', opacity: 0.9 }}>
                        {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
                    </p>
                </div>

                {/* Quick Actions */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--white)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.02)'
                }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)' }}>Quick Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <button className="hover-lift" style={{
                            padding: '0.75rem',
                            borderRadius: '10px',
                            background: 'var(--primary-light)',
                            border: '1px solid var(--primary)',
                            color: 'var(--primary)',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Calendar size={16} /> New Booking
                        </button>
                        <button className="hover-lift" style={{
                            padding: '0.75rem',
                            borderRadius: '10px',
                            background: 'var(--background)',
                            border: '1px solid var(--glass-border)',
                            color: 'var(--text-main)',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '0.5rem'
                        }}>
                            <Zap size={16} /> Add Service
                        </button>
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div>
                {/* Stats Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem', marginBottom: '2.5rem' }}>
                    {stats.map((stat, i) => (
                        <div key={i} className="hover-lift" style={{
                            padding: '1.75rem',
                            borderRadius: 'var(--radius-xl)',
                            background: 'var(--glass-card-bg)',
                            backdropFilter: 'var(--glass-blur)',
                            WebkitBackdropFilter: 'var(--glass-blur)',
                            border: '1px solid var(--glass-card-border)',
                            boxShadow: 'var(--glass-card-shadow)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.25rem' }}>
                                <div style={{
                                    width: '48px',
                                    height: '48px',
                                    borderRadius: '14px',
                                    background: `${stat.icon.props.color}08`,
                                    border: `1px solid ${stat.icon.props.color}15`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center'
                                }}>
                                    {React.cloneElement(stat.icon, { size: 22 })}
                                </div>
                                <span style={{
                                    padding: '0.35rem 0.7rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.75rem',
                                    color: '#10b981',
                                    fontWeight: '700',
                                    background: 'rgba(16, 185, 129, 0.1)',
                                    height: 'fit-content'
                                }}>
                                    {stat.change}
                                </span>
                            </div>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500', marginBottom: '0.4rem' }}>{stat.label}</p>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>{stat.value}</h3>
                        </div>
                    ))}
                </div>

                {/* Recent Bookings */}
                <div style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    boxShadow: 'var(--glass-card-shadow)',
                    marginBottom: '2rem'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800' }}>Recent Bookings</h3>
                        <button style={{
                            color: 'var(--primary)',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            background: 'var(--primary-light)',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px',
                            cursor: 'pointer'
                        }}>
                            View All
                        </button>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.65rem' }}>
                            <thead>
                                <tr style={{ textAlign: 'left' }}>
                                    <th style={{ padding: '0 1rem 0.5rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer</th>
                                    <th style={{ padding: '0 1rem 0.5rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Service</th>
                                    <th style={{ padding: '0 1rem 0.5rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date/Time</th>
                                    <th style={{ padding: '0 1rem 0.5rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBookings.map((booking) => (
                                    <tr
                                        key={booking.id}
                                        onClick={() => onBookingClick(booking)}
                                        style={{ cursor: 'pointer', transition: 'all 0.2s' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.transform = 'translateY(-2px)';
                                            e.currentTarget.style.boxShadow = '0 5px 15px rgba(0,0,0,0.02)';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.transform = 'none';
                                            e.currentTarget.style.boxShadow = 'none';
                                        }}
                                    >
                                        <td style={{ padding: '0.85rem 1rem', fontWeight: '600', background: 'var(--background)', borderRadius: '12px 0 0 12px', border: '1px solid var(--glass-border)', borderRight: 'none', color: 'var(--text-main)' }}>{booking.customer}</td>
                                        <td style={{ padding: '0.85rem 1rem', background: 'var(--background)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-main)', fontSize: '0.9rem' }}>{booking.service}</td>
                                        <td style={{ padding: '0.85rem 1rem', background: 'var(--background)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
                                            <p style={{ fontSize: '0.85rem', fontWeight: '600', marginBottom: '0.1rem' }}>{booking.date instanceof Date ? booking.date.toLocaleDateString() : booking.date}</p>
                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{booking.time}</p>
                                        </td>
                                        <td style={{ padding: '0.85rem 1rem', background: 'var(--background)', borderRadius: '0 12px 12px 0', border: '1px solid var(--glass-border)', borderLeft: 'none' }}>
                                            <span style={{
                                                padding: '0.3rem 0.75rem',
                                                borderRadius: 'var(--radius-full)',
                                                fontSize: '0.7rem',
                                                fontWeight: '800',
                                                backgroundColor: booking.status === 'Upcoming' ? 'rgba(59, 130, 246, 0.08)' : booking.status === 'Completed' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                                                color: booking.status === 'Upcoming' ? 'var(--primary)' : booking.status === 'Completed' ? '#10b981' : '#ef4444',
                                                textTransform: 'uppercase'
                                            }}>
                                                {booking.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Market Performance */}
                <div style={{
                    padding: '2rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    boxShadow: 'var(--glass-card-shadow)'
                }}>
                    <h3 style={{ fontSize: '1.15rem', fontWeight: '800', marginBottom: '1.5rem' }}>Market Performance</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Profile Views</span>
                                <span style={{ fontWeight: '800', color: 'var(--text-main)' }}>1,240</span>
                            </div>
                            <div style={{ width: '100%', height: '10px', background: 'var(--background)', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '70%' }}
                                    transition={{ duration: 1 }}
                                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, #60a5fa 100%)' }}
                                />
                            </div>
                        </div>

                        <div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.65rem' }}>
                                <span style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Booking Rate</span>
                                <span style={{ fontWeight: '800', color: 'var(--text-main)' }}>14.2%</span>
                            </div>
                            <div style={{ width: '100%', height: '10px', background: 'var(--background)', borderRadius: '10px', overflow: 'hidden' }}>
                                <motion.div
                                    initial={{ width: 0 }}
                                    animate={{ width: '45%' }}
                                    transition={{ duration: 1, delay: 0.2 }}
                                    style={{ height: '100%', background: 'linear-gradient(90deg, var(--secondary) 0%, #5eead4 100%)' }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* RIGHT SIDEBAR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Upcoming Schedule */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    boxShadow: 'var(--glass-card-shadow)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                        <Clock size={18} color="var(--primary)" />
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)' }}>Today's Schedule</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {upcomingAppointments.map((apt, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                style={{
                                    padding: '0.85rem',
                                    borderRadius: '10px',
                                    background: 'var(--background)',
                                    border: '1px solid var(--glass-border)'
                                }}
                            >
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600' }}>{apt.time}</p>
                                <p style={{ fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.1rem', color: 'var(--text-main)' }}>{apt.customer}</p>
                                <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{apt.service}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Notifications */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    boxShadow: 'var(--glass-card-shadow)'
                }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.25rem' }}>
                        <Bell size={18} color="var(--primary)" />
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)' }}>Notifications</h3>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {notifications.map((notif, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: idx * 0.1 + 0.3 }}
                                style={{
                                    padding: '0.85rem',
                                    borderRadius: '10px',
                                    background: 'var(--background)',
                                    border: '1px solid var(--glass-border)',
                                    borderLeft: `3px solid ${notif.color}`
                                }}
                            >
                                <p style={{ fontWeight: '600', fontSize: '0.8rem', marginBottom: '0.25rem', color: 'var(--text-main)' }}>{notif.message}</p>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{notif.time}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Upgrade Card */}
                <div style={{
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    color: 'white',
                    boxShadow: 'var(--shadow-premium)',
                    position: 'relative',
                    overflow: 'hidden'
                }}>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                        <h3 style={{ fontSize: '1.1rem', fontWeight: '800', marginBottom: '0.5rem' }}>Upgrade to Pro</h3>
                        <p style={{ opacity: 0.85, fontSize: '0.8rem', marginBottom: '1.25rem', lineHeight: '1.5' }}>
                            Get verified badge and 4x more leads.
                        </p>
                        <button
                            onClick={onUpgrade}
                            className="hover-lift"
                            style={{
                                width: '100%',
                                padding: '0.75rem',
                                borderRadius: '10px',
                                background: 'var(--white)',
                                color: 'var(--primary)',
                                fontWeight: '800',
                                fontSize: '0.85rem',
                                border: 'none',
                                boxShadow: '0 10px 20px rgba(0,0,0,0.1)',
                                cursor: 'pointer'
                            }}
                        >
                            Explore Plans
                        </button>
                    </div>
                    <div style={{ position: 'absolute', top: '-15px', right: '-15px', width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                </div>
            </div>
        </div>
    );
};

export default OverviewTab;
