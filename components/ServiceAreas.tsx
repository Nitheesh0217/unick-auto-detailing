
import React from 'react';
import { MapPin, Check } from 'lucide-react';
import { SERVICE_AREAS } from '../constants';

interface ServiceAreasProps {
  isPreview?: boolean;
}

const ServiceAreas = ({ isPreview = false }: ServiceAreasProps) => {
  return (
    <section className={`${isPreview ? 'py-16' : 'py-24'} overflow-hidden relative`}>
      <div className="container mx-auto px-4">
        {!isPreview && (
          <div className="mb-16 text-center">
            <h2 className="text-5xl md:text-6xl font-black italic uppercase tracking-tighter mb-6">
              Mobile Detailing Across Greater Miami
            </h2>
            <p className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
              We bring premium auto detailing directly to your home or office. No drive to a shop, no waiting in a waiting room—just expert-level vehicle care at your convenience, wherever you're located in Greater Miami.
            </p>
          </div>
        )}
        
        <div className={`grid ${isPreview ? 'lg:grid-cols-1' : 'lg:grid-cols-2'} gap-16 items-center`}>
          <div className="relative">
            <div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full" />
            <div className="relative glass p-10 rounded-[40px] border-white/5">
              {isPreview && (
                <h3 className="text-3xl font-bold mb-6 italic">We Come To You.</h3>
              )}
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Our mobile detail bay is fully equipped to provide premium service at your driveway, office parking lot, or garage. No water or power hookups needed. We serve the entire Greater Miami area with same-day availability in most neighborhoods.
              </p>
              
              <div className="mb-10">
                <p className="text-sm font-bold text-slate-300 mb-4 uppercase tracking-widest">Areas We Serve:</p>
                <div className={`grid ${isPreview ? 'grid-cols-2 sm:grid-cols-3' : 'grid-cols-2 sm:grid-cols-3'} gap-3`}>
                  {SERVICE_AREAS.map(city => (
                    <div key={city} className="flex items-center gap-2 text-sm font-semibold text-slate-300 p-2 rounded-lg bg-white/5 hover:bg-white/10 transition-all">
                      <Check size={14} className="text-accent flex-shrink-0" />
                      <span>{city}</span>
                    </div>
                  ))}
                </div>
              </div>

              {!isPreview && (
                <div className="text-sm text-slate-500 mb-8 p-4 rounded-lg bg-white/5 border border-white/10">
                  <p className="font-semibold mb-2 text-slate-400">Mobile Auto Detailing Service Area:</p>
                  <p>Premium mobile car detailing services available throughout Miami-Dade County including downtown Miami, Brickell, Wynwood, and all surrounding neighborhoods. 24-48 hour mobile service available at your location.</p>
                </div>
              )}
              
              <div className="flex items-center gap-3 p-4 bg-white/5 rounded-2xl border border-accent/20 hover:border-accent/40 transition-all">
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold">Serving Greater Miami</p>
                  <p className="text-xs text-slate-500">15+ Cities • Mobile Unit Available</p>
                </div>
              </div>
            </div>
          </div>

          {!isPreview && (
            <div className="relative group">
              {/* Enhanced Map Visual Representation */}
              <div className="aspect-square glass rounded-full border-white/10 flex items-center justify-center p-12 overflow-hidden relative">
                <div className="w-full h-full rounded-full border border-white/5 flex items-center justify-center animate-pulse">
                  <div className="w-[80%] h-[80%] rounded-full border border-accent/20 flex items-center justify-center">
                    <div className="w-[60%] h-[60%] rounded-full border border-white/10 flex items-center justify-center">
                      <div className="w-4 h-4 bg-accent rounded-full shadow-[0_0_20px_#FFB84D]" />
                    </div>
                  </div>
                </div>
                {/* City Floating Labels */}
                <div className="absolute top-[20%] right-[10%] glass px-3 py-1 rounded-full text-[10px] font-bold text-white hover:text-accent transition-colors">MIAMI BEACH</div>
                <div className="absolute bottom-[30%] left-[5%] glass px-3 py-1 rounded-full text-[10px] font-bold text-white hover:text-accent transition-colors">DORAL</div>
                <div className="absolute top-[15%] left-[25%] glass px-3 py-1 rounded-full text-[10px] font-bold text-white hover:text-accent transition-colors">CORAL GABLES</div>
                <div className="absolute bottom-[10%] right-[25%] glass px-3 py-1 rounded-full text-[10px] font-bold text-white hover:text-accent transition-colors">KENDALL</div>
                <div className="absolute top-[50%] right-[5%] glass px-3 py-1 rounded-full text-[10px] font-bold text-white hover:text-accent transition-colors">BRICKELL</div>
                <div className="absolute bottom-[50%] left-[15%] glass px-3 py-1 rounded-full text-[10px] font-bold text-white hover:text-accent transition-colors">DOWNTOWN</div>
              </div>
              <p className="text-center mt-6 text-sm text-slate-500 italic">
                Map visualization showing service coverage across Greater Miami. Full coverage available with same-day response times.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ServiceAreas;
