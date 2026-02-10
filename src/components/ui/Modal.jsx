import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Modal = ({ isOpen, onClose, title, children, footer }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1rem' }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.3)', backdropFilter: 'blur(20px)' }}
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        className="glass-card stationary-card"
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '600px',
                            overflow: 'hidden',
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid var(--glass-border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{title}</h3>
                            <button onClick={onClose} style={{ padding: '0.5rem', borderRadius: '50%', background: 'rgba(125, 125, 125, 0.1)', color: 'var(--text-muted)', border: '1px solid var(--glass-border)' }}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div style={{ padding: '1.5rem', maxHeight: footer ? 'calc(80vh - 130px)' : '80vh', overflowY: 'auto' }}>
                            {children}
                        </div>

                        {/* Footer */}
                        {footer && (
                            <div style={{ padding: '1.5rem', borderTop: '1px solid var(--glass-border)', background: 'rgba(255, 255, 255, 0.02)' }}>
                                {footer}
                            </div>
                        )}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Modal;
