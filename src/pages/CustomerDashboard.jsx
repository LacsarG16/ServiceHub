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
    ArrowRight,
    CreditCard
} from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import DepositPaymentModal from '../components/modals/DepositPaymentModal';

const CustomerDashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [isDepositModalOpen, setIsDepositModalOpen] = useState(false);
    const [selectedBookingForDeposit, setSelectedBookingForDeposit] = useState(null);

    const handleOpenDeposit = (booking) => {
        setSelectedBookingForDeposit(booking);
        setIsDepositModalOpen(true);
    };

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Mock Data
    const bookings = [
        { id: 1, service: 'House Cleaning', provider: 'Cleaning Pros', date: 'Oct 24, 2023', time: '10:00 AM', status: 'Confirmed', image: 'https://images.unsplash.com/photo-1581578731117-104f8a3d46a8?auto=format&fit=crop&q=80&w=200', price: 1200 },
        { id: 2, service: 'Plumbing Repair', provider: 'Quick Fix Plumbing', date: 'Nov 02, 2023', time: '02:00 PM', status: 'Approved', image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=200', price: 850 },
        { id: 3, service: 'Lawn Mowing', provider: 'Green Thumb', date: 'Sept 15, 2023', time: '09:00 AM', status: 'Completed', image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?auto=format&fit=crop&q=80&w=200', price: 450 },
        { id: 4, service: 'Electrical Wiring', provider: 'John Doe', date: 'Nov 10, 2023', time: '11:00 AM', status: 'Pending', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200', price: 0 }
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
        <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr 350px', gap: '2rem' }}>
            {/* LEFT SIDEBAR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Quick Stats */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    boxShadow: 'var(--glass-card-shadow)'
                }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-main)' }}>My Bookings</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600' }}>Total</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)' }}>{bookings.length}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600' }}>Active</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>{bookings.filter(b => b.status !== 'Completed').length}</p>
                        </div>
                        <div>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem', fontWeight: '600' }}>Completed</p>
                            <p style={{ fontSize: '1.5rem', fontWeight: '800', color: '#10b981' }}>{bookings.filter(b => b.status === 'Completed').length}</p>
                        </div>
                    </div>
                </div>

                {/* Spending Summary */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                    color: 'white',
                    boxShadow: 'var(--shadow-premium)'
                }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1rem' }}>Spending</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <div>
                            <p style={{ fontSize: '0.75rem', opacity: 0.9, marginBottom: '0.25rem' }}>Total Spent</p>
                            <p style={{ fontSize: '1.75rem', fontWeight: '900' }}>R{bookings.reduce((sum, b) => sum + b.price, 0).toLocaleString()}</p>
                        </div>
                        <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                            <p style={{ fontSize: '0.75rem', opacity: 0.9, marginBottom: '0.25rem' }}>Avg/Booking</p>
                            <p style={{ fontSize: '1.1rem', fontWeight: '700' }}>R{Math.round(bookings.reduce((sum, b) => sum + b.price, 0) / bookings.length).toLocaleString()}</p>
                        </div>
                    </div>
                </div>

                {/* Favorite Providers */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    boxShadow: 'var(--glass-card-shadow)'
                }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Favorites</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                        {recommendedProviders.slice(0, 2).map((provider) => (
                            <div key={provider.id} style={{
                                padding: '0.75rem',
                                borderRadius: '10px',
                                background: 'var(--glass-card-bg)',
                                border: '1px solid var(--glass-card-border)',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <img src={provider.image} alt={provider.name} style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover' }} />
                                <div style={{ flex: 1 }}>
                                    <p style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-main)' }}>{provider.name}</p>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{provider.service}</p>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Star size={12} fill="#fbbf24" color="#fbbf24" />
                                    <span style={{ fontSize: '0.75rem', fontWeight: '700' }}>{provider.rating}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* MAIN CONTENT */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
                {/* Search Banner */}
                <div className="glass-card" style={{
                    padding: '2rem',
                    borderRadius: '24px',
                    background: 'linear-gradient(135deg, var(--primary-light) 0%, rgba(147,51,234,0.05) 100%)',
                    border: '1px solid var(--glass-card-border)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
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
                        background: 'var(--glass-card-bg)',
                        padding: '0.75rem 1rem',
                        borderRadius: '16px',
                        border: '1px solid var(--glass-card-border)',
                        boxShadow: 'var(--glass-card-shadow)'
                    }}>
                        <Search size={20} color="var(--text-muted)" />
                        <input
                            type="text"
                            placeholder="e.g. Plumber, Cleaner..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ border: 'none', outline: 'none', flex: 1, background: 'transparent' }}
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
                        {bookings.filter(b => b.status !== 'Completed').slice(0, 2).map(booking => (
                            <div key={booking.id} className="glass-card hover-lift" style={{ padding: '1.5rem', borderRadius: '20px', background: 'var(--glass-card-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-card-border)', boxShadow: 'var(--glass-card-shadow)' }}>
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
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '1.5rem' }}>
                        {recommendedProviders.map((provider) => (
                            <div
                                key={provider.id}
                                className="glass-card hover-lift"
                                style={{
                                    padding: '1.5rem',
                                    borderRadius: '20px',
                                    background: 'var(--glass-card-bg)',
                                    backdropFilter: 'var(--glass-blur)',
                                    WebkitBackdropFilter: 'var(--glass-blur)',
                                    border: '1px solid var(--glass-card-border)',
                                    boxShadow: 'var(--glass-card-shadow)',
                                    position: 'relative'
                                }}
                            >
                                <Link to={`/profile/${provider.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                        <img src={provider.image} alt={provider.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: 'var(--glass-bg)', backdropFilter: 'blur(10px)', padding: '4px 8px', borderRadius: '8px', border: '1px solid var(--glass-card-border)' }}>
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

            {/* RIGHT SIDEBAR */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {/* Recent Activity */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    boxShadow: 'var(--glass-card-shadow)'
                }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Recent Activity</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'var(--background)',
                            borderLeft: '3px solid var(--primary)'
                        }}>
                            <p style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.35rem', color: 'var(--text-main)' }}>Booking Confirmed</p>
                            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>House Cleaning - Oct 24</p>
                        </div>
                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'var(--background)',
                            borderLeft: '3px solid #10b981'
                        }}>
                            <p style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.35rem', color: 'var(--text-main)' }}>Service Completed</p>
                            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Lawn Mowing - Sept 15</p>
                        </div>
                        <div style={{
                            padding: '1rem',
                            borderRadius: '10px',
                            background: 'var(--background)',
                            borderLeft: '3px solid #f59e0b'
                        }}>
                            <p style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.35rem', color: 'var(--text-main)' }}>Payment Pending</p>
                            <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Electrical Wiring - Nov 10</p>
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    WebkitBackdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-card-border)',
                    boxShadow: 'var(--glass-card-shadow)'
                }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Quick Actions</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        <button
                            onClick={() => navigate('/directory')}
                            className="hover-lift"
                            style={{
                                padding: '0.85rem',
                                borderRadius: '12px',
                                background: 'var(--primary)',
                                color: 'white',
                                border: 'none',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                            }}
                        >
                            <Search size={16} /> Book a Service
                        </button>
                        <button
                            onClick={() => setActiveTab('favorites')}
                            className="hover-lift"
                            style={{
                                padding: '0.85rem',
                                borderRadius: '12px',
                                background: 'var(--glass-card-bg)',
                                color: 'var(--text-main)',
                                border: '1px solid var(--glass-card-border)',
                                fontSize: '0.85rem',
                                fontWeight: '700',
                                cursor: 'pointer',
                                textAlign: 'left',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem'
                            }}
                        >
                            <Heart size={16} /> View Favorites
                        </button>
                    </div>
                </div>

                {/* Savings Card */}
                <div style={{
                    padding: '1.5rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'linear-gradient(135deg, var(--secondary) 0%, #059669 100%)',
                    color: 'white',
                    boxShadow: 'var(--shadow-premium)'
                }}>
                    <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '0.75rem' }}>Loyalty Points</h3>
                    <p style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.5rem' }}>250</p>
                    <p style={{ fontSize: '0.75rem', opacity: 0.9 }}>Earn rewards with every booking!</p>
                </div>
            </div>
        </div>
    );

    const BookingsContent = () => (
        <div>
            <h2 style={{ fontSize: '1.8rem', fontWeight: '700', marginBottom: '2rem', color: 'var(--text-main)' }}>My Bookings</h2>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '1.5rem' }}>
                {bookings.map(booking => (
                    <div key={booking.id} className="glass-card hover-lift" style={{
                        padding: '1.5rem',
                        borderRadius: '20px',
                        background: 'var(--glass-card-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        WebkitBackdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-card-border)',
                        boxShadow: 'var(--glass-card-shadow)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1rem'
                    }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <img src={booking.image} alt={booking.service} style={{ width: '70px', height: '70px', borderRadius: '16px', objectFit: 'cover' }} />
                            <div style={{ flex: 1 }}>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '4px' }}>{booking.service}</h3>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>by {booking.provider}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Calendar size={14} /> {booking.date}</span>
                            <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={14} /> {booking.time}</span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '0.5rem', borderTop: '1px solid var(--glass-border)' }}>
                            <span style={{
                                padding: '0.4rem 0.8rem',
                                borderRadius: '99px',
                                fontSize: '0.8rem',
                                fontWeight: '700',
                                backgroundColor: booking.status === 'Confirmed' ? 'rgba(16, 185, 129, 0.1)'
                                    : booking.status === 'Completed' ? 'rgba(59, 130, 246, 0.1)'
                                        : booking.status === 'Approved' ? 'rgba(124, 58, 237, 0.1)'
                                            : 'rgba(245, 158, 11, 0.1)',
                                color: booking.status === 'Confirmed' ? '#10b981'
                                    : booking.status === 'Completed' ? '#3b82f6'
                                        : booking.status === 'Approved' ? '#7c3aed'
                                            : '#f59e0b',
                                border: `1px solid ${booking.status === 'Confirmed' ? 'rgba(16, 185, 129, 0.2)'
                                    : booking.status === 'Completed' ? 'rgba(59, 130, 246, 0.2)'
                                        : booking.status === 'Approved' ? 'rgba(124, 58, 237, 0.2)'
                                            : 'rgba(245, 158, 11, 0.2)'
                                    }`
                            }}>
                                {booking.status}
                            </span>

                            {booking.status === 'Approved' ? (
                                <button
                                    onClick={() => handleOpenDeposit(booking)}
                                    className="hover-lift"
                                    style={{
                                        padding: '0.5rem 1rem',
                                        borderRadius: '12px',
                                        background: 'var(--primary)',
                                        color: 'white',
                                        border: 'none',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '6px',
                                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                                    }}
                                >
                                    <CreditCard size={14} /> Pay Deposit
                                </button>
                            ) : (
                                <button style={{ padding: '0.5rem', borderRadius: '50%', border: '1px solid var(--glass-border)', background: 'transparent', cursor: 'pointer' }} className="hover-lift">
                                    <ArrowRight size={18} color="var(--text-muted)" />
                                </button>
                            )}
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
            <div className="glass-card" style={{ padding: '2rem', borderRadius: '24px', background: 'var(--glass-card-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-card-border)', boxShadow: 'var(--glass-card-shadow)' }}>
                <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-main)' }}>Full Name</label>
                        <input type="text" defaultValue="Alex Johnson" />
                    </div>
                    <div>
                        <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600', color: 'var(--text-main)' }}>Email Address</label>
                        <input type="email" defaultValue="alex@example.com" />
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
        <div style={{ minHeight: '100vh', background: 'var(--background)', paddingBottom: '3rem' }}>

            {/* Header */}
            <header style={{
                padding: '1.5rem 2rem',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                background: 'var(--navbar-bg-scrolled)',
                backdropFilter: 'var(--glass-blur)',
                WebkitBackdropFilter: 'var(--glass-blur)',
                borderBottom: '1px solid var(--glass-border)',
                position: 'sticky',
                top: 0,
                zIndex: 40
            }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{
                        backgroundColor: 'var(--primary)',
                        color: 'white',
                        padding: '0.4rem',
                        borderRadius: '10px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                    }}>
                        <Home size={20} strokeWidth={2.5} />
                    </div>
                    <span style={{
                        fontSize: '1.25rem',
                        fontWeight: '800',
                        color: 'var(--text-main)',
                        letterSpacing: '-0.5px',
                        fontFamily: "'Montserrat', sans-serif"
                    }}>
                        Service<span style={{ color: 'var(--primary)' }}>Hub</span>
                    </span>
                </div>

                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    {/* Home Button */}
                    <Link to="/" style={{
                        padding: '0.6rem',
                        borderRadius: '12px',
                        background: 'var(--background)',
                        color: 'var(--text-muted)',
                        border: '1px solid var(--glass-border)'
                    }} className="hover-lift">
                        <Home size={20} />
                    </Link>

                    {/* Notification Bell */}
                    <div style={{
                        position: 'relative',
                        cursor: 'pointer',
                        padding: '0.6rem',
                        borderRadius: '12px',
                        background: 'var(--background)',
                        border: '1px solid var(--glass-border)',
                    }} className="hover-lift">
                        <Bell size={20} color="var(--text-muted)" />
                        <span style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', backgroundColor: 'var(--accent)', borderRadius: '50%' }}></span>
                    </div>

                    {/* Profile & Logout */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem', borderLeft: '1px solid var(--glass-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div>
                                <h1 style={{ fontSize: '1rem', fontWeight: '700', textAlign: 'right', lineHeight: '1.2' }}>Alex Johnson</h1>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'right' }}>Customer</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Alex" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }} />

                            <button
                                onClick={handleLogout}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.5rem',
                                    padding: '0.5rem 1rem',
                                    borderRadius: '10px',
                                    background: 'rgba(239, 68, 68, 0.1)',
                                    color: '#ef4444',
                                    fontWeight: '600',
                                    fontSize: '0.9rem',
                                    transition: 'all 0.2s',
                                    marginLeft: '0.5rem'
                                }}
                                className="hover-lift"
                            >
                                <LogOut size={16} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Floating Vertical Navigation Sidebar */}
            <div style={{
                position: 'fixed',
                left: '1.5rem',
                top: '50%',
                transform: 'translateY(-50%)',
                zIndex: 100
            }}>
                <motion.div
                    layout
                    className="glass-card stationary-card"
                    initial={{ width: '78px' }}
                    animate={{ width: isSidebarCollapsed ? '78px' : '240px' }}
                    onMouseEnter={() => setIsSidebarCollapsed(false)}
                    onMouseLeave={() => setIsSidebarCollapsed(true)}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        padding: '0.75rem',
                        gap: '0.75rem',
                        borderRadius: 'var(--radius-2xl)',
                        background: 'var(--glass-card-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        WebkitBackdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-card-border)',
                        boxShadow: 'var(--glass-card-shadow)',
                        overflow: 'hidden'
                    }}
                >
                    {sidebarItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            className="hover-lift"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: isSidebarCollapsed ? 'center' : 'flex-start',
                                padding: isSidebarCollapsed ? '1rem 0' : '1rem',
                                borderRadius: 'var(--radius-xl)',
                                background: activeTab === item.id ? 'var(--primary)' : 'transparent',
                                border: '1px solid ' + (activeTab === item.id ? 'var(--primary)' : 'transparent'),
                                color: activeTab === item.id ? 'white' : 'var(--text-muted)',
                                transition: 'all 0.3s var(--ease-premium)',
                                position: 'relative',
                                border: 'none',
                                cursor: 'pointer',
                                whiteSpace: 'nowrap',
                                width: '100%'
                            }}
                            title={isSidebarCollapsed ? item.label : ''}
                        >
                            <motion.div
                                layout
                                style={{ minWidth: '30px', display: 'flex', justifyContent: 'center' }}
                            >
                                {React.cloneElement(item.icon, { size: 22, strokeWidth: activeTab === item.id ? 2.5 : 2 })}
                            </motion.div>

                            <AnimatePresence>
                                {!isSidebarCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0, x: -10 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -10 }}
                                        transition={{ duration: 0.2, delay: 0.1 }}
                                        style={{
                                            marginLeft: '0.75rem',
                                            fontWeight: '600',
                                            fontSize: '0.95rem'
                                        }}
                                    >
                                        {item.label}
                                    </motion.span>
                                )}
                            </AnimatePresence>

                            {activeTab === item.id && (
                                <motion.div
                                    layoutId="activeTabGlow"
                                    style={{
                                        position: 'absolute',
                                        inset: '-2px',
                                        borderRadius: 'var(--radius-xl)',
                                        background: 'var(--primary)',
                                        zIndex: -1,
                                        opacity: 0.3,
                                        filter: 'blur(15px)'
                                    }}
                                />
                            )}
                        </button>
                    ))}
                </motion.div>
            </div >

            <main style={{ width: '100%', padding: '2rem 3rem', paddingLeft: '8rem' }}>
                {/* Welcome Message */}
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{
                        fontSize: '2.5rem',
                        fontWeight: '900',
                        color: 'var(--text-main)',
                        fontFamily: "'Montserrat', sans-serif",
                        letterSpacing: '-0.5px',
                        marginBottom: '0.5rem',
                        lineHeight: '1.2'
                    }}>Welcome back, <span className="text-gradient-primary">Alex!</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '500' }}>Manage your services and bookings.</p>
                </div>


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

            <DepositPaymentModal
                isOpen={isDepositModalOpen}
                onClose={() => setIsDepositModalOpen(false)}
                booking={selectedBookingForDeposit}
            />
        </div>
    );
};

export default CustomerDashboard;
