import React from 'react';
import { motion } from 'framer-motion';
import { Upload, Sparkles, UserCheck, Zap } from 'lucide-react';

const AICatchUp = () => {
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

          {/* Right Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 bg-white rounded-[32px] p-6 shadow-2xl overflow-hidden min-h-[400px] flex items-center justify-center max-w-[440px] mx-auto">
              <img 
                src="/ai_learning_catchup.png" 
                alt="AI Learning Robot" 
                className="w-full h-auto object-contain max-h-[460px]"
              />
            </div>
            {/* Decorative element behind image */}
            <div className="absolute -inset-4 bg-brand/10 blur-2xl rounded-[40px] -z-10 animate-pulse" />
          </motion.div>
        </div>
      </motion.div>
      </div>
    </section>
  );
};

export default AICatchUp;
