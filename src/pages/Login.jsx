import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Briefcase, ChevronRight, Lock } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(null); // 'customer' | 'provider' | null

    const handleLogin = (type) => {
        setIsLoading(type);

        // Simulate login delay
        setTimeout(() => {
            login(type);
            toast.success(`Welcome back, ${type === 'provider' ? 'Provider' : 'Customer'}!`);

            if (type === 'provider') {
                navigate('/dashboard');
            } else {
                navigate('/directory'); // Temporary until Customer Dashboard is ready
            }
            setIsLoading(null);
        }, 1000);
    };

    return (
        <div style={{
            minHeight: '80vh',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '2rem'
        }}>
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="glass-card"
                style={{
                    maxWidth: '900px',
                    width: '100%',
                    padding: '4rem',
                    borderRadius: 'var(--radius-3xl)',
                    backdropFilter: 'blur(40px)',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-2xl)',
                    display: 'grid',
                    gridTemplateColumns: '1fr 1fr',
                    gap: '4rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Decorative Background Elements */}
                <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(59,130,246,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: -1 }}></div>
                <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '300px', height: '300px', background: 'radial-gradient(circle, rgba(236,72,153,0.15) 0%, rgba(0,0,0,0) 70%)', filter: 'blur(40px)', zIndex: -1 }}></div>

                {/* Left Side: Text */}
                <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                    <div style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '0.5rem',
                        padding: '0.5rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        background: 'rgba(59, 130, 246, 0.1)',
                        color: 'var(--primary)',
                        fontSize: '0.85rem',
                        fontWeight: '700',
                        width: 'fit-content',
                        marginBottom: '1.5rem',
                        border: '1px solid rgba(59, 130, 246, 0.2)'
                    }}>
                        <Lock size={14} /> Secure Access
                    </div>
                    <h1 style={{
                        fontSize: '3rem',
                        fontWeight: '900',
                        fontFamily: "'Montserrat', sans-serif",
                        lineHeight: '1.1',
                        marginBottom: '1rem',
                        background: 'linear-gradient(135deg, var(--text-main) 0%, var(--text-muted) 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                    }}>
                        Welcome Back
                    </h1>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                        Please select your account type to continue to your personalized dashboard.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Don't have an account?</span>
                        <a href="#" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)', textDecoration: 'none' }}>Sign Up</a>
                    </div>
                </div>

                {/* Right Side: Options */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', justifyContent: 'center' }}>

                    {/* Customer Option */}
                    <motion.button
                        whileHover={{ scale: 1.02, translateY: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLogin('customer')}
                        disabled={isLoading !== null}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '1.5rem',
                            borderRadius: '24px',
                            background: 'var(--white)',
                            border: '1px solid var(--glass-border)',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: 'var(--shadow-md)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '16px',
                            background: 'rgba(16, 185, 129, 0.1)',
                            color: '#10b981',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <User size={28} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '4px' }}>Customer</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Find services and manage bookings</p>
                        </div>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'var(--background)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-muted)'
                        }}>
                            {isLoading === 'customer' ? <div className="spinner" style={{ width: '16px', height: '16px', border: '2px solid', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }}></div> : <ChevronRight size={18} />}
                        </div>
                    </motion.button>

                    {/* Provider Option */}
                    <motion.button
                        whileHover={{ scale: 1.02, translateY: -2 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleLogin('provider')}
                        disabled={isLoading !== null}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '1.5rem',
                            padding: '1.5rem',
                            borderRadius: '24px',
                            background: 'var(--white)',
                            border: '1px solid var(--glass-border)',
                            cursor: isLoading ? 'not-allowed' : 'pointer',
                            textAlign: 'left',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            boxShadow: 'var(--shadow-md)',
                            position: 'relative',
                            overflow: 'hidden'
                        }}
                    >
                        <div style={{
                            width: '60px',
                            height: '60px',
                            borderRadius: '16px',
                            background: 'rgba(59, 130, 246, 0.1)',
                            color: 'var(--primary)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            <Briefcase size={28} />
                        </div>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.2rem', fontWeight: '800', color: 'var(--text-main)', marginBottom: '4px' }}>Service Provider</h3>
                            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Manage your business and clients</p>
                        </div>
                        <div style={{
                            width: '32px',
                            height: '32px',
                            borderRadius: '50%',
                            background: 'var(--background)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: 'var(--text-muted)'
                        }}>
                            {isLoading === 'provider' ? <div className="spinner" style={{ width: '16px', height: '16px', border: '2px solid', borderRadius: '50%', borderTopColor: 'transparent', animation: 'spin 1s linear infinite' }}></div> : <ChevronRight size={18} />}
                        </div>
                    </motion.button>
                </div>
            </motion.div>
            <style>{`
                @media (max-width: 900px) {
                    .glass-card { grid-template-columns: 1fr !important; gap: 2rem !important; padding: 2rem !important; }
                }
                @keyframes spin { to { transform: rotate(360deg); } }
            `}</style>
        </div>
    );
};

export default Login;
