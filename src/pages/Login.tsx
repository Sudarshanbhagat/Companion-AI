import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';
import { Mail, Lock, ArrowRight } from 'lucide-react';

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock login
    navigate('/permissions');
  };

  return (
    <ImmersiveLayout>
      <div className="w-full max-w-md mx-auto">
        <GlassCard className="flex flex-col gap-6 p-8">
          <h2 className="text-3xl font-light text-center mb-4">Access Terminal</h2>
          
          <form onSubmit={handleLogin} className="flex flex-col gap-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
              <input 
                type="email" 
                placeholder="Identity" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:border-primary/50 focus:bg-white/10 transition-all outline-none"
              />
            </div>
            
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-white/50" size={20} />
              <input 
                type="password" 
                placeholder="Passcode" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-12 pr-4 text-white placeholder-white/30 focus:border-primary/50 focus:bg-white/10 transition-all outline-none"
              />
            </div>

            <button 
              type="submit"
              className="mt-4 w-full py-4 bg-gradient-to-r from-primary to-primary-light rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all flex items-center justify-center gap-2"
            >
              Initialize Session <ArrowRight size={20} />
            </button>
          </form>

          <div className="flex flex-col gap-3 mt-4">
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-colors border border-white/5">
              Continue with Google
            </button>
            <button className="w-full py-3 bg-white/5 hover:bg-white/10 rounded-xl text-sm transition-colors border border-white/5">
              Continue with Apple
            </button>
          </div>
        </GlassCard>
      </div>
    </ImmersiveLayout>
  );
};

