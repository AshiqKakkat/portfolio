import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import bagImage from '../assets/shopify_3d_bag.png';
import RobotFollower from './RobotFollower';

const services = [
  {
    id: "01",
    title: "Headless Commerce",
    description: "Modern, high-performance Shopify storefronts with Hydrogen, GraphQL, and custom integrations.",
    category: "SHOPIFY HYDROGEN",
    cardTitle: "Headless Commerce",
    cardDesc: "Modern, scalable e-commerce experiences with Shopify Hydrogen, Storefront API, GraphQL, and custom tooling."
  },
  {
    id: "02",
    title: "Shopify Development",
    description: "Custom themes, app integrations, and scalable e-commerce solutions.",
    category: "SHOPIFY LIQUID",
    cardTitle: "Custom Shopify",
    cardDesc: "End-to-end theme development, custom app integration, and conversion rate optimization."
  },
  {
    id: "03",
    title: "Full-Stack Applications",
    description: "End-to-end web apps using the MERN stack and Laravel.",
    category: "WEB DEVELOPMENT",
    cardTitle: "Scalable Web Apps",
    cardDesc: "Robust full-stack applications with React, Node.js, Express, MongoDB, and Laravel."
  },
  {
    id: "04",
    title: "UI Engineering",
    description: "Interactive, responsive, and pixel-perfect user interfaces.",
    category: "FRONTEND ENGINEERING",
    cardTitle: "Pixel-Perfect UI",
    cardDesc: "Creating beautiful, accessible, and high-performance user interfaces with modern web technologies."
  },
  {
    id: "05",
    title: "Performance & UX",
    description: "Optimized, accessible, and user-focused experiences.",
    category: "OPTIMIZATION",
    cardTitle: "Speed & Accessibility",
    cardDesc: "Improving Core Web Vitals, accessibility standards, and overall user experience metrics."
  }
];

