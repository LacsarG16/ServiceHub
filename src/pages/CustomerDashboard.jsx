import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    LayoutDashboard,
    Calendar,
    Heart,
    Settings,
    LogOut,
    Home,
    Menu,
    Bell,
    Search,
    MapPin,
    Star,
    Clock,
    ArrowRight
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const CustomerDashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Mock Data
    const bookings = [
        { id: 1, service: 'House Cleaning', provider: 'Cleaning Pros', date: 'Oct 24, 2023', time: '10:00 AM', status: 'Confirmed', image: 'https://images.unsplash.com/photo-1581578731117-104f8a3d46a8?auto=format&fit=crop&q=80&w=200' },
        { id: 2, service: 'Plumbing Repair', provider: 'Quick Fix Plumbing', date: 'Nov 02, 2023', time: '02:00 PM', status: 'Pending', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=200' },
        { id: 3, service: 'Lawn Mowing', provider: 'Green Thumb', date: 'Sept 15, 2023', time: '09:00 AM', status: 'Completed', image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=200' }
    ];

    const recommendedProviders = [
        { id: 1, name: 'John Doe', service: 'Electrician', rating: 4.9, location: 'San Francisco, CA', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200' },
        { id: 2, name: 'Sarah Smith', service: 'Interior Design', rating: 5.0, location: 'Oakland, CA', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200' },
        { id: 3, name: 'Mike Johnson', service: 'Landscaping', rating: 4.8, location: 'San Jose, CA', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200' },
    ];

    const sidebarItems = [
        { id: 'overview', icon: <LayoutDashboard size={20} />, label: 'Overview' },
        { id: 'bookings', icon: <Calendar size={20} />, label: 'My Bookings' },
        { id: 'favorites', icon: <Heart size={20} />, label: 'Favorites' },
        { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
    ];

    // --- Tab Content Components ---

    const OverviewContent = () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
            {/* Search Banner */}
            <div className="glass-card" style={{
                padding: '2rem',
                borderRadius: '24px',
                background: 'linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(147,51,234,0.1) 100%)',
                border: '1px solid var(--glass-border)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                flexWrap: 'wrap',
                gap: '2rem'
            }}>
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Find the perfect service</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Search for providers in your area</p>
                </div>
                <div style={{
                    flex: 1,
                    minWidth: '300px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '1rem',
                    background: 'var(--white)',
                    padding: '0.75rem 1rem',
                    borderRadius: '16px',
                    boxShadow: 'var(--shadow-sm)'
                }}>
                    <Search size={20} color="var(--text-muted)" />
                    <input
                        type="text"
                        placeholder="e.g. Plumber, Cleaner..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        style={{ border: 'none', outline: 'none', flex: 1, fontSize: '1rem', background: 'transparent' }}
                    />
                    <button className="btn-primary" style={{ padding: '0.5rem 1rem', borderRadius: '10px', fontSize: '0.9rem' }}>Search</button>
                </div>
            </div>

            {/* Active Bookings Summary */}
            <div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                    <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)' }}>Upcoming Bookings</h3>
                    <button onClick={() => setActiveTab('bookings')} style={{ color: 'var(--primary)', fontWeight: '600', background: 'transparent', border: 'none', cursor: 'pointer' }}>View All</button>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {bookings.filter(b => b.status !== 'Completed').slice(0, 2).map(booking => (
                        <div key={booking.id} className="glass-card hover-lift" style={{ padding: '1.5rem', borderRadius: '20px', background: 'var(--glass-bg)', border: '1px solid var(--glass-border)' }}>
                            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
                                <img src={booking.image} alt={booking.service} style={{ width: '50px', height: '50px', borderRadius: '12px', objectFit: 'cover' }} />
                                <div>
                                    <h4 style={{ fontWeight: '700', color: 'var(--text-main)' }}>{booking.service}</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{booking.provider}</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {booking.date}</span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {booking.time}</span>
                            </div>
                        </div>
                    ))}
                    {bookings.filter(b => b.status !== 'Completed').length === 0 && (
                        <p style={{ color: 'var(--text-muted)', fontStyle: 'italic' }}>No upcoming bookings.</p>
                    )}
                </div>
            </div>

            {/* Recommended */}
            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Recommended for You</h3>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' }}>
                    {recommendedProviders.map((provider) => (
                        <div
                            key={provider.id}
                            className="glass-card hover-lift"
                            style={{
                                padding: '1.5rem',
                                borderRadius: '20px',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                position: 'relative'
                            }}
                        >
                            <Link to={`/profile/${provider.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <img src={provider.image} alt={provider.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--white)', padding: '4px 8px', borderRadius: '8px', boxShadow: 'var(--shadow-sm)' }}>
                                        <Star size={14} fill="#fbbf24" color="#fbbf24" />
                                        <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{provider.rating}</span>
                                    </div>
                                </div>
                                <h4 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '4px' }}>{provider.name}</h4>
                                <p style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600', marginBottom: '0.5rem' }}>{provider.service}</p>
                                <p style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                                    <MapPin size={14} /> {provider.location}
                                </p>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );

    const BookingsContent = () => (
        <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-main)' }}>My Bookings</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {bookings.map(booking => (
                    <div key={booking.id} className="glass-card" style={{
                        padding: '1.5rem',
                        borderRadius: '20px',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexWrap: 'wrap',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                            <img src={booking.image} alt={booking.service} style={{ width: '80px', height: '80px', borderRadius: '16px', objectFit: 'cover' }} />
                            <div>
                                <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>{booking.service}</h3>
                                <p style={{ color: 'var(--text-muted)', marginBottom: '4px' }}>by {booking.provider}</p>
                                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Calendar size={14} /> {booking.date}</span>
                                    <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Clock size={14} /> {booking.time}</span>
                                </div>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{
                                padding: '0.5rem 1rem',
                                borderRadius: '99px',
                                fontSize: '0.9rem',
                                fontWeight: '600',
                                backgroundColor: booking.status === 'Confirmed' ? 'rgba(16, 185, 129, 0.1)' : booking.status === 'Completed' ? 'rgba(59, 130, 246, 0.1)' : 'rgba(245, 158, 11, 0.1)',
                                color: booking.status === 'Confirmed' ? '#10b981' : booking.status === 'Completed' ? '#3b82f6' : '#f59e0b'
                            }}>
                                {booking.status}
                            </span>
                            <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--glass-border)', background: 'transparent', cursor: 'pointer' }}>
                                <ArrowRight size={20} color="var(--text-muted)" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

    const FavoritesContent = () => (
        <div style={{ textAlign: 'center', padding: '4rem 0', color: 'var(--text-muted)' }}>
            <Heart size={48} style={{ opacity: 0.3, marginBottom: '1rem' }} />
            <h3>Your favorites list is empty</h3>
            <p>Start exploring to save your favorite providers!</p>
            <button onClick={() => navigate('/directory')} className="btn-primary" style={{ marginTop: '1.5rem', padding: '0.75rem 2rem', borderRadius: '12px' }}>
                Explore Services
            </button>
        </div>
    );

    const SettingsContent = () => (
        <div style={{ maxWidth: '600px' }}>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-main)' }}>Account Settings</h2>
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-main)' }}>Full Name</label>
                        <input type="text" defaultValue="Alex Johnson" style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-main)' }}>Email Address</label>
                        <input type="email" defaultValue="alex@example.com" style={{ width: '100%', padding: '0.75rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--background)' }} />
                    </div>
                    <button type="button" className="btn-primary" style={{ padding: '1rem', borderRadius: '12px', marginTop: '1rem', justifyContent: 'center' }}>Save Changes</button>
                </form>
            </div>
        </div>
    );

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview': return <OverviewContent />;
            case 'bookings': return <BookingsContent />;
            case 'favorites': return <FavoritesContent />;
            case 'settings': return <SettingsContent />;
            default: return <OverviewContent />;
        }
    };

    return (
        <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--background)' }}>
            {/* Sidebar */}
            <aside
                onMouseEnter={() => setIsSidebarCollapsed(false)}
                onMouseLeave={() => setIsSidebarCollapsed(true)}
                style={{
                    width: isSidebarCollapsed ? '80px' : '280px',
                    transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(30px)',
                    backgroundColor: 'var(--glass-bg)',
                    borderRight: '1px solid var(--glass-border)',
                    padding: isSidebarCollapsed ? '2rem 1rem' : '2rem 1.5rem',
                    position: 'fixed',
                    height: '100vh',
                    left: 0,
                    top: 0,
                    zIndex: 50,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '2.5rem',
                    overflowX: 'hidden'
                }}>

                {/* Navigation Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', flex: 1, marginTop: '2rem' }}>
                    {sidebarItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 1.25rem',
                                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                                borderRadius: '16px',
                                background: activeTab === item.id ? 'var(--primary-light)' : 'transparent',
                                color: activeTab === item.id ? 'var(--primary)' : 'var(--text-muted)',
                                fontWeight: '700',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer',
                                position: 'relative',
                                overflow: 'hidden'
                            }}
                            className="hover-lift"
                        >
                            {/* Active Indicator */}
                            {activeTab === item.id && (
                                <motion.div
                                    layoutId="activeTab"
                                    style={{
                                        position: 'absolute',
                                        left: 0,
                                        top: '20%',
                                        height: '60%',
                                        width: '4px',
                                        backgroundColor: 'var(--primary)',
                                        borderTopRightRadius: '4px',
                                        borderBottomRightRadius: '4px'
                                    }}
                                />
                            )}
                            <span style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '0.4rem',
                                borderRadius: '10px',
                                background: activeTab === item.id ? 'var(--white)' : 'transparent',
                                boxShadow: activeTab === item.id ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none'
                            }}>
                                {React.cloneElement(item.icon, { size: 18, strokeWidth: activeTab === item.id ? 2.5 : 2 })}
                            </span>
                            {!isSidebarCollapsed && (
                                <motion.span
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.2 }}
                                    style={{ fontSize: '0.95rem', whiteSpace: 'nowrap' }}
                                >
                                    {item.label}
                                </motion.span>
                            )}
                        </button>
                    ))}
                </div>

                {/* Bottom Actions */}
                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <button
                        onClick={() => window.location.href = '/'}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: isSidebarCollapsed ? '1rem' : '0.75rem 1rem',
                            borderRadius: '12px',
                            background: 'var(--primary)',
                            color: 'white',
                            border: 'none',
                            cursor: 'pointer',
                            justifyContent: 'center',
                            transition: 'all 0.2s',
                            marginBottom: '0.5rem',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
                        }}
                        className="hover-lift"
                    >
                        <Home size={isSidebarCollapsed ? 24 : 20} />
                        {!isSidebarCollapsed && <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Back to Home</span>}
                    </button>
                    <button
                        onClick={handleLogout}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1rem',
                            padding: '0.75rem 1rem',
                            borderRadius: '12px',
                            background: 'transparent',
                            color: '#ef4444',
                            border: 'none',
                            cursor: 'pointer',
                            justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                            transition: 'all 0.2s'
                        }}
                        className="hover:bg-red-50 dark:hover:bg-red-900/10"
                    >
                        <LogOut size={20} />
                        {!isSidebarCollapsed && <span style={{ fontWeight: '600', fontSize: '0.9rem' }}>Log Out</span>}
                    </button>
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                padding: '2rem 3rem 3rem',
                marginLeft: isSidebarCollapsed ? '80px' : '280px',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                minWidth: 0
            }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{
                            fontSize: '2.2rem',
                            fontWeight: '900',
                            color: 'var(--text-main)',
                            fontFamily: "'Montserrat', sans-serif",
                            letterSpacing: '-0.5px',
                            marginBottom: '0.2rem',
                            lineHeight: '1.2'
                        }}>Welcome back, <span className="text-gradient-primary">Alex!</span></h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1rem', fontWeight: '500' }}>Manage your services and bookings.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
                        <div style={{
                            position: 'relative',
                            cursor: 'pointer',
                            padding: '0.75rem',
                            borderRadius: '16px',
                            background: 'var(--white)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--shadow-sm)'
                        }} className="hover-lift">
                            <Bell size={22} color="var(--text-main)" />
                            <span style={{ position: 'absolute', top: '10px', right: '10px', width: '8px', height: '8px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></span>
                        </div>
                        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--primary-light)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', color: 'var(--primary)' }}>
                            AJ
                        </div>
                    </div>
                </header>

                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                    >
                        {renderTabContent()}
                    </motion.div>
                </AnimatePresence>
            </main>
        </div>
    );
};

export default CustomerDashboard;
