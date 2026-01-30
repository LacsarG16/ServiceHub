import React from 'react';
import { Check, Star, Zap, TrendingUp, Users, Shield, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Marker from '../components/ui/Marker';

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
        <div style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', padding: '160px 0 80px' }}>
            {/* Aurora Background Blobs */}
            <div className="aurora-blob blob-1"></div>
            <div className="aurora-blob blob-2"></div>
            <div className="aurora-blob blob-3"></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '6rem', position: 'relative' }}>
                    <Marker id="FP-HERO" />
                    <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '800', marginBottom: '1.5rem', letterSpacing: '-2px', lineHeight: '1.1' }}>
                        Grow Your Business with <span className="text-gradient-primary">ServiceHub</span>
                    </h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto', lineHeight: '1.7' }}>
                        Reach thousands of local customers looking for your expertise. Manage bookings, payments and advertising all in one cinematic workspace.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2.5rem', marginBottom: '8rem' }}>
                    {[
                        { icon: <Users size={32} />, title: "More Customers", desc: "Get found by people specifically looking for services in your area with our optimized search." },
                        { icon: <TrendingUp size={32} />, title: "Better Analytics", desc: "Track how many people view your profile and book your services with deep data insights." },
                        { icon: <Shield size={32} />, title: "Trusted Platform", desc: "Our premium verification badge builds instant trust and authority with elite clients." }
                    ].map((benefit, i) => (
                        <div key={i} className="glass-card" style={{ textAlign: 'center', padding: '3rem 2rem', position: 'relative' }}>
                            <Marker id={`FP-BENEFIT-${i + 1}`} />
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{benefit.icon}</div>
                            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem', fontWeight: '700', color: 'var(--text-main)' }}>{benefit.title}</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing Tiers */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', letterSpacing: '-1.5px' }}>Choose Your <span className="text-gradient-primary">Plan</span></h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Select the right tools to take your business to the next level of excellence.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card"
                            style={{
                                padding: '3.5rem 2.5rem',
                                border: plan.popular ? `2px solid var(--primary)` : '1px solid var(--glass-border)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                overflow: 'hidden'
                            }}
                        >
                            <Marker id={`FP-PLAN-${i + 1}`} />
                            {plan.popular && (
                                <span className="accent-badge" style={{ position: 'absolute', top: '24px', right: '-35px', transform: 'rotate(45deg)', width: '150px', display: 'flex', justifyContent: 'center', boxShadow: 'none' }}>
                                    POPULAR
                                </span>
                            )}
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem' }}>{plan.name}</h3>
                            <div style={{ fontSize: '3rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '2.5rem', letterSpacing: '-1px' }}>
                                {plan.price}<span style={{ fontSize: '1.1rem', fontWeight: '500', color: 'var(--text-muted)' }}>{plan.price !== 'Free' ? '/mo' : ''}</span>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem', flex: 1 }}>
                                {plan.features.map((feat, j) => (
                                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', fontSize: '1rem', color: 'var(--text-main)', fontWeight: '500' }}>
                                        <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                            <Check size={14} color="var(--secondary)" strokeWidth={3} />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={plan.popular ? "btn-primary" : "btn-secondary"}
                                style={{
                                    width: '100%',
                                    justifyContent: 'center',
                                    gap: '0.75rem'
                                }}
                            >
                                {plan.cta} {i === 1 && <Zap size={18} fill="currentColor" />}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Preview */}
                <div className="glass-card" style={{
                    marginTop: '8rem',
                    padding: '5rem 3rem',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--primary)',
                    position: 'relative',
                    overflow: 'hidden',
                    borderRadius: 'var(--radius-xl)',
                    backdropFilter: 'blur(20px)'
                }}>
                    <Marker id="FP-FAQ" />
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: 'linear-gradient(to right, var(--primary), var(--accent))' }}></div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '900', marginBottom: '1.5rem', color: 'var(--text-main)', letterSpacing: '-1.5px' }}>Still have questions?</h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem', marginBottom: '3rem', maxWidth: '650px', margin: '0 auto 3rem', lineHeight: '1.7', fontWeight: '500' }}>
                        Our success team is dedicated to helping you optimize your performance. We're here to help you every step of the way.
                    </p>
                    <button className="btn-primary hover-lift" style={{ padding: '1rem 3.5rem', borderRadius: '18px', fontSize: '1.05rem' }}>
                        Schedule a Strategy Session <ArrowRight size={22} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ForProviders;
