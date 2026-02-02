import React from 'react';
import { BarChart3, TrendingUp, Users, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const AnalyticsTab = () => {
    const stats = [
        { label: "Total Revenue", value: "$12,450", change: "+12.5%", trending: 'up' },
        { label: "Active Customers", value: "84", change: "+5.2%", trending: 'up' },
        { label: "Avg. Booking Value", value: "$148", change: "-2.1%", trending: 'down' },
        { label: "Retention Rate", value: "78%", change: "+3.4%", trending: 'up' }
    ];

    return (
        <div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>Analytics Overview</h2>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem', marginBottom: '2.5rem' }}>
                {stats.map((stat, i) => (
                    <div key={i} className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', background: 'var(--white)' }}>
                        <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '0.5rem' }}>{stat.label}</p>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                            <h3 style={{ fontSize: '1.75rem' }}>{stat.value}</h3>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: stat.trending === 'up' ? '#10b981' : '#ef4444', fontWeight: '700', fontSize: '0.85rem', marginBottom: '0.25rem' }}>
                                {stat.trending === 'up' ? <ArrowUpRight size={16} /> : <ArrowDownRight size={16} />}
                                {stat.change}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'var(--white)', minHeight: '350px' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                        <h3 style={{ fontSize: '1.15rem' }}>Revenue Growth</h3>
                        <select style={{ padding: '0.4rem', borderRadius: '6px', border: '1px solid var(--glass-border)', fontSize: '0.8rem', background: 'var(--white)', color: 'var(--text-main)' }}>
                            <option>Last 6 Months</option>
                            <option>Last Year</option>
                        </select>
                    </div>
                    {/* Visual representation of a bar chart */}
                    <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', height: '200px', paddingBottom: '20px' }}>
                        {[40, 65, 45, 80, 55, 90].map((height, i) => (
                            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.75rem', width: '12%' }}>
                                <div style={{ width: '100%', height: `${height}%`, background: i === 5 ? 'var(--primary)' : 'rgba(59, 130, 246, 0.2)', borderRadius: '4px 4px 0 0', position: 'relative' }}>
                                    {i === 5 && <div style={{ position: 'absolute', top: '-25px', left: '50%', transform: 'translateX(-50%)', background: 'var(--text-main)', color: 'white', padding: '2px 6px', borderRadius: '4px', fontSize: '0.7rem' }}>$4,200</div>}
                                </div>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{['Sept', 'Oct', 'Nov', 'Dec', 'Jan', 'Feb'][i]}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', background: 'var(--white)', minHeight: '350px' }}>
                    <h3 style={{ fontSize: '1.15rem', marginBottom: '2rem' }}>Customer Acquisition</h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        {[
                            { source: 'Direct Search', value: 45, color: 'var(--primary)' },
                            { source: 'Referrals', value: 30, color: 'var(--secondary)' },
                            { source: 'Social Media', value: 15, color: 'var(--accent)' },
                            { source: 'Other', value: 10, color: '#94a3b8' }
                        ].map((item, i) => (
                            <div key={i}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem', fontSize: '0.9rem' }}>
                                    <span>{item.source}</span>
                                    <span style={{ fontWeight: '700' }}>{item.value}%</span>
                                </div>
                                <div style={{ width: '100%', height: '8px', background: 'var(--background)', borderRadius: '4px' }}>
                                    <div style={{ width: `${item.value}%`, height: '100%', background: item.color, borderRadius: '4px' }}></div>
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
