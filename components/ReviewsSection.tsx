
import React from 'react';
import { Star, Quote } from 'lucide-react';

const featuredReview = {
  name: "Carlos Mendez",
  car: "Tesla Model Y Performance",
  quote: "Absolutely blown away by the paint correction and ceramic coating. The team was punctual, professional, and the finish is better than when I first took delivery from Tesla. Worth every penny for the convenience of mobile service!",
  rating: 5
};

const otherReviews = [
  { name: "Jessica R.", car: "Porsche Cayenne", quote: "The premium interior detail fixed stains I thought were permanent. Highly recommend for families!", rating: 5 },
  { name: "David K.", car: "BMW M3", quote: "Mirror finish! These guys really know their craft. Best in Miami hands down.", rating: 5 },
  { name: "Sophia L.", car: "Audi Q7", quote: "Reliable, thorough, and reasonably priced. Will be my go-to for monthly maintenance.", rating: 5 },
];

const ReviewsSection = () => {
  return (
    <section className="py-24 relative">
       {/* Background accents */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[300px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-1 text-accent mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={20} fill="currentColor" />)}
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Trusted by Miami's Elite</h2>
          <p className="text-slate-400 text-lg">Over 330+ Five-Star reviews on Google. Real people, real results.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-3 glass p-10 md:p-14 rounded-[48px] border-accent/10 relative group">
            <Quote size={80} className="absolute top-8 right-8 text-accent/10 group-hover:text-accent/20 transition-all" />
            <div className="relative z-10">
              <div className="flex items-center gap-1 text-accent mb-6">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <p className="text-2xl md:text-3xl font-medium mb-10 leading-relaxed italic text-white/90">
                "{featuredReview.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-accent/20 rounded-2xl flex items-center justify-center font-bold text-accent text-xl">
                  {featuredReview.name[0]}
                </div>
                <div>
                  <p className="font-bold text-lg">{featuredReview.name}</p>
                  <p className="text-sm text-slate-500 font-medium tracking-tight uppercase">{featuredReview.car}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            {otherReviews.map((rev, idx) => (
              <div key={idx} className="glass p-6 rounded-[32px] border-white/5 hover:border-accent/20 transition-all">
                <div className="flex items-center gap-1 text-accent mb-3">
                  {[1,2,3,4,5].map(i => <Star key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-slate-400 text-sm italic mb-4">"{rev.quote}"</p>
                <div className="flex items-center justify-between">
                  <span className="font-bold text-sm">{rev.name}</span>
                  <span className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">{rev.car}</span>
                </div>
              </div>
            ))}
            <div className="pt-4">
              <a href="#" className="flex items-center justify-center gap-3 w-full py-4 glass border-white/10 rounded-2xl font-bold text-sm hover:bg-white/5 transition-all">
                <img src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_logo_%282015%29.svg" className="h-5" alt="Google" />
                See all 330+ reviews
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
