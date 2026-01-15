
import React from 'react';
import { Calendar, CheckCircle2, MapPin } from 'lucide-react';

const steps = [
  {
    title: "1. Tell us about your car",
    desc: "Select your services and vehicle details in our smart quote form. It takes less than 2 minutes.",
    icon: Calendar
  },
  {
    title: "2. We confirm & schedule",
    desc: "Get an instant price range and a quick text/WhatsApp to lock in your preferred time slot.",
    icon: CheckCircle2
  },
  {
    title: "3. Professional detail at your spot",
    desc: "Our fully equipped van arrives at your home or office. You don't even need to be present.",
    icon: MapPin
  }
];

const HowItWorks = () => {
  return (
    <section className="py-24 bg-slate-900/20 relative overflow-hidden">
       {/* Background line for desktop */}
      <div className="hidden lg:block absolute top-[60%] left-[20%] right-[20%] h-0.5 bg-white/5 z-0" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 italic">Frictionless Flow</h2>
          <p className="text-slate-400 text-lg">We've streamlined mobile detailing for your busy Miami lifestyle.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {steps.map((step, idx) => (
            <div key={idx} className="group relative">
              <div className="mb-8 w-20 h-20 glass rounded-3xl border-accent/20 flex items-center justify-center text-accent group-hover:scale-110 transition-all duration-500 group-hover:bg-accent group-hover:text-slate-900">
                <step.icon size={36} />
              </div>
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-slate-400 leading-relaxed">{step.desc}</p>
              
              {/* Step indicator for desktop */}
              <div className="absolute -top-4 -right-4 w-12 h-12 glass rounded-full flex items-center justify-center font-black text-slate-500 border-white/5 opacity-50">
                {idx + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
