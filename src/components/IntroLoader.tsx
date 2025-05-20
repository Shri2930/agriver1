import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';

interface IntroLoaderProps {
  onComplete: () => void;
}

const IntroLoader: React.FC<IntroLoaderProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [isDone, setIsDone] = useState(false);
  const [segmentVisible, setSegmentVisible] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const hexRotation = useAnimation();
  const logoScale = useAnimation();
  const progressControls = useAnimation();
  
  // Number of logo segments
  const totalSegments = 5;
  const particlesRef = useRef<HTMLDivElement>(null);

  // Track mouse for interactive hover effect
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    // Start rotating animation
    hexRotation.start({
      rotate: 360,
      transition: { duration: 20, ease: "linear", repeat: Infinity }
    });
    
    // Start scale pulse animation
    logoScale.start({
      scale: [1, 1.03, 1],
      transition: { duration: 3, ease: "easeInOut", repeat: Infinity }
    });

    // Start progress animation
    progressControls.start({
      width: "100%",
      transition: { duration: 0.8, ease: "easeOut" }
    });

    const duration = 3000;
    let startTime: number;
    
    // Custom easing for smooth progress
    const easeOutQuart = (t: number): number => {
      return 1 - Math.pow(1 - t, 4);
    };
    
    const animate = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const rawProgress = Math.min((elapsed / duration), 1);
      const easedProgress = easeOutQuart(rawProgress) * 100;
      
      setProgress(easedProgress);
      
      // Calculate how many segments should be visible based on progress
      const visibleSegments = Math.min(
        Math.floor((easedProgress / 100) * (totalSegments + 1)),
        totalSegments
      );
      setSegmentVisible(visibleSegments);
      
      if (rawProgress < 1) {
        requestAnimationFrame(animate);
      } else {
        setTimeout(() => {
          setIsDone(true);
          setTimeout(onComplete, 700);
        }, 300);
      }
    };
    
    requestAnimationFrame(animate);
    
    // Show particles after slight delay
    const particleTimer = setTimeout(() => {
      setShowParticles(true);
    }, 800);
    
    // Mouse move handler for interactive effect
    const handleMouseMove = (e: MouseEvent) => {
      if (particlesRef.current) {
        // Calculate the position relative to the center of the viewport
        const centerX = window.innerWidth / 2;
        const centerY = window.innerHeight / 2;
        const moveX = (e.clientX - centerX) / 20;
        const moveY = (e.clientY - centerY) / 20;
        
        setMousePosition({ x: moveX, y: moveY });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      startTime = 0;
      clearTimeout(particleTimer);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [onComplete, hexRotation, logoScale, progressControls]);

  // Generate data arrays for different particles
  const generateParticles = (count: number, type: string) => {
    return Array.from({ length: count }).map((_, i) => {
      const size = type === 'dot' ? Math.random() * 4 + 2 : Math.random() * 4 + 1;
      const speed = Math.random() * 10 + 20;
      const initialX = Math.random() * 100;
      const initialY = Math.random() * 100;
      const delay = Math.random() * 2;
      const opacity = type === 'dot' ? Math.random() * 0.3 + 0.1 : Math.random() * 0.15 + 0.05;
      return { size, speed, initialX, initialY, delay, opacity };
    });
  };

  const floatingDots = generateParticles(15, 'dot');
  const floatingLines = generateParticles(8, 'line');

  return (
    <AnimatePresence>
      {!isDone && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-white z-50 overflow-hidden"
          exit={{ 
            opacity: 0,
            transition: { 
              duration: 0.7,
              ease: [0.65, 0, 0.35, 1]
            }
          }}
        >
          {/* Dynamic grid background */}
          <motion.div 
            className="absolute inset-0 bg-gray-50" 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          />
          
          <motion.div
            className="absolute inset-0 opacity-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 2 }}
          >
            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
                  <motion.path 
                    d="M 50 0 L 0 0 0 50" 
                    fill="none" 
                    stroke="#10b981" 
                    strokeWidth="0.5"
                    initial={{ opacity: 0, pathLength: 0 }}
                    animate={{ opacity: 1, pathLength: 1 }}
                    transition={{ duration: 1.5, delay: 0.5 }}
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
          </motion.div>

          {/* Floating particles */}
          {showParticles && (
            <div ref={particlesRef} className="absolute inset-0 overflow-hidden pointer-events-none">
              {/* Floating dots */}
              {floatingDots.map((dot, i) => (
                <motion.div
                  key={`dot-${i}`}
                  className="absolute rounded-full bg-green-500"
                  style={{
                    width: dot.size,
                    height: dot.size,
                    left: `${dot.initialX}%`,
                    top: `${dot.initialY}%`,
                    opacity: dot.opacity
                  }}
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ 
                    y: [-20, -80, -20],
                    x: [0, Math.random() * 20 - 10, 0],
                    opacity: [dot.opacity, dot.opacity * 1.5, dot.opacity]
                  }}
                  transition={{ 
                    duration: dot.speed, 
                    repeat: Infinity, 
                    delay: dot.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
              
              {/* Floating lines */}
              {floatingLines.map((line, i) => (
                <motion.div
                  key={`line-${i}`}
                  className="absolute bg-green-400"
                  style={{
                    width: line.size / 4,
                    height: line.size * 10,
                    left: `${line.initialX}%`,
                    top: `${line.initialY}%`,
                    opacity: line.opacity
                  }}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ 
                    y: [-30, -80, -30],
                    opacity: [line.opacity, line.opacity * 1.2, line.opacity],
                    rotate: [0, 45, 0, -45, 0]
                  }}
                  transition={{ 
                    duration: line.speed * 1.5, 
                    repeat: Infinity, 
                    delay: line.delay,
                    ease: "easeInOut"
                  }}
                />
              ))}
            </div>
          )}

          {/* Background gradient circle */}
          <motion.div
            className="absolute rounded-full bg-gradient-to-tr from-green-50 to-emerald-100"
            style={{ width: 600, height: 600 }}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.8 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          />

          {/* Animated rings */}
          {[120, 180, 240].map((size, i) => (
            <motion.div
              key={`ring-${i}`}
              className="absolute rounded-full border border-green-200"
              style={{ width: size, height: size }}
              animate={hexRotation}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: [0, 0.4, 0.2], scale: 1 }}
              transition={{ 
                opacity: { delay: i * 0.2, duration: 2 },
                scale: { delay: i * 0.2, duration: 1.5 }
              }}
            />
          ))}

          {/* Interactive logo container */}
          <motion.div
            className="relative mb-16 z-10"
            animate={logoScale}
            style={{ 
              x: mousePosition.x * 0.5, 
              y: mousePosition.y * 0.5,
              rotateX: mousePosition.y * 0.2,
              rotateY: -mousePosition.x * 0.2,
              perspective: 1000
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            {/* Logo subtle glow */}
            <motion.div
              className="absolute inset-0 rounded-full bg-gradient-to-r from-green-300 to-emerald-300 blur-xl"
              style={{ width: 120, height: 120, left: 'calc(50% - 60px)', top: -15 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />

            {/* Abstract logo mark - hexagon segments representing agriculture/innovation */}
            <svg width="120" height="120" viewBox="0 0 120 120" className="mx-auto mb-8 relative">
              {/* Rotating background ring */}
              <motion.circle
                cx="60"
                cy="60"
                r="55"
                stroke="#e2f5e9"
                strokeWidth="1"
                strokeDasharray="5,8"
                fill="none"
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Background pulse circle */}
              <motion.circle
                cx="60"
                cy="60"
                r="40"
                stroke="#10b981"
                strokeWidth="0.5"
                fill="none"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.4, 0.2],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut"
                }}
              />

              {/* Center circle */}
              <motion.circle 
                cx="60" 
                cy="60" 
                r="12" 
                fill="#16a34a" 
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              />
              
              {/* Pulse effect around center */}
              <motion.circle
                cx="60"
                cy="60"
                r="12"
                stroke="#16a34a"
                strokeWidth="2"
                fill="none"
                initial={{ scale: 1, opacity: 0 }}
                animate={{ 
                  scale: [1, 1.6, 1],
                  opacity: [0.7, 0, 0.7]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeOut"
                }}
              />

              {/* Segments that appear progressively */}
              {[
                { path: "M60,60 L90,40 L90,80 Z", delay: 0.4, visible: 1 },
                { path: "M60,60 L90,80 L60,100 Z", delay: 0.5, visible: 2 },
                { path: "M60,60 L60,100 L30,80 Z", delay: 0.6, visible: 3 },
                { path: "M60,60 L30,80 L30,40 Z", delay: 0.7, visible: 4 },
                { path: "M60,60 L30,40 L60,20 Z", delay: 0.8, visible: 5 },
                { path: "M60,60 L60,20 L90,40 Z", delay: 0.9, visible: 5 }
              ].map((segment, i) => (
                <motion.path
                  key={i}
                  d={segment.path}
                  fill="#10b981"
                  opacity={0.8}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: segmentVisible >= segment.visible ? 1 : 0,
                    opacity: segmentVisible >= segment.visible ? [0.7, 0.8, 0.7] : 0
                  }}
                  transition={{ 
                    scale: { duration: 0.4, ease: "easeOut" },
                    opacity: { 
                      duration: 2, 
                      repeat: segmentVisible >= segment.visible ? Infinity : 0,
                      repeatType: "reverse" 
                    }
                  }}
                />
              ))}

              {/* Border lines with animated drawing */}
              {[
                { path: "M60,60 L90,40", visible: 1 },
                { path: "M60,60 L90,80", visible: 2 },
                { path: "M60,60 L60,100", visible: 2 },
                { path: "M60,60 L30,80", visible: 3 },
                { path: "M60,60 L30,40", visible: 4 },
                { path: "M60,60 L60,20", visible: 5 },
                { path: "M90,40 L90,80", visible: 1 },
                { path: "M90,80 L60,100", visible: 2 },
                { path: "M60,100 L30,80", visible: 3 },
                { path: "M30,80 L30,40", visible: 4 },
                { path: "M30,40 L60,20", visible: 5 },
                { path: "M60,20 L90,40", visible: 5 }
              ].map((line, i) => (
                <motion.path
                  key={`line-${i}`}
                  d={line.path}
                  stroke="#047857"
                  strokeWidth="1.5"
                  fill="none"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ 
                    pathLength: segmentVisible >= line.visible ? 1 : 0,
                    opacity: segmentVisible >= line.visible ? 1 : 0
                  }}
                  transition={{ 
                    pathLength: { duration: 0.7, ease: "easeOut" },
                    opacity: { duration: 0.3 }
                  }}
                />
              ))}
              
              {/* Connection dots at vertices */}
              {segmentVisible >= 3 && [
                { cx: 60, cy: 60, delay: 0.2 },
                { cx: 90, cy: 40, delay: 0.4 },
                { cx: 90, cy: 80, delay: 0.6 },
                { cx: 60, cy: 100, delay: 0.8 },
                { cx: 30, cy: 80, delay: 1.0 },
                { cx: 30, cy: 40, delay: 1.2 },
                { cx: 60, cy: 20, delay: 1.4 }
              ].map((dot, i) => (
                <motion.circle
                  key={`vertex-${i}`}
                  cx={dot.cx}
                  cy={dot.cy}
                  r="3"
                  fill="#047857"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: [0, 1, 0.8],
                    opacity: [0, 1, 0.7]
                  }}
                  transition={{ 
                    scale: { duration: 0.3, delay: dot.delay },
                    opacity: { duration: 0.3, delay: dot.delay }
                  }}
                />
              ))}
            </svg>

            {/* Company name with animated typing effect */}
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {/* Title with character-by-character animation */}
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 tracking-tight flex flex-wrap justify-center">
                {"Agri-BioFuels".split('').map((char, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: 0.3 + (i * 0.03),
                      ease: "easeOut"  
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
                <motion.span className="mx-2"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                ></motion.span>
                {"Global".split('').map((char, i) => (
                  <motion.span
                    key={i}
                    className="text-green-600"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      duration: 0.2, 
                      delay: 0.8 + (i * 0.05),
                      ease: "easeOut"  
                    }}
                  >
                    {char}
                  </motion.span>
                ))}
              </h1>
              
              {/* Tagline with gradual fade-in */}
              <motion.div 
                className="relative overflow-hidden h-8 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <motion.p
                  className="text-lg text-gray-600 absolute w-full"
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5, delay: 1.3 }}
                >
                  Revolutionizing clean energy from agricultural waste.
                </motion.p>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default IntroLoader;