import React from 'react';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const ProviderCard = ({ provider }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{
                y: -10,
                boxShadow: '0 20px 40px rgba(6, 182, 212, 0.25), 0 0 20px rgba(6, 182, 212, 0.15)'
            }}
            transition={{
                type: 'spring',
                stiffness: 500,
                damping: 20
            }}
            className="glass-card"
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                overflow: 'hidden',
                position: 'relative',
                backdropFilter: 'blur(30px)',
                background: 'var(--glass-bg)',
                border: '1px solid var(--glass-border)',
                borderRadius: 'var(--radius-xl)'
            }}
        >
            <div style={{ position: 'relative', height: '180px', overflow: 'hidden' }}>
                <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                    src={provider.image}
                    alt={provider.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to bottom, transparent 70%, rgba(0,0,0,0.4))',
                    pointerEvents: 'none'
                }}></div>
                <div style={{ position: 'absolute', top: '0.75rem', right: '0.75rem', zIndex: 1, padding: '0.25rem 0.75rem', fontSize: '0.7rem' }} className="accent-badge">
                    {provider.price}
                </div>
            </div>

            <div style={{ padding: '1.25rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.65rem', color: 'var(--primary)', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '2px' }}>
                        {provider.sector}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.2rem', backgroundColor: 'var(--glass-bg)', padding: '2px 8px', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                        <Star size={10} fill="var(--accent)" color="var(--accent)" />
                        <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-main)' }}>{provider.rating}</span>
                    </div>
                </div>

                <h3 style={{
                    fontSize: '1.25rem',
                    marginBottom: '0.5rem',
                    fontWeight: '800',
                    letterSpacing: '-0.5px',
                    lineHeight: '1.2',
                    fontFamily: "'Montserrat', sans-serif"
                }}>{provider.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', marginBottom: '1.25rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <MapPin size={12} className="text-gradient-primary" /> {provider.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                        <Clock size={12} className="text-gradient-primary" /> {provider.availability}
                    </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => navigate(`/profile/${provider.id}`)}
                        className="btn-primary hover-glow"
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.8rem', justifyContent: 'center', borderRadius: '10px' }}
                    >
                        Book Now
                    </button>
                    <button
                        style={{
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '10px',
                            width: '38px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s'
                        }}
                        className="hover-scale"
                    >
                        <ArrowRight size={16} color="var(--text-muted)" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProviderCard;
