import React from 'react';
import { motion } from 'framer-motion';

const keywords = ["WEBSITES", "E-COMMERCE", "WEB APPS", "IDEAS"];

const HeroHeadline = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="show"
      className="relative z-10 w-full"
    >
      <motion.h1 className="text-[58px] md:text-[80px] lg:text-[105px] xl:text-[120px] font-bold tracking-tight leading-[0.85] text-white">
        <motion.div variants={itemVariants} className="overflow-visible">
          I build
        </motion.div>

        <motion.div variants={itemVariants} className="relative flex items-center overflow-visible">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#9AFFB5] via-[#57F287] to-[#1d9e46]">
            digital
          </span>

          {/* Side Keywords - Hidden on mobile as per spec */}
          <div className="hidden md:flex flex-col ml-6 md:ml-8 lg:ml-10">
            {keywords.map((word, i) => (
              <span key={i} className="text-[10px] lg:text-[12px] text-text-muted uppercase tracking-[0.15em] leading-[1.8] font-medium">
                {word}
              </span>
            ))}
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="overflow-visible">
          <span className="font-serif italic font-normal tracking-normal text-[50px] md:text-[70px] lg:text-[90px] xl:text-[105px] md:ml-2">
            experiences
          </span>
        </motion.div>
      </motion.h1>
    </motion.div>
  );
};

export default HeroHeadline;
