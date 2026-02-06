import React, { useState } from 'react';
import {
    LayoutDashboard,
    List,
    Calendar,
    BarChart3,
    Settings,
    Bell,
    Plus,
    Users,
    CheckCircle2,
    DollarSign,
    Briefcase,
    Menu,
    LogOut,
    Home
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

// Tab Components
import OverviewTab from '../components/dashboard/OverviewTab';
import ServicesTab from '../components/dashboard/ServicesTab';
import BookingsTab from '../components/dashboard/BookingsTab';
import AnalyticsTab from '../components/dashboard/AnalyticsTab';
import SettingsTab from '../components/dashboard/SettingsTab';

// UI Components
import Modal from '../components/ui/Modal';
import Drawer from '../components/ui/Drawer';

// Modal/Drawer Content
import ServiceFormModal from '../components/modals/ServiceFormModal';
import BookingDetailsModal from '../components/modals/BookingDetailsModal';
import UpgradeModal from '../components/modals/UpgradeModal';
import BookingFormModal from '../components/modals/BookingFormModal';
import NotificationDrawer from '../components/drawers/NotificationDrawer';

const Dashboard = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('overview');
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(true);

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    // Modal & Drawer State
    const [activeModal, setActiveModal] = useState(null); // 'service', 'booking', 'upgrade'
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [selectedItem, setSelectedItem] = useState(null);

    // ... stats and recentBookings data ...
    const stats = [
        { label: "Total Bookings", value: "142", icon: <Calendar color="var(--primary)" />, change: "+12%" },
        { label: "New Leads", value: "28", icon: <Users color="var(--secondary)" />, change: "+5%" },
        { label: "Revenue", value: "$3,450", icon: <DollarSign color="var(--accent)" />, change: "+20%" },
        { label: "Job Completion", value: "98%", icon: <CheckCircle2 color="#10b981" />, change: "0%" }
    ];

    const recentBookings = [
        { id: 1, customer: "Alice Johnson", service: "Elite Cleaning", date: new Date(2026, 1, 25), time: "09:00 AM", status: "Upcoming" },
        { id: 2, customer: "Mark Stevenson", service: "Elite Cleaning", date: new Date(2026, 1, 24), time: "02:00 PM", status: "Completed" },
        { id: 3, customer: "Jenny Wilson", service: "Move-out Special", date: new Date(2026, 1, 23), time: "11:00 AM", status: "Cancelled" }
    ];

    const openServiceModal = (service = null) => {
        setSelectedItem(service);
        setActiveModal('service');
    };

    const openBookingModal = (booking) => {
        setSelectedItem(booking);
        setActiveModal('booking');
    };

    const openBookingForm = () => {
        setActiveModal('booking-form');
    };

    const openUpgradeModal = () => {
        setActiveModal('upgrade');
    };

    const closeAll = () => {
        setActiveModal(null);
        setIsDrawerOpen(false);
        setSelectedItem(null);
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewTab stats={stats} recentBookings={recentBookings} onBookingClick={openBookingModal} />;
            case 'services':
                return <ServicesTab onAddService={() => openServiceModal()} onEditService={openServiceModal} />;
            case 'bookings':
                return <BookingsTab onBookingClick={openBookingModal} onAddBooking={openBookingForm} />;
            case 'analytics':
                return <AnalyticsTab />;
            case 'settings':
                return <SettingsTab onUpgrade={openUpgradeModal} />;
            default:
                return <OverviewTab stats={stats} recentBookings={recentBookings} onBookingClick={openBookingModal} />;
        }
    };

    const sidebarItems = [
        { id: 'overview', icon: <LayoutDashboard size={20} />, label: 'Overview' },
        { id: 'services', icon: <List size={20} />, label: 'My Services' },
        { id: 'bookings', icon: <Calendar size={20} />, label: 'Bookings' },
        { id: 'analytics', icon: <BarChart3 size={20} />, label: 'Analytics' },
        { id: 'settings', icon: <Settings size={20} />, label: 'Settings' }
    ];

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
                        <Briefcase size={20} strokeWidth={2.5} />
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
                    <button
                        onClick={() => window.location.href = '/'}
                        style={{
                            padding: '0.6rem',
                            borderRadius: '12px',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'var(--glass-blur)',
                            WebkitBackdropFilter: 'var(--glass-blur)',
                            color: 'var(--text-muted)',
                            border: '1px solid var(--glass-border)'
                        }}
                        className="hover-lift"
                    >
                        <Home size={20} />
                    </button>

                    {/* Notification Bell */}
                    <div
                        onClick={() => setIsDrawerOpen(true)}
                        style={{
                            position: 'relative',
                            cursor: 'pointer',
                            padding: '0.6rem',
                            borderRadius: '12px',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'var(--glass-blur)',
                            WebkitBackdropFilter: 'var(--glass-blur)',
                            border: '1px solid var(--glass-border)',
                        }}
                        className="hover-lift"
                    >
                        <Bell size={20} color="var(--text-main)" />
                        <span style={{
                            position: 'absolute',
                            top: '8px',
                            right: '8px',
                            width: '8px',
                            height: '8px',
                            backgroundColor: 'var(--accent)',
                            borderRadius: '50%',
                            border: '2px solid var(--white)'
                        }}></span>
                    </div>

                    {/* Profile & Logout */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', paddingLeft: '1rem', borderLeft: '1px solid var(--glass-border)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                            <div>
                                <h1 style={{ fontSize: '1rem', fontWeight: '700', textAlign: 'right', lineHeight: '1.2' }}>John Doe</h1>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textAlign: 'right' }}>Provider</p>
                            </div>
                            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100" alt="John" style={{ width: '40px', height: '40px', borderRadius: '50%', objectFit: 'cover', border: '2px solid var(--primary)' }} />

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
            </div>

            {/* Main Content */}
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
                    }}>Good day, <span className="text-gradient-primary">John!</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '500' }}>Here's what's happening today.</p>
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

            {/* Modal Layer */}
            <Modal
                isOpen={activeModal === 'service'}
                onClose={closeAll}
                title={selectedItem ? 'Edit Service' : 'Add New Service'}
            >
                <ServiceFormModal service={selectedItem} onSave={closeAll} />
            </Modal>

            <Modal
                isOpen={activeModal === 'booking'}
                onClose={closeAll}
                title="Booking Details"
            >
                <BookingDetailsModal booking={selectedItem} onAction={closeAll} />
            </Modal>

            <Modal
                isOpen={activeModal === 'upgrade'}
                onClose={closeAll}
                title="Choose Your Plan"
            >
                <UpgradeModal />
            </Modal>

            <BookingFormModal
                isOpen={activeModal === 'booking-form'}
                onClose={closeAll}
                services={['Elite Cleaning', 'Move-out Special', 'Deep Clean Plus', 'Window Sparkle']}
            />

            {/* Drawer Layer */}
            <Drawer
                isOpen={isDrawerOpen}
                onClose={closeAll}
                title="Notifications"
            >
                <NotificationDrawer />
            </Drawer>
        </div>
    );
};

export default Dashboard;
