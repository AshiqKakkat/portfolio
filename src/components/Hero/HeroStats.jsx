import React from 'react';
import { motion } from 'framer-motion';

const stats = [
  { value: "2+", label: "Years Experience" },
  { value: "15+", label: "Projects Delivered" },
  { value: "Happy", label: "Clients & Teams" },
];

const HeroStats = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1 }}
      className="flex flex-wrap items-center gap-8 md:gap-16 lg:gap-24"
    >
      {stats.map((stat, i) => (
        <div key={i} className="flex items-center">
          <div className="flex flex-col">
            <span className="text-[20px] lg:text-[24px] font-bold text-white mb-1">{stat.value}</span>
            <span className="text-[12px] lg:text-[14px] text-text-muted">{stat.label}</span>
          </div>
          {i !== stats.length - 1 && (
            <div className="w-px h-8 bg-border-subtle ml-8 md:ml-16 lg:ml-24 hidden md:block"></div>
          )}
        </div>
      ))}
    </motion.div>
  );
};

export default HeroStats;
