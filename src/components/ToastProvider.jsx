import React from 'react';
import { Toaster } from 'react-hot-toast';

const ToastProvider = () => {
    return (
        <Toaster
            position="top-right"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                duration: 4000,
                style: {
                    background: 'var(--glass-card-bg)',
                    backdropFilter: 'blur(20px)',
                    color: 'var(--text-main)',
                    border: '1px solid var(--glass-card-border)',
                    borderRadius: 'var(--radius-lg)',
                    boxShadow: 'var(--shadow-premium)',
                    padding: '16px 20px',
                    fontSize: '14px',
                    fontWeight: '500'
                },
                success: {
                    iconTheme: {
                        primary: 'var(--secondary)',
                        secondary: 'white',
                    },
                    style: {
                        borderLeft: '4px solid var(--secondary)'
                    }
                },
                error: {
                    iconTheme: {
                        primary: '#ef4444',
                        secondary: 'white',
                    },
                    style: {
                        borderLeft: '4px solid #ef4444'
                    }
                },
                loading: {
                    iconTheme: {
                        primary: 'var(--primary)',
                        secondary: 'white',
                    }
                }
            }}
        />
    );
};

export default ToastProvider;
