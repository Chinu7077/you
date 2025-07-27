import { motion, AnimatePresence } from "framer-motion";
import { Heart, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const AnimatedSmile = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      {/* Main face container */}
      <motion.div
        className="w-48 h-48 bg-yellow-200 rounded-full border-4 border-yellow-400 shadow-2xl relative flex items-center justify-center"
        animate={{
          scale: [1, 1.02, 1],
          rotate: [0, 1, -1, 0]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Eyes */}
        <div className="absolute top-16 left-12">
          <motion.div
            className="w-4 h-4 bg-gray-800 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5, ease: "bounceOut" }}
          />
        </div>
        <div className="absolute top-16 right-12">
          <motion.div
            className="w-4 h-4 bg-gray-800 rounded-full"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.5, duration: 0.5, ease: "bounceOut" }}
          />
        </div>

        {/* Mouth - using a curved div */}
        <motion.div
          className="absolute bottom-16"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" }}
        >
          <div className="w-16 h-8 border-b-4 border-gray-800 rounded-b-full" />
        </motion.div>

        {/* Cheek blushes */}
        <motion.div
          className="absolute top-20 left-4 w-6 h-6 bg-pink-300 rounded-full opacity-60"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ delay: 1, duration: 0.6, ease: "easeOut" }}
        />
        <motion.div
          className="absolute top-20 right-4 w-6 h-6 bg-pink-300 rounded-full opacity-60"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
        />
      </motion.div>

      {/* Floating hearts around the smile */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-pink-400"
          style={{
            left: `${Math.cos((i * 90) * (Math.PI / 180)) * 140 + 96}px`,
            top: `${Math.sin((i * 90) * (Math.PI / 180)) * 140 + 96}px`,
          }}
          animate={{
            y: [0, -10, 0],
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2 + i * 0.5,
            repeat: Infinity,
            delay: 1.5 + i * 0.3
          }}
        >
          <Heart className="h-6 w-6" />
        </motion.div>
      ))}
    </motion.div>
  );
};

const NotFound = () => {
  const [hasLetGo, setHasLetGo] = useState(false);

  const handleLetGo = () => {
    setHasLetGo(true);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 via-white to-purple-50 relative overflow-hidden">
      <AnimatePresence mode="wait">
        {!hasLetGo ? (
          <motion.div
            key="content"
            exit={{ 
              opacity: 0, 
              scale: 0.8,
              y: -50
            }}
            transition={{ 
              duration: 1.2,
              ease: "easeInOut"
            }}
            className="w-full h-full"
          >
            {/* Simple floating hearts */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute text-pink-200"
                  style={{
                    left: `${20 + i * 30}%`,
                    top: `${20 + i * 20}%`,
                  }}
                  animate={{
                    y: [0, -20, 0],
                    opacity: [0.3, 0.7, 0.3]
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    delay: i * 1.5
                  }}
                >
                  <Heart className="h-8 w-8" />
                </motion.div>
              ))}
            </div>

            <div className="text-center relative z-10 max-w-2xl mx-auto px-6 min-h-screen flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {/* Simple 404 */}
                <motion.h1 
                  className="text-8xl md:text-9xl font-light text-gray-300 mb-4"
                  animate={{ 
                    scale: [1, 1.02, 1]
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity 
                  }}
                >
                  404
                </motion.h1>

                {/* Simple message */}
                <motion.h2 
                  className="text-2xl md:text-3xl font-light text-gray-600 mb-6"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  Page not found
                </motion.h2>

                {/* Powerful single line */}
                <motion.p 
                  className="text-lg text-gray-500 mb-8 italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  Some paths lead to beautiful places... this isn't one of them.
                </motion.p>

                {/* Single floating heart */}
                <motion.div
                  className="mb-8"
                  animate={{
                    y: [0, -10, 0],
                    scale: [1, 1.1, 1]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity
                  }}
                >
                  <Heart className="h-12 w-12 text-pink-300 mx-auto" />
                </motion.div>

                {/* Simple return button */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.9, duration: 0.8 }}
                >
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full px-8 py-3 border-pink-200 text-gray-600 hover:bg-pink-50 hover:border-pink-300 transition-all duration-300"
                    onClick={handleLetGo}
                  >
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Let it go
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="smile"
            initial={{ 
              opacity: 0, 
              scale: 0.5,
              y: 50
            }}
            animate={{ 
              opacity: 1, 
              scale: 1,
              y: 0
            }}
            transition={{ 
              duration: 1.5,
              ease: "easeOut",
              delay: 0.5
            }}
            className="text-center flex items-center justify-center min-h-screen"
          >
            <AnimatedSmile />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default NotFound; 