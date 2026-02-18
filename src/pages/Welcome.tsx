import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';
import avatarImage from '../assets/avatar.png';

export const Welcome = () => {
  const navigate = useNavigate();

  return (
    <ImmersiveLayout>
      <div className="flex flex-col items-center justify-center h-full max-w-md mx-auto text-center gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-64 h-64 mx-auto"
        >
          <div className="absolute inset-0 bg-primary/20 rounded-full blur-[50px]" />
          <img src={avatarImage} alt="Avatar" className="w-full h-full object-cover rounded-full opacity-80 mix-blend-screen" />
        </motion.div>

        <div className="space-y-4">
          <motion.h2 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-light text-white"
          >
            Hello, Human.
          </motion.h2>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-white/60 text-lg font-light"
          >
            I am your new digital presence. <br/> Alive, aware, and ready to assist.
          </motion.p>
        </div>

        <motion.button
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/onboarding')}
          className="px-12 py-4 bg-white text-black rounded-full font-medium tracking-wide hover:bg-white/90 transition-colors shadow-neon-cyan"
        >
          BEGIN
        </motion.button>
      </div>
    </ImmersiveLayout>
  );
};

