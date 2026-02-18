import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';
import avatarImage from '../assets/avatar.png';

export const Profile = () => {
  const navigate = useNavigate();

  return (
    <ImmersiveLayout>
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)} className="text-white/50 hover:text-white mr-4">Back</button>
          <h2 className="text-2xl font-light">Profile</h2>
        </div>

        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white/20 mb-4">
            <img src={avatarImage} alt="User" className="w-full h-full object-cover" />
          </div>
          <h3 className="text-xl font-medium">Alex Chen</h3>
          <p className="text-white/50">Pro Member</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-8">
          <GlassCard className="text-center py-6">
            <div className="text-3xl font-light text-accent-cyan mb-1">12h</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">Focus Time</div>
          </GlassCard>
          <GlassCard className="text-center py-6">
            <div className="text-3xl font-light text-accent-magenta mb-1">84</div>
            <div className="text-xs text-white/50 uppercase tracking-wider">Interactions</div>
          </GlassCard>
        </div>

        <GlassCard className="p-6">
          <h4 className="text-sm font-medium text-white/70 mb-4 uppercase tracking-wider">Subscription</h4>
          <div className="flex justify-between items-center mb-4">
            <span>Current Plan</span>
            <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-xs">Pro</span>
          </div>
          <button onClick={() => navigate('/subscription')} className="w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl text-sm transition-colors">
            Manage Subscription
          </button>
        </GlassCard>
      </div>
    </ImmersiveLayout>
  );
};
