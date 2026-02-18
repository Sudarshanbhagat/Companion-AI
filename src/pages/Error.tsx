import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { AlertTriangle } from 'lucide-react';

export const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <ImmersiveLayout>
      <div className="flex flex-col items-center justify-center text-center gap-6">
        <div className="p-6 bg-red-500/10 rounded-full text-red-400 animate-pulse">
          <AlertTriangle size={48} />
        </div>
        <h2 className="text-2xl font-light">Connection Interrupted</h2>
        <p className="text-white/50 max-w-xs">Unable to synchronize with the neural core. Please check your connection.</p>
        <button 
          onClick={() => navigate(0)}
          className="px-8 py-3 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
        >
          Retry Connection
        </button>
      </div>
    </ImmersiveLayout>
  );
};
