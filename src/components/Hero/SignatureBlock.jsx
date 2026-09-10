import React from 'react';
import { motion } from 'framer-motion';

const SignatureBlock = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="hidden lg:flex flex-col items-start absolute top-[25%] right-[12%] xl:right-[16%] z-20"
    >
      <div className="font-cursive text-[38px] xl:text-[42px] text-text-muted leading-[0.9] mb-4">
        Mohammed <br/> Ashiq K
      </div>
      
      <div className="w-6 h-[2px] bg-border-subtle mb-4"></div>
      
      <div className="flex flex-col space-y-[3px]">
        <span className="text-[10px] xl:text-[11px] text-text-muted uppercase tracking-[0.15em] leading-[1.8] font-medium">Software Engineer</span>
        <span className="text-[10px] xl:text-[11px] text-text-muted uppercase tracking-[0.15em] leading-[1.8] font-medium">Shopify Developer</span>
        <span className="text-[10px] xl:text-[11px] text-text-muted uppercase tracking-[0.15em] leading-[1.8] font-medium">MERN Stack Developer</span>
        <span className="text-[10px] xl:text-[11px] text-text-muted uppercase tracking-[0.15em] leading-[1.8] font-medium">AI Enthusiast</span>
      </div>
    </motion.div>
  );
};

export default SignatureBlock;
