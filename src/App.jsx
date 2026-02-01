import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Breadcrumbs from './components/Breadcrumbs';

import Home from './pages/Home';
import Directory from './pages/Directory';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import ForProviders from './pages/ForProviders';
import Contact from './pages/Contact';
import About from './pages/About';
import AuroraBackground from './components/AuroraBackground';

// Premium Components
import ScrollProgress from './components/ScrollProgress';
import ToastProvider from './components/ToastProvider';
import FloatingActionButton from './components/FloatingActionButton';
import ParticleBackground from './components/ParticleBackground';
import CursorTrail from './components/CursorTrail';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  const handleFABClick = () => {
    toast.success('Need help? Our support team is here for you!', {
      duration: 3000,
      icon: '💬'
    });
  };

  return (
    <div className="app cinematic-wrapper">
      {/* Visual Effects */}
      <ScrollProgress />
      <AuroraBackground />
      <ParticleBackground particleCount={40} />
      <CursorTrail size={15} trailLength={8} />

      {/* Toast Notifications */}
      <ToastProvider />

      {/* Navigation */}
      <Navbar />

      {/* Breadcrumbs */}
      <div style={{ paddingTop: '80px' }}>
        <Breadcrumbs />
      </div>

      {/* Main Content */}
      <main style={{ minHeight: '80vh' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/directory" element={<Directory />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/for-providers" element={<ForProviders />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </main>

      {/* Footer & FAB */}
      {!isDashboard && <Footer />}
      <FloatingActionButton onClick={handleFABClick} showAfterScroll={200} />
    </div>
  );
}

export default App;
