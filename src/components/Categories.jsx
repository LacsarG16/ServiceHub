import React from 'react';
import { Home as HomeIcon, Briefcase, Zap, Heart, Camera, Settings, Paintbrush, Utensils } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Categories = () => {
    const categories = [
        { name: "Home Services", icon: <HomeIcon size={24} />, count: "1,240 providers", color: "#3B82F6" },
        { name: "Business", icon: <Briefcase size={24} />, count: "850 providers", color: "#14B8A6" },
        { name: "Wellness", icon: <Heart size={24} />, count: "620 providers", color: "#F43F5E" },
        { name: "Creative", icon: <Camera size={24} />, count: "430 providers", color: "#8B5CF6" },
        { name: "Tech Support", icon: <Settings size={24} />, count: "310 providers", color: "#64748B" },
        { name: "Events", icon: <Utensils size={24} />, count: "290 providers", color: "#F59E0B" }
    ];

    return (
        <section style={{ padding: '60px 0', backgroundColor: '#f1f5f9' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Popular <span style={{ color: 'var(--primary)' }}>Categories</span></h2>
                        <p style={{ color: 'var(--text-muted)' }}>Explore some of the most booked services on our platform.</p>
                    </div>
                    <Link to="/directory" style={{ color: 'var(--primary)', fontWeight: '600', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                        View All Categories <Zap size={16} />
                    </Link>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '1.5rem' }}>
                    {categories.map((cat, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ scale: 1.05 }}
                            className="glass hover-lift"
                            style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', cursor: 'pointer' }}
                        >
                            <div style={{ color: cat.color, marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
                                {cat.icon}
                            </div>
                            <h4 style={{ marginBottom: '0.25rem', fontSize: '1rem' }}>{cat.name}</h4>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{cat.count}</span>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
