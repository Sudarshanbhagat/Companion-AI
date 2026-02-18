import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';

export const Memory = () => {
  const navigate = useNavigate();

  const memories = [
    { date: 'Today, 10:23 AM', title: 'Project Alpha Strategy', type: 'Work' },
    { date: 'Yesterday, 4:15 PM', title: 'Meditation Session', type: 'Wellness' },
    { date: 'Feb 12, 9:00 AM', title: 'Weekly Planning', type: 'Productivity' },
  ];

  return (
    <ImmersiveLayout>
      <div className="w-full max-w-md mx-auto h-full flex flex-col">
        <div className="flex items-center mb-8">
          <button onClick={() => navigate(-1)} className="text-white/50 hover:text-white mr-4">Back</button>
          <h2 className="text-2xl font-light">Memory Stream</h2>
        </div>

        <div className="flex-1 overflow-y-auto space-y-4 pr-2 custom-scrollbar">
          {memories.map((mem, idx) => (
            <GlassCard key={idx} className="p-4 hover:bg-white/5 transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-2">
                <span className="text-xs text-white/40">{mem.date}</span>
                <span className="px-2 py-0.5 bg-white/10 rounded text-[10px] uppercase tracking-wider">{mem.type}</span>
              </div>
              <h3 className="text-lg font-light">{mem.title}</h3>
            </GlassCard>
          ))}
        </div>
      </div>
    </ImmersiveLayout>
  );
};
