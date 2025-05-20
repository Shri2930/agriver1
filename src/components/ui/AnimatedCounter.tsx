import React, { useEffect, useState } from "react";

interface AnimatedCounterProps {
  from: number;
  to: number;
  duration?: number; // milliseconds
  decimals?: number;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from,
  to,
  duration = 2000,
  decimals = 0,
}) => {
  const [count, setCount] = useState(from);

  useEffect(() => {
    let start = from;
    const difference = to - from;
    const increment = difference / (duration / 50); // update every 50ms

    const interval = setInterval(() => {
      start += increment;
      if ((increment > 0 && start >= to) || (increment < 0 && start <= to)) {
        start = to;
        clearInterval(interval);
      }
      setCount(Number(start.toFixed(decimals)));
    }, 50);

    return () => clearInterval(interval);
  }, [from, to, duration, decimals]);

  return (
    <span>{count.toLocaleString(undefined, { minimumFractionDigits: decimals })}</span>
  );
};

export default AnimatedCounter;
