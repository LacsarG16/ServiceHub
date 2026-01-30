import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const Drawer = ({ isOpen, onClose, title, children }) => {
    return (
        <AnimatePresence>
            {isOpen && (
                <div style={{ position: 'fixed', inset: 0, zIndex: 100, display: 'flex', justifyContent: 'flex-end' }}>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        style={{ position: 'absolute', inset: 0, background: 'rgba(15, 23, 42, 0.2)', backdropFilter: 'blur(4px)' }}
                    />

                    {/* Drawer Content */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'relative',
                            width: '100%',
                            maxWidth: '400px',
                            height: '100%',
                            background: 'white',
                            boxShadow: '-10px 0 15px -3px rgb(0 0 0 / 0.1)',
                            display: 'flex',
                            flexDirection: 'column'
                        }}
                    >
                        {/* Header */}
                        <div style={{ padding: '1.5rem', borderBottom: '1px solid #f1f5f9', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ fontSize: '1.25rem', fontWeight: '700' }}>{title}</h3>
                            <button onClick={onClose} style={{ padding: '0.5rem', borderRadius: '50%', background: '#f8fafc', color: 'var(--text-muted)' }}>
                                <X size={20} />
                            </button>
                        </div>

                        {/* Body */}
                        <div style={{ flex: 1, padding: '1.5rem', overflowY: 'auto' }}>
                            {children}
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default Drawer;
