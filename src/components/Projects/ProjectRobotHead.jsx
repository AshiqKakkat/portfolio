import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

const ProjectRobotHead = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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
    <div className="absolute top-0 right-[20%] xl:right-[25%] hidden lg:flex items-center justify-center w-[250px] h-[250px] pointer-events-none z-0">
      
      {/* Subtle Glow Behind */}
      <div className="absolute inset-0 bg-[#54F28A] opacity-[0.04] blur-3xl rounded-full mix-blend-screen" />

      {/* Floating 3D Geometric "Robot" Element (Placeholder for Image) */}
      <motion.div
        animate={{
          x: mousePosition.x * -15,
          y: mousePosition.y * -15,
          rotateX: mousePosition.y * -10,
          rotateY: mousePosition.x * 15,
        }}
        transition={{ type: "spring", stiffness: 70, damping: 25 }}
        style={{ perspective: 1000 }}
        className="relative w-full h-full flex items-center justify-center"
      >
        {/* Replace this with your actual 3D Robot Head image tag once generated */}
        {/* <img src={robotHeadImage} alt="Robot Head" className="w-full h-full object-contain" /> */}
        
        {/* Abstract 3D Geometric Head (Fallback until you add the image) */}
        <div className="relative w-32 h-40 bg-gradient-to-br from-white/10 to-transparent border border-white/20 rounded-t-3xl rounded-b-xl backdrop-blur-md shadow-2xl flex flex-col items-center justify-center gap-4 overflow-hidden">
          {/* Glowing Eyes */}
          <div className="flex gap-4">
            <motion.div 
              animate={{ 
                x: mousePosition.x * -5,
                y: mousePosition.y * -5
              }}
              className="w-8 h-3 rounded-full bg-[#54F28A] shadow-[0_0_15px_#54F28A] opacity-90"
            />
            <motion.div 
              animate={{ 
                x: mousePosition.x * -5,
                y: mousePosition.y * -5
              }}
              className="w-8 h-3 rounded-full bg-[#54F28A] shadow-[0_0_15px_#54F28A] opacity-90"
            />
          </div>
          {/* Mouth / Grill */}
          <div className="flex gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="w-1 h-4 bg-white/30 rounded-sm" />
            ))}
          </div>
          
          {/* Futuristic Lines */}
          <div className="absolute top-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(84,242,138,0.05)_50%)] bg-[length:100%_4px] pointer-events-none" />
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectRobotHead;
