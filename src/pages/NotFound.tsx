import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Home, Zap, Cloud, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  const [currentQuote, setCurrentQuote] = useState(0);

  const emotionalQuotes = [
    {
      text: "I still wake up reaching for you...",
      author: "but find only empty space where your warmth used to be"
    },
    {
      text: "Every song reminds me of us...",
      author: "now they're just painful echoes of what we'll never be again"
    },
    {
      text: "I see your face in every crowd...",
      author: "but it's never you, and my heart breaks all over again"
    },
    {
      text: "You were my forever...",
      author: "now I don't even know what forever means anymore"
    },
    {
      text: "I loved you with everything I had...",
      author: "and losing you took everything I was"
    },
    {
      text: "The silence where your laughter used to be...",
      author: "is the loudest sound I've ever heard"
    },
    {
      text: "I would give anything for one more day...",
      author: "just to tell you all the things I never said"
    }
  ];

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );

    // Cycle through quotes every 6 seconds for more emotional impact
    const interval = setInterval(() => {
      setCurrentQuote((prev) => (prev + 1) % emotionalQuotes.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating broken hearts */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={`heart-${i}`}
            className="absolute text-red-500/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 40 + 20}px`
            }}
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.6, 0.2]
            }}
            transition={{
              duration: 6 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3
            }}
          >
            💔
          </motion.div>
        ))}

        {/* Floating tears */}
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`tear-${i}`}
            className="absolute text-blue-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 25 + 15}px`
            }}
            animate={{
              y: [0, 50, 0],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 8 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 4
            }}
          >
            💧
          </motion.div>
        ))}

        {/* Floating stars that fade */}
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              rotate: [0, 180, 360],
              opacity: [0, 0.4, 0]
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 5
            }}
          >
            <Star className="h-4 w-4 text-gray-500" />
          </motion.div>
        ))}
      </div>

      <div className="text-center relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          {/* Glitchy 404 Number */}
          <motion.h1 
            className="text-8xl md:text-9xl font-light text-gray-300 mb-8 font-mono"
            animate={{ 
              scale: [1, 1.05, 1],
              textShadow: [
                "0 0 10px rgba(255,255,255,0.1)",
                "0 0 20px rgba(255,255,255,0.3)",
                "0 0 10px rgba(255,255,255,0.1)"
              ]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity 
            }}
          >
            <motion.span
              animate={{
                opacity: [1, 0.5, 1, 0.8, 1]
              }}
              transition={{
                duration: 0.5,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              4
            </motion.span>
            <motion.span
              animate={{
                opacity: [1, 0.3, 1, 0.6, 1],
                x: [0, 2, 0, -1, 0]
              }}
              transition={{
                duration: 0.8,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              0
            </motion.span>
            <motion.span
              animate={{
                opacity: [1, 0.7, 1, 0.4, 1],
                y: [0, -2, 0, 1, 0]
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                repeatType: "reverse"
              }}
            >
              4
            </motion.span>
          </motion.h1>

          {/* Main Emotional Message */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="mb-10"
          >
            <motion.h2 
              className="text-4xl md:text-6xl font-light text-white mb-6 leading-relaxed"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 3,
                repeat: Infinity
              }}
            >
              its all over
            </motion.h2>
            <motion.p 
              className="text-3xl md:text-4xl font-normal text-gray-400 mb-6"
              animate={{
                opacity: [0.5, 0.8, 0.5],
                y: [0, -2, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity
              }}
            >
              and broken inside
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 1.5 }}
              className="text-xl md:text-2xl text-red-400/80 font-light italic mb-8"
            >
              <motion.p
                animate={{
                  opacity: [0.6, 1, 0.6]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: 1
                }}
              >
                nothing feels the same without you...
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Animated Broken Heart Collection */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="flex justify-center items-center space-x-6 mb-12"
          >
            {[...Array(5)].map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 5, -5, 0],
                  y: [0, -10, 0]
                }}
                transition={{
                  duration: 2 + i * 0.5,
                  repeat: Infinity,
                  delay: i * 0.3
                }}
                className="text-4xl md:text-5xl"
              >
                💔
              </motion.div>
            ))}
          </motion.div>

          {/* Deep Emotional Poetry Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mb-8"
          >
            <motion.div
              className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed italic"
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 5,
                repeat: Infinity
              }}
            >
              "I keep your picture by my bedside,<br />
              whisper goodnight to shadows and memories...<br />
              <span className="text-red-400/70">wondering if you ever think of me too"</span>
            </motion.div>
          </motion.div>

          {/* Personal Letter Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 1 }}
            className="bg-gray-800/40 backdrop-blur-sm p-6 rounded-2xl border border-red-500/20 mb-8"
          >
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 6,
                repeat: Infinity
              }}
              className="text-lg text-gray-300 leading-relaxed"
            >
              <p className="mb-4 text-red-400/90 font-medium">To the one who got away...</p>
              <p className="mb-3">Every morning I wake up hoping this is all just a bad dream.</p>
              <p className="mb-3">That I'll turn around and you'll be there, smiling like you used to.</p>
              <p className="mb-3 text-gray-400">But the cold side of the bed reminds me...</p>
              <p className="text-gray-500 italic">some stories don't get happy endings.</p>
            </motion.div>
          </motion.div>

          {/* Rotating Quotes */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 1 }}
            className="bg-gray-900/60 backdrop-blur-sm p-8 rounded-3xl shadow-2xl border border-gray-700/50 mb-10"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentQuote}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
              >
                <p className="text-lg md:text-xl text-gray-300 mb-4 leading-relaxed">
                  "{emotionalQuotes[currentQuote].text}"
                </p>
                <p className="text-sm md:text-base text-gray-500 italic">
                  — {emotionalQuotes[currentQuote].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          {/* Raw Emotional Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.2, duration: 1 }}
            className="mb-10"
          >
            <motion.p 
              className="text-lg text-gray-400 mb-4"
              animate={{
                opacity: [0.4, 0.8, 0.4]
              }}
              transition={{
                duration: 6,
                repeat: Infinity
              }}
            >
              I still save your contact as "my heart" in my phone...
            </motion.p>
            <motion.p 
              className="text-base text-gray-500 mb-4"
              animate={{
                opacity: [0.3, 0.7, 0.3]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                delay: 2
              }}
            >
              even though calling would only break us both again
            </motion.p>
            <motion.p 
              className="text-sm text-red-400/60 italic"
              animate={{
                opacity: [0.3, 0.6, 0.3]
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                delay: 4
              }}
            >
              some love never dies, it just learns to live with the pain...
            </motion.p>
          </motion.div>

          {/* Heartbreaking Realization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.5, duration: 1.2 }}
            className="bg-gradient-to-r from-red-900/20 to-gray-900/20 p-6 rounded-xl border border-red-500/30 mb-8"
          >
            <motion.div
              animate={{
                opacity: [0.6, 1, 0.6]
              }}
              transition={{
                duration: 5,
                repeat: Infinity
              }}
            >
              <p className="text-lg text-white mb-3 font-light">
                The hardest part isn't missing you...
              </p>
              <p className="text-base text-gray-300 mb-3">
                It's knowing you're probably happier without me.
              </p>
              <p className="text-sm text-gray-500 italic">
                And that's all I ever wanted for you... even if it destroys me.
              </p>
            </motion.div>
          </motion.div>

          {/* Return Button with enhanced animation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-12"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-10 py-4 bg-gray-800/80 backdrop-blur-sm border-gray-600/50 text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-500 hover:shadow-lg hover:shadow-gray-500/20"
                onClick={() => window.history.back()}
              >
                <motion.div
                  animate={{ x: [-2, 2, -2] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Home className="mr-3 h-5 w-5" />
                </motion.div>
                let me go...
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound; 