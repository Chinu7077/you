import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Heart, Lock, Unlock } from 'lucide-react';

const PUZZLE_ICONS = ['💍', '🌹', ' 💖', '✨', '🥰', '💕'];
const SOLUTION = [0, 1, 2, 3, 4, 5]; // Correct order

export const SecretPuzzleSection = ({ onUnlock }: { onUnlock: () => void }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedOrder, setSelectedOrder] = useState<number[]>([]);
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [attempts, setAttempts] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const handleIconClick = (index: number) => {
    if (isUnlocked || selectedOrder.includes(index)) return;
    
    const newOrder = [...selectedOrder, index];
    setSelectedOrder(newOrder);

    if (newOrder.length === SOLUTION.length) {
      setTimeout(() => {
        if (JSON.stringify(newOrder) === JSON.stringify(SOLUTION)) {
          setIsUnlocked(true);
          onUnlock();
        } else {
          setSelectedOrder([]);
          setAttempts(prev => prev + 1);
          if (attempts >= 2) {
            setShowHint(true);
          }
        }
      }, 500);
    }
  };

  const resetPuzzle = () => {
    setSelectedOrder([]);
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-background via-primary/5 to-accent/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center mb-6">
            <motion.div
              animate={isUnlocked ? { rotate: 360, scale: 1.2 } : {}}
              transition={{ duration: 0.8 }}
            >
              {isUnlocked ? (
                <Unlock className="w-12 h-12 text-primary mr-4" />
              ) : (
                <Lock className="w-12 h-12 text-muted-foreground mr-4" />
              )}
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-light text-foreground">
              Secret
              <span className="text-primary font-medium"> Puzzle</span>
            </h2>
          </div>
          
          <p className="text-lg text-muted-foreground">
            {isUnlocked 
              ? "🎉 You unlocked my heart! The proposal awaits below..."
              : "Solve this puzzle to unlock the final surprise!"
            }
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="p-8 md:p-12 shadow-dreamy bg-card/90 backdrop-blur-sm relative overflow-hidden">
            <AnimatePresence>
              {!isUnlocked ? (
                <motion.div
                  key="puzzle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="space-y-8"
                >
                  <div>
                    <h3 className="text-xl font-medium text-foreground mb-4">
                      Click the hearts in the right order to unlock 💝
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      Hint: Follow the story of our love... from first meeting to forever
                    </p>
                  </div>

                  {/* Puzzle Grid */}
                  <div className="grid grid-cols-3 gap-6 max-w-md mx-auto">
                    {PUZZLE_ICONS.map((icon, index) => (
                      <motion.button
                        key={index}
                        onClick={() => handleIconClick(index)}
                        className={`
                          w-20 h-20 rounded-xl text-4xl border-2 transition-all duration-300
                          ${selectedOrder.includes(index) 
                            ? 'bg-primary border-primary text-primary-foreground scale-90' 
                            : 'bg-background border-border hover:border-primary hover:scale-105'
                          }
                          ${isUnlocked ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
                        `}
                        whileHover={!isUnlocked && !selectedOrder.includes(index) ? { scale: 1.1 } : {}}
                        whileTap={!isUnlocked && !selectedOrder.includes(index) ? { scale: 0.95 } : {}}
                        disabled={isUnlocked || selectedOrder.includes(index)}
                      >
                        {icon}
                        {selectedOrder.includes(index) && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full text-xs flex items-center justify-center text-accent-foreground"
                          >
                            {selectedOrder.indexOf(index) + 1}
                          </motion.div>
                        )}
                      </motion.button>
                    ))}
                  </div>

                  {/* Progress indicator */}
                  <div className="space-y-4">
                    <div className="flex justify-center space-x-2">
                      {SOLUTION.map((_, index) => (
                        <div
                          key={index}
                          className={`w-3 h-3 rounded-full transition-all duration-300 ${
                            index < selectedOrder.length 
                              ? 'bg-primary' 
                              : 'bg-border'
                          }`}
                        />
                      ))}
                    </div>
                    
                    {selectedOrder.length > 0 && !isUnlocked && (
                      <Button
                        onClick={resetPuzzle}
                        variant="outline"
                        size="sm"
                        className="mx-auto"
                      >
                        Reset Order
                      </Button>
                    )}

                    {attempts > 0 && !isUnlocked && (
                      <p className="text-sm text-muted-foreground">
                        {attempts === 1 ? "Try again! Think about our journey..." : 
                         attempts === 2 ? "One more try! You're close..." : 
                         "Keep trying! Love always finds a way 💕"}
                      </p>
                    )}

                    {showHint && !isUnlocked && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="p-4 bg-accent/20 rounded-lg"
                      >
                        <p className="text-sm text-foreground">
                          💡 Hint: Heart → Rose → Ring → Sparkle → Love → Hearts
                        </p>
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  key="unlocked"
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, type: "spring", stiffness: 200 }}
                  className="space-y-6"
                >
                  <div className="text-6xl">🎉</div>
                  <h3 className="text-2xl font-medium text-primary">
                    Puzzle Solved!
                  </h3>
                  <p className="text-lg text-foreground">
                    You unlocked the final chapter of our love story...
                  </p>
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="text-primary text-lg"
                  >
                    ↓ Scroll down for the big question ↓
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Celebratory effects when unlocked */}
            {isUnlocked && (
              <>
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute text-2xl text-primary pointer-events-none"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: [0, 1, 0],
                      scale: [0, 1, 0],
                      y: [0, -100],
                      x: [0, (Math.random() - 0.5) * 200]
                    }}
                    transition={{
                      duration: 2,
                      delay: i * 0.1,
                      repeat: 2,
                      repeatDelay: 1
                    }}
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`
                    }}
                  >
                    💖
                  </motion.div>
                ))}
              </>
            )}
          </Card>
        </motion.div>
      </div>
    </section>
  );
};