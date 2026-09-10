import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const RobotFollower = () => {
  const headRef = useRef(null);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!headRef.current) return;
      
      const rect = headRef.current.getBoundingClientRect();
      // Calculate the center of the robot head relative to the viewport
      const headCenterX = rect.left + rect.width / 2;
      const headCenterY = rect.top + rect.height / 2;
      
      const dx = e.clientX - headCenterX;
      const dy = e.clientY - headCenterY;
      
      // Calculate the angle in radians and convert to degrees
      const angle = Math.atan2(dy, dx) * (180 / Math.PI);
      setRotation(angle);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="w-full flex-1 flex flex-col items-center justify-center min-h-[200px] pointer-events-none opacity-80">
      <div className="relative flex flex-col items-center">
        
        {/* Antenna */}
        <div className="w-1 h-5 bg-border-subtle rounded-t-full relative">
          <div className="absolute -top-2 -left-1.5 w-4 h-4 bg-accent rounded-full shadow-[0_0_10px_rgba(87,242,135,0.5)] animate-pulse"></div>
        </div>

        {/* Robot Head */}
        <motion.div 
          ref={headRef}
          className="relative w-20 h-20 bg-secondary border border-border-subtle rounded-[20px] flex items-center justify-center shadow-2xl z-10"
          animate={{ rotate: rotation }}
          transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
        >
          {/* Inner Screen */}
          <div className="absolute inset-1.5 bg-primary rounded-2xl flex items-center overflow-hidden">
            
            {/* Eyes (Positioned to the right so 0deg rotation faces right) */}
            <div className="absolute right-2 flex flex-col space-y-2.5">
              <div className="w-2.5 h-3.5 bg-accent rounded-full shadow-[0_0_8px_#57F287]"></div>
              <div className="w-2.5 h-3.5 bg-accent rounded-full shadow-[0_0_8px_#57F287]"></div>
            </div>
            
          </div>
        </motion.div>
        
        {/* Neck / Base */}
        <div className="w-6 h-4 bg-border-subtle rounded-b-lg -mt-1 z-0"></div>
        <div className="w-12 h-2 bg-secondary border border-border-subtle rounded-full mt-1"></div>

      </div>
    </div>
  );
};

export default RobotFollower;
