
import React, { useState } from 'react';
import { Search, ChevronDown, Sparkles } from 'lucide-react';
import { FAQS } from '../constants';

const FAQSection = () => {
  const [search, setSearch] = useState('');
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const filteredFaqs = FAQS.filter(f => 
    f.q.toLowerCase().includes(search.toLowerCase()) || 
    f.a.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Common Questions</h2>
          <p className="text-slate-400">Everything you need to know about our premium mobile service.</p>
        </div>

        <div className="mb-10 relative">
          <Search className="absolute left-5 top-5 text-slate-500" />
          <input 
            type="text"
            placeholder="Search questions (e.g. 'How long does it take?')"
            className="w-full glass py-5 px-14 rounded-2xl border-white/10 outline-none focus:border-accent transition-all text-lg"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-5 top-5 hidden sm:flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-500 bg-slate-900 px-3 py-1 rounded-full">
            <Sparkles size={12} className="text-accent" /> AI Augmented
          </div>
        </div>

        <div className="space-y-4">
          {filteredFaqs.map((faq, idx) => (
            <div key={idx} className="glass rounded-2xl border-white/5 overflow-hidden transition-all">
              <button 
                className="w-full p-6 text-left flex items-center justify-between group"
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                <span className="font-bold text-lg group-hover:text-accent transition-colors">{faq.q}</span>
                <ChevronDown className={`transition-transform duration-300 ${openIdx === idx ? 'rotate-180 text-accent' : 'text-slate-500'}`} />
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${openIdx === idx ? 'max-h-96' : 'max-h-0'}`}>
                <div className="p-6 pt-0 text-slate-400 leading-relaxed border-t border-white/5 bg-slate-900/20">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
          {filteredFaqs.length === 0 && (
            <div className="text-center py-12">
              <p className="text-slate-500">No matching questions found. Try a different keyword!</p>
            </div>
          )}
        </div>

        <div className="mt-12 text-center p-8 rounded-3xl bg-accent/5 border border-accent/10">
          <p className="text-sm font-bold uppercase tracking-widest text-accent mb-2">Still have questions?</p>
          <p className="text-slate-300 mb-6">Our experts are available via WhatsApp for immediate assistance.</p>
          <a href="#quote" className="px-8 py-3 bg-accent text-slate-900 rounded-full font-bold">Ask AI Expert</a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
