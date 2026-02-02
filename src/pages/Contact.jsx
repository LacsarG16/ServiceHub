import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid var(--glass-border)', marginBottom: '0.5rem' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.25rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    textAlign: 'left',
                    cursor: 'pointer',
                    color: isOpen ? 'var(--primary)' : 'var(--text-main)',
                    transition: 'color 0.3s ease'
                }}
            >
                <span style={{ fontWeight: '700', fontSize: '1.1rem', fontFamily: "'Montserrat', sans-serif" }}>{question}</span>
                {isOpen ? <ChevronUp size={20} color="var(--primary)" /> : <ChevronDown size={20} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{
                            color: 'var(--text-muted)',
                            paddingBottom: '1.25rem',
                            lineHeight: '1.7',
                            fontSize: '0.95rem',
                            fontWeight: '500'
                        }}>{answer}</p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

const Contact = () => {
    const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const faqs = [
        { question: "How do I book a service?", answer: "To book a service, browse our directory, select a provider that fits your needs, and click the 'Book Now' button on their profile. You can then choose a date and time that works for you." },
        { question: "Are all service providers verified?", answer: "Yes, every provider on ServiceHub goes through a multi-step verification process, including identity checks, professional certifications, and background screening." },
        { question: "What is the cancellation policy?", answer: "Cancellation policies vary by provider but generally allow for a full refund if cancelled at least 24 hours before the appointment. Check the provider's specific profile for their policy." },
        { question: "How do I pay for a service?", answer: "Payments are handled securely through our platform. We accept all major credit cards, Apple Pay, and Google Pay. Providers are only paid after the service is completed." }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 5000);
    };

    return (
        <div style={{ padding: '40px 0 80px' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{
                        fontSize: '3rem',
                        marginBottom: '1rem',
                        fontWeight: '800',
                        fontFamily: "'Montserrat', sans-serif"
                    }}>Get in <span className="text-gradient-primary">Touch</span></h1>
                    <p style={{
                        color: 'var(--text-muted)',
                        fontSize: '1.2rem',
                        maxWidth: '600px',
                        margin: '0 auto',
                        fontWeight: '500'
                    }}>
                        Have questions about ServiceHub? Our team is here to help you find the right provider or grow your business.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="contact-grid">
                    {/* Contact Info & Form */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            padding: '3rem',
                            borderRadius: 'var(--radius-2xl)',
                            backdropFilter: 'blur(30px)',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--shadow-xl)'
                        }}>
                            <h3 style={{
                                marginBottom: '2.5rem',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.75rem',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: '800'
                            }}>
                                <MessageSquare size={24} color="var(--primary)" /> Send us a Message
                            </h3>

                            {submitted ? (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    style={{
                                        background: 'rgba(20, 184, 166, 0.1)',
                                        color: 'var(--secondary)',
                                        padding: '2rem',
                                        borderRadius: 'var(--radius-lg)',
                                        textAlign: 'center',
                                        fontWeight: '700',
                                        border: '1px solid rgba(20, 184, 166, 0.2)'
                                    }}
                                >
                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </motion.div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', marginLeft: '4px' }}>Full Name</label>
                                            <input
                                                required
                                                type="text"
                                                placeholder="John Doe"
                                                style={{
                                                    padding: '1rem',
                                                    background: 'rgba(255, 255, 255, 0.5)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: 'var(--radius-lg)',
                                                    outline: 'none',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                className="form-input-standard"
                                            />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                            <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', marginLeft: '4px' }}>Email Address</label>
                                            <input
                                                required
                                                type="email"
                                                placeholder="john@example.com"
                                                style={{
                                                    padding: '1rem',
                                                    background: 'rgba(255, 255, 255, 0.5)',
                                                    border: '1px solid var(--glass-border)',
                                                    borderRadius: 'var(--radius-lg)',
                                                    outline: 'none',
                                                    transition: 'all 0.3s ease'
                                                }}
                                                className="form-input-standard"
                                            />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', marginLeft: '4px' }}>Subject</label>
                                        <input
                                            required
                                            type="text"
                                            placeholder="How can we help?"
                                            style={{
                                                padding: '1rem',
                                                background: 'rgba(255, 255, 255, 0.5)',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: 'var(--radius-lg)',
                                                outline: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            className="form-input-standard"
                                        />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-main)', marginLeft: '4px' }}>Message</label>
                                        <textarea
                                            required
                                            placeholder="Tell us more about your inquiry..."
                                            rows="5"
                                            style={{
                                                padding: '1rem',
                                                background: 'rgba(255, 255, 255, 0.5)',
                                                border: '1px solid var(--glass-border)',
                                                borderRadius: 'var(--radius-lg)',
                                                resize: 'none',
                                                outline: 'none',
                                                transition: 'all 0.3s ease'
                                            }}
                                            className="form-input-standard"
                                        ></textarea>
                                    </div>
                                    <button
                                        type="submit"
                                        className="btn-primary"
                                        style={{
                                            justifyContent: 'center',
                                            padding: '1.1rem',
                                            borderRadius: 'var(--radius-lg)',
                                            fontWeight: '800',
                                            fontSize: '1.1rem',
                                            marginTop: '0.5rem',
                                            boxShadow: '0 10px 20px rgba(6, 182, 212, 0.2)'
                                        }}
                                    >
                                        Send Inquiry <Send size={20} />
                                    </button>
                                </form>
                            )}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            {[
                                { icon: <Phone size={24} />, title: "Call Us", value: "+1 (555) 000-0000", color: "#06B6D4" },
                                { icon: <Mail size={24} />, title: "Email Us", value: "hello@servicehub.com", color: "#10B981" },
                                { icon: <MapPin size={24} />, title: "Visit Us", value: "123 Service Way, SF", color: "#8B5CF6" }
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    whileHover={{ y: -10 }}
                                    transition={{ type: 'spring', stiffness: 500, damping: 20 }}
                                    className="glass-card"
                                    style={{
                                        padding: '2rem 1.5rem',
                                        borderRadius: 'var(--radius-xl)',
                                        textAlign: 'center',
                                        backdropFilter: 'blur(30px)',
                                        background: 'var(--glass-bg)',
                                        border: '1px solid var(--glass-border)'
                                    }}
                                >
                                    <div style={{
                                        color: item.color,
                                        marginBottom: '1.25rem',
                                        display: 'inline-flex',
                                        padding: '12px',
                                        borderRadius: '12px',
                                        background: `${item.color}15`,
                                        boxShadow: `0 0 20px ${item.color}20`
                                    }}>
                                        {item.icon}
                                    </div>
                                    <h4 style={{
                                        marginBottom: '0.5rem',
                                        fontFamily: "'Montserrat', sans-serif",
                                        fontWeight: '700'
                                    }}>{item.title}</h4>
                                    <p style={{
                                        color: 'var(--text-muted)',
                                        fontSize: '0.95rem',
                                        fontWeight: '500'
                                    }}>{item.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Map & FAQs Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div style={{
                            height: '350px',
                            borderRadius: 'var(--radius-lg)',
                            background: '#e2e8f0',
                            position: 'relative',
                            overflow: 'hidden',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {/* Mock Map Placeholder */}
                            <img
                                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1200"
                                alt="Location Map"
                                style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                            />
                            <div style={{ position: 'absolute', padding: '1rem', background: 'white', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <div style={{ width: '12px', height: '12px', background: 'var(--primary)', borderRadius: '50%' }}></div>
                                <span style={{ fontWeight: '600' }}>Our Headquarters</span>
                            </div>
                        </div>

                        <div style={{
                            padding: '3rem',
                            borderRadius: 'var(--radius-2xl)',
                            backdropFilter: 'blur(30px)',
                            background: 'var(--glass-bg)',
                            border: '1px solid var(--glass-border)',
                            boxShadow: 'var(--shadow-xl)'
                        }}>
                            <h3 style={{
                                marginBottom: '2.5rem',
                                fontFamily: "'Montserrat', sans-serif",
                                fontWeight: '800',
                                fontSize: '1.5rem'
                            }}>Frequently Asked Questions</h3>
                            <div style={{ display: 'flex', flexDirection: 'column' }}>
                                {faqs.map((faq, i) => (
                                    <FAQItem key={i} question={faq.question} answer={faq.answer} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <style>{`
                @media (min-width: 992px) {
                  .contact-grid { grid-template-columns: 1.2fr 0.8fr; }
                }

                .form-input-standard:focus {
                    border-color: var(--primary) !important;
                    background: white !important;
                    box-shadow: 0 0 20px rgba(6, 182, 212, 0.1) !important;
                }
            `}</style>
        </div>
    );
};

export default Contact;
