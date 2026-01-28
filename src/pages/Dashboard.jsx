import React, { useState } from 'react';
import {
    LayoutDashboard,
    List,
    Calendar,
    BarChart3,
    Settings,
    Bell,
    Plus,
    TrendingUp,
    Users,
    CheckCircle2,
    Clock,
    Search,
    MoreVertical,
    DollarSign
} from 'lucide-react';
import { motion } from 'framer-motion';

const Dashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { label: "Total Bookings", value: "142", icon: <Calendar color="var(--primary)" />, change: "+12%" },
        { label: "New Leads", value: "28", icon: <Users color="var(--secondary)" />, change: "+5%" },
        { label: "Revenue", value: "$3,450", icon: <DollarSign color="var(--accent)" />, change: "+20%" },
        { label: "Job Completion", value: "98%", icon: <CheckCircle2 color="#10b981" />, change: "0%" }
    ];

    const recentBookings = [
        { id: 1, customer: "Alice Johnson", service: "Elite Cleaning", date: "Feb 25, 2026", time: "09:00 AM", status: "Upcoming" },
        { id: 2, customer: "Mark Stevenson", service: "Elite Cleaning", date: "Feb 24, 2026", time: "02:00 PM", status: "Completed" },
        { id: 3, customer: "Jenny Wilson", service: "Move-out Special", date: "Feb 23, 2026", time: "11:00 AM", status: "Cancelled" }
    ];

    return (
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f1f5f9' }}>
            {/* Sidebar - Quick implementation for demo */}
            <aside style={{ width: '280px', backgroundColor: 'white', borderRight: '1px solid #e2e8f0', padding: '120px 1.5rem 2rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                        { id: 'overview', icon: <LayoutDashboard size={20} />, label: 'Overview' },
                        { id: 'services', icon: <List size={20} />, label: 'My Services' },
                        { id: 'bookings', icon: <Calendar size={20} />, label: 'Bookings' },
                        { id: 'analytics', icon: <BarChart3 size={20} />, label: 'Analytics' },
                        { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '0.85rem 1rem',
                                borderRadius: 'var(--radius-md)',
                                background: activeTab === item.id ? 'var(--primary)' : 'transparent',
                                color: activeTab === item.id ? 'white' : 'var(--text-muted)',
                                fontWeight: '600',
                                transition: 'all 0.2s'
                            }}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main style={{ flex: 1, padding: '120px 2.5rem 2.5rem' }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <div>
                        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Good morning, John!</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Here's what's happening with your business today.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative' }}>
                            <Bell size={24} color="var(--text-muted)" />
                            <span style={{ position: 'absolute', top: '-4px', right: '-2px', width: '10px', height: '10px', backgroundColor: 'var(--accent)', borderRadius: '50%', border: '2px solid white' }}></span>
                        </div>
                        <button className="btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
                            <Plus size={18} /> Add New Service
                        </button>
                    </div>
                </header>

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
                                    <tr key={booking.id} style={{ borderBottom: '1px solid #f1f5f9' }}>
                                        <td style={{ padding: '1.25rem 0', fontWeight: '600' }}>{booking.customer}</td>
                                        <td style={{ padding: '1.25rem 0' }}>{booking.service}</td>
                                        <td style={{ padding: '1.25rem 0' }}>
                                            <p style={{ fontSize: '0.9rem' }}>{booking.date}</p>
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
                            <button style={{ width: '100%', padding: '0.85rem', borderRadius: 'var(--radius-md)', background: 'white', color: 'var(--primary)', fontWeight: '700' }}>
                                Explore Pro Plans
                            </button>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
