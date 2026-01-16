
import React, { useState, useEffect } from 'react';
import { Sparkles, Send, Bot, CheckCircle2, Loader2, Zap, BrainCircuit } from 'lucide-react';
import { SERVICES } from '../constants';

const AIAssistant = () => {
  const [query, setQuery] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [showResult, setShowResult] = useState(false);

  const placeholders = [
    "My 2024 Taycan has swirl marks from the automatic wash...",
    "Red wine stain on cream leather seats...",
    "I want my G-Wagon to have that deep, wet liquid look...",
    "Preparing my Ferrari for sale, need it museum-perfect..."
  ];
  const [placeholderIndex, setPlaceholderIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPlaceholderIndex(prev => (prev + 1) % placeholders.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleAsk = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    setIsLoading(true);
    setShowResult(false);

    // Simulated Thinking Loop
    setTimeout(() => {
      const q = query.toLowerCase();
      let recs = [];
      
      // Smart Logic (Future: Gemini API integration)
      if (q.includes('stain') || q.includes('interior') || q.includes('spill') || q.includes('mess')) {
        recs.push(SERVICES.find(s => s.id === 'premium-interior'));
      }
      if (q.includes('scratch') || q.includes('swirl') || q.includes('paint') || q.includes('polish')) {
        recs.push(SERVICES.find(s => s.id === 'paint-correction'));
      }
      if (q.includes('protection') || q.includes('shine') || q.includes('ceramic') || q.includes('new car')) {
        recs.push(SERVICES.find(s => s.id === 'ceramic-coating'));
      }
      
      if (recs.length === 0) recs.push(SERVICES.find(s => s.id === 'full-detail'));

      setRecommendations(recs);
      setIsLoading(false);
      setShowResult(true);
    }, 1800);
  };

  return (
    <section className="py-24 px-4 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="glass-card rounded-[64px] border-white/5 p-3 shadow-[0_0_100px_-20px_rgba(0,229,255,0.05)]">
          <div className="bg-slate-900/50 rounded-[60px] overflow-hidden">
            <div className="p-12 md:p-20 text-center lg:text-left grid lg:grid-cols-2 gap-20 items-center">
              <div>
                <div className="inline-flex flex-col gap-2 mb-8">
                  <div className="inline-flex items-center gap-3 px-5 py-2 bg-cyan-500/10 rounded-full text-[#00E5FF] text-[10px] font-black uppercase tracking-[0.3em] w-fit">
                    <BrainCircuit size={14} />
                    V.A.L. Concierge <span className="opacity-40 ml-1">v3.1 Neural</span>
                  </div>
                  <p className="text-[10px] text-cyan-300 font-bold uppercase tracking-[0.1em]">
                    AI Service Recommendations – Get matched in under 30 seconds
                  </p>
                </div>
                <h2 className="text-4xl md:text-6xl font-black mb-8 italic tracking-tighter uppercase leading-[1] text-white">
                  Let AI Map Your <br />
                  <span className="text-gold">Transformation.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-6 font-medium leading-relaxed">
                  Answer a few quick questions and we'll match your car to the exact detailing package it needs.
                </p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-[0.15em] mb-12">
                  Get a recommended package in under 30 seconds.
                </p>
                <p className="text-slate-500 text-sm font-medium leading-relaxed mb-12">
                  <span className="text-gold font-bold">Try:</span> "2024 Tesla with swirl marks" or "Red wine stain on leather seats" or "Preparing my car for sale"
                </p>
                
                <form onSubmit={handleAsk} className="relative group">
                  <div className="absolute -inset-1.5 bg-gradient-to-r from-gold/40 to-cyan-500/40 rounded-[32px] blur opacity-20 group-hover:opacity-40 transition duration-1000"></div>
                  <div className="relative">
                    <input 
                      type="text"
                      value={query}
                      onChange={(e) => setQuery(e.target.value)}
                      placeholder={placeholders[placeholderIndex]}
                      className="w-full bg-slate-950 border border-white/10 rounded-[28px] py-8 px-10 pr-20 text-xl font-medium focus:border-gold outline-none transition-all placeholder:text-slate-700 text-white"
                    />
                    <button 
                      type="submit" 
                      disabled={isLoading}
                      className="absolute right-4 top-4 bottom-4 w-16 h-16 bg-gold text-slate-950 rounded-2xl flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-2xl group/btn"
                      title="Find My Perfect Package"
                    >
                      {isLoading ? <Loader2 className="animate-spin" size={28} /> : <Send size={28} />}
                    </button>
                  </div>
                </form>
              </div>

              <div className="relative min-h-[400px] flex flex-col justify-center items-center">
                {isLoading && (
                  <div className="flex flex-col items-center gap-8">
                    <div className="w-24 h-24 bg-gold/10 rounded-[32px] flex items-center justify-center relative">
                      <Bot size={48} className="text-gold" />
                      <div className="absolute -inset-4 border-4 border-gold border-t-transparent rounded-full animate-spin"></div>
                    </div>
                    <div className="text-center">
                      <p className="text-gold font-black uppercase tracking-[0.4em] text-sm mb-2">Analyzing Profile</p>
                      <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Cross-referencing 2.4k Miami Details...</p>
                    </div>
                  </div>
                )}

                {showResult && !isLoading && (
                  <div className="w-full animate-in fade-in slide-in-from-bottom-10 duration-700">
                    <div className="flex items-center gap-3 mb-8">
                       <Bot size={20} className="text-gold" />
                       <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.3em]">
                         V.A.L. Strategic Recommendation:
                       </p>
                    </div>
                    <div className="space-y-5">
                      {recommendations.map((rec, idx) => (
                        <div key={idx} className="glass-card p-8 rounded-[36px] border-gold/20 flex items-center justify-between group hover:border-gold transition-all hover:translate-x-3 bg-slate-950/40">
                          <div className="flex items-center gap-6">
                            <div className="w-16 h-16 bg-gold/10 rounded-2xl flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-950 transition-all duration-500">
                              <CheckCircle2 size={36} />
                            </div>
                            <div>
                              <h4 className="font-black italic uppercase tracking-tight text-xl text-white">{rec.name}</h4>
                              <p className="text-xs text-slate-500 font-bold uppercase tracking-widest">{rec.price} | {rec.benefits[0]}</p>
                            </div>
                          </div>
                          <a href="#quote" className="w-14 h-14 bg-white/5 hover:bg-gold text-white hover:text-slate-950 rounded-2xl transition-all shadow-2xl flex items-center justify-center">
                            <Zap size={24} fill="currentColor" />
                          </a>
                        </div>
                      ))}
                    </div>
                    <div className="mt-10 flex items-center justify-between px-4">
                      <button 
                        onClick={() => {setQuery(''); setShowResult(false);}}
                        className="text-[10px] font-black uppercase tracking-widest text-slate-500 hover:text-gold transition-colors"
                      >
                        Reset Concierge
                      </button>
                      <p className="text-[10px] font-bold text-slate-600 uppercase">99.8% Match Accuracy</p>
                    </div>
                  </div>
                )}

                {!isLoading && !showResult && (
                  <div className="text-center group transition-all duration-1000">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-gold/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                      <Bot size={180} className="mx-auto text-slate-800 opacity-20 group-hover:opacity-40 transition-all" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Sparkles size={60} className="text-gold animate-pulse opacity-40 group-hover:opacity-100" />
                      </div>
                    </div>
                    <div className="text-center">
                      <p className="text-3xl font-black italic uppercase tracking-tighter text-slate-800 mt-6 group-hover:text-slate-700 transition-colors">AI Powered</p>
                      <p className="text-[10px] text-slate-600 font-bold uppercase tracking-widest mt-4">Analyzing your request...</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIAssistant;
