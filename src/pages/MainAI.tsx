import React, { useState } from 'react';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { AvatarCore } from '../components/avatar/AvatarCore';
import { InputBar } from '../components/interaction/InputBar';
import { SuggestionChip } from '../components/ui/SuggestionChip';
import { motion, AnimatePresence } from 'framer-motion';
import { Settings, User, History, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const MainAI = () => {
  const navigate = useNavigate();
  const [avatarState, setAvatarState] = useState<'idle' | 'listening' | 'thinking' | 'speaking'>('idle');
  const [messages, setMessages] = useState<{role: 'user' | 'ai', text: string}[]>([]);

  const handleSend = (text: string) => {
    setMessages(prev => [...prev, { role: 'user', text }]);
    setAvatarState('thinking');
    
    // Simulate AI response
    setTimeout(() => {
      setAvatarState('speaking');
      setTimeout(() => {
        setAvatarState('idle');
      }, 3000);
    }, 1500);
  };

  const suggestions = [
    "Analyze my schedule",
    "Draft a new project proposal",
    "Switch to focus mode",
    "Show me the latest metrics"
  ];

  return (
    <ImmersiveLayout>
      <main className="flex flex-col items-center justify-center w-full max-w-4xl gap-12 relative h-full">
        
        {/* Top Navigation (Minimal) */}
        <div className="absolute top-0 w-full flex justify-between items-center px-4 py-2 z-50">
           <button onClick={() => navigate('/profile')} className="p-2 text-white/50 hover:text-white transition-colors">
             <User size={24} />
           </button>
           <div className="flex gap-4">
             <button onClick={() => navigate('/memory')} className="p-2 text-white/50 hover:text-white transition-colors">
               <History size={24} />
             </button>
             <button onClick={() => navigate('/settings')} className="p-2 text-white/50 hover:text-white transition-colors">
               <Settings size={24} />
             </button>
           </div>
        </div>

        {/* Avatar Section */}
        <motion.div 
          layout
          className="flex-1 flex items-center justify-center min-h-[40vh]"
        >
          <AvatarCore state={avatarState} />
        </motion.div>

        {/* Interaction Layer */}
        <div className="w-full flex flex-col items-center gap-8 pb-10">
          
          {/* Suggestion Chips */}
          <AnimatePresence>
            {avatarState === 'idle' && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="flex flex-wrap justify-center gap-3"
              >
                {suggestions.map((label, index) => (
                  <SuggestionChip 
                    key={label} 
                    label={label} 
                    delay={index * 0.1}
                    onClick={() => handleSend(label)}
                  />
                ))}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Input Area */}
          <div className="w-full px-4">
            <InputBar 
              onSend={handleSend} 
              isListening={avatarState === 'listening'}
            />
          </div>
          
          {/* Status Text */}
          <motion.p 
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 3, repeat: Infinity }}
            className="text-white/30 text-xs uppercase tracking-[0.2em] font-light"
          >
            {avatarState === 'idle' ? 'System Online' : 
             avatarState === 'thinking' ? 'Processing...' : 
             avatarState === 'speaking' ? 'Responding...' : 'Listening...'}
          </motion.p>
        </div>

      </main>
    </ImmersiveLayout>
  );
};

