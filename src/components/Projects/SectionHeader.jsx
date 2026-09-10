import React from 'react';
import { motion } from 'framer-motion';
import ProjectRobotHead from './ProjectRobotHead';

const SectionHeader = () => {
  return (
    <div className="relative w-full pt-12 pb-10 flex flex-col md:flex-row justify-between items-start">
      
      {/* BACKGROUND SECTION NUMBER */}
      <div className="absolute top-0 right-0 lg:right-12 hidden md:flex flex-col items-end pointer-events-none z-0">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.3 }}
          className="text-[190px] lg:text-[230px] font-bold leading-none tracking-tighter"
          style={{ color: 'rgba(255, 255, 255, 0.045)' }}
        >
          04
        </motion.div>
        <div className="text-[11px] lg:text-[12px] uppercase tracking-[0.2em] text-[#68706C] mt-2 mr-4">
          FEATURED<br/>WORK
        </div>
      </div>

      {/* LEFT CONTENT */}
      <div className="relative z-10 w-full max-w-[700px]">
        
        {/* EYEBROW */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-3 mb-10"
        >
          <div className="w-2 h-2 rounded-full bg-[#54F28A] shadow-[0_0_8px_rgba(84,242,138,0.6)]" />
          <div className="text-[11px] md:text-[13px] uppercase tracking-[0.14em] font-medium flex items-center">
            <span className="text-[#68706C]">04 /&nbsp;</span>
            <span className="text-[#54F28A]">PROJECTS</span>
            <div className="w-8 h-[1px] bg-[#68706C]/50 ml-4" />
          </div>
        </motion.div>

        {/* MAIN HEADING */}
        <div className="mb-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-5xl md:text-[72px] lg:text-[82px] font-bold tracking-[-0.055em] leading-[0.92] text-white"
          >
            Selected <span className="font-serif italic font-normal text-[#9AFFB5]">work</span>
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-5xl md:text-[72px] lg:text-[82px] font-bold tracking-[-0.055em] leading-[0.92] text-white"
          >
            that creates impact.
          </motion.h2>
        </div>

        {/* DESCRIPTION */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-[17px] md:text-[19px] leading-[1.5] text-[#969D99] max-w-[600px]"
        >
          A collection of projects where design, performance, and functionality come together to solve real business problems.
        </motion.p>
      </div>

      {/* 3D ROBOT HEAD IN THE EMPTY SPACE */}
      <ProjectRobotHead />

      {/* RIGHT TOP META */}
      <motion.div 
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="hidden md:flex flex-col mt-20 relative z-10"
      >
        <div className="text-[11px] lg:text-[12px] uppercase tracking-[0.14em] text-[#68706C] leading-relaxed">
          FROM IDEAS<br/>TO REAL PRODUCTS
        </div>
        <div className="w-8 h-[1px] bg-[#68706C]/50 mt-3" />
      </motion.div>

    </div>
  );
};

export default SectionHeader;
