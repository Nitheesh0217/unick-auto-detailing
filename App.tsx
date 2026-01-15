
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import MobileNav from './components/MobileNav';
import Hero from './components/Hero';
import ServicesGrid from './components/ServicesGrid';
import AIAssistant from './components/AIAssistant';
import BeforeAfterWall from './components/BeforeAfterWall';
import ReviewsSection from './components/ReviewsSection';
import HowItWorks from './components/HowItWorks';
import ServiceDeepDives from './components/ServiceDeepDives';
import ServiceAreas from './components/ServiceAreas';
import FAQSection from './components/FAQSection';
import QuoteForm from './components/QuoteForm';
import Footer from './components/Footer';
import FinalCTA from './components/FinalCTA';
import AdminDashboard from './components/AdminDashboard';
import Login from './components/Login';
import { MessageCircle } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen pb-20 lg:pb-0 bg-slate-950">
      <Navbar />
      <main>
        <div id="home"><Hero /></div>
        <div id="services"><ServicesGrid /></div>
        <AIAssistant />
        <div id="gallery"><BeforeAfterWall /></div>
        <div id="reviews"><ReviewsSection /></div>
        <HowItWorks />
        <ServiceDeepDives />
        <ServiceAreas />
        <div id="faq"><FAQSection /></div>
        <div id="quote" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <QuoteForm />
          </div>
        </div>
        <FinalCTA />
      </main>
      <Footer />
      <MobileNav />
      
      {/* Floating Action Button (FAB) for Quote */}
      <a 
        href="#quote" 
        className="lg:hidden fixed bottom-24 right-6 w-16 h-16 bg-accent text-slate-950 rounded-full flex items-center justify-center shadow-2xl fab-pulse z-40 transition-transform active:scale-90"
        aria-label="Get Instant Quote"
      >
        <MessageCircle size={28} />
      </a>
    </div>
  );
};

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

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route 
          path="/admin" 
          element={isAdmin ? <AdminDashboard onLogout={handleLogout} /> : <Login onLogin={handleLogin} />} 
        />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
};

export default App;
