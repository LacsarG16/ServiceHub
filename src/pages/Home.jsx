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
            <section style={{ padding: '80px 0', background: 'var(--primary)' }}>
                <div className="container" style={{ textAlign: 'center', color: 'white' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Ready to grow your service business?</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Join thousands of providers who use ServiceHub to manage bookings, advertise their skills, and reach new customers.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: '700' }}>
                            List Your Service
                        </button>
                        <button style={{ backgroundColor: 'rgba(255,255,255,0.1)', color: 'white', border: '1px solid white', padding: '1rem 2rem', borderRadius: 'var(--radius-md)', fontWeight: '700' }}>
                            Learn More
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;
