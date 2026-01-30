import React from 'react';
import { Plus, MoreVertical, Star, Edit2, Trash2, Sparkles, Scissors, Layers } from 'lucide-react';
import { motion } from 'framer-motion';

const ServicesTab = ({ onAddService, onEditService }) => {
    const services = [
        {
            id: 1,
            name: "Elite Cleaning",
            category: "Cleaning",
            price: "$45/hr",
            rating: 4.8,
            bookings: 124,
            status: "Active",
            icon: <Sparkles size={22} />,
            color: "#3B82F6"
        },
        {
            id: 2,
            name: "Deep Carpet Clean",
            category: "Cleaning",
            price: "$80/room",
            rating: 4.9,
            bookings: 56,
            status: "Active",
            icon: <Layers size={22} />,
            color: "#14B8A6"
        },
        {
            id: 3,
            name: "Move-out Special",
            category: "Cleaning",
            price: "$250+",
            rating: 4.7,
            bookings: 89,
            status: "Paused",
            icon: <Scissors size={22} />,
            color: "#F59E0B"
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
        >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2.5rem' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-1px' }}>My <span className="text-gradient-primary">Services</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.25rem', fontWeight: '500' }}>Manage and monitor your service offerings with cinematic precision.</p>
                </div>
                <button
                    onClick={onAddService}
                    className="btn-primary hover-lift"
                    style={{
                        padding: '0.9rem 1.75rem',
                        borderRadius: '18px',
                        fontSize: '0.95rem',
                        gap: '0.75rem'
                    }}
                >
                    <Plus size={20} strokeWidth={3} /> Create New Service
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '2rem' }}>
                {services.map((service, index) => (
                    <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        className="glass-card hover-lift"
                        style={{
                            padding: '2.25rem',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1.75rem',
                            overflow: 'hidden'
                        }}
                    >
                        {/* Header Section */}
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'center' }}>
                                <div style={{
                                    width: '56px',
                                    height: '56px',
                                    borderRadius: '16px',
                                    background: `${service.color}08`,
                                    color: service.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    border: `1px solid ${service.color}15`
                                }}>
                                    {service.icon}
                                </div>
                                <div>
                                    <span style={{
                                        fontSize: '0.75rem',
                                        fontWeight: '800',
                                        color: 'var(--text-muted)',
                                        textTransform: 'uppercase',
                                        letterSpacing: '1px'
                                    }}>
                                        {service.category}
                                    </span>
                                    <h3 style={{ fontSize: '1.25rem', marginTop: '0.1rem', color: 'var(--text-main)', fontWeight: '800' }}>{service.name}</h3>
                                </div>
                            </div>
                            <button className="glass hover-lift" style={{
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-muted)',
                                cursor: 'pointer',
                                padding: '0.6rem',
                                borderRadius: '12px'
                            }}>
                                <MoreVertical size={18} />
                            </button>
                        </div>

                        {/* Stats Section */}
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '0.75rem' }}>
                            <div style={{ textAlign: 'center', padding: '0.85rem 0.5rem', background: 'var(--glass-bg)', backdropFilter: 'blur(4px)', borderRadius: '14px', border: '1px solid var(--glass-border)' }}>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Price</p>
                                <p style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1rem' }}>{service.price}</p>
                            </div>
                            <div style={{ textAlign: 'center', padding: '0.85rem 0.5rem', background: 'var(--glass-bg)', backdropFilter: 'blur(4px)', borderRadius: '14px', border: '1px solid var(--glass-border)' }}>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Rating</p>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.25rem' }}>
                                    <Star size={14} fill="var(--accent)" color="var(--accent)" />
                                    <span style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1rem' }}>{service.rating}</span>
                                </div>
                            </div>
                            <div style={{ textAlign: 'center', padding: '0.85rem 0.5rem', background: 'var(--glass-bg)', backdropFilter: 'blur(4px)', borderRadius: '14px', border: '1px solid var(--glass-border)' }}>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Bookings</p>
                                <p style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1rem' }}>{service.bookings}</p>
                            </div>
                        </div>

                        {/* Footer Section */}
                        <div style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            paddingTop: '1.5rem',
                            borderTop: '1.5px solid #f8fafc'
                        }}>
                            <span style={{
                                padding: '0.45rem 1rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.75rem',
                                fontWeight: '800',
                                backgroundColor: service.status === 'Active' ? 'rgba(16, 185, 129, 0.12)' : 'rgba(148, 163, 184, 0.12)',
                                color: service.status === 'Active' ? 'var(--secondary)' : 'var(--text-muted)',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px'
                            }}>
                                {service.status}
                            </span>
                            <div style={{ display: 'flex', gap: '0.75rem' }}>
                                <button
                                    onClick={() => onEditService(service)}
                                    className="glass hover-lift"
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '12px',
                                        color: 'var(--text-muted)',
                                        border: '1px solid var(--glass-border)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Edit2 size={16} />
                                </button>
                                <button
                                    className="hover-lift"
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: '12px',
                                        background: 'rgba(239, 68, 68, 0.12)',
                                        color: '#ef4444',
                                        border: '1px solid rgba(239, 68, 68, 0.2)',
                                        cursor: 'pointer'
                                    }}
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </motion.div>
    );
};

export default ServicesTab;
