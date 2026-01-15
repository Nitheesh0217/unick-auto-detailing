import React from 'react';
import FAQSection from '../components/FAQSection';
import ReviewsSection from '../components/ReviewsSection';
import QuoteForm from '../components/QuoteForm';
import { HelpCircle } from 'lucide-react';

const FaqPage = () => {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <div className="flex items-center gap-3 mb-6">
            <HelpCircle className="text-gold" size={32} />
            <span className="text-sm font-black uppercase tracking-[0.4em] text-gold">Common Questions</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 text-white">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Have questions about our services, process, or pricing? We've got answers.
          </p>
        </div>

        <div className="container mx-auto px-4 mb-20">
          <FAQSection />
        </div>

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

export default FaqPage;
