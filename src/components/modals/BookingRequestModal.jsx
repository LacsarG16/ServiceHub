import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { Calendar, Clock, DollarSign, FileText, Upload, ChevronRight, ChevronLeft, CheckCircle, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useBooking } from '../../context/BookingContext';

const BookingRequestModal = ({ isOpen, onClose, service, provider }) => {
    const { createBooking } = useBooking();
    const [step, setStep] = useState(1);
    const [bookingType, setBookingType] = useState('fixed'); // 'fixed' or 'quote'
    const [formData, setFormData] = useState({
        serviceId: service?.id || '',
        addons: [],
        budgetRange: [1000, 5000],
        description: '',
        date: '',
        time: '',
        message: '',
        files: []
    });

    React.useEffect(() => {
        if (service?.type === 'custom') {
            setBookingType('quote');
        } else {
            setBookingType('fixed');
        }
    }, [service]);

    const handleNext = () => setStep(prev => prev + 1);
    const handleBack = () => setStep(prev => prev - 1);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create booking using BookingContext
        const newBooking = createBooking({
            service: service?.name || 'Service',
            serviceId: service?.id,
            provider: provider?.name || 'Provider',
            providerId: provider?.id,
            customer: 'Current User', // TODO: Get from AuthContext
            type: bookingType,
            price: service?.price || 0,
            date: formData.date,
            time: formData.time,
            addons: formData.addons,
            budgetRange: bookingType === 'quote' ? formData.budgetRange : null,
            description: formData.description,
            message: formData.message,
            files: formData.files
        });

        const event = new CustomEvent('show-toast', {
            detail: {
                message: `Booking request sent successfully! Reference: ${newBooking.id.slice(-8)}`,
                type: 'success'
            }
        });
        window.dispatchEvent(event);

        onClose();
        setStep(1);

        // Reset form
        setFormData({
            serviceId: service?.id || '',
            addons: [],
            budgetRange: [1000, 5000],
            description: '',
            date: '',
            time: '',
            message: '',
            files: []
        });
    };

    const inputStyle = {
        width: '100%',
        padding: '1rem',
        borderRadius: 'var(--radius-xl)',
        background: 'var(--background)',
        border: '1px solid var(--glass-border)',
        color: 'var(--text-main)',
        fontSize: '1rem',
        outline: 'none',
        transition: 'all 0.3s ease'
    };

    const labelStyle = {
        display: 'block',
        fontSize: '0.9rem',
        fontWeight: '600',
        color: 'var(--text-muted)',
        marginBottom: '0.5rem',
        marginLeft: '0.25rem'
    };

    const cardStyle = {
        background: 'var(--glass-bg)',
        border: '1px solid var(--glass-border)',
        borderRadius: 'var(--radius-2xl)',
        padding: '1.5rem',
        backdropFilter: 'blur(20px)'
    };

    const renderStep1 = () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{
                ...cardStyle,
                background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.05) 0%, rgba(147, 51, 234, 0.05) 100%)',
                border: '1px solid rgba(59, 130, 246, 0.1)'
            }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <div>
                        <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.25rem' }}>{service?.name || 'Selected Service'}</h3>
                        <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{bookingType === 'fixed' ? 'Fixed Rate Service' : 'Custom Quote Required'}</p>
                    </div>
                    {bookingType === 'fixed' && (
                        <div style={{ textAlign: 'right' }}>
                            <span style={{ display: 'block', fontSize: '1.5rem', fontWeight: '900', color: 'var(--primary)' }}>R {service?.price || '1,200'}</span>
                            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>per session</span>
                        </div>
                    )}
                </div>
            </div>

            {bookingType === 'quote' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <div>
                        <label style={labelStyle}>Estimated Budget Range</label>
                        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>R</span>
                                <input
                                    type="number"
                                    placeholder="Min"
                                    style={{ ...inputStyle, paddingLeft: '2rem' }}
                                />
                            </div>
                            <span style={{ color: 'var(--text-muted)' }}>-</span>
                            <div style={{ position: 'relative', flex: 1 }}>
                                <span style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', fontSize: '0.9rem' }}>R</span>
                                <input
                                    type="number"
                                    placeholder="Max"
                                    style={{ ...inputStyle, paddingLeft: '2rem' }}
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <label style={labelStyle}>Project Requirements</label>
                        <textarea
                            style={{ ...inputStyle, minHeight: '120px', resize: 'vertical' }}
                            placeholder="Describe your needs in detail..."
                            value={formData.description}
                            onChange={e => setFormData({ ...formData, description: e.target.value })}
                        />
                    </div>

                    <div>
                        <label style={labelStyle}>Attachments (Optional)</label>
                        <div style={{
                            border: '2px dashed var(--glass-border)',
                            borderRadius: 'var(--radius-xl)',
                            padding: '2rem',
                            textAlign: 'center',
                            cursor: 'pointer',
                            background: 'rgba(255, 255, 255, 0.05)',
                            transition: 'all 0.2s'
                        }} className="hover-lift">
                            <Upload style={{ margin: '0 auto 0.5rem', color: 'var(--text-muted)' }} size={24} />
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Click to upload files or drag and drop</p>
                        </div>
                    </div>
                </div>
            )}

            {bookingType === 'fixed' && (
                <div>
                    <label style={labelStyle}>Add-ons</label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {['Deep Clean (+R 300)', 'Eco-friendly Products (+R 150)'].map((addon, i) => (
                            <label key={i} style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem',
                                borderRadius: 'var(--radius-xl)',
                                border: '1px solid var(--glass-border)',
                                background: 'var(--background)',
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }} className="hover-lift">
                                <input type="checkbox" style={{ width: '20px', height: '20px', accentColor: 'var(--primary)' }} />
                                <span style={{ color: 'var(--text-main)', fontWeight: '600' }}>{addon}</span>
                            </label>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );

    const renderStep2 = () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '1.5rem' }}>Choose Date & Time</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                    <div>
                        <label style={labelStyle}>Date</label>
                        <input
                            type="date"
                            style={inputStyle}
                            value={formData.date}
                            onChange={e => setFormData({ ...formData, date: e.target.value })}
                        />
                    </div>
                    <div>
                        <label style={labelStyle}>Time Slot</label>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                            {['09:00', '11:00', '14:00', '16:00'].map(time => (
                                <button
                                    key={time}
                                    type="button"
                                    onClick={() => setFormData({ ...formData, time })}
                                    style={{
                                        padding: '0.75rem',
                                        borderRadius: 'var(--radius-lg)',
                                        fontSize: '0.9rem',
                                        fontWeight: '600',
                                        background: formData.time === time ? 'var(--primary)' : 'var(--background)',
                                        color: formData.time === time ? 'white' : 'var(--text-muted)',
                                        boxShadow: formData.time === time ? '0 4px 12px rgba(6, 182, 212, 0.4)' : 'none',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s',
                                        border: formData.time === time ? 'none' : '1px solid var(--glass-border)'
                                    }}
                                >
                                    {time}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {bookingType === 'quote' && (
                <div style={{
                    padding: '1rem',
                    borderRadius: 'var(--radius-xl)',
                    background: 'rgba(249, 115, 22, 0.1)',
                    border: '1px solid rgba(249, 115, 22, 0.2)',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '0.75rem'
                }}>
                    <AlertCircle size={18} color="#f97316" style={{ marginTop: '2px' }} />
                    <p style={{ fontSize: '0.9rem', color: '#c2410c', lineHeight: '1.5' }}>Dates for custom quotes are tentative. The provider will confirm availability in their final proposal.</p>
                </div>
            )}
        </div>
    );

    const renderStep3 = () => (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={cardStyle}>
                <h4 style={{ fontSize: '1.1rem', fontWeight: '800', color: 'var(--text-main)', paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)', marginBottom: '1rem' }}>Request Summary</h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                        <span style={{ color: 'var(--text-muted)', flex: 1 }}>Service</span>
                        <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{service?.name || 'Standard Service'}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.95rem' }}>
                        <span style={{ color: 'var(--text-muted)', flex: 1 }}>Date & Time</span>
                        <span style={{ fontWeight: '600', color: 'var(--text-main)' }}>{formData.date || 'Flexible'} {formData.time && `at ${formData.time}`}</span>
                    </div>
                    {bookingType === 'fixed' && (
                        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1rem', paddingTop: '1rem', marginTop: '0.5rem', borderTop: '1px solid var(--glass-border)' }}>
                            <span style={{ fontWeight: '800', color: 'var(--text-main)', flex: 1 }}>Total Estimated</span>
                            <span style={{ fontWeight: '800', color: 'var(--primary)' }}>R {service?.price || '1,200'}</span>
                        </div>
                    )}
                </div>
            </div>

            <div>
                <label style={labelStyle}>Message to Provider</label>
                <textarea
                    style={{ ...inputStyle, minHeight: '100px', resize: 'none' }}
                    defaultValue={`Hi ${provider?.name || 'there'}, I'm interested in this service. Looking forward to your response!`}
                />
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={bookingType === 'fixed' ? 'Book Service' : 'Request Quote'}
            footer={
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {step > 1 && (
                        <button
                            type="button"
                            onClick={handleBack}
                            className="hover-lift"
                            style={{
                                padding: '0.75rem 1.5rem',
                                borderRadius: 'var(--radius-xl)',
                                background: 'transparent',
                                border: '1px solid var(--glass-border)',
                                color: 'var(--text-main)',
                                fontWeight: '600',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                cursor: 'pointer'
                            }}
                        >
                            <ChevronLeft size={18} /> Back
                        </button>
                    )}
                    <button
                        type={step === 3 ? 'submit' : 'button'}
                        form="booking-form"
                        onClick={step === 3 ? undefined : handleNext}
                        className="btn-primary hover-lift"
                        style={{
                            flex: 1,
                            padding: '1rem',
                            borderRadius: 'var(--radius-xl)',
                            fontSize: '1rem',
                            fontWeight: '700',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem'
                        }}
                    >
                        {step === 3
                            ? (bookingType === 'fixed' ? 'Submit Booking Request' : 'Send Quote Request')
                            : 'Continue'
                        }
                        {step !== 3 && <ChevronRight size={18} />}
                    </button>
                </div>
            }
        >
            <div style={{ marginTop: '0.5rem' }}>
                {/* Steps Indicator */}
                <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem', padding: '0 0.5rem' }}>
                    {/* Background Line */}
                    <div style={{ position: 'absolute', top: '16px', left: '20px', right: '20px', height: '2px', background: 'var(--glass-border)', zIndex: 0 }} />

                    {/* Active Line (Animated) */}
                    <motion.div
                        initial={{ width: '0%' }}
                        animate={{ width: `${((step - 1) / 2) * 100}%` }}
                        style={{ position: 'absolute', top: '16px', left: '20px', height: '2px', background: 'var(--primary)', zIndex: 1, maxWidth: 'calc(100% - 40px)' }}
                    />

                    {[1, 2, 3].map((s) => (
                        <div key={s} style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
                            <div style={{
                                width: '32px',
                                height: '32px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                fontSize: '0.9rem',
                                fontWeight: '700',
                                background: s <= step ? 'var(--primary)' : 'var(--background)',
                                color: s <= step ? 'white' : 'var(--text-muted)',
                                border: s <= step ? 'none' : '1px solid var(--glass-border)',
                                boxShadow: s <= step ? '0 0 15px rgba(6, 182, 212, 0.4)' : 'none',
                                transition: 'all 0.3s'
                            }}>
                                {s < step ? <CheckCircle size={16} /> : s}
                            </div>
                            <span style={{ fontSize: '0.8rem', fontWeight: '600', color: s <= step ? 'var(--primary)' : 'var(--text-muted)' }}>
                                {s === 1 ? 'Details' : s === 2 ? 'Date' : 'Confirm'}
                            </span>
                        </div>
                    ))}
                </div>

                <form onSubmit={handleSubmit} id="booking-form">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={step}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -20 }}
                            transition={{ duration: 0.3, ease: 'easeOut' }}
                        >
                            {step === 1 && renderStep1()}
                            {step === 2 && renderStep2()}
                            {step === 3 && renderStep3()}
                        </motion.div>
                    </AnimatePresence>
                </form>
            </div>
        </Modal>
    );
};

export default BookingRequestModal;
