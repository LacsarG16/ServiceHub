import React from 'react';
import { User, Bell, Shield, CreditCard, ChevronRight } from 'lucide-react';

const SettingsTab = () => {
    return (
        <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Settings</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '3rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {[
                        { id: 'profile', icon: <User size={20} />, label: 'Profile Information' },
                        { id: 'notifications', icon: <Bell size={20} />, label: 'Notifications' },
                        { id: 'security', icon: <Shield size={20} />, label: 'Security' },
                        { id: 'billing', icon: <CreditCard size={20} />, label: 'Billing & Plans' }
                    ].map((item) => (
                        <button
                            key={item.id}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem',
                                borderRadius: 'var(--radius-md)',
                                background: item.id === 'profile' ? '#f1f5f9' : 'transparent',
                                color: item.id === 'profile' ? 'var(--text-main)' : 'var(--text-muted)',
                                fontWeight: '600',
                                textAlign: 'left'
                            }}
                        >
                            {item.icon} {item.label}
                        </button>
                    ))}
                </div>

                <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'white' }}>
                    <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Profile Information</h3>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                        <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '700' }}>
                            J
                        </div>
                        <div>
                            <button className="btn-primary" style={{ padding: '0.5rem 1rem', fontSize: '0.9rem' }}>Change Photo</button>
                            <button style={{ background: 'none', color: '#ef4444', fontSize: '0.9rem', marginLeft: '1rem', fontWeight: '600' }}>Remove</button>
                        </div>
                    </div>

                    <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>First Name</label>
                            <input type="text" defaultValue="John" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Last Name</label>
                            <input type="text" defaultValue="Doe" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Email Address</label>
                            <input type="email" defaultValue="john.doe@example.com" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none' }} />
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Bio</label>
                            <textarea rows="4" defaultValue="Professional cleaning service with over 5 years of experience..." style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid #e2e8f0', outline: 'none', resize: 'none' }}></textarea>
                        </div>
                        <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                            <button className="btn-primary" type="button" style={{ padding: '0.75rem 2rem' }}>Save Changes</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default SettingsTab;
