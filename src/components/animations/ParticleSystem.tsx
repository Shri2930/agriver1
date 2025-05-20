import React, { useEffect, useRef } from 'react';

type ParticleType = 'leaves' | 'energy' | 'mixed';

interface ParticleSystemProps {
  type: ParticleType;
  density?: number;
}

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  rotation: number;
  rotationSpeed: number;
  type: 'leaf' | 'spark';
  scale: number;
  scaleSpeed: number;
}

const ParticleSystem: React.FC<ParticleSystemProps> = ({ type, density = 50 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const particlesRef = useRef<Particle[]>([]);
  const animationFrameRef = useRef<number>(0);

  const leafColors = ['#7ED957', '#5BB318', '#4E944F', '#3F7D20'];
  const sparkColors = ['#FFB72B', '#F9D923', '#E5D549', '#F6F7C4'];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      
      ctx.scale(dpr, dpr);
      canvas.style.width = `${rect.width}px`;
      canvas.style.height = `${rect.height}px`;
      
      initParticles();
    };

    const initParticles = () => {
      particlesRef.current = [];
      const particleCount = Math.floor(density * (canvas.width * canvas.height) / 1000000);
      
      for (let i = 0; i < particleCount; i++) {
        let particleType: 'leaf' | 'spark';
        let colors: string[];
        
        if (type === 'leaves') {
          particleType = 'leaf';
          colors = leafColors;
        } else if (type === 'energy') {
          particleType = 'spark';
          colors = sparkColors;
        } else {
          particleType = Math.random() > 0.5 ? 'leaf' : 'spark';
          colors = particleType === 'leaf' ? leafColors : sparkColors;
        }

        particlesRef.current.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: particleType === 'leaf' ? 
                Math.random() * 8 + 3 : 
                Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 1.5,
          speedY: Math.random() * -1 - 0.2,
          color: colors[Math.floor(Math.random() * colors.length)],
          opacity: Math.random() * 0.6 + 0.2,
          rotation: Math.random() * 360,
          rotationSpeed: (Math.random() - 0.5) * 2,
          type: particleType,
          scale: 1,
          scaleSpeed: (Math.random() - 0.5) * 0.02
        });
      }
    };

    const easeInOutQuad = (t: number): number => {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    };

    const drawParticles = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach(particle => {
        ctx.save();
        ctx.globalAlpha = particle.opacity;
        ctx.translate(particle.x, particle.y);
        ctx.rotate((particle.rotation * Math.PI) / 180);
        ctx.scale(particle.scale, particle.scale);
        
        if (particle.type === 'leaf') {
          ctx.fillStyle = particle.color;
          ctx.beginPath();
          ctx.ellipse(0, 0, particle.size, particle.size * 1.6, 0, 0, Math.PI * 2);
          ctx.fill();
          
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.lineWidth = particle.size / 6;
          ctx.beginPath();
          ctx.moveTo(0, -particle.size);
          ctx.lineTo(0, particle.size);
          ctx.stroke();
        } else {
          const gradient = ctx.createRadialGradient(0, 0, 0, 0, 0, particle.size);
          gradient.addColorStop(0, 'rgba(255, 255, 255, 0.9)');
          gradient.addColorStop(0.6, particle.color);
          gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');
          
          ctx.fillStyle = gradient;
          ctx.beginPath();
          ctx.arc(0, 0, particle.size, 0, Math.PI * 2);
          ctx.fill();
        }
        
        ctx.restore();
      });
    };

    const updateParticles = () => {
      if (!canvas) return;
      
      particlesRef.current.forEach(particle => {
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.rotation += particle.rotationSpeed;
        
        // Smooth scale animation
        particle.scale += particle.scaleSpeed;
        if (particle.scale > 1.2 || particle.scale < 0.8) {
          particle.scaleSpeed *= -1;
        }
        
        // Reset particles that go off-screen
        if (particle.y < -particle.size * 2) {
          particle.y = canvas.height + particle.size;
          particle.x = Math.random() * canvas.width;
        }
        
        if (particle.x < -particle.size * 2) {
          particle.x = canvas.width + particle.size;
        } else if (particle.x > canvas.width + particle.size * 2) {
          particle.x = -particle.size;
        }
        
        // Gradually morph particles if mixed type
        if (type === 'mixed' && Math.random() < 0.001) {
          if (particle.type === 'leaf') {
            particle.type = 'spark';
            particle.color = sparkColors[Math.floor(Math.random() * sparkColors.length)];
            particle.size = Math.random() * 3 + 1;
          } else {
            particle.type = 'leaf';
            particle.color = leafColors[Math.floor(Math.random() * leafColors.length)];
            particle.size = Math.random() * 8 + 3;
          }
        }
      });
    };

    const animate = () => {
      updateParticles();
      drawParticles();
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameRef.current);
    };
  }, [type, density]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none z-0"
    />
  );
};

export default ParticleSystem;