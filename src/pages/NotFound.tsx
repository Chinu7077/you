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
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-muted-foreground/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 30 + 15}px`
            }}
            animate={{
              y: [0, -15, 0],
              rotate: [0, 5, -5, 0],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{
              duration: 5 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          >
            💔
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
            className="text-8xl md:text-9xl font-light text-muted-foreground mb-6"
            animate={{ 
              scale: [1, 1.02, 1],
            }}
            transition={{ 
              duration: 3,
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
            <h2 className="text-3xl md:text-4xl font-light text-foreground mb-6 leading-relaxed">
              its all over<br />
              <span className="text-muted-foreground font-normal">and broken inside</span>
            </h2>
          </motion.div>

          {/* Broken Heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="flex justify-center items-center mb-8"
          >
            <motion.div
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            >
              <div className="text-6xl">💔</div>
            </motion.div>
          </motion.div>

          {/* Melancholic Message */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="bg-card/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-muted-foreground/20 mb-8"
          >
            <p className="text-lg text-muted-foreground mb-3">
              "Some paths lead nowhere..."
            </p>
            <p className="text-sm text-muted-foreground/80">
              — and sometimes that's exactly where we need to be
            </p>
          </motion.div>

          {/* Return Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-8"
          >
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 py-3 bg-background/80 backdrop-blur-sm border-muted-foreground/30 hover:bg-muted hover:text-foreground transition-all duration-300 hover:scale-105"
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