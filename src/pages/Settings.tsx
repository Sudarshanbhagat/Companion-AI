import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';
import { User, Bell, Shield, LogOut, ChevronRight } from 'lucide-react';

export const Settings = () => {
  const navigate = useNavigate();

  const items = [
    { icon: User, label: 'Account', path: '/profile' },
    { icon: Bell, label: 'Notifications', path: '#' },
    { icon: Shield, label: 'Privacy & Security', path: '#' },
    { icon: LogOut, label: 'Log Out', path: '/login', color: 'text-red-400' },
  ];

  return (
    <ImmersiveLayout>
      <div className="w-full max-w-md mx-auto">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)} className="text-white/50 hover:text-white mr-4">Back</button>
          <h2 className="text-2xl font-light">Settings</h2>
        </div>

        <GlassCard className="p-0 overflow-hidden">
          {items.map((item, idx) => (
            <div 
              key={idx}
              onClick={() => item.path && navigate(item.path)}
              className="flex items-center p-4 border-b border-white/5 hover:bg-white/5 cursor-pointer transition-colors last:border-none"
            >
              <item.icon size={20} className={`mr-4 ${item.color || 'text-white/70'}`} />
              <span className="flex-1">{item.label}</span>
              <ChevronRight size={16} className="text-white/30" />
            </div>
          ))}
        </GlassCard>
      </div>
    </ImmersiveLayout>
  );
};
