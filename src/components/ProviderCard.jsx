import React from 'react';
import { Star, MapPin, Clock, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useNavigate } from 'react-router-dom';

const ProviderCard = ({ provider }) => {
    const navigate = useNavigate();

    return (
        <motion.div
            whileHover={{ y: -10 }}
            className="glass-card"
            style={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column'
            }}
        >
            <div style={{ position: 'relative', height: '200px', overflow: 'hidden' }}>
                <img
                    src={provider.image}
                    alt={provider.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', top: '1rem', right: '1rem' }} className="accent-badge">
                    {provider.price}
                </div>
            </div>

            <div style={{ padding: '1.5rem', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '0.8rem', color: 'var(--primary)', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '1px' }}>
                        {provider.sector}
                    </span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent)' }}>
                        <Star size={14} fill="currentColor" />
                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>{provider.rating}</span>
                    </div>
                </div>

                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem' }}>{provider.name}</h3>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '1.5rem' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <MapPin size={14} /> {provider.location}
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <Clock size={14} /> {provider.availability}
                    </div>
                </div>

                <div style={{ marginTop: 'auto', display: 'flex', gap: '0.5rem' }}>
                    <button
                        onClick={() => navigate(`/profile/${provider.id}`)}
                        className="btn-primary"
                        style={{ flex: 1, padding: '0.6rem', fontSize: '0.85rem', justifyContent: 'center' }}
                    >
                        Book Now
                    </button>
                    <button
                        style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', padding: '0.6rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                    >
                        <ArrowRight size={16} color="var(--text-muted)" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

export default ProviderCard;
