'use client'; 


import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Mic, Pause, Play } from 'lucide-react';

export const VoiceOverlaySection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isPlaying, setIsPlaying] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioInstance = new Audio('/audio/my.mp3');
    setAudio(audioInstance);

    // When voice starts playing
    audioInstance.addEventListener('play', () => {
      setIsPlaying(true);
      // Dispatch event to pause background music
      window.dispatchEvent(new CustomEvent('voicePlay'));
    });

    // When voice ends
    audioInstance.addEventListener('ended', () => {
      setIsPlaying(false);
      // Dispatch event to resume background music
      window.dispatchEvent(new CustomEvent('voiceEnd'));
    });

    // When voice is paused
    audioInstance.addEventListener('pause', () => {
      setIsPlaying(false);
      // Only resume background music if audio actually ended (not just paused manually)
      if (audioInstance.currentTime === 0 || audioInstance.ended) {
        window.dispatchEvent(new CustomEvent('voiceEnd'));
      }
    });

    return () => {
      audioInstance.pause();
      audioInstance.removeEventListener('play', () => {});
      audioInstance.removeEventListener('ended', () => {});
      audioInstance.removeEventListener('pause', () => {});
    };
  }, []);

  const handleVoiceToggle = () => {
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.currentTime = 0;
      audio.play();
    }
  };

  return (
    <section ref={ref} className="py-20 px-6 bg-gradient-to-br from-background via-accent/10 to-background">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6">
            If I Could Say
            <span className="text-primary font-medium"> Everything...</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <Card className="p-8 md:p-12 shadow-dreamy bg-card/80 backdrop-blur-sm relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute inset-0 opacity-5">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-6xl text-primary"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1]
                  }}
                  transition={{
                    duration: 20 + i * 5,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${20 + i * 20}%`
                  }}
                >
                  🎙️
                </motion.div>
              ))}
            </div>

            <div className="relative z-10 space-y-8">
              {/* Voice message content */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="space-y-6"
              >
                <div className="text-6xl mb-4">🎧</div>
                <blockquote className="text-xl md:text-2xl italic text-foreground leading-relaxed">
                  "I may not say it often...<br />
                  But everything I feel is right here, in this website.<br />
                  Just... click yes, and let me hold your world forever."
                </blockquote>
                <cite className="text-primary font-medium">— Chinu's Voice</cite>
              </motion.div>

              {/* Voice control */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 1, duration: 0.6 }}
                className="space-y-4"
              >
                <Button
                  onClick={handleVoiceToggle}
                  size="lg"
                  className={`
                    px-8 py-4 rounded-full text-lg font-medium transition-all duration-300
                    ${isPlaying 
                      ? 'bg-destructive hover:bg-destructive/90 text-destructive-foreground' 
                      : 'bg-primary hover:bg-primary/90 text-primary-foreground'
                    }
                    shadow-dreamy hover:scale-105
                  `}
                >
                  {isPlaying ? (
                    <>
                      <Pause className="mr-3 h-5 w-5" />
                      Playing Chinu's Voice... 🎙️
                    </>
                  ) : (
                    <>
                      <Play className="mr-3 h-5 w-5" />
                      Play Chinu's Voice 🎙️
                    </>
                  )}
                </Button>

                {isPlaying && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-3"
                  >
                    {/* Audio visualization */}
                    <div className="flex items-center justify-center space-x-1">
                      {[...Array(20)].map((_, i) => (
                        <motion.div
                          key={i}
                          className="w-1 bg-primary rounded-full"
                          animate={{
                            height: [4, Math.random() * 30 + 10, 4]
                          }}
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </div>

                    <p className="text-sm text-muted-foreground">
                      🎵 Now playing: My heart speaking to yours...
                    </p>
                  </motion.div>
                )}

                
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
