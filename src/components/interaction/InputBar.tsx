import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mic, Send } from 'lucide-react';
import { cn } from '../../lib/utils';

interface InputBarProps {
  onSend: (text: string) => void;
  isListening?: boolean;
}

export const InputBar: React.FC<InputBarProps> = ({ onSend, isListening }) => {
  const [text, setText] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim()) {
      onSend(text);
      setText('');
    }
  };

  return (
    <motion.form
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      onSubmit={handleSubmit}
      className={cn(
        "relative w-full max-w-2xl mx-auto flex items-center gap-4 p-2 rounded-full border transition-all duration-500",
        isFocused 
          ? "bg-black/40 border-primary/50 shadow-neon-cyan backdrop-blur-xl" 
          : "bg-black/20 border-white/10 backdrop-blur-md"
      )}
    >
      <div className="relative flex-1">
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Ask anything..."
          className="w-full bg-transparent border-none outline-none text-white px-6 py-3 placeholder-white/30 font-light text-lg"
        />
      </div>

      <div className="flex items-center gap-2 pr-2">
        <motion.button
          type="button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className={cn(
            "p-3 rounded-full transition-colors",
            isListening ? "bg-accent-magenta/20 text-accent-magenta animate-pulse" : "text-white/50 hover:text-white hover:bg-white/10"
          )}
        >
          <Mic size={20} />
        </motion.button>
        
        <AnimatePresence>
          {text.trim() && (
            <motion.button
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              type="submit"
              className="p-3 rounded-full bg-primary text-white shadow-lg hover:bg-primary-light transition-colors"
            >
              <Send size={20} />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </motion.form>
  );
};
