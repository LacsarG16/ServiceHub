import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Star, MapPin, Clock, Shield, Check, MessageSquare, Share2, Heart, ChevronLeft, ChevronRight, Send } from 'lucide-react';
import { motion } from 'framer-motion'; // eslint-disable-line no-unused-vars

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
        <div className="profile-page" style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', padding: '120px 0 80px' }}>
            {/* Aurora Background Blobs */}
            <div className="aurora-blob blob-1"></div>
            <div className="aurora-blob blob-2"></div>
            <div className="aurora-blob blob-3"></div>

            <div className="container" style={{ position: 'relative', zIndex: 1 }}>
                {/* Breadcrumbs */}
                <div className="breadcrumbs" style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Link to="/" style={{ color: 'var(--primary)', fontWeight: '500' }}>Home</Link> <span style={{ opacity: 0.5 }}>›</span>
                    <Link to="/directory" style={{ color: 'var(--primary)', fontWeight: '500' }}>Home Services</Link> <span style={{ opacity: 0.5 }}>›</span>
                    <span>Electricians</span> <span style={{ opacity: 0.5 }}>›</span>
                    <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{provider.name}</span>
                </div>

                <div className="profile-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 350px', gap: '24px' }}>

                    {/* Main Content Area */}
                    <div className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        {/* Header Section */}
                        <div className="glass-card" style={{ padding: '24px', position: 'relative' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ position: 'relative' }}>
                                    <img src={provider.image} alt={provider.name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', border: '3px solid var(--white)', boxShadow: 'var(--shadow-md)' }} />
                                    <div style={{ position: 'absolute', bottom: '5px', right: '5px', width: '15px', height: '15px', backgroundColor: '#22c55e', borderRadius: '50%', border: '2px solid var(--white)' }}></div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <h1 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '4px', letterSpacing: '-0.5px' }}>{provider.name}</h1>
                                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '8px', fontWeight: '500' }}>{provider.title}</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '12px' }}>
                                            <button className="hover-lift" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '10px', color: 'var(--text-muted)' }}><Heart size={20} /></button>
                                            <button className="hover-lift" style={{ backgroundColor: 'rgba(255,255,255,0.1)', backdropFilter: 'blur(5px)', border: '1px solid var(--glass-border)', borderRadius: '12px', padding: '10px', color: 'var(--text-muted)' }}><Share2 size={20} /></button>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <MapPin size={16} color="var(--primary)" /> {provider.location}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--secondary)', fontWeight: '600' }}>
                                            <Check size={16} /> Licensed & Insured
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '12px' }}>
                                        <span style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--text-main)' }}>{provider.rating}</span>
                                        <div style={{ display: 'flex', color: '#fbbf24' }}>
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={18} fill={i < 4 ? "currentColor" : "none"} color={i < 4 ? "#fbbf24" : "var(--text-muted)"} />
                                            ))}
                                        </div>
                                        <span style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>({provider.reviews} trusted reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Me Section */}
                        <div className="glass-card" style={{ padding: '24px' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '16px' }}>About Me</h2>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1rem', lineHeight: '1.7', marginBottom: '24px' }}>{provider.description}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {provider.expertise.map((skill, idx) => (
                                    <span key={idx} className="glass" style={{ color: 'var(--text-main)', padding: '8px 16px', borderRadius: '12px', fontSize: '0.85rem', fontWeight: '600', border: '1px solid var(--glass-border)' }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Recent Projects Section */}
                        <div className="glass-card" style={{ padding: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                                <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)' }}>Recent Projects</h2>
                                <button style={{ color: 'var(--primary)', fontSize: '0.9rem', fontWeight: '700', background: 'none', border: 'none' }}>View All Projects</button>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                                {provider.projects.map((proj, idx) => (
                                    <div key={idx} className="hover-lift" style={{ borderRadius: '12px', overflow: 'hidden', height: '180px', border: '1px solid var(--glass-border)' }}>
                                        <img src={proj} alt={`Project ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Client Reviews Section */}
                        <div className="glass-card" style={{ padding: '24px' }}>
                            <h2 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '24px' }}>Client Reviews</h2>
                            <div style={{ display: 'flex', gap: '40px', marginBottom: '40px', flexWrap: 'wrap' }}>
                                <div style={{ textAlign: 'center', minWidth: '120px' }}>
                                    <div style={{ fontSize: '3.5rem', fontWeight: '900', color: 'var(--text-main)', lineHeight: '1' }}>{provider.reviewData.average}</div>
                                    <div style={{ display: 'flex', color: '#fbbf24', justifyContent: 'center', margin: '12px 0' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={22} fill={i < 4 ? "currentColor" : "none"} color={i < 4 ? "#fbbf24" : "var(--text-muted)"} />
                                        ))}
                                    </div>
                                    <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem', fontWeight: '500' }}>{provider.reviewData.total} Reviews</div>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                    {provider.reviewData.breakdown.map((row) => (
                                        <div key={row.rating} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <span style={{ width: '15px', fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>{row.rating}</span>
                                            <div style={{ flex: 1, height: '10px', backgroundColor: 'var(--glass-bg)', borderRadius: '5px', overflow: 'hidden', border: '1px solid var(--glass-border)' }}>
                                                <div style={{ width: `${row.percentage}%`, height: '100%', background: 'linear-gradient(to right, #fbbf24, #f59e0b)', borderRadius: '5px' }}></div>
                                            </div>
                                            <span style={{ width: '40px', fontSize: '0.85rem', color: 'var(--text-muted)', textAlign: 'right', fontWeight: '600' }}>{row.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid var(--glass-border)', paddingTop: '24px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '16px' }}>
                                    <div style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Sarah M." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1rem' }}>{provider.reviewData.latest.name}</div>
                                        <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', color: '#fbbf24' }}>
                                                {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                                            </div>
                                            <span style={{ color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '500' }}>{provider.reviewData.latest.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', fontStyle: 'italic' }}>"{provider.reviewData.latest.comment}"</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Booking Section */}
                    <aside className="sidebar">
                        <div className="glass-card sticky-sidebar" style={{ padding: '24px', position: 'sticky', top: '100px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                <div>
                                    <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', fontWeight: '600' }}>Price per hour</p>
                                    <div style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-main)', letterSpacing: '-1px' }}>${provider.price} <span style={{ fontSize: '0.9rem', fontWeight: '500', color: 'var(--text-muted)' }}>/ hr</span></div>
                                </div>
                                <button className="hover-lift" style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: 'var(--primary)', color: 'white', border: 'none', padding: '10px 18px', borderRadius: '12px', fontWeight: '700', fontSize: '0.9rem', boxShadow: '0 8px 16px rgba(6, 182, 212, 0.3)' }}>
                                    <MessageSquare size={18} /> Chat
                                </button>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <span style={{ fontWeight: '800', color: 'var(--text-main)', fontSize: '1rem' }}>Select Date</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <ChevronLeft size={18} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
                                        <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)' }}>October 2023</span>
                                        <ChevronRight size={18} style={{ color: 'var(--text-muted)', cursor: 'pointer' }} />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', marginBottom: '8px' }}>
                                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map(day => (
                                        <span key={day} style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: '700' }}>{day}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'transparent' }}>-</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'transparent' }}>-</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', opacity: 0.3 }}>1</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', opacity: 0.3 }}>2</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', opacity: 0.3 }}>3</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', opacity: 0.3 }}>4</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-muted)', opacity: 0.3 }}>5</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>6</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>7</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>8</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>9</span>
                                    <button
                                        onClick={() => setSelectedDate(10)}
                                        className="hover-lift"
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            margin: 'auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: selectedDate === 10 ? 'var(--primary)' : 'transparent',
                                            color: selectedDate === 10 ? 'white' : 'var(--text-main)',
                                            borderRadius: '10px',
                                            fontWeight: '800',
                                            border: 'none',
                                            boxShadow: selectedDate === 10 ? '0 4px 12px rgba(6, 182, 212, 0.4)' : 'none'
                                        }}
                                    >
                                        10
                                    </button>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>11</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'var(--text-main)', fontWeight: '600' }}>12</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '0.9rem', fontWeight: '800', color: 'var(--text-main)' }}>Available Times</span>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>(Oct 10)</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px' }}>
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            className="hover-lift"
                                            style={{
                                                padding: '10px 5px',
                                                fontSize: '0.8rem',
                                                fontWeight: '700',
                                                borderRadius: '10px',
                                                border: '1px solid',
                                                borderColor: selectedTime === time ? 'var(--primary)' : 'var(--glass-border)',
                                                backgroundColor: selectedTime === time ? 'rgba(6, 182, 212, 0.1)' : 'var(--glass-bg)',
                                                color: selectedTime === time ? 'var(--primary)' : 'var(--text-muted)',
                                                transition: 'all 0.2s',
                                                backdropFilter: 'blur(5px)'
                                            }}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="glass" style={{ padding: '12px 16px', borderRadius: '12px', marginBottom: '24px', border: '1px solid var(--glass-border)' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
                                    <MapPin size={16} color="var(--primary)" />
                                    <input type="text" defaultValue="742 Evergreen Terrace, SF" style={{ background: 'none', border: 'none', fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: '500', width: '100%', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '20px', padding: '0 4px' }}>
                                <div>
                                    <p style={{ fontWeight: '500' }}>Date</p>
                                    <p style={{ color: 'var(--text-main)', fontWeight: '700' }}>Oct 10, 2023</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p style={{ fontWeight: '500' }}>Time</p>
                                    <p style={{ color: 'var(--text-main)', fontWeight: '700' }}>01:00 PM</p>
                                </div>
                            </div>

                            <button
                                onClick={handleBooking}
                                className="btn-primary hover-lift"
                                style={{ width: '100%', padding: '18px', borderRadius: '16px', fontWeight: '800', fontSize: '1.1rem', justifyContent: 'center', marginBottom: '16px' }}
                            >
                                Confirm Booking <Send size={20} />
                            </button>
                            <p style={{ textAlign: 'center', color: 'var(--text-muted)', fontSize: '0.8rem', fontWeight: '500', marginBottom: '20px' }}>No upfront charges required</p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.8rem', color: 'var(--text-muted)', fontWeight: '600' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Shield size={16} color="var(--secondary)" /> Secure</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}><Star size={16} color="#fbbf24" /> Top Pro</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmation && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(8px)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="glass-card"
                        style={{ padding: '48px', maxWidth: '450px', width: '100%', textAlign: 'center', border: '1px solid var(--primary)' }}
                    >
                        <div style={{ width: '80px', height: '80px', backgroundColor: 'rgba(16, 185, 129, 0.1)', color: 'var(--secondary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px', border: '2px solid var(--secondary)' }}>
                            <Check size={40} />
                        </div>
                        <h2 style={{ fontSize: '2rem', fontWeight: '900', color: 'var(--text-main)', marginBottom: '16px', letterSpacing: '-1px' }}>Booking Confirmed!</h2>
                        <p style={{ color: 'var(--text-muted)', marginBottom: '32px', lineHeight: '1.7', fontSize: '1.1rem' }}>
                            Your appointment with <strong style={{ color: 'var(--text-main)' }}>{provider.name}</strong> has been requested for Oct 10, 2023 at 01:00 PM.
                        </p>
                        <button
                            onClick={() => setShowConfirmation(false)}
                            className="btn-primary"
                            style={{ width: '100%', justifyContent: 'center', padding: '16px' }}
                        >
                            Back to Profile
                        </button>
                    </motion.div>
                </div>
            )}

            <style>{`
                .container { max-width: 1100px; margin: 0 auto; padding: 0 20px; }
                .card { transition: all 0.3s ease; }
                @media (max-width: 992px) {
                    .profile-layout { grid-template-columns: 1fr !important; }
                    .sidebar { order: -1; }
                    .sticky-sidebar { position: static !important; margin-bottom: 24px; }
                }
            `}</style>
        </div>
    );
};

export default Profile;
