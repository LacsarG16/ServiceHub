import React from 'react';
import { Check, Star, Zap } from 'lucide-react';

const UpgradeModal = () => {
    const plans = [
        {
            name: "Starter",
            price: "$0",
            description: "Perfect for getting started",
            features: ["Up to 3 services", "10 bookings per month", "Standard listing", "24h support"],
            current: true
        },
        {
            name: "Professional",
            price: "$29",
            description: "Grow your business quickly",
            features: ["Unlimited services", "Unlimited bookings", "Priority in search results", "Verified provider badge", "Advanced analytics"],
            highlight: true
        },
        {
            name: "Enterprise",
            price: "$99",
            description: "For established agencies",
            features: ["Multiple team members", "API access", "Whitelabel dashboard", "Dedicated account manager"],
            current: false
        }
    ];

    return (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            <div style={{ textAlign: 'center' }}>
                <h4 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '0.5rem' }}>Upgrade your business</h4>
                <p style={{ color: 'var(--text-muted)' }}>Choose the plan that's right for your growth goals.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.25rem' }}>
                {plans.map((plan, i) => (
                    <div
                        key={i}
                        style={{
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-lg)',
                            border: plan.highlight ? '2px solid var(--primary)' : '1px solid #e2e8f0',
                            background: plan.highlight ? 'rgba(59, 130, 246, 0.02)' : 'white',
                            position: 'relative',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {plan.highlight && (
                            <span style={{
                                position: 'absolute',
                                top: '-12px',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                background: 'var(--primary)',
                                color: 'white',
                                padding: '0.25rem 0.75rem',
                                borderRadius: 'var(--radius-full)',
                                fontSize: '0.7rem',
                                fontWeight: '800',
                                textTransform: 'uppercase'
                            }}>
                                Most Popular
                            </span>
                        )}

                        <div style={{ marginBottom: '1.5rem' }}>
                            <h5 style={{ fontSize: '1.1rem', fontWeight: '700', marginBottom: '0.25rem' }}>{plan.name}</h5>
                            <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.25rem' }}>
                                <span style={{ fontSize: '1.75rem', fontWeight: '800' }}>{plan.price}</span>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>/mo</span>
                            </div>
                            <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>{plan.description}</p>
                        </div>

                        <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem', listStyle: 'none', padding: 0, margin: '0 0 2rem 0', flex: 1 }}>
                            {plan.features.map((feature, idx) => (
                                <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem' }}>
                                    <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#10b981', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                        <Check size={10} strokeWidth={4} />
                                    </div>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <button
                            disabled={plan.current}
                            style={{
                                width: '100%',
                                padding: '0.85rem',
                                borderRadius: 'var(--radius-md)',
                                border: plan.highlight ? 'none' : '1px solid #e2e8f0',
                                background: plan.highlight ? 'var(--primary)' : plan.current ? '#f8fafc' : 'white',
                                color: plan.highlight ? 'white' : plan.current ? 'var(--text-muted)' : 'var(--primary)',
                                fontWeight: '700',
                                cursor: plan.current ? 'default' : 'pointer'
                            }}
                        >
                            {plan.current ? 'Current Plan' : 'Upgrade Now'}
                        </button>
                    </div>
                ))}
            </div>

            <div style={{ textAlign: 'center', background: '#f8fafc', padding: '1.25rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem', justifyContent: 'center' }}>
                <Zap size={20} color="var(--accent)" fill="var(--accent)" />
                <p style={{ fontSize: '0.9rem', fontWeight: '600' }}>Annual billing saves you 20%!</p>
                <button style={{ color: 'var(--primary)', fontWeight: '700', fontSize: '0.9rem', background: 'none' }}>Switch to Annual</button>
            </div>
        </div>
    );
};

export default UpgradeModal;
