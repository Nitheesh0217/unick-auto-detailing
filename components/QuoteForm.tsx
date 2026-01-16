
import React, { useState } from 'react';
import { Check, ChevronRight, ChevronLeft, Calendar, User, Car, Clock, Sparkles, Upload, Zap, ShieldCheck, MapPin } from 'lucide-react';
import { SERVICES, SERVICE_AREAS } from '../constants';
import { QuoteRequest } from '../types';
import { leadStore } from '../lib/store';

const QuoteForm = () => {
  const [step, setStep] = useState(0); // 0 is Intent Selection
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [intent, setIntent] = useState<string | null>(null);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [formData, setFormData] = useState<Partial<QuoteRequest>>({
    services: [],
    vehicle: { year: 2024, make: '', model: '' },
    contact: { name: '', email: '', phone: '', whatsapp: true },
    location: '',
    preferredDate: '',
    preferredTime: 'morning',
    notes: '',
  });

  const intents = [
    { 
      id: 'sell', 
      label: 'Preparing to Sell', 
      sub: 'Maximize Resale Value',
      desc: 'Make it look showroom-ready to boost your asking price.',
      icon: Zap 
    },
    { 
      id: 'new', 
      label: 'New Car Protection', 
      sub: 'Keep It Showroom Perfect',
      desc: 'Protect your investment from day one with premium care.',
      icon: ShieldCheck 
    },
    { 
      id: 'damage', 
      label: 'Restoration / Repair', 
      sub: 'Fix Scratches & Stains',
      desc: 'Restore your car to like-new condition quickly.',
      icon: Sparkles 
    },
    { 
      id: 'maintenance', 
      label: 'Concierge Maintenance', 
      sub: 'Stay Fresh Monthly',
      desc: 'Keep your car in pristine condition year-round.',
      icon: Car 
    },
  ];

  const toggleService = (name: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services?.includes(name) 
        ? prev.services.filter(s => s !== name) 
        : [...(prev.services || []), name]
    }));
  };

  const calculateEstimate = () => {
    let min = 0;
    formData.services?.forEach(s => {
      const service = SERVICES.find(svc => svc.name === s);
      if (service) min += service.basePrice;
    });
    // Anchor psychology: Bundled value
    if ((formData.services?.length || 0) >= 2) min = Math.round(min * 0.85);
    return { min, max: Math.round(min * 1.25) };
  };

  const handleIntent = (id: string) => {
    setIntent(id);
    setStep(1);
  };

  // Fix: Added handleNext and handleBack functions for step navigation
  const validateStep = (stepNum: number): boolean => {
    const newErrors: Record<string, string> = {};

    if (stepNum === 1) {
      if (!formData.services || formData.services.length === 0) {
        newErrors.services = 'Please select at least one service';
      }
    } else if (stepNum === 2) {
      if (!formData.vehicle?.make) newErrors.make = 'Please enter vehicle make';
      if (!formData.vehicle?.model) newErrors.model = 'Please enter vehicle model';
    } else if (stepNum === 3) {
      if (!formData.contact?.name) newErrors.name = 'Please enter your name';
      if (!formData.contact?.phone) newErrors.phone = 'Please enter your phone';
      if (!formData.contact?.email) newErrors.email = 'Please enter your email';
      if (!formData.location) newErrors.location = 'Please select a service area';
    } else if (stepNum === 4) {
      if (!formData.preferredDate) newErrors.date = 'Please select a date';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step + 1)) {
      setStep(prev => Math.min(prev + 1, 5));
    }
  };
  const handleBack = () => setStep(prev => Math.max(prev - 1, 0));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullLead: QuoteRequest = {
      id: Math.random().toString(36).substr(2, 9),
      timestamp: new Date(),
      status: 'new',
      estimatedPrice: calculateEstimate(),
      ...(formData as Required<Omit<QuoteRequest, 'id' | 'timestamp' | 'status' | 'estimatedPrice'>>)
    };
    
    leadStore.addLead(fullLead);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-20 animate-in fade-in zoom-in-95 duration-700">
        <div className="w-32 h-32 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-10 shadow-[0_0_80px_rgba(16,185,129,0.2)]">
          <Check size={64} className="text-success" strokeWidth={3} />
        </div>
        <h2 className="text-5xl font-black italic uppercase tracking-tighter mb-4 text-white">Mission Confirmed.</h2>
        <p className="text-slate-400 text-lg mb-12 max-w-md mx-auto font-medium">
          Elite care is inbound, {formData.contact?.name?.split(' ')[0]}. Dispatch will confirm your slot at <span className="text-white font-black underline decoration-gold underline-offset-4">{formData.contact?.phone}</span> within 10 mins.
        </p>
        <div className="flex flex-col sm:flex-row gap-5 justify-center">
          <button className="px-12 py-6 bg-gold text-slate-950 rounded-full font-black text-xl hover:scale-105 transition-all shadow-2xl">Sync to Calendar</button>
          <a href={`https://wa.me/17866227620?text=Hi, I just requested a quote for my ${formData.vehicle?.make}!`} target="_blank" className="px-12 py-6 glass-card border-white/10 rounded-full font-black text-xl hover:bg-white/5 transition-all flex items-center justify-center gap-3">
            Priority WhatsApp Chat
          </a>
        </div>
      </div>
    );
  }

  const estimate = calculateEstimate();

  return (
    <div className="glass-card rounded-[64px] border-white/5 shadow-2xl overflow-hidden relative group">
      {/* Progress DNA Bar */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-slate-900 flex overflow-hidden">
        {[0, 1, 2, 3, 4, 5].map(i => (
          <div 
            key={i} 
            className={`flex-1 transition-all duration-1000 ease-in-out ${step >= i ? 'bg-gold shadow-[0_0_30px_#FFB84D]' : ''}`}
          />
        ))}
      </div>

      <div className="flex flex-col lg:flex-row min-h-[700px]">
        {/* Sidebar Info */}
        <div className="lg:w-1/3 bg-slate-900/40 p-12 border-r border-white/5 flex flex-col">
          <div className="mb-12">
            <span className="text-[10px] font-black uppercase tracking-[0.4em] text-gold mb-2 block">Step {step + 1}</span>
            <h3 className="text-4xl font-black italic uppercase tracking-tighter leading-[0.9] mb-3 text-white">
              {step === 0 ? "Your Goal" : step === 1 ? "Choose Services" : step === 2 ? "Vehicle Info" : step === 3 ? "Contact Info" : step === 4 ? "Schedule" : "Confirmation"}
            </h3>
            <p className="text-[10px] text-gold/60 font-bold uppercase tracking-[0.1em] mb-3">
              {step === 0 ? "Tell us your detailing goal" : 
               step === 1 ? "Pick services & get pricing" : 
               step === 2 ? "Vehicle details" :
               step === 3 ? "Contact info" : 
               step === 4 ? "Pick your time" : 
               "Confirm booking"}
            </p>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              {step === 0 ? "Selling your car? New car protection? Fixing damage? Or monthly maintenance? This helps us customize your service." : 
               step === 1 ? "Mix and match services. Book 2+ and save 15% with bundle discounts." : 
               step === 2 ? "We match products and techniques to your car's year, make, and condition." :
               step === 3 ? "Your name, phone, email, and WhatsApp preference so we can confirm fast." : 
               step === 4 ? "Choose your preferred time in the Miami area." : 
               "All set! We'll dispatch within 24 hours."}
            </p>
          </div>

          {/* Live Price Estimate - Sticky during flow */}
          {step > 0 && step < 5 && (
            <div className="mb-10 p-8 bg-gold/10 rounded-3xl border border-gold/30 animate-in fade-in duration-500">
              <p className="text-[10px] font-black uppercase tracking-[0.3em] text-gold/70 mb-3">Current Estimate</p>
              <div className="flex items-baseline gap-2 mb-2">
                <p className="text-3xl font-black italic text-gold">${estimate.min}</p>
                <p className="text-sm text-slate-400">—</p>
                <p className="text-3xl font-black italic text-gold">${estimate.max}</p>
              </div>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
                {formData.services?.length === 0 ? '(Select services to see estimate)' : formData.services?.length === 1 ? `${formData.services.length} service selected` : `${formData.services?.length} services selected`}
              </p>
              {(formData.services?.length || 0) >= 2 && (
                <p className="text-[10px] text-success font-bold uppercase tracking-widest mt-2 flex items-center gap-1">
                  <Check size={12} /> 15% Bundle Savings Applied
                </p>
              )}
            </div>
          )}

          <div className="mt-auto space-y-8 hidden lg:block border-t border-white/5 pt-12">
             <div className="flex items-center gap-5 group">
               <div className="w-14 h-14 rounded-2xl bg-gold/10 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-slate-950 transition-all duration-500">
                 <ShieldCheck size={28} />
               </div>
               <div>
                 <p className="text-xs font-black text-white uppercase tracking-widest">Unick Shield</p>
                 <p className="text-[10px] font-bold text-slate-500 uppercase">100% Guaranteed Results</p>
               </div>
             </div>
             <div className="flex items-center gap-5 group">
               <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center text-[#00E5FF] group-hover:bg-[#00E5FF] group-hover:text-slate-950 transition-all duration-500">
                 <Zap size={28} fill="currentColor" />
               </div>
               <div>
                 <p className="text-xs font-black text-white uppercase tracking-widest">Rapid Response</p>
                 <p className="text-[10px] font-bold text-slate-500 uppercase">Under 10 Min Dispatch</p>
               </div>
             </div>
          </div>
        </div>

        {/* Form Area */}
        <div className="flex-1 p-10 md:p-16 flex flex-col justify-center">
          {step === 0 && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
              <h4 className="text-2xl font-black italic uppercase tracking-tighter mb-3 text-white">What is your primary goal?</h4>
              <p className="text-slate-400 text-sm mb-10 font-medium">Pick the option that best matches your needs. We'll customize your quote accordingly.</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {intents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleIntent(item.id)}
                    className={`p-6 md:p-8 rounded-[28px] transition-all duration-300 text-left group border-2 ${
                      intent === item.id 
                        ? 'border-gold bg-gold/10 shadow-lg shadow-gold/20' 
                        : 'border-white/10 bg-white/5 hover:border-gold/60 hover:bg-gold/5'
                    }`}
                  >
                    {/* Icon container */}
                    <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                      intent === item.id 
                        ? 'bg-gold text-slate-950 shadow-lg shadow-gold/30' 
                        : 'bg-white/10 text-gold group-hover:bg-gold/20'
                    }`}>
                      <item.icon size={28} />
                    </div>

                    {/* Content */}
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <p className="font-black italic uppercase tracking-tight text-lg md:text-xl text-white">{item.label}</p>
                        <p className="text-[10px] font-bold text-gold/70 uppercase tracking-widest mt-1">{item.sub}</p>
                      </div>
                      {intent === item.id && (
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gold flex items-center justify-center">
                          <Check size={16} className="text-slate-950" strokeWidth={3} />
                        </div>
                      )}
                    </div>

                    {/* Plain English benefit */}
                    <p className="text-xs text-slate-300 leading-relaxed">{item.desc}</p>

                    {/* Progress indicator - show selected state */}
                    {intent === item.id && (
                      <div className="mt-4 pt-4 border-t border-gold/20 flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                        <p className="text-[10px] font-bold text-gold uppercase tracking-wide">Selected</p>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              {intent && (
                <div className="mt-10 animate-in fade-in slide-in-from-bottom-5 duration-500">
                  <button 
                    type="button"
                    onClick={() => setStep(1)}
                    className="w-full md:w-auto px-12 py-4 bg-gold text-slate-950 rounded-full font-black uppercase tracking-widest hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-gold/30"
                  >
                    Continue to Services
                  </button>
                </div>
              )}
            </div>
          )}

          {step === 1 && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-700">
              <div className="grid sm:grid-cols-2 gap-5">
                {SERVICES.map(svc => (
                  <button
                    key={svc.id}
                    type="button"
                    onClick={() => toggleService(svc.name)}
                    className={`p-8 rounded-[36px] border text-left transition-all relative group/card ${
                      formData.services?.includes(svc.name) 
                      ? 'border-gold bg-gold/5 ring-1 ring-gold shadow-[0_0_40px_-10px_rgba(255,184,77,0.2)]' 
                      : 'border-white/5 bg-white/5 hover:border-white/20'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className={`w-10 h-10 rounded-2xl border flex items-center justify-center transition-all ${
                        formData.services?.includes(svc.name) ? 'bg-gold border-gold text-slate-950 scale-110' : 'border-white/10'
                      }`}>
                        {formData.services?.includes(svc.name) && <Check size={24} strokeWidth={4} />}
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-gold">{svc.price}</span>
                    </div>
                    <h4 className="font-black italic uppercase tracking-tighter text-2xl mb-2 text-white">{svc.name}</h4>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed line-clamp-2">{svc.description}</p>
                  </button>
                ))}
              </div>
              {errors.services && (
                <div className="mt-6 p-4 bg-red-500/10 border border-red-500/30 rounded-2xl">
                  <p className="text-xs font-bold text-red-400 uppercase tracking-widest">{errors.services}</p>
                </div>
              )}
              {formData.services?.length! >= 2 && (
                <div className="mt-10 p-6 bg-gold/10 border border-gold/30 rounded-3xl flex items-center justify-between animate-pulse">
                   <div className="flex items-center gap-3">
                      <Zap size={20} className="text-gold" fill="currentColor" />
                      <span className="text-sm font-black uppercase tracking-widest text-gold">Combo Multiplier Applied</span>
                   </div>
                   <span className="text-xs font-bold text-white">15% SAVED</span>
                </div>
              )}
            </div>
          )}

          {step === 2 && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-700 space-y-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Model Year</label>
                  <select 
                    className="w-full bg-slate-950 border border-white/10 rounded-[20px] px-6 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white"
                    value={formData.vehicle?.year}
                    onChange={e => setFormData(p => ({ ...p, vehicle: { ...p.vehicle!, year: Number(e.target.value) } }))}
                  >
                    {Array.from({length: 27}, (_, i) => 2026 - i).map(y => (
                      <option key={y} value={y}>{y}</option>
                    ))}
                  </select>
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Manufacturer</label>
                  <input 
                    type="text" required placeholder="e.g. Porsche"
                    className="w-full bg-slate-950 border border-white/10 rounded-[20px] px-6 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white"
                    value={formData.vehicle?.make}
                    onChange={e => setFormData(p => ({ ...p, vehicle: { ...p.vehicle!, make: e.target.value } }))}
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Vehicle Model</label>
                  <input 
                    type="text" required placeholder="e.g. GT3 RS"
                    className="w-full bg-slate-950 border border-white/10 rounded-[20px] px-6 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white"
                    value={formData.vehicle?.model}
                    onChange={e => setFormData(p => ({ ...p, vehicle: { ...p.vehicle!, model: e.target.value } }))}
                  />
                </div>
              </div>
              <div className="p-12 border-2 border-dashed border-white/10 rounded-[48px] text-center group/upload hover:border-gold/40 transition-all cursor-pointer bg-slate-900/20">
                <div className="w-20 h-20 bg-white/5 rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover/upload:scale-110 group-hover/upload:bg-gold/10 transition-all">
                  <Upload size={32} className="text-slate-500 group-hover/upload:text-gold" />
                </div>
                <p className="font-black italic uppercase tracking-tighter text-2xl mb-2 text-white">Show Us Your Car</p>
                <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Upload photos for more accurate pricing (Optional)</p>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-700 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Owner Name</label>
                  <input 
                    type="text" required placeholder="Full Name"
                    className={`w-full bg-slate-950 border rounded-[20px] px-8 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white ${
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    value={formData.contact?.name}
                    onChange={e => {
                      setFormData(p => ({ ...p, contact: { ...p.contact!, name: e.target.value } }));
                      if (errors.name) setErrors(p => ({ ...p, name: '' }));
                    }}
                  />
                  {errors.name && <p className="text-xs text-red-400 font-bold">{errors.name}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Priority Phone</label>
                  <input 
                    type="tel" required placeholder="(786) 000-0000"
                    className={`w-full bg-slate-950 border rounded-[20px] px-8 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white ${
                      errors.phone ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    value={formData.contact?.phone}
                    onChange={e => {
                      setFormData(p => ({ ...p, contact: { ...p.contact!, phone: e.target.value } }));
                      if (errors.phone) setErrors(p => ({ ...p, phone: '' }));
                    }}
                  />
                  {errors.phone && <p className="text-xs text-red-400 font-bold">{errors.phone}</p>}
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Strategic Email</label>
                  <input 
                    type="email" required placeholder="name@domain.com"
                    className={`w-full bg-slate-950 border rounded-[20px] px-8 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    value={formData.contact?.email}
                    onChange={e => {
                      setFormData(p => ({ ...p, contact: { ...p.contact!, email: e.target.value } }));
                      if (errors.email) setErrors(p => ({ ...p, email: '' }));
                    }}
                  />
                  {errors.email && <p className="text-xs text-red-400 font-bold">{errors.email}</p>}
                </div>
                <div className="md:col-span-2 space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Service Location</label>
                  <select 
                    className={`w-full bg-slate-950 border rounded-[20px] px-8 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white ${
                      errors.location ? 'border-red-500/50' : 'border-white/10'
                    }`}
                    value={formData.location}
                    onChange={e => {
                      setFormData(p => ({ ...p, location: e.target.value }));
                      if (errors.location) setErrors(p => ({ ...p, location: '' }));
                    }}
                  >
                    <option value="">Select a Miami service area...</option>
                    {SERVICE_AREAS.map(area => <option key={area} value={area}>{area}</option>)}
                  </select>
                  {errors.location && <p className="text-xs text-red-400 font-bold">{errors.location}</p>}
                </div>
                <div className="md:col-span-2 flex items-center gap-6 p-6 glass-card rounded-[28px] border-white/5">
                  <input 
                    type="checkbox" 
                    id="whatsapp-opt"
                    className="w-8 h-8 rounded-xl accent-gold"
                    checked={formData.contact?.whatsapp}
                    onChange={e => setFormData(p => ({ ...p, contact: { ...p.contact!, whatsapp: e.target.checked } }))}
                  />
                  <label htmlFor="whatsapp-opt" className="text-xs font-black uppercase tracking-[0.2em] text-slate-400">Enable Neural Comms via WhatsApp (Recommended)</label>
                </div>
              </div>
            </div>
          )}

          {step === 4 && (
             <div className="animate-in fade-in slide-in-from-right-10 duration-700 space-y-10">
               <div className="grid grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Target Date</label>
                    <input 
                      type="date" 
                      className={`w-full bg-slate-950 border rounded-[20px] px-8 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white ${
                        errors.date ? 'border-red-500/50' : 'border-white/10'
                      }`}
                      value={formData.preferredDate} 
                      onChange={e => {
                        setFormData(p => ({ ...p, preferredDate: e.target.value }));
                        if (errors.date) setErrors(p => ({ ...p, date: '' }));
                      }} 
                    />
                    {errors.date && <p className="text-xs text-red-400 font-bold">{errors.date}</p>}
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-600">Arrival Window</label>
                    <select 
                      className="w-full bg-slate-950 border border-white/10 rounded-[20px] px-8 py-6 text-sm font-bold outline-none focus:border-gold transition-all text-white" 
                      value={formData.preferredTime} 
                      onChange={e => setFormData(p => ({ ...p, preferredTime: e.target.value as any }))}
                    >
                      <option value="morning">Morning (08:00 - 12:00)</option>
                      <option value="afternoon">Afternoon (12:00 - 16:00)</option>
                      <option value="evening">Evening (16:00 - 19:00)</option>
                    </select>
                  </div>
               </div>
               <div className="p-10 bg-white/5 rounded-[40px] border border-white/5">
                  <p className="text-[10px] font-black uppercase tracking-widest text-gold mb-4 flex items-center gap-2">
                    <MapPin size={12} /> Live Scarcity Check
                  </p>
                  <p className="text-lg font-bold text-slate-300">"Thursday morning is currently 85% full. Booking now secures the final slot for {formData.location || 'your area'}."</p>
               </div>
             </div>
          )}

          {step === 5 && (
            <div className="animate-in fade-in slide-in-from-right-10 duration-700 space-y-10">
              <div className="bg-white/[0.03] rounded-[48px] p-12 border border-white/10">
                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-3">Vehicle Dossier</p>
                    <p className="text-3xl font-black italic uppercase tracking-tighter text-white">{formData.vehicle?.year} {formData.vehicle?.make} {formData.vehicle?.model}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-600 mb-3">Operation Payloads</p>
                    <div className="flex flex-wrap gap-2">
                      {formData.services?.map(s => (
                        <span key={s} className="px-4 py-1.5 bg-gold/10 rounded-full text-[10px] font-black uppercase tracking-widest text-gold border border-gold/20">{s}</span>
                      ))}
                    </div>
                  </div>
                  <div className="md:col-span-2 pt-10 border-t border-white/5 flex items-center justify-between">
                    <div>
                       <p className="text-sm font-black text-slate-500 uppercase tracking-[0.2em] mb-1">Estimated Valuation</p>
                       <p className="text-[10px] font-bold text-slate-600 uppercase">Resale value preservation: +$2,400 est.</p>
                    </div>
                    <div className="text-right">
                       <p className="text-4xl font-black italic tracking-tighter text-gold">${estimate.min} — ${estimate.max}</p>
                       <p className="text-[10px] font-bold text-success uppercase mt-1">✓ Bundled pricing applied</p>
                    </div>
                  </div>
                  <div className="md:col-span-full mt-6 p-4 bg-emerald-500/5 rounded-xl border border-emerald-500/10">
                    <ul className="space-y-1.5">
                      <li className="flex items-center gap-2 text-xs text-slate-300">
                        <Check size={14} className="text-emerald-500" />
                        No hidden fees
                      </li>
                      <li className="flex items-center gap-2 text-xs text-slate-300">
                        <Check size={14} className="text-emerald-500" />
                        Price confirmed via text before we start
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-xs font-bold text-slate-500 uppercase tracking-widest text-center italic">"I acknowledge that Unick Mobile units are self-contained and require 2-6 hours for transformation."</p>
              </div>
            </div>
          )}

          {/* Nav Actions */}
          <div className="mt-16 flex items-center justify-between">
            {step > 0 ? (
              <button 
                type="button" 
                onClick={handleBack}
                className="flex items-center gap-3 text-slate-500 font-black uppercase tracking-widest text-xs hover:text-white transition-all group"
              >
                <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform" /> 
                Preceding Phase
              </button>
            ) : <div />}

            {step < 5 ? (
              <button 
                type="button" 
                onClick={step === 0 ? () => {} : handleNext} // Step 0 handled by buttons
                className={`${step === 0 ? 'hidden' : 'flex'} items-center justify-center gap-4 px-16 py-7 bg-platinum text-slate-950 rounded-full font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-2xl shadow-gold/20`}
              >
                Proceed to Phase {step + 1}
                <ChevronRight size={24} />
              </button>
            ) : (
              <button 
                type="submit"
                onClick={handleSubmit}
                className="px-20 py-8 liquid-gold-btn rounded-full font-black uppercase tracking-[0.2em] text-xl shadow-[0_20px_60px_-10px_rgba(255,184,77,0.6)]"
              >
                Lock In Transformation
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuoteForm;
