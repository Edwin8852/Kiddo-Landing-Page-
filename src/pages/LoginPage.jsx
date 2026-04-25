import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Lock, User, Eye, EyeOff, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/ui/Button';
import ThemeToggle from '../components/ThemeToggle';
import { useTheme } from '../context/ThemeContext';

const LoginPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isDark } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col lg:flex-row transition-colors duration-500 ${isDark ? 'bg-[#0b0e14] text-white' : 'bg-[#FFF7ED] text-[#1F2937]'}`}>
      {/* Theme Toggle - Top Right */}
      <div className="absolute top-8 right-8 z-50">
        <ThemeToggle />
      </div>

      {/* Left Side - Form */}
      <div className="flex-1 flex flex-col p-8 md:p-16 lg:p-24 relative z-10">
        {/* Logo */}
        <div className="flex items-center gap-3 mb-20">
          <div className="h-12 overflow-hidden">
            <img 
              src="/kiddo_logo.png" 
              alt="Kiddo Logo" 
              className="h-full w-auto object-contain"
            />
          </div>
          <span className={`font-black text-3xl tracking-tighter ${isDark ? 'text-white' : 'text-[#1F2937]'}`}>KIDDO</span>
        </div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-md w-full"
        >
          <h1 className="text-[40px] font-black mb-2 tracking-tighter font-sans">Welcome Back</h1>
          <p className={`text-sm font-medium mb-12 ${isDark ? 'text-white/60' : 'text-[#1F2937]/50'}`}>
            Welcome Back, Please enter Your details
          </p>

          <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-3">
              <label className={`text-xs font-bold ml-1 ${isDark ? 'text-white/90' : 'text-[#1F2937]/70'}`}>Username / Email</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className={`h-4 w-4 transition-colors ${isDark ? 'text-white/40' : 'text-[#1F2937]/30'}`} />
                </div>
                <input
                  type="text"
                  placeholder="Enter your username or email"
                  className={`w-full border rounded-xl py-3.5 pl-11 pr-4 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-brand/50 ${
                    isDark 
                      ? 'bg-[#1c2128] border-white/10 text-white placeholder:text-white/20' 
                      : 'bg-white border-[#FDBA74]/20 text-[#1F2937] placeholder:text-[#1F2937]/20 shadow-sm'
                  }`}
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className={`text-xs font-bold ml-1 ${isDark ? 'text-white/90' : 'text-[#1F2937]/70'}`}>Password</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className={`h-4 w-4 transition-colors ${isDark ? 'text-white/40' : 'text-[#1F2937]/30'}`} />
                </div>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className={`w-full border rounded-xl py-3.5 pl-11 pr-12 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-brand/50 ${
                    isDark 
                      ? 'bg-[#1c2128] border-white/10 text-white placeholder:text-white/20' 
                      : 'bg-white border-[#FDBA74]/20 text-[#1F2937] placeholder:text-[#1F2937]/20 shadow-sm'
                  }`}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className={`absolute inset-y-0 right-0 pr-4 flex items-center transition-colors ${isDark ? 'text-white/20 hover:text-white' : 'text-[#1F2937]/20 hover:text-[#1F2937]'}`}
                >
                  {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            <Button className="w-full h-[52px] bg-brand hover:shadow-xl hover:shadow-brand/30 text-white text-sm font-bold rounded-xl mt-4 shadow-lg shadow-brand/20 transition-all duration-300">
              Log In
            </Button>
          </form>

          <div className="mt-16 text-center">
             <p className={`text-[11px] font-bold tracking-tight ${isDark ? 'text-white/40' : 'text-[#1F2937]/30'}`}>
              Powered by AI - from Xtown
            </p>
          </div>
        </motion.div>
      </div>

      {/* Right Side - Visual Slider */}
      <div className="flex-1 hidden lg:flex items-center justify-center p-12 relative overflow-hidden">
        <motion.div
          key="slide-1"
          initial={{ opacity: 0, scale: 0.95, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative z-10 w-full max-w-[600px] flex items-center justify-center"
        >
          <img 
            src="/login_illustration.png" 
            alt="Welcome Illustration" 
            className="w-full h-auto drop-shadow-[0_20px_50px_rgba(168,85,247,0.3)]"
          />
        </motion.div>

        {/* Backdrop Decorative Glow (Subtle) */}
        <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[120px] -z-10 transition-opacity duration-1000 ${isDark ? 'bg-brand/5 opacity-100' : 'bg-peach/10 opacity-100'}`} />
      </div>
    </div>
  );
};

export default LoginPage;
