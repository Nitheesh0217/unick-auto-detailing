
import React, { useState, useEffect } from 'react';
import { 
  BarChart3, Users, DollarSign, MessageSquare, 
  Filter, MoreHorizontal, Phone, MessageCircle, Download, LogOut, Search, ArrowUpRight, TrendingUp
} from 'lucide-react';
import { leadStore } from '../lib/store';
import { QuoteRequest } from '../types';

const StatusBadge = ({ status }: { status: QuoteRequest['status'] }) => {
  const styles = {
    new: 'bg-gold/10 text-gold border-gold/20 shadow-[0_0_15px_rgba(255,184,77,0.1)]',
    contacted: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
    quoted: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
    scheduled: 'bg-purple-500/10 text-purple-400 border-purple-500/20',
    completed: 'bg-success/10 text-success border-success/20 shadow-[0_0_15px_rgba(16,185,129,0.1)]',
  };
  return (
    <span className={`px-3 py-1.5 rounded-xl text-[10px] font-black uppercase tracking-widest border border-solid transition-all ${styles[status]}`}>
      {status}
    </span>
  );
};

const AdminDashboard = ({ onLogout }: { onLogout: () => void }) => {
  const [leads, setLeads] = useState(leadStore.getLeads());
  const [filter, setFilter] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    return leadStore.subscribe(() => setLeads(leadStore.getLeads()));
  }, []);

  const totalPipeline = leads.reduce((sum, l) => sum + (l.estimatedPrice?.min || 0), 0);
  const closedRevenue = leads.filter(l => l.status === 'completed').reduce((sum, l) => sum + (l.estimatedPrice?.min || 0), 0);
  const newToday = leads.filter(l => new Date(l.timestamp).toDateString() === new Date().toDateString()).length;
  
  const stats = [
    { label: "New Leads (Today)", val: newToday.toString(), icon: Users, color: "text-gold", bg: "bg-gold/10" },
    { label: "Pipeline Value", val: `$${totalPipeline.toLocaleString()}`, icon: DollarSign, color: "text-blue-400", bg: "bg-blue-500/10" },
    { label: "Closed Revenue", val: `$${closedRevenue.toLocaleString()}`, icon: TrendingUp, color: "text-success", bg: "bg-success/10" },
    { label: "Conversion Rate", val: `${Math.round((leads.filter(l => l.status === 'completed').length / (leads.length || 1)) * 100)}%`, icon: BarChart3, color: "text-purple-400", bg: "bg-purple-500/10" },
  ];

  const filteredLeads = leads
    .filter(l => filter === 'all' || l.status === filter)
    .filter(l => 
      l.contact.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      l.contact.phone.includes(searchQuery) ||
      l.vehicle.make.toLowerCase().includes(searchQuery.toLowerCase())
    );

  const exportCSV = () => {
    const header = "Date,Name,Phone,Email,Vehicle,Services,PriceMin,Status\n";
    const rows = leads.map(l => 
      `${new Date(l.timestamp).toLocaleDateString()},${l.contact.name},${l.contact.phone},${l.contact.email},${l.vehicle.year} ${l.vehicle.make} ${l.vehicle.model},"${l.services.join(';')}",${l.estimatedPrice.min},${l.status}`
    ).join("\n");
    const blob = new Blob([header + rows], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `unick-leads-2026.csv`;
    a.click();
  };

  return (
    <div className="min-h-screen bg-slate-950 p-6 lg:p-16">
      <div className="max-w-[1600px] mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-12 mb-16">
          <div>
            <div className="flex items-center gap-4 mb-3">
               <div className="w-14 h-14 bg-gold rounded-2xl flex items-center justify-center rotate-3 shadow-[0_10px_30px_rgba(255,184,77,0.3)]">
                 <span className="text-slate-950 font-black text-3xl italic">U</span>
               </div>
               <div>
                  <h1 className="text-5xl font-black italic uppercase tracking-tighter text-white">COMMAND<span className="text-gold">CENTRAL</span></h1>
                  <p className="text-slate-500 font-bold uppercase tracking-[0.2em] text-xs">Lead Management Dashboard v1.0</p>
               </div>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <button onClick={exportCSV} className="px-8 py-4 glass-card border-white/5 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white/5 transition-all">
              <Download size={18} /> Export Intel
            </button>
            <button onClick={onLogout} className="px-8 py-4 glass-card border-red-500/20 text-red-400 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center gap-3 hover:bg-red-500/10 transition-all">
              <LogOut size={18} /> Exit System
            </button>
          </div>
        </div>

        {/* Neural Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((s, idx) => (
            <div key={idx} className="glass-card p-10 rounded-[48px] border-white/5 relative overflow-hidden group hover:border-white/10 transition-all">
              <div className={`absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity ${s.color}`}>
                <s.icon size={100} />
              </div>
              <div className="relative z-10">
                <div className={`w-16 h-16 rounded-[24px] flex items-center justify-center mb-8 ${s.bg} ${s.color} shadow-lg`}>
                  <s.icon size={32} />
                </div>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-500 mb-2">{s.label}</p>
                <p className="text-5xl font-black italic tracking-tighter text-white">{s.val}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Leads Table Matrix */}
        <div className="glass-card rounded-[56px] border-white/5 overflow-hidden shadow-2xl">
          <div className="p-10 border-b border-white/5 flex flex-col md:flex-row md:items-center justify-between gap-10">
            <div className="flex bg-slate-900/80 p-2 rounded-2xl border border-white/5 overflow-x-auto no-scrollbar">
              {['all', 'new', 'contacted', 'quoted', 'scheduled', 'completed'].map(f => (
                <button 
                  key={f}
                  onClick={() => setFilter(f)}
                  className={`px-8 py-3 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all shrink-0 ${filter === f ? 'bg-gold text-slate-950 shadow-xl' : 'text-slate-500 hover:text-white'}`}
                >
                  {f}
                </button>
              ))}
            </div>
            <div className="relative group w-full md:w-96">
              <Search className="absolute left-5 top-4.5 text-slate-600 group-focus-within:text-gold transition-colors" size={20} />
              <input 
                type="text" 
                placeholder="Search matrix..." 
                className="w-full pl-14 pr-8 py-4 bg-slate-900/80 border border-white/5 rounded-2xl text-sm font-bold outline-none focus:border-gold transition-all text-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-white/[0.01]">
                  <th className="p-10 text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">Lead Profile</th>
                  <th className="p-10 text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">Vehicle Specs</th>
                  <th className="p-10 text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">Treatment Stack</th>
                  <th className="p-10 text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">Phase</th>
                  <th className="p-10 text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black">Valuation</th>
                  <th className="p-10 text-[10px] uppercase tracking-[0.4em] text-slate-600 font-black text-right">Comms</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="group hover:bg-white/[0.03] transition-all">
                    <td className="p-10">
                      <div className="flex flex-col">
                        <span className="font-black text-xl uppercase tracking-tight text-white">{lead.contact.name}</span>
                        <span className="text-xs text-slate-500 font-bold mt-2 uppercase tracking-widest">{lead.location} • {new Date(lead.timestamp).toLocaleDateString()}</span>
                      </div>
                    </td>
                    <td className="p-10">
                      <div className="flex flex-col">
                        <span className="text-base font-black italic text-white">{lead.vehicle.year} {lead.vehicle.make}</span>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest">{lead.vehicle.model}</span>
                      </div>
                    </td>
                    <td className="p-10">
                      <div className="flex flex-wrap gap-2 max-w-[240px]">
                        {lead.services.map(s => (
                          <span key={s} className="text-[9px] px-3 py-1 bg-slate-800 rounded-lg text-slate-400 font-black uppercase tracking-tighter border border-white/10">{s}</span>
                        ))}
                      </div>
                    </td>
                    <td className="p-10">
                      <div className="relative group/status">
                        <StatusBadge status={lead.status} />
                        <div className="absolute left-0 top-full mt-3 w-56 glass-card rounded-2xl border-white/10 p-2 hidden group-hover/status:block z-50 shadow-2xl animate-in zoom-in-95 duration-200">
                          {['new', 'contacted', 'quoted', 'scheduled', 'completed'].map(st => (
                            <button 
                              key={st}
                              onClick={() => leadStore.updateStatus(lead.id, st as any)}
                              className="w-full text-left px-5 py-3 text-[10px] font-black uppercase tracking-widest hover:bg-gold hover:text-slate-950 rounded-xl transition-all"
                            >
                              Phase: {st}
                            </button>
                          ))}
                        </div>
                      </div>
                    </td>
                    <td className="p-10">
                      <p className="text-2xl font-black text-gold italic tracking-tighter">${lead.estimatedPrice?.min || 0}</p>
                    </td>
                    <td className="p-10">
                      <div className="flex items-center justify-end gap-4">
                        <a href={`tel:${lead.contact.phone}`} className="w-14 h-14 glass-card border-blue-500/20 text-blue-400 rounded-xl flex items-center justify-center hover:bg-blue-500/20 transition-all hover:scale-110">
                          <Phone size={22} />
                        </a>
                        <a href={`https://wa.me/${lead.contact.phone.replace(/\D/g,'')}`} target="_blank" className="w-14 h-14 glass-card border-success/20 text-success rounded-xl flex items-center justify-center hover:bg-success/20 transition-all hover:scale-110">
                          <MessageCircle size={22} />
                        </a>
                        <button className="w-14 h-14 glass-card border-white/5 text-slate-400 rounded-xl flex items-center justify-center hover:text-white transition-all">
                          <ArrowUpRight size={22} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {filteredLeads.length === 0 && (
              <div className="py-40 text-center">
                <div className="w-24 h-24 bg-slate-900 rounded-full flex items-center justify-center mx-auto mb-8 opacity-40">
                  <Search size={40} className="text-slate-600" />
                </div>
                <p className="text-slate-500 font-black uppercase tracking-[0.4em] italic text-lg">Matrix Empty</p>
                <button onClick={() => {setFilter('all'); setSearchQuery('');}} className="mt-6 text-gold font-bold text-sm uppercase tracking-[0.2em] hover:underline underline-offset-8">Clear Scan Parameters</button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
