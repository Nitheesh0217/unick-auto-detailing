import React from 'react';
import BeforeAfterWall from '../components/BeforeAfterWall';
import ReviewsSection from '../components/ReviewsSection';
import QuoteForm from '../components/QuoteForm';
import { Sparkles } from 'lucide-react';

const GalleryPage = () => {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-gold" size={32} />
            <span className="text-sm font-black uppercase tracking-[0.4em] text-gold">Results Speak Louder</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 text-white">
            Before & After Gallery
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Witness the transformation. From swirl marks and oxidation to showroom perfection, our work speaks for itself.
          </p>
        </div>

        <BeforeAfterWall />
        
        <ReviewsSection />

        <div id="quote" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
          <div className="container mx-auto px-4 max-w-4xl">
            <QuoteForm />
          </div>
        </div>
      </div>
    </main>
  );
};

export default GalleryPage;
