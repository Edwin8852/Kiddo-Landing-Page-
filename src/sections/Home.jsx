import React from 'react';
import { motion } from 'framer-motion';
import { PhoneCall, ArrowRight } from 'lucide-react';
import Button from '../components/ui/Button';

const Home = ({ onOpenDemo }) => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center pt-32 md:pt-40 pb-20 overflow-hidden">
      {/* Professional Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#FDBA74/10,transparent_50%)] -z-10" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-[0.2em] mb-8"
          >
            AI & Robots Teach. You Grow.
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-black text-[#1F2937] mb-6 md:mb-8 tracking-tighter leading-[0.95] font-sans px-4"
          >
            The Intelligence <br />
            Behind <span className="text-brand">KIDDO</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="max-w-2xl mx-auto text-base md:text-xl text-[#1F2937]/50 mb-10 md:mb-12 leading-relaxed px-4"
          >
            Kiddo Shadow provides a secure, curriculum-aligned AI environment, operational intelligence, and moderated communication for modern educational institutions.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16 md:mb-20 px-6"
          >
            <Button 
              onClick={onOpenDemo}
              size="lg" 
              className="w-full sm:w-auto h-14 px-10 bg-brand hover:shadow-2xl hover:shadow-brand/30 text-sm font-bold uppercase tracking-widest"
            >
              Get Started Now
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto h-14 px-10 border-[#FDBA74]/20 hover:bg-white text-[#1F2937] text-sm font-bold uppercase tracking-widest">
              View Solutions
            </Button>
          </motion.div>

          {/* Social Proof / Trusted By */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="pt-10 border-t border-[#FDBA74]/10"
          >
            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-[#1F2937]/30 mb-8">Trusted by leading educational institutions</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              {['CBSE Schools', 'ICSE Academy', 'Global International', 'State Board Plus'].map((school) => (
                <span key={school} className="text-sm font-bold text-[#1F2937] tracking-tight">{school}</span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Hero Graphic - Refined Frame */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="relative max-w-6xl mx-auto"
        >
          <div className="relative p-2 rounded-[32px] bg-white shadow-2xl border border-[#FDBA74]/10 overflow-hidden">
            <img 
              src="/hero_dashboard.png" 
              alt="Kiddo Shadow Platform" 
              onLoad={() => setIsLoaded(true)}
              className={`w-full h-auto rounded-[24px] transition-all duration-1000 ${isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
            />
          </div>
          
          {/* Subtle Glows */}
          <div className="absolute -top-10 -right-10 w-64 h-64 bg-brand/5 rounded-full blur-3xl -z-10" />
          <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-peach/5 rounded-full blur-3xl -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Home;
