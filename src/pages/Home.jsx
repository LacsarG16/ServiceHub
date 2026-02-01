import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import FeaturedProviders from '../components/FeaturedProviders';
import TestimonialsCarousel from '../components/TestimonialsCarousel';
import AnimatedSection from '../components/AnimatedSection';
import CountUp from '../components/CountUp';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />

            <AnimatedSection animation="fadeUp">
                <Features />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
                <Categories />
            </AnimatedSection>

            <AnimatedSection animation="fadeUp">
                <FeaturedProviders />
            </AnimatedSection>

            {/* Stats Section */}
            <AnimatedSection animation="scale" style={{ padding: '80px 0', background: 'var(--glass-bg)', backdropFilter: 'blur(20px)' }}>
                <div className="container">
                    <div style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                        gap: '3rem',
                        textAlign: 'center'
                    }}>
                        <div>
                            <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                                <CountUp end={10000} suffix="+" />
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600' }}>Active Providers</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--secondary)', marginBottom: '0.5rem' }}>
                                <CountUp end={50000} suffix="+" />
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600' }}>Bookings Completed</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--accent)', marginBottom: '0.5rem' }}>
                                <CountUp end={4.9} decimals={1} />
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600' }}>Average Rating</p>
                        </div>
                        <div>
                            <h3 style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '0.5rem' }}>
                                <CountUp end={150} suffix="+" />
                            </h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '600' }}>Service Categories</p>
                        </div>
                    </div>
                </div>
            </AnimatedSection>

            {/* Testimonials */}
            <TestimonialsCarousel />

            {/* Call to Action Section */}
            <AnimatedSection animation="fadeUp" style={{ padding: '80px 0', position: 'relative' }}>
                <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(135deg, var(--primary), var(--accent))',
                    opacity: 0.9,
                    zIndex: -1
                }}></div>
                <div className="container" style={{ textAlign: 'center', color: 'white' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: '800', letterSpacing: '-1px' }}>Ready to grow your service business?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Join thousands of providers who use ServiceHub to manage bookings, advertise their skills, and reach new customers.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
                        <button
                            style={{
                                backgroundColor: 'white',
                                color: 'var(--primary)',
                                padding: '1rem 2.5rem',
                                borderRadius: 'var(--radius-full)',
                                fontWeight: '700',
                                boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
                                transition: 'transform 0.2s'
                            }}
                            className="hover-lift"
                        >
                            List Your Service
                        </button>
                        <button
                            style={{
                                backgroundColor: 'rgba(255,255,255,0.1)',
                                color: 'white',
                                border: '1px solid rgba(255,255,255,0.3)',
                                padding: '1rem 2.5rem',
                                borderRadius: 'var(--radius-full)',
                                fontWeight: '700',
                                backdropFilter: 'blur(10px)',
                                transition: 'all 0.2s'
                            }}
                            className="hover-lift"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </AnimatedSection>
        </div>
    );
};

export default Home;
