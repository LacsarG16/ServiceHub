import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';
import { Users, CheckCircle, Star, Grid } from 'lucide-react';
import { motion } from 'framer-motion';

const Home = () => {
    const stats = [
        { icon: Users, end: 10000, suffix: '+', label: 'Active Providers', color: '#3B82F6' },
        { icon: CheckCircle, end: 50000, suffix: '+', label: 'Bookings Completed', color: '#14B8A6' },
        { icon: Star, end: 4.9, decimals: 1, label: 'Average Rating', color: '#F59E0B' },
        { icon: Grid, end: 150, suffix: '+', label: 'Service Categories', color: '#8B5CF6' }
    ];

    return (
        <div className="home-page">
            <Hero />

            <AnimatedSection animation="fadeUp">
                <Features />
            </AnimatedSection>

            {/* Stats Section */}
            <AnimatedSection
                animation="fade"
                style={{
                    padding: '4rem 0',
                    margin: '50px 0',
                    width: '100%',
                    background: 'var(--glass-bg)',
                    backdropFilter: 'blur(30px)',
                    borderTop: '1px solid var(--glass-border)',
                    borderBottom: '1px solid var(--glass-border)',
                    position: 'relative'
                }}
            >
                {/* Center Glow Effect */}
                <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '50%',
                    height: '100%',
                    background: 'radial-gradient(circle, rgba(6, 182, 212, 0.08) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative' }}>
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        textAlign: 'center'
                    }}>
                        {stats.map((stat, index) => (
                            <div key={index}>
                                <h3 style={{
                                    fontSize: '3.8rem',
                                    fontWeight: '800',
                                    color: stat.color,
                                    marginBottom: '0.75rem',
                                    lineHeight: 1,
                                    textShadow: `0 0 30px ${stat.color}40`
                                }}>
                                    <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} />
                                </h3>
                                <p style={{
                                    color: 'var(--text-muted)',
                                    fontSize: '0.9rem',
                                    fontWeight: '700',
                                    margin: 0,
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    opacity: 0.8
                                }}>
                                    {stat.label}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>

            <TestimonialsCarousel />

        </div>
    );
};

export default Home;
