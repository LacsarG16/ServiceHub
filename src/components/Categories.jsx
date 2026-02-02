import React from 'react';
import { Home as HomeIcon, Briefcase, Zap, Heart, Camera, Settings, Paintbrush, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Categories = () => {
    const categories = [
        { name: "Home Services", icon: <HomeIcon size={24} />, count: "1,240 providers", color: "#3B82F6" },
        { name: "Business", icon: <Briefcase size={24} />, count: "850 providers", color: "#14B8A6" },
        { name: "Wellness", icon: <Heart size={24} />, count: "620 providers", color: "#F43F5E" },
        { name: "Creative", icon: <Camera size={24} />, count: "430 providers", color: "#8B5CF6" }
    ];

    return (
        <section style={{ padding: '40px 0' }}>
            <div className="container">
                <div className="glass-card" style={{ padding: '3rem', borderRadius: 'var(--radius-xl)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                        <div>
                            <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Popular <span style={{ color: 'var(--primary)' }}>Categories</span></h2>
                            <p style={{ color: 'var(--text-muted)' }}>Explore some of the most booked services on our platform.</p>
                        </div>
                        <Link to="/directory" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            View All Categories <Zap size={16} />
                        </Link>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1rem' }}>
                        {categories.map((cat, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ scale: 1.02, x: 5 }}
                                className="glass"
                                style={{
                                    padding: '1rem 1.25rem',
                                    borderRadius: 'var(--radius-full)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                    background: 'rgba(255, 255, 255, 0.2)' // Slightly more transparent pills inside the card
                                }}
                            >
                                <div style={{
                                    color: cat.color,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    background: 'var(--white)', // Solid white circle for icon
                                    padding: '0.5rem',
                                    borderRadius: '50%',
                                    boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
                                }}>
                                    {React.cloneElement(cat.icon, { size: 20 })}
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                    <h4 style={{ fontSize: '0.95rem', fontWeight: '600' }}>{cat.name}</h4>
                                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{cat.count}</span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Categories;
