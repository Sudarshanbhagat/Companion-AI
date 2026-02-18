import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

interface SuggestionChipProps {
  label: string;
  onClick?: () => void;
  active?: boolean;
  delay?: number;
}

export const SuggestionChip: React.FC<SuggestionChipProps> = ({ 
  label, 
  onClick, 
  active,
  delay = 0 
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ 
        duration: 0.4, 
        delay: delay,
        ease: "easeOut" 
      }}
      whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.1)" }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={cn(
        "px-6 py-3 rounded-full text-sm font-medium backdrop-blur-md border transition-all duration-300",
        active 
          ? "bg-primary/20 border-primary text-white shadow-neon-cyan" 
          : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:border-white/30"
      )}
    >
      {label}
    </motion.button>
  );
};
