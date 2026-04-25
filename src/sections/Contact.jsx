import React from 'react';
import { motion } from 'framer-motion';
import { Phone, ArrowRight, Sparkles } from 'lucide-react';
import Button from '../components/ui/Button';

const Contact = ({ onOpenDemo }) => {
  return (
    <section id="contact" className="py-20 md:py-32 relative overflow-hidden bg-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8">
              Contact Sales
            </div>
            <h2 className="text-3xl sm:text-5xl md:text-7xl font-black text-[#1F2937] mb-6 md:mb-8 tracking-tighter leading-[0.95]">
              Ready to Modernize <br />
              <span className="text-brand">Your Institution?</span>
            </h2>
            <p className="text-[#1F2937]/50 text-base md:text-xl leading-relaxed mb-8 md:mb-12 max-w-xl">
              Join leading schools across the country in deploying secure, curriculum-aligned AI for their students and staff.
            </p>

            <div className="space-y-8">
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center border border-brand/10">
                  <Phone className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1F2937]/30 mb-1">Direct Sales</p>
                  <p className="text-xl font-black text-[#1F2937] tracking-tight">+91 90926 66288</p>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="w-14 h-14 rounded-2xl bg-brand/5 flex items-center justify-center border border-brand/10">
                  <Sparkles className="w-6 h-6 text-brand" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-[#1F2937]/30 mb-1">Office Location</p>
                  <p className="text-xl font-black text-[#1F2937] tracking-tight">Chennai, Tamil Nadu</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-16 rounded-[48px] bg-[#1a1625] text-white relative overflow-hidden shadow-2xl shadow-brand/20"
          >
            <div className="relative z-10 space-y-8">
              <h3 className="text-3xl font-black tracking-tighter">Schedule a Walkthrough</h3>
              <p className="text-white/60 text-lg leading-relaxed">
                See Kiddo Shadow in action. We'll show you the AI guardrails, the institutional dashboards, and our deployment roadmap.
              </p>
              <Button 
                onClick={onOpenDemo}
                className="w-full h-16 bg-brand hover:shadow-2xl hover:shadow-brand/40 text-sm font-black uppercase tracking-widest flex items-center justify-center group"
              >
                Request Free Demo
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <p className="text-center text-white/30 text-xs font-bold uppercase tracking-widest">
                No Commitment &bull; Free Pilot Program Available
              </p>
            </div>

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-brand/20 rounded-full blur-[80px] -z-10" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-peach/10 rounded-full blur-[80px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
