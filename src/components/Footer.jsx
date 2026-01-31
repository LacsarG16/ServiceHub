import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin, Briefcase } from 'lucide-react';

const Footer = () => {
    return (
        <footer style={{
            background: 'var(--glass-bg)',
            color: 'var(--text-main)',
            paddingTop: '2rem',
            paddingBottom: '1.5rem',
            borderTop: '1px solid var(--glass-border)',
            marginTop: 'auto',
            backdropFilter: 'blur(10px)'
        }}>
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
                    {/* Brand Col */}
                    <div>
                        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1.5rem' }}>
                            <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.4rem', borderRadius: '8px', display: 'flex' }}>
                                <Briefcase size={18} />
                            </div>
                            <span style={{ fontSize: '1.25rem', fontWeight: '800', letterSpacing: '-0.5px' }}>
                                Service<span style={{ color: 'var(--primary)' }}>Hub</span>
                            </span>
                        </Link>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '1.5rem', maxWidth: '300px' }}>
                            The #1 marketplace for discovering and booking premium local services. Quality, reliability, and convenience in one place.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem' }}>
                            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
                                <a key={i} href="#" style={{ color: '#94a3b8' }} className="hover-link">
                                    <Icon size={20} />
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Services</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['Home Cleaning', 'Personal Training', 'Tutoring', 'Handyman', 'Pet Services'].map((link) => (
                                <li key={link}><Link to="/directory" style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{link}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Company */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Company</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            {['About Us', 'Careers', 'Contact', 'Privacy Policy', 'Terms of Service'].map((link) => (
                                <li key={link}><Link to={`/${link.toLowerCase().replace(' ', '-')}`} style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{link}</Link></li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact Us</h4>
                        <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                                <MapPin size={18} color="var(--primary)" /> 123 Service Way, San Francisco, CA
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                                <Phone size={18} color="var(--primary)" /> +1 (555) 000-0000
                            </li>
                            <li style={{ display: 'flex', gap: '0.75rem', color: '#94a3b8', fontSize: '0.9rem' }}>
                                <Mail size={18} color="var(--primary)" /> hello@servicehub.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '1.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
                        © {new Date().getFullYear()} ServiceHub Inc. All rights reserved.
                    </p>
                    <div style={{ display: 'flex', gap: '2rem' }}>
                        <Link to="/faq" style={{ color: '#64748b', fontSize: '0.85rem' }}>FAQ</Link>
                        <Link to="/support" style={{ color: '#64748b', fontSize: '0.85rem' }}>Support</Link>
                    </div>
                </div>
            </div>
            <style>{`
        .hover-link:hover { color: var(--primary) !important; transform: translateY(-2px); }
      `}</style>
        </footer>
    );
};

export default Footer;
