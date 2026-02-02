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
        <div style={{ padding: '40px 0 80px' }}>
            <div className="container">
                {/* Hero Section */}
                <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
                    <h1 style={{
                        fontSize: '3.5rem',
                        marginBottom: '1.5rem',
                        fontWeight: '800',
                        fontFamily: "'Montserrat', sans-serif",
                        letterSpacing: '-0.02em',
                        lineHeight: 1.1
                    }}>
                        Grow Your Business with <span className="text-gradient-primary">ServiceHub</span>
                    </h1>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.25rem',
                        maxWidth: '700px',
                        margin: '0 auto',
                        fontWeight: '500',
                        lineHeight: 1.6
                    }}>
                        Reach thousands of local customers looking for your expertise. Manage bookings, payments and advertising all in one place.
                    </p>
                </div>

                {/* Benefits Grid */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                    gap: '2rem',
                    marginBottom: '6rem'
                }}>
                    {[
                        {
                            icon: <Users size={32} />,
                            title: "More Customers",
                            desc: "Get found by people specifically looking for services in your area.",
                            color: "#3B82F6"
                        },
                        {
                            icon: <TrendingUp size={32} />,
                            title: "Better Analytics",
                            desc: "Track how many people view your profile and book your services.",
                            color: "#14B8A6"
                        },
                        {
                            icon: <Shield size={32} />,
                            title: "Trusted Platform",
                            desc: "Our verification badge builds instant trust with potential clients.",
                            color: "#F59E0B"
                        }
                    ].map((benefit, i) => (
                        <div
                            key={i}
                            className="glass-card stationary-card"
                            style={{
                                textAlign: 'center',
                                padding: '3rem 2rem',
                                borderRadius: 'var(--radius-xl)',
                                backdropFilter: 'blur(30px)',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}
                        >
                            <div style={{
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                background: `linear-gradient(135deg, ${benefit.color}25, ${benefit.color}10)`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                marginBottom: '1.5rem',
                                color: benefit.color,
                                boxShadow: `0 0 35px ${benefit.color}40, inset 0 0 20px ${benefit.color}20`,
                                border: `1px solid ${benefit.color}40`
                            }}>{benefit.icon}</div>
                            <h3 style={{
                                marginBottom: '1rem',
                                fontSize: '1.5rem',
                                fontWeight: '700',
                                fontFamily: "'Montserrat', sans-serif"
                            }}>{benefit.title}</h3>
                            <p style={{
                                color: 'var(--text-muted)',
                                lineHeight: '1.6',
                                fontSize: '0.95rem'
                            }}>{benefit.desc}</p>
                        </div>
                    ))}
                </div>

                {/* Pricing Tiers Header */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{
                        fontSize: '2.5rem',
                        marginBottom: '1rem',
                        fontWeight: '800',
                        fontFamily: "'Montserrat', sans-serif"
                    }}>
                        Choose Your <span className="text-gradient-primary">Plan</span>
                    </h2>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '500' }}>Select the right tools to take your business to the next level.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '2rem' }}>
                    {plans.map((plan, i) => (
                        <motion.div
                            key={i}
                            whileHover={{
                                y: -10,
                                boxShadow: plan.popular ? '0 20px 50px rgba(6, 182, 212, 0.25)' : '0 10px 30px rgba(0,0,0,0.1)'
                            }}
                            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                            className="glass-card"
                            style={{
                                padding: '3.5rem 2.5rem',
                                borderRadius: 'var(--radius-xl)',
                                backdropFilter: 'blur(30px)',
                                background: 'var(--glass-bg)',
                                border: plan.popular ? `2px solid var(--primary)` : '1px solid var(--glass-border)',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                transition: 'border-color 0.3s ease'
                            }}
                        >
                            {plan.popular && (
                                <span style={{
                                    position: 'absolute',
                                    top: '0',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: 'var(--primary)',
                                    color: 'white',
                                    padding: '0.6rem 1.25rem',
                                    borderRadius: 'var(--radius-full)',
                                    fontSize: '0.8rem',
                                    fontWeight: '800',
                                    letterSpacing: '1px',
                                    boxShadow: '0 4px 15px rgba(6, 182, 212, 0.4)'
                                }}>
                                    MOST POPULAR
                                </span>
                            )}
                            <h3 style={{
                                fontSize: '1.75rem',
                                marginBottom: '0.5rem',
                                fontWeight: '800',
                                fontFamily: "'Montserrat', sans-serif"
                            }}>{plan.name}</h3>
                            <div style={{
                                fontSize: '3rem',
                                fontWeight: '800',
                                marginBottom: '2.5rem',
                                color: plan.popular ? 'var(--primary)' : 'var(--text-main)',
                                display: 'flex',
                                alignItems: 'baseline',
                                gap: '4px'
                            }}>
                                {plan.price}
                                <span style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                                    {plan.price !== 'Free' ? '/mo' : ''}
                                </span>
                            </div>
                            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3.5rem', flex: 1 }}>
                                {plan.features.map((feat, j) => (
                                    <li key={j} style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1rem', color: 'var(--text-main)', fontWeight: '500' }}>
                                        <div style={{
                                            width: '24px',
                                            height: '24px',
                                            borderRadius: '50%',
                                            background: 'rgba(20, 184, 166, 0.1)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            flexShrink: 0
                                        }}>
                                            <Check size={14} color="var(--secondary)" strokeWidth={3} />
                                        </div>
                                        {feat}
                                    </li>
                                ))}
                            </ul>
                            <button
                                className={plan.popular ? "btn-primary" : ""}
                                style={{
                                    width: '100%',
                                    padding: '1.25rem',
                                    borderRadius: 'var(--radius-lg)',
                                    backgroundColor: plan.popular ? 'var(--primary)' : 'transparent',
                                    color: plan.popular ? 'white' : 'var(--primary)',
                                    border: `2px solid var(--primary)`,
                                    fontWeight: '800',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    display: 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    gap: '0.5rem'
                                }}
                            >
                                {plan.cta} {plan.popular && <Zap size={18} fill="currentColor" />}
                            </button>
                        </motion.div>
                    ))}
                </div>

                {/* FAQ Preview */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="glass-card"
                    style={{
                        marginTop: '6rem',
                        padding: '4rem 3rem',
                        borderRadius: 'var(--radius-2xl)',
                        textAlign: 'center',
                        backdropFilter: 'blur(30px)',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        color: 'var(--text-main)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Background Accent Glow */}
                    <div style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        width: '300px',
                        height: '300px',
                        background: 'radial-gradient(circle, rgba(6, 182, 212, 0.1) 0%, transparent 70%)',
                        zIndex: 0,
                        pointerEvents: 'none'
                    }} />

                    <h2 style={{
                        marginBottom: '1.5rem',
                        fontSize: '2.5rem',
                        fontWeight: '800',
                        fontFamily: "'Montserrat', sans-serif"
                    }}>
                        Still have <span className="text-gradient-primary">questions?</span>
                    </h2>
                    <p style={{
                        color: 'var(--text-muted)',
                        marginBottom: '2.5rem',
                        maxWidth: '600px',
                        margin: '0 auto 2.5rem',
                        fontSize: '1.1rem',
                        fontWeight: '500',
                        lineHeight: 1.6
                    }}>
                        Our success team is ready to help you set up your profile and optimize your listings for maximum performance.
                    </p>
                    <button
                        className="btn-primary"
                        style={{
                            padding: '1.25rem 2.5rem',
                            borderRadius: 'var(--radius-full)',
                            fontSize: '1.1rem',
                            fontWeight: '800',
                            gap: '0.75rem',
                            boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)'
                        }}
                    >
                        Book a Demo Session <ArrowRight size={20} />
                    </button>
                </motion.div>
            </div>
        </div>
    );
};

export default ForProviders;
