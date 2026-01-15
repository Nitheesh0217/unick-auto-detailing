
import React, { useState } from 'react';

const cases = [
  { id: 1, title: "Deep Coffee Stain Removal", car: "2023 BMW Interior", before: "https://picsum.photos/800/600?random=11", after: "https://picsum.photos/800/600?random=12" },
  { id: 2, title: "Paint Correction + Coating", car: "Tesla Model S", before: "https://picsum.photos/800/600?random=21", after: "https://picsum.photos/800/600?random=22" },
  { id: 3, title: "Headlight Restoration", car: "2015 Honda Accord", before: "https://picsum.photos/800/600?random=31", after: "https://picsum.photos/800/600?random=32" },
  { id: 4, title: "Full Interior Steam Clean", car: "Family Minivan", before: "https://picsum.photos/800/600?random=41", after: "https://picsum.photos/800/600?random=42" },
  { id: 5, title: "Engine Bay Detailing", car: "Luxury SUV", before: "https://picsum.photos/800/600?random=51", after: "https://picsum.photos/800/600?random=52" },
  { id: 6, title: "Wash & Wax Transformation", car: "Matte Finish Lamborghini", before: "https://picsum.photos/800/600?random=61", after: "https://picsum.photos/800/600?random=62" },
];

const ComparisonSlider = ({ before, after }: { before: string, after: string }) => {
  const [sliderPos, setSliderPos] = useState(50);

  const handleMove = (e: React.MouseEvent | React.TouchEvent) => {
    const container = (e.currentTarget as HTMLElement).getBoundingClientRect();
    const x = 'touches' in e ? e.touches[0].clientX : (e as React.MouseEvent).clientX;
    const pos = ((x - container.left) / container.width) * 100;
    setSliderPos(Math.max(0, Math.min(100, pos)));
  };

  return (
    <div 
      className="relative aspect-[4/3] rounded-2xl overflow-hidden cursor-ew-resize group shadow-2xl"
      onMouseMove={handleMove}
      onTouchMove={handleMove}
    >
      <img src={before} alt="Before" className="absolute inset-0 w-full h-full object-cover grayscale opacity-80" />
      <div 
        className="absolute inset-0 w-full h-full overflow-hidden" 
        style={{ width: `${sliderPos}%` }}
      >
        <img src={after} alt="After" className="absolute inset-0 w-[100vw] max-w-none h-full object-cover" />
      </div>
      <div 
        className="absolute inset-y-0 w-1 bg-white shadow-[0_0_10px_rgba(0,0,0,0.5)] flex items-center justify-center pointer-events-none"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="w-8 h-8 rounded-full bg-white border-2 border-slate-900 shadow-xl flex items-center justify-center gap-1">
          <div className="w-0.5 h-3 bg-slate-900 rounded-full" />
          <div className="w-0.5 h-3 bg-slate-900 rounded-full" />
        </div>
      </div>
      <div className="absolute bottom-4 left-4 glass px-3 py-1 rounded-lg text-xs font-bold uppercase">Before</div>
      <div className="absolute bottom-4 right-4 glass px-3 py-1 rounded-lg text-xs font-bold uppercase text-accent">After</div>
    </div>
  );
};

const BeforeAfterWall = () => {
  return (
    <section className="py-24 bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Results Speak Louder</h2>
          <p className="text-slate-400 text-lg">Swipe to see the transformation of real Miami cars we've detailed.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {cases.map((item) => (
            <div key={item.id} className="group">
              <ComparisonSlider before={item.before} after={item.after} />
              <div className="mt-6">
                <h4 className="text-lg font-bold group-hover:text-accent transition-colors">{item.title}</h4>
                <p className="text-sm text-slate-500 font-medium tracking-tight uppercase">{item.car}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button className="px-8 py-3 glass border-white/10 rounded-full font-bold hover:bg-white/5 transition-all">
            View Full Gallery on Instagram
          </button>
        </div>
      </div>
    </section>
  );
};

export default BeforeAfterWall;
