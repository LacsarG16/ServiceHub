import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, MessageSquare, ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{ borderBottom: '1px solid #e2e8f0', marginBottom: '1rem' }}>
            <button
                onClick={() => setIsOpen(!isOpen)}
                style={{
                    width: '100%',
                    padding: '1.5rem 0',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    background: 'none',
                    textAlign: 'left'
                }}
            >
                <span style={{ fontWeight: '600', fontSize: '1.1rem' }}>{question}</span>
                {isOpen ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        style={{ overflow: 'hidden' }}
                    >
                        <p style={{ color: 'var(--text-muted)', paddingBottom: '1.5rem', lineHeight: '1.6' }}>{answer}</p>
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
        <div style={{ padding: '120px 0 80px' }}>
            <div className="container">
                {/* Header Section */}
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Get in <span style={{ color: 'var(--primary)' }}>Touch</span></h1>
                    <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
                        Have questions about ServiceHub? Our team is here to help you find the right provider or grow your business.
                    </p>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '3rem' }} className="contact-grid">
                    {/* Contact Info & Form */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ marginBottom: '2rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                                <MessageSquare size={24} color="var(--primary)" /> Send us a Message
                            </h3>

                            {submitted ? (
                                <div style={{ backgroundColor: 'rgba(20, 184, 166, 0.1)', color: 'var(--secondary)', padding: '1.5rem', borderRadius: 'var(--radius-md)', textAlign: 'center', fontWeight: '600' }}>
                                    Thank you! Your message has been sent successfully. We'll get back to you soon.
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.25rem' }}>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Full Name</label>
                                            <input required type="text" placeholder="John Doe" style={{ padding: '0.85rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)' }} />
                                        </div>
                                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                            <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Email Address</label>
                                            <input required type="email" placeholder="john@example.com" style={{ padding: '0.85rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)' }} />
                                        </div>
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Subject</label>
                                        <input required type="text" placeholder="How can we help?" style={{ padding: '0.85rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)' }} />
                                    </div>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                        <label style={{ fontSize: '0.9rem', fontWeight: '600' }}>Message</label>
                                        <textarea required placeholder="Tell us more about your inquiry..." rows="5" style={{ padding: '0.85rem', border: '1px solid #e2e8f0', borderRadius: 'var(--radius-md)', resize: 'none' }}></textarea>
                                    </div>
                                    <button type="submit" className="btn-primary" style={{ justifyContent: 'center', padding: '1rem' }}>
                                        Send Inquiry <Send size={18} />
                                    </button>
                                </form>
                            )}
                        </div>

                        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                                <Phone size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>Call Us</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>+1 (555) 000-0000</p>
                            </div>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                                <Mail size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>Email Us</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>hello@servicehub.com</p>
                            </div>
                            <div className="glass" style={{ padding: '1.5rem', borderRadius: 'var(--radius-lg)', textAlign: 'center' }}>
                                <MapPin size={24} color="var(--primary)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ marginBottom: '0.5rem' }}>Visit Us</h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>123 Service Way, SF</p>
                            </div>
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

                        <div className="glass" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
                            <h3 style={{ marginBottom: '1.5rem' }}>Frequently Asked Questions</h3>
                            <div>
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
      `}</style>
        </div>
    );
};

export default Contact;
