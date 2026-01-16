
import React from 'react';
import { Calendar, CheckCircle2, MapPin, ArrowRight, ChevronDown } from 'lucide-react';

const steps = [
  {
    step: 1,
    title: "Tell us about your car",
    subtitle: "Get matched instantly",
    desc: "Select your services and vehicle details in our smart quote form. It takes less than 2 minutes.",
    icon: Calendar,
    benefit: "Fast, easy intake process"
  },
  {
    step: 2,
    title: "We confirm & schedule",
    subtitle: "Price & timing locked",
    desc: "Get an instant price range and a quick text/WhatsApp to lock in your preferred time slot.",
    icon: CheckCircle2,
    benefit: "No surprises, transparent pricing"
  },
  {
    step: 3,
    title: "Professional detail at your spot",
    subtitle: "Convenience delivered",
    desc: "Our fully equipped van arrives at your home or office. You don't even need to be present.",
    icon: MapPin,
    benefit: "Fits your schedule perfectly"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-900/20 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Frictionless Flow</h2>
          <p className="text-slate-400 text-lg">We've streamlined mobile detailing for your busy Miami lifestyle.</p>
        </div>

        {/* DESKTOP VIEW - Horizontal with arrows */}
        <div className="hidden md:block">
          <div className="grid grid-cols-3 gap-8 lg:gap-12 relative">
            {/* Connecting line with arrows */}
            <div className="absolute top-32 left-[25%] right-[25%] h-0.5 bg-gradient-to-r from-transparent via-gold/40 to-transparent z-0" />
            
            {/* Right arrow between step 1 and 2 */}
            <div className="absolute top-32 left-1/3 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-slate-950 z-10">
              <ArrowRight size={16} className="text-gold" />
            </div>
            
            {/* Right arrow between step 2 and 3 */}
            <div className="absolute top-32 right-1/3 -translate-x-1/2 w-8 h-8 flex items-center justify-center bg-slate-950 z-10">
              <ArrowRight size={16} className="text-gold" />
            </div>

            {steps.map((step, idx) => (
              <div key={idx} className="group relative">
                {/* Step circle with number */}
                <div className="flex items-start gap-6 mb-8">
                  <div className="flex-shrink-0 w-20 h-20 glass rounded-full border-2 border-gold/40 flex items-center justify-center text-gold group-hover:scale-110 group-hover:border-gold transition-all duration-500 group-hover:bg-gold/10">
                    <span className="text-3xl font-black">{step.step}</span>
                  </div>
                  <div className="flex-shrink-0 w-16 h-16 glass rounded-2xl border-gold/20 flex items-center justify-center text-gold/60 group-hover:scale-105 transition-all duration-500">
                    <step.icon size={28} />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-bold text-white">{step.title}</h3>
                  <p className="text-[10px] font-black uppercase tracking-[0.15em] text-gold/60 mb-2">
                    {step.subtitle}
                  </p>
                  <p className="text-slate-400 leading-relaxed text-sm">
                    {step.desc}
                  </p>
                  <p className="text-[10px] text-emerald-400/70 font-semibold uppercase tracking-wide pt-2">
                    ✓ {step.benefit}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MOBILE VIEW - Vertical timeline */}
        <div className="md:hidden space-y-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative">
              {/* Vertical line connector (except on last item) */}
              {idx < steps.length - 1 && (
                <div className="absolute left-9 top-24 bottom-0 w-0.5 bg-gradient-to-b from-gold/40 to-transparent" />
              )}

              {/* Step item */}
              <div className="flex gap-6">
                {/* Step number circle */}
                <div className="flex-shrink-0 flex flex-col items-center gap-3">
                  <div className="w-20 h-20 glass rounded-full border-2 border-gold/40 flex items-center justify-center text-gold bg-gold/5 shadow-lg shadow-gold/10">
                    <span className="text-2xl font-black">{step.step}</span>
                  </div>
                  {idx < steps.length - 1 && (
                    <ChevronDown size={20} className="text-gold/40 animate-pulse" />
                  )}
                </div>

                {/* Content card */}
                <div className="flex-1 glass rounded-2xl border-white/10 p-6 group hover:border-gold/40 transition-all duration-300">
                  <div className="flex items-start gap-3 mb-3">
                    <step.icon size={24} className="text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-white">{step.title}</h3>
                      <p className="text-[10px] font-black uppercase tracking-[0.1em] text-gold/60 mt-1">
                        {step.subtitle}
                      </p>
                    </div>
                  </div>
                  
                  <p className="text-slate-400 leading-relaxed text-sm mb-3">
                    {step.desc}
                  </p>
                  
                  <div className="text-[10px] text-emerald-400/70 font-semibold uppercase tracking-wide">
                    ✓ {step.benefit}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
