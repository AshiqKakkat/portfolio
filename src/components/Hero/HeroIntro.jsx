import React from 'react';
import { motion } from 'framer-motion';

const HeroIntro = () => {
  return (
    <motion.p 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.7, ease: [0.16, 1, 0.3, 1] }}
      className="text-[16px] md:text-[17px] lg:text-[20px] text-text-muted leading-[1.5] max-w-[560px] mt-6 lg:mt-8 mb-14 font-medium"
    >
      <span className="text-white">Hi, I’m Mohammed Ashiq K</span> — a Software Engineer specializing in Shopify (Hydrogen) and the MERN stack. I craft fast, scalable, and user-focused digital products.
    </motion.p>
  );
};

export default HeroIntro;
