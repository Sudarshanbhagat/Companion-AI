import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';

type GlassCardProps = Omit<React.HTMLAttributes<HTMLDivElement>, 'onDrag' | 'onAnimationStart' | 'onAnimationEnd' | 'onAnimationIteration'> &
  MotionProps & {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  hoverEffect = false,
  ...props 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn(
        "glass-panel rounded-2xl p-6 relative overflow-hidden",
        hoverEffect && "hover:bg-white/10 transition-colors duration-300 cursor-pointer",
        className
      )}
      {...props}
    >
      {children}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
    </motion.div>
  );
};
