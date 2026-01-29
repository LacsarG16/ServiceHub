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
        <div className="profile-page" style={{ backgroundColor: '#f4f7f9', padding: '40px 0' }}>
            <div className="container">
                {/* Breadcrumbs */}
                <div className="breadcrumbs" style={{ fontSize: '0.85rem', color: '#64748b', marginBottom: '20px', display: 'flex', gap: '8px', alignItems: 'center' }}>
                    <Link to="/">Home</Link> <span>›</span>
                    <Link to="/directory">Home Services</Link> <span>›</span>
                    <span>Electricians</span> <span>›</span>
                    <span style={{ color: '#1e293b', fontWeight: '500' }}>{provider.name}</span>
                </div>

                <div className="profile-layout" style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) 350px', gap: '24px' }}>

                    {/* Main Content Area */}
                    <div className="main-content" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>

                        {/* Header Section */}
                        <div className="card" style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', position: 'relative', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
                                <div style={{ position: 'relative' }}>
                                    <img src={provider.image} alt={provider.name} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover' }} />
                                    <div style={{ position: 'absolute', bottom: '5px', right: '5px', width: '15px', height: '15px', backgroundColor: '#22c55e', borderRadius: '50%', border: '2px solid white' }}></div>
                                </div>
                                <div style={{ flex: 1 }}>
                                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                                        <div>
                                            <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1e293b', marginBottom: '4px' }}>{provider.name}</h1>
                                            <p style={{ color: '#64748b', fontSize: '0.9rem', marginBottom: '8px' }}>{provider.title}</p>
                                        </div>
                                        <div style={{ display: 'flex', gap: '12px' }}>
                                            <button style={{ backgroundColor: '#f1f5f9', border: 'none', borderRadius: '8px', padding: '8px', color: '#64748b' }}><Heart size={20} /></button>
                                            <button style={{ backgroundColor: '#f1f5f9', border: 'none', borderRadius: '8px', padding: '8px', color: '#64748b' }}><Share2 size={20} /></button>
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', fontSize: '0.9rem', color: '#64748b' }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                                            <MapPin size={16} /> {provider.location}
                                        </div>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#14b8a6', fontWeight: '500' }}>
                                            <Check size={16} /> Licensed & Insured
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginTop: '8px' }}>
                                        <span style={{ fontWeight: '700', fontSize: '1rem', color: '#1e293b' }}>{provider.rating}</span>
                                        <div style={{ display: 'flex', color: '#fbbf24' }}>
                                            {[...Array(5)].map((_, i) => (
                                                <Star key={i} size={16} fill={i < 4 ? "currentColor" : "none"} color={i < 4 ? "#fbbf24" : "#cbd5e1"} />
                                            ))}
                                        </div>
                                        <span style={{ color: '#64748b', fontSize: '0.9rem' }}>({provider.reviews} reviews)</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* About Me Section */}
                        <div className="card" style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
                            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>About Me</h2>
                            <p style={{ color: '#64748b', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '20px' }}>{provider.description}</p>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                                {provider.expertise.map((skill, idx) => (
                                    <span key={idx} style={{ backgroundColor: '#f1f5f9', color: '#475569', padding: '6px 14px', borderRadius: 'full', fontSize: '0.85rem', whiteSpace: 'nowrap' }}>
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Recent Projects Section */}
                        <div className="card" style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b' }}>Recent Projects</h2>
                                <button style={{ color: '#3b82f6', fontSize: '0.85rem', fontWeight: '600', background: 'none', border: 'none' }}>View All</button>
                            </div>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '12px' }}>
                                {provider.projects.map((proj, idx) => (
                                    <img key={idx} src={proj} alt={`Project ${idx + 1}`} style={{ width: '100%', height: '160px', borderRadius: '8px', objectFit: 'cover' }} />
                                ))}
                            </div>
                        </div>

                        {/* Client Reviews Section */}
                        <div className="card" style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0' }}>
                            <h2 style={{ fontSize: '1.1rem', fontWeight: '700', color: '#1e293b', marginBottom: '20px' }}>Client Reviews</h2>
                            <div style={{ display: 'flex', gap: '40px', marginBottom: '32px', flexWrap: 'wrap' }}>
                                <div style={{ textAlign: 'center', minWidth: '100px' }}>
                                    <div style={{ fontSize: '3rem', fontWeight: '800', color: '#1e293b', lineHeight: '1' }}>{provider.reviewData.average}</div>
                                    <div style={{ display: 'flex', color: '#fbbf24', justifyContent: 'center', margin: '8px 0' }}>
                                        {[...Array(5)].map((_, i) => (
                                            <Star key={i} size={20} fill={i < 4 ? "currentColor" : "none"} color={i < 4 ? "#fbbf24" : "#cbd5e1"} />
                                        ))}
                                    </div>
                                    <div style={{ color: '#64748b', fontSize: '0.85rem' }}>{provider.reviewData.total} Reviews</div>
                                </div>
                                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                    {provider.reviewData.breakdown.map((row) => (
                                        <div key={row.rating} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                            <span style={{ width: '10px', fontSize: '0.85rem', color: '#64748b' }}>{row.rating}</span>
                                            <div style={{ flex: 1, height: '8px', backgroundColor: '#f1f5f9', borderRadius: '4px', overflow: 'hidden' }}>
                                                <div style={{ width: `${row.percentage}%`, height: '100%', backgroundColor: '#fbbf24', borderRadius: '4px' }}></div>
                                            </div>
                                            <span style={{ width: '30px', fontSize: '0.85rem', color: '#64748b', textAlign: 'right' }}>{row.percentage}%</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div style={{ borderTop: '1px solid #f1f5f9', paddingTop: '20px' }}>
                                <div style={{ display: 'flex', gap: '12px', alignItems: 'center', marginBottom: '12px' }}>
                                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                                        <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100" alt="Sarah M." style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                                    </div>
                                    <div>
                                        <div style={{ fontWeight: '700', color: '#1e293b', fontSize: '0.9rem' }}>{provider.reviewData.latest.name}</div>
                                        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
                                            <div style={{ display: 'flex', color: '#fbbf24' }}>
                                                {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="currentColor" />)}
                                            </div>
                                            <span style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{provider.reviewData.latest.date}</span>
                                        </div>
                                    </div>
                                </div>
                                <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: '1.5' }}>{provider.reviewData.latest.comment}</p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar Booking Section */}
                    <aside className="sidebar">
                        <div className="card sticky-sidebar" style={{ backgroundColor: 'white', borderRadius: '16px', padding: '24px', border: '1px solid #e2e8f0', position: 'sticky', top: '24px' }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                                <div>
                                    <p style={{ color: '#64748b', fontSize: '0.8rem' }}>Starting at</p>
                                    <div style={{ fontSize: '1.75rem', fontWeight: '800', color: '#1e293b' }}>${provider.price} <span style={{ fontSize: '0.9rem', fontWeight: '400', color: '#64748b' }}>/ hour</span></div>
                                </div>
                                <button style={{ display: 'flex', alignItems: 'center', gap: '8px', backgroundColor: '#f0fdfa', color: '#14b8a6', border: '1px solid #ccfbf1', padding: '8px 16px', borderRadius: '8px', fontWeight: '600', fontSize: '0.9rem' }}>
                                    <MessageSquare size={18} /> Message
                                </button>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                                    <span style={{ fontWeight: '700', color: '#1e293b' }}>Select Date</span>
                                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                                        <ChevronLeft size={18} style={{ color: '#94a3b8' }} />
                                        <span style={{ fontSize: '0.9rem', fontWeight: '600' }}>October 2023</span>
                                        <ChevronRight size={18} style={{ color: '#94a3b8' }} />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', marginBottom: '8px' }}>
                                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
                                        <span key={day} style={{ fontSize: '0.7rem', color: '#94a3b8', textTransform: 'uppercase' }}>{day}</span>
                                    ))}
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'transparent' }}>-</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: 'transparent' }}>-</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>1</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>2</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>3</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>4</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#cbd5e1' }}>5</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#475569' }}>6</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#475569' }}>7</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#475569' }}>8</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#475569' }}>9</span>
                                    <button
                                        onClick={() => setSelectedDate(10)}
                                        style={{
                                            width: '32px',
                                            height: '32px',
                                            margin: 'auto',
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'center',
                                            backgroundColor: selectedDate === 10 ? '#3b82f6' : 'transparent',
                                            color: selectedDate === 10 ? 'white' : '#475569',
                                            borderRadius: '50%',
                                            fontWeight: '600',
                                            border: 'none',
                                            boxShadow: selectedDate === 10 ? '0 4px 6px -1px rgba(59, 130, 246, 0.5)' : 'none'
                                        }}
                                    >
                                        10
                                    </button>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#475569' }}>11</span>
                                    <span style={{ padding: '8px', fontSize: '0.85rem', color: '#475569' }}>12</span>
                                </div>
                            </div>

                            <div style={{ marginBottom: '24px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px', marginBottom: '12px' }}>
                                    <span style={{ fontSize: '0.85rem', fontWeight: '700', color: '#1e293b' }}>Available Times</span>
                                    <span style={{ fontSize: '0.8rem', color: '#94a3b8' }}>(Oct 10)</span>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
                                    {timeSlots.map((time) => (
                                        <button
                                            key={time}
                                            onClick={() => setSelectedTime(time)}
                                            style={{
                                                padding: '8px',
                                                fontSize: '0.75rem',
                                                fontWeight: '600',
                                                borderRadius: '8px',
                                                border: '1px solid',
                                                borderColor: selectedTime === time ? '#3b82f6' : '#e2e8f0',
                                                backgroundColor: selectedTime === time ? '#eff6ff' : 'white',
                                                color: selectedTime === time ? '#3b82f6' : '#64748b',
                                                transition: 'all 0.2s'
                                            }}
                                        >
                                            {time}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div style={{ backgroundColor: '#f8fafc', padding: '12px', borderRadius: '8px', marginBottom: '24px', position: 'relative' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#64748b' }}>
                                    <MapPin size={16} />
                                    <input type="text" defaultValue="742 Evergreen Terrace, SF" style={{ background: 'none', border: 'none', fontSize: '0.85rem', color: '#1e293b', width: '100%', outline: 'none' }} />
                                </div>
                            </div>

                            <div style={{ display: 'flex', justifyContent: 'space-between', color: '#64748b', fontSize: '0.85rem', marginBottom: '20px' }}>
                                <div>
                                    <p>Date</p>
                                    <p style={{ color: '#1e293b', fontWeight: '600' }}>Oct 10, 2023</p>
                                </div>
                                <div style={{ textAlign: 'right' }}>
                                    <p>Time</p>
                                    <p style={{ color: '#1e293b', fontWeight: '600' }}>01:00 PM</p>
                                </div>
                            </div>

                            <button
                                onClick={handleBooking}
                                style={{ width: '100%', backgroundColor: '#f97316', color: 'white', border: 'none', borderRadius: '12px', padding: '16px', fontWeight: '700', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', marginBottom: '12px' }}
                            >
                                Confirm Booking <Send size={18} />
                            </button>
                            <p style={{ textAlign: 'center', color: '#94a3b8', fontSize: '0.75rem', marginBottom: '16px' }}>You won't be charged yet</p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', fontSize: '0.75rem', color: '#94a3b8' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Shield size={14} /> Secure</div>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}><Star size={14} /> Guarantee</div>
                            </div>
                        </div>
                    </aside>
                </div>
            </div>

            {/* Confirmation Modal */}
            {showConfirmation && (
                <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.5)', zIndex: 1000, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px' }}>
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        style={{ backgroundColor: 'white', padding: '40px', borderRadius: '24px', maxWidth: '400px', width: '100%', textAlign: 'center' }}
                    >
                        <div style={{ width: '64px', height: '64px', backgroundColor: '#f0fdf4', color: '#22c55e', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                            <Check size={32} />
                        </div>
                        <h2 style={{ fontSize: '1.5rem', fontWeight: '800', marginBottom: '12px' }}>Booking Confirmed!</h2>
                        <p style={{ color: '#64748b', marginBottom: '32px', lineHeight: '1.6' }}>
                            Your appointment with <strong>John Doe</strong> has been requested for Oct 10, 2023 at 01:00 PM.
                        </p>
                        <button
                            onClick={() => setShowConfirmation(false)}
                            style={{ backgroundColor: '#1e293b', color: 'white', border: 'none', borderRadius: '12px', padding: '14px', width: '100%', fontWeight: '700' }}
                        >
                            Got it
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
