import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const ProjectsFooter = () => {
  return (
    <div className="relative w-full mt-24 mb-12 flex flex-col md:flex-row items-center justify-between gap-12 z-10">
      
      {/* SCROLL FOR MORE (Desktop) */}
      <div className="hidden md:flex items-center space-x-4 w-[220px]">
        <div className="relative flex flex-col items-center">
          <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent relative">
            <motion.div 
              animate={{ y: [0, 48, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_rgba(255,255,255,0.8)]"
            />
          </div>
        </div>
        <div className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-[#68706C] leading-loose">
          SCROLL<br/>FOR MORE
        </div>
      </div>

      {/* CENTER QUOTE */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="flex-1 flex items-center justify-center w-full"
      >
        <div className="hidden md:block w-12 lg:w-24 h-[1px] bg-white/10 mr-6" />
        <h3 className="font-serif italic text-[24px] md:text-[28px] text-[#F4F5F2]/90 text-center tracking-wide">
          “Building digital products that people love to use.”
        </h3>
        <div className="hidden md:block w-12 lg:w-24 h-[1px] bg-white/10 ml-6" />
      </motion.div>

      {/* VIEW ALL CTA */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="flex justify-center md:justify-end w-full md:w-[220px]"
      >
        <a 
          href="https://github.com/AshiqKakkat" 
          target="_blank" 
          rel="noreferrer"
          className="group flex items-center justify-center w-full md:w-[220px] h-[56px] rounded-full border border-white/20 bg-transparent text-[#F4F5F2] font-medium text-[15px] hover:border-[#54F28A]/80 hover:shadow-[0_0_20px_rgba(84,242,138,0.15)] hover:text-[#54F28A] transition-all duration-300"
        >
          <span className="mr-3">View All Projects</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
        </a>
      </motion.div>
    </div>
  );
};

export default ProjectsFooter;
