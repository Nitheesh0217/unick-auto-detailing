
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Service Area', path: '/service-area' },
    { name: 'FAQ', path: '/faq' },
  ];

  const isActive = (path: string) => location.pathname === path;

  const handleBookDetail = () => {
    // Scroll to quote on home page, or navigate to quote on other pages
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = '/#quote';
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center rotate-3">
            <span className="text-white font-bold text-2xl italic">U</span>
          </div>
          <span className="text-xl font-bold tracking-tight">UNICK<span className="text-accent">AUTO</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              className={`text-sm font-medium transition-colors ${isActive(link.path) ? 'text-accent' : 'hover:text-accent'}`}
            >
              {link.name}
            </Link>
          ))}
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 hover:bg-accent/10 transition-all text-sm font-semibold">
            <Phone size={16} className="text-accent" />
            {BUSINESS_INFO.phone}
          </a>
          <button onClick={handleBookDetail} className="px-6 py-2.5 border border-accent/40 text-accent rounded-full font-bold hover:bg-accent/10 active:scale-95 transition-all text-sm">
            Book Detail Now
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-slate-950 transition-transform duration-300 z-40 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navLinks.map(link => (
            <Link 
              key={link.name} 
              to={link.path} 
              onClick={() => setIsMobileMenuOpen(false)} 
              className={`text-2xl font-bold transition-colors ${isActive(link.path) ? 'text-accent' : ''}`}
            >
              {link.name}
            </Link>
          ))}
          <button onClick={() => {
            setIsMobileMenuOpen(false);
            handleBookDetail();
          }} className="px-10 py-4 border border-accent/40 text-accent rounded-full text-xl font-bold transition-all hover:bg-accent/10">
            Book Detail Now
          </button>
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 text-accent text-xl font-bold">
            <Phone size={24} />
            {BUSINESS_INFO.phone}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
