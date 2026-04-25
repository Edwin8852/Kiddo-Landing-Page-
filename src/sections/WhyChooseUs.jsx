import React from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, 
  Rocket, 
  Layers, 
  LayoutGrid, 
  Users,
  Target,
  Settings,
  GraduationCap,
  Shield,
  Book,
  Clock,
  Zap
} from 'lucide-react';

const checklist = [
  "Designed for Indian curriculum",
  "Principal-level administrative control",
  "Teacher-first workflows",
  "Safe AI environment",
  "Supports CBSE, ICSE & State Boards",
  "Reduces workload",
  "Ensures learning continuity"
];

const features = [
  {
    title: "Active Pilot Programs",
    description: "Currently onboarding first set of partner schools",
    icon: Rocket,
    color: "text-brand",
    bg: "bg-brand/10"
  },
  {
    title: "Multi-Board Compatibility",
    description: "CBSE · State Board · ICSE · Matric",
    icon: Layers,
    color: "text-peach",
    bg: "bg-peach/10"
  },
  {
    title: "Integrated Learning Modules",
    description: "AI Learning · Diary · Tests · Class Chat · Smart Classroom",
    icon: LayoutGrid,
    color: "text-brand",
    bg: "bg-brand/10"
  },
  {
    title: "Student-Centric Experience",
    description: "No private chats · Full teacher moderation",
    icon: Users,
    color: "text-peach",
    bg: "bg-peach/10"
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-peach/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16 md:gap-20">
          {/* Left Content */}
          <div className="flex-1">
            <motion.h2 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-5xl md:text-7xl font-black text-[#1F2937] mb-6 md:mb-8 tracking-tighter leading-[0.95]"
            >
              Why Schools Choose <br />
              <span className="text-brand text-4xl sm:text-6xl md:text-8xl">KIDDO</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-[#1F2937]/50 text-base md:text-xl leading-relaxed mb-10 max-w-xl"
            >
              KIDDO is designed specifically for institutional excellence — delivering structured workflows and a safe learning environment.
            </motion.p>
 
            <div className="space-y-4">
              {checklist.map((item, index) => (
                <motion.div 
                  key={item}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.05) }}
                  className="flex items-center gap-3"
                >
                  <div className="w-5 h-5 rounded-full bg-brand/10 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand" />
                  </div>
                  <span className="text-[#1F2937]/70 font-bold tracking-tight text-sm md:text-base">{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
 
          {/* Right Grid */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 md:p-10 rounded-[40px] bg-white border border-[#FDBA74]/10 hover:border-brand/30 transition-all duration-500 shadow-sm hover:shadow-2xl"
              >
                <div className={`w-14 h-14 rounded-2xl ${feature.bg} flex items-center justify-center mb-6 md:mb-8`}>
                  <feature.icon className={`w-7 h-7 ${feature.color}`} />
                </div>
                <h3 className="text-xl font-black text-[#1F2937] mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-[#1F2937]/50 text-xs md:text-sm leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
