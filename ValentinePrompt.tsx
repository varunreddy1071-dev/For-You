
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';

const ValentinePrompt: React.FC = () => {
  const [hasAccepted, setHasAccepted] = useState(false);

  const handleYes = () => {
    setHasAccepted(true);
    
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } });
      confetti({ ...defaults, particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } });
    }, 250);
  };

  return (
    <section className="min-h-screen flex items-center justify-center p-6 relative z-10 overflow-hidden">
      <AnimatePresence mode="wait">
        {!hasAccepted ? (
          <motion.div 
            key="question"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-rose-600 mb-12 font-serif-elegant">
              Will you be my Valentine? 💖
            </h2>
            
            <div className="flex flex-col items-center gap-6">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleYes}
                className="px-12 py-4 bg-gradient-to-r from-rose-400 to-pink-500 text-white rounded-full text-2xl font-bold shadow-lg shadow-pink-300 hover:shadow-pink-400 transition-all cursor-pointer"
              >
                YES, FOREVER! ✨
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleYes}
                className="px-8 py-3 bg-white text-rose-400 border-2 border-rose-200 rounded-full text-xl font-semibold hover:bg-rose-50 transition-all cursor-pointer"
              >
                Of course baby! ❤️
              </motion.button>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="celebration"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center bg-white/80 backdrop-blur-md p-10 rounded-[3rem] shadow-2xl border-4 border-rose-100 max-w-lg"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="text-8xl mb-6"
            >
              💕
            </motion.div>
            <h3 className="text-3xl md:text-4xl font-bold text-rose-600 mb-4 font-romantic">
              You just made me the happiest person ever 💕
            </h3>
            <p className="text-pink-800 text-lg font-medium italic">
              I can't wait for our future together, Akshitha.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ValentinePrompt;
