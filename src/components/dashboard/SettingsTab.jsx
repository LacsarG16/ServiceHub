import React from 'react';
import { User, Bell, Shield, CreditCard, ChevronRight } from 'lucide-react';

const SettingsTab = ({ onUpgrade }) => {
    const [activeSection, setActiveSection] = React.useState('profile');

    const sections = [
        { id: 'profile', icon: <User size={20} />, label: 'Profile Information' },
        { id: 'notifications', icon: <Bell size={20} />, label: 'Notifications' },
        { id: 'security', icon: <Shield size={20} />, label: 'Security' },
        { id: 'billing', icon: <CreditCard size={20} />, label: 'Billing & Plans' }
    ];

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'notifications':
                return (
                    <div className="glass-card" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px', marginBottom: '1.5rem' }}>Notifications</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', fontWeight: '500' }}>Choose how you want to be notified about your business activity.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { title: 'New Bookings', desc: 'Get notified when a customer books a service' },
                                { title: 'Booking Cancellations', desc: 'Get notified when a booking is cancelled' },
                                { title: 'Payment Recieved', desc: 'Get notified when a payment is processed' },
                                { title: 'Marketing Emails', desc: 'Receive updates about new features and tips' }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: idx !== 3 ? '1px solid var(--glass-border)' : 'none' }}>
                                    <div>
                                        <h4 style={{ fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' }}>{item.desc}</p>
                                    </div>
                                    <label style={{ position: 'relative', display: 'inline-block', width: '48px', height: '26px' }}>
                                        <input type="checkbox" defaultChecked={idx < 3} style={{ opacity: 0, width: 0, height: 0 }} />
                                        <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: idx < 3 ? 'var(--primary)' : 'var(--glass-border)', transition: '.4s', borderRadius: '34px' }}>
                                            <span style={{ position: 'absolute', content: '""', height: '18px', width: '18px', left: idx < 3 ? '26px' : '4px', bottom: '4px', backgroundColor: 'white', transition: '.4s', borderRadius: '50%', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}></span>
                                        </span>
                                    </label>
                                </div>
                            ))}
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '2rem' }}>
                            <button className="btn-primary" style={{ padding: '0.75rem 2rem' }}>Save Preferences</button>
                        </div>
                    </div>
                );
            case 'security':
                return (
                    <div className="glass-card" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px', marginBottom: '2.5rem' }}>Security Settings</h3>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginBottom: '3.5rem' }}>
                            <h4 style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-main)' }}>Change Password</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-muted)' }}>Current Password</label>
                                <input type="password" style={{ padding: '1rem', borderRadius: '14px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-main)', outline: 'none', transition: 'all 0.3s' }} placeholder="••••••••" />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-muted)' }}>New Password</label>
                                    <input type="password" style={{
                                        padding: '1rem',
                                        borderRadius: '14px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        transition: 'all 0.3s',
                                        fontWeight: '600'
                                    }} placeholder="••••••••" />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    <label style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-muted)' }}>Confirm New Password</label>
                                    <input type="password" style={{
                                        padding: '1rem',
                                        borderRadius: '14px',
                                        border: '1px solid var(--glass-border)',
                                        background: 'rgba(255, 255, 255, 0.05)',
                                        color: 'var(--text-main)',
                                        outline: 'none',
                                        transition: 'all 0.3s',
                                        fontWeight: '600'
                                    }} placeholder="••••••••" />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button className="btn-primary" type="button" style={{ padding: '0.85rem 2.5rem' }}>Update Password</button>
                            </div>
                        </form>

                        <div style={{ paddingTop: '2.5rem', borderTop: '1px solid var(--glass-border)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ fontWeight: '700', color: 'var(--text-main)', marginBottom: '0.25rem' }}>Two-Factor Authentication</h4>
                                    <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', fontWeight: '500' }}>Add an extra layer of security to your account.</p>
                                </div>
                                <button className="glass hover-lift" style={{ padding: '0.75rem 1.5rem', borderRadius: '12px', border: '1px solid var(--primary)', color: 'var(--primary)', fontWeight: '800', cursor: 'pointer' }}>
                                    Enable 2FA
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'billing':
                return (
                    <div className="glass-card" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px', marginBottom: '2.5rem' }}>Billing & Plans</h3>

                        <div className="glass" style={{ padding: '2rem', borderRadius: '18px', border: '1px solid var(--primary)', marginBottom: '2.5rem', position: 'relative', overflow: 'hidden' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'var(--primary)' }}></div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.5rem', fontWeight: '600' }}>Current Plan</p>
                                    <h4 style={{ fontSize: '1.75rem', fontWeight: '900', color: 'var(--primary)' }}>Free Starter</h4>
                                </div>
                                <button onClick={onUpgrade} className="btn-primary hover-lift" style={{ padding: '0.85rem 2rem' }}>Upgrade Plan</button>
                            </div>
                            <div style={{ marginTop: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '3rem' }}>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Next Billing Date</p>
                                    <p style={{ fontWeight: '600' }}>N/A (Free)</p>
                                </div>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>Payment Method</p>
                                    <p style={{ fontWeight: '600' }}>None Added</p>
                                </div>
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <h4 style={{ fontWeight: '800', color: 'var(--text-main)' }}>Recent Invoices</h4>
                            <div className="glass" style={{ textAlign: 'center', padding: '3.5rem', border: '2px dashed var(--glass-border)', borderRadius: '18px', color: 'var(--text-muted)', fontWeight: '500' }}>
                                No invoices yet.
                            </div>
                        </div>
                    </div>
                );
            case 'profile':
            default:
                return (
                    <div className="glass-card" style={{ padding: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px', marginBottom: '2.5rem' }}>Profile Information</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem', marginBottom: '3rem' }}>
                            <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: 'linear-gradient(135deg, var(--primary), var(--accent))', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', fontWeight: '900', boxShadow: 'var(--glass-card-shadow)' }}>
                                J
                            </div>
                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                                <button className="btn-primary hover-lift" style={{ padding: '0.75rem 1.5rem', fontSize: '0.95rem' }}>Change Photo</button>
                                <button style={{ background: 'none', color: '#ef4444', fontSize: '0.95rem', fontWeight: '800', border: 'none', cursor: 'pointer', padding: '0.5rem 1rem' }}>Remove</button>
                            </div>
                        </div>

                        <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-muted)' }}>First Name</label>
                                <input type="text" defaultValue="John" style={{
                                    padding: '1rem',
                                    borderRadius: '14px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-main)',
                                    outline: 'none',
                                    transition: 'all 0.3s',
                                    fontWeight: '600'
                                }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                <label style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-muted)' }}>Last Name</label>
                                <input type="text" defaultValue="Doe" style={{
                                    padding: '1rem',
                                    borderRadius: '14px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-main)',
                                    outline: 'none',
                                    transition: 'all 0.3s',
                                    fontWeight: '600'
                                }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-muted)' }}>Email Address</label>
                                <input type="email" defaultValue="john.doe@example.com" style={{ padding: '1rem', borderRadius: '14px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-main)', outline: 'none', transition: 'all 0.3s', fontWeight: '500' }} />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '0.95rem', fontWeight: '700', color: 'var(--text-muted)' }}>Bio</label>
                                <textarea rows="5" defaultValue="Professional cleaning service with over 5 years of experience..." style={{
                                    padding: '1rem',
                                    borderRadius: '14px',
                                    border: '1px solid var(--glass-border)',
                                    background: 'rgba(255, 255, 255, 0.05)',
                                    color: 'var(--text-main)',
                                    outline: 'none',
                                    resize: 'none',
                                    transition: 'all 0.3s',
                                    fontWeight: '600',
                                    lineHeight: '1.6'
                                }}></textarea>
                            </div>
                            <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', marginTop: '1.5rem' }}>
                                <button className="btn-primary" type="button" style={{ padding: '0.85rem 2.5rem' }}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                );
        }
    };

    return (
        <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-1px', marginBottom: '3rem' }}>Dashboard <span className="text-gradient-primary">Settings</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '4rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    {sections.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            className="hover-lift"
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1.25rem 1.5rem',
                                borderRadius: '20px',
                                background: activeSection === item.id ? 'rgba(6, 182, 212, 0.12)' : 'transparent',
                                color: activeSection === item.id ? 'var(--primary)' : 'var(--text-muted)',
                                fontWeight: '800',
                                textAlign: 'left',
                                border: 'none',
                                cursor: 'pointer',
                                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
                            }}
                        >
                            <span style={{
                                padding: '0.5rem',
                                borderRadius: '12px',
                                background: activeSection === item.id ? 'var(--white)' : 'transparent',
                                boxShadow: activeSection === item.id ? 'var(--shadow-sm)' : 'none'
                            }}>
                                {React.cloneElement(item.icon, { size: 20, strokeWidth: activeSection === item.id ? 2.5 : 2 })}
                            </span>
                            <span style={{ fontSize: '1rem' }}>{item.label}</span>
                        </button>
                    ))}
                </div>

                <div>
                    {renderSectionContent()}
                </div>
            </div>
        </div>
    );
};

export default SettingsTab;
