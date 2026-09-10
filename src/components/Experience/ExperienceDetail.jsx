import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ExperienceDetail = ({ experience }) => {
  const [showFull, setShowFull] = useState(false);

  // Reset full view when switching roles
  useEffect(() => {
    setShowFull(false);
  }, [experience.id]);

  return (
    <motion.div 
      key={experience.id}
      initial={{ opacity: 0, x: 15 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -15 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative w-full h-[550px] lg:h-[600px] rounded-[14px] bg-[#0A0F0D] border border-white/5 overflow-hidden flex flex-col"
    >
      {/* Abstract Tech Visual Header */}
      <div className="relative w-full h-[180px] md:h-[220px] bg-[#111815] overflow-hidden shrink-0 flex items-center justify-center">
        
        {/* Subtle Green Glow */}
        <div className="absolute inset-0 bg-[#54F28A] opacity-[0.03] blur-3xl rounded-full" />
        
        {/* Geometric Perspective Grid / Code Snippet Hint */}
        <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(84,242,138,0.03)_50%)] bg-[length:100%_4px] pointer-events-none transform -skew-y-3 scale-110" />
        <div className="absolute left-0 right-0 h-[1px] bg-white/10 top-1/2 transform -skew-y-3" />
        <div className="absolute left-1/3 top-0 bottom-0 w-[1px] bg-white/5 transform skew-x-12" />

        {/* Header Tags */}
        <div className="absolute top-5 left-5 md:top-6 md:left-6 flex items-center gap-2 z-10">
          <div className="w-1.5 h-1.5 rounded-full bg-[#54F28A] shadow-[0_0_8px_rgba(84,242,138,0.8)]" />
          <span className="text-[10px] md:text-[11px] uppercase tracking-widest text-white/80 font-medium">
            {experience.current ? "Current Role" : "Past Role"}
          </span>
        </div>
        
        <div className="absolute top-5 right-5 md:top-6 md:right-6 z-10">
          <span className="text-[10px] md:text-[11px] uppercase tracking-[0.15em] text-[#68706C] font-medium">
            {experience.period}
          </span>
        </div>

        {/* Company Name / Logo Placeholder (Abstract representation) */}
        <div className="relative z-10 flex flex-col items-center mt-6">
          {/* 
            You can replace this div with your uploaded logos! 
            Example: <img src={experience.logo} alt={experience.company} className="h-12 w-auto mb-4 mix-blend-screen" />
          */}
          <div className="text-3xl md:text-5xl font-bold tracking-tighter text-white/10 select-none">
            {experience.company.split(' ')[0].toUpperCase()}
          </div>
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] to-transparent z-0" />
      </div>

      {/* Content Body */}
      <div 
        data-lenis-prevent="true"
        className="relative flex-1 p-6 md:p-8 lg:p-10 flex flex-col bg-gradient-to-br from-[#0A0F0D] to-[#070B0A] overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
      >
        
        {/* Role & Company */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-[32px] font-bold text-white mb-2 leading-[1.1] tracking-tight">
            {experience.role}
          </h2>
          <div className="text-[14px] md:text-[16px] text-[#969D99] font-medium flex items-center gap-2">
            <span>{experience.company}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-[14px] md:text-[15px] text-[#969D99] leading-relaxed mb-8">
          {experience.description}
        </p>

        {/* Responsibilities */}
        <div className="mb-8 flex-1">
          <h4 className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#68706C] mb-4 font-semibold">
            Key Responsibilities
          </h4>
          
          <ul className="space-y-3">
            {(showFull ? experience.responsibilities : experience.shortResponsibilities).map((resp, idx) => (
              <li key={idx} className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 rounded-full bg-[#54F28A]/60 mt-1.5 shrink-0" />
                <span className="text-[13px] md:text-[14px] text-[#969D99] leading-relaxed">
                  {resp}
                </span>
              </li>
            ))}
          </ul>

          {!showFull && (
            <button 
              onClick={() => setShowFull(true)}
              className="mt-6 flex items-center gap-2 text-[11px] md:text-[12px] uppercase tracking-widest text-white/60 hover:text-white transition-colors group"
            >
              <span>View Full Role</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          )}
        </div>

        {/* Tech Tags */}
        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech, idx) => (
              <span 
                key={idx} 
                className="px-3 py-1.5 rounded-full border border-white/10 bg-white/5 text-[11px] md:text-[12px] text-[#969D99]"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </motion.div>
  );
};

export default ExperienceDetail;
