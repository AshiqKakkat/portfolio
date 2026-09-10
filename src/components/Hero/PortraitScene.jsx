import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import profileImg from '../../assets/ashiq-removebg-preview.png';

const PortraitScene = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      // Calculate normalized mouse position (-1 to 1)
      const x = (e.clientX / innerWidth) * 2 - 1;
      const y = (e.clientY / innerHeight) * 2 - 1;
      setMousePosition({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      {/* 3D Geometric Background Forms */}
      <motion.div
        animate={{
          x: mousePosition.x * -20,
          y: mousePosition.y * -20
        }}
        transition={{ type: "spring", stiffness: 50, damping: 20 }}
        className="absolute top-[10%] right-[10%] w-[600px] h-[800px] opacity-80"
      >
        {/* Large abstract polygon */}
        <div className="absolute top-0 right-0 w-full h-full bg-secondary/30 backdrop-blur-3xl" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', transform: 'rotate(15deg)' }}>
          <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent border-[0.5px] border-white/10 shadow-[inset_0_0_50px_rgba(87,242,135,0.05)]"></div>
          {/* Subtle green illuminated edge */}
          <div className="absolute top-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-30 transform -rotate-45 translate-y-32"></div>
        </div>

        {/* Large curved circular form */}
        <div className="absolute bottom-[10%] left-[-20%] w-[500px] h-[500px] rounded-full border border-white/5 bg-gradient-to-tr from-secondary/50 to-transparent backdrop-blur-xl"></div>
      </motion.div>

      {/* Atmospheric Glow */}
      <div className="absolute top-1/2 right-[20%] -translate-y-1/2 w-[800px] h-[800px] bg-accent opacity-[0.03] rounded-full blur-[120px] mix-blend-screen"></div>

      {/* Portrait */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
        className="absolute bottom-0 right-[2%] lg:right-[10%] xl:right-[15%] w-[85%] sm:w-[60%] md:w-[50%] lg:w-[45%] xl:w-[800px] h-[85vh] lg:h-[95vh] flex items-end justify-center origin-bottom z-10"
      >
        <motion.div
          animate={{
            x: mousePosition.x * -10,
            y: mousePosition.y * -10
          }}
          transition={{ type: "spring", stiffness: 70, damping: 25 }}
          className="relative w-full h-full"
        >
          <img
            src={profileImg}
            alt="Mohammed Ashiq K"
            className="absolute bottom-0 w-full h-full object-contain object-bottom drop-shadow-[0_0_30px_rgba(87,242,135,0.05)]"
            style={{
              filter: 'drop-shadow(0px 0px 40px rgba(255,255,255,0.02)) drop-shadow(-10px 0px 20px rgba(87,242,135,0.03))'
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PortraitScene;