const Services = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="services" className="relative w-full max-w-[1600px] mx-auto px-[4vw] lg:px-[3vw] py-24 lg:py-32 flex flex-col lg:flex-row gap-12 lg:gap-8 bg-primary text-text-main">
      
      {/* Huge Background Number (Desktop) */}
      <div className="hidden lg:flex absolute top-0 right-4 lg:right-12 z-0 pointer-events-none select-none flex-col items-end">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="text-[190px] xl:text-[240px] font-bold leading-none tracking-tighter" 
          style={{ color: 'rgba(255, 255, 255, 0.035)' }}
        >
          03
        </motion.div>
        <div className="text-[11px] lg:text-[12px] uppercase tracking-[0.2em] text-[#68706C] mt-2 mr-4">
          CORE<br/>SERVICES
        </div>
      </div>

      {/* Left Column: Intro */}
      <div className="lg:w-[35%] flex flex-col pr-0 lg:pr-8">
        <div className="flex items-center space-x-3 text-accent text-[11px] font-semibold tracking-[0.2em] uppercase mb-10">
          <div className="w-2 h-2 rounded-full bg-accent"></div>
          <span>03 / WHAT I DO</span>
        </div>
        
        <h2 className="text-[40px] md:text-[50px] lg:text-[56px] font-bold leading-[1.1] mb-8 text-white tracking-tight">
          Turning ideas<br/>
          into impactful<br/>
          <span className="font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-[#9AFFB5] via-[#57F287] to-[#1d9e46]">
            digital products.
          </span>
        </h2>
        
        <p className="text-text-muted leading-relaxed mb-8 max-w-md text-[16px] lg:text-[17px]">
          I help businesses build fast, scalable, and beautiful digital experiences — from headless commerce storefronts to full-stack web applications. Each project is a chance to solve real problems with clean code and great design.
        </p>
        
        <RobotFollower />
        
        <div className="flex items-center space-x-6 cursor-pointer group mt-auto pt-8">
          <div className="w-14 h-14 rounded-full border border-border-subtle flex items-center justify-center group-hover:border-accent transition-colors duration-500 shrink-0">
            <ArrowRight className="w-5 h-5 text-white group-hover:text-accent group-hover:translate-x-1 transition-all duration-300" />
          </div>
          <div className="flex flex-col justify-center">
            <span className="text-[10px] text-text-muted uppercase tracking-[0.2em] mb-1 font-semibold">LET'S WORK TOGETHER</span>
            <span className="text-white text-[13px] font-medium text-text-muted">Turn your idea into reality.</span>
          </div>
        </div>
      </div>

      {/* Middle Column: Interactive Service List */}
      <div className="lg:w-[35%] flex flex-col border-t lg:border-t-0 lg:border-l border-border-subtle pl-0 lg:pl-10 pt-10 lg:pt-0">
        <div className="flex flex-col w-full relative">
          {/* Animated active border */}
          <div className="hidden lg:block absolute left-[-41px] top-0 bottom-0 w-[2px] bg-border-subtle z-0"></div>
          <motion.div 
            className="hidden lg:block absolute left-[-41px] w-[2px] bg-accent z-10"
            initial={false}
            animate={{ 
              top: `${(activeIndex * 100) / services.length}%`, 
              height: `${100 / services.length}%` 
            }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />

          {services.map((service, index) => (
            <div 
              key={service.id}
              onMouseEnter={() => setActiveIndex(index)}
              onClick={() => setActiveIndex(index)}
              className={`relative border-b border-border-subtle py-8 lg:py-10 flex flex-col group cursor-pointer transition-colors duration-500 last:border-b-0`}
            >
              <div className="flex items-start w-full">
                {/* Mobile active indicator */}
                <motion.div 
                  className="lg:hidden absolute left-[-16px] top-0 bottom-0 w-[2px] bg-accent"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0 }}
                />

                <span className={`text-[16px] font-medium font-mono w-12 pt-1 transition-colors duration-500 ${activeIndex === index ? 'text-accent' : 'text-text-muted'}`}>
                  {service.id}
                </span>
                
                <div className="flex-1 pr-4 lg:pr-8">
                  <h3 className={`text-[20px] md:text-[22px] font-medium mb-3 transition-all duration-500 ${activeIndex === index ? 'text-white lg:translate-x-2' : 'text-white/80 group-hover:text-white lg:group-hover:translate-x-1'}`}>
                    {service.title}
                  </h3>
                  <p className={`text-[14px] leading-relaxed transition-colors duration-500 ${activeIndex === index ? 'text-text-muted' : 'text-text-muted/60'}`}>
                    {service.description}
                  </p>
                </div>
                
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center shrink-0 transition-all duration-500 mt-2 ${activeIndex === index ? 'border-accent' : 'border-border-subtle group-hover:border-white/30'}`}>
                  <ArrowRight className={`w-5 h-5 transition-transform duration-500 ${activeIndex === index ? 'text-accent -rotate-45' : 'text-white group-hover:-rotate-45'}`} />
                </div>
              </div>

              {/* Mobile Inline Content (Accordion) */}
              <AnimatePresence>
                {activeIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="lg:hidden w-full overflow-hidden"
                  >
                    <div className="pt-8 pb-2">
                      <div className="glass-card rounded-[24px] p-6 sm:p-8 w-full relative overflow-hidden bg-secondary/60 border border-border-subtle">
                        {/* Background Glow */}
                        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] bg-accent/15 blur-[60px] rounded-full z-0"></div>
                        
                        {/* Header */}
                        <div className="relative z-10 flex justify-between items-center mb-6 text-[10px] uppercase tracking-[0.2em] font-semibold">
                          <div className="flex items-center space-x-2 text-text-muted">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            <span>FEATURED FOCUS</span>
                          </div>
                        </div>
                        
                        {/* Image */}
                        <div className="relative z-10 flex justify-center mb-6 w-full">
                          <img 
                            src={bagImage} 
                            alt="Featured Item" 
                            className="w-full max-w-[200px] h-auto object-contain drop-shadow-2xl filter brightness-110"
                          />
                        </div>
                        
                        {/* Details */}
                        <div className="relative z-10">
                          <span className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold mb-2 block">
                            {service.category}
                          </span>
                          <h4 className="text-[28px] font-serif italic text-white leading-tight mb-3 font-light">
                            {service.cardTitle}
                          </h4>
                          <p className="text-[13px] text-text-muted leading-relaxed mb-6">
                            {service.cardDesc}
                          </p>
                          
                          <div className="flex items-center space-x-3 text-[12px] text-white font-semibold uppercase tracking-[0.05em] w-fit group/btn cursor-pointer hover:text-accent transition-colors duration-300">
                            <span>View Case Study</span>
                            <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

      {/* Right Column: Featured Focus Card (Desktop Only) */}
      <div className="hidden lg:flex lg:w-[30%] mt-8 lg:mt-0 lg:pl-10 flex-col">
        <div className="glass-card rounded-[24px] p-8 lg:p-10 w-full relative overflow-hidden group bg-secondary/60 h-full flex flex-col border border-border-subtle">
          {/* Background Glow */}
          <div className="absolute top-[30%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[250px] h-[250px] bg-accent/15 blur-[80px] rounded-full z-0 transition-opacity duration-1000"></div>
          
          {/* Header */}
          <div className="relative z-10 flex justify-between items-center mb-8 text-[10px] uppercase tracking-[0.2em] font-semibold">
            <div className="flex items-center space-x-2 text-text-muted">
              <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
              <span>FEATURED FOCUS</span>
            </div>
            <span className="text-text-muted tabular-nums">{services[activeIndex].id} / 05</span>
          </div>
          
          {/* Image container */}
          <div className="relative z-10 flex-1 flex items-center justify-center mb-10 w-full">
            <AnimatePresence mode="wait">
              <motion.img 
                key={activeIndex}
                src={bagImage} 
                alt="Featured Item" 
                className="w-full max-w-[280px] h-auto object-contain drop-shadow-2xl filter brightness-110"
                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, y: -10 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              />
            </AnimatePresence>
          </div>
          
          {/* Bottom content */}
          <div className="relative z-10 mt-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <span className="text-[10px] text-text-muted uppercase tracking-[0.2em] font-bold mb-3 block">
                  {services[activeIndex].category}
                </span>
                <h4 className="text-[32px] lg:text-[36px] font-serif italic text-white leading-tight mb-4 font-light">
                  {services[activeIndex].cardTitle}
                </h4>
                <p className="text-[14px] text-text-muted leading-relaxed mb-8 max-w-[90%]">
                  {services[activeIndex].cardDesc}
                </p>
                
                <div className="flex items-center space-x-3 text-[12px] text-white font-semibold uppercase tracking-[0.05em] cursor-pointer hover:text-accent transition-colors duration-300 w-fit group/btn">
                  <span>View Case Study</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Services;
