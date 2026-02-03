import React, { useState } from 'react';
import Modal from '../ui/Modal';
import { CreditCard, Lock, CheckCircle, Shield } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const DepositPaymentModal = ({ isOpen, onClose, booking }) => {
    const [isProcessing, setIsProcessing] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    const depositAmount = booking?.price ? Math.round(booking.price * 0.3) : 360; // 30% deposit
    const remainingAmount = booking?.price ? booking.price - depositAmount : 840;

    const handlePayment = (e) => {
        e.preventDefault();
        setIsProcessing(true);

        // Simulate payment processing
        setTimeout(() => {
            setIsProcessing(false);
            setShowSuccess(true);

            // Trigger confirmation after showing success state
            setTimeout(() => {
                const event = new CustomEvent('payment-completed', { detail: { bookingId: booking?.id } });
                window.dispatchEvent(event);
                onClose();
                setShowSuccess(false);
            }, 2000);
        }, 1500);
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

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title={showSuccess ? 'Payment Successful' : 'Secure Deposit Payment'}
        >
            <AnimatePresence mode="wait">
                {showSuccess ? (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        style={{
                            textAlign: 'center',
                            padding: '4rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            gap: '1.5rem'
                        }}
                    >
                        <div style={{
                            width: '80px',
                            height: '80px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            color: '#10b981',
                            borderRadius: '50%',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            border: '1px solid rgba(16, 185, 129, 0.2)',
                            boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)'
                        }}>
                            <CheckCircle size={40} strokeWidth={3} />
                        </div>
                        <div>
                            <h3 style={{ fontSize: '1.75rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '0.5rem' }}>Deposit Paid!</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem' }}>Your booking has been secured successfully.</p>
                        </div>
                    </motion.div>
                ) : (
                    <form onSubmit={handlePayment} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                        {/* Summary Card */}
                        <div style={{
                            padding: '1.5rem',
                            borderRadius: 'var(--radius-2xl)',
                            background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.05) 0%, rgba(59, 130, 246, 0.05) 100%)',
                            border: '1px solid rgba(6, 182, 212, 0.1)',
                            backdropFilter: 'blur(10px)'
                        }}>
                            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem', paddingBottom: '1rem', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
                                <span style={{ color: 'var(--text-muted)', fontWeight: '500' }}>Total Service Value</span>
                                <span style={{ fontWeight: '800', color: 'var(--text-main)' }}>R {booking?.price || '1,200'}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                <span style={{ color: 'var(--primary)', fontWeight: '700', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                    <Shield size={16} /> 30% Deposit Due
                                </span>
                                <span style={{ color: 'var(--primary)', fontWeight: '800', fontSize: '1.25rem' }}>R {depositAmount}</span>
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                                <span>Remaining Balance</span>
                                <span>R {remainingAmount}</span>
                            </div>
                        </div>

                        {/* Payment Method */}
                        <div>
                            <label style={labelStyle}>Payment Method</label>
                            <div style={{ display: 'flex', gap: '1rem' }}>
                                <button type="button" style={{
                                    flex: 1,
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-xl)',
                                    background: 'rgba(6, 182, 212, 0.1)',
                                    border: '2px solid var(--primary)',
                                    color: 'var(--primary)',
                                    fontWeight: '700',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '0.5rem',
                                    cursor: 'pointer'
                                }}>
                                    <CreditCard size={18} /> Card
                                </button>
                                <button type="button" className="hover-lift" style={{
                                    flex: 1,
                                    padding: '1rem',
                                    borderRadius: 'var(--radius-xl)',
                                    background: 'transparent',
                                    border: '1px solid var(--glass-border)',
                                    color: 'var(--text-muted)',
                                    fontWeight: '600',
                                    cursor: 'pointer'
                                }}>
                                    EFT / Bank
                                </button>
                            </div>
                        </div>

                        {/* Card Inputs */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                            <input
                                type="text"
                                placeholder="Card Number"
                                style={inputStyle}
                            />
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                <input
                                    type="text"
                                    placeholder="MM / YY"
                                    style={inputStyle}
                                />
                                <input
                                    type="text"
                                    placeholder="CVC"
                                    style={inputStyle}
                                />
                            </div>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            disabled={isProcessing}
                            className="btn-primary hover-lift"
                            style={{
                                width: '100%',
                                padding: '1.25rem',
                                borderRadius: 'var(--radius-xl)',
                                fontSize: '1rem',
                                fontWeight: '700',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.75rem',
                                marginTop: '1rem',
                                opacity: isProcessing ? 0.7 : 1,
                                cursor: isProcessing ? 'wait' : 'pointer'
                            }}
                        >
                            {isProcessing ? (
                                <>Processing...</>
                            ) : (
                                <>
                                    <Lock size={18} /> Pay R {depositAmount} Deposit
                                </>
                            )}
                        </button>

                        <p style={{ fontSize: '0.8rem', textAlign: 'center', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}>
                            <Lock size={12} /> Payments are secure and encrypted
                        </p>
                    </form>
                )}
            </AnimatePresence>
        </Modal>
    );
};

export default DepositPaymentModal;
