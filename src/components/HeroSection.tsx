import React, { useEffect, useState } from 'react';
import { ArrowRight } from 'lucide-react';
import Button from './ui/Button';
import ParticleSystem from './animations/ParticleSystem';

interface HeroSectionProps {
  onExploreClick: () => void;
  onPartnerClick: () => void;
}

const backgroundImages = [
  'https://ik.imagekit.io/sc8yurdyd/organic-waste-composting-on-soil-260nw-1925546615.jpg?updatedAt=1747298917373',
  'https://ik.imagekit.io/sc8yurdyd/silos_corn_field2.webp?updatedAt=1747297547004',
  'https://ik.imagekit.io/sc8yurdyd/5428.jpg?updatedAt=1747319263667',
  'https://ik.imagekit.io/sc8yurdyd/566.jpg?updatedAt=1747073635842',
  'https://ik.imagekit.io/sc8yurdyd/940.jpg?updatedAt=1747322095151',
  'https://ik.imagekit.io/sc8yurdyd/139208.jpg?updatedAt=1747320109547'
];

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick, onPartnerClick }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % backgroundImages.length);
    }, 2000); // Change every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 transition-all duration-3000 ease-in-out"
      style={{
        backgroundImage: `url(${backgroundImages[currentImageIndex]})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Particle Effect */}
      <div className="absolute inset-0 z-20 opacity-40 pointer-events-none">
        <ParticleSystem type="mixed" density={30} />
      </div>

      {/* Hero Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-30">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Turning Waste Into Fuel.<br />
            <span className="text-green-400">Empowering Sustainable Agriculture.</span>
          </h1>

          <div className="flex space-x-4">
            <Button onClick={onExploreClick}>
              Explore Solutions
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button onClick={onPartnerClick}>
              Become a Partner
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/80 animate-bounce z-20">
        <div className="text-sm font-medium mb-2">Scroll to explore</div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
