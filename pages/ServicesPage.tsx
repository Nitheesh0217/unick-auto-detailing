import React from 'react';
import ServicesGrid from '../components/ServicesGrid';
import ServiceDeepDives from '../components/ServiceDeepDives';
import ReviewsSection from '../components/ReviewsSection';
import QuoteForm from '../components/QuoteForm';

const ServicesPage = () => {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="pt-32 pb-20">
        <div className="container mx-auto px-4 mb-20">
          <h1 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-6 text-white">
            Our Services
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            From routine maintenance to complete transformations, we offer comprehensive detailing solutions tailored to your vehicle's needs.
          </p>
        </div>

        <ServicesGrid />
        
        <div className="py-20 border-t border-white/5">
          <div className="container mx-auto px-4 mb-20">
            <h2 className="text-4xl font-black italic uppercase tracking-tighter mb-12 text-white">
              Deep Service Breakdown
            </h2>
          </div>
          <ServiceDeepDives />
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

export default ServicesPage;
