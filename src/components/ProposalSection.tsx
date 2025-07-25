import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Sparkles } from 'lucide-react';
import Confetti from 'react-confetti';

export const ProposalSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [response, setResponse] = useState<'yes' | 'thinking' | null>(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleYes = () => {
    setResponse('yes');
    setShowConfetti(true);
    // Stop confetti after 10 seconds
    setTimeout(() => setShowConfetti(false), 10000);
  };

  const handleThinking = () => {
    setResponse('thinking');
  };

  return (
    <>
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          colors={['#f8b4cb', '#f4a6cd', '#e879f9', '#fbbf24', '#fb7185']}
          numberOfPieces={200}
          recycle={false}
          gravity={0.3}
        />
      )}
      
      <section ref={ref} className="min-h-screen flex items-center justify-center px-6 gradient-proposal relative overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl lg:text-8xl font-light text-background mb-8"
              initial={{ y: 50, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 1 }}
            >
              WILL YOU
              <motion.span 
                className="block font-bold"
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 1.5, duration: 0.8, type: "spring", stiffness: 200 }}
              >
                MARRY ME?
              </motion.span>
            </motion.h1>

            {!response && (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 2, duration: 1 }}
                className="space-y-6"
              >
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <Button
                    onClick={handleYes}
                    size="lg"
                    className="bg-background text-primary hover:bg-background/90 transition-romantic text-xl px-12 py-6 rounded-full shadow-dreamy hover:scale-105"
                  >
                    <Heart className="mr-3 h-6 w-6 animate-heart-beat" />
                    💍 Yes, I Will!
                  </Button>

                  <Button
                    onClick={handleThinking}
                    variant="outline"
                    size="lg"
                    className="border-background text-background hover:bg-background/10 transition-romantic text-xl px-12 py-6 rounded-full"
                  >
                    <Sparkles className="mr-3 h-6 w-6" />
                    🙈 Let Me Think...
                  </Button>
                </div>
              </motion.div>
            )}

            {response === 'yes' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 200 }}
              >
                <Card className="p-8 mt-8 bg-background/90 backdrop-blur-sm shadow-dreamy">
                  <div className="space-y-4">
                    <div className="text-6xl">🎉💕🎉</div>
                    <h3 className="text-3xl font-medium text-primary">
                      You just made me the happiest person alive!
                    </h3>
                    <p className="text-xl text-muted-foreground">
                      I love you more than words can express. Thank you for saying yes to forever with me. 💖
                    </p>
                    <div className="text-4xl space-x-2">
                      <span>💍</span>
                      <span>👰‍♀️</span>
                      <span>🤵‍♂️</span>
                      <span>💕</span>
                    </div>
                  </div>
                </Card>
              </motion.div>
            )}

            {response === 'thinking' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, type: "spring", stiffness: 200 }}
              >
                <Card className="p-8 mt-8 bg-background/90 backdrop-blur-sm shadow-dreamy">
                  <div className="space-y-4">
                    <div className="text-6xl">🤗💭😊</div>
                    <h3 className="text-3xl font-medium text-primary">
                      No worries at all...
                    </h3>
                    <p className="text-xl text-muted-foreground">
                      I'll wait right here. Forever if I have to. 😊
                    </p>
                    <p className="text-lg text-muted-foreground italic">
                      Take all the time you need. My love for you isn't going anywhere. 💕
                    </p>
                  </div>
                </Card>
              </motion.div>
            )}
          </motion.div>
        </div>

        {/* Floating hearts background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-background opacity-20"
              initial={{ y: "100vh", opacity: 0 }}
              animate={isInView ? { 
                y: "-100vh", 
                opacity: [0, 0.3, 0.3, 0],
                x: [0, 100, -50, 30],
                rotate: [0, 180, 360]
              } : {}}
              transition={{
                duration: 20 + i * 2,
                repeat: Infinity,
                delay: i * 1.5,
                ease: "easeInOut"
              }}
              style={{
                left: `${Math.random() * 100}%`,
                fontSize: `${2 + Math.random() * 2}rem`
              }}
            >
              💖
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
};