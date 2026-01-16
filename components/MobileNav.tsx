
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Home, LayoutGrid, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const MobileNav = () => {
  const location = useLocation();

  const scrollToQuote = (e: React.MouseEvent) => {
    e.preventDefault();
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-t border-white/5 z-50 px-6 py-3 pb-6 safe-area-inset-bottom">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <Link to="/" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/') ? 'text-accent' : 'text-slate-400'}`}>
          <Home size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </Link>
        <Link to="/services" className={`flex flex-col items-center gap-1 transition-colors ${isActive('/services') ? 'text-accent' : 'text-slate-400'}`}>
          <LayoutGrid size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Services</span>
        </Link>
        <button onClick={scrollToQuote} className="flex flex-col items-center gap-1 text-accent transition-colors">
          <MessageSquare size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Quote</span>
        </button>
                <a href={`tel:${BUSINESS_INFO.phone}`} className="flex flex-col items-center gap-1 text-slate-400 transition-colors">
          <Phone size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
