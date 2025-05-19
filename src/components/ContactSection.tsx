import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react';
import Button from './ui/Button';

const ContactSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('general');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    newsletter: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData({
      ...formData,
      [name]: checked
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormSubmitted(false);
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          newsletter: false
        });
      }, 3000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-20 bg-green-900 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>
          <div className="w-24 h-1 bg-green-500 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-green-100 max-w-3xl mx-auto">
            Let's discuss how we can work together to create sustainable solutions for your organization.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Map and Contact Info */}
          <div>
            <div className="h-64 bg-green-800 rounded-xl mb-8 overflow-hidden relative">
              {/* Map placeholder - would be replaced with actual map */}
              <img 
                src="https://images.pexels.com/photos/2245432/pexels-photo-2245432.jpeg" 
                alt="Map of London" 
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-800/90 px-4 py-3 rounded-lg text-center">
                  <h3 className="font-semibold mb-1">Global Headquarters</h3>
                  <p className="text-green-100">London, United Kingdom</p>
                </div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-800 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-green-700 rounded-full p-3 mr-4">
                    <MapPin className="h-6 w-6 text-green-100" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Address</h3>
                    <p className="text-green-100">123 Sustainability Road</p>
                    <p className="text-green-100">London, UK EC1A 1BB</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-800 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-green-700 rounded-full p-3 mr-4">
                    <Mail className="h-6 w-6 text-green-100" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Email</h3>
                    <p className="text-green-100 ">info@agribiofuels.com</p>
                    <p className="text-green-100">partnerships@agribiofuels.com</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-800 rounded-xl p-6">
                <div className="flex items-start">
                  <div className="bg-green-700 rounded-full p-3 mr-4">
                    <Phone className="h-6 w-6 text-green-100" />
                  </div>
                  <div>
                
                    <p className="text-green-100">Mon-Fri, 9AM-5PM GMT</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-green-800 rounded-xl p-6">
                <h3 className="text-lg font-semibold mb-2">Regional Offices</h3>
                <ul className="space-y-2 text-green-100">
                  <li>Jakarta, Indonesia</li>
                  <li>Nairobi, Kenya</li>
                  <li>São Paulo, Brazil</li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
            {/* Form Tabs */}
            <div className="flex border-b border-gray-200">
              {['general', 'investor', 'partner', 'farmer'].map((tab) => (
                <button
                  key={tab}
                  className={`flex-1 py-3 px-4 text-sm font-medium text-center transition-colors ${
                    activeTab === tab
                      ? 'bg-green-50 text-green-700 border-b-2 border-green-700'
                      : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>
            
            {/* Form Content */}
            <div className="p-6">
              {formSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">Message Sent!</h3>
                  <p className="text-gray-600 text-center">
                    Thank you for contacting us. We'll get back to you within 48 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                        Company/Organization
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleCheckboxChange}
                      className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                    />
                    <label htmlFor="newsletter" className="ml-2 text-sm text-gray-600">
                      Subscribe to our newsletter for updates on sustainable fuel innovations
                    </label>
                  </div>
                  
                  <Button
                    type="submit"
                    variant="primary"
                    size="full"
                    icon={<Send size={18} />}
                  >
                    Send Message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;