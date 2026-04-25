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
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.02] pointer-events-none" />
                <LandingPage 
                  onOpenDemo={() => setIsDemoModalOpen(true)} 
                  isDemoModalOpen={isDemoModalOpen}
                  onCloseDemo={() => setIsDemoModalOpen(false)}
                />
              </div>
            } />
            <Route path="/login" element={<LoginPage />} />
          </Routes>
        </main>
      </Router>
    </ThemeProvider>
  );
}

export default App;
