import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import AboutSection from '../components/AboutSection';
import TechnologySection from '../components/TechnologySection';
import ImpactSection from '../components/ImpactSection';
import ImplementationSection from '../components/ImplementationSection';
import PartnershipsSection from '../components/PartnershipsSection';
import SDGAlignmentSection from '../components/SDGAlignmentSection';
import NewsSection from '../components/NewsSection';
import ContactSection from '../components/ContactSection';
import PartnerModal from '../components/modals/PartnerModal';

const HomePage: React.FC = () => {
  const [isPartnerModalOpen, setIsPartnerModalOpen] = useState(false);
  
  const scrollToTechnology = () => {
    const section = document.getElementById('technology');
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <div>
      <HeroSection 
        onExploreClick={scrollToTechnology} 
        onPartnerClick={() => setIsPartnerModalOpen(true)} 
      />
      <AboutSection />
      <TechnologySection />
      <ImpactSection />
      <ImplementationSection />

      <PartnershipsSection />
      <SDGAlignmentSection />
      <NewsSection />
      <ContactSection />
      
      <PartnerModal 
        isOpen={isPartnerModalOpen} 
        onClose={() => setIsPartnerModalOpen(false)} 
      />
    </div>
  );
};

export default HomePage;