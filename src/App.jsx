import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Home from './sections/Home';
import Modules from './sections/Modules';
import AICatchUp from './sections/AICatchUp';
import Safety from './sections/Safety';
import WhyChooseUs from './sections/WhyChooseUs';
import HowItWorks from './sections/HowItWorks';
import Contact from './sections/Contact';
import BentoGrid from './sections/BentoGrid';
import PremiumFeatures from './sections/PremiumFeatures';
import Footer from './components/Footer';
import LoginPage from './pages/LoginPage';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import DemoModal from './components/DemoModal';

const LandingPage = ({ onOpenDemo, isDemoModalOpen, onCloseDemo }) => (
  <>
    <Navbar onOpenDemo={onOpenDemo} />
    <Home onOpenDemo={onOpenDemo} />
    <BentoGrid />
    <PremiumFeatures />
    <div className="relative z-10">
      <AICatchUp />
      <Safety />
      <WhyChooseUs />
      <HowItWorks />
      <Contact onOpenDemo={onOpenDemo} />
    </div>
    <Footer />
    <DemoModal 
      isOpen={isDemoModalOpen} 
      onClose={onCloseDemo} 
    />
  </>
);

function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  return (
    <ThemeProvider>
      <Router>
        <main className="min-h-screen transition-colors duration-500 relative overflow-hidden selection:bg-brand/30">
          <Routes>
            <Route path="/" element={
              <div className="bg-[#FFF7ED] text-[#1F2937] min-h-screen relative">
                {/* Global Background Effects */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#FDBA74,transparent_60%)] opacity-20 pointer-events-none" />
                <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg_viewBox=%220_0_200_200%22_xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter_id=%22noiseFilter%22%3E%3CfeTurbulence_type=%22fractalNoise%22_baseFrequency=%220.65%22_numOctaves=%223%22_stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect_width=%22100%25%22_height=%22100%25%22_filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E')] opacity-[0.02] pointer-events-none" />
                <LandingPage 
                  onOpenDemo={() => setIsDemoModalOpen(true)} 
                  isDemoModalOpen={isDemoModalOpen}
                  onCloseDemo={() => setIsDemoModalOpen(false)}
                />
              </div>
            } />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
