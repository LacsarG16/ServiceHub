import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, X, User, Briefcase } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
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

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3 shadow-md' : 'bg-transparent py-5'}`}
      style={{
        backgroundColor: scrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none'
      }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <div style={{ backgroundColor: 'var(--primary)', color: 'white', padding: '0.5rem', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Briefcase size={20} />
          </div>
          <span style={{ fontSize: '1.5rem', fontWeight: '800', color: scrolled ? 'var(--text-main)' : 'var(--text-main)', letterSpacing: '-0.5px' }}>
            Service<span style={{ color: 'var(--primary)' }}>Hub</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: 'none' }} className="desktop-links"> {/* Handled via CSS usually, but adding inline for now to ensure visibility */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                style={{
                  fontWeight: '500',
                  color: location.pathname === link.path ? 'var(--primary)' : 'var(--text-main)',
                  position: 'relative'
                }}
              >
                {link.name}
                {location.pathname === link.path && (
                  <span style={{ position: 'absolute', bottom: '-4px', left: 0, width: '100%', height: '2px', backgroundColor: 'var(--primary)', borderRadius: '2px' }} />
                )}
              </Link>
            ))}
            <Link to="/dashboard" className="btn-primary" style={{ padding: '0.5rem 1.25rem', fontSize: '0.9rem' }}>
              <User size={18} /> Provider Portal
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div style={{ cursor: 'pointer' }} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div style={{ position: 'absolute', top: '100%', left: 0, width: '100%', backgroundColor: 'white', padding: '1rem', borderTop: '1px solid #eee', display: 'flex', flexDirection: 'column', gap: '1rem', boxShadow: 'var(--shadow-lg)' }}>
          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} onClick={() => setIsOpen(false)} style={{ padding: '0.5rem 0', fontWeight: '500' }}>
              {link.name}
            </Link>
          ))}
          <Link to="/dashboard" onClick={() => setIsOpen(false)} className="btn-primary" style={{ justifyContent: 'center' }}>
            Provider Portal
          </Link>
        </div>
      )}

      {/* Inline styles for responsiveness since I'm not using Tailwind yet */}
      <style>{`
        @media (min-width: 768px) {
          .desktop-links { display: block !important; }
          .container > div:nth-child(3) { display: none !important; }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
