import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ParticleSystem from './animations/ParticleSystem';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [textVisible, setTextVisible] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [currentNumber, setCurrentNumber] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const duration = 3000;
    let startTime: number;
    
    const easeOutExpo = (t: number): number => {
      return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
    };
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min((elapsed / duration), 1);
      const easedProgress = easeOutExpo(rawProgress) * 100;
      
      setProgress(easedProgress);
      setCurrentNumber(Math.floor(easedProgress));
      
      if (rawProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 800);
        }, 500);
      }
    };
    
    requestAnimationFrame(animate);
    setTimeout(() => setTextVisible(true), 300);
    
    return () => {
      startTime = 0;
    };
  }, [onComplete]);

  const numberVariants = {
    initial: { 
      scale: 0,
      rotate: -180,
      opacity: 0
    },
    animate: (i: number) => ({
      scale: 1,
      rotate: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
        delay: i * 0.08
      }
    }),
    exit: { 
      scale: 0,
      rotate: 180,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          ref={containerRef}
          className="fixed inset-0 flex flex-col items-center justify-center bg-green-950 z-50 overflow-hidden"
          exit={{ 
            y: "100%",
            opacity: 0,
            transition: { 
              duration: 0.8,
              ease: [0.65, 0, 0.35, 1],
              opacity: { duration: 0.6 }
            }
          }}
        >
          <ParticleSystem type="leaves" density={70} />

          <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <video
              className="w-full h-full object-cover"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://assets.mixkit.co/videos/preview/mixkit-farming-land-seen-from-above-4982-large.mp4" type="video/mp4" />
            </video>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: textVisible ? 1 : 0, y: textVisible ? 0 : 30 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-12 relative"
          >
            <motion.h1 
              className="text-4xl md:text-6xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                delay: 0.2,
                duration: 1,
                ease: [0.22, 1, 0.36, 1]
              }}
            >
              Agri-BioFuels Global
            </motion.h1>
            <motion.p 
              className="text-xl text-green-200"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ 
                delay: 0.6,
                duration: 0.8,
                ease: "easeOut"
              }}
            >
              Transforming Agriculture, Powering Tomorrow
            </motion.p>
          </motion.div>

          <div className="relative">
            <motion.div 
              className="text-8xl font-bold text-white mb-8 flex items-center justify-center"
              style={{ 
                textShadow: "0 0 30px rgba(34, 197, 94, 0.6)",
                WebkitTextStroke: "2px rgba(34, 197, 94, 0.3)"
              }}
            >
              {String(Math.floor(currentNumber)).split('').map((digit, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={numberVariants}
                  initial="initial"
                  animate="animate"
                  className="inline-block mx-1"
                >
                  {digit}
                </motion.span>
              ))}
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  delay: 0.4,
                  duration: 0.8,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className="ml-2"
              >
                %
              </motion.span>
            </motion.div>

            <motion.div 
              className="absolute -top-10 -right-10 w-20 h-20"
              animate={{ 
                rotate: 360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: { 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-r from-green-400 to-green-600 opacity-75 blur-lg" />
            </motion.div>

            <motion.div 
              className="absolute -bottom-10 -left-10 w-20 h-20"
              animate={{ 
                rotate: -360,
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                rotate: { 
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear"
                },
                scale: { 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                  delay: 1
                }
              }}
            >
              <div className="w-full h-full rounded-full bg-gradient-to-l from-green-400 to-green-600 opacity-75 blur-lg" />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;