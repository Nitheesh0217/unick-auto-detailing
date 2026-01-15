
import React from 'react';
import { Home, LayoutGrid, MessageSquare, Phone } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const MobileNav = () => {
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-xl border-t border-white/5 z-50 px-6 py-3 pb-6 safe-area-inset-bottom">
      <div className="flex items-center justify-between max-w-md mx-auto">
        <a href="#home" className="flex flex-col items-center gap-1 text-slate-400 active:text-accent transition-colors">
          <Home size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Home</span>
        </a>
        <a href="#services" className="flex flex-col items-center gap-1 text-slate-400 active:text-accent transition-colors">
          <LayoutGrid size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Services</span>
        </a>
        <a href="#quote" className="flex flex-col items-center gap-1 text-accent transition-colors">
          <MessageSquare size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Quote</span>
        </a>
        <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="flex flex-col items-center gap-1 text-slate-400 active:text-accent transition-colors">
          <Phone size={20} />
          <span className="text-[10px] font-bold uppercase tracking-widest">Call</span>
        </a>
      </div>
    </nav>
  );
};

export default MobileNav;
