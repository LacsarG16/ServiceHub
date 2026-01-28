import React from 'react';
import { Search, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const steps = [
        {
            icon: <Search size={32} />,
            title: "Discover",
            desc: "Browse through thousands of verified local service providers.",
            color: "#3B82F6"
        },
        {
            icon: <Calendar size={32} />,
            title: "Book",
            desc: "Choose a time slot that fits your schedule and book instantly.",
            color: "#14B8A6"
        },
        {
            icon: <CheckCircle size={32} />,
            title: "Get it Done",
            desc: "Connect with your provider and enjoy high-quality service.",
            color: "#F59E0B"
        }
    ];

    return (
        <section style={{ padding: '80px 0' }}>
            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>How ServiceHub <span style={{ color: 'var(--primary)' }}>Works</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        The simplest way to find, compare and book local professionals in your area.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem' }}>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="hover-lift"
                            style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', background: 'white', textAlign: 'center', border: '1px solid #f1f5f9' }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '20px',
                                backgroundColor: `${step.color}10`,
                                color: step.color,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 1.5rem'
                            }}>
                                {step.icon}
                            </div>
                            <h3 style={{ marginBottom: '1rem' }}>{step.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{step.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
