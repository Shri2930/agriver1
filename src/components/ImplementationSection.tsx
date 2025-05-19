import React, { useState } from 'react';
import { Calendar, ChevronDown, ChevronUp } from 'lucide-react';

const ImplementationSection: React.FC = () => {
  const [openAccordion, setOpenAccordion] = useState<number | null>(0);
  
  const timelineData = [
    {
      years: "Years 1-3",
      title: "Pilot & Capacity Building",
      content: [
        "Establish initial production facility with 50,000 tonnes annual capacity",
        "Develop farmer supply chain networks and biomass collection systems",
        "Train local workforce and establish quality control protocols",
        "Secure initial offtake agreements with aviation and shipping partners"
      ],
      details: "During this initial phase, we focus on proving the technology at commercial scale while building the necessary supply chain infrastructure. Our first facility serves as both a production asset and a training center for future expansion. We work closely with agricultural extension services to educate farmers on proper residue collection methods."
    },
    {
      years: "Years 3-6",
      title: "Expansion & Optimization",
      content: [
        "Scale to 3-5 facilities with 250,000 tonnes total annual capacity",
        "Optimize logistics and reduce collection costs",
        "Implement advanced process improvements based on pilot learnings",
        "Expand offtake agreements to additional markets and sectors"
      ],
      details: "As we move into the expansion phase, economies of scale begin to drive down costs while our continuous improvement processes enhance efficiency. We implement advanced automation and monitoring systems to maximize yield and quality. During this phase, we also begin deploying mobile pre-processing units to remote farming areas, extending our collection radius."
    },
    {
      years: "Years 6-10",
      title: "Market Leadership",
      content: [
        "Establish regional leadership with 10+ facilities",
        "Achieve carbon-negative operations through advanced carbon capture",
        "Develop proprietary technology improvements",
        "Create global export capabilities for SAF and SMF"
      ],
      details: "In the market leadership phase, our technology reaches maturity with significant proprietary improvements that further enhance our competitive advantage. Our network of facilities creates a substantial carbon sink through both avoided emissions and active carbon capture. By this stage, we aim to supply 15-20% of the regional aviation fuel market."
    }
  ];

  return (
    <section id="implementation" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Implementation Model</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our proven phased approach ensures sustainable growth and maximizes impact across stakeholder groups.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-green-200 z-0"></div>
          
          {/* Timeline periods */}
          {timelineData.map((period, index) => (
            <div key={index} className="relative z-10 mb-12">
              <div className="flex flex-col md:flex-row items-start md:items-center">
                {/* Timeline dot */}
                <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-8 h-8 rounded-full bg-green-600 border-4 border-white flex items-center justify-center">
                  <Calendar size={14} className="text-white" />
                </div>
                
                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12 md:ml-auto'}`}>
                  <div className={`bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ${
                    openAccordion === index ? 'transform scale-105' : ''
                  }`}>
                    <div 
                      className={`px-6 py-4 cursor-pointer flex justify-between items-center ${
                        openAccordion === index ? 'bg-green-700 text-white' : 'bg-white'
                      }`}
                      onClick={() => setOpenAccordion(openAccordion === index ? null : index)}
                    >
                      <div>
                        <h3 className={`text-xl font-semibold ${openAccordion === index ? 'text-white' : 'text-green-700'}`}>
                          {period.title}
                        </h3>
                        <div className={`text-sm font-medium ${openAccordion === index ? 'text-green-100' : 'text-green-600'}`}>
                          {period.years}
                        </div>
                      </div>
                      {openAccordion === index ? 
                        <ChevronUp className={`h-5 w-5 ${openAccordion === index ? 'text-white' : 'text-green-600'}`} /> :
                        <ChevronDown className={`h-5 w-5 ${openAccordion === index ? 'text-white' : 'text-green-600'}`} />
                      }
                    </div>
                    
                    {openAccordion === index && (
                      <div className="px-6 py-4">
                        <ul className="space-y-2 mb-4">
                          {period.content.map((item, i) => (
                            <li key={i} className="flex items-start">
                              <div className="h-5 w-5 rounded-full bg-green-100 text-green-700 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <span className="text-xs font-bold">{i + 1}</span>
                              </div>
                              <span className="ml-2 text-gray-700">{item}</span>
                            </li>
                          ))}
                        </ul>
                        <p className="text-gray-600 text-sm">{period.details}</p>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Terrain Visualization - Simplified */}
        <div className="mt-20 bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">
            Global Terrain Adaptation
          </h3>
          
          <div className="h-64 overflow-hidden rounded-lg relative">
            <img 
              src="https://images.pexels.com/photos/1761279/pexels-photo-1761279.jpeg" 
              alt="Global terrain map" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30"></div>
            
            {/* Hotspots - simplified implementation */}
            <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-green-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-ping absolute"></div>
              <div className="bg-green-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center relative z-10">
                1
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/70 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                South East Asia
              </div>
            </div>
            
            <div className="absolute top-1/3 left-2/3 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-green-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-ping absolute"></div>
              <div className="bg-green-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center relative z-10">
                2
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/70 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                Sub-Saharan Africa
              </div>
            </div>
            
            <div className="absolute top-2/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-green-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center animate-ping absolute"></div>
              <div className="bg-green-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center relative z-10">
                3
              </div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-black/70 text-white text-xs py-1 px-2 rounded whitespace-nowrap">
                Latin America
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImplementationSection;