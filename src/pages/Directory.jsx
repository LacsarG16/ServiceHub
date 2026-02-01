import React, { useState } from 'react';
import { Search, Filter, SlidersHorizontal, ChevronDown, CheckCircle } from 'lucide-react';
import ProviderCard from '../components/ProviderCard';
import { motion, AnimatePresence } from 'framer-motion';

const providersData = [
    {
        id: 1,
        name: "John's Elite Cleaning",
        sector: "Home Services",
        rating: 4.9,
        location: "San Francisco, CA",
        availability: "Available Tomorrow",
        price: "$80",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 2,
        name: "TechFix Solutions",
        sector: "Tech Support",
        rating: 4.8,
        location: "Oakland, CA",
        availability: "Same Day Service",
        price: "$50",
        image: "https://images.unsplash.com/photo-1597733336794-12d05021d510?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 3,
        name: "Sarah's Personal Training",
        sector: "Wellness",
        rating: 5.0,
        location: "San Jose, CA",
        availability: "Booking for Next Week",
        price: "$120",
        image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 4,
        name: "Expert Tutoring Hub",
        sector: "Education",
        rating: 4.7,
        location: "Berkeley, CA",
        availability: "Available Monday",
        price: "$45",
        image: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 5,
        name: "Green Gardeners",
        sector: "Home Services",
        rating: 4.6,
        location: "Palo Alto, CA",
        availability: "Available Today",
        price: "$60",
        image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?auto=format&fit=crop&q=80&w=800"
    },
    {
        id: 6,
        name: "Pixel Perfect Design",
        sector: "Creative",
        rating: 4.9,
        location: "Remote",
        availability: "Accepting Projects",
        price: "$150",
        image: "https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800"
    }
];

const Directory = () => {
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedSector, setSelectedSector] = useState("All");
    const [sortBy, setSortBy] = useState("Rating");
    const [isFocused, setIsFocused] = useState(false);

    const sectors = ["All", "Home Services", "Tech Support", "Wellness", "Education", "Creative"];

    const filteredProviders = providersData.filter(p => {
        const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            p.sector.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesSector = selectedSector === "All" || p.sector === selectedSector;
        return matchesSearch && matchesSector;
    });

    return (
        <div style={{ padding: '120px 0 80px' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ marginBottom: '3rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Find Local <span style={{ color: 'var(--primary)' }}>Experts</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Browse our directory of high-quality service providers.</p>
                </div>

                {/* Search & Filter Bar */}
                <div style={{ position: 'relative', maxWidth: '1000px', margin: '0 auto 4rem' }}>
                    <div id="directory-search-bar" className="glass" style={{
                        padding: '0.5rem',
                        borderRadius: '999px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        transition: 'all 0.3s ease',
                        border: isFocused ? '1px solid var(--primary)' : '1px solid var(--glass-border)',
                        boxShadow: isFocused ? '0 0 30px rgba(6, 182, 212, 0.2)' : 'var(--shadow-lg)',
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
                        <button style={{
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
                        }}>
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
                        border-radius: 2rem !important;
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
