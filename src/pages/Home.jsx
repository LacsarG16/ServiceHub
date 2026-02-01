import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Categories from '../components/Categories';
import FeaturedProviders from '../components/FeaturedProviders';

const Home = () => {
    return (
        <div className="home-page">
            <Hero />
            <Features />
            <Categories />
            <FeaturedProviders />

            {/* Call to Action Section */}
            <section style={{ padding: '80px 0', position: 'relative' }}>
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
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button style={{
                            backgroundColor: 'white',
                            color: 'var(--primary)',
                            padding: '1rem 2.5rem',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: '700',
                            boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                        }} className="hover:scale-105 transition-transform">
                            List Your Service
                        </button>
                        <button style={{
                            backgroundColor: 'rgba(255,255,255,0.1)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.3)',
                            padding: '1rem 2.5rem',
                            borderRadius: 'var(--radius-full)',
                            fontWeight: '700',
                            backdropFilter: 'blur(10px)'
                        }} className="hover:bg-white/20 transition-all">
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
