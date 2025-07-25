import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';

interface HeroSectionProps {
  onStartJourney: () => void;
}

export const HeroSection = ({ onStartJourney }: HeroSectionProps) => {
  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url('/h-1.jpg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundBlendMode: 'soft-light',
      }}
    >
      {/* 🔥 Dark overlay */}
      <div className="absolute inset-0 bg-black/50 z-0" />

      {/* 💖 Floating glowing hearts */}
 <div className="absolute inset-0 pointer-events-none z-10">
  {Array.from({ length: 30 }).map((_, i) => {
    const isHeart = Math.random() < 0.5;
    const index = Math.floor(Math.random() * 6) + 1; // 1 to 6
    const imageName = isHeart ? `heart-${index}.png` : `flower-${index}.png`;
    const left = Math.random() * 100; // random left position
    const size = 24 + Math.random() * 24; // 24px to 48px
    const duration = 10 + Math.random() * 6; // 6s to 10s
    const delay = Math.random() * 4;

    return (
      <motion.div
        key={i}
        className="absolute opacity-70 animate-pulse"
        initial={{ y: "100vh", opacity: 0 }}
        animate={{
          y: "-120vh",
          opacity: [0, 1, 1, 0],
          rotate: [0, 15, -15, 0],
          x: [0, 10, -10, 0],
        }}
        transition={{
          duration,
          delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          left: `${left}%`,
          width: `${size}px`,
          height: `${size}px`,
          filter: 'drop-shadow(0 0 12px rgba(255,105,180,0.5))',
        }}
      >
        <img
          src={`/${imageName}`}
          alt="Floating"
          className="w-full h-full object-contain"
        />
      </motion.div>
    );
  })}
</div>

      <div className="text-center z-20 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <motion.h1 
            className="text-4xl md:text-6xl lg:text-7xl font-light text-white leading-tight drop-shadow-[0_0_12px_rgba(255,255,255,0.6)]"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            From the moment
            <motion.span 
              className="block text-pink-400 font-medium drop-shadow-[0_0_18px_rgba(255,105,180,0.9)]"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.5, duration: 0.8 }}
            >
              I met you...
            </motion.span>
          </motion.h1>

          <motion.p 
            className="text-xl md:text-2xl lg:text-3xl font-light text-gray-200 max-w-2xl mx-auto drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
          >
            Something changed inside me.
          </motion.p>

          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 2.5, duration: 1 }}
            className="pt-8"
          >
            <Button
              onClick={onStartJourney}
              size="lg"
              className="gradient-romantic hover:shadow-[0_0_20px_rgba(255,105,180,0.6)] transition text-lg px-8 py-6 rounded-full"
            >
              <Heart className="mr-2 h-5 w-5 animate-heart-beat text-pink-400" />
              Start Reading...
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle glowing scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 3, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 border-2 border-pink-400 rounded-full flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1 h-3 bg-pink-400 rounded-full mt-2"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};
