import React, { useState } from 'react';
import { Search, MapPin, ArrowRight } from 'lucide-react';

const GlassSearch = () => {
    const [isFocused, setIsFocused] = useState(false);

    return (
        <div className="glass" style={{
            padding: '0.75rem',
            borderRadius: '999px', // Pill shape
            display: 'flex',
            alignItems: 'center',
            maxWidth: '700px',
            width: '90vw',
            margin: '0 auto',
            transition: 'all 0.3s ease',
            transform: isFocused ? 'scale(1.02)' : 'scale(1)',
            boxShadow: isFocused ? '0 0 30px rgba(6, 182, 212, 0.2)' : 'var(--shadow-lg)',
            border: isFocused ? '1px solid var(--primary)' : '1px solid var(--glass-border)'
        }}>
            <div style={{ flex: 1.5, position: 'relative', borderRight: '1px solid var(--glass-border)' }}>
                <Search size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                    type="text"
                    placeholder="What service do you need?"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        padding: '1rem 1rem 1rem 3.5rem',
                        color: 'var(--text-main)',
                        fontSize: '1.1rem',
                        outline: 'none'
                    }}
                />
            </div>

            <div className="location-field" style={{ flex: 1, position: 'relative' }}>
                <MapPin size={20} style={{ position: 'absolute', left: '1.25rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                <input
                    type="text"
                    placeholder="Location"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    style={{
                        width: '100%',
                        background: 'transparent',
                        border: 'none',
                        padding: '1rem 1rem 1rem 3.5rem',
                        color: 'var(--text-main)',
                        fontSize: '1.1rem',
                        outline: 'none'
                    }}
                />
            </div>

            <button style={{
                background: 'linear-gradient(135deg, var(--primary), var(--primary-hover))',
                color: 'white',
                width: '50px',
                height: '50px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: '0.5rem',
                boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)'
            }}>
                <ArrowRight size={24} />
            </button>

            <style>{`
                @media (max-width: 768px) {
                  .location-field { display: none !important; }
                }
            `}</style>
        </div>
    );
};

export default GlassSearch;
