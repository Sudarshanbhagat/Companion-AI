import React from 'react';
import { motion } from 'framer-motion';
import avatarImage from '../../assets/avatar.png';

interface AvatarCoreProps {
  state?: 'idle' | 'listening' | 'thinking' | 'speaking';
}

export const AvatarCore: React.FC<AvatarCoreProps> = ({ state = 'idle' }) => {
  return (
    <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">
      {/* Ambient Glow Layers */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute inset-0 bg-primary/30 rounded-full blur-[60px]"
      />
      
      <motion.div
        animate={{
          scale: [1.1, 1.3, 1.1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
        className="absolute inset-0 bg-accent-cyan/20 rounded-full blur-[80px]"
      />

      {/* Voice Indicator Ring (Active when speaking/listening) */}
      {(state === 'speaking' || state === 'listening') && (
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            borderWidth: ["2px", "4px", "2px"],
            borderColor: ["rgba(0, 245, 255, 0.2)", "rgba(0, 245, 255, 0.6)", "rgba(0, 245, 255, 0.2)"]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-[-20px] rounded-full border border-accent-cyan/30"
        />
      )}

      {/* Main Avatar Image */}
      <motion.div
        animate={{
          y: [0, -10, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-full h-full rounded-full overflow-hidden border border-white/10 shadow-2xl"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-20" />
        <img 
          src={avatarImage} 
          alt="AI Avatar" 
          className="w-full h-full object-cover"
        />
        
        {/* Glass Overlay Reflection */}
        <div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent z-30 pointer-events-none" />
      </motion.div>
    </div>
  );
};
