
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
    <section 
      className="relative min-h-screen flex items-center pt-24 pb-20 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/hero-ceramic-miami.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Left-Heavy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/40 z-0" />
      
      {/* Mesh gradient accent */}
      <div className="gradient-mesh absolute inset-0 z-0 opacity-50" />

      {/* Content Container */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <div className="text-center lg:text-left space-y-8">
            {/* Headline - Large & Bold */}
            <h1 className="text-5xl md:text-7xl font-black leading-[0.95] tracking-tighter kinetic-reveal" style={{ animationDelay: '0.2s' }}>
              Your Car 
              <br />
              <span className="shimmer-text italic">Deserves Better</span>
              <br />
              Than a Car Wash.
            </h1>

            {/* Subheadline - Premium positioning clarity */}
            <p className="text-xl md:text-2xl text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-semibold kinetic-reveal" style={{ animationDelay: '0.3s' }}>
              Premium mobile detailing at your home or office across Greater Miami in 24–48 hours.
            </p>

            {/* Primary CTA Button */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center lg:justify-start kinetic-reveal pt-4" style={{ animationDelay: '0.4s' }}>
              <button onClick={scrollToQuote} className="liquid-gold-btn px-12 py-6 rounded-full font-black text-xl flex items-center justify-center gap-2 group">
                Book Detail Now
                <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button onClick={scrollToGallery} className="flex items-center justify-center gap-3 px-10 py-6 glass-card border-white/10 rounded-full font-black text-lg hover:bg-white/5 transition-all text-white">
                <PlayCircle size={24} className="text-gold" />
                Watch Transformation
              </button>
            </div>

            {/* Social Proof Line */}
            <div className="flex items-center justify-center lg:justify-start gap-3 text-slate-300 font-semibold kinetic-reveal pt-4" style={{ animationDelay: '0.5s' }}>
              <div className="flex items-center gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" className="text-gold" />)}
              </div>
              <span className="text-base">Over 2,400+ vehicles detailed across Miami – 4.9 ★ rating with 330+ reviews</span>
            </div>

            {/* Trust Markers */}
            <div className="flex flex-col sm:flex-row items-center gap-8 justify-center lg:justify-start text-sm kinetic-reveal pt-4" style={{ animationDelay: '0.6s' }}>
              <div className="flex items-center gap-2 text-slate-300 font-bold">
                <ShieldCheck size={20} className="text-gold" />
                <span>No hidden fees – Price confirmed via text</span>
              </div>
              <div className="flex items-center gap-3 text-[#00E5FF] font-black uppercase tracking-[0.2em] bg-cyan-500/10 px-4 py-2 rounded-xl">
                <Zap size={16} fill="currentColor" />
                Last 2 slots today
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
