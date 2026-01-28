import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, MapPin, Clock, Shield, Check, Calendar, MessageSquare, ArrowLeft, Share2, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const providersData = [
    {
        id: 1,
        name: "John's Elite Cleaning",
        sector: "Home Services",
        rating: 4.9,
        reviews: 128,
        location: "San Francisco, CA",
        availability: "Available Tomorrow",
        price: "$80",
        experience: "8 years",
        description: "John's Elite Cleaning provides premium residential and commercial cleaning services. We use eco-friendly products and guarantee 100% satisfaction. Our team is fully insured and background-checked for your peace of mind.",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6958?auto=format&fit=crop&q=80&w=800",
        expertise: ["Deep Cleaning", "Office Maintenance", "Window Washing", "Move-in/Move-out"],
        gallery: [
            "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&q=80&w=400"
        ]
    },
    // Adding more data if needed or default to first for demo
];

const Profile = () => {
    const { id } = useParams();
    const [selectedDate, setSelectedDate] = useState(null);
    const [selectedTime, setSelectedTime] = useState(null);
    const [showConfirmation, setShowConfirmation] = useState(false);

    // For demo purposes, we'll use provider 1 if id is 1, otherwise mock data
    const provider = providersData.find(p => p.id === parseInt(id)) || providersData[0];

    const timeSlots = ["09:00 AM", "11:00 AM", "02:00 PM", "04:30 PM"];
    const dates = [
        { day: "Mon", date: "24", full: "Feb 24" },
        { day: "Tue", date: "25", full: "Feb 25" },
        { day: "Wed", date: "26", full: "Feb 26" },
        { day: "Thu", date: "27", full: "Feb 27" },
        { day: "Fri", date: "28", full: "Feb 28" }
    ];

    const handleBooking = () => {
        if (selectedDate && selectedTime) {
            setShowConfirmation(true);
        }
    };

    return (
        <div style={{ padding: '120px 0 80px', backgroundColor: '#f8fafc' }}>
            <div className="container">
                {/* Navigation / Actions */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <Link to="/directory" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600', color: 'var(--text-muted)' }}>
                        <ArrowLeft size={18} /> Back to Directory
                    </Link>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <button style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Share2 size={18} /></button>
                        <button style={{ background: 'white', border: '1px solid #e2e8f0', borderRadius: '50%', width: '40px', height: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Heart size={18} /></button>
                    </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '2.5rem' }} className="profile-grid">
                    {/* Main Info Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        {/* Profile Header */}
                        <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
                            <img
                                src={provider.image}
                                alt={provider.name}
                                style={{ width: '150px', height: '150px', borderRadius: 'var(--radius-lg)', objectFit: 'cover' }}
                            />
                            <div style={{ flex: 1, minWidth: '250px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                                    <div>
                                        <span className="accent-badge" style={{ marginBottom: '0.5rem', display: 'inline-block' }}>{provider.sector}</span>
                                        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{provider.name}</h1>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', color: 'var(--text-muted)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--accent)' }}>
                                                <Star size={16} fill="currentColor" />
                                                <span style={{ fontWeight: '700', color: 'var(--text-main)' }}>{provider.rating}</span>
                                                <span>({provider.reviews} reviews)</span>
                                            </div>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                                                <MapPin size={16} /> {provider.location}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ display: 'flex', gap: '2rem', borderTop: '1px solid #f1f5f9', paddingTop: '1.5rem' }}>
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Experience</p>
                                        <p style={{ fontWeight: '700' }}>{provider.experience}</p>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Response Time</p>
                                        <p style={{ fontWeight: '700' }}>&lt; 2 hours</p>
                                    </div>
                                    <div style={{ textAlign: 'center' }}>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '0.25rem' }}>Completed Jobs</p>
                                        <p style={{ fontWeight: '700' }}>450+</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About & Expertise */}
                        <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Award size={20} color="var(--primary)" /> About the Provider</h3>
                            <p style={{ color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>{provider.description}</p>

                            <h4 style={{ marginBottom: '1rem' }}>Area of Expertise</h4>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {provider.expertise.map((item, i) => (
                                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', background: '#f1f5f9', padding: '0.5rem 1rem', borderRadius: 'var(--radius-md)', fontSize: '0.9rem' }}>
                                        <Check size={16} color="var(--secondary)" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Gallery */}
                        <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Work Gallery</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1rem' }}>
                                {provider.gallery.map((img, i) => (
                                    <img key={i} src={img} alt="Work" style={{ width: '100%', height: '150px', borderRadius: 'var(--radius-md)', objectFit: 'cover' }} />
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Booking Sidebar */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)', position: 'sticky', top: '100px', boxShadow: 'var(--shadow-lg)' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                                <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>{provider.price}<span style={{ fontSize: '1rem', fontWeight: '400', color: 'var(--text-muted)' }}>/hr</span></span>
                                <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--secondary)', fontWeight: '600' }}><Shield size={18} /> Verified</span>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Calendar size={18} /> Select Date</h4>
                                <div style={{ display: 'flex', gap: '0.5rem', overflowX: 'auto', paddingBottom: '0.5rem' }}>
                                    {dates.map((d, i) => (
                                        <div
                                            key={i}
                                            onClick={() => setSelectedDate(d.full)}
                                            style={{
                                                minWidth: '60px',
                                                padding: '0.75rem',
                                                textAlign: 'center',
                                                borderRadius: 'var(--radius-md)',
                                                border: '1px solid',
                                                borderColor: selectedDate === d.full ? 'var(--primary)' : '#e2e8f0',
                                                backgroundColor: selectedDate === d.full ? 'rgba(59, 130, 246, 0.05)' : 'white',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{d.day}</p>
                                            <p style={{ fontWeight: '700' }}>{d.date}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <h4 style={{ marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={18} /> Select Time</h4>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                                    {timeSlots.map((time, i) => (
                                        <button
                                            key={i}
                                            onClick={() => setSelectedTime(time)}
                                            style={{
                                                padding: '0.75rem',
                                                borderRadius: 'var(--radius-md)',
                                                border: '1px solid',
                                                borderColor: selectedTime === time ? 'var(--primary)' : '#e2e8f0',
                                                backgroundColor: selectedTime === time ? 'rgba(59, 130, 246, 0.05)' : 'white',
                                                fontWeight: '600',
                                                fontSize: '0.9rem'
                                            }}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <button
                                onClick={handleBooking}
                                disabled={!selectedDate || !selectedTime}
                                className="btn-primary"
                                style={{ width: '100%', padding: '1rem', justifyContent: 'center', marginBottom: '1rem', opacity: (!selectedDate || !selectedTime) ? 0.6 : 1 }}
                            >
                                Book This Appointment
                            </button>

                            <button style={{ width: '100%', padding: '1rem', justifyContent: 'center', display: 'flex', gap: '0.5rem', alignItems: 'center', background: 'none', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', fontWeight: '600' }}>
                                <MessageSquare size={18} /> Custom Inquiry
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmation && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ backgroundColor: 'white', padding: '2.5rem', borderRadius: 'var(--radius-lg)', maxWidth: '450px', width: '100%', textAlign: 'center' }}
                    >
                        <div style={{ width: '70px', height: '70px', backgroundColor: 'rgba(20, 184, 166, 0.1)', color: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem' }}>
                            <Check size={40} />
                        </div>
                        <h2 style={{ marginBottom: '1rem' }}>Booking Confirmed!</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
                            Your appointment with <strong>{provider.name}</strong> has been scheduled for <strong>{selectedDate}</strong> at <strong>{selectedTime}</strong>.
                        </p>
                        <button
                            onClick={() => setShowConfirmation(false)}
                            className="btn-primary"
                            style={{ width: '100%', justifyContent: 'center' }}
                        >
                            Back to Profile
                        </button>
                    </motion.div>
                </div>
            )}

            <style>{`
        @media (min-width: 992px) {
          .profile-grid { grid-template-columns: 2fr 1fr; }
        }
      `}</style>
        </div>
    );
};

export default Profile;
