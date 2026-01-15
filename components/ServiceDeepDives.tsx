
import React from 'react';
import { SERVICES } from '../constants';
import { CheckCircle2, ArrowRight } from 'lucide-react';

const ServiceDeepDives = () => {
  const mainServices = SERVICES.filter(s => ['ceramic-coating', 'paint-correction', 'premium-interior'].includes(s.id));

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 italic tracking-tighter uppercase">Treatment Programs</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">Detailed care programs designed for Miami's unique climate and environmental challenges.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {mainServices.map((service) => (
            <div key={service.id} className="glass rounded-[40px] overflow-hidden group hover:border-accent/40 transition-all shadow-2xl">
              <div className="h-56 relative overflow-hidden">
                <img 
                  src={service.id === 'ceramic-coating' ? 'https://images.unsplash.com/photo-1599256621730-535171e28e50' : service.id === 'paint-correction' ? 'https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98' : 'https://images.unsplash.com/photo-1597762470488-3877b1f538c6'} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 group-hover:opacity-100" 
                  alt={service.name} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />
                <div className="absolute bottom-6 left-6">
                  <span className="px-3 py-1 bg-accent text-slate-950 rounded-full text-[10px] font-black uppercase tracking-widest mb-2 block w-fit">Premium Care</span>
                  <h3 className="text-2xl font-black uppercase italic">{service.name}</h3>
                </div>
              </div>
              <div className="p-8">
                <ul className="space-y-4 mb-8">
                  {service.benefits?.map((benefit, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-slate-400">
                      <CheckCircle2 size={18} className="text-accent shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
                <div className="p-5 bg-white/5 rounded-2xl mb-8 border border-white/5">
                   <p className="text-[10px] font-black uppercase text-accent mb-2 tracking-widest">Ideal for you if...</p>
                   <p className="text-sm italic text-slate-300">"{service.idealFor}"</p>
                </div>
                <div className="flex items-center justify-between">
                   <p className="text-2xl font-black text-accent">{service.price}</p>
                   <a href="#quote" className="flex items-center gap-2 font-black text-sm uppercase group-hover:text-accent transition-colors">
                     Reserve Slot <ArrowRight size={16} />
                   </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceDeepDives;
