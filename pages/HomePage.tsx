import React from 'react';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import AIAssistant from '../components/AIAssistant';
import BeforeAfterWall from '../components/BeforeAfterWall';
import ReviewsSection from '../components/ReviewsSection';
import HowItWorks from '../components/HowItWorks';
import QuoteForm from '../components/QuoteForm';
import FinalCTA from '../components/FinalCTA';

const HomePage = () => {
  return (
    <main>
      <Hero />
      <ServicesGrid />
      <AIAssistant />
      <div className="py-8">
        <h2 className="text-center text-3xl font-bold mb-8">Recent Work</h2>
        <BeforeAfterWall />
      </div>
      <ReviewsSection />
      <HowItWorks />
      <div id="quote" className="py-24 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <QuoteForm />
        </div>
      </div>
      <FinalCTA />
    </main>
  );
};

export default HomePage;
