import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Shield, Check, MessageSquare, Share2, Heart, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import BookingRequestModal from '../components/modals/BookingRequestModal';

const providersData = [
    {
        id: 2,
        name: "John Doe",
        title: "Master Electrician | 10+ Years Experience",
        location: "San Francisco, CA",
        verified: true,
        rating: 4.8,
        reviews: 124,
        price: 85,
        description: "Over 10 years of experience handling residential and commercial electrical needs. I specialize in panel upgrades, rewiring, and smart home installations. My goal is to provide safe, reliable, and high-quality service to every client. I'm fully licensed in California and carry comprehensive liability insurance for your peace of mind.",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=400",
        expertise: ["Electrical Repair", "Panel Upgrades", "Smart Home", "Lighting", "Safety Inspection"],
        projects: [
            "https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1558403194-611308249627?auto=format&fit=crop&q=80&w=400",
            "https://images.unsplash.com/photo-1585131238918-9368ca91df5a?auto=format&fit=crop&q=80&w=400"
        ],
        reviewData: {
            average: 4.8,
            total: 124,
            breakdown: [
                { rating: 5, percentage: 80 },
                { rating: 4, percentage: 12 },
                { rating: 3, percentage: 5 },
                { rating: 2, percentage: 1 },
                { rating: 1, percentage: 2 }
            ],
            latest: {
                name: "Sarah M.",
                rating: 5,
                date: "2 days ago",
                comment: "John was fantastic! He arrived on time, fixed our flickering lights quickly, and even explained what caused the issue. Highly recommend for any electrical work."
            }
        }
    }
];

