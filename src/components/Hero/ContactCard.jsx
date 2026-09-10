import React from 'react';
import { motion } from 'framer-motion';
import { Mail } from 'lucide-react';
import { Linkedin, Github } from '../Icons';

const ContactCard = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.1, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:block absolute bottom-[5%] lg:bottom-[7%] right-[4%] z-20"
    >
      <div className="glass-card rounded-[20px] w-[260px] p-6 relative group overflow-hidden">
        {/* Subtle green border glow on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-transparent transition-all duration-700 pointer-events-none"></div>
        
        <div className="flex items-center space-x-4 mb-6 relative z-10">
          <img 
            src="https://ui-avatars.com/api/?name=Ashiq+K&background=random" 
            alt="Avatar" 
            className="w-11 h-11 rounded-full filter grayscale contrast-125" 
          />
          <div>
            <div className="text-[13px] text-text-muted">Based in</div>
            <div className="text-[14px] font-medium text-white flex items-center">
              Malappuram, India
              <span className="w-1 h-1 bg-accent rounded-full ml-1.5 opacity-60"></span>
            </div>
          </div>
        </div>
        
        <p className="text-[15px] text-text-main font-serif italic mb-6 leading-relaxed relative z-10">
          “Building a better web, <br/>
          <span className="relative">
             one interface at a time.
             {/* Text highlight underline */}
             <span className="absolute bottom-1 left-0 w-8 h-px bg-white/20"></span>
          </span>
          ”
        </p>
        
        <div className="w-full h-px bg-border-subtle mb-5 relative z-10"></div>
        
        <div className="flex items-center space-x-6 relative z-10">
          <a href="https://www.linkedin.com/in/ashiq-kakkat/" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
            <Linkedin className="w-5 h-5" />
          </a>
          <a href="https://github.com/AshiqKakkat" target="_blank" rel="noreferrer" className="text-text-muted hover:text-white transition-colors">
            <Github className="w-4 h-4" />
          </a>
          <a href="mailto:ashiqkakkat01@gmail.com" className="text-text-muted hover:text-white transition-colors">
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ContactCard;
