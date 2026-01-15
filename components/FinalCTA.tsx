
import React from 'react';
import { Phone, MessageCircle, ChevronRight, Zap, Star } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';

const FinalCTA = () => {
  return (
    <section className="bg-gold py-20 text-slate-950 overflow-hidden relative">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/30 rounded-full -mr-64 -mt-64 blur-[100px] opacity-50" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-950/10 rounded-full -ml-64 -mb-64 blur-[100px] opacity-50" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="text-center lg:text-left max-w-3xl">
            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-slate-950 text-gold rounded-full text-[10px] font-black uppercase tracking-[0.3em] mb-8">
              <Zap size={14} fill="currentColor" /> Priority Scheduling Active
            </div>
            <h2 className="text-5xl md:text-7xl font-black italic uppercase tracking-tighter leading-[0.85] mb-8">
              Don't Wait For <br />
              <span className="text-white">A Better Car.</span>
            </h2>
            <div className="flex flex-col sm:flex-row items-center gap-8 mb-4">
               <p className="text-slate-900/80 font-bold text-xl leading-relaxed">
                 Join 2,400+ Miami owners who've upgraded their driving experience. No car wash in the city compares to our level of surgical precision.
               </p>
            </div>
            <div className="flex items-center justify-center lg:justify-start gap-2 text-slate-950/60 font-black uppercase tracking-widest text-xs">
               <Star size={14} fill="currentColor" /> 4.9/5.0 Average Rating Across All Platforms
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full lg:w-auto">
            <a href="#quote" className="px-16 py-8 bg-slate-950 text-white rounded-full font-black text-2xl hover:scale-105 active:scale-95 transition-all shadow-[0_30px_60px_-15px_rgba(0,0,0,0.5)] text-center tracking-widest uppercase italic group">
              Book Transformation Now
              <ChevronRight size={24} className="inline ml-3 group-hover:translate-x-2 transition-transform" />
            </a>
            <div className="flex items-center justify-center gap-6">
              <a href={`tel:${BUSINESS_INFO.phone.replace(/\D/g,'')}`} className="w-20 h-20 bg-white/20 hover:bg-white/40 rounded-[28px] flex items-center justify-center transition-all group">
                <Phone size={32} className="group-hover:rotate-12 transition-transform" />
              </a>
              <a href="https://wa.me/17866227620" target="_blank" className="w-20 h-20 bg-white/20 hover:bg-white/40 rounded-[28px] flex items-center justify-center transition-all group">
                <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
              </a>
              <div className="flex flex-col">
                 <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Avg Response</span>
                 <span className="text-lg font-black uppercase italic">Under 10 Mins</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Live Booking Strip */}
      <div className="mt-20 border-t border-slate-950/10 pt-10">
         <div className="flex justify-center items-center gap-12 animate-pulse">
            <div className="flex items-center gap-3 text-sm font-black uppercase tracking-widest">
               <div className="w-2 h-2 bg-slate-950 rounded-full" />
               Latest Booking: 2024 Porsche 911 GT3 RS
            </div>
            <div className="hidden md:flex items-center gap-3 text-sm font-black uppercase tracking-widest opacity-60">
               <div className="w-2 h-2 bg-slate-950 rounded-full" />
               Area: Coconut Grove
            </div>
            <div className="hidden lg:flex items-center gap-3 text-sm font-black uppercase tracking-widest opacity-60">
               <div className="w-2 h-2 bg-slate-950 rounded-full" />
               Service: Ceramic Coating
            </div>
         </div>
      </div>
    </section>
  );
};

export default FinalCTA;
