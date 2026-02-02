import React from 'react';
import { Search, Calendar, CheckCircle, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const Features = () => {
    const steps = [
        {
            icon: <Search size={48} />,
            title: "Discover",
            desc: "Find verified local service providers in your area with our smart search.",
            color: "#3B82F6"
        },
        {
            icon: <Calendar size={48} />,
            title: "Book",
            desc: "Choose a time slot and book your service instantly with ease.",
            color: "#14B8A6"
        },
        {
            icon: <CheckCircle size={48} />,
            title: "Get it Done",
            desc: "Enjoy high-quality service and secure payments every time.",
            color: "#F59E0B"
        },
        {
            icon: <Zap size={48} />,
            title: "Review",
            desc: "Share your experience and help others find great services.",
            color: "#8B5CF6"
        }
    ];

    return (
        <section style={{ padding: '50px 0', position: 'relative', overflow: 'hidden' }}>
            <div className="container">
                {/* Section Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>
                        How it <span className="text-gradient-primary">Works</span>
                    </h2>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>
                        Get started in four simple steps and experience premium service delivery
                    </p>
                </div>

                {/* Horizontal Cards with Connectors */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                    gap: '2rem',
                    position: 'relative',
                    alignItems: 'stretch'
                }}>
                    {steps.map((step, index) => (
                        <div key={index} style={{ position: 'relative' }}>
                            {/* Connector Line (not on last card) */}
                            {index < steps.length - 1 && (
                                <div style={{
                                    position: 'absolute',
                                    top: '50%',
                                    right: '-2rem',
                                    width: '2rem',
                                    height: '2px',
                                    background: `linear-gradient(90deg, ${step.color}40, ${steps[index + 1].color}40)`,
                                    transform: 'translateY(-50%)',
                                    zIndex: 0,
                                    display: 'none'
                                }}
                                    className="connector-line"
                                />
                            )}

                            {/* Card */}
                            <motion.div
                                whileHover={{
                                    y: -10,
                                    boxShadow: `0 20px 40px ${step.color}25, 0 0 20px ${step.color}15`
                                }}
                                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                                className="glass-card"
                                style={{
                                    padding: '2.5rem 2rem',
                                    borderRadius: 'var(--radius-xl)',
                                    textAlign: 'center',
                                    height: '100%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    position: 'relative',
                                    backdropFilter: 'blur(30px)',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    boxShadow: `0 10px 30px ${step.color}10`,
                                    transition: 'border-color 0.3s ease, background 0.3s ease'
                                }}
                            >
                                {/* Icon with Glow */}
                                <div style={{
                                    width: '80px',
                                    height: '80px',
                                    borderRadius: '50%',
                                    background: `linear-gradient(135deg, ${step.color}25, ${step.color}10)`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    marginBottom: '1.5rem',
                                    color: step.color,
                                    boxShadow: `0 0 35px ${step.color}40, inset 0 0 20px ${step.color}20`,
                                    border: `1px solid ${step.color}40`
                                }}>
                                    {step.icon}
                                </div>

                                {/* Step Number */}
                                <div style={{
                                    position: 'absolute',
                                    top: '1rem',
                                    right: '1rem',
                                    width: '32px',
                                    height: '32px',
                                    borderRadius: '50%',
                                    background: `${step.color}15`,
                                    border: `1px solid ${step.color}30`,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '0.875rem',
                                    fontWeight: '700',
                                    color: step.color
                                }}>
                                    {index + 1}
                                </div>

                                {/* Title */}
                                <h3 style={{
                                    fontSize: '1.5rem',
                                    marginBottom: '1rem',
                                    fontWeight: '700',
                                    color: 'var(--text-main)'
                                }}>
                                    {step.title}
                                </h3>

                                {/* Description */}
                                <p style={{
                                    fontSize: '0.95rem',
                                    color: 'var(--text-muted)',
                                    lineHeight: '1.6',
                                    margin: 0
                                }}>
                                    {step.desc}
                                </p>
                            </motion.div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Responsive CSS for connector lines */}
            <style>{`
                @media (min-width: 1024px) {
                    .connector-line {
                        display: block !important;
                    }
                }
            `}</style>
        </section>
    );
};

export default Features;
