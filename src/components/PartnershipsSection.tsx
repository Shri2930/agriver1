import React, { useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Link } from 'lucide-react';
import Button from './ui/Button';

const PartnershipsSection: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement>(null);
  
  // Partner logos (would normally be imported images)
  const partners = [
    { 
      name: "AirGreen Airlines", 
      type: "Aviation", 
      logo: "https://ik.imagekit.io/qcf813yjh/images_q=tbn:ANd9GcQdFNJ4Bt2MTtrMy6L7BTC240h-fJMQGQOmww&s"
    },
    { 
      name: "OceanShip Lines", 
      type: "Maritime", 
      logo: "https://ik.imagekit.io/qcf813yjh/images_q=tbn:ANd9GcT_8vpCp3iDRvDP0UR2wB08kvmPLO7D27_7hA&s?updatedAt=1747637285161"
    },
    { 
      name: "GreenTech Energy", 
      type: "Technology", 
      logo: "https://ik.imagekit.io/qcf813yjh/images_q=tbn:ANd9GcTWvCEmBxMdVKq-nyr6L37J86fkA0Kw6_QIMQ&s"
    },
    { 
      name: "AgriGrow Cooperative", 
      type: "Agricultural", 
      logo: "https://ik.imagekit.io/qcf813yjh/images_q=tbn:ANd9GcQ_oLHeXMhkOy4e7VvpPQTeON72Qzp4cdZpYg&s"
    },
    { 
      name: "Sustainable Aviation Group", 
      type: "Aviation", 
      logo: "https://ik.imagekit.io/qcf813yjh/images_q=tbn:ANd9GcTbCTjnNeoG3qNol-ZEmTjLpLq-trvUAFEuzA&s"
    },
    { 
      name: "CleanShip Maritime", 
      type: "Maritime", 
      logo: "https://ik.imagekit.io/qcf813yjh/images_q=tbn:ANd9GcTiVYg5E6UnkCiP69eVIGZgGBzP7EXo4Y-WeA&s"
    }
  ];
  
  // Certification badges
  const certifications = [
    { 
      name: "ISO 14001 Environmental Management", 
      logo: "https://ik.imagekit.io/qcf813yjh/iso-14001-2015-environmental-management-system-1723801835-7566977.jpeg"
    },
    { 
      name: "Carbon Trust Standard", 
      logo: "https://ik.imagekit.io/qcf813yjh/images_q=tbn:ANd9GcSIUzQNszw_Ttl_rkjtK0_ui65SSIlh-ToPlw&s"
    },
    { 
      name: "Sustainable Biomass Program", 
      logo: "https://ik.imagekit.io/qcf813yjh/SBP_Logo_RGB_strapline.jpg"
    },
    { 
      name: "GHG Protocol Certified", 
      logo: "https://ik.imagekit.io/qcf813yjh/images_q=tbn:ANd9GcTKnLzkkfG7di27okwfdH5E8zV7cQIjBDk1Aw&s"
    }
  ];
  
  const scrollCarousel = (direction: 'left' | 'right') => {
    if (!carouselRef.current) return;
    
    const scrollAmount = 300;
    const scrollLeft = carouselRef.current.scrollLeft;
    
    carouselRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth'
    });
  };
  
  // Certification animation on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slideIn');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
      }
    );
    
    const certifications = document.querySelectorAll('.certification-badge');
    certifications.forEach((cert) => observer.observe(cert));
    
    return () => {
      certifications.forEach((cert) => observer.unobserve(cert));
    };
  }, []);

  return (
    <section id="partners" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Partnerships & Certifications</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We collaborate with industry leaders in aviation, maritime shipping, agriculture, and sustainability.
          </p>
        </div>
        
        {/* Partners Carousel */}
        <div className="relative mb-16">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-2xl font-semibold text-gray-800">Strategic Partners</h3>
            <div className="flex space-x-2">
              <button 
                onClick={() => scrollCarousel('left')}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft size={20} />
              </button>
              <button 
                onClick={() => scrollCarousel('right')}
                className="p-2 rounded-full bg-white shadow hover:bg-gray-100 transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
          
          <div 
            ref={carouselRef}
            className="flex space-x-6 overflow-x-auto scrollbar-hide pb-4"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="flex-shrink-0 w-64 h-48 bg-white rounded-xl shadow-md overflow-hidden group relative"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex flex-col items-center justify-end p-4 text-white text-center">
                  <h4 className="font-semibold">{partner.name}</h4>
                  <p className="text-sm text-gray-300">{partner.type} Partner</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8 text-center">
            <Button 
              variant="primary" 
              icon={<Link size={18} />}
            >
              Join as Strategic Partner
            </Button>
          </div>
        </div>
        
        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Certifications & Standards</h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="certification-badge opacity-0 bg-white rounded-xl shadow p-4 flex flex-col items-center justify-center text-center transform translate-y-10"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="h-20 w-20 rounded-full overflow-hidden mb-4">
                  <img 
                    src={cert.logo} 
                    alt={cert.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <h4 className="font-medium text-gray-800 text-sm">{cert.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnershipsSection;