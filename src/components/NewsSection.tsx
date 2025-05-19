import React, { useState } from 'react';
import { FileText, Newspaper, BookOpen, Download } from 'lucide-react';
import Button from './ui/Button';

const NewsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('press');

  const newsData = {
    press: [
      {
        date: '2025-03-15',
        title: 'Agri-BioFuels Global Secures $100M Series B Funding',
        excerpt: 'Investment to accelerate deployment of sustainable fuel facilities across Southeast Asia.',
        link: '#'
      },
      {
        date: '2025-02-28',
        title: 'Partnership Announcement with Indonesian Government',
        excerpt: 'Strategic agreement to develop five new facilities in key agricultural regions.',
        link: '#'
      },
      {
        date: '2025-02-10',
        title: 'First Commercial Facility Achieves Full Production',
        excerpt: 'Milestone achievement as facility reaches 250,000 tonnes annual capacity.',
        link: '#'
      }
    ],
    media: [
      {
        source: 'Bloomberg Green',
        date: '2025-03-16',
        title: 'Agricultural Waste: The Next Frontier in Sustainable Aviation Fuel',
        excerpt: "Feature coverage of Agri-BioFuels Global's innovative approach to sustainable fuel production.",
        link: '#'
      },
      {
        source: 'Reuters',
        date: '2025-03-01',
        title: 'Sustainable Fuel Startup Attracts Major Investment',
        excerpt: 'Industry leaders back innovative waste-to-fuel technology.',
        link: '#'
      }
    ],
    publications: [
      {
        type: 'Research Paper',
        title: 'Efficiency Analysis of CAT-HTR Technology in Biomass Conversion',
        authors: 'James, R., Mehta, D., et al.',
        journal: 'Renewable Energy Technology',
        date: '2025-01',
        link: '#'
      },
      {
        type: 'White Paper',
        title: 'Economic Impact of Agricultural Waste Conversion',
        authors: 'Agri-BioFuels Research Team',
        date: '2024-12',
        link: '#'
      }
    ],
    resources: [
      {
        title: 'Corporate Presentation',
        type: 'pdf',
        size: '2.8 MB',
        link: '#'
      },
      {
        title: 'Technical Specifications',
        type: 'pdf',
        size: '1.5 MB',
        link: '#'
      },
      {
        title: 'Sustainability Report 2024',
        type: 'pdf',
        size: '3.2 MB',
        link: '#'
      }
    ]
  };

  return (
    <section id="news" className="py-20 bg-gradient-to-b from-green-50 via-white to-green-100">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 tracking-tight drop-shadow-lg">NEWS & RESOURCES</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6 rounded-full shadow-md"></div>
          <p className="text-lg text-green-800 max-w-3xl mx-auto font-medium">
            Stay updated with our latest announcements, media coverage, and research publications.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {[
            { id: 'press', label: 'Press Releases', icon: <FileText className="w-4 h-4" /> },
            { id: 'media', label: 'Media Coverage', icon: <Newspaper className="w-4 h-4" /> },
            { id: 'publications', label: 'Publications', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'resources', label: 'Resources', icon: <Download className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-200 border-2
                ${
                  activeTab === tab.id
                    ? 'bg-green-800 text-white border-green-700 scale-105 shadow-green-300/60'
                    : 'bg-gray-100 text-green-900 border-transparent hover:bg-green-100 hover:border-green-300'
                }
              `}
              style={{ minWidth: 180, letterSpacing: 0.5 }}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {activeTab === 'press' && newsData.press.map((item, index) => (
            <div
              key={index}
              className="border-2 border-green-700 rounded-2xl shadow-2xl shadow-green-300/40 hover:shadow-green-400/80 hover:border-green-900 transition-all duration-300 hover:scale-105 bg-white p-7 animate-fade-in group relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-300"></div>
              <div>
                <div className="text-xs text-green-700 font-semibold mb-2 tracking-wide">{new Date(item.date).toLocaleDateString()}</div>
                <h3 className="text-lg font-bold text-green-900 mb-2 group-hover:text-green-800 transition">{item.title}</h3>
                <p className="text-gray-700 mb-5">{item.excerpt}</p>
                <Button variant="outline" size="sm" className="border-green-700 text-green-800 hover:bg-green-50 hover:border-green-900 transition">
                  Read More
                </Button>
              </div>
            </div>
          ))}

          {activeTab === 'media' && newsData.media.map((item, index) => (
            <div
              key={index}
              className="border-2 border-green-700 rounded-2xl shadow-2xl shadow-green-300/40 hover:shadow-green-400/80 hover:border-green-900 transition-all duration-300 hover:scale-105 bg-white p-7 animate-fade-in group relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-300"></div>
              <div>
                <div className="text-xs font-semibold text-green-600 mb-1">{item.source}</div>
                <div className="text-xs text-green-700 mb-2">{new Date(item.date).toLocaleDateString()}</div>
                <h3 className="text-lg font-bold text-green-900 mb-2 group-hover:text-green-800 transition">{item.title}</h3>
                <p className="text-gray-700 mb-5">{item.excerpt}</p>
                <Button variant="outline" size="sm" className="border-green-700 text-green-800 hover:bg-green-50 hover:border-green-900 transition">
                  Read Article
                </Button>
              </div>
            </div>
          ))}

          {activeTab === 'publications' && newsData.publications.map((item, index) => (
            <div
              key={index}
              className="border-2 border-green-700 rounded-2xl shadow-2xl shadow-green-300/40 hover:shadow-green-400/80 hover:border-green-900 transition-all duration-300 hover:scale-105 bg-white p-7 animate-fade-in group relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-300"></div>
              <div>
                <div className="text-xs font-semibold text-blue-700 mb-1">{item.type}</div>
                <h3 className="text-lg font-bold text-green-900 mb-1 group-hover:text-green-800 transition">{item.title}</h3>
                <p className="text-gray-700 mb-1">{item.authors}</p>
                <p className="text-xs text-gray-500 mb-5">
                  {item.journal ? `${item.journal} - ` : ''}{item.date}
                </p>
                <Button variant="outline" size="sm" className="border-green-700 text-green-800 hover:bg-green-50 hover:border-green-900 transition">
                  Download PDF
                </Button>
              </div>
            </div>
          ))}

          {activeTab === 'resources' && newsData.resources.map((item, index) => (
            <div
              key={index}
              className="border-2 border-green-700 rounded-2xl shadow-2xl shadow-green-300/40 hover:shadow-green-400/80 hover:border-green-900 transition-all duration-300 hover:scale-105 bg-white p-7 animate-fade-in group relative overflow-hidden"
            >
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-green-100 rounded-full blur-2xl opacity-60 group-hover:opacity-90 transition-all duration-300"></div>
              <div>
                <div className="flex items-center justify-between mb-5">
                  <h3 className="text-lg font-bold text-green-900 group-hover:text-green-800 transition">{item.title}</h3>
                  <span className="text-xs text-gray-500">{item.size}</span>
                </div>
                <Button variant="outline" size="sm" icon={<Download size={18} />} className="border-green-700 text-green-800 hover:bg-green-50 hover:border-green-900 transition">
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsSection;

// Add this to your global CSS if not present:
/*
@keyframes fade-in {
  from { opacity: 0; transform: translateY(20px);}
  to { opacity: 1; transform: translateY(0);}
}
.animate-fade-in {
  animation: fade-in 0.7s cubic-bezier(0.4,0,0.2,1);
}
*/
