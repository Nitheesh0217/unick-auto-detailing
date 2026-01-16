
import React from 'react';
import { ShieldCheck, Star, Phone, ChevronRight, Zap, PlayCircle } from 'lucide-react';
import { BUSINESS_INFO } from '../constants';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();

  const scrollToGallery = () => {
    // Scroll to gallery on current page if available, otherwise navigate
    const galleryElement = document.getElementById('gallery');
    if (galleryElement) {
      galleryElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/gallery');
    }
  };

  const scrollToQuote = () => {
    const quoteElement = document.getElementById('quote');
    if (quoteElement) {
      quoteElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden">
      <div className="gradient-mesh" />
      
      {/* Cinematic Visual Background */}
      <div className="absolute inset-0 z-[-1] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/80 to-transparent z-10" />
        <img 
          src="https://images.unsplash.com/photo-1601362840469-51e4d8d59085?auto=format&fit=crop&q=90&w=2400" 
          alt="Luxury car gloss transformation" 
          className="w-full h-full object-cover opacity-40 scale-105 animate-pulse"
          style={{ animationDuration: '10s' }}
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left">
            {/* Social Proof Line */}
            <div className="inline-flex items-center gap-2 mb-8 kinetic-reveal" style={{ animationDelay: '0.05s' }}>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" className="text-gold" />)}
              </div>
              <span className="text-sm font-black text-slate-300">Over 2,400+ vehicles detailed across Miami – 4.9 ★ rating</span>
            </div>

            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-full glass-card border-white/10 text-xs font-black uppercase tracking-[0.2em] text-gold mb-10 kinetic-reveal" style={{ animationDelay: '0.1s' }}>
              <span className="w-2 h-2 bg-gold rounded-full animate-ping" />
              Miami's #1 Elite Mobile Concierge
            </div>
            
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] mb-10 kinetic-reveal" style={{ animationDelay: '0.2s' }}>
              Your Car <br />
              <span className="shimmer-text italic">Deserves Better</span> <br />
              Than a Car Wash.
            </h1>
            
            <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 mb-12 leading-relaxed font-medium kinetic-reveal" style={{ animationDelay: '0.3s' }}>
              Premium mobile detailing at your home or office across Greater Miami in 24–48 hours.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-5 mb-12 justify-center lg:justify-start kinetic-reveal" style={{ animationDelay: '0.4s' }}>
              <button onClick={scrollToQuote} className="liquid-gold-btn px-12 py-6 rounded-full font-black text-xl flex items-center justify-center gap-2 group">
                Book Mobile Detail
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToGallery} className="flex items-center justify-center gap-3 px-10 py-6 glass-card border-white/10 rounded-full font-black text-lg hover:bg-white/5 transition-all text-white">
                <PlayCircle size={24} className="text-gold" />
                Watch Transformation
              </button>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start text-sm kinetic-reveal" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-2 text-slate-400 font-bold">
                <ShieldCheck size={20} className="text-gold" />
                <span>Unick Guarantee: <span className="text-white">100% Satisfaction</span></span>
              </div>
              <div className="flex items-center gap-3 text-[#00E5FF] font-black uppercase tracking-[0.2em] bg-cyan-500/10 px-4 py-2 rounded-xl">
                <Zap size={16} fill="currentColor" />
                Last 2 slots for Coral Gables
              </div>
            </div>
          </div>

          <div className="relative group perspective-1000 hidden lg:block kinetic-reveal" style={{ animationDelay: '0.6s' }}>
            <div className="glass-card p-12 rounded-[56px] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.8)] border-gold/10 hover:border-gold/30 transition-all duration-500 hover:rotate-y-3">
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h3 className="text-2xl font-black tracking-tighter uppercase italic mb-1">Elite Concierge</h3>
                  <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Pricing Strategy v4.2</p>
                </div>
                <div className="text-right">
                   <div className="flex items-center gap-1 text-gold mb-1">
                      {[1,2,3,4,5].map(i => <Star key={i} size={18} fill="currentColor" />)}
                   </div>
                   <p className="font-black text-lg">330+ REVIEWS</p>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-slate-900/50 rounded-3xl border border-white/5 group/car cursor-pointer hover:border-gold/40 transition-all">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Vehicle Profile</span>
                    <span className="text-[10px] font-black uppercase tracking-widest text-gold">Most Frequent</span>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center text-slate-400 group-hover/car:text-gold transition-colors">
                      <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2"/><circle cx="7" cy="17" r="2"/><path d="M9 17h6"/><circle cx="17" cy="17" r="2"/></svg>
                    </div>
                    <div>
                      <h4 className="font-black text-xl italic uppercase">Luxury Sedan / SUV</h4>
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-widest">Porsche, Tesla, BMW, Range Rover</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Miami District</label>
                     <div className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-5 py-4 text-sm font-bold flex items-center justify-between text-slate-300">
                        Coral Gables <ChevronRight size={14} className="text-gold" />
                     </div>
                   </div>
                   <div className="space-y-2">
                     <label className="text-[10px] font-black uppercase tracking-widest text-slate-500">Priority Level</label>
                     <div className="w-full bg-slate-900/50 border border-white/5 rounded-2xl px-5 py-4 text-sm font-bold flex items-center justify-between text-gold">
                        VIP Express <Zap size={14} fill="currentColor" />
                     </div>
                   </div>
                </div>

                <button onClick={scrollToQuote} className="w-full py-6 bg-platinum text-slate-950 rounded-2xl font-black text-center block hover:bg-gold transition-all shadow-xl tracking-widest uppercase">
                  Book Mobile Detail
                </button>
              </div>

              <div className="mt-12 flex items-center justify-center gap-8 border-t border-white/5 pt-10">
                <div className="flex -space-x-4">
                  {[1,2,3,4].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/80?img=${i+10}`} className="w-12 h-12 rounded-full border-4 border-slate-950 shadow-xl" alt="Elite Client" />
                  ))}
                  <div className="w-12 h-12 rounded-full bg-gold text-slate-950 border-4 border-slate-950 flex items-center justify-center text-xs font-black">+330</div>
                </div>
                <div className="text-left">
                  <p className="text-xs font-black uppercase tracking-wider text-white">Trust Verified</p>
                  <p className="text-[10px] font-bold text-slate-500 uppercase">34 details completed today</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
