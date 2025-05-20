import React, { useState, useEffect, useRef } from 'react';
import { MessageSquare, X, Send, MinusCircle, MaximizeIcon } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm your Agri-BioFuels assistant. How can I help you today?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  // AI responses based on keywords
  const aiResponses = [
    {
      keywords: ['technology', 'cat-htr', 'process', 'how'],
      response: "Our CAT-HTR technology converts agricultural waste into sustainable fuel through a hydrothermal liquefaction process. It uses supercritical water to break down biomass at the molecular level, creating high-quality biofuel suitable for aviation and maritime use."
    },
    {
      keywords: ['partner', 'invest', 'join', 'collaborate'],
      response: "We're always looking for strategic partners! Please visit our Partners section or fill out the contact form, and our business development team will reach out to discuss collaboration opportunities."
    },
    {
      keywords: ['impact', 'environment', 'sustainable', 'carbon'],
      response: "Our process reduces carbon emissions by up to 80% compared to conventional fuels. Each facility can process approximately 250,000 tonnes of biomass annually, preventing it from decomposing and releasing methane."
    },
    {
      keywords: ['farmer', 'agriculture', 'waste', 'biomass', 'crop'],
      response: "We work directly with farmers to source agricultural waste materials such as rice straw, corn husks, and sugarcane bagasse. We provide fair compensation and collection logistics, creating additional income streams for farming communities."
    },
    {
      keywords: ['contact', 'reach', 'talk', 'email', 'phone'],
      response: "You can reach our team at info@agribiofuels.com or +44 20 1234 5678. Alternatively, fill out the contact form on our website, and we'll get back to you within 48 hours."
    }
  ];

  // Scroll to bottom of messages whenever messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (!inputText.trim()) return;
    
    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };
    
    setMessages([...messages, userMessage]);
    setInputText('');
    
    // Simulate AI thinking with delay
    setTimeout(() => {
      // Find matching response or use default
      let responseText = "I don't have specific information on that topic. Would you like to know about our technology, partnerships, environmental impact, or how farmers can work with us?";
      
      const userMessageLower = inputText.toLowerCase();
      for (const item of aiResponses) {
        if (item.keywords.some(keyword => userMessageLower.includes(keyword))) {
          responseText = item.response;
          break;
        }
      }
      
      const aiMessage: Message = {
        id: messages.length + 2,
        text: responseText,
        sender: 'ai',
        timestamp: new Date(),
      };
      
      setMessages(prev => [...prev, aiMessage]);
    }, 1000);
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-4 right-4 z-40">
      {/* Chat button */}
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="flex items-center justify-center w-14 h-14 rounded-full bg-green-700 hover:bg-green-800 text-white shadow-lg transition-colors focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          aria-label="Open chat assistant"
        >
          <MessageSquare size={24} />
        </button>
      )}
      
      {/* Chat window */}
      {isOpen && (
        <div
          className={`flex flex-col bg-white rounded-xl shadow-2xl transition-all transform ${
            isMinimized ? 'h-16 w-72' : 'h-96 w-80 md:w-96'
          }`}
        >
          {/* Chat header */}
          <div 
            className="flex items-center justify-between bg-green-700 text-white px-4 py-3 rounded-t-xl cursor-pointer"
            onClick={toggleMinimize}
          >
            <div className="flex items-center">
              <MessageSquare size={20} className="mr-2" />
              <h3 className="font-medium">Agri-BioFuels Assistant</h3>
            </div>
            <div className="flex items-center space-x-2">
              {isMinimized ? (
                <MaximizeIcon size={18} onClick={toggleMinimize} />
              ) : (
                <MinusCircle size={18} onClick={toggleMinimize} />
              )}
              <X size={18} onClick={toggleChat} />
            </div>
          </div>
          
          {/* Chat messages */}
          {!isMinimized && (
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] px-4 py-2 rounded-lg ${
                      message.sender === 'user'
                        ? 'bg-green-600 text-white'
                        : 'bg-gray-100 text-gray-800'
                    }`}
                  >
                    <p>{message.text}</p>
                    <p className={`text-xs mt-1 ${message.sender === 'user' ? 'text-green-100' : 'text-gray-500'}`}>
                      {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          )}
          
          {/* Chat input */}
          {!isMinimized && (
            <div className="p-3 border-t border-gray-200">
              <div className="flex items-center">
                <input
                  type="text"
                  value={inputText}
                  onChange={(e) => setInputText(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 py-2 px-3 bg-gray-100 rounded-l-lg focus:outline-none focus:ring-1 focus:ring-green-500"
                />
                <button
                  onClick={handleSendMessage}
                  className="p-2 bg-green-700 hover:bg-green-800 text-white rounded-r-lg transition-colors"
                  aria-label="Send message"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default AIChat;