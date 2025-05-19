import React from 'react';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-green-950 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4">Agri-BioFuels Global Ltd</h3>
            <p className="text-gray-300 mb-6">
              Turning agricultural waste into sustainable aviation and maritime fuel.
              Creating value for farmers, communities, and our planet.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white hover:text-green-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="#" className="text-white hover:text-green-400 transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About Us', 'Our Technology', 'Impact', 'Partners', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(/\s+/g, '')}`}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              {[
                'Technical Whitepaper', 
                'Sustainability Report', 
                'Agricultural Guidelines', 
                'Investor Relations',
                'News & Media',
                'Careers'
              ].map((item) => (
                <li key={item}>
                  <a 
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 mt-1 text-green-400" />
                <span>123 Sustainability Road, London, UK EC1A 1BB</span>
              </li>
              
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-green-400" />
                <span>info@agribiofuels.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-green-900 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} Agri-BioFuels Global Ltd. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;