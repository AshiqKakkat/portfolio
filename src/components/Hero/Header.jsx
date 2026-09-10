import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import LogoImg from '../../assets/image.png';

const Header = () => {
  return (
    <motion.header 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
      className="absolute top-0 left-0 w-full z-50 flex items-center justify-center h-[80px] lg:h-[90px]"
    >
      <div className="w-full max-w-[1600px] mx-auto px-[4vw] lg:px-[3vw] flex items-center justify-between">
      <div className="flex items-center">
        <a href="#home" className="flex items-center">
          <img src={LogoImg} alt="Mohammed Ashiq K Logo" className="h-[64px] lg:h-[80px] w-auto object-contain" />
        </a>
        <div className="w-px h-5 bg-border-subtle ml-6 hidden md:block"></div>
      </div>

      {/* Center: Navigation */}
      <nav className="hidden md:flex items-center space-x-8 text-[14px] lg:text-[16px] font-medium text-text-muted">
        <a href="#home" className="text-white relative group">
          Home
          <span className="absolute -bottom-[15px] left-1/2 w-[5px] h-[5px] bg-white rounded-full transform -translate-x-1/2"></span>
        </a>
        <a href="#about" className="hover:text-white transition-colors duration-300">About</a>
        <a href="#work" className="hover:text-white transition-colors duration-300">Work</a>
        <a href="#skills" className="hover:text-white transition-colors duration-300">Skills</a>
        <a href="#experience" className="hover:text-white transition-colors duration-300">Experience</a>
        <a href="#contact" className="hover:text-white transition-colors duration-300">Contact</a>
      </nav>

      {/* Right: CTA */}
      <div className="flex items-center">
        <a 
          href="#contact" 
          className="flex items-center justify-between border border-border-subtle rounded-full h-[40px] lg:h-[46px] pl-5 pr-2 w-[130px] text-white text-sm hover:bg-white/5 transition-colors duration-300 group"
        >
          <span>Let's Talk</span>
          <div className="w-[28px] h-[28px] rounded-full flex items-center justify-center bg-transparent group-hover:bg-white/10 transition-colors">
             <ArrowRight className="w-3.5 h-3.5" />
          </div>
        </a>
      </div>
      </div>
    </motion.header>
  );
};

export default Header;
