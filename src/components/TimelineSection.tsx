import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Sparkles, MessageCircle, Star, Heart, Coffee, Moon } from 'lucide-react';

const timelineItems = [
  {
    icon: MessageCircle,
    title: "Our First Conversation...",
    description: "I still remember our very first conversation  it felt different, like something truly special.",
    emoji: "💬"
  },
  {
    icon: Sparkles,
    title: "When We Met...",
    description: "I still remember how special our first meeting was  and how special that place was too The way you walked in shyly and blushed when you saw me...",
    emoji: "✨"
  },
  
  {
    icon: Coffee,
    title: "That first breakfast… ",
    description: "That first breakfast… I still remember how gently you fed me. In that quiet moment, I felt what care truly means.",
    emoji: "☕"
  },
  {
    icon: Star,
    title: "A Moment I Can't Forget",
    description: "That day at Jagannath Mandir…just the two of us, walking side by side —I can never forget how peaceful and special it felt.",
    emoji: "⭐"
  },
  {
    icon: Heart,
    title: "When I Realized",
    description: "The way you looked into my eyes and spoke without words…In that moment, I knew — I didn’t need anything else but you.",
    emoji: "💕"
  },
  {
    icon: Moon,
    title: "What I Feel When You Smile",
    description: "Every time I see your smile, it feels like I’ve found all the joy this world has to offer.",
    emoji: "🌙"
  }
];

export const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

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
            Our Beautiful 
            <span className="text-primary font-medium"> Journey</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            Every moment that led us here...
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-0.5 bg-primary opacity-30"></div>
          
          {timelineItems.map((item, index) => {
            const Icon = item.icon;
            const isEven = index % 2 === 0;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className={`relative flex items-center mb-12 ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 -translate-y-1/2 top-1/2">
                  <motion.div
                    className="w-8 h-8 rounded-full gradient-romantic shadow-soft flex items-center justify-center"
                    whileHover={{ scale: 1.2 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Icon className="h-4 w-4 text-primary-foreground" />
                  </motion.div>
                </div>

                {/* Content */}
                <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                  isEven ? 'md:mr-16' : 'md:ml-16'
                }`}>
                  <Card className="p-6 shadow-romantic hover:shadow-dreamy transition-romantic">
                    <div className="flex items-center mb-3">
                      <span className="text-2xl mr-3">{item.emoji}</span>
                      <h3 className="text-xl font-medium text-foreground">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </Card>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};