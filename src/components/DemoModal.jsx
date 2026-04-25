import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Button from './ui/Button';
import { useTheme } from '../context/ThemeContext';

const DemoModal = ({ isOpen, onClose }) => {
  const { isDark } = useTheme();
  const [submitted, setSubmitted] = React.useState(false);

  React.useEffect(() => {
    if (!isOpen) {
      // Reset state after a delay when modal closes
      const timer = setTimeout(() => setSubmitted(false), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        />

        {/* Modal Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className={`relative w-full max-w-xl rounded-[32px] border p-8 md:p-10 shadow-2xl transition-colors duration-500 ${
            isDark 
              ? 'bg-[#16141c] border-white/10 text-white' 
              : 'bg-white border-slate-200 text-slate-900'
          }`}
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className={`absolute top-6 right-6 p-2 rounded-full transition-colors ${
              isDark ? 'hover:bg-white/10 text-white/40' : 'hover:bg-slate-100 text-slate-400'
            }`}
          >
            <X size={24} />
          </button>

          <AnimatePresence mode="wait">
            {!submitted ? (
              <motion.div
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                <div className="mb-10">
                  <h2 className="text-4xl font-black mb-3 tracking-tighter">Book a Professional Walkthrough</h2>
                  <p className={`text-lg font-medium ${isDark ? 'text-white/40' : 'text-[#1F2937]/50'}`}>
                    Schedule a personalized session to see how our platform can transform your institution.
                  </p>
                </div>

                <form className="space-y-6" onSubmit={handleSubmit}>
                  {/* School Name */}
                  <div className="space-y-2">
                    <label className={`text-xs font-black uppercase tracking-widest ml-1 ${isDark ? 'text-white/70' : 'text-[#1F2937]/70'}`}>School Name</label>
                    <input
                      required
                      type="text"
                      placeholder="Enter the full name of your school"
                      className={`w-full border rounded-2xl py-4 px-6 transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand font-medium ${
                        isDark 
                          ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20' 
                          : 'bg-slate-50 border-slate-200 text-[#1F2937] placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  {/* Contact Person */}
                  <div className="space-y-2">
                    <label className={`text-xs font-black uppercase tracking-widest ml-1 ${isDark ? 'text-white/70' : 'text-[#1F2937]/70'}`}>Contact Person</label>
                    <input
                      required
                      type="text"
                      placeholder="Principal / Coordinator Name"
                      className={`w-full border rounded-2xl py-4 px-6 transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand font-medium ${
                        isDark 
                          ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20' 
                          : 'bg-slate-50 border-slate-200 text-[#1F2937] placeholder:text-slate-400'
                      }`}
                    />
                  </div>

                  {/* Row 1: Mobile & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className={`text-xs font-black uppercase tracking-widest ml-1 ${isDark ? 'text-white/70' : 'text-[#1F2937]/70'}`}>Mobile Number</label>
                      <input
                        required
                        type="tel"
                        placeholder="Primary contact number"
                        className={`w-full border rounded-2xl py-4 px-6 transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand font-medium ${
                          isDark 
                            ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20' 
                            : 'bg-slate-50 border-slate-200 text-[#1F2937] placeholder:text-slate-400'
                        }`}
                      />
                    </div>
                    <div className="space-y-2">
                      <label className={`text-xs font-black uppercase tracking-widest ml-1 ${isDark ? 'text-white/70' : 'text-[#1F2937]/70'}`}>Official Email</label>
                      <input
                        required
                        type="email"
                        placeholder="Institution email address"
                        className={`w-full border rounded-2xl py-4 px-6 transition-all focus:outline-none focus:ring-2 focus:ring-brand focus:border-brand font-medium ${
                          isDark 
                            ? 'bg-white/5 border-white/10 text-white placeholder:text-white/20' 
                            : 'bg-slate-50 border-slate-200 text-[#1F2937] placeholder:text-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div className="flex justify-end pt-4">
                    <Button type="submit" size="lg" className="w-full h-16 bg-brand hover:shadow-2xl hover:shadow-brand/40 text-sm font-black uppercase tracking-widest rounded-2xl">
                      Request Professional Demo
                    </Button>
                  </div>
                </form>
              </motion.div>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10 space-y-8"
              >
                <div className="w-24 h-24 bg-brand/10 border border-brand/20 rounded-3xl flex items-center justify-center mx-auto mb-10 rotate-12">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", damping: 12, stiffness: 200 }}
                  >
                    <svg className="w-12 h-12 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                    </svg>
                  </motion.div>
                </div>
                
                <h2 className="text-4xl font-black tracking-tighter">Enquiry Received</h2>
                <p className={`text-xl leading-relaxed font-medium ${isDark ? 'text-white/60' : 'text-[#1F2937]/50'}`}>
                  Our institutional experts will connect with you shortly to schedule your personalized walkthrough.
                </p>
                
                <div className="pt-8">
                  <Button onClick={onClose} variant="secondary" className="px-12 h-14 font-black uppercase tracking-widest border-[#FDBA74]/20">
                    Close
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default DemoModal;
