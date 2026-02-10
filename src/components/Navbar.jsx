import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User, Briefcase, Sun, Moon, Sparkles } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion'; // eslint-disable-line no-unused-vars
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, preset, toggleTheme, setPreset, showAurora, toggleAurora } = useTheme();
  const { userType, logout, isAuthenticated } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Find Services', path: '/directory' },
    { name: 'For Providers', path: '/for-providers' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const isDashboard = location.pathname === '/dashboard';

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500`}
      style={{
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
        background: scrolled ? 'var(--navbar-bg-scrolled)' : 'transparent',
        backdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        WebkitBackdropFilter: scrolled ? 'var(--glass-blur)' : 'none',
        borderBottom: scrolled ? '1px solid var(--navbar-border-scrolled)' : '1px solid transparent',
        boxShadow: scrolled ? '0 12px 40px rgba(0, 0, 0, 0.08)' : 'none'
      }}
    >
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        {/* Brand */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', zIndex: 110 }}>
          <div style={{
            backgroundColor: 'var(--primary)',
            color: 'white',
            padding: '0.5rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)'
          }}>
            <Briefcase size={22} strokeWidth={2.5} />
          </div>
          <span style={{
            fontSize: '1.5rem',
            fontWeight: '800',
            color: 'var(--text-main)',
            letterSpacing: '-1px',
            fontFamily: "'Montserrat', sans-serif"
          }}>
            Service<span style={{ color: 'var(--primary)' }}>Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-links">
          <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }}>
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              // Don't show "For Providers" if logged in as customer
              if (userType === 'customer' && link.path === '/for-providers') return null;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontWeight: '600',
                    fontSize: '0.95rem',
                    color: isActive ? 'var(--primary)' : 'var(--text-main)',
                    position: 'relative',
                    padding: '0.25rem 0'
                  }}
                  className="nav-link"
                >
                  {link.name}
                  <motion.span
                    initial={false}
                    animate={{ width: isActive ? '100%' : '0%' }}
                    style={{
                      position: 'absolute',
                      bottom: '-2px',
                      left: 0,
                      height: '2px',
                      backgroundColor: 'var(--primary)',
                      borderRadius: '2px'
                    }}
                  />
                </Link>
              );
            })}

            {/* Dynamic Auth Section */}
            {!isAuthenticated ? (
              <Link
                to="/login"
                className="btn-primary hover-lift"
                style={{
                  padding: '0.6rem 1.5rem',
                  fontSize: '0.9rem',
                  borderRadius: 'var(--radius-full)',
                  boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
                }}
              >
                <User size={18} /> <span>Login</span>
              </Link>
            ) : (
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                {userType === 'provider' ? (
                  <Link
                    to="/dashboard"
                    className="btn-primary hover-lift"
                    style={{
                      padding: '0.6rem 1.5rem',
                      fontSize: '0.9rem',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <Briefcase size={18} /> <span>Provider Portal</span>
                  </Link>
                ) : (
                  <Link
                    to="/customer-dashboard"
                    className="btn-primary hover-lift"
                    style={{
                      padding: '0.6rem 1.5rem',
                      fontSize: '0.9rem',
                      borderRadius: 'var(--radius-full)',
                      boxShadow: '0 4px 15px rgba(59, 130, 246, 0.2)'
                    }}
                  >
                    <User size={18} /> <span>My Dashboard</span>
                  </Link>
                )}
              </div>
            )}


            <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
              {/* Theme Preset Selector */}
              <div style={{ display: 'flex', gap: '0.4rem', padding: '0.3rem', background: 'rgba(125, 125, 125, 0.05)', borderRadius: '99px', border: '1px solid var(--glass-border)' }}>
                {[
                  { id: 'aurora', color: '#06b6d4' },
                  { id: 'sunset', color: '#f43f5e' },
                  { id: 'ocean', color: '#0ea5e9' },
                  { id: 'forest', color: '#10b981' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPreset(p.id)}
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: p.color,
                      border: preset === p.id ? '2px solid white' : 'none',
                      boxShadow: preset === p.id ? '0 0 10px ' + p.color : 'none',
                      transition: 'all 0.2s',
                      cursor: 'pointer'
                    }}
                    title={p.id.charAt(0).toUpperCase() + p.id.slice(1)}
                  />
                ))}
              </div>

              <button
                onClick={toggleTheme}
                style={{
                  background: 'rgba(125, 125, 125, 0.1)',
                  border: '1px solid var(--glass-border)',
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--text-main)',
                  backdropFilter: 'blur(10px)'
                }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
              </button>

              <button
                onClick={toggleAurora}
                title={showAurora ? "Disable Aurora Background" : "Enable Aurora Background"}
                style={{
                  background: showAurora ? 'rgba(6, 182, 212, 0.15)' : 'rgba(125, 125, 125, 0.1)',
                  border: '1px solid ' + (showAurora ? 'var(--primary)' : 'var(--glass-border)'),
                  borderRadius: '50%',
                  width: '40px',
                  height: '40px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: showAurora ? 'var(--primary)' : 'var(--text-main)',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.3s ease'
                }}
              >
                <Sparkles size={20} fill={showAurora ? "currentColor" : "none"} />
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div
          style={{
            cursor: 'pointer',
            zIndex: 110,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            backgroundColor: isOpen ? 'var(--glass-bg)' : 'transparent',
            border: isOpen ? '1px solid var(--glass-border)' : '1px solid transparent',
            transition: 'all 0.3s'
          }}
          onClick={() => setIsOpen(!isOpen)}
          className="mobile-toggle"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            style={{
              position: 'absolute',
              top: '0',
              left: 0,
              width: '100%',
              height: '100vh',
              background: 'var(--glass-bg)',
              backdropFilter: 'var(--glass-blur)',
              WebkitBackdropFilter: 'var(--glass-blur)',
              padding: '80px 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              borderBottom: '1px solid var(--glass-border)',
              zIndex: 105
            }}
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  style={{
                    padding: '1rem 0',
                    fontSize: '1.25rem',
                    fontWeight: '700',
                    color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                    display: 'block',
                    borderBottom: '1px solid var(--glass-border)'
                  }}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              style={{ marginTop: '2rem' }}
            >
              {!isAuthenticated ? (
                <Link
                  to="/login"
                  onClick={() => setIsOpen(false)}
                  className="btn-primary"
                  style={{ justifyContent: 'center', width: '100%', padding: '1.25rem', borderRadius: 'var(--radius-lg)', fontSize: '1.1rem' }}
                >
                  <User size={20} /> Login
                </Link>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {userType === 'provider' ? (
                    <Link
                      to="/dashboard"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary"
                      style={{ justifyContent: 'center', width: '100%', padding: '1.25rem', borderRadius: 'var(--radius-lg)', fontSize: '1.1rem' }}
                    >
                      <Briefcase size={20} /> Provider Portal
                    </Link>
                  ) : (
                    <Link
                      to="/customer-dashboard"
                      onClick={() => setIsOpen(false)}
                      className="btn-primary"
                      style={{ justifyContent: 'center', width: '100%', padding: '1.25rem', borderRadius: 'var(--radius-lg)', fontSize: '1.1rem' }}
                    >
                      <User size={20} /> My Dashboard
                    </Link>
                  )}
                </div>
              )}
            </motion.div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem', marginTop: '1rem' }}>
              <div style={{ display: 'flex', gap: '1rem', padding: '0.5rem', background: 'rgba(125, 125, 125, 0.05)', borderRadius: '99px', border: '1px solid var(--glass-border)' }}>
                {[
                  { id: 'aurora', color: '#06b6d4' },
                  { id: 'sunset', color: '#f43f5e' },
                  { id: 'ocean', color: '#0ea5e9' },
                  { id: 'forest', color: '#10b981' }
                ].map(p => (
                  <button
                    key={p.id}
                    onClick={() => setPreset(p.id)}
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '50%',
                      background: p.color,
                      border: preset === p.id ? '2px solid white' : 'none',
                      boxShadow: preset === p.id ? '0 0 10px ' + p.color : 'none',
                      transition: 'all 0.2s',
                    }}
                  />
                ))}
              </div>

              <button
                onClick={toggleTheme}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  padding: '0.75rem 1.5rem',
                  borderRadius: '99px',
                  background: 'var(--glass-bg)',
                  border: '1px solid var(--glass-border)',
                  color: 'var(--text-main)',
                  fontWeight: '600'
                }}
              >
                {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
                <span>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 768px) {
          .desktop-links { display: block !important; }
          .mobile-toggle { display: none !important; }
        }
        .nav-link:hover { color: var(--primary) !important; }
        .nav-link:hover span { width: 100% !important; transition: width 0.3s ease; }
      `}</style>
    </nav>
  );
};

export default Navbar;
