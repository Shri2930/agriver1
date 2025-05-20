import React, { useState } from 'react';
import { X, CheckCircle } from 'lucide-react';
import Button from '../ui/Button';

interface PartnerModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const PartnerModal: React.FC<PartnerModalProps> = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    partnerType: '',
    region: '',
    interests: [] as string[],
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = e.target;
    if (checked) {
      setFormData({
        ...formData,
        interests: [...formData.interests, value]
      });
    } else {
      setFormData({
        ...formData,
        interests: formData.interests.filter(interest => interest !== value)
      });
    }
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  const handleClose = () => {
    onClose();
    // Reset form when modal is closed
    setTimeout(() => {
      setStep(1);
      setFormSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        partnerType: '',
        region: '',
        interests: [],
        message: ''
      });
    }, 300);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-xl w-full max-w-xl max-h-[90vh] overflow-auto">
        <div className="flex items-center justify-between bg-green-700 text-white px-6 py-4 rounded-t-xl">
          <h2 className="text-xl font-semibold">Become a Partner</h2>
          <button
            onClick={handleClose}
            className="text-white hover:text-gray-200 transition-colors"
            aria-label="Close"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6">
          {formSubmitted ? (
            <div className="flex flex-col items-center justify-center py-8">
              <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                <CheckCircle className="h-12 w-12 text-green-600" />
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-3">Partnership Request Submitted!</h3>
              <p className="text-gray-600 text-center mb-6">
                Thank you for your interest in partnering with Agri-BioFuels Global Ltd. Our partnership team will review your information and contact you within 3 business days.
              </p>
              <Button
                variant="primary"
                onClick={handleClose}
              >
                Close
              </Button>
            </div>
          ) : (
            <div>
              {/* Progress steps */}
              <div className="flex items-center mb-8">
                {[1, 2, 3].map((s) => (
                  <React.Fragment key={s}>
                    <div 
                      className={`w-8 h-8 rounded-full flex items-center justify-center ${
                        step >= s ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'
                      }`}
                    >
                      {s}
                    </div>
                    {s < 3 && (
                      <div 
                        className={`flex-1 h-1 ${
                          step > s ? 'bg-green-600' : 'bg-gray-200'
                        }`}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
              
              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Information */}
                {step === 1 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Basic Information</h3>
                    
                    <div className="space-y-4 mb-6">
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
                        <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                          Company/Organization *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        />
                      </div>
                    </div>
                    
                    <div className="flex justify-end">
                      <Button
                        type="button"
                        variant="primary"
                        onClick={nextStep}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 2: Partnership Details */}
                {step === 2 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Partnership Details</h3>
                    
                    <div className="space-y-4 mb-6">
                      <div>
                        <label htmlFor="partnerType" className="block text-sm font-medium text-gray-700 mb-1">
                          Partnership Type *
                        </label>
                        <select
                          id="partnerType"
                          name="partnerType"
                          value={formData.partnerType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">Select partnership type</option>
                          <option value="aviation">Aviation Partner</option>
                          <option value="maritime">Maritime Partner</option>
                          <option value="agricultural">Agricultural Partner</option>
                          <option value="technology">Technology Partner</option>
                          <option value="investor">Investor/Financial Partner</option>
                          <option value="government">Government/Public Sector</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-1">
                          Region of Interest *
                        </label>
                        <select
                          id="region"
                          name="region"
                          value={formData.region}
                          onChange={handleInputChange}
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        >
                          <option value="">Select region</option>
                          <option value="global">Global</option>
                          <option value="europe">Europe</option>
                          <option value="asia">South East Asia</option>
                          <option value="africa">Sub-Saharan Africa</option>
                          <option value="latinamerica">Latin America</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <p className="block text-sm font-medium text-gray-700 mb-2">
                          Areas of Interest (select all that apply)
                        </p>
                        
                        <div className="space-y-2">
                          {[
                            { value: 'fuel', label: 'Sustainable Aviation Fuel (SAF)' },
                            { value: 'maritime', label: 'Sustainable Maritime Fuel (SMF)' },
                            { value: 'technology', label: 'CAT-HTR Technology' },
                            { value: 'agricultural', label: 'Agricultural Waste Collection' },
                            { value: 'carbon', label: 'Carbon Credits & Offsets' },
                            { value: 'investment', label: 'Investment Opportunities' }
                          ].map((interest) => (
                            <div key={interest.value} className="flex items-center">
                              <input
                                type="checkbox"
                                id={interest.value}
                                name="interests"
                                value={interest.value}
                                checked={formData.interests.includes(interest.value)}
                                onChange={handleCheckboxChange}
                                className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
                              />
                              <label htmlFor={interest.value} className="ml-2 text-sm text-gray-700">
                                {interest.label}
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                      <Button
                        type="button"
                        variant="primary"
                        onClick={nextStep}
                      >
                        Next
                      </Button>
                    </div>
                  </div>
                )}
                
                {/* Step 3: Additional Information */}
                {step === 3 && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-4">Additional Information</h3>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Tell us more about your partnership interests
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                        placeholder="Please describe your organization and how you envision partnering with Agri-BioFuels Global Ltd..."
                      />
                    </div>
                    
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
                      <h4 className="font-medium text-green-800 mb-2">What happens next?</h4>
                      <p className="text-sm text-green-700">
                        After submitting your partnership request, our team will review your information and contact you within 3 business days to discuss potential collaboration opportunities.
                      </p>
                    </div>
                    
                    <div className="flex justify-between">
                      <Button
                        type="button"
                        variant="outline"
                        onClick={prevStep}
                      >
                        Back
                      </Button>
                      <Button
                        type="submit"
                        variant="primary"
                      >
                        Submit Partnership Request
                      </Button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PartnerModal;