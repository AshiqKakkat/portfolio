import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaShopify, FaReact, FaNodeJs, FaLaravel, FaWordpress, FaGitAlt, FaGithub, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { SiMongodb, SiTailwindcss, SiTypescript, SiExpress, SiInertia, SiRedux, SiThreedotjs, SiGreensock, SiFramer, SiBootstrap, SiRadixui, SiWoocommerce, SiJavascript } from 'react-icons/si';
import { X, Code2, ArrowRight } from 'lucide-react';

const technologies = [
  { name: 'Shopify', icon: FaShopify },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'Three.js', icon: SiThreedotjs },
  { name: 'GSAP', icon: SiGreensock },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'TypeScript', icon: SiTypescript },
];

const moreTechnologies = [
  { name: 'JavaScript', icon: SiJavascript },
  { name: 'Express.js', icon: SiExpress },
  { name: 'MongoDB', icon: SiMongodb },
  { name: 'Framer Motion', icon: SiFramer },
  { name: 'Inertia.js', icon: SiInertia },
  { name: 'Redux', icon: SiRedux },
  { name: 'WordPress', icon: FaWordpress },
  { name: 'WooCommerce', icon: SiWoocommerce },
  { name: 'PHP 8.2', icon: FaPhp },
  { name: 'HTML5', icon: FaHtml5 },
  { name: 'CSS3', icon: FaCss3Alt },
  { name: 'Bootstrap', icon: SiBootstrap },
  { name: 'Radix UI', icon: SiRadixui },
  { name: 'GitHub', icon: FaGithub },
  { name: 'Git', icon: FaGitAlt },
  { name: 'Lenis', icon: Code2 },
];

const processes = [
  {
    number: "01",
    title: "Understand",
    description: "I listen, learn and understand the problem, users and business goals."
  },
  {
    number: "02",
    title: "Plan",
    description: "I choose the right tech, architecture and approach."
  },
  {
    number: "03",
    title: "Build",
    description: "Clean, scalable and performance focused development."
  },
  {
    number: "04",
    title: "Refine",
    description: "I iterate, optimise and polish the details that matter."
  },
  {
    number: "05",
    title: "Ship",
    description: "Deliver, maintain and improve continuously."
  }
];

