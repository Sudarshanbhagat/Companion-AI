import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { AvatarCore } from '../components/avatar/AvatarCore';
import { GlassCard } from '../components/ui/GlassCard';

export const AvatarCreation = () => {
  const navigate = useNavigate();

  return (
    <ImmersiveLayout>
      <div className="flex flex-col items-center justify-center h-full gap-8 w-full max-w-4xl">
        <h2 className="text-2xl font-light tracking-widest uppercase">Calibrate Presence</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-12 w-full">
          <div className="flex-1 flex justify-center">
            <div className="scale-75 md:scale-100">
              <AvatarCore state="idle" />
            </div>
          </div>

          <div className="flex-1 w-full max-w-sm space-y-6">
            <GlassCard className="space-y-6">
              <div>
                <label className="text-sm text-white/50 mb-2 block">Voice Synthesis</label>
                <div className="flex gap-2">
                  {['Nova', 'Echo', 'Onyx'].map(voice => (
                    <button key={voice} className="flex-1 py-2 bg-white/5 hover:bg-white/10 rounded-lg text-sm border border-white/10 transition-colors">
                      {voice}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-white/50 mb-2 block">Personality Warmth</label>
                <input type="range" className="w-full accent-primary h-1 bg-white/10 rounded-full appearance-none" />
                <div className="flex justify-between text-xs text-white/30 mt-1">
                  <span>Analytical</span>
                  <span>Empathetic</span>
                </div>
              </div>

              <button 
                onClick={() => navigate('/mode-selection')}
                className="w-full py-3 bg-primary hover:bg-primary-light rounded-xl font-medium transition-colors shadow-lg shadow-primary/20"
              >
                Finalize Calibration
              </button>
            </GlassCard>
          </div>
        </div>
      </div>
    </ImmersiveLayout>
  );
};
