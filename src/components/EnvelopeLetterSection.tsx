import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

const fullLetter = `My Dearest Love,

I don't know how to say this in person, but I wanted to do something different. So I made this site, with my heart in every line of code.

Because I need you to know... You mean the world to me. I don't want to imagine a future without you.

Every day with you feels like a beautiful dream, and I never want to wake up.

When I see your smile, the whole world stops. When I hear your laugh, everything makes sense. When you're near, I'm home.

I've written a thousand letters in my mind, practiced a thousand conversations, but nothing could capture what I feel. So I built this instead - a digital love letter that could hold all my emotions.

You are my yesterday, my today, and all of my tomorrows. You are my reason to wake up smiling and my last thought before I sleep.

I love how you make ordinary moments feel magical. I love how you see beauty in everything. I love how you make me want to be better.

And now, I'm ready to ask you the most important question of my life...

With all my love and hope,
Forever yours ❤️`;

export const EnvelopeLetterSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-200px" });
  const [isEnvelopeOpen, setIsEnvelopeOpen] = useState(false);

  const handleEnvelopeClick = () => {
    setIsEnvelopeOpen(true);
  };

  return (
    <section ref={ref} className="py-20 px-6 gradient-romantic">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-background mb-4">
            A Letter 
            <span className="text-primary-glow font-medium"> From My Heart</span>
          </h2>
        </motion.div>

        <AnimatePresence mode="wait">
          {!isEnvelopeOpen ? (
            <motion.div
              key="envelope"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              {/* Envelope */}
              <div className="relative mx-auto w-80 h-60 cursor-pointer group" onClick={handleEnvelopeClick}>
                {/* Envelope Body */}
                <div className="absolute inset-0 bg-background rounded-lg shadow-dreamy border-2 border-primary/20 group-hover:shadow-romantic transition-all duration-300">
                  {/* Envelope Flap */}
                  <motion.div
                    className="absolute -top-1 left-0 right-0 h-32 bg-primary/90 origin-top rounded-t-lg border-2 border-primary/30"
                    style={{
                      clipPath: 'polygon(0 0, 100% 0, 50% 80%)'
                    }}
                    whileHover={{ rotateX: -15 }}
                    transition={{ duration: 0.3 }}
                  />
                  
                  {/* Heart Seal */}
                  <motion.div
                    className="absolute top-16 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-accent rounded-full flex items-center justify-center shadow-lg z-10"
                    whileHover={{ scale: 1.1 }}
                    animate={{ 
                      scale: [1, 1.05, 1],
                      boxShadow: ['0 0 20px rgba(251, 191, 36, 0.3)', '0 0 30px rgba(251, 191, 36, 0.5)', '0 0 20px rgba(251, 191, 36, 0.3)']
                    }}
                    transition={{ 
                      scale: { duration: 2, repeat: Infinity },
                      boxShadow: { duration: 2, repeat: Infinity }
                    }}
                  >
                    <Heart className="w-6 h-6 text-accent-foreground fill-current" />
                  </motion.div>

                  {/* Click instruction */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <p className="text-sm text-primary font-medium">Click to Open the Letter</p>
                    <motion.div
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-primary text-xl mt-1"
                    >
                      📧
                    </motion.div>
                  </div>
                </div>

                {/* Floating hearts around envelope */}
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-primary/40 text-lg pointer-events-none"
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.4, 0.8, 0.4],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{
                      duration: 3 + i * 0.5,
                      repeat: Infinity,
                      delay: i * 0.5
                    }}
                    style={{
                      left: `${20 + i * 12}%`,
                      top: `${20 + (i % 2) * 40}%`
                    }}
                  >
                    💖
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="letter"
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
              <Card className="p-8 md:p-12 shadow-dreamy bg-background/95 backdrop-blur-sm border-2 border-primary/20">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <div className="text-4xl mb-4">💌</div>
                    <h3 className="text-2xl font-medium text-primary">My Love Letter to You</h3>
                  </div>
                  
                  <div className="text-left space-y-4 max-h-96 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-primary/20">
                    {fullLetter.split('\n\n').map((paragraph, index) => (
                      <motion.p
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.8 + index * 0.2, duration: 0.6 }}
                        className={`text-base md:text-lg leading-relaxed ${
                          index === 0 || paragraph.includes('My Dearest') 
                            ? 'text-primary font-medium text-center' 
                            : paragraph.includes('Forever yours')
                            ? 'text-center italic text-primary'
                            : 'text-foreground'
                        }`}
                      >
                        {paragraph}
                      </motion.p>
                    ))}
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.8 }}
                    className="text-center pt-6 border-t border-primary/20"
                  >
                    <div className="inline-flex items-center space-x-2 text-primary">
                      <span className="text-2xl">💕</span>
                      <span className="text-lg font-medium">With all my love</span>
                      <span className="text-2xl">💕</span>
                    </div>
                  </motion.div>
                </motion.div>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};