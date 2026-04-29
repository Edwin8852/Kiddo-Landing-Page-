import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const TermsAndConditions = () => {
  // Scroll to top on load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sections = [
    {
      id: 1,
      title: "Definitions",
      items: [
        { label: "Platform", text: "Refers to the Kiddo Shadow web portal, mobile app, APIs, and associated tools." },
        { label: "Institution/School", text: "The educational entity subscribing to the platform." },
        { label: "User", text: "Any authorized student, parent, teacher, or staff accessing the platform." },
        { label: "Data", text: "All academic, personal, or institutional information uploaded, processed, or stored within the platform." },
        { label: "Services", text: "Attendance tracking, syllabus management, communication tools, AI support, reports, and analytics." }
      ]
    },
    {
      id: 2,
      title: "Acceptance of Terms",
      intro: "By using Kiddo Shadow, you:",
      bullets: [
        "Represent that you are authorized by your institution or guardian.",
        "Agree to comply with all applicable laws, regulations, and educational policies.",
        "Accept that your usage data may be monitored for service optimization and compliance."
      ]
    },
    {
      id: 3,
      title: "License and Access",
      bullets: [
        "Xtown Technologies grants users a non-exclusive, non-transferable, revocable license to access and use Kiddo Shadow for legitimate educational purposes.",
        "Unauthorized resale, copying, or distribution of any part of the software is strictly prohibited.",
        "Schools must ensure that all users are verified and granted access through proper credentials."
      ]
    },
    {
      id: 4,
      title: "User Obligations",
      intro: "All users shall:",
      bullets: [
        "Maintain confidentiality of login credentials.",
        "Avoid sharing or publishing any unlawful, obscene, or harmful content.",
        "Refrain from manipulating attendance, grades, or system data.",
        "Use the platform only for educational, school-related communication."
      ],
      footer: "Violation of these obligations may result in account suspension or termination."
    },
    {
      id: 5,
      title: "Institutional Responsibilities",
      intro: "Schools or institutions using Kiddo Shadow agree to:",
      bullets: [
        "Verify user identities before granting access.",
        "Ensure content uploaded complies with academic integrity and data privacy norms.",
        "Obtain parental consent for minors below 18 years, where applicable.",
        "Notify Xtown Technologies of any unauthorized activity or breach within 24 hours."
      ]
    },
    {
      id: 6,
      title: "Intellectual Property Rights",
      intro: "All software code, features, designs, AI algorithms, and content provided by Xtown Technologies remain the exclusive property of Xtown Technologies Pvt. Ltd.",
      subHeader: "USERS OR INSTITUTIONS SHALL NOT:",
      bullets: [
        "Reverse-engineer or replicate the software.",
        "Copy AI-generated or dashboard data for commercial use.",
        "Remove or modify branding or copyright notices."
      ],
      footer: "Any misuse constitutes infringement under Indian Copyright Act, 1957 and IT Act, 2000."
    },
    {
      id: 7,
      title: "Data Collection and Privacy",
      bullets: [
        "Xtown Technologies collects and processes data solely to improve educational outcomes, analytics, and AI learning modules.",
        "Personal information is handled in accordance with our Privacy Policy and Data Processing Addendum (DPA).",
        "Schools retain ownership of uploaded academic content; Xtown Technologies only acts as a data processor.",
        "AI modules use anonymized data for model improvement without exposing identifiable information."
      ]
    },
    {
      id: 8,
      title: "AI and Automation Disclaimer",
      intro: "While Kiddo Shadow includes AI-driven assistants and automated features:",
      bullets: [
        "These tools are for educational assistance only and not a replacement for teachers.",
        "The system may occasionally produce incomplete or contextually inaccurate responses.",
        "Xtown Technologies is not liable for academic or disciplinary decisions made solely on AI outputs."
      ]
    },
    {
      id: 9,
      title: "Payment and Subscription Terms",
      bullets: [
        "All services are billed according to the selected plan and pricing as communicated to the school or institution.",
        "Payments once made are non-refundable unless agreed under a specific refund clause.",
        "Subscription renewal and termination terms are governed under the School Agreement.",
        "Late payment beyond 30 days may result in access suspension."
      ]
    },
    {
      id: 10,
      title: "Limitation of Liability",
      subHeader: "UNDER NO CIRCUMSTANCES SHALL XTOWN TECHNOLOGIES PVT. LTD. BE LIABLE FOR:",
      bullets: [
        "Data loss due to user error, misuse, or third-party interference.",
        "Unavailability caused by internet issues, force majeure, or maintenance.",
        "Indirect or consequential damages including profit loss or data corruption."
      ],
      footer: "Total liability shall not exceed the total amount paid by the institution within the last 12 months."
    },
    {
      id: 11,
      title: "Suspension and Termination",
      intro: "Xtown Technologies reserves the right to suspend or terminate accounts if:",
      bullets: [
        "Users violate these Terms or misuse platform access.",
        "Institutions fail to maintain subscription payments or compliance standards.",
        "Platform misuse affects performance, integrity, or data security."
      ],
      footer: "Upon termination, institutional data will be deleted or returned within 90 days per the DPA."
    },
    {
      id: 12,
      title: "Confidentiality",
      intro: "Both Xtown Technologies and the institution agree to maintain strict confidentiality of proprietary, technical, or operational data shared during the course of engagement."
    },
    {
      id: 13,
      title: "Force Majeure",
      intro: "Xtown Technologies shall not be held responsible for service interruptions due to events beyond its control, including but not limited to natural disasters, network outages, cyberattacks, or government restrictions."
    },
    {
      id: 14,
      title: "Governing Law and Jurisdiction",
      intro: "These Terms shall be governed by and construed in accordance with the laws of India, with exclusive jurisdiction vested in the courts of Tamil Nadu."
    },
    {
      id: 15,
      title: "Amendments",
      intro: "Xtown Technologies reserves the right to amend these Terms at any time. Continued use of the platform constitutes acceptance of updated Terms."
    },
    {
      id: 16,
      title: "Contact Information",
      intro: "For legal, compliance, or support queries:",
      items: [
        { label: "Email", text: "legal@kiddoshadow.in" },
        { label: "Website", text: "www.kiddoshadow.in" }
      ]
    }
  ];

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
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tighter leading-none">
                Terms and <br />
                <span className="text-brand">Conditions</span>
              </h1>
              <p className="text-[#1F2937]/50 text-sm font-medium">
                Last Updated: February 9, 2026
              </p>
            </div>
          </div>

          {/* Introduction */}
          <section className="max-w-none">
            <p className="text-base text-[#1F2937]/80 leading-relaxed font-semibold">
              These Terms and Conditions ("Terms") govern the access and use of the <span className="text-brand font-black">Kiddo Shadow</span> software platform, mobile application, and related services provided by <span className="text-[#1F2937] font-bold underline decoration-brand/30">Xtown Technologies Pvt. Ltd.</span> ("Company", "We", "Us", "Our").
            </p>
            <div className="mt-4 p-4 rounded-xl bg-brand/5 border border-brand/10 text-brand font-black text-[10px] uppercase tracking-[0.2em] inline-block">
              By accessing or using our platform, you agree to comply with these Terms.
            </div>
          </section>

          {/* Dynamic Sections */}
          <div className="space-y-8">
            {sections.map((section) => (
              <section key={section.id} className="space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand text-white flex items-center justify-center font-black text-sm">
                    {section.id}
                  </div>
                  <h2 className="text-xl font-black tracking-tight">{section.title}</h2>
                </div>

                {section.intro && (
                  <p className="text-[#1F2937]/60 text-base font-medium ml-2">{section.intro}</p>
                )}

                {section.subHeader && (
                  <h5 className="text-[#1F2937] font-black text-[9px] uppercase tracking-[0.2em] ml-2 mt-1">{section.subHeader}</h5>
                )}

                <div className="grid gap-2">
                  {section.items ? (
                    section.items.map((item, i) => (
                      <div key={i} className="group p-4 rounded-2xl bg-white border border-[#FDBA74]/10 hover:border-brand/20 transition-all duration-300">
                        <div className="flex items-start gap-4">
                          <div className="w-1 h-1 rounded-full bg-brand mt-1.5" />
                          <div className="space-y-0.5">
                            <h4 className="text-base font-black text-[#1F2937] tracking-tight group-hover:text-brand transition-colors">{item.label}</h4>
                            <p className="text-sm text-[#1F2937]/60 leading-relaxed font-medium">{item.text}</p>
                          </div>
                        </div>
                      </div>
                    ))
                  ) : (
                    section.bullets && section.bullets.map((bullet, i) => (
                      <div key={i} className="group p-4 rounded-xl bg-white border border-[#FDBA74]/10 hover:border-brand/20 transition-all">
                        <div className="flex items-center gap-3">
                          <div className="w-6 h-6 rounded-lg bg-brand/5 flex items-center justify-center shrink-0">
                            <FileText size={12} className="text-brand" />
                          </div>
                          <p className="text-sm text-[#1F2937]/60 font-medium leading-relaxed">{bullet}</p>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {section.footer && (
                  <p className="p-6 rounded-2xl bg-brand/5 border border-brand/10 text-brand font-bold text-sm ml-2">
                    {section.footer}
                  </p>
                )}
              </section>
            ))}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default TermsAndConditions;
