import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';
import { Check, Star } from 'lucide-react';

export const Subscription = () => {
  const navigate = useNavigate();

  return (
    <ImmersiveLayout>
      <div className="w-full max-w-md mx-auto text-center">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)} className="text-white/50 hover:text-white mr-4">Back</button>
          <h2 className="text-2xl font-light">Upgrade</h2>
        </div>

        <GlassCard className="p-8 border-primary/50 shadow-neon-magenta relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-primary text-white text-xs px-3 py-1 rounded-bl-xl font-bold">POPULAR</div>
          <div className="mb-6">
            <h3 className="text-3xl font-bold mb-2">Pro Companion</h3>
            <p className="text-white/60">$9.99 / month</p>
          </div>

          <ul className="text-left space-y-4 mb-8">
            {['Unlimited Voice Interaction', 'Advanced Emotional Intelligence', 'Productivity Mode Integration', 'Priority Support'].map((feat, i) => (
              <li key={i} className="flex items-center gap-3">
                <div className="p-1 bg-green-500/20 rounded-full text-green-400"><Check size={12} /></div>
                <span className="text-sm">{feat}</span>
              </li>
            ))}
          </ul>

          <button className="w-full py-4 bg-gradient-to-r from-primary to-accent-magenta rounded-xl font-bold shadow-lg hover:shadow-xl transition-all transform hover:scale-105">
            Unlock Full Potential
          </button>
        </GlassCard>
      </div>
    </ImmersiveLayout>
  );
};
