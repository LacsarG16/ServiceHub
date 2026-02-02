import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, DollarSign, CheckCircle2 } from 'lucide-react';

const OverviewTab = ({ stats, recentBookings, onBookingClick, onUpgrade }) => {
    return (
        <>
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="hover-lift" style={{
                        padding: '2rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--white)',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 30px -5px rgba(0,0,0,0.03)'
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '50px',
                                height: '50px',
                                borderRadius: '16px',
                                background: `${stat.icon.props.color}08`,
                                border: `1px solid ${stat.icon.props.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {React.cloneElement(stat.icon, { size: 24 })}
                            </div>
                            <span style={{
                                padding: '0.4rem 0.75rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.8rem',
                                color: '#10b981',
                                fontWeight: '700',
                                background: 'rgba(16, 185, 129, 0.1)'
                            }}>
                                {stat.change}
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500', marginBottom: '0.5rem' }}>{stat.label}</p>
                        <h3 style={{ fontSize: '1.85rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>{stat.value}</h3>
                    </div>
                ))}
            </div>

            {/* Tables/Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '2.5rem' }}>
                {/* Recent Bookings */}
                <div style={{
                    padding: '2.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--white)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: '0 10px 30px -5px rgba(0,0,0,0.03)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: '800' }}>Recent Bookings</h3>
                        <button style={{
                            color: 'var(--primary)',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            background: 'var(--primary-light)',
                            border: 'none',
                            padding: '0.5rem 1rem',
                            borderRadius: '8px'
                        }}>
                            View All
                        </button>
                    </div>
                    <div style={{ overflowX: 'auto' }}>
                        <table style={{ width: '100%', borderCollapse: 'separate', borderSpacing: '0 0.75rem' }}>
                            <thead>
                                <tr style={{ textAlign: 'left' }}>
                                    <th style={{ padding: '0 1rem 0.5rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Customer</th>
                                    <th style={{ padding: '0 1rem 0.5rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Service</th>
                                    <th style={{ padding: '0 1rem 0.5rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Date/Time</th>
                                    <th style={{ padding: '0 1rem 0.5rem', color: 'var(--text-muted)', fontWeight: '700', fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Status</th>
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
                                        <td style={{ padding: '1rem', fontWeight: '600', background: 'var(--background)', borderRadius: '12px 0 0 12px', border: '1px solid var(--glass-border)', borderRight: 'none', color: 'var(--text-main)' }}>{booking.customer}</td>
                                        <td style={{ padding: '1rem', background: 'var(--background)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)', color: 'var(--text-main)' }}>{booking.service}</td>
                                        <td style={{ padding: '1rem', background: 'var(--background)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
                                            <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>{booking.date instanceof Date ? booking.date.toLocaleDateString() : booking.date}</p>
                                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{booking.time}</p>
                                        </td>
                                        <td style={{ padding: '1rem', background: 'var(--background)', borderRadius: '0 12px 12px 0', border: '1px solid var(--glass-border)', borderLeft: 'none' }}>
                                            <span style={{
                                                padding: '0.35rem 0.85rem',
                                                borderRadius: 'var(--radius-full)',
                                                fontSize: '0.75rem',
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

                {/* Quick Actions / Activity */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                    <div style={{
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--white)',
                        border: '1px solid var(--glass-border)',
                        boxShadow: '0 10px 30px -5px rgba(0,0,0,0.03)'
                    }}>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '2rem' }}>Market Performance</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-muted)' }}>Profile Views</span>
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
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-muted)' }}>Booking Rate</span>
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

                    <div style={{
                        background: 'linear-gradient(135deg, #1e3a8a 0%, var(--primary) 100%)',
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-xl)',
                        color: 'white',
                        boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.25)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '0.75rem' }}>Upgrade to Pro</h3>
                            <p style={{ opacity: 0.85, fontSize: '0.95rem', marginBottom: '2rem', lineHeight: '1.6' }}>
                                Get a verified badge and appear at the top of search results to get 4x more leads.
                            </p>
                            <button
                                onClick={onUpgrade}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    background: 'var(--white)',
                                    color: 'var(--primary)',
                                    fontWeight: '800',
                                    fontSize: '1rem',
                                    border: 'none',
                                    boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                                }}
                                className="hover-lift"
                            >
                                Explore Pro Plans
                            </button>
                        </div>
                        {/* Decorative circle */}
                        <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }}></div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverviewTab;
