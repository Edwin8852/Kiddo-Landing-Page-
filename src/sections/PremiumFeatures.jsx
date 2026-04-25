import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, BarChart, ShieldCheck } from 'lucide-react';

const stats = [
  { label: "10+ Schools", value: "" },
  { label: "Daily Users", value: "" },
  { label: "Engagement", value: "" },
  { label: "99.9% Uptime", value: "" }
];

const premiumFeatures = [
  {
    title: "AI Tutoring",
    description: "Smart personalized learning paths",
    icon: Sparkles,
    iconColor: "text-brand",
    glowColor: "group-hover:shadow-brand/20"
  },
  {
    title: "Realtime Analytics",
    description: "Instant school and student insight",
    icon: BarChart,
    iconColor: "text-peach",
    glowColor: "group-hover:shadow-peach/20"
  },
  {
    title: "Secure Access",
    description: "Data privacy & encrypted student records",
    icon: ShieldCheck,
    iconColor: "text-brand",
    glowColor: "group-hover:shadow-brand/20"
  }
];

const PremiumFeatures = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-32">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-6 rounded-2xl bg-brand/5 border border-brand/10 text-center backdrop-blur-sm hover:bg-brand/10 transition-colors cursor-default"
            >
              <span className="text-brand font-bold text-sm md:text-base">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-[#1F2937] mb-6 tracking-tight"
          >
            Premium Features
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1F2937]/50 text-lg md:text-xl leading-relaxed"
          >
            All advanced functionality for modern schools
          </motion.p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {premiumFeatures.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`group relative p-10 rounded-[48px] glass hover:bg-white/60 transition-all duration-500 hover:-translate-y-2 ${card.glowColor}`}
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-brand/5 flex items-center justify-center mb-10 border border-brand/10 group-hover:scale-110 transition-transform duration-500 shadow-sm">
                <card.icon className={`w-8 h-8 ${card.iconColor}`} />
              </div>

              {/* Content */}
              <h3 className="text-3xl font-bold text-[#1F2937] mb-6 tracking-tight">
                {card.title}
              </h3>
              <p className="text-[#1F2937]/60 leading-relaxed text-lg">
                {card.description}
              </p>

              {/* Subtle hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-[48px] -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PremiumFeatures;
