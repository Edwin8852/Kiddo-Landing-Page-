import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
import BrandModal from './BrandModal';

const Footer = () => {
  const [isBrandModalOpen, setIsBrandModalOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: "About Kiddo", href: "#" },
      { name: "Features", href: "#features" },
      { name: "Safety & Security", href: "#safety" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms & Conditions", href: "/terms-and-conditions" }
    ],
    contact: [
      { name: "info@xtown.in", icon: Mail, href: "mailto:info@xtown.in" },
      { name: "+91 90926 66288", icon: Phone, href: "tel:+919092666288" },
      { name: "+91 97525 40403", icon: Phone, href: "tel:+919752540403" },
      { name: "Coimbatore, Tamil Nadu", icon: MapPin, href: "#" }
    ],
    legal: [
      "Privacy Policy", "Terms & Conditions", "Acceptable Use Policy", 
      "Content Policy", "Cookie Policy", "DPA", "EULA", 
      "Payment & Refunds", "Legal Disclaimer"
    ]
  };

  return (
    <footer className="bg-[#0b0e14] pt-8 pb-4 relative overflow-hidden" data-footer-version="6">
      <BrandModal 
        isOpen={isBrandModalOpen} 
        onClose={() => setIsBrandModalOpen(false)} 
      />
      
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-brand/20 to-transparent" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-6">
          {/* Brand Column */}
          <div className="space-y-4">
            <div 
              onClick={() => setIsBrandModalOpen(true)}
              className="flex items-center gap-3 cursor-pointer group"
            >
              <div className="h-10 overflow-hidden transition-all duration-500 group-hover:scale-110">
                <img 
                  src="/kiddo_logo.png" 
                  alt="Kiddo Logo" 
                  className="h-full w-auto object-contain"
                />
              </div>
              <span className="text-white font-black text-xl tracking-tighter">KIDDO</span>
            </div>
            <p className="text-white/50 text-sm leading-relaxed max-w-sm">
              Intelligence-first educational platform designed for modern Indian schools. Secure, syllabus-aligned, and AI-powered.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-white/90 font-black uppercase tracking-widest text-sm">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map(link => (
                <li key={link.name}>
                  {link.href.startsWith('/') ? (
                    <Link to={link.href} className="text-white/40 hover:text-brand text-sm font-bold transition-colors">
                      {link.name}
                    </Link>
                  ) : (
                    <a href={link.href} className="text-white/40 hover:text-brand text-sm font-bold transition-colors">
                      {link.name}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-white/90 font-black uppercase tracking-widest text-sm">Contact Us</h4>
            <ul className="space-y-3">
              {footerLinks.contact.map(link => (
                <li key={link.name}>
                  <a href={link.href} className="flex items-center gap-3 text-white/40 hover:text-brand text-sm font-bold transition-colors">
                    <link.icon className="w-4 h-4 text-brand/60" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal Grid */}
          <div className="space-y-4">
            <h4 className="text-white/90 font-black uppercase tracking-widest text-sm">Legal</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
              {footerLinks.legal.map(item => (
                <Link 
                  key={item} 
                  to={item === "Privacy Policy" ? "/privacy-policy" : item === "Terms & Conditions" ? "/terms-and-conditions" : "#"} 
                  className="text-white/30 hover:text-white text-[11px] font-black uppercase tracking-widest transition-colors"
                >
                  {item}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/20 text-xs font-bold tracking-tight">
            © {currentYear} KIDDO Intelligence Platform. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <p className="text-white/10 text-[10px] font-black uppercase tracking-[0.2em]">
              Powered by Xtown
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
