import React from 'react';
import { motion } from 'framer-motion';
import { 
  Brain, 
  BookOpen, 
  MessageSquare, 
  ClipboardCheck, 
  BarChart3, 
  Monitor,
  ShieldAlert
} from 'lucide-react';

const modules = [
  {
    title: "Syllabus-Trained AI Learning Assistant",
    description: "AI works only on school syllabus and teacher-uploaded content. No open internet usage. Safe and relevant learning support.",
    icon: Brain,
    color: "from-brand/20 to-peach/20",
    iconColor: "text-brand"
  },
  {
    title: "Digital Student Diary & Notes",
    description: "Organized digital space for homework, class notes, and daily academic tracking.",
    icon: BookOpen,
    color: "from-peach/20 to-brand/20",
    iconColor: "text-peach"
  },
  {
    title: "Teacher-Moderated Class Group Chat",
    description: "Only class-wise group chats. Teachers fully monitor and can reply.",
    icon: MessageSquare,
    badge: "No private student messaging",
    color: "from-brand/20 to-brand/10",
    iconColor: "text-brand"
  },
  {
    title: "Online Tests & Quizzes",
    description: "Easy-to-create tests with automatic grading and instant feedback.",
    icon: ClipboardCheck,
    color: "from-peach/20 to-peach/10",
    iconColor: "text-peach"
  },
  {
    title: "Attendance & Progress Tracking",
    description: "Real-time attendance with comprehensive academic progress reports.",
    icon: BarChart3,
    color: "from-brand/20 to-peach/20",
    iconColor: "text-brand"
  },
  {
    title: "Smart Classroom Integration",
    description: "Works with smart boards and classroom devices for enhanced teaching.",
    icon: Monitor,
    color: "from-peach/20 to-brand/20",
    iconColor: "text-peach"
  }
];

const Modules = () => {
  return (
    <section id="modules" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-peach/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto mb-16 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/5 border border-brand/10 text-brand text-[10px] font-black uppercase tracking-widest mb-6 md:mb-8"
          >
            Core Capabilities
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-5xl md:text-7xl font-black text-[#1F2937] mb-6 md:mb-8 tracking-tighter leading-[0.95]"
          >
            Everything Your <br />
            <span className="text-brand">School Needs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#1F2937]/50 text-base md:text-xl leading-relaxed max-w-2xl mx-auto"
          >
            A comprehensive platform designed for institutional excellence across CBSE, ICSE, and State Boards.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative p-8 md:p-10 rounded-[40px] bg-white border border-[#FDBA74]/10 shadow-sm hover:shadow-2xl hover:border-brand/30 transition-all duration-500"
            >
              {/* Card Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-brand/5 flex items-center justify-center mb-8 border border-brand/10 group-hover:scale-110 transition-transform`}>
                <item.icon className={`w-8 h-8 ${item.iconColor}`} />
              </div>

              {/* Card Content */}
              <h3 className="text-2xl font-black text-[#1F2937] mb-4 tracking-tight group-hover:text-brand transition-colors">
                {item.title}
              </h3>
              <p className="text-[#1F2937]/50 leading-relaxed text-sm md:text-base">
                {item.description}
              </p>

              {/* Special Badge for Chat */}
              {item.badge && (
                <div className="mt-8 flex items-center gap-2 px-4 py-2 rounded-xl bg-brand/5 border border-brand/10 w-fit">
                  <ShieldAlert className="w-4 h-4 text-brand" />
                  <span className="text-[10px] uppercase tracking-widest font-black text-brand">
                    {item.badge}
                  </span>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;
