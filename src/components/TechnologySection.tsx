import React from 'react';
import { ArrowRight, Download, Info } from 'lucide-react';
import Button from './ui/Button';
import { motion } from 'framer-motion';

const TechnologySection: React.FC = () => {
  const compareTechnologies = [
    {
      name: 'CAT-HTR (Our Technology)',
      efficiency: '85-90%',
      feedstock: 'Wide range of agricultural waste',
      output: 'High-quality SAF & SMF',
      carbon: 'Up to 80% reduction',
      highlight: true
    },
    {
      name: 'Pyrolysis',
      efficiency: '60-75%',
      feedstock: 'Limited feedstock range',
      output: 'Lower quality, needs upgrading',
      carbon: '40-60% reduction',
      highlight: false
    },
    {
      name: 'Gasification',
      efficiency: '65-80%',
      feedstock: 'Requires dry feedstock',
      output: 'Syngas, requires processing',
      carbon: '45-65% reduction',
      highlight: false
    },
    {
      name: 'Fermentation',
      efficiency: '40-55%',
      feedstock: 'Sugars and starches',
      output: 'Primarily ethanol',
      carbon: '35-50% reduction',
      highlight: false
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Our CAT-HTR Technology</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Catalytic Hydrothermal Reactor technology converts biomass into high-quality renewable fuels through an innovative liquefaction process.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* CAT-HTR Technology Image */}
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-video">
              <video
  src="https://ik.imagekit.io/qcf813yjh/cat%20htr%20video.mp4"
  autoPlay
  loop
  muted
  playsInline
  className="w-full h-full object-cover"
>
  Your browser does not support the video tag.
</video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="text-lg font-semibold mb-1">CAT-HTR Reactor</h4>
                  <p className="text-sm text-gray-200">Advanced biomass conversion system</p>
                </div>
              </div>
              
              {/* Hotspots */}
              <div className="absolute top-1/4 left-1/4">
                <div className="relative group">
                  <div className="w-4 h-4 bg-green-500 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-green-500 rounded-full relative"></div>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/75 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Biomass Input Chamber
                  </div>
                </div>
              </div>
              
              <div className="absolute top-1/2 right-1/3">
                <div className="relative group">
                  <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-blue-500 rounded-full relative"></div>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/75 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Catalytic Reactor Core
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-1/3 right-1/4">
                <div className="relative group">
                  <div className="w-4 h-4 bg-amber-500 rounded-full animate-ping absolute"></div>
                  <div className="w-4 h-4 bg-amber-500 rounded-full relative"></div>
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-black/75 text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                    Biocrude Output
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">How CAT-HTR Works</h3>
            <p className="text-gray-600 mb-6">
              The Catalytic Hydrothermal Reactor (CAT-HTR) technology uses supercritical water to convert agricultural waste into high-quality biocrude oil, which is then refined into sustainable aviation fuel (SAF) and sustainable maritime fuel (SMF).
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">1</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Collection & Preparation</h4>
                  <p className="text-gray-600">Agricultural waste is collected, cleaned, and processed to prepare it for conversion.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">2</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Hydrothermal Processing</h4>
                  <p className="text-gray-600">Biomass is processed at high temperature and pressure in the presence of water and catalysts.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">3</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Refinement</h4>
                  <p className="text-gray-600">The biocrude oil is refined into high-quality fuels that meet international standards.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-1">
                  <span className="text-green-700 font-semibold">4</span>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium text-gray-800">Distribution</h4>
                  <p className="text-gray-600">The sustainable fuels are distributed to aviation and maritime partners.</p>
                </div>
              </div>
            </div>

            <Button 
              variant="primary" 
              icon={<Download size={18} />}
            >
              Request Technical Whitepaper
            </Button>
          </motion.div>
        </div>

        {/* Technology Comparison Table */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="bg-green-800 text-white px-6 py-4">
            <h3 className="text-xl font-semibold">Technology Comparison</h3>
            <p className="text-green-100">See how CAT-HTR stacks up against alternative biofuel technologies</p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50">
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technology</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Conversion Efficiency</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Feedstock Flexibility</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Output Quality</th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Carbon Reduction</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {compareTechnologies.map((tech, index) => (
                  <tr 
                    key={index} 
                    className={tech.highlight ? "bg-green-50" : ""}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className="ml-4">
                          <div className={`text-sm font-medium ${tech.highlight ? "text-green-800" : "text-gray-900"}`}>
                            {tech.name}
                            {tech.highlight && (
                              <span className="ml-2 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                                Our Technology
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.efficiency}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.feedstock}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.output}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {tech.carbon}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Process Flow Diagram */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Biomass to Fuel Conversion Process</h3>
          <div className="relative max-w-4xl mx-auto h-64 flex items-center">
            {/* Step boxes */}
            <div className="flex w-full justify-between items-center relative z-10">
              <div className="bg-green-100 rounded-lg p-4 text-center w-48">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">1</div>
                <h4 className="font-medium text-green-800">Biomass Collection</h4>
              </div>
              <div className="bg-green-100 rounded-lg p-4 text-center w-48">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">2</div>
                <h4 className="font-medium text-green-800">CAT-HTR Processing</h4>
              </div>
              <div className="bg-green-100 rounded-lg p-4 text-center w-48">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">3</div>
                <h4 className="font-medium text-green-800">Refinement</h4>
              </div>
              <div className="bg-green-100 rounded-lg p-4 text-center w-48">
                <div className="bg-green-700 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">4</div>
                <h4 className="font-medium text-green-800">SAF & SMF Production</h4>
              </div>
            </div>
            {/* Connecting arrows */}
            <svg className="absolute left-0 top-1/2 w-full h-8 -translate-y-1/2 z-0" height="32">
              {/* Arrow 1 */}
              <line x1="12.5%" y1="16" x2="29%" y2="16" stroke="#16a34a" strokeWidth="3" strokeDasharray="6,6" />
              <polygon points="29,12 37,16 29,20" fill="#16a34a" />
              {/* Arrow 2 */}
              <line x1="37.5%" y1="16" x2="54%" y2="16" stroke="#16a34a" strokeWidth="3" strokeDasharray="6,6" />
              <polygon points="54,12 62,16 54,20" fill="#16a34a" />
              {/* Arrow 3 */}
              <line x1="62.5%" y1="16" x2="79%" y2="16" stroke="#16a34a" strokeWidth="3" strokeDasharray="6,6" />
              <polygon points="79,12 87,16 79,20" fill="#16a34a" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;