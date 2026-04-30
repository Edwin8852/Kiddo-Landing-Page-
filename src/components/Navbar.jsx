import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Button from './ui/Button';
import BrandModal from './BrandModal';

const Navbar = ({ onOpenDemo }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Solutions', href: '#features' },
    { name: 'Safety', href: '#safety' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/90 backdrop-blur-xl border-b border-[#FDBA74]/20 py-4 shadow-sm' 
        : 'bg-white/40 md:bg-transparent backdrop-blur-md md:backdrop-blur-none py-4 md:py-6'
    }`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <div 
            onClick={() => setIsBrandModalOpen(true)}
            className="flex items-center gap-4 group cursor-pointer"
          >
            <div className="h-10 md:h-14 overflow-hidden transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              <img 
                src="/kiddo_logo.png" 
                alt="Kiddo Logo" 
                className="h-full w-auto object-contain drop-shadow-xl"
              />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl md:text-2xl tracking-tighter text-[#1F2937] leading-none">KIDDO</span>
              <span className="text-[8px] md:text-[10px] font-bold text-brand uppercase tracking-[0.2em] mt-1 md:mt-1.5">Intelligence Platform</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-[#1F2937]/70 hover:text-brand transition-colors text-sm font-bold uppercase tracking-widest"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link to="/login">
              <button className="px-6 py-2.5 text-[#1F2937] text-sm font-bold hover:text-brand transition-colors">
                School Login
              </button>
            </Link>
            <Button 
              onClick={onOpenDemo}
              className="bg-brand hover:shadow-xl hover:shadow-brand/30 px-8 h-12 rounded-xl text-sm font-bold uppercase tracking-wider"
            >
              Get Free Demo
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden p-2.5 text-[#1F2937] bg-brand/5 rounded-xl border border-brand/10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>
      </nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white lg:hidden flex flex-col"
          >
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-[#FDBA74]/10">
              <div 
                onClick={() => { setIsBrandModalOpen(true); setIsMobileMenuOpen(false); }}
                className="flex items-center gap-3"
              >
                <div className="h-10">
                  <img src="/kiddo_logo.png" alt="Kiddo" className="h-full w-auto object-contain" />
                </div>
                <span className="font-black text-xl tracking-tighter text-[#1F2937]">KIDDO</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-[#1F2937]">
                <X size={28} />
              </button>
            </div>

            {/* Links */}
            <div className="flex-1 overflow-y-auto py-6 px-6 space-y-6">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-3xl font-black tracking-tighter text-[#1F2937] hover:text-brand transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="p-6 border-t border-[#FDBA74]/10 space-y-4 bg-slate-50">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <button className="w-full h-16 rounded-2xl border border-slate-200 bg-white text-[#1F2937] text-sm font-black uppercase tracking-widest">
                  School Login
                </button>
              </Link>
              <Button 
                onClick={() => { onOpenDemo(); setIsMobileMenuOpen(false); }} 
                className="w-full h-16 text-sm font-black uppercase tracking-widest"
              >
                Get Free Demo
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <BrandModal 
        isOpen={isBrandModalOpen} 
        onClose={() => setIsBrandModalOpen(false)} 
      />
    </>
  );
};

export default Navbar;
