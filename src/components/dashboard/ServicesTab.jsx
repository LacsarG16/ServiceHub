import React from 'react';
import { Plus, MoreVertical, Star, Edit2, Trash2, Sparkles, Scissors, Layers, TrendingUp, Award } from 'lucide-react';
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
                    <h2 style={{ fontSize: '1.85rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>My Services</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1rem', marginTop: '0.25rem' }}>Manage and monitor your service offerings.</p>
                </div>
                <button
                    onClick={onAddService}
                    className="btn-primary hover-lift"
                    style={{
                        padding: '0.85rem 1.5rem',
                        borderRadius: '16px',
                        boxShadow: '0 10px 20px -5px rgba(59, 130, 246, 0.4)',
                        fontSize: '0.95rem'
                    }}
                >
                    <Plus size={20} /> Create New Service
                </button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr 350px', gap: '2rem' }}>
                {/* LEFT SIDEBAR */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Performance Rankings */}
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--glass-card-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        WebkitBackdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-card-border)',
                        boxShadow: 'var(--glass-card-shadow)'
                    }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Top Performers</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            {services.sort((a, b) => b.bookings - a.bookings).map((service, idx) => (
                                <div key={idx} style={{
                                    padding: '0.75rem',
                                    borderRadius: '10px',
                                    background: idx === 0 ? 'linear-gradient(135deg, #fef3c7 0%, #fde68a 100%)' : 'var(--background)',
                                    border: `1px solid ${idx === 0 ? '#f59e0b' : 'var(--glass-border)'}`
                                }}>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.25rem' }}>
                                        <span style={{ fontSize: '1.1rem', fontWeight: '900', color: idx === 0 ? '#f59e0b' : 'var(--text-muted)' }}>#{idx + 1}</span>
                                        <span style={{ fontSize: '0.8rem', fontWeight: '700', color: 'var(--text-main)', flex: 1, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{service.name}</span>
                                    </div>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>{service.bookings} bookings</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Summary Stats */}
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'linear-gradient(135deg, var(--primary) 0%, var(--accent) 100%)',
                        color: 'white',
                        boxShadow: 'var(--shadow-premium)'
                    }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1rem' }}>Overview</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                            <div>
                                <p style={{ fontSize: '0.75rem', opacity: 0.9, marginBottom: '0.25rem' }}>Total Services</p>
                                <p style={{ fontSize: '1.75rem', fontWeight: '900' }}>{services.length}</p>
                            </div>
                            <div style={{ paddingTop: '0.75rem', borderTop: '1px solid rgba(255,255,255,0.2)' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Active</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{services.filter(s => s.status === 'Active').length}</span>
                                </div>
                                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                    <span style={{ fontSize: '0.75rem', opacity: 0.9 }}>Paused</span>
                                    <span style={{ fontSize: '0.85rem', fontWeight: '700' }}>{services.filter(s => s.status === 'Paused').length}</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Total Bookings */}
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--glass-card-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        WebkitBackdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-card-border)',
                        boxShadow: 'var(--glass-card-shadow)'
                    }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1rem', color: 'var(--text-main)' }}>Total Bookings</h3>
                        <p style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--primary)' }}>
                            {services.reduce((sum, s) => sum + s.bookings, 0)}
                        </p>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Across all services</p>
                    </div>
                </div>

                {/* MAIN CONTENT - Service Cards */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: index * 0.1 }}
                            className="hover-lift"
                            style={{
                                padding: '2rem',
                                borderRadius: 'var(--radius-xl)',
                                background: 'var(--glass-card-bg)',
                                backdropFilter: 'var(--glass-blur)',
                                WebkitBackdropFilter: 'var(--glass-blur)',
                                position: 'relative',
                                border: '1px solid var(--glass-card-border)',
                                boxShadow: 'var(--glass-card-shadow)'
                            }}
                        >
                            {/* Status Badge */}
                            <div style={{
                                position: 'absolute',
                                top: '1.5rem',
                                right: '1.5rem',
                                padding: '0.35rem 0.85rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.7rem',
                                fontWeight: '800',
                                textTransform: 'uppercase',
                                letterSpacing: '0.5px',
                                backgroundColor: service.status === 'Active' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(245, 158, 11, 0.08)',
                                color: service.status === 'Active' ? '#10b981' : '#f59e0b'
                            }}>
                                {service.status}
                            </div>

                            {/* Icon */}
                            <div style={{
                                width: '60px',
                                height: '60px',
                                borderRadius: '18px',
                                background: `${service.color}08`,
                                border: `1px solid ${service.color}15`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: service.color
                            }}>
                                {service.icon}
                            </div>

                            {/* Service Info */}
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--text-main)' }}>{service.name}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{service.category}</p>

                            {/* Stats */}
                            <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1.75rem', paddingBottom: '1.75rem', borderBottom: '1px solid var(--glass-border)' }}>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600' }}>Rating</p>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                                        <Star size={16} fill="#F59E0B" color="#F59E0B" />
                                        <span style={{ fontWeight: '800', fontSize: '1rem' }}>{service.rating}</span>
                                    </div>
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.35rem', fontWeight: '600' }}>Bookings</p>
                                    <p style={{ fontWeight: '800', fontSize: '1rem' }}>{service.bookings}</p>
                                </div>
                            </div>

                            {/* Price & Actions */}
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div>
                                    <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '0.25rem' }}>Price</p>
                                    <p style={{ fontSize: '1.35rem', fontWeight: '900', color: 'var(--primary)' }}>{service.price}</p>
                                </div>
                                <div style={{ display: 'flex', gap: '0.5rem' }}>
                                    <button
                                        onClick={() => onEditService(service)}
                                        className="hover-lift"
                                        style={{
                                            padding: '0.65rem',
                                            borderRadius: '12px',
                                            background: 'var(--primary-light)',
                                            border: '1px solid var(--primary)',
                                            color: 'var(--primary)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <Edit2 size={16} />
                                    </button>
                                    <button
                                        className="hover-lift"
                                        style={{
                                            padding: '0.65rem',
                                            borderRadius: '12px',
                                            background: 'var(--background)',
                                            border: '1px solid var(--glass-border)',
                                            color: 'var(--text-muted)',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        <MoreVertical size={16} />
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* RIGHT SIDEBAR */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    {/* Recommendations */}
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--glass-card-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        WebkitBackdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-card-border)',
                        boxShadow: 'var(--glass-card-shadow)'
                    }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Recommendations</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <div style={{
                                padding: '1rem',
                                borderRadius: '10px',
                                background: 'rgba(59, 130, 246, 0.05)',
                                border: '1px solid rgba(59, 130, 246, 0.1)'
                            }}>
                                <p style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Add Window Cleaning</p>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>High demand in your area</p>
                            </div>
                            <div style={{
                                padding: '1rem',
                                borderRadius: '10px',
                                background: 'rgba(16, 185, 129, 0.05)',
                                border: '1px solid rgba(16, 185, 129, 0.1)'
                            }}>
                                <p style={{ fontSize: '0.8rem', fontWeight: '700', marginBottom: '0.5rem', color: 'var(--text-main)' }}>Optimize Pricing</p>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)', lineHeight: '1.4' }}>Increase Elite Cleaning by 10%</p>
                            </div>
                        </div>
                    </div>

                    {/* Avg Revenue */}
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'linear-gradient(135deg, var(--secondary) 0%, var(--accent) 100%)',
                        color: 'white',
                        boxShadow: 'var(--shadow-premium)'
                    }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '0.75rem' }}>Avg Revenue</h3>
                        <p style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '0.5rem' }}>$58</p>
                        <p style={{ fontSize: '0.75rem', opacity: 0.9 }}>Per booking</p>
                    </div>

                    {/* Customer Feedback */}
                    <div style={{
                        padding: '1.5rem',
                        borderRadius: 'var(--radius-xl)',
                        background: 'var(--glass-card-bg)',
                        backdropFilter: 'var(--glass-blur)',
                        WebkitBackdropFilter: 'var(--glass-blur)',
                        border: '1px solid var(--glass-card-border)',
                        boxShadow: 'var(--glass-card-shadow)'
                    }}>
                        <h3 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '1.25rem', color: 'var(--text-main)' }}>Feedback Highlights</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
                            <div style={{
                                padding: '0.75rem',
                                borderRadius: '10px',
                                background: 'var(--background)',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-main)' }}>Excellent work!</span>
                                </div>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Elite Cleaning</p>
                            </div>
                            <div style={{
                                padding: '0.75rem',
                                borderRadius: '10px',
                                background: 'var(--background)',
                                border: '1px solid var(--glass-border)'
                            }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem' }}>
                                    <Star size={14} fill="#F59E0B" color="#F59E0B" />
                                    <span style={{ fontSize: '0.75rem', fontWeight: '700', color: 'var(--text-main)' }}>Very thorough</span>
                                </div>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>Deep Carpet Clean</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ServicesTab;
