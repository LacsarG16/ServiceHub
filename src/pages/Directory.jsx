import React, { useState, useEffect } from 'react';
import { Search, Filter, SlidersHorizontal, ChevronDown, CheckCircle } from 'lucide-react';
import ProviderCard from '../components/ProviderCard';
import { motion, AnimatePresence } from 'framer-motion';

import { api } from '../services/api';
import toast from 'react-hot-toast';

const Directory = () => {
    const [providers, setProviders] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSector, setSelectedSector] = useState("All");
    const [sortBy, setSortBy] = useState("Rating");
    const [isFocused, setIsFocused] = useState(false);
    const [sectors, setSectors] = useState(["All"]);

    useEffect(() => {
        const fetchServices = async () => {
            setLoading(true);
            try {
                const services = await api.getServices();
                if (!Array.isArray(services)) {
                    console.error('Expected array for services, got:', services);
                    setProviders([]);
                    return;
                }

                // Map backend services to frontend "provider" format expected by ProviderCard
                const mappedProviders = services.map(s => ({
                    id: s.id,
                    name: s.provider?.name || 'Unknown Provider',
                    serviceName: s.name || 'Unnamed Service',
                    sector: s.category || 'General',
                    rating: s.provider?.rating || 5.0,
                    location: s.provider?.location || "Remote",
                    availability: "Available Now",
                    price: s.type === 'FIXED' ? `$${s.price}` : "Request Quote",
                    image: s.provider?.avatar || `https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800`
                }));
                setProviders(mappedProviders);

                // Get unique sectors from data
                const uniqueSectors = ["All", ...new Set(services.map(s => s.category).filter(Boolean))];
                setSectors(uniqueSectors);
            } catch (error) {
                console.error('Failed to fetch services:', error);
                toast.error('Failed to load services. Please check if the backend is running.');
            } finally {
                setLoading(false);
            }
        };
        fetchServices();
    }, []);

    const filteredProviders = providers.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.sector.toLowerCase().includes(searchTerm.toLowerCase()) ||
            (p.serviceName && p.serviceName.toLowerCase().includes(searchTerm.toLowerCase()));
        const matchesSector = selectedSector === "All" || p.sector === selectedSector;
        return matchesSearch && matchesSector;
    });

    return (
        <div style={{ padding: '40px 0 80px' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', fontWeight: '800' }}>Find Local <span className="text-gradient-primary">Experts</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', fontWeight: '500' }}>Browse our directory of high-quality service providers.</p>
                </div>

                {/* Search & Filter Bar */}
                <div style={{ position: 'relative', maxWidth: '1200px', margin: '0 auto 4rem' }}>
                    <div id="directory-search-bar" style={{
                        padding: '0.5rem',
                        borderRadius: '999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease',
                        backdropFilter: 'blur(30px)',
                        background: 'var(--glass-bg)',
                        border: isFocused ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                        boxShadow: isFocused ? '0 10px 40px rgba(6, 182, 212, 0.25), 0 0 20px rgba(6, 182, 212, 0.15)' : 'var(--shadow-lg)',
                        transform: isFocused ? 'scale(1.01)' : 'scale(1)'
                    }}>
                        {/* Search Input */}
                        <div style={{ flex: 2, position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <Search size={20} style={{ position: 'absolute', left: '1.5rem', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                            <input
                                type="text"
                                placeholder="What are you looking for?"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                style={{
                                    width: '100%',
                                    background: 'transparent',
                                    border: 'none',
                                    padding: '1rem 1rem 1rem 3.5rem',
                                    color: 'var(--text-main)',
                                    fontSize: '1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        {/* Divider */}
                        <div style={{ width: '1px', height: '30px', background: 'var(--glass-border)', margin: '0 0.5rem' }}></div>

                        {/* Sector Select */}
                        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <Filter size={18} style={{ position: 'absolute', left: '1rem', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                            <select
                                value={selectedSector}
                                onChange={(e) => setSelectedSector(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                style={{
                                    width: '100%',
                                    background: 'transparent',
                                    border: 'none',
                                    padding: '1rem 2.5rem 1rem 2.8rem',
                                    color: 'var(--text-main)',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    appearance: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                {sectors.map(s => <option key={s} value={s} style={{ background: 'var(--background)' }}>{s}</option>)}
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: '1rem', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                        </div>

                        {/* Divider */}
                        <div style={{ width: '1px', height: '30px', background: 'var(--glass-border)', margin: '0 0.5rem' }}></div>

                        {/* Sort Select */}
                        <div style={{ flex: 1, position: 'relative', display: 'flex', alignItems: 'center' }}>
                            <SlidersHorizontal size={18} style={{ position: 'absolute', left: '1rem', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                onFocus={() => setIsFocused(true)}
                                onBlur={() => setIsFocused(false)}
                                style={{
                                    width: '100%',
                                    background: 'transparent',
                                    border: 'none',
                                    padding: '1rem 2.5rem 1rem 2.8rem',
                                    color: 'var(--text-main)',
                                    fontSize: '0.95rem',
                                    outline: 'none',
                                    appearance: 'none',
                                    cursor: 'pointer'
                                }}
                            >
                                <option value="Rating" style={{ background: 'var(--background)' }}>Top Rated</option>
                                <option value="PriceLow" style={{ background: 'var(--background)' }}>Price: Low to High</option>
                                <option value="PriceHigh" style={{ background: 'var(--background)' }}>Price: High to Low</option>
                            </select>
                            <ChevronDown size={14} style={{ position: 'absolute', right: '1rem', color: 'var(--text-muted)', pointerEvents: 'none' }} />
                        </div>

                        {/* Search Action Button */}
                        <button
                            className="hover-lift"
                            style={{
                                background: 'linear-gradient(135deg, var(--primary), var(--primary-hover))',
                                color: 'white',
                                width: '48px',
                                height: '48px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                flexShrink: 0,
                                boxShadow: '0 4px 12px rgba(6, 182, 212, 0.3)',
                                border: 'none',
                                cursor: 'pointer'
                            }}
                        >
                            <Search size={20} />
                        </button>
                    </div>
                </div>

                {/* Results Info */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <p style={{ fontWeight: '600' }}>Showing {filteredProviders.length} results</p>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '600' }}>
                        <CheckCircle size={16} /> All providers verified
                    </div>
                </div>

                {/* Provider Grid */}
                {loading ? (
                    <div style={{ padding: '5rem', display: 'flex', justifyContent: 'center' }}>
                        <div className="spinner" style={{ width: '40px', height: '40px', border: '4px solid var(--glass-border)', borderRadius: '50%', borderTopColor: 'var(--primary)', animation: 'spin 1s linear infinite' }}></div>
                    </div>
                ) : (
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '2rem' }}>
                        <AnimatePresence>
                            {filteredProviders.map((provider) => (
                                <motion.div
                                    key={provider.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <ProviderCard provider={provider} />
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </div>
                )}

                {filteredProviders.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '5rem 0' }}>
                        <h3 style={{ marginBottom: '1rem' }}>No providers found</h3>
                        <p style={{ color: 'var(--text-muted)' }}>Try adjusting your search or filters to find what you're looking for.</p>
                        <button
                            onClick={() => { setSearchTerm(""); setSelectedSector("All"); }}
                            style={{ marginTop: '1.5rem', color: 'var(--primary)', fontWeight: '600', background: 'none', border: 'none', textDecoration: 'underline' }}
                        >
                            Clear all filters
                        </button>
                    </div>
                )}
            </div>
            <style>{`
                @media (max-width: 992px) {
                    #directory-search-bar {
                        flex-direction: column !important;
                        border-radius: var(--radius-xl) !important;
                        padding: 1.5rem !important;
                        gap: 1rem !important;
                    }
                    .glass > div {
                        width: 100% !important;
                        border-right: none !important;
                        border-bottom: 1px solid var(--glass-border);
                        padding-bottom: 0.5rem;
                    }
                    .glass > div:last-child {
                        border-bottom: none;
                    }
                    .glass > div > div {
                        display: none; /* Hide dividers */
                    }
                    .glass > button {
                        width: 100% !important;
                        border-radius: 1rem !important;
                        margin-top: 0.5rem;
                    }
                }
            `}</style>
        </div>
    );
};

export default Directory;
