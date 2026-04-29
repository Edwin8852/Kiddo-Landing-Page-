import React from 'react';
import { motion } from 'framer-motion';
import { ScanFace, BookText, BarChart3, MessageSquare } from 'lucide-react';

const featureCards = [
  {
    title: "Intelligent Attendance",
    description: "Automated attendance with anomaly detection. Capture accurate data with zero friction.",
    icon: ScanFace,
    iconColor: "text-brand",
    glowColor: "group-hover:shadow-brand/20"
  },
  {
    title: "Digital Learning Diary",
    description: "Structured homework management and lesson continuity, perfectly aligned with board requirements.",
    icon: BookText,
    iconColor: "text-peach",
    glowColor: "group-hover:shadow-peach/20"
  },
  {
    title: "Institutional Intelligence",
    description: "Real-time dashboards for leadership, educators, and coordinators. Action-ready insights at every level.",
    icon: BarChart3,
    iconColor: "text-brand",
    glowColor: "group-hover:shadow-brand/20"
  },
  {
    title: "Secure Communication Hub",
    description: "Moderation-first messaging and announcements. Full transparency, complete institutional control.",
    icon: MessageSquare,
    iconColor: "text-peach",
    glowColor: "group-hover:shadow-peach/20"
  }
];

const Features = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 border border-brand/20 text-brand text-xs font-medium mb-6"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse" />
            Core Features
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-bold text-[#1F2937] mb-6 md:mb-8 tracking-tight"
          >
            Built for Modern School <br className="hidden sm:block" /> Operations
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#1F2937]/50 text-lg md:text-xl leading-relaxed"
          >
            A complete platform combining AI assistance, classroom workflows, and secure communication—all designed for today's educational needs.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {featureCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-8 rounded-[32px] bg-white/40 backdrop-blur-xl border border-[#FDBA74]/20 hover:border-brand/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${card.glowColor}`}
            >
              {/* Icon Container */}
              <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center mb-8 border border-brand/10 group-hover:scale-110 transition-transform duration-500">
                <card.icon className={`w-7 h-7 ${card.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-[#1F2937] mb-4">
                {card.title}
              </h3>
              <p className="text-[#1F2937]/60 leading-relaxed text-sm md:text-base">
                {card.description}
              </p>

              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[32px]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