const Profile = () => {
    const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
    const [initBookingType, setInitBookingType] = useState('fixed');

    const handleOpenBooking = (type) => {
        setInitBookingType(type);
        setIsBookingModalOpen(true);
    };

    const [selectedDate, setSelectedDate] = useState(10);
    const [selectedTime, setSelectedTime] = useState("01:00 PM");
    const [showConfirmation, setShowConfirmation] = useState(false);

    const provider = providersData[0]; // For demo, always use John Doe

    const timeSlots = [
        "09:00 AM", "10:00 AM", "11:30 AM",
        "01:00 PM", "02:30 PM", "04:00 PM"
    ];

    const handleBooking = () => {
        setShowConfirmation(true);
    };

    return (
        <div className="profile-page" style={{ padding: '2rem 0 4rem', minHeight: '100vh', background: 'transparent' }}>
            <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem' }}>
                <div className="profile-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 380px', gap: '2rem', alignItems: 'start' }}>

                    {/* Main Content Area */}
                    <div className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                        >
                            <div
                                className="glass-card"
                                style={{
                                    borderRadius: 'var(--radius-2xl)',
                                    padding: '2.5rem',
                                    position: 'relative',
                                    backdropFilter: 'blur(40px)',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    boxShadow: 'var(--shadow-premium)'
                                }}
                            >
                                <div style={{ display: 'flex', gap: '2rem', alignItems: 'flex-start' }}>
                                    <div style={{ position: 'relative' }}>
                                        <div style={{
                                            padding: '4px',
                                            background: 'rgba(255, 255, 255, 0.1)',
                                            borderRadius: '50%',
                                            border: '1px solid var(--glass-border)'
                                        }}>
                                            <img src={provider.image} alt={provider.name} style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover' }} />
                                        </div>
                                        <div style={{
                                            position: 'absolute',
                                            bottom: '8px',
                                            right: '8px',
                                            width: '20px',
                                            height: '20px',
                                            backgroundColor: '#10b981',
                                            borderRadius: '50%',
                                            border: '3px solid var(--white)',
                                            boxShadow: '0 0 0 2px rgba(16, 185, 129, 0.2)'
                                        }}></div>
                                    </div>
                                    <div style={{ flex: 1 }}>
                                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                            <div>
                                                <h1 style={{
                                                    fontSize: '2.2rem',
                                                    fontWeight: '900',
                                                    fontFamily: "'Montserrat', sans-serif",
                                                    color: 'var(--text-main)',
                                                    marginBottom: '0.25rem',
                                                    letterSpacing: '-0.5px'
                                                }}>{provider.name}</h1>
                                                <p style={{
                                                    color: 'var(--text-main)',
                                                    fontSize: '1.05rem',
                                                    marginBottom: '1rem',
                                                    fontWeight: '600',
                                                    opacity: 0.9
                                                }}>{provider.title}</p>
                                            </div>
                                            <div style={{ display: 'flex', gap: '1rem' }}>
                                                <button className="hover-lift" style={{
                                                    background: 'var(--white)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '12px',
                                                    padding: '10px',
                                                    color: 'var(--text-muted)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s',
                                                    boxShadow: 'var(--shadow-sm)'
                                                }}><Heart size={20} /></button>
                                                <button className="hover-lift" style={{
                                                    background: 'var(--white)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: '12px',
                                                    padding: '10px',
                                                    color: 'var(--text-muted)',
                                                    cursor: 'pointer',
                                                    transition: 'all 0.2s',
                                                    boxShadow: 'var(--shadow-sm)'
                                                }}><Share2 size={20} /></button>
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '1.5rem', marginTop: '1rem' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.95rem', color: 'var(--text-muted)', fontWeight: '500' }}>
                                                <MapPin size={18} color="var(--primary)" /> {provider.location}
                                            </div>
                                            <div style={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: '6px',
                                                color: '#10b981',
                                                fontWeight: '700',
                                                fontSize: '0.9rem',
                                                background: 'rgba(16, 185, 129, 0.1)',
                                                padding: '0.35rem 0.85rem',
                                                borderRadius: 'var(--radius-full)'
                                            }}>
                                                <Check size={16} strokeWidth={3} /> Verified Pro
                                            </div>
                                        </div>

                                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '1.5rem', paddingTop: '1.5rem', borderTop: '1px solid var(--glass-border)' }}>
                                            <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                                <span style={{ fontWeight: '900', fontSize: '1.5rem', color: 'var(--text-main)' }}>{provider.rating}</span>
                                                <Star size={20} fill="var(--accent)" color="var(--accent)" style={{ marginTop: '-2px' }} />
                                            </div>
                                            <div style={{ height: '24px', width: '1px', background: 'var(--glass-border)' }}></div>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>
                                                <strong style={{ color: 'var(--text-main)', fontWeight: '800' }}>{provider.reviews}</strong> Reviews
                                            </span>
                                            <div style={{ height: '24px', width: '1px', background: 'var(--glass-border)' }}></div>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem', fontWeight: '500' }}>
                                                <strong style={{ color: 'var(--text-main)', fontWeight: '800' }}>100%</strong> Job Completion
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* About Me Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.1 }}
                            className="glass-card"
                            style={{
                                borderRadius: 'var(--radius-2xl)',
                                padding: '2.5rem',
                                backdropFilter: 'blur(30px)',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                boxShadow: 'var(--shadow-premium)'
                            }}
                        >
                            <h2 style={{
                                fontSize: '1.4rem',
                                fontWeight: '800',
                                fontFamily: "'Montserrat', sans-serif",
                                color: 'var(--text-main)',
                                marginBottom: '1.25rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem'
                            }}>
                                <div style={{ width: '6px', height: '24px', background: 'var(--primary)', borderRadius: '4px' }}></div>
                                About Me
                            </h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '2rem' }}>{provider.description}</p>

                            <h3 style={{ fontSize: '1rem', fontWeight: '700', color: 'var(--text-main)', marginBottom: '1rem' }}>Specialties & Expertise</h3>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
                                {provider.expertise.map((skill, idx) => (
                                    <span key={idx} style={{
                                        backgroundColor: 'var(--white)',
                                        color: 'var(--text-main)',
                                        border: '1px solid var(--glass-border)',
                                        padding: '0.65rem 1.25rem',
                                        borderRadius: '12px',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        boxShadow: 'var(--shadow-sm)'
                                    }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </motion.div>

                        {/* Recent Projects Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.2 }}
                        >
                            <div
                                className="glass-card"
                                style={{
                                    borderRadius: 'var(--radius-2xl)',
                                    padding: '2.5rem',
                                    backdropFilter: 'blur(30px)',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    boxShadow: 'var(--shadow-premium)'
                                }}
                            >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                                    <h2 style={{
                                        fontSize: '1.4rem',
                                        fontWeight: '800',
                                        fontFamily: "'Montserrat', sans-serif",
                                        color: 'var(--text-main)',
                                        display: 'flex',
                                        alignItems: 'center',
                                        gap: '0.75rem'
                                    }}>
                                        <div style={{ width: '6px', height: '24px', background: 'var(--secondary)', borderRadius: '4px' }}></div>
                                        Recent Projects
                                    </h2>
                                    <button className="hover-lift" style={{
                                        color: 'var(--primary)',
                                        fontSize: '0.9rem',
                                        fontWeight: '700',
                                        background: 'var(--primary-light)',
                                        border: 'none',
                                        cursor: 'pointer',
                                        padding: '0.6rem 1.2rem',
                                        borderRadius: '10px'
                                    }}>View Gallery</button>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
                                    {provider.projects.map((proj, idx) => (
                                        <div key={idx} className="hover-lift" style={{
                                            borderRadius: '16px',
                                            overflow: 'hidden',
                                            boxShadow: 'var(--shadow-md)',
                                            border: '4px solid var(--white)',
                                            position: 'relative',
                                            aspectRatio: '16/10'
                                        }}>
                                            <img src={proj} alt={`Project ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>

                        {/* Client Reviews Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.3 }}
                        >
                            <div
                                className="glass-card"
                                style={{
                                    borderRadius: 'var(--radius-2xl)',
                                    padding: '2.5rem',
                                    backdropFilter: 'blur(30px)',
                                    background: 'var(--glass-bg)',
                                    border: '1px solid var(--glass-border)',
                                    boxShadow: 'var(--shadow-premium)'
                                }}
                            >
                                <h2 style={{
                                    fontSize: '1.4rem',
                                    fontWeight: '800',
                                    fontFamily: "'Montserrat', sans-serif",
                                    color: 'var(--text-main)',
                                    marginBottom: '2rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '0.75rem'
                                }}>
                                    <div style={{ width: '6px', height: '24px', background: 'var(--accent)', borderRadius: '4px' }}></div>
                                    Client Reviews
                                </h2>
                                <div style={{ display: 'flex', gap: '3rem', marginBottom: '3rem', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <div style={{ textAlign: 'center', minWidth: '140px', padding: '1.5rem', background: 'var(--white)', borderRadius: '20px', border: '1px solid var(--glass-border)' }}>
                                        <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--text-main)', lineHeight: '1', fontFamily: "'Montserrat', sans-serif" }}>{provider.reviewData.average}</div>
                                        <div style={{ display: 'flex', color: 'var(--accent)', justifyContent: 'center', margin: '0.75rem 0' }}>
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} color={i < 4 ? "var(--accent)" : "#cbd5e1"} />
                                            ))}
                                        </div>
                                        <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '600' }}>{provider.reviewData.total} Reviews</div>
                                    </div>
                                    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                                        {provider.reviewData.breakdown.map((row) => (
                                            <div key={row.rating} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                                <span style={{ width: '12px', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '700' }}>{row.rating}</span>
                                                <div style={{ flex: 1, height: '10px', backgroundColor: 'var(--background)', borderRadius: '5px', overflow: 'hidden' }}>
                                                    <motion.div
                                                        initial={{ width: 0 }}
                                                        whileInView={{ width: `${row.percentage}%` }}
                                                        transition={{ duration: 1, ease: 'easeOut' }}
                                                        style={{ height: '100%', backgroundColor: 'var(--accent)', borderRadius: '5px' }}
                                                    />
                                                </div>
                                                <span style={{ width: '40px', fontSize: '0.9rem', color: 'var(--text-muted)', textAlign: 'right', fontWeight: '500' }}>{row.percentage}%</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '2.5rem' }}>
                                    <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
                                        <div style={{
                                            width: '56px',
                                            height: '56px',
                                            borderRadius: '16px',
                                            backgroundColor: 'var(--background)',
                                            border: '1px solid var(--glass-border)',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            overflow: 'hidden'
                                        }}>
                                            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=200" alt="Sarah M." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                        </div>
                                        <div>
                                            <h4 style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.1rem', marginBottom: '0.25rem' }}>{provider.reviewData.latest.name}</h4>
                                            <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', marginBottom: '1rem' }}>
                                                <div style={{ display: 'flex', color: 'var(--accent)' }}>
                                                    {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                                </div>
                                                <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>{provider.reviewData.latest.date}</span>
                                            </div>
                                            <p style={{ fontSize: '1rem', color: 'var(--text-main)', lineHeight: '1.6', opacity: 0.9 }}>"{provider.reviewData.latest.comment}"</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Sidebar Booking Section */}
                    <aside className="sidebar">
                        <div className="glass-card sticky-sidebar" style={{
                            padding: '2rem',
                            borderRadius: 'var(--radius-2xl)',
                            backdropFilter: 'blur(40px)',
                            background: 'var(--white)',
                            border: '1px solid var(--glass-border)',
                            position: 'sticky',
                            top: '120px',
                            boxShadow: '0 20px 40px -10px rgba(0,0,0,0.1)'
                        }}>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <div>
                                        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '700', textTransform: 'uppercase' }}>Starting from</p>
                                        <div style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--text-main)', fontFamily: "'Montserrat', sans-serif" }}>
                                            ${provider.price}<span style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '500' }}>/hr</span>
                                        </div>
                                    </div>
                                    <div style={{ padding: '0.5rem 1rem', background: 'rgba(16, 185, 129, 0.1)', color: '#10b981', borderRadius: '99px', fontSize: '0.85rem', fontWeight: '700' }}>
                                        Available Now
                                    </div>
                                </div>

                                <button
                                    onClick={() => handleOpenBooking('fixed')}
                                    className="btn-primary hover-lift"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '16px',
                                        fontSize: '1.1rem',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        gap: '0.5rem'
                                    }}
                                >
                                    Book Now
                                </button>

                                <button
                                    onClick={() => handleOpenBooking('quote')}
                                    className="hover-lift"
                                    style={{
                                        width: '100%',
                                        padding: '1rem',
                                        borderRadius: '16px',
                                        fontSize: '1rem',
                                        background: 'var(--background)',
                                        color: 'var(--text-main)',
                                        border: '1px solid var(--glass-border)',
                                        fontWeight: '600'
                                    }}
                                >
                                    Request Custom Quote
                                </button>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                                    <span style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1.05rem' }}>Select Date</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--background)', padding: '4px 8px', borderRadius: '8px' }}>
                                        <ChevronLeft size={18} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
                                        <span style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>Oct 2023</span>
                                        <ChevronRight size={18} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', textAlign: 'center', marginBottom: '8px' }}>
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                        <span key={day} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700', textTransform: 'uppercase' }}>{day}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '6px', textAlign: 'center' }}>
                                    {/* Simplified Calendar Grid */}
                                    <span style={{ padding: '8px' }}></span><span style={{ padding: '8px' }}></span>
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map(d => (
                                        <button
                                            key={d}
                                            onClick={() => setSelectedDate(d)}
                                            style={{
                                                width: '36px',
                                                height: '36px',
                                                margin: 'auto',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                backgroundColor: selectedDate === d ? 'var(--primary)' : d < 10 ? 'transparent' : 'var(--background)',
                                                color: selectedDate === d ? 'white' : d < 10 ? 'var(--text-muted)' : 'var(--text-main)',
                                                borderRadius: '10px',
                                                fontWeight: '700',
                                                fontSize: '0.9rem',
                                                border: 'none',
                                                boxShadow: selectedDate === d ? '0 10px 20px -5px rgba(59, 130, 246, 0.5)' : 'none',
                                                cursor: 'pointer',
                                                opacity: d < 6 ? 0.5 : 1
                                            }}
                                        >
                                            {d}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ marginBottom: '2rem' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '1rem' }}>
                                    <Clock size={18} color="var(--primary)" />
                                    <span style={{ fontSize: '1rem', fontWeight: '800', color: 'var(--text-main)' }}>Available Slots</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            style={{
                                                padding: '12px',
                                                fontSize: '0.85rem',
                                                fontWeight: '700',
                                                borderRadius: '12px',
                                                border: '1px solid',
                                                borderColor: selectedTime === time ? 'var(--primary)' : 'var(--glass-border)',
                                                backgroundColor: selectedTime === time ? 'var(--primary-light)' : 'var(--background)',
                                                color: selectedTime === time ? 'var(--primary)' : 'var(--text-muted)',
                                                transition: 'all 0.2s',
                                                cursor: 'pointer'
                                            }}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ backgroundColor: 'var(--background)', padding: '16px', borderRadius: '16px', marginBottom: '2rem', border: '1px solid var(--glass-border)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: 'var(--text-muted)' }}>
                                    <MapPin size={20} color="var(--primary)" />
                                    <div>
                                        <p style={{ fontSize: '0.75rem', fontWeight: '600', textTransform: 'uppercase', marginBottom: '2px' }}>Service Location</p>
                                        <input type="text" defaultValue="742 Evergreen Terrace, SF" style={{ background: 'none', border: 'none', fontSize: '0.95rem', fontWeight: '600', color: 'var(--text-main)', width: '100%', outline: 'none' }} />
                                    </div>
                                </div>
                            </div>

                            <button
                                onClick={handleBooking}
                                className="btn-primary"
                                style={{
                                    width: '100%',
                                    padding: '1.25rem',
                                    borderRadius: '16px',
                                    fontWeight: '800',
                                    fontSize: '1.1rem',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '12px',
                                    marginBottom: '1.5rem',
                                    boxShadow: '0 20px 40px -10px rgba(59, 130, 246, 0.4)',
                                    background: 'linear-gradient(135deg, var(--primary) 0%, #2563eb 100%)',
                                    border: 'none',
                                    color: 'white',
                                    cursor: 'pointer'
                                }}
                            >
                                Confirm Booking <Send size={20} />
                            </button>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Shield size={16} color="#10b981" /> 100% Sceure</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={16} color="var(--accent)" /> Satisfaction Guarantee</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Confirmation Modal */}
            <AnimatePresence>
                {showConfirmation && (
                    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            style={{
                                backgroundColor: 'var(--white)',
                                padding: '4rem 3rem',
                                borderRadius: '32px',
                                maxWidth: '480px',
                                width: '100%',
                                textAlign: 'center',
                                boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
                            }}
                        >
                            <div style={{
                                width: '80px',
                                height: '80px',
                                backgroundColor: 'rgba(16, 185, 129, 0.1)',
                                color: '#10b981',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                margin: '0 auto 2rem',
                                border: '1px solid rgba(16, 185, 129, 0.2)'
                            }}>
                                <Check size={40} strokeWidth={3} />
                            </div>
                            <h2 style={{ fontSize: '2rem', fontWeight: '900', marginBottom: '1rem', color: 'var(--text-main)', fontFamily: "'Montserrat', sans-serif" }}>Booking Confirmed!</h2>
                            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: '1.6', fontSize: '1.1rem' }}>
                                Your appointment with <strong style={{ color: 'var(--text-main)' }}>John Doe</strong> has been scheduled. We've sent a confirmation email to you.
                            </p>
                            <button
                                onClick={() => setShowConfirmation(false)}
                                className="hover-lift"
                                style={{
                                    backgroundColor: 'var(--text-main)',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '16px',
                                    padding: '1.25rem',
                                    width: '100%',
                                    fontWeight: '700',
                                    fontSize: '1rem',
                                    cursor: 'pointer',
                                    boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)'
                                }}
                            >
                                Return to Profile
                            </button>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <BookingRequestModal
                isOpen={isBookingModalOpen}
                onClose={() => setIsBookingModalOpen(false)}
                service={{
                    id: 1,
                    name: initBookingType === 'quote' ? 'Custom Service Request' : 'Standard Electrical Service',
                    price: provider.price,
                    type: initBookingType === 'quote' ? 'custom' : 'fixed'
                }}
                provider={provider}
            />

            <style>{`
                .container { max-width: 1400px !important; margin: 0 auto; padding: 0 40px; }
                @media (max-width: 1024px) {
                    .profile-layout { grid-template-columns: 1fr !important; }
                    .sidebar { order: -1; }
                    .sticky-sidebar { position: static !important; margin-bottom: 2rem; top: 0 !important; }
                }
            `}</style>
        </div>
    );
};

export default Profile;
