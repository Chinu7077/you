import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun } from 'lucide-react';

export const NightModeToggle = () => {
  const [isMagicMode, setIsMagicMode] = useState(false);

  useEffect(() => {
    if (isMagicMode) {
      document.body.classList.add('magic-mode');
    } else {
      document.body.classList.remove('magic-mode');
    }

    return () => {
      document.body.classList.remove('magic-mode');
    };
  }, [isMagicMode]);

  return (
    <>


      {/* Magic Mode Overlay */}
      {isMagicMode && (
        <>
          {/* Starry night background */}
          <div className="fixed inset-0 bg-gradient-to-b from-purple-900 via-blue-900 to-black opacity-95 pointer-events-none z-10" />
          
          {/* Floating stars */}
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed text-yellow-200 pointer-events-none z-20"
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0, 1, 0],
                scale: [0.5, 1, 0.5],
                rotate: [0, 180, 360]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${0.5 + Math.random() * 1}rem`
              }}
            >
              ✨
            </motion.div>
          ))}

          {/* Magic mode message */}
          <motion.div
            className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center z-30 pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.p
              className="text-2xl md:text-3xl text-white font-light mb-4"
              animate={{
                textShadow: [
                  '0 0 10px rgba(255,255,255,0.5)',
                  '0 0 20px rgba(168,85,247,0.8)',
                  '0 0 10px rgba(255,255,255,0.5)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              Even in darkness,
            </motion.p>
            <motion.p
              className="text-2xl md:text-3xl text-purple-200 font-medium"
              animate={{
                textShadow: [
                  '0 0 15px rgba(168,85,247,0.8)',
                  '0 0 25px rgba(251,191,36,0.8)',
                  '0 0 15px rgba(168,85,247,0.8)'
                ]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              you're my brightest light. ✨
            </motion.p>
          </motion.div>

          {/* Shooting stars */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="fixed w-1 h-1 bg-white rounded-full pointer-events-none z-20"
              initial={{ 
                x: -50, 
                y: Math.random() * window.innerHeight,
                opacity: 0 
              }}
              animate={{
                x: window.innerWidth + 50,
                y: Math.random() * window.innerHeight + 100,
                opacity: [0, 1, 0]
              }}
              transition={{
                duration: 2,
                delay: i * 3,
                repeat: Infinity,
                repeatDelay: 10,
                ease: "easeOut"
              }}
              style={{
                boxShadow: '0 0 6px #fff, 0 0 12px #fff, 0 0 18px #fff'
              }}
            />
          ))}
        </>
      )}
    </>
  );
};