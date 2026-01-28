import React from 'react';
import { Check, Star, Zap, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ForProviders = () => {
    const plans = [
        {
            name: "Basic",
            price: "Free",
            features: ["Standard Listing", "Basic Lead Protection", "Profile Analytics", "24h Response Goal"],
            color: "var(--text-muted)",
            cta: "Get Started"
        },
        {
            name: "Professional",
            price: "$29/mo",
            features: ["Verified Badge", "Priority in Search", "Enhanced Profile", "Advanced Analytics", "Direct Messaging", "Email Marketing"],
            color: "var(--primary)",
            cta: "Try 14 Days Free",
            popular: true
        },
        {
            name: "Enterprise",
            price: "$99/mo",
            features: ["Top 3 Search Slot", "Dedicated Manager", "Unlimited Lead Exports", "Full API Access", "Custom Brand Color", "Featured Ads"],
            color: "#1e293b",
            cta: "Contact Sales"
        }
    ];

    return (
        <div style={{ padding: '120px 0 80px' }}>
            <div className="container">
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>Grow Your Business with <span style={{ color: 'var(--primary)' }}>ServiceHub</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem', maxWidth: '700px', margin: '0 auto' }}>
                        Reach thousands of local customers looking for your expertise. Manage bookings, payments and advertising all in one place.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                    {[
                        { icon: <Users size={32} />, title: "More Customers", desc: "Get found by people specifically looking for services in your area." },
                        { icon: <TrendingUp size={32} />, title: "Better Analytics", desc: "Track how many people view your profile and book your services." },
                        { icon: <Shield size={32} />, title: "Trusted Platform", desc: "Our verification badge builds instant trust with potential clients." }
                    ].map((benefit, i) => (
                        <div key={i} style={{ textAlign: 'center', padding: '2rem' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{benefit.icon}</div>
                            <h3 style={{ marginBottom: '1rem' }}>{benefit.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing Tiers */}
                <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Choose Your <span style={{ color: 'var(--primary)' }}>Plan</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>Select the right tools to take your business to the next level.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass"
                            style={{
                                padding: '3rem 2rem',
                                borderRadius: 'var(--radius-lg)',
                                border: plan.popular ? `2px solid var(--primary)` : '1px solid #e2e8f0',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column'
                            }}
                        >
                            {plan.popular && (
                                <span style={{ position: 'absolute', top: '0', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem 1rem', borderRadius: 'var(--radius-full)', fontSize: '0.8rem', fontWeight: '700' }}>
                                    MOST POPULAR
                                </span>
                            )}
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <div style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '2rem' }}>
                                {plan.price}<span style={{ fontSize: '1rem', fontWeight: '400', color: 'var(--text-muted)' }}>{plan.price !== 'Free' ? '/month' : ''}</span>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '3rem', flex: 1 }}>
                                {plan.features.map((feat, j) => (
                                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', fontSize: '0.95rem' }}>
                                        <Check size={18} color="var(--secondary)" /> {feat}
                                    </li>
                                ))}
                            </ul>
                            <button
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-md)',
                                    backgroundColor: plan.popular ? 'var(--primary)' : 'white',
                                    color: plan.popular ? 'white' : 'var(--primary)',
                                    border: `1px solid var(--primary)`,
                                    fontWeight: '700',
                                    fontSize: '1rem'
                                }}
                            >
                                {plan.cta}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Preview */}
                <div className="glass" style={{ marginTop: '6rem', padding: '3rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', backgroundColor: '#1e293b', color: 'white' }}>
                    <h2 style={{ marginBottom: '1.5rem' }}>Still have questions?</h2>
                    <p style={{ opacity: 0.8, marginBottom: '2rem', maxWidth: '600px', margin: '0 auto 2rem' }}>
                        Our success team is ready to help you set up your profile and optimize your listings for maximum performance.
                    </p>
                    <button className="btn-primary" style={{ background: 'white', color: '#1e293b' }}>
                        Book a Demo Session <ArrowRight size={18} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForProviders;
