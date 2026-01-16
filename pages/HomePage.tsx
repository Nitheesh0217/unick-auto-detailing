import React from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/Hero';
import ServicesGrid from '../components/ServicesGrid';
import AIAssistant from '../components/AIAssistant';
import BeforeAfterWall from '../components/BeforeAfterWall';
import ReviewsSection from '../components/ReviewsSection';
import HowItWorks from '../components/HowItWorks';
import ServiceAreas from '../components/ServiceAreas';
import QuoteForm from '../components/QuoteForm';
import FinalCTA from '../components/FinalCTA';
import { ArrowRight } from 'lucide-react';

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
      
      {/* Service Areas Preview Section */}
      <ServiceAreas isPreview={true} />
      
      {/* Service Area CTA */}
      <div className="container mx-auto px-4 py-12">
        <div className="text-center">
          <Link 
            to="/service-area"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent/10 border border-accent/30 rounded-full font-bold text-accent hover:bg-accent hover:text-slate-950 transition-all group"
          >
            View Full Service Area Coverage
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      
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
