import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  MessageSquareOff, 
  Eye, 
  Lock, 
  FileSearch, 
  UserPlus,
  CheckCircle2,
  LockKeyhole
} from 'lucide-react';

const safetyFeatures = [
  { text: "Platform-native communication only", icon: ShieldCheck },
  { text: "No peer-to-peer messaging", icon: MessageSquareOff },
  { text: "Full educator moderation & visibility", icon: Eye },
  { text: "Curriculum boundaries enforced", icon: Lock },
  { text: "Comprehensive activity audit trails", icon: FileSearch },
  { text: "Student-first AI architecture", icon: UserPlus },
];

const Safety = () => {
  return (
    <section id="safety" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand/5 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] md:text-xs font-bold uppercase tracking-widest mb-6 md:mb-8"
          >
            <LockKeyhole className="w-3 h-3" />
            Built for Safety & Trust
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1F2937] mb-6 md:mb-8 tracking-tighter leading-[0.95]"
          >
            Enterprise-Grade Safety, <br className="hidden md:block" />
            <span className="text-brand">Institutional Trust</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#1F2937]/50 text-base md:text-xl leading-relaxed"
          >
            Institutional leadership can operate with complete confidence. Our architecture prioritizes student protection through multi-layered security controls.
          </motion.p>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {safetyFeatures.map((item, index) => (
            <motion.div
              key={item.text}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="flex items-center gap-4 p-8 rounded-3xl bg-white border border-[#FDBA74]/10 shadow-sm hover:shadow-xl hover:border-brand/20 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand/5 flex items-center justify-center border border-brand/10 shrink-0">
                <item.icon className="w-6 h-6 text-brand" />
              </div>
              <span className="text-[#1F2937]/80 font-bold text-sm md:text-base leading-tight tracking-tight">
                {item.text}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight Box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="p-10 md:p-16 rounded-[48px] bg-white border border-[#FDBA74]/10 shadow-2xl relative overflow-hidden"
        >
          <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
            <div className="w-20 h-20 rounded-3xl bg-brand/10 flex items-center justify-center shrink-0 border border-brand/20">
              <CheckCircle2 className="w-10 h-10 text-brand" />
            </div>
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-black text-[#1F2937] mb-4 tracking-tighter">Principal-Approved Platform</h3>
              <p className="text-[#1F2937]/50 text-xl leading-relaxed">
                Every feature is designed with school management in mind. Full control over access, complete audit visibility, and zero external social media features.
              </p>
            </div>
          </div>
          
          {/* Subtle decorative glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-brand/5 rounded-full blur-[100px] -z-10" />
        </motion.div>
      </div>
    </section>
  );
};

export default Safety;
