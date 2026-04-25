import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Shield, Zap, Globe, Mail, Phone } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const BrandModal = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0b0e14]/60 backdrop-blur-md"
        />

        {/* Modal Content */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className={`relative w-full max-w-2xl overflow-hidden rounded-[40px] shadow-2xl border ${
            isDark 
              ? 'bg-[#1c2128] border-white/10' 
              : 'bg-white border-[#FDBA74]/20'
          }`}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-white/10 text-white' : 'hover:bg-slate-100 text-[#1F2937]'
            }`}
          >
            <X className="w-6 h-6" />
          </button>

          <div className="p-8 md:p-12">
            <div className="flex flex-col items-center text-center space-y-8">
              {/* Big Logo */}
              <motion.div
                initial={{ rotate: -10, scale: 0.8 }}
                animate={{ rotate: 0, scale: 1 }}
                className="w-32 h-32 md:w-48 md:h-48 rounded-[32px] bg-brand/5 border border-brand/10 p-4 flex items-center justify-center"
              >
                <img 
                  src="/kiddo_logo.png" 
                  alt="Kiddo Official Logo" 
                  className="w-full h-full object-contain drop-shadow-2xl"
                />
              </motion.div>

              <div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter mb-4 text-[#1F2937]">KIDDO</h2>
                <p className="text-brand font-black uppercase tracking-[0.2em] text-xs mb-8">Intelligence Platform for Modern Institutions</p>
              </div>

              {/* Company Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full text-left">
                <div className={`p-6 rounded-3xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Shield className="w-5 h-5 text-brand" />
                    <span className="font-black text-sm uppercase tracking-widest text-[#1F2937]">Vision</span>
                  </div>
                  <p className="text-[#1F2937]/50 text-sm leading-relaxed">
                    To empower every educational institution with secure, curriculum-aligned AI that enhances teaching and learning outcomes.
                  </p>
                </div>

                <div className={`p-6 rounded-3xl border ${isDark ? 'bg-white/5 border-white/10' : 'bg-slate-50 border-slate-200'}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <Zap className="w-5 h-5 text-brand" />
                    <span className="font-black text-sm uppercase tracking-widest text-[#1F2937]">Mission</span>
                  </div>
                  <p className="text-[#1F2937]/50 text-sm leading-relaxed">
                    Reducing administrative burden and providing students with a safe, moderated digital space for academic growth.
                  </p>
                </div>
              </div>

              {/* Contact Footer */}
              <div className="flex flex-wrap justify-center gap-8 pt-8 border-t border-[#FDBA74]/10 w-full">
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F2937]/60">
                  <Globe className="w-4 h-4 text-brand" />
                  kiddoshadow.com
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F2937]/60">
                  <Mail className="w-4 h-4 text-brand" />
                  support@kiddoshadow.com
                </div>
                <div className="flex items-center gap-2 text-xs font-bold text-[#1F2937]/60">
                  <Phone className="w-4 h-4 text-brand" />
                  +91 (Sales & Support)
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default BrandModal;
