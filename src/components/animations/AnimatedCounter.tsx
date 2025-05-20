import React, { useState, useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number;
  decimals?: number;
  onComplete?: () => void;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2000,
  decimals = 0,
  onComplete
}) => {
  const [count, setCount] = useState(from);
  const countRef = useRef(from);
  const startTimeRef = useRef<number | null>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    // Reset when "to" value changes
    countRef.current = from;
    startTimeRef.current = null;
    
    const animate = (timestamp: number) => {
      if (startTimeRef.current === null) {
        startTimeRef.current = timestamp;
      }
      
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function: easeOutQuart
      const eased = 1 - Math.pow(1 - progress, 4);
      
      const nextCount = from + (to - from) * eased;
      countRef.current = nextCount;
      setCount(nextCount);
      
      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(to);
        if (onComplete) {
          onComplete();
        }
      }
    };
    
    frameRef.current = requestAnimationFrame(animate);
    
    return () => {
      if (frameRef.current !== null) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [from, to, duration, onComplete]);
  
  // Format the number with commas and specified decimal places
  const formattedCount = count.toLocaleString(undefined, {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals
  });
  
  return <span>{formattedCount}</span>;
};

export default AnimatedCounter;