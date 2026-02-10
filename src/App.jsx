import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import toast from 'react-hot-toast';
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
import { AuthProvider } from './context/AuthContext';
import { BookingProvider } from './context/BookingContext';
import Login from './pages/Login';
import CustomerDashboard from './pages/CustomerDashboard';
import ToastProvider from './components/ToastProvider';
import FloatingActionButton from './components/FloatingActionButton';
import ParticleBackground from './components/ParticleBackground';
import { useTheme } from './context/ThemeContext';

function App() {
  const location = useLocation();
  const { showAurora } = useTheme();
  const isDashboard = location.pathname === '/dashboard' || location.pathname === '/customer-dashboard';

  const handleFABClick = () => {
    toast.success('Need help? Our support team is here for you!', {
      duration: 3000,
      icon: '💬'
    });
  };

  return (
    <AuthProvider>
      <BookingProvider>
        <div className="app cinematic-wrapper">
          {/* Visual Effects */}

          {showAurora && <AuroraBackground />}
          <ParticleBackground
            particleCount={showAurora ? 40 : 150}
            isAuroraActive={showAurora}
          />


          {/* Toast Notifications */}
          <ToastProvider />

          {/* Navigation */}
          {!isDashboard && <Navbar />}



          {/* Main Content */}
          <main style={{ minHeight: '80vh' }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/directory" element={<Directory />} />
              <Route path="/profile/:id" element={<Profile />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/customer-dashboard" element={<CustomerDashboard />} />
              <Route path="/for-providers" element={<ForProviders />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
            </Routes>
          </main>

          {/* Footer & FAB */}
          {!isDashboard && <Footer />}
          <FloatingActionButton onClick={handleFABClick} showAfterScroll={200} />
        </div>
      </BookingProvider>
    </AuthProvider>
  );
}

export default App;
