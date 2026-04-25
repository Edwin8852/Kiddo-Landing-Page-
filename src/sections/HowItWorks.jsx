import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const steps = [
  {
    number: "01",
    title: "Institution Setup",
    description: "Your school admin provisioned with Kiddo Shadow. We configure the platform for your curriculum requirements (CBSE, ICSE, State Board) and institutional structure.",
    tags: ["Supports CBSE, ICSE & State Curriculums", "Custom Institution branding", "Admin access configuration"]
  },
  {
    number: "02",
    title: "Educator Enablement",
    description: "Teachers seamlessly upload curriculum and gain full control through an intuitive, guided platform experience. Comprehensive training ensures optimal adoption.",
    tags: ["Curriculum management", "Dashboard mastery", "Moderation framework setup"]
  },
  {
    number: "03",
    title: "Secure Student Access",
    description: "Students receive secure, controlled access credentials. Platform enforces curriculum-aligned learning, secure communication, and age-appropriate engagement.",
    tags: ["Secure authentication", "Moderated communication only", "Curriculum-restricted AI"]
  },
  {
    number: "04",
    title: "Intelligence & Insights",
    description: "Leadership and educators monitor institutional performance through premium analytics dashboards. Real-time visibility into attendance, learning outcomes, and engagement metrics.",
    tags: ["Real-time analytics", "Performance dashboards", "Learning insights"]
  }
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-8"
          >
            Seamless Onboarding
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-7xl font-black text-[#1F2937] mb-6 md:mb-8 tracking-tighter leading-[0.95]"
          >
            Launch Your Institution <br />
            <span className="text-brand">in Four Phases</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#1F2937]/50 text-base md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            From initial setup to technical mastery. KIDDO provides a fully-managed implementation experience designed for modern schools.
          </motion.p>
        </div>

        <div className="max-w-5xl mx-auto relative">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <motion.div 
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative p-6 md:p-12 rounded-[40px] bg-white border border-[#FDBA74]/10 shadow-sm hover:shadow-2xl hover:border-brand/20 transition-all duration-500"
              >
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="shrink-0">
                    <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-brand/5 border border-brand/10 flex items-center justify-center text-brand font-black text-xl md:text-2xl">
                      {step.number}
                    </div>
                  </div>
                  
                  <div className="space-y-4 md:space-y-6 flex-1">
                    <h3 className="text-2xl md:text-3xl font-black text-[#1F2937] tracking-tight">{step.title}</h3>
                    <p className="text-[#1F2937]/50 text-base md:text-lg leading-relaxed max-w-3xl">
                      {step.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-3 pt-2">
                      {step.tags.map(tag => (
                        <div 
                          key={tag}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#1F2937]/5 border border-[#1F2937]/10 text-[#1F2937]/60 text-xs font-bold uppercase tracking-widest hover:border-brand/30 hover:bg-brand/5 transition-all"
                        >
                          <Check className="w-4 h-4 text-brand" />
                          {tag}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
