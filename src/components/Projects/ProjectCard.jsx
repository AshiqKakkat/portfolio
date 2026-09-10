import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const ProjectCard = ({ project, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group relative w-full h-[460px] md:h-[480px] flex flex-col rounded-[14px] bg-[#0A0F0D] border border-white/5 hover:border-[#54F28A]/40 overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-[0_10px_30px_rgba(84,242,138,0.05)] cursor-pointer"
    >
      
      {/* IMAGE SECTION */}
      <div className="relative h-[220px] md:h-[240px] w-full overflow-hidden bg-[#111815] shrink-0">
        <img 
          src={project.image} 
          alt={project.title} 
          className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-[600ms] ease-out group-hover:scale-[1.04]"
          loading="lazy"
        />
        {/* Subtle overlay to blend top edge if needed */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-transparent opacity-50" />
        
        {/* Project Number */}
        <div className="absolute top-4 right-5 text-[13px] font-medium text-white/90 tracking-wider mix-blend-difference drop-shadow-md">
          {project.number}
        </div>
      </div>

      {/* CONTENT SECTION */}
      <div className="relative flex-1 p-5 md:p-6 flex flex-col">
        {/* Category */}
        <div className="text-[10px] md:text-[11px] font-medium text-[#68706C] uppercase tracking-[0.15em] mb-2">
          {project.category}
        </div>
        
        {/* Title & Arrow */}
        <div className="flex justify-between items-start mb-2.5">
          <h3 className="text-[19px] md:text-[21px] font-bold text-[#F4F5F2] tracking-tight leading-tight">
            {project.title}
          </h3>
          <ArrowUpRight 
            strokeWidth={1.5}
            className="w-5 h-5 text-white/50 group-hover:text-[#54F28A] group-hover:-translate-y-[4px] group-hover:translate-x-[4px] transition-all duration-300 ease-out flex-shrink-0" 
          />
        </div>

        {/* Description */}
        <p className="text-[13px] md:text-[14px] text-[#969D99] leading-relaxed line-clamp-2 mb-auto pr-4">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mt-4">
          {project.technologies.map((tech, idx) => (
            <span 
              key={idx} 
              className="text-[11px] text-white/50 group-hover:text-white/80 border border-white/10 px-3 py-1 rounded-full transition-colors duration-300 bg-white/[0.02]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
};

export default ProjectCard;
