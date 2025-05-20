import React, { useState, useEffect } from 'react';
import { Menu, X, Globe, ChevronDown } from 'lucide-react';
import logoSrc from '../assets/logo.png';
import Button from './ui/Button';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      let currentSection = 'home';
      
      sections.forEach(section => {
        const sectionTop = (section as HTMLElement).offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          currentSection = section.id;
        }
      });
      
      setActiveSection(currentSection);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 80,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <img 
              src={logoSrc} 
              alt="Agri-BioFuels Global Ltd Logo" 
              className="h-10 mr-3"
              onError={(e) => {
                // Fallback to text if image fails to load
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }} 
            />
            <div className={`font-semibold text-lg ${isScrolled ? 'text-green-800' : 'text-white'}`}>
              Agri-BioFuels
            </div>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {['home', 'about', 'technology', 'impact', 'partners', 'news', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeSection === item 
                    ? (isScrolled ? 'text-green-700 bg-green-50' : 'text-white bg-white/20') 
                    : (isScrolled ? 'text-neutral-700 hover:text-green-700 hover:bg-green-50/50' : 'text-white/90 hover:text-white hover:bg-white/10')
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            
            <div className="relative ml-2">
              <button 
                onClick={() => setLanguageMenuOpen(!languageMenuOpen)}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isScrolled ? 'text-neutral-700 hover:text-green-700' : 'text-white/90 hover:text-white'
                }`}
              >
                <Globe size={16} className="mr-1" />
                <span>EN</span>
                <ChevronDown size={14} className="ml-1" />
              </button>
              
              {languageMenuOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
                  {['English', 'Hindi', 'Bahasa', 'Swahili'].map((lang, index) => (
                    <button
                      key={lang}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      {lang}
                    </button>
                  ))}
                </div>
              )}
            </div>
            
            <Button 
              variant="primary" 
              size="sm" 
              onClick={() => scrollToSection('contact')}
            >
              Contact Us
            </Button>
          </nav>
          
          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-500 hover:text-gray-600 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg absolute top-full left-0 right-0">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {['home', 'about', 'technology', 'impact', 'partners', 'news', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  activeSection === item 
                    ? 'text-green-700 bg-green-50' 
                    : 'text-gray-700 hover:text-green-700 hover:bg-green-50/50'
                }`}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
            
            <button className="flex items-center w-full px-3 py-2 rounded-md text-base font-medium text-gray-700">
              <Globe size={16} className="mr-2" />
              <span>Language: English</span>
            </button>
            
            <div className="pt-2">
              <Button 
                variant="primary" 
                size="full" 
                onClick={() => scrollToSection('contact')}
              >
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;