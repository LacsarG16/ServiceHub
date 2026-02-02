import React from 'react';
import { Target, Users, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div style={{ padding: '40px 0 80px' }}>
            <div className="container">
                {/* Hero Section */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }} className="about-hero">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="accent-badge" style={{ marginBottom: '1.25rem', display: 'inline-block' }}>OUR MISSION</span>
                        <h1 style={{
                            fontSize: '3.5rem',
                            marginBottom: '1.5rem',
                            lineHeight: '1.1',
                            fontWeight: '900',
                            fontFamily: "'Montserrat', sans-serif"
                        }}>Bridging the gap between <span className="text-gradient-primary">talent</span> and <span className="text-gradient-secondary">need</span>.</h1>
                        <p style={{
                            fontSize: '1.25rem',
                            color: 'var(--text-muted)',
                            lineHeight: '1.8',
                            marginBottom: '2.5rem',
                            fontWeight: '500'
                        }}>
                            ServiceHub was founded on a simple idea: finding trusted help should be as easy as booking a hotel. We've built a platform that empowers local professionals and simplifies the lives of our users.
                        </p>
                        <div style={{ display: 'flex', gap: '3rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--primary)', fontFamily: "'Montserrat', sans-serif" }}>50k+</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>Verified Providers</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--secondary)', fontFamily: "'Montserrat', sans-serif" }}>200k+</h3>
                                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', fontWeight: '600' }}>Satisfied Users</p>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{ position: 'relative' }}
                    >
                        <img
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80&w=1000"
                            alt="Our Team"
                            style={{ width: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }}
                        />
                        <div className="glass-card" style={{
                            position: 'absolute',
                            bottom: '-20px',
                            left: '-20px',
                            padding: '1.5rem 2rem',
                            borderRadius: 'var(--radius-xl)',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.25rem',
                            backdropFilter: 'blur(30px)',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--shadow-xl)'
                        }}>
                            <div style={{
                                width: '56px',
                                height: '56px',
                                backgroundColor: 'var(--accent)',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: 'white',
                                boxShadow: '0 0 20px rgba(139, 92, 246, 0.3)'
                            }}>
                                <Award size={28} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '800', fontSize: '1.1rem', fontFamily: "'Montserrat', sans-serif" }}>Top Rated 2025</p>
                                <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: '600' }}>Independent Marketplace Awards</p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Values Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Our Core <span style={{ color: 'var(--primary)' }}>Values</span></h2>
                    <p style={{ color: 'var(--text-muted)' }}>What drives us to build the world's best service marketplace.</p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '6rem' }}>
                    {[
                        { icon: <ShieldCheck size={32} />, title: "Trust & Safety", desc: "We prioritize the security of our community through rigorous verification and secure payments.", color: "#10B981" },
                        { icon: <Users size={32} />, title: "Community First", desc: "We build for both providers and users, ensuring a fair and thriving ecosystem for everyone.", color: "#06B6D4" },
                        { icon: <Target size={32} />, title: "Excellence", desc: "We strive for the highest quality in every service interaction and platform feature.", color: "#8B5CF6" },
                        { icon: <Heart size={32} />, title: "Human Connection", desc: "At the end of the day, we are people helping people solve real-world problems.", color: "#F43F5E" }
                    ].map((value, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                            className="glass-card"
                            style={{
                                padding: '3.5rem 2.5rem',
                                borderRadius: 'var(--radius-2xl)',
                                textAlign: 'center',
                                backdropFilter: 'blur(30px)',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)'
                            }}
                        >
                            <div style={{
                                color: value.color,
                                marginBottom: '2rem',
                                display: 'flex',
                                justifyContent: 'center',
                                background: `${value.color}15`,
                                width: '70px',
                                height: '70px',
                                borderRadius: '50%',
                                alignItems: 'center',
                                margin: '0 auto 2rem',
                                boxShadow: `0 0 25px ${value.color}25`
                            }}>{value.icon}</div>
                            <h3 style={{
                                marginBottom: '1.25rem',
                                fontSize: '1.5rem',
                                fontWeight: '800',
                                fontFamily: "'Montserrat', sans-serif"
                            }}>{value.title}</h3>
                            <p style={{
                                color: 'var(--text-muted)',
                                fontSize: '1rem',
                                lineHeight: '1.7',
                                fontWeight: '500'
                            }}>{value.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <div
                    className="glass-card"
                    style={{
                        padding: '6rem 4rem',
                        borderRadius: 'var(--radius-3xl)',
                        textAlign: 'center',
                        backdropFilter: 'blur(40px)',
                        background: 'var(--glass-bg)',
                        border: '1px solid var(--glass-border)',
                        position: 'relative',
                        overflow: 'hidden'
                    }}
                >
                    {/* Background Accents */}
                    <div style={{ position: 'absolute', top: '-100px', left: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(6, 182, 212, 0.15) 0%, transparent 70%)', zIndex: 0 }} />
                    <div style={{ position: 'absolute', bottom: '-100px', right: '-100px', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)', zIndex: 0 }} />

                    <h2 style={{
                        fontSize: '3rem',
                        marginBottom: '1.5rem',
                        fontWeight: '900',
                        fontFamily: "'Montserrat', sans-serif",
                        position: 'relative',
                        zIndex: 1
                    }}> Join the <span className="text-gradient-primary">ServiceHub</span> Family</h2>
                    <p style={{
                        fontSize: '1.25rem',
                        marginBottom: '3rem',
                        color: 'var(--text-muted)',
                        maxWidth: '700px',
                        margin: '0 auto 3rem',
                        fontWeight: '500',
                        lineHeight: 1.6,
                        position: 'relative',
                        zIndex: 1
                    }}>
                        Whether you're looking for help or looking to grow your business, we're here to help you succeed.
                    </p>
                    <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', position: 'relative', zIndex: 1 }}>
                        <button className="btn-primary" style={{ padding: '1.25rem 3rem', borderRadius: 'var(--radius-full)', fontWeight: '800', fontSize: '1.1rem', boxShadow: '0 10px 30px rgba(6, 182, 212, 0.3)' }}>
                            Explore Services
                        </button>
                        <button
                            className="btn-secondary"
                            style={{
                                padding: '1.25rem 3rem',
                                borderRadius: 'var(--radius-full)',
                                fontWeight: '800',
                                fontSize: '1.1rem',
                                background: 'transparent',
                                border: '2px solid var(--primary)',
                                color: 'var(--primary)'
                            }}
                        >
                            Become a Provider
                        </button>
                    </div>
                </div>
            </div>
            <style>{`
        @media (max-width: 991px) {
          .about-hero { grid-template-columns: 1fr !important; gap: 3rem !important; }
        }
      `}</style>
        </div>
    );
};

export default About;
