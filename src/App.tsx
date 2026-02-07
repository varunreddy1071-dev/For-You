
import React from 'react';
import { motion } from 'framer-motion';
import FloatingHearts from './components/FloatingHearts';
import RomanticLetter from './components/RomanticLetter';
import ValentinePrompt from './components/ValentinePrompt';

function App() {
  return (
    <main className="min-h-screen relative bg-gradient-to-b from-pink-50 via-white to-rose-50 selection:bg-rose-200 selection:text-rose-900">
      <FloatingHearts />

      {/* Hero Section */}
      <section className="h-screen flex flex-col items-center justify-center text-center px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="space-y-6"
        >
          <motion.div 
             animate={{ y: [0, -10, 0] }}
             transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
             className="text-6xl md:text-8xl text-rose-400 mb-4 drop-shadow-sm"
          >
            🌸
          </motion.div>
          <h1 className="text-4xl md:text-7xl font-bold text-rose-600 font-romantic drop-shadow-sm">
            Akshitha,
          </h1>
          <p className="text-xl md:text-3xl text-pink-500 font-medium italic tracking-wide">
            I have something important to ask you...
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 animate-bounce"
        >
          <p className="text-rose-300 font-semibold mb-2">Scroll Down</p>
          <div className="w-6 h-10 border-2 border-rose-200 rounded-full mx-auto flex justify-center p-1">
            <div className="w-1 h-2 bg-rose-300 rounded-full"></div>
          </div>
        </motion.div>
      </section>

      {/* Message Section */}
      <RomanticLetter />

      {/* Question Section */}
      <ValentinePrompt />

      {/* Footer */}
      <footer className="py-12 text-center relative z-10 opacity-50">
        <p className="text-rose-400 font-romantic text-2xl">Forever yours ❤️</p>
      </footer>
    </main>
  );
}

export default App;
