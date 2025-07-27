import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Sparkles, MessageCircle, Star, Heart, Coffee, Moon } from 'lucide-react';

const timelineItems = [
  {
    icon: MessageCircle,
    title: "Our First Conversation...",
    description: "I still remember our very first conversation it felt different, like something truly special.",
    emoji: "💬"
  },
  {
    icon: Sparkles,
    title: "When We Met...",
    description: "I still remember how special our first meeting was and how special that place was too The way you walked in shyly and blushed when you saw me...",
    emoji: "✨"
  },
  {
    icon: Coffee,
    title: "That first breakfast…",
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
    description: "The way you looked into my eyes and spoke without words…In that moment, I knew — I didn't need anything else but you.",
    emoji: "💕"
  },
  {
    icon: Moon,
    title: "Forever Yours",
    description: "Every night since then, I fall asleep thinking about our future together.",
    emoji: "🌙"
  }
];

export const TimelineSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="py-20 px-6 gradient-timeline">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-gray-800 mb-6">
            Our Beautiful Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Every moment we've shared has led us to this beautiful chapter
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-pink-200 via-purple-200 to-pink-200"></div>

          {timelineItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-pink-400 rounded-full border-4 border-white shadow-lg z-10">
                <div className="w-full h-full bg-pink-400 rounded-full animate-pulse"></div>
              </div>

              {/* Content card */}
              <div className={`w-5/12 ${index % 2 === 0 ? 'mr-auto pr-8' : 'ml-auto pl-8'}`}>
                <Card className="p-6 bg-white/80 backdrop-blur-sm border-pink-200 shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? '' : 'flex-row-reverse'}`}>
                    <div className="text-3xl mr-3">{item.emoji}</div>
                    <item.icon className="h-6 w-6 text-pink-500" />
                  </div>
                  <h3 className={`text-xl font-semibold text-gray-800 mb-3 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {item.title}
                  </h3>
                  <p className={`text-gray-600 leading-relaxed ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    {item.description}
                  </p>
                </Card>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}; 