'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';

export const PolaroidMemorySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section ref={ref} className="py-20 px-6 gradient-dreamy">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Framed <span className="text-primary font-medium">Memories</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={isInView ? { opacity: 1, scale: 1, rotate: 0 } : {}}
          transition={{ duration: 1, type: 'spring', stiffness: 100 }}
          className="relative inline-block"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Polaroid Frame */}
          <Card className="w-80 h-96 bg-background shadow-dreamy border-8 border-background relative overflow-hidden transform transition-all duration-500 hover:rotate-2 hover:scale-105">
            {/* Photo Area */}
            <div className="w-full h-64 relative overflow-hidden">
              <motion.img
                src="/g1.jpeg"
                alt="Her Beautiful Smile"
                className="w-full h-full object-cover"
                animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
                transition={{ duration: 0.5 }}
              />

              {/* Sparkle effects on hover */}
              <AnimatePresence>
                {isHovered && (
                  <>
                    {[...Array(8)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute text-xl text-accent"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{
                          opacity: [0, 1, 0],
                          scale: [0, 1, 0],
                          x: [0, (Math.random() - 0.5) * 100],
                          y: [0, (Math.random() - 0.5) * 100],
                        }}
                        exit={{ opacity: 0 }}
                        transition={{
                          duration: 1.5,
                          delay: i * 0.1,
                          repeat: Infinity,
                          repeatDelay: 2,
                        }}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                        }}
                      >
                        ✨
                      </motion.div>
                    ))}
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Caption Area */}
            <div className="p-4 h-32 flex flex-col justify-center text-center">
              <motion.p
                className="text-lg font-medium text-foreground mb-2"
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                transition={{ duration: 0.3 }}
              >
                "My Everything"
              </motion.p>
              <motion.p
                className="text-sm text-muted-foreground italic"
                initial={{ opacity: 0.7 }}
                animate={isHovered ? { opacity: 1 } : { opacity: 0.7 }}
                transition={{ duration: 0.3 }}
              >
                Captured forever in my heart 💖
              </motion.p>
            </div>

            {/* Tape corners */}
            <div className="absolute -top-2 -left-2 w-8 h-8 bg-accent/80 rotate-45 shadow-sm" />
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent/80 rotate-45 shadow-sm" />
          </Card>

          {/* Floating hearts around polaroid */}
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/40 text-lg pointer-events-none"
              animate={{
                y: [0, -15, 0],
                opacity: [0.4, 0.8, 0.4],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 4 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.7,
              }}
              style={{
                left: `${-10 + Math.random() * 120}%`,
                top: `${-5 + Math.random() * 110}%`,
              }}
            >
              💕
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 text-xl text-foreground italic"
        >
          "No frame in the world could ever match your Gift."
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="mt-4 text-sm text-muted-foreground"
        >
          * Hover over the polaroid to see the magic ✨
        </motion.p>
      </div>
    </section>
  );
};
