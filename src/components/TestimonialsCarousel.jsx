import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import AnimatedSection from './AnimatedSection';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Johnson',
        role: 'Homeowner',
        image: '👩‍💼',
        rating: 5,
        text: 'ServiceHub made finding a reliable plumber so easy! Booked in minutes and the service was exceptional.'
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Business Owner',
        image: '👨‍💼',
        rating: 5,
        text: 'As a service provider, this platform has tripled my bookings. The interface is intuitive and professional.'
    },
    {
        id: 3,
        name: 'Emily Rodriguez',
        role: 'Property Manager',
        image: '👩‍🔧',
        rating: 5,
        text: 'Managing multiple properties is now a breeze. I can find trusted professionals for any job instantly.'
    }
];

const TestimonialsCarousel = ({ autoPlay = true, interval = 5000 }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(1);

    useEffect(() => {
        if (!autoPlay) return;

        const timer = setInterval(() => {
            setDirection(1);
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, interval);

        return () => clearInterval(timer);
    }, [autoPlay, interval]);

    const handlePrevious = () => {
        setDirection(-1);
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const handleNext = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const variants = {
        enter: (direction) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            x: 0,
            opacity: 1
        },
        exit: (direction) => ({
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    return (
        <AnimatedSection animation="fadeUp" style={{ padding: '80px 0' }}>
            <div className="container">
                <h2 style={{
                    fontSize: '2.5rem',
                    textAlign: 'center',
                    marginBottom: '3rem',
                    fontWeight: '800'
                }}>
                    What Our Users Say
                </h2>

                <div style={{ position: 'relative', maxWidth: '800px', margin: '0 auto' }}>
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: 'spring', stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            style={{
                                padding: '3rem',
                                textAlign: 'center',
                                borderRadius: 'var(--radius-xl)',
                                backdropFilter: 'blur(30px)',
                                background: 'var(--glass-bg)',
                                border: '1px solid var(--glass-border)',
                                boxShadow: '0 15px 35px rgba(6, 182, 212, 0.15), 0 0 20px rgba(6, 182, 212, 0.05)'
                            }}
                        >
                            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>
                                {testimonials[currentIndex].image}
                            </div>

                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                gap: '0.25rem',
                                marginBottom: '1.5rem'
                            }}>
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <motion.span
                                        key={i}
                                        initial={{ scale: 0, rotate: -180 }}
                                        animate={{ scale: 1, rotate: 0 }}
                                        transition={{ delay: i * 0.1, type: 'spring' }}
                                        style={{ color: '#fbbf24', fontSize: '1.5rem' }}
                                    >
                                        ★
                                    </motion.span>
                                ))}
                            </div>

                            <p style={{
                                fontSize: '1.125rem',
                                lineHeight: '1.8',
                                marginBottom: '1.5rem',
                                color: 'var(--text-muted)',
                                fontStyle: 'italic'
                            }}>
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div>
                                <h4 style={{ fontWeight: '700', marginBottom: '0.25rem' }}>
                                    {testimonials[currentIndex].name}
                                </h4>
                                <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
                                    {testimonials[currentIndex].role}
                                </p>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrevious}
                        style={{
                            position: 'absolute',
                            left: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '1.25rem',
                            color: 'var(--text-main)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 25px rgba(6, 182, 212, 0.2)' }}
                        className="hover-lift"
                    >
                        ←
                    </button>

                    <button
                        onClick={handleNext}
                        style={{
                            position: 'absolute',
                            right: '-60px',
                            top: '50%',
                            transform: 'translateY(-50%)',
                            background: 'var(--glass-bg)',
                            backdropFilter: 'blur(30px)',
                            border: '1px solid var(--glass-border)',
                            borderRadius: '50%',
                            width: '48px',
                            height: '48px',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            cursor: 'pointer',
                            transition: 'all 0.3s ease',
                            fontSize: '1.25rem',
                            color: 'var(--text-main)',
                            boxShadow: '0 4px 15px rgba(0,0,0,0.1)'
                        }}
                        whileHover={{ y: -5, boxShadow: '0 8px 25px rgba(6, 182, 212, 0.2)' }}
                        className="hover-lift"
                    >
                        →
                    </button>

                    {/* Dots Indicator */}
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        gap: '0.5rem',
                        marginTop: '2rem'
                    }}>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                style={{
                                    width: index === currentIndex ? '32px' : '12px',
                                    height: '12px',
                                    borderRadius: '6px',
                                    background: index === currentIndex ? 'var(--primary)' : 'var(--text-muted)',
                                    border: 'none',
                                    cursor: 'pointer',
                                    transition: 'all 0.3s ease',
                                    opacity: index === currentIndex ? 1 : 0.5
                                }}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedSection>
    );
};

export default TestimonialsCarousel;
