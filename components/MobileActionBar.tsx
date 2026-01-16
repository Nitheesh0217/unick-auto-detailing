import React from 'react';
import { Phone, MessageCircle, Zap } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const MobileActionBar = () => {
  // Clean phone number for tel: link
  const phoneNumber = BUSINESS_INFO.phone.replace(/\D/g, '');
  
  // WhatsApp link (uses international format)
  const whatsappLink = `https://wa.me/1${phoneNumber}?text=Hi%20Unick%20Auto%20Detailing,%20I'd%20like%20to%20know%20more%20about%20your%20detailing%20services`;

  const scrollToQuote = () => {
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-gradient-to-t from-slate-950 via-slate-950 to-slate-950/80 border-t border-white/10 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3 gap-3">
        {/* Call Button */}
        <a
          href={`tel:${phoneNumber}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-white/10 hover:bg-white/20 text-white rounded-xl font-bold uppercase text-xs tracking-widest transition-all active:scale-95"
          title="Call Unick Auto Detailing"
        >
          <Phone size={18} />
          <span>Call</span>
        </a>

        {/* WhatsApp Button */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-emerald-600/20 hover:bg-emerald-600/30 text-emerald-300 rounded-xl font-bold uppercase text-xs tracking-widest transition-all active:scale-95"
          title="Message on WhatsApp"
        >
          <MessageCircle size={18} />
          <span>WhatsApp</span>
        </a>

        {/* Get Quote Button (Primary) */}
        <button
          onClick={scrollToQuote}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-4 bg-gold text-slate-950 rounded-xl font-bold uppercase text-xs tracking-widest hover:scale-105 active:scale-95 transition-all shadow-lg shadow-gold/30"
          title="Scroll to quote form"
        >
          <Zap size={18} fill="currentColor" />
          <span>Quote</span>
        </button>
      </div>
    </div>
  );
};

export default MobileActionBar;
