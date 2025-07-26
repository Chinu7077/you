import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import { Heart, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent/10 to-background relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-primary/10"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              scale: [1, 1.1, 1]
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            💕
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10 max-w-2xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* 404 Number */}
          <motion.h1 
            className="text-8xl md:text-9xl font-light text-primary mb-4"
            animate={{ 
              scale: [1, 1.05, 1],
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity 
            }}
          >
            404
          </motion.h1>

          {/* Main Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mb-8"
          >
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-4">
              Oops! Love Story 
              <span className="text-primary font-medium"> Under Construction</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Our digital love story is currently being crafted with extra care... 💝<br />
              <span className="text-primary font-medium">Come back soon for something magical!</span>
            </p>
          </motion.div>

          {/* Decorative Hearts */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center space-x-4 mb-8"
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 10, -10, 0]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
              >
                <Heart className="h-8 w-8 text-primary fill-primary/20" />
              </motion.div>
            ))}
          </motion.div>

          {/* Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="bg-card/80 backdrop-blur-sm p-6 rounded-2xl shadow-dreamy border border-primary/20"
          >
            <p className="text-lg text-muted-foreground mb-4">
              "Every great love story takes time to write perfectly... ✨"
            </p>
            <p className="text-sm text-primary font-medium">
              — Currently adding more magic to our story 💫
            </p>
          </motion.div>

          {/* Optional Return Button (you can remove this if you don't want any navigation) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-3 bg-background/80 backdrop-blur-sm border-primary/30 hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
              onClick={() => window.history.back()}
            >
              <Home className="mr-2 h-5 w-5" />
              Go Back
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
