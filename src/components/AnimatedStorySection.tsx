import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const AnimatedStorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 gradient-dreamy relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-light text-foreground mb-16"
        >
          Our Story in
          <span className="text-primary font-medium"> Motion</span>
        </motion.h2>

        {/* Animated Story Container */}
        <div className="relative h-96 bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl overflow-hidden shadow-dreamy">
          {/* Character walking alone */}
          <motion.div
            className="absolute bottom-20 text-4xl"
            initial={{ x: -100, opacity: 0 }}
            animate={isInView ? { x: 150, opacity: 1 } : {}}
            transition={{ duration: 3, delay: 0.5 }}
          >
            🚶‍♂️
          </motion.div>

          {/* Glowing light (her) */}
          <motion.div
            className="absolute top-20 right-20 text-5xl"
            initial={{ scale: 0, opacity: 0 }}
            animate={isInView ? { 
              scale: [0, 1.2, 1], 
              opacity: [0, 0.8, 1],
              filter: ['blur(10px)', 'blur(0px)']
            } : {}}
            transition={{ duration: 2, delay: 2 }}
          >
            ✨
          </motion.div>

          {/* Path with ups and downs */}
          <motion.div
            className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-muted via-primary to-accent rounded-full"
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 4, delay: 1 }}
            style={{ transformOrigin: 'left' }}
          />

          {/* Heart trail */}
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute bottom-24 text-2xl text-primary"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { 
                opacity: [0, 1, 0],
                y: [20, -10, -30],
                x: 150 + i * 40
              } : {}}
              transition={{ 
                duration: 1.5, 
                delay: 3.5 + i * 0.3,
                repeat: 1
              }}
            >
              💕
            </motion.div>
          ))}

          {/* Final flower offer */}
          <motion.div
            className="absolute bottom-16 right-32 text-4xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1,
              rotate: [0, 10, -10, 0]
            } : {}}
            transition={{ 
              duration: 1, 
              delay: 6,
              rotate: { repeat: Infinity, duration: 2 }
            }}
          >
            🌹💝
          </motion.div>

          {/* Floating particles */}
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-lg text-primary/30"
              initial={{ opacity: 0 }}
              animate={isInView ? {
                opacity: [0, 0.6, 0],
                y: [100, -50],
                x: [Math.random() * 400, Math.random() * 400]
              } : {}}
              transition={{
                duration: 4,
                delay: Math.random() * 2,
                repeat: Infinity,
                repeatDelay: 2
              }}
              style={{
                left: `${Math.random() * 80}%`,
                top: `${Math.random() * 80}%`
              }}
            >
              ✨
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 7 }}
          className="mt-8 text-lg text-muted-foreground italic"
        >
          "Every step led me to you... and every step forward, I want to take with you."
        </motion.p>
      </div>
    </section>
  );
};