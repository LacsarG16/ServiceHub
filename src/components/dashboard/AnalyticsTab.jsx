import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import Marker from '../ui/Marker';

const AnalyticsTab = () => {
    const stats = [
        { label: "Total Revenue", value: "$12,450", change: "+12.5%", trending: 'up' },
        { label: "Active Customers", value: "84", change: "+5.2%", trending: 'up' },
        { label: "Avg. Booking Value", value: "$148", change: "-2.1%", trending: 'down' },
        { label: "Retention Rate", value: "78%", change: "+3.4%", trending: 'up' }
    ];

    return (
        <div>
            <h2 style={{ fontSize: '2rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-1px', marginBottom: '2.5rem' }}>Business <span className="text-gradient-primary">Analytics</span></h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass-card hover-lift" style={{
                        padding: '2.25rem',
                        position: 'relative',
                        overflow: 'hidden',
                        background: 'rgba(255, 255, 255, 0.08)', // Brighter for better contrast
                        border: '1px solid rgba(255, 255, 255, 0.2)', // More distinct border
                        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)', // Localized shadow
                        backdropFilter: 'blur(20px)'
                    }}>
                        <Marker id={`AN-KPI-${i + 1}`} />
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '0.75rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.5px' }}>{stat.label}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <h3 style={{ fontSize: '2.25rem', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-1px' }}>{stat.value}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: stat.trending === 'up' ? 'var(--secondary)' : '#ef4444', fontWeight: '900', fontSize: '0.85rem', marginBottom: '0.35rem', padding: '0.35rem 0.75rem', background: stat.trending === 'up' ? 'rgba(16, 185, 129, 0.08)' : 'rgba(239, 68, 68, 0.08)', borderRadius: '10px', border: `1px solid ${stat.trending === 'up' ? 'rgba(16, 185, 129, 0.15)' : 'rgba(239, 68, 68, 0.15)'}` }}>
                                {stat.trending === 'up' ? <ArrowUpRight size={16} strokeWidth={3} /> : <ArrowDownRight size={16} strokeWidth={3} />}
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: '2.5rem', marginBottom: '2.5rem' }}>
                <div className="glass-card" style={{ padding: '2.5rem', minHeight: '400px', position: 'relative' }}>
                    <Marker id="AN-REV" />
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem' }}>
                        <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px' }}>Revenue Growth</h3>
                        <select className="glass" style={{ padding: '0.5rem 1rem', borderRadius: '12px', border: '1px solid var(--glass-border)', background: 'var(--glass-bg)', color: 'var(--text-main)', fontSize: '0.85rem', fontWeight: '600', outline: 'none' }}>
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    {/* Visual representation of a bar chart */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '220px', paddingBottom: '20px', paddingLeft: '20px', paddingRight: '20px' }}>
                        {[40, 65, 45, 80, 55, 90].map((height, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', width: '10%' }}>
                                <div style={{
                                    width: '100%',
                                    height: `${height}%`,
                                    background: i === 5 ? 'linear-gradient(to top, var(--primary), var(--accent))' : 'rgba(255, 255, 255, 0.05)',
                                    border: i === 5 ? 'none' : '1px solid var(--glass-border)',
                                    borderRadius: '8px 8px 4px 4px',
                                    position: 'relative',
                                    transition: 'all 0.5s ease',
                                    boxShadow: i === 5 ? '0 8px 20px rgba(6, 182, 212, 0.3)' : 'none'
                                }}>
                                    {i === 5 && <div style={{ position: 'absolute', top: '-35px', left: '50%', transform: 'translateX(-50%)', background: 'var(--accent)', color: 'white', padding: '4px 12px', borderRadius: '10px', fontSize: '0.75rem', fontWeight: '900', boxShadow: 'var(--shadow-premium)' }}>$4,200</div>}
                                </div>
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '700' }}>{['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass-card" style={{ padding: '2.5rem', minHeight: '400px', position: 'relative' }}>
                    <Marker id="AN-CHN" />
                    <h3 style={{ fontSize: '1.35rem', fontWeight: '850', color: 'var(--text-main)', letterSpacing: '-0.5px', marginBottom: '2.5rem' }}>Aquisition Channels</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {[
                            { source: 'Direct Search', value: 45, color: 'var(--primary)' },
                            { source: 'Referrals', value: 30, color: 'var(--secondary)' },
                            { source: 'Social Media', value: 15, color: 'var(--accent)' },
                            { source: 'Other', value: 10, color: 'var(--text-muted)' }
                        ].map((item, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.75rem', fontSize: '1rem', color: 'var(--text-main)' }}>
                                    <span style={{ fontWeight: '600' }}>{item.source}</span>
                                    <span style={{ fontWeight: '850' }}>{item.value}%</span>
                                </div>
                                <div style={{ width: '100%', height: '12px', background: 'rgba(255, 255, 255, 0.05)', border: '1px solid var(--glass-border)', borderRadius: '10px', overflow: 'hidden' }}>
                                    <div style={{ width: `${item.value}%`, height: '100%', background: `linear-gradient(90deg, ${item.color} 0%, rgba(255,255,255,0.1) 100%)`, borderRadius: '10px', transition: 'width 1s ease-out' }}></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnalyticsTab;
