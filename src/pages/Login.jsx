import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { motion } from 'framer-motion';
import { User, Briefcase, ChevronRight, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import toast from 'react-hot-toast';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        role: 'CUSTOMER' // Default
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setIsLoading(true);

        try {
            const data = await login(formData.email, formData.password);

            if (data.role === 'PROVIDER') {
                navigate('/dashboard');
            } else {
                navigate('/directory');
            }
        } catch (error) {
            // Error is already handled by AuthContext toast
            console.error('Login error:', error);
        } finally {
            setIsLoading(false);
        }
    };

    const setRole = (role) => {
        setFormData({ ...formData, role });
        // Auto-fill test credentials for convenience during development
        if (role === 'CUSTOMER') {
            setFormData({ ...formData, role, email: 'alex@example.com', password: 'password123' });
        } else {
            setFormData({ ...formData, role, email: 'john@example.com', password: 'password123' });
        }
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
                    maxWidth: '1000px',
                    width: '100%',
                    padding: '3rem',
                    borderRadius: 'var(--radius-3xl)',
                    backdropFilter: 'blur(40px)',
                    background: 'var(--glass-bg)',
                    border: '1px solid var(--glass-border)',
                    boxShadow: 'var(--shadow-2xl)',
                    display: 'grid',
                    gridTemplateColumns: '1.2fr 1fr',
                    gap: '3rem',
                    position: 'relative',
                    overflow: 'hidden'
                }}
            >
                {/* Left Side: Info & Role Selection */}
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
                        fontSize: '2.5rem',
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
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.6', marginBottom: '2rem' }}>
                        Select your account type and enter your credentials to access your dashboard.
                    </p>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
                        <button
                            onClick={() => setRole('CUSTOMER')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem',
                                borderRadius: '16px',
                                background: formData.role === 'CUSTOMER' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                border: `2px solid ${formData.role === 'CUSTOMER' ? 'var(--primary)' : 'var(--glass-border)'}`,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <div style={{ color: formData.role === 'CUSTOMER' ? 'var(--primary)' : 'var(--text-muted)' }}>
                                <User size={24} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>Customer Account</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Find and book services</div>
                            </div>
                        </button>

                        <button
                            onClick={() => setRole('PROVIDER')}
                            style={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: '1rem',
                                padding: '1rem',
                                borderRadius: '16px',
                                background: formData.role === 'PROVIDER' ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                                border: `2px solid ${formData.role === 'PROVIDER' ? 'var(--primary)' : 'var(--glass-border)'}`,
                                cursor: 'pointer',
                                transition: 'all 0.2s'
                            }}
                        >
                            <div style={{ color: formData.role === 'PROVIDER' ? 'var(--primary)' : 'var(--text-muted)' }}>
                                <Briefcase size={24} />
                            </div>
                            <div style={{ textAlign: 'left' }}>
                                <div style={{ fontWeight: '700', color: 'var(--text-main)' }}>Service Provider</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Manage your business</div>
                            </div>
                        </button>
                    </div>

                    <div style={{ display: 'flex', gap: '0.5rem', marginTop: 'auto' }}>
                        <span style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>Don't have an account?</span>
                        <a href="#" style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--primary)', textDecoration: 'none' }}>Sign Up</a>
                    </div>
                </div>

                {/* Right Side: Login Form */}
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1.5rem',
                    justifyContent: 'center',
                    padding: '2rem',
                    background: 'rgba(255, 255, 255, 0.3)',
                    borderRadius: '24px',
                    border: '1px solid var(--glass-border)'
                }}>
                    <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>Email Address</label>
                            <div style={{ position: 'relative' }}>
                                <Mail size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="john@example.com"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem 0.8rem 3rem',
                                        borderRadius: '12px',
                                        background: 'var(--white)',
                                        border: '1px solid var(--glass-border)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                />
                            </div>
                        </div>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                            <label style={{ fontSize: '0.9rem', fontWeight: '600', color: 'var(--text-main)' }}>Password</label>
                            <div style={{ position: 'relative' }}>
                                <Lock size={18} style={{ position: 'absolute', left: '1rem', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                                <input
                                    type={showPassword ? 'text' : 'password'}
                                    name="password"
                                    value={formData.password}
                                    onChange={handleChange}
                                    required
                                    placeholder="••••••••"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 3rem 0.8rem 3rem',
                                        borderRadius: '12px',
                                        background: 'var(--white)',
                                        border: '1px solid var(--glass-border)',
                                        fontSize: '1rem',
                                        outline: 'none',
                                        transition: 'border-color 0.2s'
                                    }}
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    style={{
                                        position: 'absolute',
                                        right: '1rem',
                                        top: '50%',
                                        transform: 'translateY(-50%)',
                                        background: 'none',
                                        border: 'none',
                                        cursor: 'pointer',
                                        color: 'var(--text-muted)'
                                    }}
                                >
                                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                            <a href="#" style={{ fontSize: '0.85rem', color: 'var(--primary)', textDecoration: 'none' }}>Forgot Password?</a>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.01 }}
                            whileTap={{ scale: 0.99 }}
                            type="submit"
                            disabled={isLoading}
                            style={{
                                padding: '1rem',
                                borderRadius: '12px',
                                background: 'var(--primary)',
                                color: 'white',
                                border: 'none',
                                fontWeight: '700',
                                fontSize: '1rem',
                                cursor: 'pointer',
                                marginTop: '1rem',
                                position: 'relative',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                gap: '0.5rem',
                                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
                            }}
                        >
                            {isLoading ? (
                                <div className="spinner" style={{ width: '20px', height: '20px', border: '2px solid rgba(255,255,255,0.3)', borderRadius: '50%', borderTopColor: 'white', animation: 'spin 0.8s linear infinite' }}></div>
                            ) : (
                                <>Sign In <ChevronRight size={18} /></>
                            )}
                        </motion.button>
                    </form>
                </div>
            </motion.div>
            <style>{`
                @media (max-width: 900px) {
                    .glass-card { grid-template-columns: 1fr !important; gap: 2rem !important; padding: 2rem !important; }
                }
                @keyframes spin { to { transform: rotate(360deg); } }
                input:focus { border-color: var(--primary) !important; }
            `}</style>
        </div>
    );
};

export default Login;
