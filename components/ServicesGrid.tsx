
import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES } from '../constants';

const ServicesGrid = () => {
  return (
    <>
      {/* Services Header with Background Image */}
      <section 
        className="relative py-20 mb-12"
        style={{
          backgroundImage: 'url(/images/services-tools-flatlay.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      >
        {/* Overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/80 to-slate-950/70 z-0" />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="max-w-2xl">
              <h2 className="text-5xl md:text-6xl font-black mb-4 leading-tight">Elite Detailing Services</h2>
              <p className="text-slate-300 text-xl">Meticulous care for every surface. Premium products & techniques for unmatched results.</p>
            </div>
            <a href="#quote" className="text-accent font-bold flex items-center gap-2 group hover:text-accent/80 transition-colors">
              View Pricing <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      <section className="py-12 relative">
      <div className="container mx-auto px-4">
        <div className="mb-16" />

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {/* Main Bento Card - Ceramic */}
          <div className="md:col-span-3 lg:col-span-4 glass rounded-[32px] overflow-hidden group hover:border-accent/40 transition-all border-white/5">
            <div className="h-full flex flex-col">
              <div className="h-64 overflow-hidden relative">
                <img src="https://images.unsplash.com/photo-1599256621730-535171e28e50?auto=format&fit=crop&q=80&w=1000" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Ceramic Coating" />
                <div className="absolute top-4 right-4 bg-accent text-slate-900 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">Most Popular</div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-3xl font-bold mb-2">Ceramic Coating</h3>
                    <p className="text-slate-400">Long-term 3-year protection from UV, chemicals, and contaminants.</p>
                  </div>
                  <p className="text-2xl font-black text-accent">$400+</p>
                </div>
                <ul className="space-y-1.5 mb-6 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    No hidden fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                    Price confirmed via text before we start
                  </li>
                </ul>
                <div className="flex flex-wrap gap-2 mb-6">
                  {["Self-Cleaning", "High Gloss", "Self-Healing"].map(t => (
                    <span key={t} className="px-3 py-1 bg-white/5 rounded-full text-xs font-medium">{t}</span>
                  ))}
                </div>
                <a href="#quote" className="w-full block text-center py-3 bg-white/5 hover:bg-white/10 rounded-xl font-bold transition-all">Select this service</a>
              </div>
            </div>
          </div>

          {/* Interior Bento Card */}
          <div className="md:col-span-3 lg:col-span-2 glass rounded-[32px] overflow-hidden group hover:border-accent/40 transition-all border-white/5 flex flex-col">
            <div className="p-8 flex-1">
              <h3 className="text-2xl font-bold mb-2">Premium Interior</h3>
              <p className="text-slate-400 mb-6">Beyond vacuuming. We sanitize and deep clean every crevice.</p>
              <ul className="space-y-2 mb-8">
                {["Steam Sanitization", "Stain Removal", "Leather Feed"].map(i => (
                  <li key={i} className="flex items-center gap-2 text-sm text-slate-300">
                    <div className="w-1.5 h-1.5 bg-accent rounded-full" /> {i}
                  </li>
                ))}
              </ul>
              <p className="text-xl font-bold text-accent mb-4">From $150</p>
              <ul className="space-y-1.5 text-xs text-slate-400">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  No hidden fees
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  Price confirmed before we start
                </li>
              </ul>
            </div>
            <div className="h-48 overflow-hidden">
               <img src="https://images.unsplash.com/photo-1597762470488-3877b1f538c6?auto=format&fit=crop&q=80&w=600" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="Interior Detail" />
            </div>
          </div>

          {/* Small Bento Cards */}
          {SERVICES.slice(1, 4).map(service => (
             <div key={service.id} className="md:col-span-2 glass rounded-[32px] p-8 group hover:border-accent/40 transition-all border-white/5">
                <h4 className="text-lg font-bold mb-2">{service.name}</h4>
                <p className="text-sm text-slate-400 mb-4 line-clamp-2">{service.description}</p>
                <p className="text-accent font-black mb-3">{service.price}</p>
                <ul className="space-y-1 text-xs text-slate-400">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                    No hidden fees
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 size={12} className="text-emerald-500 shrink-0" />
                    Confirmed before start
                  </li>
                </ul>
             </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
};

export default ServicesGrid;
