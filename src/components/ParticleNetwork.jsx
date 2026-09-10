import React, { useEffect, useRef } from 'react';

const ParticleNetwork = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    
    // Mouse tracking
    let mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseLeave);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    window.addEventListener('resize', resizeCanvas);

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }

      update() {
        // Bounce off edges
        if (this.x > canvas.width || this.x < 0) {
          this.directionX = -this.directionX;
        }
        if (this.y > canvas.height || this.y < 0) {
          this.directionY = -this.directionY;
        }

        // Move particle
        this.x += this.directionX;
        this.y += this.directionY;

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      // Adjust density based on screen size (fewer particles on mobile)
      const particleDensity = window.innerWidth < 768 ? 20000 : 12000;
      const numberOfParticles = Math.floor((canvas.width * canvas.height) / particleDensity);
      
      for (let i = 0; i < numberOfParticles; i++) {
        const size = (Math.random() * 1.5) + 0.5;
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const directionX = (Math.random() * 0.6) - 0.3; // Very slow movement
        const directionY = (Math.random() * 0.6) - 0.3;
        const color = 'rgba(255, 255, 255, 0.4)'; // Subtle white dots

        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = dx * dx + dy * dy;
          
          if (distance < 12000) {
            const opacityValue = 1 - (distance / 12000);
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacityValue * 0.08})`; // Very subtle web
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const connectToMouse = () => {
      if (mouse.x === null || mouse.y === null) return;
      for (let i = 0; i < particles.length; i++) {
        const dx = mouse.x - particles[i].x;
        const dy = mouse.y - particles[i].y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
            const opacityValue = 1 - (distance / mouse.radius);
            // Neon green connections to the mouse pointer
            ctx.strokeStyle = `rgba(84, 242, 138, ${opacityValue * 0.6})`;
            ctx.lineWidth = 1.5;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.stroke();

            // Slight magnetic attraction to mouse
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            
            if (distance < mouse.radius - 20) {
               particles[i].x -= forceDirectionX * force * 1.2;
               particles[i].y -= forceDirectionY * force * 1.2;
            }
        }
      }
    };

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
      connectToMouse();
    };

    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseLeave);
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[1] mix-blend-screen opacity-80"
    />
  );
};

export default ParticleNetwork;
