import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const SignatureSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-16 px-6 bg-gradient-to-t from-primary/5 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          {/* Signature message */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-4"
          >
            <p className="text-lg md:text-xl text-foreground italic leading-relaxed">
              "With every heartbeat, with every breath,<br />
              with every line of code in this website..."
            </p>
          </motion.div>

          {/* Hand-written signature effect */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
            className="relative"
          >
            {/* Signature line */}
            <motion.div
              className="relative inline-block"
              initial={{ pathLength: 0 }}
              animate={isInView ? { pathLength: 1 } : {}}
              transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
            >
              {/* SVG signature effect */}
              <svg
                width="200"
                height="80"
                viewBox="0 0 200 80"
                className="mx-auto"
              >
                <motion.path
                  d="M20 40 Q 50 20 80 40 T 140 40 Q 160 30 180 40"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  fill="none"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  animate={isInView ? { pathLength: 1 } : {}}
                  transition={{ duration: 2, delay: 1.2, ease: "easeInOut" }}
                />
                {/* Decorative flourish */}
                <motion.circle
                  cx="185"
                  cy="35"
                  r="3"
                  fill="hsl(var(--primary))"
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 2.5 }}
                />
              </svg>
              
              {/* Name text */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 2 }}
              >
                <span className="text-2xl md:text-3xl font-bold text-primary font-serif">
                  Chinu
                </span>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Heart and final message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 2.5 }}
            className="space-y-2"
          >
            <motion.div
              className="text-4xl"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 5, -5, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              ❤️
            </motion.div>
            <p className="text-base text-muted-foreground">
              — Chinu ❤️
            </p>
          </motion.div>

          {/* Floating hearts */}
          <div className="relative">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute text-primary/30 text-lg pointer-events-none"
                animate={{
                  y: [0, -20, 0],
                  opacity: [0.3, 0.7, 0.3],
                  rotate: [0, 360]
                }}
                transition={{
                  duration: 4 + i * 0.5,
                  repeat: Infinity,
                  delay: 3 + i * 0.5
                }}
                style={{
                  left: `${20 + i * 12}%`,
                  top: `${-10 + (i % 2) * 20}px`
                }}
              >
                💕
              </motion.div>
            ))}
          </div>

          {/* Date stamp */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 3 }}
            className="text-xs text-muted-foreground/70 italic"
          >
            Made with 💖 • {new Date().getFullYear()}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};