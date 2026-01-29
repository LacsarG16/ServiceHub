import React from 'react';
import { Calendar, Users, DollarSign, CheckCircle2 } from 'lucide-react';

const OverviewTab = ({ stats, recentBookings, onBookingClick, onUpgrade }) => {
    return (
        <>
            {/* Stats Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', background: 'white' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                            <div style={{ width: '45px', height: '45px', borderRadius: '12px', background: `${stat.icon.props.color}10`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                {stat.icon}
                            </div>
                            <span style={{ fontSize: '0.85rem', color: '#10b981', fontWeight: '700' }}>{stat.change}</span>
                        </div>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>{stat.label}</p>
                        <h3 style={{ fontSize: '1.5rem' }}>{stat.value}</h3>
                    </div>
                ))}
            </div>

            {/* Tables/Charts Section */}
            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '2rem' }}>
                {/* Recent Bookings */}
                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'white' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                        <h3 style={{ fontSize: '1.25rem' }}>Recent Bookings</h3>
                        <button style={{ color: 'var(--primary)', fontWeight: '600', fontSize: '0.9rem', background: 'none', border: 'none' }}>View All</button>
                    </div>
                    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                        <thead>
                            <tr style={{ textAlign: 'left', borderBottom: '1px solid #f1f5f9' }}>
                                <th style={{ padding: '1rem 0', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.9rem' }}>Customer</th>
                                <th style={{ padding: '1rem 0', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.9rem' }}>Service</th>
                                <th style={{ padding: '1rem 0', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.9rem' }}>Date/Time</th>
                                <th style={{ padding: '1rem 0', color: 'var(--text-muted)', fontWeight: '600', fontSize: '0.9rem' }}>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {recentBookings.map((booking) => (
                                <tr
                                    key={booking.id}
                                    onClick={() => onBookingClick(booking)}
                                    style={{ borderBottom: '1px solid #f1f5f9', cursor: 'pointer' }}
                                    onMouseEnter={(e) => e.currentTarget.style.background = '#f8fafc'}
                                    onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
                                >
                                    <td style={{ padding: '1.25rem 0', fontWeight: '600' }}>{booking.customer}</td>
                                    <td style={{ padding: '1.25rem 0' }}>{booking.service}</td>
                                    <td style={{ padding: '1.25rem 0' }}>
                                        <p style={{ fontSize: '0.9rem' }}>{booking.date instanceof Date ? booking.date.toLocaleDateString() : booking.date}</p>
                                        <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{booking.time}</p>
                                    </td>
                                    <td style={{ padding: '1.25rem 0' }}>
                                        <span style={{
                                            padding: '0.25rem 0.75rem',
                                            borderRadius: 'var(--radius-full)',
                                            fontSize: '0.75rem',
                                            fontWeight: '700',
                                            backgroundColor: booking.status === 'Upcoming' ? 'rgba(59, 130, 246, 0.1)' : booking.status === 'Completed' ? 'rgba(16, 185, 129, 0.1)' : 'rgba(239, 68, 68, 0.1)',
                                            color: booking.status === 'Upcoming' ? 'var(--primary)' : booking.status === 'Completed' ? '#10b981' : '#ef4444'
                                        }}>
                                            {booking.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Quick Actions / Activity */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'white' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Market Performance</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.95rem' }}>Profile Views</span>
                                <span style={{ fontWeight: '700' }}>1,240</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px' }}>
                                <div style={{ width: '70%', height: '100%', background: 'var(--primary)', borderRadius: '4px' }}></div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <span style={{ fontSize: '0.95rem' }}>Booking Rate</span>
                                <span style={{ fontWeight: '700' }}>14.2%</span>
                            </div>
                            <div style={{ width: '100%', height: '8px', background: '#f1f5f9', borderRadius: '4px' }}>
                                <div style={{ width: '45%', height: '100%', background: 'var(--secondary)', borderRadius: '4px' }}></div>
                            </div>
                        </div>
                    </div>

                    <div style={{ background: 'linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)', padding: '2rem', borderRadius: 'var(--radius-lg)', color: 'white' }}>
                        <h3 style={{ marginBottom: '1rem' }}>Upgrade Plan</h3>
                        <p style={{ opacity: 0.9, fontSize: '0.9rem', marginBottom: '1.5rem' }}>Get verified badge and appear at the top of search results.</p>
                        <button
                            onClick={onUpgrade}
                            style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', background: 'white', color: 'var(--primary)', fontWeight: '700' }}
                        >
                            Explore Pro Plans
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OverviewTab;
