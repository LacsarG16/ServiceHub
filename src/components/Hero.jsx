import React from 'react';
import { Search, MapPin, ArrowRight, Shield, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section style={{
            padding: '160px 0 100px',
            background: 'linear-gradient(135deg, #f8fafc 0%, #e0f2fe 100%)',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative blobs */}
            <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', background: 'var(--primary)', opacity: 0.05, filter: 'blur(80px)' }} />
            <div style={{ position: 'absolute', bottom: '-100px', left: '-100px', width: '300px', height: '300px', borderRadius: '50%', background: 'var(--secondary)', opacity: 0.1, filter: 'blur(80px)' }} />

            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '4rem', alignItems: 'center' }} className="hero-grid">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.85rem', fontWeight: '700', marginBottom: '1.5rem' }}>
                            <Shield size={16} /> Verified Professionals Only
                        </div>
                        <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.75rem)', marginBottom: '1.5rem', color: 'var(--text-main)', letterSpacing: '-1.5px' }}>
                            Find the perfect <span style={{ color: 'var(--primary)' }}>service</span> for your home & business.
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '2.5rem', maxWidth: '600px' }}>
                            Connect with top-rated local professionals. From cleaning and tutors to personal trainers and handymen. Book in seconds.
                        </p>

                        <div className="glass" style={{ padding: '0.75rem', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                            <div style={{ flex: 2, minWidth: '200px', position: 'relative' }}>
                                <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type="text"
                                    placeholder="What service do you need?"
                                    style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', fontSize: '1rem' }}
                                />
                            </div>
                            <div style={{ flex: 1, minWidth: '150px', position: 'relative' }}>
                                <MapPin size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type="text"
                                    placeholder="Location"
                                    style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', fontSize: '1rem' }}
                                />
                            </div>
                            <button className="btn-primary" style={{ padding: '0.85rem 2rem' }}>
                                Search Services
                            </button>
                        </div>

                        <div style={{ display: 'flex', gap: '2rem', marginTop: '2.5rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ color: 'var(--accent)', display: 'flex' }}><Star size={18} fill="currentColor" /></div>
                                <span style={{ fontWeight: '600' }}>4.9/5</span>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>User Rating</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{ color: 'var(--secondary)', display: 'flex' }}><Clock size={18} /></div>
                                <span style={{ fontWeight: '600' }}>24h</span>
                                <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Fast Response</span>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
            <style>{`
        @media (min-width: 992px) {
          .hero-grid { grid-template-columns: 1.2fr 0.8fr; }
        }
      `}</style>
        </section>
    );
};

export default Hero;
