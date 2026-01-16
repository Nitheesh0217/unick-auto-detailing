import React from 'react';
import ServiceAreas from '../components/ServiceAreas';
import QuoteForm from '../components/QuoteForm';
import { MapPin } from 'lucide-react';

const ServiceAreaPage = () => {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="text-gold" size={32} />
            <span className="text-sm font-black uppercase tracking-[0.4em] text-gold">Miami Metro & Beyond</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 text-white">
            Service Areas
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Mobile concierge detailing across Miami-Dade County. We come to you—no trips to a shop, no appointments during business hours.
          </p>
        </div>

        <ServiceAreas isPreview={false} />

        <div className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 max-w-4xl">
            <h2 className="text-3xl font-black italic uppercase tracking-tighter mb-8 text-white">
              Why Choose Unick in Miami?
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="glass-card rounded-3xl p-8 border border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-gold">1</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Mobile Fleet</h3>
                <p className="text-slate-400">
                  We bring our fully equipped mobile units to your location. No hassle, full convenience.
                </p>
              </div>
              <div className="glass-card rounded-3xl p-8 border border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-gold">2</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Miami Expert</h3>
                <p className="text-slate-400">
                  We understand Miami's salt air, humidity, and UV intensity. Our treatments are engineered for our climate.
                </p>
              </div>
              <div className="glass-card rounded-3xl p-8 border border-white/5">
                <div className="w-12 h-12 rounded-2xl bg-gold/20 flex items-center justify-center mb-4">
                  <span className="text-2xl font-black text-gold">3</span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-white">Rapid Response</h3>
                <p className="text-slate-400">
                  Under 10-minute dispatch window. Request a quote and we'll confirm your available slots immediately.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div id="quote" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ServiceAreaPage;
