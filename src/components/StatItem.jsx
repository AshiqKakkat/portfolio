import React from 'react';
import { motion } from 'framer-motion';

const StatItem = ({ label, subtext, value }) => {
  return (
    <div className="flex flex-col">
      <span className="text-xl font-bold">{value}</span>
      {subtext ? (
        <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{subtext}</span>
      ) : (
        <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">{label}</span>
      )}
    </div>
  );
};

export default StatItem;
