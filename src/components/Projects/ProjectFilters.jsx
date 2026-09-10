import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const ProjectFilters = ({ filters, activeFilter, setActiveFilter, handlePrev, handleNext }) => {
  return (
    <div className="relative z-10 w-full mt-12 mb-10 flex flex-col md:flex-row justify-end items-start md:items-center gap-8">
      
      {/* FILTERS */}
      <div className="flex flex-wrap items-center gap-2 md:gap-4 overflow-x-auto pb-4 md:pb-0 scrollbar-hide">
        {filters.map((filter) => (
          <button
            key={filter}
            onClick={() => setActiveFilter(filter)}
            className={`
              relative text-[13px] md:text-[14px] font-medium tracking-wide whitespace-nowrap transition-all duration-300
              ${activeFilter === filter 
                ? 'text-[#54F28A] px-5 py-2' 
                : 'text-[#969D99] hover:text-white px-3 py-2'}
            `}
          >
            {activeFilter === filter && (
              <motion.div 
                layoutId="activeFilterPill"
                className="absolute inset-0 rounded-full border border-[#54F28A]/40 bg-[#54F28A]/5"
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}
            <span className="relative z-10">{filter}</span>
          </button>
        ))}
      </div>

      {/* CAROUSEL CONTROLS */}
      <div className="flex items-center space-x-4 ml-auto md:ml-8">
        <button 
          onClick={handlePrev}
          aria-label="Previous Projects"
          className="w-12 h-12 md:w-[56px] md:h-[56px] rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-white/5 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 md:w-5 md:h-5 text-[#969D99] group-hover:text-white transition-colors" />
        </button>
        <button 
          onClick={handleNext}
          aria-label="Next Projects"
          className="w-12 h-12 md:w-[56px] md:h-[56px] rounded-full border border-[#54F28A]/40 shadow-[0_0_15px_rgba(84,242,138,0.1)] flex items-center justify-center text-white hover:bg-[#54F28A]/10 hover:shadow-[0_0_20px_rgba(84,242,138,0.2)] transition-all group"
        >
          <ArrowRight className="w-4 h-4 md:w-5 md:h-5 text-[#54F28A]" />
        </button>
      </div>

    </div>
  );
};

export default ProjectFilters;
