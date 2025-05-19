import React from 'react';
import { motion } from 'framer-motion';

interface SDGData {
  id: number;
  name: string;
  description: string;
  color: string;
  image: string; // <-- Add image property
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
      image: "/images/sdg7.png", // <-- Add your image path
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
      image: "/images/sdg8.png",
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
      image: "/images/sdg9.png",
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
      image: "/images/sdg12.png",
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
      image: "/images/sdg13.png",
      metrics: [
        { label: "CO₂ Reduction", value: "1.8M tonnes annually" },
        { label: "Carbon Intensity", value: "80% lower than fossil fuels" },
        { label: "Methane Avoidance", value: "15,000 tonnes CO₂e annually" }
      ]
    }
  ];

  // Animation variants for cards
  const cardVariants = {
    offscreen: { opacity: 0, y: 60, rotate: -6 },
    onscreen: {
      opacity: 1,
      y: 0,
      rotate: 0,
      transition: { type: "spring", bounce: 0.25, duration: 0.8 }
    }
  };

  return (
    <section id="sdg" className="py-24 bg-[#eaeeec] relative overflow-hidden">
      {/* Decorative SVG wave */}
      <div className="absolute top-0 left-0 w-full h-24 z-0">
        <svg viewBox="0 0 1440 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <path fill="#16a34a" fillOpacity="0.08" d="M0,80 C480,120 960,0 1440,80 L1440,0 L0,0 Z"></path>
        </svg>
      </div>
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <h2 className="text-5xl font-black text-[#1a2e05] tracking-tight mb-2">OUR SDG COMMITMENT</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-green-400 via-green-600 to-green-400 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-[#14532d] max-w-2xl mx-auto font-medium">
            Oppicia is proud to drive impact across these United Nations Sustainable Development Goals.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-10">
          {sdgs.map((sdg, index) => (
            <motion.div
              key={sdg.id}
              className="relative w-full sm:w-[340px] md:w-[320px] bg-blue-100 rounded-3xl shadow-lg hover:shadow-2xl border-t-8"
              style={{ borderColor: sdg.color }}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, amount: 0.3 }}
              variants={cardVariants}
              whileHover={{ scale: 1.045, boxShadow: "0 12px 40px 0 rgba(34,197,94,0.13)" }}
              transition={{ type: "spring", stiffness: 260, damping: 18 }}
            >
              <div className="p-8 pb-6 flex flex-col min-h-[220px]">
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center text-white font-extrabold text-2xl shadow-md"
                    style={{ backgroundColor: sdg.color }}
                  >
                    {sdg.id}
                  </div>
                  <h3 className="text-lg font-bold text-[#1a2e05] ml-2">{sdg.name}</h3>
                </div>
                <p className="text-gray-700 font-medium">{sdg.description}</p>
              </div>
              {/* Animated metrics bar on hover */}
              <motion.div
                className="absolute left-0 right-0 bottom-0 bg-gradient-to-r from-white via-[#f0fdf4] to-white px-8 py-6 rounded-b-3xl border-t border-green-100 shadow-inner"
                initial={{ y: 80, opacity: 0 }}
                whileHover={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                style={{ pointerEvents: "none" }}
              >
                <div className="space-y-3">
                  {sdg.metrics.map((metric, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.07 }}
                      className="flex justify-between items-center"
                    >
                      <span className="text-sm text-gray-600 font-semibold">{metric.label}</span>
                      <span className="font-bold text-base" style={{ color: sdg.color }}>
                        {metric.value}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              {/* Hover indicator */}
              <div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-green-700 opacity-70 pointer-events-none select-none group-hover:opacity-0 transition-opacity duration-200">
                Hover for impact metrics
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDGAlignmentSection;