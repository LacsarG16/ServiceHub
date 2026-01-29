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
    DollarSign
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Tab Components
import OverviewTab from '../components/dashboard/OverviewTab';
import ServicesTab from '../components/dashboard/ServicesTab';
import BookingsTab from '../components/dashboard/BookingsTab';
import AnalyticsTab from '../components/dashboard/AnalyticsTab';
import SettingsTab from '../components/dashboard/SettingsTab';

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

    const renderTabContent = () => {
        switch (activeTab) {
            case 'overview':
                return <OverviewTab stats={stats} recentBookings={recentBookings} />;
            case 'services':
                return <ServicesTab />;
            case 'bookings':
                return <BookingsTab />;
            case 'analytics':
                return <AnalyticsTab />;
            case 'settings':
                return <SettingsTab />;
            default:
                return <OverviewTab stats={stats} recentBookings={recentBookings} />;
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
                padding: '120px 1.5rem 2rem',
                position: 'fixed',
                height: '100vh',
                left: 0,
                top: 0,
                zIndex: 10
            }}>
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
                padding: '120px 2.5rem 2.5rem',
                marginLeft: '280px',
                minWidth: 0 // Prevent content from overflowing flex container
            }}>
                <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                    <div>
                        <h1 style={{ fontSize: '1.75rem', marginBottom: '0.25rem' }}>Good morning, John!</h1>
                        <p style={{ color: 'var(--text-muted)' }}>Here's what's happening with your business today.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
                        <div style={{ position: 'relative', cursor: 'pointer', padding: '0.5rem', borderRadius: '50%', background: 'white', border: '1px solid #e2e8f0' }}>
                            <Bell size={20} color="var(--text-muted)" />
                            <span style={{ position: 'absolute', top: '8px', right: '8px', width: '8px', height: '8px', backgroundColor: 'var(--accent)', borderRadius: '50%', border: '2px solid white' }}></span>
                        </div>
                        {activeTab !== 'services' && (
                            <button className="btn-primary" style={{ padding: '0.65rem 1.25rem' }}>
                                <Plus size={18} /> Add New
                            </button>
                        )}
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

export default Dashboard;
