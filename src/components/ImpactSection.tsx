import React, { useState } from 'react';
import { Shield, BarChart2, Sprout, Leaf } from 'lucide-react';

const ImpactSection: React.FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);
  
  const impactCards = [
    {
      icon: <Shield className="h-10 w-10" />,
      title: "Energy Security",
      description: "Reducing dependence on imported fossil fuels by creating locally-produced sustainable alternatives.",
      details: "Our facilities can supply up to 15% of a region's aviation fuel needs, significantly reducing dependency on imported fuels and improving energy security. This localized production creates resilience against global supply chain disruptions and price volatility.",
      caseStudy: {
        title: "Indonesia Energy Independence Initiative",
        description: "Working with the Indonesian government to reduce aviation fuel imports by 22% through strategic deployment of five CAT-HTR facilities processing rice straw waste."
      }
    },
    {
      icon: <BarChart2 className="h-10 w-10" />,
      title: "Economic Development",
      description: "Creating jobs and economic opportunities throughout the agricultural value chain.",
      details: "Each facility creates approximately 200 direct jobs and 3,000+ indirect jobs across the supply chain, from biomass collection to distribution. This creates new revenue streams for rural communities and supports local economic development.",
      caseStudy: {
        title: "Kenya Agricultural Value Addition Program",
        description: "Partnership with 15,000 smallholder farmers in Kenya to supply corn stover and sugarcane bagasse, increasing farmer incomes by an average of 32%."
      }
    },
    {
      icon: <Sprout className="h-10 w-10" />,
      title: "Agricultural Value Addition",
      description: "Transforming low-value agricultural waste into high-value sustainable fuel.",
      details: "By creating a market for agricultural residues that were previously burned or left to decompose, we add significant value to farming operations. Farmers can earn additional income from what was once considered waste material.",
      caseStudy: {
        title: "Vietnam Rice Straw Utilization Project",
        description: "Converting 500,000 tonnes of rice straw annually from the Mekong Delta region, preventing field burning and generating $15M in additional farmer income."
      }
    },
    {
      icon: <Leaf className="h-10 w-10" />,
      title: "Environmental Impact",
      description: "Reducing greenhouse gas emissions and improving local air quality.",
      details: "Our process reduces lifecycle carbon emissions by up to 80% compared to fossil fuels. Additionally, by utilizing agricultural waste that would otherwise be burned in fields, we significantly improve air quality in rural areas and reduce particulate emissions.",
      caseStudy: {
        title: "Philippine Clean Air Initiative",
        description: "Reduced open field burning by 65% in target regions, decreasing respiratory hospital admissions by 22% during harvest seasons."
      }
    }
  ];

  return (
    <section id="impact" className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our Impact</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our integrated approach creates meaningful impacts across multiple dimensions,
            from environmental benefits to economic empowerment.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
          {impactCards.map((card, index) => (
            <div
              key={index}
              className={`bg-white rounded-xl transition-all duration-300 group ${
                activeCard === index
                  ? 'shadow-xl scale-105 z-20'
                  : 'shadow hover:shadow-lg'
              }`}
              onClick={() => setActiveCard(activeCard === index ? null : index)}
            >
              <div className="p-6">
                <div className={`w-16 h-16 rounded-full flex items-center justify-center mb-4 mx-auto transform transition-transform group-hover:scale-110 ${
                  activeCard === index
                    ? 'bg-green-600 text-white'
                    : 'bg-green-100 text-green-600 group-hover:bg-green-200'
                }`}>
                  {React.cloneElement(card.icon, { 
                    className: `h-8 w-8 ${activeCard === index ? 'text-white' : 'text-green-600'}` 
                  })}
                </div>
                
                <h3 className="text-xl font-semibold text-center mb-2">{card.title}</h3>
                <p className="text-gray-600 text-center mb-4">{card.description}</p>
                
                {activeCard === index && (
                  <div className="mt-4 animate-fadeIn">
                    <div className="border-t border-gray-200 pt-4 mb-4">
                      <p className="text-gray-700 mb-4">{card.details}</p>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-green-800 mb-2">Case Study: {card.caseStudy.title}</h4>
                        <p className="text-sm text-gray-600">{card.caseStudy.description}</p>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className="text-center mt-4">
                  <button
                    className={`text-sm font-medium ${
                      activeCard === index ? 'text-green-700' : 'text-green-600'
                    }`}
                  >
                    {activeCard === index ? 'Show Less' : 'Learn More'}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Background decoration */}
        <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 -z-10 opacity-5">
          <svg className="w-full h-auto" viewBox="0 0 1440 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0,192L48,208C96,224,192,256,288,250.7C384,245,480,203,576,181.3C672,160,768,160,864,181.3C960,203,1056,245,1152,229.3C1248,213,1344,139,1392,101.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" fill="#16a34a"/>
          </svg>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;