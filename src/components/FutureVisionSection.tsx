import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const futureScenes = [
  {
    icon: '🏠',
    title: 'Our First Home',
    description: 'A cozy place where we\'ll build our dreams together',
    detail: 'Morning coffee on the porch, plants everywhere, and your laughter filling every room.'
  },
  {
    icon: '☕',
    title: 'Sunday Mornings',
    description: 'Lazy days, warm embraces, and endless conversations',
    detail: 'No rush, nowhere to be. Just us, pancakes, and all the time in the world.'
  },
  {
    icon: '😂',
    title: 'Inside Jokes',
    description: 'The silly moments that make us uniquely us',
    detail: 'Years from now, we\'ll still be laughing at the same ridiculous things.'
  },
  {
    icon: '🌅',
    title: 'Growing Old Together',
    description: 'Watching sunsets, sharing stories, hand in hand',
    detail: 'Wrinkled hands intertwined, hearts still young, love still growing.'
  },
  {
    icon: '🎂',
    title: 'Celebrating Everything',
    description: 'Every birthday, every achievement, every small victory',
    detail: 'Because life\'s best moments are the ones we share.'
  },
  {
    icon: '🌟',
    title: 'Adventures Ahead',
    description: 'New places, new experiences, always together',
    detail: 'The world is vast, but it\'s perfect when you\'re beside me.'
  }
];

export const FutureVisionSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % futureScenes.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + futureScenes.length) % futureScenes.length);
  };

  return (
    <section ref={ref} className="py-20 px-6 gradient-dreamy">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6">
            What Our
            <span className="text-primary font-medium"> Future Looks Like</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Close your eyes and imagine... all the beautiful moments waiting for us
          </p>
        </motion.div>

        {/* Mobile Slider */}
        <div className="block md:hidden">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <Card className="p-8 shadow-dreamy bg-card/90 backdrop-blur-sm min-h-[300px] flex flex-col justify-center">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                className="text-center space-y-6"
              >
                <div className="text-6xl mb-4">
                  {futureScenes[currentSlide].icon}
                </div>
                <h3 className="text-2xl font-medium text-primary">
                  {futureScenes[currentSlide].title}
                </h3>
                <p className="text-lg text-foreground">
                  {futureScenes[currentSlide].description}
                </p>
                <p className="text-base text-muted-foreground italic">
                  {futureScenes[currentSlide].detail}
                </p>
              </motion.div>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button
                onClick={prevSlide}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              
              <div className="flex space-x-2">
                {futureScenes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentSlide ? 'bg-primary' : 'bg-border'
                    }`}
                  />
                ))}
              </div>
              
              <Button
                onClick={nextSlide}
                variant="outline"
                size="sm"
                className="rounded-full"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {futureScenes.map((scene, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
            >
              <Card className="p-6 shadow-dreamy bg-card/80 backdrop-blur-sm h-full hover:shadow-romantic transition-all duration-300 group cursor-pointer">
                <motion.div
                  className="text-center space-y-4"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    className="text-5xl mb-4"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {scene.icon}
                  </motion.div>
                  <h3 className="text-xl font-medium text-primary group-hover:text-primary/80 transition-colors">
                    {scene.title}
                  </h3>
                  <p className="text-base text-foreground">
                    {scene.description}
                  </p>
                  <motion.p
                    className="text-sm text-muted-foreground italic opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    initial={{ height: 0 }}
                    whileHover={{ height: 'auto' }}
                  >
                    {scene.detail}
                  </motion.p>
                </motion.div>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-12"
        >
          <p className="text-xl text-primary italic font-medium">
            "Someday, this will all be real..."
          </p>
          <motion.div
            className="mt-4 text-2xl"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            ✨💫✨
          </motion.div>
        </motion.div>

        {/* Floating dream particles */}
        <div className="relative mt-8">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute text-primary/20 text-xl pointer-events-none"
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
                x: [0, 20, -20, 0]
              }}
              transition={{
                duration: 6 + i * 0.5,
                repeat: Infinity,
                delay: i * 0.8
              }}
              style={{
                left: `${10 + i * 11}%`,
                top: `${Math.random() * 100}px`
              }}
            >
              {['💭', '💖', '🌟', '✨'][i % 4]}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};