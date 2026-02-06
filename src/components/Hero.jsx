import React from 'react';
import GlassSearch from './GlassSearch';
import { Sparkles, ArrowRight, Zap, Home, Camera } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

const ServiceCard = ({ icon: Icon, title, desc, delay, color = "#06B6D4" }) => (
    <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{
            scale: 1.05,
            boxShadow: `0 20px 40px ${color}25, 0 0 20px ${color}15`
        }}
        transition={{
            duration: 0.5,
            ease: [0.2, 0.8, 0.2, 1],
            delay: delay
        }}
        style={{
            padding: '2.5rem 2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            flex: 1,
            minWidth: '250px',
            cursor: 'pointer',
            borderRadius: 'var(--radius-xl)',
            backdropFilter: 'blur(30px)',
            background: 'var(--glass-bg)',
            border: '1px solid var(--glass-border)',
            boxShadow: `0 10px 30px ${color}10`,
            transition: 'border-color 0.2s ease, background 0.2s ease'
        }}
    >
        <div style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            background: `linear-gradient(135deg, ${color}25, ${color}10)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginBottom: '1.5rem',
            color: color,
            boxShadow: `0 0 35px ${color}40, inset 0 0 20px ${color}20`,
            border: `1px solid ${color}40`
        }}>
            <Icon size={32} />
        </div>
        <h3 style={{ fontSize: '1.4rem', marginBottom: '0.75rem', fontWeight: '700' }}>{title}</h3>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flex: 1 }}>{desc}</p>
        <div style={{ marginTop: 'auto', display: 'flex', alignItems: 'center', gap: '0.5rem', color: color, fontWeight: '700', fontSize: '0.9rem', letterSpacing: '0.5px' }}>
            View Providers <ArrowRight size={16} />
        </div>
    </motion.div>
);

const Hero = () => {
    return (
        <section style={{
            padding: '60px 0 60px',
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
                        background: 'var(--glass-bg)',
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
                    padding: '0 0.5rem',
                    alignItems: 'center'
                }}>
                    <ServiceCard
                        icon={Home}
                        title="Smart Home"
                        desc="Automate your living space with verified IoT experts."
                        delay={0.0}
                        color="#3B82F6"

                    />
                    <ServiceCard
                        icon={Camera}
                        title="Creative Studio"
                        desc="Photographers and videographers for your next big project."
                        delay={0.0}
                        color="#14B8A6"
                    />
                    <ServiceCard
                        icon={Zap}
                        title="Rapid Repair"
                        desc="Emergency electrical and plumbing services under 1hr."
                        delay={0.0}
                        color="#F59E0B"

                    />
                </div>

            </div>
        </section>
    );
};

export default Hero;
