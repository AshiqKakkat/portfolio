import React from 'react';
import { motion } from 'framer-motion';

const ExperienceTimeline = ({ experiences, activeId, onSelect }) => {
  return (
    <div className="relative flex flex-col pt-4">
      {/* Vertical Timeline Track */}
      <div className="absolute left-[11px] top-4 bottom-0 w-[1px] bg-white/10 hidden md:block" />
      
      {/* Active Line Overlay (Animates based on selection) */}
      <motion.div 
        className="absolute left-[11px] top-4 w-[1px] bg-[#54F28A] hidden md:block"
        initial={{ height: 0 }}
        animate={{ 
          height: experiences.findIndex(e => e.id === activeId) * 120 + 40 // Approximation based on spacing
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <div className="flex flex-col gap-10 md:gap-14">
        {experiences.map((exp, index) => {
          const isActive = activeId === exp.id;
          
          return (
            <div 
              key={exp.id} 
              className="relative flex items-start gap-8 cursor-pointer group"
              onClick={() => onSelect(exp.id)}
              role="button"
              aria-selected={isActive}
            >
              {/* Timeline Node (Desktop) */}
              <div className="hidden md:flex flex-col items-center mt-1.5 z-10">
                <div className={`w-[23px] h-[23px] rounded-full flex items-center justify-center transition-all duration-300 ${isActive ? 'bg-[#111815] border border-[#54F28A]' : 'bg-[#0A0F0D] border border-white/20 group-hover:border-white/50'}`}>
                  <motion.div 
                    initial={false}
                    animate={{ 
                      scale: isActive ? 1 : 0.5, 
                      opacity: isActive ? 1 : 0.4,
                      backgroundColor: isActive ? '#54F28A' : '#ffffff' 
                    }}
                    className={`w-2 h-2 rounded-full ${isActive ? 'shadow-[0_0_10px_#54F28A]' : ''}`} 
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col w-full border-b border-white/5 pb-8 md:pb-0 md:border-none">
                <div className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#68706C] mb-2 font-medium">
                  {exp.period}
                </div>
                
                <h3 className={`text-lg md:text-xl font-bold mb-1 transition-colors duration-300 ${isActive ? 'text-white' : 'text-[#969D99] group-hover:text-white/80'}`}>
                  {exp.role}
                </h3>
                
                <div className="flex items-center gap-2 text-[13px] md:text-[14px] text-[#68706C]">
                  <span>{exp.company}</span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ExperienceTimeline;
