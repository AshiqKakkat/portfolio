import React from 'react';
import { motion } from 'framer-motion';

const ScrollIndicator = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="hidden md:flex items-end absolute bottom-12 left-0 lg:-left-2 z-20 h-32"
    >
      <div className="relative h-full w-px bg-border-subtle flex flex-col justify-end items-center mr-4">
        {/* Floating dot animation */}
        <motion.div 
          animate={{ y: [0, 20, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="w-1.5 h-1.5 bg-white rounded-full absolute top-0"
        ></motion.div>
      </div>
      <div className="text-[10px] text-text-muted uppercase tracking-[0.15em] leading-[1.6]">
        SCROLL<br/>TO EXPLORE
      </div>
    </motion.div>
  );
};

export default ScrollIndicator;
