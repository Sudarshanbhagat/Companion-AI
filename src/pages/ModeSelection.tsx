import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';
import { Zap, MessageCircle, Heart } from 'lucide-react';

export const ModeSelection = () => {
  const navigate = useNavigate();

  const modes = [
    {
      id: 'companion',
      title: 'Companion',
      desc: 'Emotional support & casual conversation',
      icon: Heart,
      color: 'text-accent-magenta',
      bg: 'hover:bg-accent-magenta/10'
    },
    {
      id: 'focus',
      title: 'Focus',
      desc: 'Productivity, planning & deep work',
      icon: Zap,
      color: 'text-accent-cyan',
      bg: 'hover:bg-accent-cyan/10'
    },
    {
      id: 'chat',
      title: 'Chat',
      desc: 'Quick questions & information',
      icon: MessageCircle,
      color: 'text-primary-light',
      bg: 'hover:bg-primary/10'
    }
  ];

  return (
    <ImmersiveLayout>
      <div className="w-full max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-light mb-2">Select Operation Mode</h2>
        <p className="text-white/50 mb-12">You can switch this at any time</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {modes.map((mode) => (
            <GlassCard 
              key={mode.id}
              onClick={() => navigate('/main')}
              className={`text-left cursor-pointer transition-all duration-300 group border-transparent hover:border-white/20 ${mode.bg}`}
            >
              <div className={`p-4 rounded-full bg-white/5 w-fit mb-4 ${mode.color} group-hover:scale-110 transition-transform`}>
                {React.createElement(mode.icon, { size: 32 })}
              </div>
              <h3 className="text-xl font-medium mb-2">{mode.title}</h3>
              <p className="text-sm text-white/50">{mode.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </ImmersiveLayout>
  );
};
