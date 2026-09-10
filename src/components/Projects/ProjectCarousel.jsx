import React, { forwardRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ProjectCard from './ProjectCard';

const ProjectCarousel = forwardRef(({ projects, onProjectClick }, ref) => {
  return (
    <div className="relative w-full z-20">
      <div 
        ref={ref}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-12 pt-4 px-2 -mx-2"
        style={{ scrollBehavior: 'smooth' }}
      >
        <AnimatePresence mode="popLayout">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.05, 
                type: "spring", 
                stiffness: 260, 
                damping: 20 
              }}
              className="flex-none w-full md:w-[calc(50%-12px)] lg:w-[calc(25%-18px)] snap-start"
            >
              <ProjectCard 
                project={project} 
                onClick={() => onProjectClick(project)} 
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
});

ProjectCarousel.displayName = 'ProjectCarousel';

export default ProjectCarousel;
