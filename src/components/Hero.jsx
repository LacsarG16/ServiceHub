import React from 'react';
import GlassSearch from './GlassSearch';
import { Sparkles, ArrowRight, Zap, Home, Camera } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const ServiceCard = ({ icon: Icon, title, desc, delay }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration: 0.6 }}
        className="glass-card"
        style={{
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minWidth: '250px',
            cursor: 'pointer'
        }}
    >
        <div style={{
            width: '60px',
            height: '60px',
            borderRadius: '16px',
            background: 'rgba(6, 182, 212, 0.1)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            color: 'var(--primary)'
        }}>
            <Icon size={30} />
        </div>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem' }}>{desc}</p>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--secondary)', fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
            View Providers <ArrowRight size={16} />
        </div>
    </motion.div>
);

const Hero = () => {
    return (
        <section style={{
            padding: '160px 0 100px',
            position: 'relative',
            overflow: 'visible' // Allow floaters to not be clipped
        }}>
            <div className="container" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1.25rem',
                        borderRadius: '999px',
                        background: 'rgba(255,255,255,0.6)',
                        border: '1px solid var(--glass-border)',
                        backdropFilter: 'blur(10px)',
                        fontSize: '0.85rem',
                        fontWeight: '600',
                        marginBottom: '2rem',
                        boxShadow: 'var(--shadow-sm)'
                    }}
                >
                    <Sparkles size={16} color="var(--secondary)" />
                    <span className="text-gradient">The Future of Service Booking</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    style={{
                        fontSize: 'clamp(2.5rem, 6vw, 5rem)',
                        fontWeight: '800',
                        marginBottom: '1.5rem',
                        lineHeight: '1.1',
                        letterSpacing: '-2px',
                        maxWidth: '900px'
                    }}
                >
                    Experience the <br />
                    <span className="text-gradient-primary">Extraordinary.</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    style={{
                        fontSize: '1.25rem',
                        color: 'var(--text-muted)',
                        marginBottom: '3.5rem',
                        maxWidth: '650px',
                        lineHeight: '1.7'
                    }}
                >
                    Connect with elite professionals in an immersive environment designed for clarity, trust, and speed.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    style={{ width: '100%', marginBottom: '6rem' }}
                >
                    <GlassSearch />
                </motion.div>

                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    width: '100%',
                    padding: '0 0.5rem'
                }}>
                    <ServiceCard
                        icon={Home}
                        title="Smart Home"
                        desc="Automate your living space with verified IoT experts."
                        delay={0.4}
                    />
                    <ServiceCard
                        icon={Camera}
                        title="Creative Studio"
                        desc="Photographers and videographers for your next big project."
                        delay={0.5}
                    />
                    <ServiceCard
                        icon={Zap}
                        title="Rapid Repair"
                        desc="Emergency electrical and plumbing services under 1hr."
                        delay={0.6}
                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
