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
        <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc' }}>
            {/* Sidebar */}
            <aside style={{
                width: '280px',
                backgroundColor: 'white',
                borderRight: '1px solid #e2e8f0',
                padding: '100px 1.5rem 2.5rem', // Increased top padding for top navbar
                position: 'fixed',
                height: '100vh',
                left: 0,
                top: 0,
                zIndex: 10,
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
            }}>
                {/* Sidebar Logo */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', padding: '0 0.5rem' }}>
                    <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.6rem', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Briefcase size={22} />
                    </div>
                    <span style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>
                        Service<span style={{ color: 'var(--primary)' }}>Hub</span>
                    </span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {sidebarItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveTab(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem',
                                borderRadius: 'var(--radius-md)',
                                background: activeTab === item.id ? 'var(--primary)' : 'transparent',
                                color: activeTab === item.id ? 'white' : 'var(--text-muted)',
                                fontWeight: '600',
                                transition: 'all 0.2s',
                                border: 'none',
                                textAlign: 'left',
                                cursor: 'pointer'
                            }}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </div>
            </aside>

            {/* Main Content */}
            <main style={{
                flex: 1,
                padding: '100px 2.5rem 2.5rem', // Increased top padding for top navbar
                marginLeft: '280px',
                minWidth: 0 // Prevent content from overflowing flex container
            }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <div>
                        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Good morning, John!</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Here's what's happening with your business today.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div
                            onClick={() => setIsDrawerOpen(true)}
                            style={{ position: 'relative', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0' }}
                        >
                            <Bell size={20} color="var(--text-muted)" />
                            <span style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', backgroundColor: 'var(--accent)', borderRadius: '50%', border: '2px solid white' }}></span>
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
