import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Briefcase } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
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
      className={`fixed w-full z-[100] transition-all duration-500`}
      style={{
        padding: scrolled ? '0.75rem 0' : '1.5rem 0',
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255, 255, 255, 0.3)' : '1px solid transparent',
        boxShadow: scrolled ? '0 10px 30px -10px rgba(0,0,0,0.1)' : 'none'
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
              <User size={18} /> <span>Provider Portal</span>
            </Link>
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
            backgroundColor: isOpen ? '#f1f5f9' : 'transparent',
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
              backgroundColor: 'white',
              padding: '80px 2rem 2rem',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              boxShadow: 'var(--shadow-lg)',
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
                    borderBottom: '1px solid #f1f5f9'
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
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="btn-primary"
                style={{ justifyContent: 'center', width: '100%', padding: '1.25rem', borderRadius: 'var(--radius-lg)', fontSize: '1.1rem' }}
              >
                <User size={20} /> Provider Portal
              </Link>
            </motion.div>
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
