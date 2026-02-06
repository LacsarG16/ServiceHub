import React from 'react';
import { Bell, Calendar, DollarSign, Star, Info, CheckCircle2 } from 'lucide-react';

const NotificationDrawer = () => {
    const notifications = [
        {
            id: 1,
            type: 'booking',
            title: 'New Booking Request',
            message: 'Alice Johnson requested "Elite Cleaning" for Feb 25.',
            time: '2 mins ago',
            unread: true,
            icon: <Calendar size={18} color="var(--primary)" />
        },
        {
            id: 2,
            type: 'payment',
            title: 'Payment Received',
            message: 'You received $120.00 for order #8492.',
            time: '2 hours ago',
            unread: true,
            icon: <DollarSign size={18} color="#10b981" />
        },
        {
            id: 3,
            type: 'review',
            title: 'New 5-Star Review!',
            message: 'Mark Stevenson left a glowing review for your service.',
            time: '5 hours ago',
            unread: false,
            icon: <Star size={18} color="var(--accent)" fill="var(--accent)" />
        },
        {
            id: 4,
            type: 'system',
            title: 'Profile Verified',
            message: 'Your identity verification has been approved.',
            time: '1 day ago',
            unread: false,
            icon: <CheckCircle2 size={18} color="#10b981" />
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>You have 2 unread notifications</span>
                <button style={{ fontSize: '0.85rem', color: 'var(--primary)', fontWeight: '700', background: 'none' }}>Mark all as read</button>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {notifications.map((notif) => (
                    <div
                        key={notif.id}
                        style={{
                            padding: '1.25rem',
                            borderRadius: 'var(--radius-md)',
                            background: notif.unread ? 'var(--primary-light)' : 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid var(--glass-border)',
                            display: 'flex',
                            gap: '1rem',
                            cursor: 'pointer',
                            transition: 'all 0.2s',
                            backdropFilter: 'var(--glass-blur)',
                            WebkitBackdropFilter: 'var(--glass-blur)'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.background = 'var(--primary-light)'}
                        onMouseLeave={(e) => e.currentTarget.style.background = notif.unread ? 'var(--primary-light)' : 'rgba(255, 255, 255, 0.03)'}
                    >
                        <div style={{
                            minWidth: '40px',
                            height: '40px',
                            borderRadius: '12px',
                            background: 'white',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            boxShadow: '0 2px 4px rgba(0,0,0,0.05)'
                        }}>
                            {notif.icon}
                        </div>
                        <div style={{ flex: 1 }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.25rem' }}>
                                <h5 style={{ fontWeight: '700', fontSize: '0.95rem' }}>{notif.title}</h5>
                                {notif.unread && <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)', marginTop: '4px' }}></div>}
                            </div>
                            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.4', marginBottom: '0.5rem' }}>{notif.message}</p>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '500' }}>{notif.time}</span>
                        </div>
                    </div>
                ))}
            </div>

            <button
                style={{
                    marginTop: '1rem',
                    width: '100%',
                    padding: '1rem',
                    borderRadius: 'var(--radius-md)',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'var(--glass-blur)',
                    border: '1px solid var(--glass-border)',
                    color: 'var(--text-main)',
                    fontWeight: '700',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '0.5rem'
                }}
            >
                <Info size={18} /> View Notification Settings
            </button>
        </div>
    );
};

export default NotificationDrawer;
