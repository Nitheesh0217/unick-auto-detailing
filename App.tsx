import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ServiceAreaPage from './pages/ServiceAreaPage';
import FaqPage from './pages/FaqPage';
import AdminPage from './pages/AdminPage';
import Login from './components/Login';
import { MessageCircle } from 'lucide-react';

const App: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState(() => localStorage.getItem('unick_admin') === 'true');

  const handleLogin = (pass: string) => {
    if (pass === 'unick2026') {
      setIsAdmin(true);
      localStorage.setItem('unick_admin', 'true');
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsAdmin(false);
    localStorage.removeItem('unick_admin');
  };

  const AdminRoute = () => {
    return isAdmin ? <AdminPage onLogout={handleLogout} /> : <Login onLogin={handleLogin} />;
  };

  return (
    <Router>
      <div className="min-h-screen pb-20 lg:pb-0 bg-slate-950">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/service-area" element={<ServiceAreaPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/admin" element={<AdminRoute />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
        <MobileNav />

        {/* Floating Action Button (FAB) for Quote */}
        <button 
          onClick={() => {
            const quoteElement = document.getElementById('quote');
            if (quoteElement) {
              quoteElement.scrollIntoView({ behavior: 'smooth' });
            }
          }}
          className="lg:hidden fixed bottom-24 right-6 w-16 h-16 bg-accent text-slate-950 rounded-full flex items-center justify-center shadow-2xl fab-pulse z-40 transition-transform active:scale-90"
          aria-label="Get Instant Quote"
        >
          <MessageCircle size={28} />
        </button>
      </div>
    </Router>
  );
};

export default App;

