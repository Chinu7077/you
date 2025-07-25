import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';

const loveTraits = [
  {
    title: "Your Smile",
    description: "It lights up my entire world and makes everything better.",
    emoji: "😊"
  },
  {
    title: "Your Voice",
    description: "The sweetest sound I've ever heard, like music to my soul.",
    emoji: "🎵"
  },
  {
    title: "Your Kindness",
    description: "The way you care for others shows your beautiful heart.",
    emoji: "💕"
  },
  {
    title: "Your Laugh",
    description: "It's contagious and fills me with pure joy every time.",
    emoji: "😄"
  },
  {
    title: "Your Intelligence",
    description: "The way you think and see the world fascinates me endlessly.",
    emoji: "🧠"
  },
  {
    title: "The Way You Make Me Feel",
    description: "Complete, loved, and like I'm the luckiest person alive.",
    emoji: "✨"
  }
];

export const LoveTraitsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-4">
            Things I 
            <span className="text-primary font-medium"> Adore</span>
            <span className="text-lilac"> About You</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Each one makes me fall deeper...
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loveTraits.map((trait, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flip-card h-64"
            >
              <div className="flip-card-inner">
                {/* Front of card */}
                <Card className="flip-card-front gradient-romantic shadow-soft p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-4xl mb-4">{trait.emoji}</div>
                  <h3 className="text-xl font-medium text-primary-foreground">
                    {trait.title}
                  </h3>
                </Card>

                {/* Back of card */}
                <Card className="flip-card-back bg-card shadow-soft p-8 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl mb-4 opacity-50">{trait.emoji}</div>
                  <p className="text-muted-foreground leading-relaxed text-sm">
                    {trait.description}
                  </p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-lg text-muted-foreground italic">
            "Hover over each card to reveal my heart..."
          </p>
        </motion.div>
      </div>
    </section>
  );
};