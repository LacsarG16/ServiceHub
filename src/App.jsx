import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Directory from './pages/Directory';
import Profile from './pages/Profile';
import Dashboard from './pages/Dashboard';
import ForProviders from './pages/ForProviders';
import Contact from './pages/Contact';
import About from './pages/About';
import AuroraBackground from './components/AuroraBackground';

function App() {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';

  return (
    <div className="app cinematic-wrapper">
      <AuroraBackground />
      <Navbar />
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
      {!isDashboard && <Footer />}
    </div>
  );
}

export default App;
