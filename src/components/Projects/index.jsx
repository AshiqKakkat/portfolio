import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeader from './SectionHeader';
import ProjectFilters from './ProjectFilters';
import ProjectCarousel from './ProjectCarousel';
import ProjectsFooter from './ProjectsFooter';
import ProjectModal from './ProjectModal';
import { projectsData, filters } from './data';

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activeProject, setActiveProject] = useState(null);
  const scrollRef = React.useRef(null);

  const handleNext = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth : window.innerWidth / 4;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handlePrev = () => {
    if (scrollRef.current) {
      const scrollAmount = window.innerWidth < 768 ? window.innerWidth : window.innerWidth / 4;
      scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    }
  };

  // Filter projects based on the active filter
  const filteredProjects = projectsData.filter(project => 
    project.categories.includes(activeFilter)
  );

  return (
    <section id="work" className="relative w-full py-32 bg-[#070B0A] overflow-hidden text-[#F4F5F2]">
      {/* Subtle Black-to-Charcoal Gradient & Glow */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070B0A] via-[#0d1310] to-[#070B0A] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#54F28A]/[0.02] blur-[120px] rounded-full pointer-events-none z-0" />
      
      {/* Subtle Grid Lines matching other sections */}
      <div className="absolute left-[25%] guideline hidden lg:block" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}></div>
      <div className="absolute left-[50%] guideline hidden lg:block" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}></div>
      <div className="absolute left-[75%] guideline hidden lg:block" style={{ backgroundColor: 'rgba(255,255,255,0.03)' }}></div>

      <div className="relative w-full max-w-[1600px] mx-auto px-[4vw] lg:px-[3vw] z-10">
        
        {/* Top Section & Main Heading */}
        <SectionHeader />

        {/* Filters & Carousel Controls */}
        <ProjectFilters 
          filters={filters} 
          activeFilter={activeFilter} 
          setActiveFilter={setActiveFilter} 
          handleNext={handleNext}
          handlePrev={handlePrev}
        />

        {/* Horizontal Project Carousel */}
        <ProjectCarousel 
          projects={filteredProjects} 
          ref={scrollRef} 
          onProjectClick={setActiveProject} 
        />

        {/* Bottom Area */}
        <ProjectsFooter />

      </div>

      {/* Project Details Modal */}
      <ProjectModal 
        project={activeProject} 
        onClose={() => setActiveProject(null)} 
      />
    </section>
  );
};

export default ProjectsSection;
