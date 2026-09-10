import React from 'react';
import { motion } from 'framer-motion';

const Mantra = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.2 }}
      className="hidden xl:flex flex-col items-end absolute top-1/2 right-0 -translate-y-1/2 z-20"
    >
      <div className="w-1.5 h-1.5 bg-accent rounded-full mb-3 mr-1.5"></div>
      <div className="w-px h-16 bg-border-subtle mb-5 mr-2"></div>
      <div className="flex flex-col items-end text-[9px] text-text-muted uppercase tracking-[0.25em] space-y-1">
        <span>Build</span>
        <span>Learn</span>
        <span>Improve</span>
        <span>Repeat</span>
      </div>
    </motion.div>
  );
};

export default Mantra;
