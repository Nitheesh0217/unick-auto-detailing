
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Calendar } from 'lucide-react';
import { NAV_LINKS, BUSINESS_INFO } from '../constants';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3 shadow-lg' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center rotate-3">
            <span className="text-white font-bold text-2xl italic">U</span>
          </div>
          <span className="text-xl font-bold tracking-tight">UNICK<span className="text-accent">AUTO</span></span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} className="text-sm font-medium hover:text-accent transition-colors">
              {link.name}
            </a>
          ))}
          <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="flex items-center gap-2 px-5 py-2.5 rounded-full border border-accent/30 hover:bg-accent/10 transition-all text-sm font-semibold">
            <Phone size={16} className="text-accent" />
            {BUSINESS_INFO.phone}
          </a>
          <a href="#quote" className="px-6 py-2.5 bg-accent text-slate-900 rounded-full font-bold hover:scale-105 active:scale-95 transition-all shadow-lg shadow-accent/20">
            Get Quote
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed inset-0 bg-slate-950 transition-transform duration-300 z-40 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_LINKS.map(link => (
            <a key={link.name} href={link.href} onClick={() => setIsMobileMenuOpen(false)} className="text-2xl font-bold">
              {link.name}
            </a>
          ))}
          <a href="#quote" onClick={() => setIsMobileMenuOpen(false)} className="px-10 py-4 bg-accent text-slate-900 rounded-full text-xl font-bold">
            Get My Quote
          </a>
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
