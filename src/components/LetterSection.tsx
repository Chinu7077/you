import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const letterParagraphs = [
  "I don't know how to say this in person...",
  "But I wanted to do something different.",
  "So I made this site, with my heart in every line of code.",
  "Because I need you to know...",
  "You mean the world to me.",
  "I don't want to imagine a future without you.",
  "Every day with you feels like a beautiful dream.",
  "And I never want to wake up."
];

export const LetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });

  return (
    <section ref={ref} className="py-20 px-6 gradient-dreamy">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            A Letter 
            <span className="text-primary font-medium"> From My Heart</span>
          </h2>
        </motion.div>

        <Card className="p-8 md:p-12 shadow-dreamy bg-card/80 backdrop-blur-sm">
          <div className="space-y-8">
            {letterParagraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.3,
                  ease: "easeOut"
                }}
                className={`text-lg md:text-xl leading-relaxed ${
                  index === 0 || index === 3 
                    ? 'text-primary font-medium' 
                    : 'text-foreground'
                } ${
                  index === letterParagraphs.length - 1 
                    ? 'text-center italic' 
                    : ''
                }`}
              >
                {paragraph}
              </motion.p>
            ))}

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 1, delay: letterParagraphs.length * 0.3 }}
              className="text-center pt-8"
            >
              <div className="inline-flex items-center space-x-2 text-primary">
                <span className="text-2xl">💕</span>
                <span className="text-lg font-medium">With all my love</span>
                <span className="text-2xl">💕</span>
              </div>
            </motion.div>
          </div>
        </Card>

        {/* Floating decorative elements */}
        <div className="relative mt-8">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary opacity-20"
              initial={{ opacity: 0 }}
              animate={isInView ? { 
                opacity: [0, 0.3, 0],
                y: [-20, -60, -100],
                x: [0, 30, -20]
              } : {}}
              transition={{
                duration: 4,
                delay: (letterParagraphs.length * 0.3) + i * 0.5,
                repeat: Infinity,
                repeatDelay: 3
              }}
              style={{
                left: `${20 + i * 15}%`,
                fontSize: '1.5rem'
              }}
            >
              💖
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};