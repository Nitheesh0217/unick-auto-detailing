
import React from 'react';
import { MapPin } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

const ServiceAreas = () => {
  return (
    <section className="py-24 overflow-hidden relative">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
            <div className="relative glass p-10 rounded-[40px] border-white/5">
              <h2 className="text-4xl font-bold mb-6 italic">We Come To You.</h2>
              <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                Our mobile detail bay is fully equipped to provide premium service at your driveway, office parking lot, or garage. No water or power hookups needed.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {SERVICE_AREAS.map(city => (
                  <div key={city} className="flex items-center gap-2 text-sm font-bold text-slate-300">
                    <MapPin size={14} className="text-accent" />
                    {city}
                  </div>
                ))}
              </div>
              <div className="mt-12 flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                 <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent">
                   <MapPin size={24} />
                 </div>
                 <div>
                   <p className="text-sm font-bold">Serving Greater Miami</p>
                   <p className="text-xs text-slate-500">15+ Cities Covered • Mobile Unit 21</p>
                 </div>
              </div>
            </div>
          </div>

          <div className="relative group">
            {/* Minimalist Map Visual Representation */}
            <div className="aspect-square glass rounded-full border-white/10 flex items-center justify-center p-12 overflow-hidden">
               <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center animate-pulse">
                  <div className="w-[80%] h-[80%] rounded-full border border-accent/20 flex items-center justify-center">
                     <div className="w-[60%] h-[60%] rounded-full border border-white/10 flex items-center justify-center">
                        <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_#D4A574]" />
                     </div>
                  </div>
               </div>
               {/* City Floating Labels */}
               <div className="absolute top-[20%] right-[10%] glass px-3 py-1 rounded-full text-[10px] font-bold">MIAMI BEACH</div>
               <div className="absolute bottom-[30%] left-[5%] glass px-3 py-1 rounded-full text-[10px] font-bold">DORAL</div>
               <div className="absolute top-[15%] left-[25%] glass px-3 py-1 rounded-full text-[10px] font-bold">CORAL GABLES</div>
               <div className="absolute bottom-[10%] right-[25%] glass px-3 py-1 rounded-full text-[10px] font-bold">KENDALL</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
