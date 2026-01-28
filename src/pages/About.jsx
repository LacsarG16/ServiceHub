import React from 'react';
import { Target, Users, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <div style={{ padding: '120px 0 80px' }}>
            <div className="container">
                {/* Hero Section */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }} className="about-hero">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                    >
                        <span className="accent-badge" style={{ marginBottom: '1rem', display: 'inline-block' }}>OUR MISSION</span>
                        <h1 style={{ fontSize: '3rem', marginBottom: '1.5rem', lineHeight: '1.1' }}>Bridging the gap between <span style={{ color: 'var(--primary)' }}>talent</span> and <span style={{ color: 'var(--secondary)' }}>need</span>.</h1>
                        <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: '1.8', marginBottom: '2rem' }}>
                            ServiceHub was founded on a simple idea: finding trusted help should be as easy as booking a hotel. We've built a platform that empowers local professionals and simplifies the lives of our users.
                        </p>
                        <div style={{ display: 'flex', gap: '2rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2rem', color: 'var(--primary)' }}>50k+</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Verified Providers</p>
                            </div>
                            <div>
                                <h3 style={{ fontSize: '2rem', color: 'var(--secondary)' }}>200k+</h3>
                                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Satisfied Users</p>
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
                        <div className="glass" style={{ position: 'absolute', bottom: '-20px', left: '-20px', padding: '1.5rem', borderRadius: 'var(--radius-md)', display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <div style={{ width: '50px', height: '50px', backgroundColor: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <Award size={24} />
                            </div>
                            <div>
                                <p style={{ fontWeight: '700', fontSize: '1.1rem' }}>Top Rated 2025</p>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Independent Marketplace Awards</p>
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
                        { icon: <ShieldCheck size={32} />, title: "Trust & Safety", desc: "We prioritize the security of our community through rigorous verification and secure payments." },
                        { icon: <Users size={32} />, title: "Community First", desc: "We build for both providers and users, ensuring a fair and thriving ecosystem for everyone." },
                        { icon: <Target size={32} />, title: "Excellence", desc: "We strive for the highest quality in every service interaction and platform feature." },
                        { icon: <Heart size={32} />, title: "Human Connection", desc: "At the end of the day, we are people helping people solve real-world problems." }
                    ].map((value, i) => (
                        <div key={i} className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>{value.icon}</div>
                            <h3 style={{ marginBottom: '1rem' }}>{value.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{value.desc}</p>
                        </div>
                    ))}
                </div>

                {/* CTA Section */}
                <div style={{ background: 'var(--primary)', padding: '5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center', color: 'white' }}>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Join the ServiceHub Family</h2>
                    <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: 0.9, maxWidth: '600px', margin: '0 auto 2.5rem' }}>
                        Whether you're looking for help or looking to grow your business, we're here to help you succeed.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                        <button style={{ backgroundColor: 'white', color: 'var(--primary)', padding: '1rem 2.5rem', borderRadius: 'var(--radius-md)', fontWeight: '700' }}>
                            Explore Services
                        </button>
                        <button style={{ backgroundColor: 'rgba(255,255,255,0.1)', border: '1px solid white', color: 'white', padding: '1rem 2.5rem', borderRadius: 'var(--radius-md)', fontWeight: '700' }}>
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
