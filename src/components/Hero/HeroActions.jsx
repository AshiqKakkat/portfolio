import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';

const HeroActions = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col sm:flex-row items-start sm:items-center gap-6 lg:gap-8 mt-10 lg:mt-12"
    >
      <a 
        href="#work" 
        className="flex items-center justify-between bg-transparent lg:bg-white text-white lg:text-black rounded-full lg:w-[200px] h-[58px] lg:px-6 font-bold text-[15px] hover:-translate-y-1 hover:shadow-xl hover:shadow-white/10 transition-all duration-300 group"
      >
        <span>View My Work</span>
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform duration-300" />
      </a>
      
      <button className="flex items-center space-x-4 group">
        <div className="w-[52px] h-[52px] lg:w-[58px] lg:h-[58px] rounded-full border-0 lg:border lg:border-border-subtle flex items-center justify-center bg-transparent group-hover:border-white/30 transition-colors duration-300">
          <Play className="w-4 h-4 text-white ml-1 fill-white opacity-80 group-hover:opacity-100 transition-opacity" />
        </div>
        <div className="text-left">
          <span className="block text-[14px] lg:text-[15px] font-medium text-white mb-0.5">Watch Intro</span>
          <span className="block text-[12px] lg:text-[13px] text-text-muted">30 seconds</span>
        </div>
      </button>
    </motion.div>
  );
};

export default HeroActions;
