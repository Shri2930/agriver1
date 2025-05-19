import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import IntroLoader from './components/IntroLoader';
import HomePage from './pages/HomePage';
import AIChat from './components/ai/AIChat';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time for intro animation
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-neutral-50 text-neutral-900">
      {loading ? (
        <IntroLoader onComplete={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <main>
            <HomePage />
          </main>
          <Footer />
          <AIChat />
        </>
      )}
    </div>
  );
}

export default App;