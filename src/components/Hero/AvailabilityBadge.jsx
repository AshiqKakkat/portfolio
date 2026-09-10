import React from 'react';
import { motion } from 'framer-motion';

const AvailabilityBadge = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="inline-flex items-center space-x-2 border border-border-subtle bg-secondary/80 backdrop-blur-md rounded-full px-3 py-1.5 mb-6 md:mb-8"
    >
      <div className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-40"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
      </div>
      <span className="text-[12px] md:text-[14px] text-text-muted font-medium tracking-wide">Available for opportunities</span>
    </motion.div>
  );
};

export default AvailabilityBadge;
