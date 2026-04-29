import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, UserCheck, Zap } from 'lucide-react';
import robotImg from '../assets/Kiddo img.png';

const AICatchUp = () => {
  const [isLoaded, setIsLoaded] = React.useState(false);
  const steps = [
    {
      title: "Teacher Uploads Content",
      description: "Notes, worksheets, or syllabus topics for the missed class",
      icon: Upload,
      color: "bg-brand/10 text-brand"
    },
    {
      title: "AI Teaches the Content",
      description: "Personalized, interactive learning from syllabus-only material",
      icon: Sparkles,
      color: "bg-peach/20 text-peach"
    },
    {
      title: "Student Catches Up",
      description: "No gaps in learning, maintains academic continuity",
      icon: UserCheck,
      color: "bg-brand/10 text-brand"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#FFF7ED] to-[#FDBA74]/10 border border-[#FDBA74]/20 shadow-2xl"
        >
        {/* Background Glows */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] -z-10" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-peach/5 rounded-full blur-[80px] -z-10" />
 
        <div className="flex flex-col lg:flex-row items-center gap-12 p-6 md:p-16">
          {/* Left Content */}
          <div className="flex-1 space-y-6 md:space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">
                <Zap className="w-3 h-3" />
                Special Feature
              </div>
              <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1F2937] mb-6 md:mb-8 leading-[0.95] tracking-tighter">
                AI Class Catch-Up <br />
                <span className="text-brand">Learning</span>
              </h2>
              <p className="text-[#1F2937]/50 text-base md:text-xl leading-relaxed max-w-xl">
                When a student misses class, teachers upload the day's syllabus. Students learn through KIDDO's AI, ensuring <span className="text-brand font-black">zero learning gaps</span>.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-6 group p-6 rounded-3xl bg-white border border-[#FDBA74]/10 hover:border-brand/20 transition-all shadow-sm"
                >
                  <div className={`shrink-0 p-4 rounded-2xl ${step.color} group-hover:scale-110 transition-transform`}>
                    <step.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="text-[#1F2937] font-black text-lg mb-1 tracking-tight">{step.title}</h4>
                    <p className="text-[#1F2937]/50 text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Premium SaaS-Style Illustration Container */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 relative w-full flex items-center justify-center lg:justify-end"
          >
            {/* 1. Large Ambient Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full -z-10 overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 rounded-full blur-[100px] opacity-60" />
              <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-100 rounded-full blur-[100px] opacity-60" />
            </div>

            {/* 2. Main Professional Glass Card */}
            <motion.div 
              animate={{ 
                y: [0, -12, 0],
              }}
              transition={{ 
                duration: 5, 
                repeat: Infinity, 
                ease: "easeInOut" 
              }}
              className="relative z-10 w-full max-w-[540px] aspect-square rounded-[40px] bg-gradient-to-br from-white/60 via-purple-50/30 to-blue-50/30 backdrop-blur-xl border border-white/60 shadow-[0_20px_50px_rgba(0,0,0,0.05)] flex items-center justify-center p-12 md:p-16 group"
            >
              {/* Subtle inner card border */}
              <div className="absolute inset-4 rounded-[32px] border border-white/40 pointer-events-none" />
              
              {/* 3. The Robot Image (Balanced & Centered) */}
              <motion.img 
                src={robotImg} 
                alt="Kiddo Shadow AI Assistant" 
                onLoad={() => setIsLoaded(true)}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isLoaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                whileHover={{ scale: 1.05 }}
                className="w-full h-full object-contain relative z-20 drop-shadow-[0_15px_30px_rgba(0,0,0,0.08)] transition-all duration-700 ease-out"
              />

              {/* 4. Minimalist Decorative Elements (SaaS Style) */}
              <div className="absolute top-8 left-8 flex gap-2">
                <div className="w-2 h-2 rounded-full bg-purple-300" />
                <div className="w-2 h-2 rounded-full bg-blue-300" />
              </div>
              <div className="absolute bottom-8 right-8 text-[10px] font-bold text-[#1F2937]/20 tracking-widest uppercase">
                AI Instance v2.0
              </div>
              
              {/* Soft glow behind robot */}
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.8),transparent_70%)] opacity-50" />
            </motion.div>

            {/* 5. Outer Accent Elements */}
            <motion.div 
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute -top-6 -right-6 w-12 h-12 border border-brand/10 rounded-full"
            />
            <motion.div 
              animate={{ x: [0, 10, 0], y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity }}
              className="absolute -bottom-4 -left-4 w-8 h-8 bg-brand/5 backdrop-blur-sm rounded-lg rotate-12 border border-brand/10"
            />
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default AICatchUp;
