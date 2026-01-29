import React from 'react';
import { motion } from 'framer-motion';
import ProviderCard from './ProviderCard';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const FeaturedProviders = () => {
    const providers = [
        {
            id: 1,
            name: "John's Elite Cleaning",
            sector: "Home Services",
            rating: 4.9,
            location: "San Francisco, CA",
            availability: "Available Tomorrow",
            price: "From $80",
            image: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 2,
            name: "TechFix Solutions",
            sector: "Tech Support",
            rating: 4.8,
            location: "Oakland, CA",
            availability: "Same Day Service",
            price: "From $50",
            image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800"
        },
        {
            id: 3,
            name: "Sarah's Personal Training",
            sector: "Wellness",
            rating: 5.0,
            location: "San Jose, CA",
            availability: "Booking for Next Week",
            price: "From $120",
            image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
        }
    ];

    return (
        <section style={{ padding: '80px 0' }}>
            <div className="container">
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '3rem' }}>
                    <div>
                        <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Featured <span style={{ color: 'var(--primary)' }}>Providers</span></h2>
                        <p style={{ color: 'var(--text-muted)' }}>Meticulously vetted professionals with outstanding track records.</p>
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem' }}>
                        <button style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                            <ArrowLeft size={18} />
                        </button>
                        <button style={{ width: '45px', height: '45px', borderRadius: '50%', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'white' }}>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {providers.map((p, i) => (
                        <motion.div
                            key={p.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <ProviderCard provider={p} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProviders;
