import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ImmersiveLayout } from '../layouts/ImmersiveLayout';
import { GlassCard } from '../components/ui/GlassCard';
import { Shield, Zap, Heart } from 'lucide-react';

const steps = [
  {
    title: "Meet Your AI Presence",
    description: "Not just a chatbot. A living digital assistant that evolves with you.",
    icon: Heart,
    color: "text-accent-magenta"
  },
  {
    title: "Choose Your Mode",
    description: "Switch seamlessly between Companion, Focus, and Chat modes.",
    icon: Zap,
    color: "text-accent-cyan"
  },
  {
    title: "Privacy & Security",
    description: "Your data remains protected. You are in full control.",
    icon: Shield,
    color: "text-primary-light"
  }
];

export const Onboarding = () => {
  const navigate = useNavigate();
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      navigate('/login');
    }
  };

  return (
    <ImmersiveLayout>
      <div className="w-full max-w-md mx-auto flex flex-col h-[60vh] justify-between">
        <div className="flex-1 flex items-center justify-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep}
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -50, opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full"
            >
              <GlassCard className="flex flex-col items-center text-center gap-6 py-12">
                <div className={`p-6 rounded-full bg-white/5 ${steps[currentStep].color}`}>
                  {React.createElement(steps[currentStep].icon, { size: 48 })}
                </div>
                <h3 className="text-2xl font-medium text-white">{steps[currentStep].title}</h3>
                <p className="text-white/60 leading-relaxed">{steps[currentStep].description}</p>
              </GlassCard>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex flex-col items-center gap-8 mt-8">
          {/* Indicators */}
          <div className="flex gap-2">
            {steps.map((_, idx) => (
              <div 
                key={idx} 
                className={`h-1 rounded-full transition-all duration-300 ${idx === currentStep ? 'w-8 bg-white' : 'w-2 bg-white/20'}`} 
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="w-full py-4 bg-white/10 hover:bg-white/20 border border-white/10 rounded-xl text-white transition-all backdrop-blur-md"
          >
            {currentStep === steps.length - 1 ? "Get Started" : "Continue"}
          </button>
        </div>
      </div>
    </ImmersiveLayout>
  );
};

