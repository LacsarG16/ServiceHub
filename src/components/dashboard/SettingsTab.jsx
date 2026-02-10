import { useTheme } from '../../context/ThemeContext';
import { User, Bell, Shield, CreditCard, ChevronRight, Palette } from 'lucide-react';

const SettingsTab = ({ onUpgrade }) => {
    const [activeSection, setActiveSection] = React.useState('profile');
    const { showAurora, toggleAurora } = useTheme();

    const sections = [
        { id: 'profile', icon: <User size={20} />, label: 'Profile Information' },
        { id: 'appearance', icon: <Palette size={20} />, label: 'Appearance' },
        { id: 'notifications', icon: <Bell size={20} />, label: 'Notifications' },
        { id: 'security', icon: <Shield size={20} />, label: 'Security' },
        { id: 'billing', icon: <CreditCard size={20} />, label: 'Billing & Plans' }
    ];

    const renderSectionContent = () => {
        switch (activeSection) {
            case 'appearance':
                return (
                    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'var(--glass-card-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-card-border)', boxShadow: 'var(--glass-card-shadow)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Appearance Settings</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Customize the visual effects and theme of your dashboard.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem' }}>
                                <div>
                                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Aurora Background</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Enable the dynamic colorful aurora effect. Disabling it creates a deeper cinematic starry look.</p>
                                </div>
                                <label style={{ position: 'relative', display: 'inline-block', width: '44px', height: '24px' }}>
                                    <input
                                        type="checkbox"
                                        checked={showAurora}
                                        onChange={toggleAurora}
                                        style={{ opacity: 0, width: 0, height: 0 }}
                                    />
                                    <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: showAurora ? 'var(--primary)' : '#cbd5e1', transition: '.4s', borderRadius: '34px' }}>
                                        <span style={{ position: 'absolute', content: '""', height: '18px', width: '18px', left: showAurora ? '22px' : '4px', bottom: '3px', backgroundColor: 'var(--white)', transition: '.4s', borderRadius: '50%' }}></span>
                                    </span>
                                </label>
                            </div>
                        </div>
                    </div>
                );
            case 'notifications':
                return (
                    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'var(--glass-card-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-card-border)', boxShadow: 'var(--glass-card-shadow)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Notifications</h3>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Choose how you want to be notified about your business activity.</p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            {[
                                { title: 'New Bookings', desc: 'Get notified when a customer books a service' },
                                { title: 'Booking Cancellations', desc: 'Get notified when a booking is cancelled' },
                                { title: 'Payment Recieved', desc: 'Get notified when a payment is processed' },
                                { title: 'Marketing Emails', desc: 'Receive updates about new features and tips' }
                            ].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: '1.5rem', borderBottom: idx !== 3 ? '1px solid var(--glass-border)' : 'none' }}>
                                    <div>
                                        <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>{item.title}</h4>
                                        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{item.desc}</p>
                                    </div>
                                    <label style={{ position: 'relative', display: 'inline-block', width: '44px', height: '24px' }}>
                                        <input type="checkbox" defaultChecked={idx < 3} style={{ opacity: 0, width: 0, height: 0 }} />
                                        <span style={{ position: 'absolute', cursor: 'pointer', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: idx < 3 ? 'var(--primary)' : '#cbd5e1', transition: '.4s', borderRadius: '34px' }}>
                                            <span style={{ position: 'absolute', content: '""', height: '18px', width: '18px', left: idx < 3 ? '22px' : '4px', bottom: '3px', backgroundColor: 'var(--white)', transition: '.4s', borderRadius: '50%' }}></span>
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
                    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'var(--glass-card-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-card-border)', boxShadow: 'var(--glass-card-shadow)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Security Settings</h3>

                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                            <h4 style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--text-main)' }}>Change Password</h4>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Current Password</label>
                                <input type="password" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', outline: 'none', background: 'var(--background)', color: 'var(--text-main)' }} />
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>New Password</label>
                                    <input type="password" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', outline: 'none', background: 'var(--background)', color: 'var(--text-main)' }} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Confirm New Password</label>
                                    <input type="password" style={{ padding: '0.75rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--glass-border)', outline: 'none', background: 'var(--background)', color: 'var(--text-main)' }} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                                <button className="btn-primary" type="button" style={{ padding: '0.75rem 2rem' }}>Update Password</button>
                            </div>
                        </form>

                        <div style={{ paddingTop: '2rem', borderTop: '1px solid #f1f5f9' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <h4 style={{ fontWeight: '600', marginBottom: '0.25rem' }}>Two-Factor Authentication</h4>
                                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>Add an extra layer of security to your account.</p>
                                </div>
                                <button style={{ padding: '0.6rem 1.2rem', borderRadius: 'var(--radius-md)', border: '1px solid var(--primary)', background: 'transparent', color: 'var(--primary)', fontWeight: '600', cursor: 'pointer' }}>
                                    Enable 2FA
                                </button>
                            </div>
                        </div>
                    </div>
                );
            case 'billing':
                return (
                    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'var(--glass-card-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-card-border)', boxShadow: 'var(--glass-card-shadow)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '1.5rem' }}>Billing & Plans</h3>

                        <div style={{ padding: '1.5rem', borderRadius: 'var(--radius-md)', background: 'var(--background)', border: '1px solid var(--glass-border)', marginBottom: '2rem' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.25rem' }}>Current Plan</p>
                                    <h4 style={{ fontSize: '1.5rem', fontWeight: '800', color: 'var(--primary)' }}>Free Starter</h4>
                                </div>
                                <button onClick={onUpgrade} className="btn-primary" style={{ padding: '0.75rem 1.5rem' }}>Upgrade Plan</button>
                            </div>
                            <div style={{ marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)', display: 'flex', gap: '2rem' }}>
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

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <h4 style={{ fontWeight: '700' }}>Recent Invoices</h4>
                            <div style={{ textAlign: 'center', padding: '2rem', border: '2px dashed var(--glass-border)', borderRadius: 'var(--radius-md)', color: 'var(--text-muted)' }}>
                                No invoices yet.
                            </div>
                        </div>
                    </div>
                );
            case 'profile':
            default:
                return (
                    <div className="glass-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'var(--glass-card-bg)', backdropFilter: 'var(--glass-blur)', WebkitBackdropFilter: 'var(--glass-blur)', border: '1px solid var(--glass-card-border)', boxShadow: 'var(--glass-card-shadow)' }}>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Profile Information</h3>

                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2.5rem' }}>
                            <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'var(--primary)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2rem', fontWeight: '700' }}>
                                J
                            </div>
                            <div>
                                <button className="btn-primary" style={{ padding: '0.5rem 1.1rem', fontSize: '0.9rem' }}>Change Photo</button>
                                <button style={{ background: 'none', color: '#ef4444', fontSize: '0.9rem', marginLeft: '1rem', fontWeight: '600', border: 'none', cursor: 'pointer' }}>Remove</button>
                            </div>
                        </div>

                        <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>First Name</label>
                                <input type="text" defaultValue="John" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Last Name</label>
                                <input type="text" defaultValue="Doe" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Email Address</label>
                                <input type="email" defaultValue="john.doe@example.com" />
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', gridColumn: 'span 2' }}>
                                <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-muted)' }}>Bio</label>
                                <textarea rows="4" defaultValue="Professional cleaning service with over 5 years of experience..."></textarea>
                            </div>
                            <div style={{ gridColumn: 'span 2', display: 'flex', justifyContent: 'flex-end', marginTop: '1rem' }}>
                                <button className="btn-primary" type="button" style={{ padding: '0.75rem 2rem' }}>Save Changes</button>
                            </div>
                        </form>
                    </div>
                );
        }
    };

    return (
        <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Settings</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'minmax(250px, 1fr) 2fr', gap: '3rem' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    {sections.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => setActiveSection(item.id)}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                padding: '1rem',
                                borderRadius: 'var(--radius-md)',
                                background: activeSection === item.id ? 'var(--background)' : 'transparent',
                                color: activeSection === item.id ? 'var(--text-main)' : 'var(--text-muted)',
                                fontWeight: '600',
                                textAlign: 'left',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            {item.icon} {item.label}
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
