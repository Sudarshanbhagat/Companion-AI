import React from 'react';
import { motion } from 'framer-motion';

interface ImmersiveLayoutProps {
  children: React.ReactNode;
}

export const ImmersiveLayout: React.FC<ImmersiveLayoutProps> = ({ children }) => {
  return (
    <div className="relative min-h-screen w-full bg-background-dark overflow-hidden flex flex-col items-center justify-center text-white selection:bg-accent-cyan/30">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Deep ambient gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-background-dark via-[#1a1f2e] to-background-dark opacity-80" />
        
        {/* Floating Orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, 0],
            y: [0, -50, 0],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] bg-primary/20 rounded-full blur-[120px]"
        />
        
        <motion.div 
          animate={{ 
            x: [0, -100, 0],
            y: [0, 100, 0],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] bg-accent-magenta/10 rounded-full blur-[150px]"
        />
      </div>

      {/* Noise Overlay for Texture */}
      <div className="absolute inset-0 z-[1] opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />

      {/* Content Layer */}
      <div className="relative z-10 w-full h-full flex flex-col items-center justify-center p-6 md:p-12">
        {children}
      </div>
    </div>
  );
};
