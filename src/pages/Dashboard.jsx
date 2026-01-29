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
    Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

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
    const [activeTab, setActiveTab] = useState('overview');

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
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#fcfdfe' }}>
            {/* Sidebar */}
            <aside style={{
                width: '280px',
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
                borderRight: '1px solid #eef2f6',
                padding: '100px 1.5rem 2.5rem',
                position: 'fixed',
                height: '100vh',
                left: 0,
                top: 0,
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem',
                boxShadow: 'var(--shadow-premium)'
            }}>
                {/* Navigation Items */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {sidebarItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem 1.25rem',
                                borderRadius: '16px',
                                background: activeTab === item.id ? 'rgba(59, 130, 246, 0.08)' : 'transparent',
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
                                background: activeTab === item.id ? 'white' : 'transparent',
                                boxShadow: activeTab === item.id ? '0 4px 6px -1px rgba(0,0,0,0.05)' : 'none'
                            }}>
                                {React.cloneElement(item.icon, { size: 18, strokeWidth: activeTab === item.id ? 2.5 : 2 })}
                            </span>
                            <span style={{ fontSize: '0.95rem' }}>{item.label}</span>
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                padding: '100px 3rem 3rem',
                marginLeft: '280px',
                minWidth: 0
            }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h1 style={{ fontSize: '2.25rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-1px', marginBottom: '0.5rem' }}>Good morning, John!</h1>
                        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '500' }}>Here's what's happening with your business today.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        {/* Notification Bell */}
                        <div
                            onClick={() => setIsDrawerOpen(true)}
                            style={{
                                position: 'relative',
                                cursor: 'pointer',
                                padding: '0.75rem',
                                borderRadius: '16px',
                                background: 'white',
                                border: '1px solid #eff3f7',
                                boxShadow: 'var(--shadow-sm)'
                            }}
                            className="hover-lift"
                        >
                            <Bell size={22} color="var(--text-main)" />
                            {/* Pulsing indicator */}
                            <span style={{
                                position: 'absolute',
                                top: '10px',
                                right: '10px',
                                width: '10px',
                                height: '10px',
                                backgroundColor: 'var(--accent)',
                                borderRadius: '50%',
                                border: '2px solid white',
                                boxShadow: '0 0 0 2px rgba(245, 158, 11, 0.2)'
                            }}></span>
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