const TechAndProcess = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isModalOpen]);

  return (
    <section id="tech-process" className="relative w-full overflow-hidden bg-[#070B0A] text-text-main border-t border-white/5">
      
      {/* Background Subtle Arc Glow */}
      <div className="absolute right-0 top-0 w-[100vw] h-[100vw] lg:w-[80vw] lg:h-[80vw] max-w-[1400px] max-h-[1400px] border border-accent/10 rounded-full translate-x-[30%] -translate-y-[50%] opacity-40 shadow-[0_0_120px_rgba(82,242,138,0.03)] pointer-events-none"></div>

      <div className="relative w-full max-w-[1600px] mx-auto">
        
        {/* ================================================== */}
        {/* SECTION 01: TECHNOLOGIES                           */}
        {/* ================================================== */}
        <div id='skills' className="py-20 lg:py-28 px-[4vw] lg:px-[3vw] flex flex-col relative z-10">
          
          {/* Label */}
          <div className="flex items-center space-x-3 text-[12px] font-semibold tracking-[0.16em] uppercase mb-16 lg:mb-20">
            <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#52F28A]"></div>
            <span className="text-white">TECHNOLOGIES <span className="text-accent">I WORK WITH</span></span>
          </div>
          
          {/* Tech Marquee for Mobile */}
          <div className="flex lg:hidden overflow-hidden w-full py-8 -my-8 [mask-image:linear-gradient(to_right,transparent,black_5%,black_95%,transparent)]">
            <motion.div
              className="flex gap-8 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            >
              {[...technologies, ...moreTechnologies, ...technologies, ...moreTechnologies].map((tech, idx) => (
                <div key={`${tech.name}-${idx}`} className="flex flex-col items-center justify-center shrink-0 w-[90px] relative px-2">
                  <div className="text-white/40 mb-5 relative">
                    <tech.icon className="w-10 h-10 stroke-[0.5] relative z-10" />
                  </div>
                  <span className="text-[14px] text-text-muted font-medium text-center">
                    {tech.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Tech Grid for Desktop */}
          <div className="hidden lg:flex items-center lg:justify-between w-full py-8 -my-8">
            {technologies.map((tech) => (
              <div key={tech.name} className="flex flex-col items-center justify-center group cursor-pointer shrink-0 relative px-6">
                <motion.div 
                  className="text-white/40 group-hover:text-white transition-colors duration-500 mb-6 relative"
                  whileHover={{ y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <tech.icon className="w-[42px] h-[42px] stroke-[0.5] relative z-10" />
                  {/* Subtle hover glow behind icon */}
                  <div className="absolute -inset-4 bg-accent/0 group-hover:bg-accent/20 blur-xl transition-all duration-500 rounded-full z-0"></div>
                </motion.div>
                <span className="text-[15px] text-text-muted group-hover:text-white transition-colors duration-500 font-medium">
                  {tech.name}
                </span>
                {/* Subtle underline on hover */}
                <div className="h-px w-0 bg-white/20 group-hover:w-1/2 transition-all duration-500 mt-2"></div>
              </div>
            ))}
            
            {/* AND MORE Button */}
            <div className="flex flex-col items-center justify-center shrink-0 pl-10 border-l border-white/10">
              <div 
                className="flex flex-col items-center group cursor-pointer"
                onClick={() => setIsModalOpen(true)}
              >
                <span className="text-[11px] text-text-muted uppercase tracking-[0.2em] text-center mb-4 leading-tight font-medium">
                  AND<br/>MORE
                </span>
                <div className="w-12 h-12 rounded-full border border-accent flex items-center justify-center text-accent group-hover:bg-accent/10 transition-colors duration-500 relative overflow-hidden">
                  <span className="text-2xl font-light group-hover:rotate-90 transition-transform duration-500 origin-center">+</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-white/5"></div>

        {/* ================================================== */}
        {/* SECTION 02: HOW I WORK                             */}
        {/* ================================================== */}
        <div className="py-20 lg:py-28 px-[4vw] lg:px-[3vw] flex flex-col lg:flex-row gap-16 lg:gap-12 relative z-10">
          
          {/* Left Label & Headline */}
          <div className="lg:w-[35%] xl:w-[30%] shrink-0 pr-4">
            <div className="flex items-center space-x-3 text-[12px] font-semibold tracking-[0.16em] uppercase mb-12">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#52F28A]"></div>
              <span className="text-accent">HOW I WORK</span>
            </div>
            
            <h3 className="text-[44px] md:text-[50px] lg:text-[56px] font-bold leading-[1.0] tracking-[-0.04em] text-white max-w-[340px]">
              A simple<br/>
              process for<br/>
              great results<span className="text-accent">.</span>
            </h3>
          </div>
          
          {/* Process Columns */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-y-12 gap-x-0 border-t border-white/5 lg:border-t-0">
            {processes.map((process) => (
              <div 
                key={process.number} 
                className="flex flex-col group cursor-pointer pt-8 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-white/5 hover:border-accent transition-colors duration-500 relative"
              >
                {/* Background hover glow */}
                <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/[0.02] transition-colors duration-500 pointer-events-none"></div>

                <span className="text-[26px] lg:text-[28px] font-bold text-white group-hover:text-accent transition-colors duration-500 mb-6 font-mono tracking-tight">
                  {process.number}
                </span>
                <motion.div 
                  className="flex flex-col z-10"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <h4 className="text-[18px] lg:text-[20px] font-bold text-white group-hover:text-white/90 mb-3 transition-colors">
                    {process.title}
                  </h4>
                  <p className="text-[14px] lg:text-[15px] text-[#6F7773] leading-[1.6] max-w-[220px]">
                    {process.description}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>
          
        </div>

        {/* Horizontal Divider */}
        <div className="w-full h-px bg-white/5"></div>

        {/* ================================================== */}
        {/* SECTION 03: MY WORK IN INTERFACE                   */}
        {/* ================================================== */}
        <div className="py-20 lg:py-24 px-[4vw] lg:px-[3vw] flex flex-col lg:flex-row items-start lg:items-center justify-between gap-10 lg:gap-16 relative z-10">
          
          {/* Left: Headline */}
          <div className="lg:w-[45%] xl:w-[45%]">
            <div className="flex items-center space-x-3 text-[12px] font-semibold tracking-[0.16em] uppercase mb-6 lg:mb-8">
              <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#52F28A]"></div>
              <span className="text-accent">MY WORK IN INTERFACE</span>
            </div>
            <h3 className="text-[32px] md:text-[40px] lg:text-[44px] font-bold leading-[1.1] tracking-[-0.02em] text-white">
              Crafting clean<br className="hidden md:block"/>
              and conversion focused<br className="hidden md:block"/>
              e-commerce experiences.
            </h3>
          </div>

          {/* Middle: Description */}
          <div className="lg:w-[35%] xl:w-[35%]">
            <p className="text-[14px] lg:text-[15px] text-[#6F7773] leading-[1.7]">
              Here are a few interface previews from the Shopify themes and e-commerce experiences I've worked on. Each design is built with performance, usability, and real business growth in mind.
            </p>
          </div>

          {/* Right: Button */}
          <div className="lg:w-auto flex shrink-0 mt-4 lg:mt-0">
            <button className="flex items-center space-x-4 px-8 py-4 rounded-full border border-white/20 text-white text-[14px] font-medium hover:bg-white/5 hover:border-white/30 transition-all duration-300 group">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </div>
          
        </div>
      </div>
      
      {/* Hide scrollbar for the horizontal tech list */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>

      {/* Modal for "And More" Technologies */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-primary/80 backdrop-blur-xl"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="bg-[#080D0C] border border-white/10 rounded-[32px] p-8 lg:p-16 w-full max-w-[1200px] relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setIsModalOpen(false)}
                className="absolute top-6 right-6 lg:top-8 lg:right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-text-muted hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>
              
              <div className="flex items-center space-x-3 text-[12px] font-semibold tracking-[0.16em] uppercase mb-12 lg:mb-16">
                <div className="w-1.5 h-1.5 rounded-full bg-accent shadow-[0_0_8px_#52F28A]"></div>
                <span className="text-white">ADDITIONAL <span className="text-accent">TECHNOLOGIES</span></span>
              </div>
              
              <div className="flex flex-wrap gap-y-12 gap-x-8 justify-center lg:justify-between w-full py-6">
                {moreTechnologies.map((tech) => (
                  <div key={tech.name} className="flex flex-col items-center justify-center group cursor-pointer w-[100px] lg:w-auto relative px-2">
                    <motion.div 
                      className="text-white/40 group-hover:text-white transition-colors duration-500 mb-5 lg:mb-6 relative"
                      whileHover={{ y: -4 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <tech.icon className="w-10 h-10 lg:w-[42px] lg:h-[42px] stroke-[0.5] relative z-10" />
                      <div className="absolute -inset-4 bg-accent/0 group-hover:bg-accent/20 blur-xl transition-all duration-500 rounded-full z-0"></div>
                    </motion.div>
                    <span className="text-[14px] lg:text-[15px] text-text-muted group-hover:text-white transition-colors duration-500 font-medium text-center">
                      {tech.name}
                    </span>
                    <div className="h-px w-0 bg-white/20 group-hover:w-1/2 transition-all duration-500 mt-2"></div>
                  </div>
                ))}
              </div>
              
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
};

export default TechAndProcess;
