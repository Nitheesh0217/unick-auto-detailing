
import React, { useState } from 'react';
import { Lock, ArrowRight } from 'lucide-react';

const Login = ({ onLogin }: { onLogin: (p: string) => boolean }) => {
  const [pass, setPass] = useState('');
  const [error, setError] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin(pass)) {
      setError(false);
    } else {
      setError(true);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-950 px-4">
      <div className="max-w-md w-full glass p-10 rounded-[40px] border-white/5 text-center">
        <div className="w-20 h-20 bg-accent rounded-3xl flex items-center justify-center mx-auto mb-8 rotate-3">
          <Lock size={40} className="text-slate-900" />
        </div>
        <h1 className="text-3xl font-bold mb-2 uppercase tracking-tighter italic">ADMIN<span className="text-accent">ACCESS</span></h1>
        <p className="text-slate-500 mb-8">Enter the secure password to view leads.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <input 
            type="password" 
            placeholder="••••••••"
            className={`w-full bg-slate-900 border ${error ? 'border-red-500/50' : 'border-white/10'} rounded-2xl px-6 py-4 text-center text-2xl tracking-[0.5em] outline-none focus:border-accent transition-all`}
            value={pass}
            onChange={(e) => {
              setPass(e.target.value);
              setError(false);
            }}
            autoFocus
          />
          {error && <p className="text-red-500 text-xs font-bold uppercase tracking-widest">Invalid credentials</p>}
          <button type="submit" className="w-full py-4 bg-accent text-slate-900 rounded-2xl font-bold text-lg hover:scale-105 active:scale-95 transition-all flex items-center justify-center gap-2">
            Unlock Dashboard <ArrowRight size={20} />
          </button>
        </form>
        
        <p className="mt-12 text-xs text-slate-600 font-medium">
          Protected by UNICK SECURE SYSTEM 2026
        </p>
      </div>
    </div>
  );
};

export default Login;
