import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink } from 'lucide-react';
import { FiGithub } from 'react-icons/fi';

const ProjectModal = ({ project, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [project]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:px-8 py-8 md:py-12">
        {/* Backdrop */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#070B0A]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Content */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto scrollbar-hide bg-[#0A0F0D] border border-white/10 rounded-[20px] shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex flex-col md:flex-row z-10"
        >
          {/* Close Button */}
          <button 
            onClick={onClose}
            className="absolute top-3 right-3 md:top-6 md:right-6 z-20 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-full bg-black/50 text-white/70 hover:text-white hover:bg-[#54F28A]/20 transition-colors border border-white/10"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 md:w-5 md:h-5" />
          </button>

          {/* Left: Image Area */}
          <div className="w-full md:w-1/2 h-[220px] sm:h-[280px] md:h-auto md:min-h-[400px] bg-[#111815] relative shrink-0">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F0D] via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-[#0A0F0D]/20" />
            <div className="absolute top-4 left-4 md:top-6 md:left-6 text-white/90 text-xs md:text-sm font-medium tracking-widest drop-shadow-md mix-blend-difference">
              {project.number}
            </div>
          </div>

          {/* Right: Content Area */}
          <div className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-14 flex flex-col bg-gradient-to-br from-[#0A0F0D] to-[#070B0A]">
            <div className="text-[10px] md:text-[12px] text-[#54F28A] uppercase tracking-[0.2em] mb-3 md:mb-4 font-semibold">
              {project.category}
            </div>
            
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-4 md:mb-6 leading-[1.1]">
              {project.title}
            </h2>
            
            <p className="text-[14px] md:text-[16px] text-[#969D99] leading-relaxed mb-6 md:mb-8">
              {project.description}
            </p>
            
            <div className="mb-8 md:mb-12">
              <h4 className="text-[10px] md:text-[11px] uppercase tracking-widest text-[#68706C] mb-3 md:mb-4 font-semibold">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span 
                    key={idx} 
                    className="text-[12px] font-medium text-white/80 border border-white/10 bg-white/5 px-4 py-2 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-auto pt-6 md:pt-8 border-t border-white/5">
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} // Prevent actual navigation for placeholder
                className="flex items-center justify-center gap-2 bg-[#54F28A] text-[#070B0A] px-6 py-3 md:px-7 md:py-3.5 rounded-full font-bold text-[13px] md:text-[14px] hover:bg-[#9AFFB5] transition-colors w-full sm:w-auto"
              >
                <span>View Live Site</span>
                <ExternalLink className="w-4 h-4" />
              </a>
              <a 
                href="#" 
                onClick={(e) => e.preventDefault()} // Prevent actual navigation for placeholder
                className="flex items-center justify-center gap-2 bg-transparent text-white border border-white/20 px-6 py-3 md:px-7 md:py-3.5 rounded-full font-medium text-[13px] md:text-[14px] hover:bg-white/5 transition-colors w-full sm:w-auto"
              >
                <FiGithub className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProjectModal;
