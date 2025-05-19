import React from 'react';
import { motion } from 'framer-motion';

interface SDGData {
  id: number;
  name: string;
  description: string;
  color: string;
  metrics: {
    label: string;
    value: string;
  }[];
}

const SDGAlignmentSection: React.FC = () => {
  const sdgs: SDGData[] = [
    {
      id: 7,
      name: "Affordable and Clean Energy",
      description: "Our technology contributes to the global transition to renewable energy by creating sustainable biofuels from agricultural waste.",
      color: "#FAC800",
      metrics: [
        { label: "Renewable Fuel Produced", value: "250M liters annually" },
        { label: "Fossil Fuel Displaced", value: "210M liters annually" },
        { label: "Energy Efficiency", value: "85% conversion efficiency" }
      ]
    },
    {
      id: 8,
      name: "Decent Work and Economic Growth",
      description: "We create quality jobs throughout the agricultural value chain while stimulating economic growth in rural communities.",
      color: "#A21942",
      metrics: [
        { label: "Direct Jobs Created", value: "200+ per facility" },
        { label: "Indirect Jobs Created", value: "3,000+ in supply chain" },
        { label: "Economic Value Added", value: "$75M per facility annually" }
      ]
    },
    {
      id: 9,
      name: "Industry, Innovation and Infrastructure",
      description: "Our CAT-HTR technology represents breakthrough innovation in the biofuels sector, creating new industrial infrastructure.",
      color: "#FD6925",
      metrics: [
        { label: "R&D Investment", value: "$15M annually" },
        { label: "Process Patents", value: "12 secured, 8 pending" },
        { label: "Technology Transfer", value: "4 host countries" }
      ]
    },
    {
      id: 12,
      name: "Responsible Consumption and Production",
      description: "We transform agricultural waste into valuable fuel, exemplifying circular economy principles and resource efficiency.",
      color: "#BF8B2E",
      metrics: [
        { label: "Waste Utilized", value: "250,000 tonnes annually" },
        { label: "Field Burning Avoided", value: "65% reduction in regions" },
        { label: "Water Usage", value: "45% lower than alternatives" }
      ]
    },
    {
      id: 13,
      name: "Climate Action",
      description: "Our fuels significantly reduce carbon emissions compared to fossil alternatives, contributing to climate change mitigation.",
      color: "#407F46",
      metrics: [
        { label: "CO₂ Reduction", value: "1.8M tonnes annually" },
        { label: "Carbon Intensity", value: "80% lower than fossil fuels" },
        { label: "Methane Avoidance", value: "15,000 tonnes CO₂e annually" }
      ]
    }
  ];

  return (
    <section id="sdg" className="py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="pattern" width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="1" cy="1" r="1" fill="#16a34a" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#pattern)" />
        </svg>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">UN SDG Alignment</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our business model directly contributes to five United Nations Sustainable Development Goals.
          </p>
        </motion.div>
        
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              <motion.div
                className="relative bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* SDG Header */}
                <div 
                  className="p-6 transition-colors duration-300"
                  style={{ backgroundColor: sdg.color + '22' }}
                >
                  <div className="flex items-center mb-4">
                    <div 
                      className="w-12 h-12 rounded-full flex items-center justify-center text-white font-bold text-lg mr-4"
                      style={{ backgroundColor: sdg.color }}
                    >
                      {sdg.id}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{sdg.name}</h3>
                  </div>
                  <p className="text-gray-600">{sdg.description}</p>
                </div>

                {/* Metrics - Revealed on hover */}
                <motion.div 
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  whileHover={{ height: 'auto' }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="p-6 bg-white border-t border-gray-100">
                    <div className="space-y-4">
                      {sdg.metrics.map((metric, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex justify-between items-center"
                        >
                          <span className="text-sm text-gray-600">{metric.label}</span>
                          <span 
                            className="font-semibold"
                            style={{ color: sdg.color }}
                          >
                            {metric.value}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Hover Indicator */}
                <motion.div
                  className="absolute bottom-2 left-1/2 transform -translate-x-1/2"
                  initial={{ opacity: 0.5 }}
                  whileHover={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-sm text-gray-400">Hover for metrics</div>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGAlignmentSection;