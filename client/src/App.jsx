import React from 'react';
import HeroSection from './components/HeroSection';
import FeaturesSection from './components/FeaturesSection';
import AdvantageSection from './components/AdvantageSection';
import IntegrationsSection from './components/IntegrationsSection';
import TestimonialsSection from './components/TestimonialsSection';
import FAQSection from './components/FAQSection';
import CTASection from './components/CTASection';
import './App.css';

function App() {
  return (
    <div className="App">
      <HeroSection />
      <FeaturesSection />
      <AdvantageSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <FAQSection />
      <CTASection />
    </div>
  );
}

export default App;