import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, DollarSign, CheckCircle2 } from 'lucide-react';
import Marker from '../ui/Marker';

const OverviewTab = ({ stats, recentBookings, onBookingClick, onUpgrade }) => {
    return (
        <>
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass-card hover-lift" style={{
                        padding: '2.25rem',
                        background: 'rgba(255, 255, 255, 0.08)', // Brighter for better contrast
                        border: '1px solid rgba(255, 255, 255, 0.2)', // More distinct border
                        position: 'relative',
                        overflow: 'hidden',
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)' // Localized shadow for "pop"
                    }}>
                        <Marker id={`OV-STAT-${i + 1}`} />
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1.5rem' }}>
                            <div style={{
                                width: '52px',
                                height: '52px',
                                borderRadius: '14px',
                                background: 'var(--white)',
                                boxShadow: 'var(--shadow-sm)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                border: '1px solid var(--glass-border)'
                            }}>
                                {React.cloneElement(stat.icon, { size: 24, strokeWidth: 2.5 })}
                            </div>
                            <span style={{
                                padding: '0.4rem 0.8rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                color: 'var(--secondary)',
                                fontWeight: '800',
                                background: 'rgba(16, 185, 129, 0.08)',
                                border: '1px solid rgba(16, 185, 129, 0.1)'
                            }}>
                                {stat.change}
                            </span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '600', marginBottom: '0.5rem' }}>{stat.label}</p>
                        <h3 style={{ fontSize: '2.25rem', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-1px' }}>{stat.value}</h3>
                    </div>
                ))}
            </div>

            {/* Tables/Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: '2.5rem' }}>
                {/* Recent Bookings */}
                <div className="glass-card" style={{
                    padding: '2.5rem',
                    position: 'relative'
                }}>
                    <Marker id="OV-BOOK-T" />
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.5rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>Recent Bookings</h3>
                        <button className="glass hover-lift" style={{
                            color: 'var(--primary)',
                            fontWeight: '700',
                            fontSize: '0.9rem',
                            border: '1px solid var(--glass-border)',
                            padding: '0.6rem 1.25rem',
                            borderRadius: '12px'
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
                                        style={{ cursor: 'pointer', transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                        className="hover-lift"
                                    >
                                        <td style={{ padding: '1.25rem 1rem', fontWeight: '800', color: 'var(--text-main)', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '16px 0 0 16px', border: '1px solid var(--glass-border)', borderRight: 'none' }}>{booking.customer}</td>
                                        <td style={{ padding: '1.25rem 1rem', color: 'var(--text-muted)', fontWeight: '600', background: 'rgba(255, 255, 255, 0.05)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>{booking.service}</td>
                                        <td style={{ padding: '1.25rem 1rem', background: 'rgba(255, 255, 255, 0.05)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
                                            <p style={{ fontSize: '0.95rem', fontWeight: '800', color: 'var(--text-main)' }}>{booking.date instanceof Date ? booking.date.toLocaleDateString() : booking.date}</p>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>{booking.time}</p>
                                        </td>
                                        <td style={{ padding: '1.25rem 1rem', background: 'rgba(255, 255, 255, 0.05)', borderRadius: '0 16px 16px 0', border: '1px solid var(--glass-border)', borderLeft: 'none' }}>
                                            <span style={{
                                                padding: '0.5rem 1rem',
                                                borderRadius: 'var(--radius-full)',
                                                fontSize: '0.7rem',
                                                fontWeight: '900',
                                                backgroundColor: booking.status === 'Upcoming' ? 'rgba(6, 182, 212, 0.08)' : booking.status === 'Completed' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)',
                                                color: booking.status === 'Upcoming' ? 'var(--primary)' : booking.status === 'Completed' ? 'var(--secondary)' : '#ef4444',
                                                border: `1px solid ${booking.status === 'Upcoming' ? 'rgba(6, 182, 212, 0.15)' : booking.status === 'Completed' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'}`,
                                                textTransform: 'uppercase',
                                                letterSpacing: '1px'
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
                    <div className="glass-card" style={{
                        padding: '2.5rem',
                        position: 'relative'
                    }}>
                        <Marker id="OV-PERF" />
                        <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', marginBottom: '2rem' }}>Market Performance</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-muted)' }}>Profile Views</span>
                                    <span style={{ fontWeight: '800', color: 'var(--text-main)' }}>1,240</span>
                                </div>
                                <div style={{ width: '100%', height: '10px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '10px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '70%' }}
                                        transition={{ duration: 1 }}
                                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)' }}
                                    />
                                </div>
                            </div>

                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                                    <span style={{ fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-muted)' }}>Booking Rate</span>
                                    <span style={{ fontWeight: '800', color: 'var(--text-main)' }}>14.2%</span>
                                </div>
                                <div style={{ width: '100%', height: '10px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)', borderRadius: '10px', overflow: 'hidden' }}>
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: '45%' }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        style={{ height: '100%', background: 'linear-gradient(90deg, var(--secondary) 0%, #34d399 100%)' }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={{
                        background: 'linear-gradient(135deg, #0f172a 0%, var(--primary) 100%)',
                        padding: '2.5rem',
                        borderRadius: 'var(--radius-xl)',
                        color: 'white',
                        boxShadow: 'var(--shadow-premium)',
                        position: 'relative',
                        overflow: 'hidden',
                        border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                        <Marker id="OV-UPG" />
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: '900', marginBottom: '0.75rem', letterSpacing: '-0.5px' }}>Upgrade to <span className="accent-badge" style={{ verticalAlign: 'middle', marginLeft: '8px' }}>PRO</span></h3>
                            <p style={{ opacity: 0.9, fontSize: '1rem', marginBottom: '2.5rem', lineHeight: '1.6', fontWeight: '500' }}>
                                Get a verified badge and appear at the top of search results to secure more elite leads.
                            </p>
                            <button
                                onClick={onUpgrade}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '16px',
                                    background: 'var(--white)',
                                    color: 'var(--primary)',
                                    fontWeight: '800',
                                    fontSize: '1.05rem',
                                    border: 'none',
                                    boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
                                }}
                                className="hover-lift"
                            >
                                Explore Pro Excellence
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
