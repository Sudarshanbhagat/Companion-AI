import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';
import { Mic, Bell, Check } from 'lucide-react';

export const Permissions = () => {
  const navigate = useNavigate();

  return (
    <ImmersiveLayout>
      <div className="w-full max-w-md mx-auto text-center">
        <h2 className="text-2xl font-light mb-8">System Access Required</h2>
        
        <div className="flex flex-col gap-4 mb-8">
          <GlassCard className="flex items-center gap-4 p-4 text-left hover:bg-white/5 transition-colors">
            <div className="p-3 bg-accent-cyan/20 rounded-full text-accent-cyan">
              <Mic size={24} />
            </div>
            <div>
              <h3 className="font-medium">Audio Input</h3>
              <p className="text-sm text-white/50">Required for voice interaction</p>
            </div>
            <div className="ml-auto">
              <button className="px-4 py-2 bg-white/10 rounded-full text-xs hover:bg-white/20 transition-colors">Allow</button>
            </div>
          </GlassCard>

          <GlassCard className="flex items-center gap-4 p-4 text-left hover:bg-white/5 transition-colors">
            <div className="p-3 bg-accent-magenta/20 rounded-full text-accent-magenta">
              <Bell size={24} />
            </div>
            <div>
              <h3 className="font-medium">Notifications</h3>
              <p className="text-sm text-white/50">For timely updates and reminders</p>
            </div>
            <div className="ml-auto">
              <button className="px-4 py-2 bg-white/10 rounded-full text-xs hover:bg-white/20 transition-colors">Allow</button>
            </div>
          </GlassCard>
        </div>

        <button 
          onClick={() => navigate('/avatar-creation')}
          className="px-8 py-3 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-colors"
        >
          Continue Setup
        </button>
      </div>
    </ImmersiveLayout>
  );
};
