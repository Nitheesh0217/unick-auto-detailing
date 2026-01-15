
import React from 'react';
import { Instagram, Youtube, Facebook, Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_INFO, SERVICE_AREAS } from '../constants';

const Footer = () => {
  return (
    <footer className="pt-24 pb-12 border-t border-white/5">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <a href="#" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 bg-accent rounded-xl flex items-center justify-center rotate-3">
                <span className="text-white font-bold text-2xl italic">U</span>
              </div>
              <span className="text-2xl font-bold tracking-tight uppercase">UNICK<span className="text-accent">AUTO</span></span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">
              Miami's premier mobile auto detailing specialist. 330+ 5-star reviews and counting. We bring the showroom finish to your driveway.
            </p>
            <div className="flex gap-4">
              {[Instagram, Youtube, Facebook].map((Icon, idx) => (
                <a key={idx} href="#" className="w-10 h-10 glass border-white/5 rounded-xl flex items-center justify-center text-slate-400 hover:text-accent hover:border-accent/40 transition-all">
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'Services', 'Gallery', 'Reviews', 'FAQ', 'Admin'].map(link => (
                <li key={link}>
                  <a href={link === 'Admin' ? '#/admin' : `#${link.toLowerCase()}`} className="text-slate-500 hover:text-white transition-colors text-sm font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 glass border-white/5 rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-all">
                  <Phone size={14} />
                </div>
                <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-center gap-3 group">
                <div className="w-8 h-8 glass border-white/5 rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-all">
                  <Mail size={14} />
                </div>
                <a href={`mailto:${BUSINESS_INFO.email}`} className="text-slate-400 hover:text-white transition-colors text-sm font-medium">
                  {BUSINESS_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-3 group">
                <div className="w-8 h-8 glass border-white/5 rounded-lg flex items-center justify-center text-accent group-hover:scale-110 transition-all mt-1">
                  <MapPin size={14} />
                </div>
                <span className="text-slate-400 text-sm font-medium leading-relaxed">
                  Mobile Service Across <br /> Greater Miami Area
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6">Service Area</h4>
            <div className="flex flex-wrap gap-2">
              {SERVICE_AREAS.slice(0, 8).map(area => (
                <span key={area} className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                  {area}
                </span>
              ))}
              <span className="text-[10px] text-accent font-bold mt-2">+ 8 more cities</span>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-slate-500 text-xs font-medium">
            © 2026 UNICK AUTO DETAILING MIAMI. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-slate-500 hover:text-white font-medium">Privacy Policy</a>
            <a href="#" className="text-xs text-slate-500 hover:text-white font-medium">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
