import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  ScanFace, 
  BookText, 
  MessageSquare, 
  ShieldAlert, 
  BarChart3,
  Sparkles,
  Zap,
  ArrowRight
} from 'lucide-react';
import robotImg from '../assets/Kiddo img.png';

const BentoGrid = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  return (
    <section id="features" className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-bold mb-6"
          >
            Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black text-[#1F2937] mb-6 md:mb-8 tracking-tighter"
          >
            Built for the <span className="text-gradient">Next-Gen</span> <br className="hidden sm:block" />
            Educational Ecosystem
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 grid-rows-none md:grid-rows-2 gap-8 h-auto md:h-[900px]">
          {/* Main AI Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-8 md:row-span-1 bg-white border border-[#FDBA74]/10 rounded-[40px] p-6 md:p-12 relative overflow-hidden group shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-10">
                  Core Intelligence
                </div>
                <h3 className="text-4xl font-black text-[#1F2937] mb-6 tracking-tighter">Syllabus-Trained AI Assistant</h3>
                <p className="text-[#1F2937]/50 text-lg max-w-xl leading-relaxed mb-8">
                  A closed-loop AI environment that strictly adheres to your school's curriculum and internal pedagogy. No external web access, 100% student safety.
                </p>
                <button className="flex items-center gap-2 text-brand font-bold text-sm group/btn">
                  Explore AI Safety Framework
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
            {/* Robot Image Illustration */}
            <div className="absolute top-0 right-0 w-full md:w-1/2 h-full -z-10 opacity-20 md:opacity-100 transition-all duration-700 group-hover:scale-105 group-hover:translate-x-2">
              <div className="relative w-full h-full">
                <img 
                  src={robotImg} 
                  alt="Kiddo Shadow AI Assistant" 
                  onLoad={() => setIsLoaded(true)}
                  className={`w-full h-full object-contain object-right-bottom drop-shadow-[0_20px_50px_rgba(253,186,116,0.3)] transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
                />
                {/* Subtle Glow behind robot */}
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand/10 rounded-full blur-[100px] -z-10" />
              </div>
            </div>
          </motion.div>

          {/* Attendance Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="md:col-span-4 md:row-span-1 bg-white border border-[#FDBA74]/10 rounded-[40px] p-6 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="w-14 h-14 rounded-2xl bg-peach/10 flex items-center justify-center mb-10">
              <ScanFace className="w-7 h-7 text-peach" />
            </div>
            <h3 className="text-2xl font-black text-[#1F2937] mb-4 tracking-tight">Smart Attendance</h3>
            <p className="text-[#1F2937]/50 leading-relaxed mb-6">
              Biometric-grade tracking with automated anomaly alerts for parents and staff.
            </p>
            <button className="text-peach font-bold text-sm">Case Study &rarr;</button>
          </motion.div>

          {/* Communication Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-4 md:row-span-1 bg-[#1a1625] rounded-[40px] p-6 md:p-12 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-10">
              <MessageSquare className="w-7 h-7 text-white" />
            </div>
            <h3 className="text-2xl font-black text-white mb-4 tracking-tight">Moderated Communication</h3>
            <p className="text-white/40 leading-relaxed mb-10">
              Centralized hub for all school communications with enterprise-grade moderation.
            </p>
            <div className="flex items-center gap-2 text-white/60 text-xs font-bold">
              <ShieldAlert size={14} />
              Full Audit Logs
            </div>
          </motion.div>

          {/* Intelligence Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-8 md:row-span-1 bg-white border border-[#FDBA74]/10 rounded-[40px] p-6 md:p-12 shadow-sm hover:shadow-xl transition-all duration-500"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center h-full">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-peach/5 border border-peach/10 text-peach text-[10px] font-black uppercase tracking-widest mb-10">
                  Decision Support
                </div>
                <h3 className="text-3xl font-black text-[#1F2937] mb-6 tracking-tighter">Institutional Intelligence</h3>
                <p className="text-[#1F2937]/50 leading-relaxed">
                  Consolidated dashboards for school leadership to monitor academic health and operational efficiency in real-time.
                </p>
              </div>
              <div className="relative bg-brand/5 rounded-3xl p-8 border border-brand/10">
                <div className="space-y-6">
                  {[85, 92, 78].map((val, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex justify-between text-[10px] font-bold text-brand uppercase">
                        <span>Metric {i+1}</span>
                        <span>{val}%</span>
                      </div>
                      <div className="h-2 bg-white rounded-full overflow-hidden">
                        <motion.div 
                          initial={{ width: 0 }}
                          whileInView={{ width: `${val}%` }}
                          transition={{ delay: 0.5 + (i * 0.1), duration: 1 }}
                          className="h-full bg-brand rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BentoGrid;
