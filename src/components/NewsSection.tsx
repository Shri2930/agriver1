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
    <section id="news" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">News & Resources</h2>
          <div className="w-24 h-1 bg-green-600 mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Stay updated with our latest announcements, media coverage, and research publications.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {[
            { id: 'press', label: 'Press Releases', icon: <FileText className="w-4 h-4" /> },
            { id: 'media', label: 'Media Coverage', icon: <Newspaper className="w-4 h-4" /> },
            { id: 'publications', label: 'Publications', icon: <BookOpen className="w-4 h-4" /> },
            { id: 'resources', label: 'Resources', icon: <Download className="w-4 h-4" /> }
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center px-4 py-2 rounded-full transition-colors ${
                activeTab === tab.id
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {tab.icon}
              <span className="ml-2">{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTab === 'press' && newsData.press.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-2">{new Date(item.date).toLocaleDateString()}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button variant="outline" size="sm">Read More</Button>
              </div>
            </div>
          ))}

          {activeTab === 'media' && newsData.media.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-sm font-medium text-green-600 mb-1">{item.source}</div>
                <div className="text-sm text-gray-500 mb-2">{new Date(item.date).toLocaleDateString()}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <Button variant="outline" size="sm">Read Article</Button>
              </div>
            </div>
          ))}

          {activeTab === 'publications' && newsData.publications.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="text-sm font-medium text-blue-600 mb-1">{item.type}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
                <p className="text-gray-600 mb-2">{item.authors}</p>
                <p className="text-sm text-gray-500 mb-4">
                  {item.journal ? `${item.journal} - ` : ''}{item.date}
                </p>
                <Button variant="outline" size="sm">Download PDF</Button>
              </div>
            </div>
          ))}

          {activeTab === 'resources' && newsData.resources.map((item, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                  <span className="text-sm text-gray-500">{item.size}</span>
                </div>
                <Button variant="outline" size="sm" icon={<Download size={18} />}>
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
