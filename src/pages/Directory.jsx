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
                <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', marginBottom: '3rem', display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
                    <div style={{ flex: 2, minWidth: '250px', position: 'relative' }}>
                        <Search size={20} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search by provider or service..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{ width: '100%', padding: '0.85rem 1rem 0.85rem 3rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', fontSize: '1rem' }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '1rem', flex: 1, minWidth: '300px' }}>
                        <div style={{ flex: 1, position: 'relative' }}>
                            <select
                                value={selectedSector}
                                onChange={(e) => setSelectedSector(e.target.value)}
                                style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', fontSize: '1rem', appearance: 'none', backgroundColor: 'white' }}
                            >
                                {sectors.map(s => <option key={s} value={s}>{s}</option>)}
                            </select>
                            <ChevronDown size={18} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                        </div>

                        <div style={{ flex: 1, position: 'relative' }}>
                            <select
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                style={{ width: '100%', padding: '0.85rem 1rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', fontSize: '1rem', appearance: 'none', backgroundColor: 'white' }}
                            >
                                <option value="Rating">Top Rated</option>
                                <option value="PriceLow">Price: Low to High</option>
                                <option value="PriceHigh">Price: High to Low</option>
                            </select>
                            <ChevronDown size={18} style={{ position: 'absolute', right: '1rem', top: '50%', transform: 'translateY(-50%)', pointerEvents: 'none', color: 'var(--text-muted)' }} />
                        </div>
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
        </div>
    );
};

export default Directory;
