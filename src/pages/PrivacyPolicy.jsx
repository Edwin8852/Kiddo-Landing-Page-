import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const PrivacyPolicy = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-[#FFF7ED] text-[#1F2937] min-h-screen font-sans">
      <Navbar />
      
      <main className="container mx-auto px-6 pt-32 md:pt-40 pb-24 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-16"
        >
          {/* Header Section */}
          <div className="space-y-8 border-b border-[#FDBA74]/20 pb-12">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-brand hover:gap-3 transition-all text-xs font-black uppercase tracking-[0.2em]"
            >
              <ArrowLeft size={14} />
              Return to Platform
            </Link>
            
            <div className="space-y-4">
              <h1 className="text-3xl sm:text-4xl md:text-7xl font-black tracking-tighter leading-[0.95]">
                Privacy Policy <br />
                <span className="text-brand">Kiddo Shadow</span>
              </h1>
              <p className="text-[#1F2937]/50 text-lg font-medium">
                Last Updated: February 9, 2026
              </p>
            </div>
          </div>

          {/* Policy Introduction */}
          <section className="prose prose-slate max-w-none">
            <p className="text-2xl text-[#1F2937]/80 leading-relaxed font-semibold">
              This Privacy Policy ("Policy") describes how <span className="text-[#1F2937] font-bold underline decoration-brand/30">Xtown Technologies Private Limited</span> ("Xtown Technologies", "we", "our", or "us") collects, uses, discloses, and protects information obtained from users ("you", "user", "school", "teacher", "student", or "parent") of our digital learning and management platform <span className="text-brand font-black">Kiddo Shadow</span> ("Platform").
            </p>
            <div className="mt-10 p-8 rounded-[32px] bg-brand/5 border border-brand/20 text-brand font-black text-sm uppercase tracking-[0.2em] inline-block shadow-sm">
              By accessing or using our Platform, you consent to the terms of this Policy.
            </div>
          </section>

          {/* Section 1: Information We Collect */}
          <section className="space-y-12">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-[24px] bg-brand text-white flex items-center justify-center font-black text-2xl shadow-lg shadow-brand/20">
                1
              </div>
              <h2 className="text-4xl font-black tracking-tighter">Information We Collect</h2>
            </div>
            
            <p className="text-[#1F2937]/60 text-xl font-medium ml-2">We collect the following categories of data:</p>
            
            <div className="grid gap-6">
              {[
                {
                  id: "a",
                  title: "Personal Information",
                  content: "Includes student and staff names, addresses, contact numbers, school IDs, class details, photographs, and email addresses."
                },
                {
                  id: "b",
                  title: "Academic and Operational Data",
                  content: "Attendance logs, performance reports, timetable, marks, assignments, and parent-teacher communications."
                },
                {
                  id: "c",
                  title: "System and Device Data",
                  content: "Browser type, IP address, device information, operating system, cookies, and session identifiers."
                },
                {
                  id: "d",
                  title: "AI Interaction Data",
                  content: "Queries and responses exchanged with Kiddo Shadow's AI assistant for learning improvement and feature training."
                },
                {
                  id: "e",
                  title: "Payment & Billing Information",
                  content: "For schools or institutions using paid subscriptions — bank details, payment confirmation, or invoice references (processed securely via third-party payment gateways)."
                }
              ].map((item) => (
                <div key={item.id} className="group p-6 md:p-10 rounded-[32px] md:rounded-[40px] bg-white border border-[#FDBA74]/20 hover:border-brand/40 hover:shadow-[0_20px_80px_-20px_rgba(253,186,116,0.15)] transition-all duration-500">
                  <div className="flex items-start gap-4 md:gap-8">
                    <span className="font-black text-brand text-xl md:text-2xl mt-1">{item.id}.</span>
                    <div className="space-y-3">
                      <h4 className="text-xl md:text-2xl font-black text-[#1F2937] tracking-tight group-hover:text-brand transition-colors">{item.title}</h4>
                      <p className="text-base md:text-lg text-[#1F2937]/60 leading-relaxed font-medium">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
