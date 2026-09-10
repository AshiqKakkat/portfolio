import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { experiencesData } from './data';
import ExperienceTimeline from './ExperienceTimeline';
import ExperienceDetail from './ExperienceDetail';
import MountainImg from '../../assets/Mountain.png';
import { ArrowRight } from 'lucide-react';

const ExperienceSection = () => {
  const [activeId, setActiveId] = useState(experiencesData[0].id);
  const activeExperience = experiencesData.find(e => e.id === activeId) || experiencesData[0];

  return (
    <section id="experience" className="relative w-full bg-[#070B0A] py-20 md:py-32 overflow-hidden border-t border-white/5 font-sans">

      {/* Background Decorative Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Charcoal Gradient & Grain */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#111815_0%,#070B0A_100%)] opacity-80" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] mix-blend-overlay" />

        {/* Very Subtle Green Atmospheric Glow */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#54F28A] rounded-full blur-[150px] opacity-[0.015] -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#54F28A] rounded-full blur-[150px] opacity-[0.015] translate-x-1/3 translate-y-1/3" />

        {/* Vertical Grid Lines (Desktop) */}
        <div className="hidden lg:block absolute left-[30%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="hidden lg:block absolute left-[55%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        <div className="hidden lg:block absolute right-[7%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-white/5 to-transparent" />
        {/* Mountain Silhouette / Glowing Curve (Bottom Left) */}
        <div className="absolute bottom-0 left-0 w-full h-[300px] md:w-[45%] md:h-[60%] pointer-events-none z-0">
          
          {/* The Glowing Green Curve (Behind) */}
          <div className="absolute bottom-[-5%] left-[-10%] md:bottom-[-10%] md:left-[-20%] w-[110%] md:w-[120%] h-[110%] md:h-[120%] rounded-tr-[100%] border-t-[2px] border-r-[2px] border-[#54F28A]/40 bg-gradient-to-tr from-transparent via-[#54F28A]/5 to-transparent shadow-[inset_0_0_80px_rgba(84,242,138,0.05)] filter drop-shadow-[0_0_20px_rgba(84,242,138,0.2)]"></div>

          {/* The Mountain Graphic (In Front) */}
          <img 
            src={MountainImg} 
            alt="Dark Mountain Terrain" 
            className="absolute bottom-0 left-0 w-[110%] h-[110%] md:w-[120%] md:h-[120%] max-w-none object-contain object-left-bottom mix-blend-lighten opacity-90 z-10" 
          />
        </div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-[1600px]">

        {/* Section Label */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center space-x-4 mb-16 lg:mb-24"
        >
          <div className="w-2 h-2 rounded-full bg-[#54F28A] shadow-[0_0_8px_rgba(84,242,138,0.6)]" />
          <div className="text-[11px] md:text-[13px] uppercase tracking-[0.14em] font-medium flex items-center">
            <span className="text-[#68706C]">05 /&nbsp;</span>
            <span className="text-[#54F28A]">EXPERIENCE</span>
          </div>
          <div className="h-[1px] w-12 bg-white/10" />
        </motion.div>

        {/* Huge Background Number (Desktop) */}
        <div className="hidden lg:flex absolute top-0 right-[-5%] lg:right-[-8%] z-0 pointer-events-none select-none flex-col items-start">
          <div className="text-[200px] xl:text-[260px] font-bold leading-none tracking-tighter" style={{ color: 'rgba(255, 255, 255, 0.035)' }}>
            05
          </div>
          <div className="flex flex-col items-start ml-[60px] xl:ml-[80px] -mt-6">
            <div className="text-[11px] text-[#68706C] uppercase tracking-[0.2em] font-medium mb-6 leading-[1.6]">
              YEARS<br />OF GROWTH
            </div>
            <div className="w-[1px] h-[200px] bg-gradient-to-b from-white/20 to-transparent ml-[2px]" />
          </div>
        </div>

        {/* Main Grid Layout */}
        <div className="flex flex-col lg:flex-row relative z-10 w-full">

          {/* LEFT COLUMN (Intro) - 30% on Desktop */}
          <div className="w-full lg:w-[30%] pr-0 lg:pr-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-[48px] sm:text-[56px] md:text-[64px] xl:text-[76px] font-bold text-white leading-[0.92] tracking-[-0.055em] mb-8"
            >
              Experience <br />
              that builds <br />
              <span className="font-serif italic font-normal text-[#e6fcf0]">what’s next.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-[16px] md:text-[18px] text-[#969D99] leading-[1.6] max-w-[400px] mb-12"
            >
              A journey of turning ideas into real products, working across commerce and full-stack development, and continuously learning through every project.
            </motion.p>

            {/* Opportunity CTA */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center gap-6 group cursor-pointer"
            >
              <div className="w-[60px] h-[60px] md:w-[68px] md:h-[68px] rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#54F28A] group-hover:bg-[#54F28A]/5 transition-all duration-300">
                <ArrowRight className="w-5 h-5 text-white group-hover:text-[#54F28A] transform group-hover:translate-x-1 group-hover:-rotate-45 transition-all duration-300" />
              </div>
              <div className="flex flex-col">
                <span className="text-[11px] md:text-[12px] uppercase tracking-widest text-white font-medium mb-1 group-hover:text-[#54F28A] transition-colors">
                  Open to Opportunities
                </span>
                <span className="text-[13px] text-[#68706C]">
                  Let's build something great together.
                </span>
              </div>
            </motion.div>
          </div>

          {/* MIDDLE COLUMN (Timeline) - 25% on Desktop */}
          <div className="w-full lg:w-[25%] lg:px-6 hidden md:block">
            <ExperienceTimeline
              experiences={experiencesData}
              activeId={activeId}
              onSelect={setActiveId}
            />
          </div>

          {/* RIGHT COLUMN (Detail Card) - 33% on Desktop */}
          <div className="w-full lg:w-[33%] hidden md:block pl-0">
            <AnimatePresence mode="wait">
              <ExperienceDetail key={activeExperience.id} experience={activeExperience} />
            </AnimatePresence>
          </div>

          {/* MOBILE ACCORDION (Visible only on mobile < 768px) */}
          <div className="w-full md:hidden flex flex-col gap-6 mt-8">
            {experiencesData.map((exp) => {
              const isActive = activeId === exp.id;

              return (
                <div key={exp.id} className="flex flex-col border border-white/10 rounded-[14px] bg-[#0A0F0D] overflow-hidden">
                  <button
                    onClick={() => setActiveId(isActive ? null : exp.id)}
                    className="flex flex-col text-left p-6 w-full"
                  >
                    <div className="flex justify-between items-start w-full mb-4">
                      <span className="text-[10px] text-[#54F28A] uppercase tracking-widest font-medium">
                        {exp.period}
                      </span>
                      <div className={`w-1.5 h-1.5 rounded-full transition-colors ${isActive ? 'bg-[#54F28A] shadow-[0_0_8px_#54F28A]' : 'bg-white/20'}`} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="text-[13px] text-[#969D99]">{exp.company}</div>
                  </button>

                  <AnimatePresence>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="p-6 pt-0 border-t border-white/5">
                          <p className="text-[14px] text-[#969D99] leading-relaxed mb-6 mt-4">
                            {exp.description}
                          </p>
                          <div className="mb-6">
                            <h4 className="text-[10px] uppercase tracking-widest text-[#68706C] mb-3 font-semibold">Responsibilities</h4>
                            <ul className="space-y-2">
                              {exp.shortResponsibilities.map((resp, idx) => (
                                <li key={idx} className="flex items-start gap-2 text-[13px] text-[#969D99]">
                                  <span className="text-[#54F28A] mt-0.5">•</span>
                                  <span>{resp}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.slice(0, 6).map((tech, idx) => (
                              <span key={idx} className="px-2.5 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] text-[#969D99]">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>

        {/* BOTTOM STATS & QUOTE */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 md:mt-32 pt-10 border-t border-white/10 flex flex-col md:flex-row items-start md:items-center justify-between gap-10"
        >
          {/* Scroll Indicator (Left) */}
          <div className="hidden md:flex items-center gap-4 text-[#68706C] group">
            <div className="w-[1px] h-12 bg-white/10 relative">
              <div className="absolute top-0 left-[-3px] w-1.5 h-1.5 rounded-full bg-white group-hover:bg-[#54F28A] transition-colors animate-bounce" />
            </div>
            <span className="text-[9px] uppercase tracking-[0.2em] font-semibold w-12 leading-tight">
              Scroll<br />For More
            </span>
          </div>

          {/* Stats (Center) */}
          <div className="grid grid-cols-3 gap-4 md:gap-16 lg:gap-24 w-full md:w-auto">
            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">2+</span>
              <span className="text-[10px] md:text-[13px] text-[#969D99]">Years Experience</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">15+</span>
              <span className="text-[10px] md:text-[13px] text-[#969D99]">Projects Delivered</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl md:text-4xl font-bold text-white mb-1 md:mb-2">Multiple</span>
              <span className="text-[10px] md:text-[13px] text-[#969D99]">Clients & Teams</span>
            </div>
          </div>

          {/* Quote (Right) */}
          <div className="relative pl-6 border-l border-white/10 mt-6 md:mt-0">
            <p className="font-serif italic text-xl md:text-[24px] text-[#e6fcf0] max-w-[250px] leading-snug">
              “Consistent growth through meaningful work.”
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ExperienceSection;
