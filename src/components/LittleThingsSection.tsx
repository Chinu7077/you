import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const littleThings = [
  {
    icon: '💖',
    text: "How you twirl your hair when you're nervous."
  },
  {
    icon: '✨',
    text: "The way your eyes light up when you talk about your dreams."
  },
  {
    icon: '💫',
    text: "How you say 'hmm' like it's a full sentence."
  },
  {
    icon: '💖',
    text: "The tiny pause you take before laughing."
  },
  {
    icon: '✨',
    text: "How you care for others without even realizing."
  },
  {
    icon: '💫',
    text: "How your presence can calm every storm inside me."
  },
  {
    icon: '💖',
    text: "The way you quietly fix things when no one's watching."
  }
];

export const LittleThingsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section ref={ref} className="py-20 px-6 gradient-dreamy relative overflow-hidden">
      {/* Floating background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10 text-xl"
            animate={{
              y: [0, -20, 0],
              opacity: [0.1, 0.3, 0.1],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              delay: i * 0.3
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          >
            {['✨', '💫', '🌟'][i % 3]}
          </motion.div>
        ))}
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            Little Things
            <span className="text-primary font-medium"> You Never Noticed</span>
          </h2>
          <p className="text-lg text-muted-foreground italic max-w-2xl mx-auto">
            "It's not always the big moments… sometimes, it's the little things that stay with me forever."
          </p>
        </motion.div>

        {/* Memory Cards */}
        <div className="space-y-6 max-w-3xl mx-auto">
          {littleThings.map((thing, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ 
                duration: 0.6, 
                delay: 0.2 + index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(var(--primary-rgb), 0.15)"
              }}
              className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 shadow-romantic hover:shadow-dreamy transition-all duration-300 cursor-pointer border border-border/50"
            >
              <div className="flex items-center gap-4 text-left">
                <motion.div
                  className="text-3xl flex-shrink-0"
                  whileHover={{ 
                    scale: 1.2,
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ duration: 0.3 }}
                >
                  {thing.icon}
                </motion.div>
                <p className="text-lg text-foreground font-medium leading-relaxed">
                  {thing.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-16 text-center"
        >
          <motion.div
            className="inline-block"
            animate={{
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <p className="text-xl text-primary italic font-medium">
              "These are the moments that made me fall deeper..."
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};