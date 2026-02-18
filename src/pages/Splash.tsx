import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';

export const Splash = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/welcome');
    }, 2500);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <ImmersiveLayout>
      <div className="flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-primary to-accent-cyan blur-xl opacity-50 absolute inset-0" />
          <div className="w-24 h-24 rounded-full border-2 border-white/20 flex items-center justify-center relative z-10 backdrop-blur-sm">
            <div className="w-16 h-16 rounded-full bg-white/10" />
          </div>
        </motion.div>
        
        <motion.h1
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="mt-8 text-2xl font-light tracking-[0.3em] text-white/80"
        >
          AI COMPANION
        </motion.h1>
      </div>
    </ImmersiveLayout>
  );
};
