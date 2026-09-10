import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, Quote, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { testimonials } from './data';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    
    if (isLeftSwipe) {
      nextTestimonial();
    } else if (isRightSwipe) {
      prevTestimonial();
    }
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="relative bg-[#070B0A] py-24 lg:py-32 overflow-hidden font-sans border-t border-white/5">
      {/* Background Grid */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: 'linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)',
          backgroundSize: '25% 25%'
        }}></div>
      </div>

      {/* Glowing Green Curve (Bottom Left) */}
      <div className="absolute bottom-0 left-[-10%] w-[50vw] h-[50vw] md:w-[30vw] md:h-[30vw] rounded-tr-[100%] border-t border-r border-[#54F28A]/30 pointer-events-none z-0" style={{
        boxShadow: 'inset 0 0 50px rgba(84, 242, 138, 0.1), 0 0 50px rgba(84, 242, 138, 0.05)'
      }}></div>

      <div className="w-full max-w-[1600px] mx-auto px-[4vw] lg:px-[3vw] relative z-10">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-16 lg:gap-24">
          
          {/* Left Column */}
          <div className="w-full lg:w-[35%] flex flex-col justify-between">
            <div>
              <div className="flex items-center space-x-4 mb-8">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 rounded-full bg-[#54F28A]"></span>
                  <span className="text-[11px] font-medium tracking-[0.2em] text-[#54F28A]">06 / TESTIMONIALS</span>
                </div>
                <div className="w-12 h-px bg-white/20"></div>
              </div>

              <h2 className="text-4xl md:text-5xl lg:text-[64px] leading-[1.1] font-semibold text-white mb-8 tracking-tight">
                Kind words<br />
                from great<br />
                <span className="font-serif italic text-[#54F28A] font-light">people.</span>
              </h2>

              <p className="text-[#8E9A94] text-[17px] leading-relaxed max-w-sm">
                I'm grateful to have worked with amazing clients, teammates and mentors who continue to support my journey.
              </p>
            </div>

            <div className="mt-24 lg:mt-32 hidden lg:block">
              <p className="text-[10px] tracking-[0.2em] text-[#6A7872] uppercase font-medium leading-loose mb-3">
                Real people.<br />Real impact.
              </p>
              <div className="w-8 h-px bg-white/20"></div>
            </div>
          </div>

          {/* Right Column: Slider */}
          <div className="w-full lg:w-[65%] relative flex items-start gap-8 lg:gap-16">
            
            <div 
              className="w-full max-w-[800px] flex-shrink-0 relative cursor-grab active:cursor-grabbing"
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
            >
              <div className="relative bg-[#0C1210] border border-white/5 rounded-[20px] p-8 md:p-12">
                
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-[#54F28A]/30 mb-6" fill="currentColor" />
                
                <div className="min-h-[220px]">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, y: 15 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -15 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="h-full flex flex-col justify-between"
                    >
                      <p className="text-white text-[18px] md:text-[22px] leading-relaxed font-light mb-12 lg:mb-16">
                        {testimonials[currentIndex].quote}
                      </p>

                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-end gap-6 sm:gap-0 mt-auto">
                        <div className="flex items-center gap-4">
                          <img src={testimonials[currentIndex].avatar} alt={testimonials[currentIndex].name} className="w-12 h-12 md:w-14 md:h-14 rounded-full object-cover border border-white/10" />
                          <div>
                            <h4 className="text-white font-medium text-[15px] md:text-[16px] mb-0.5">{testimonials[currentIndex].name}</h4>
                            <p className="text-[#6A7872] text-[13px]">{testimonials[currentIndex].role}</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-4 border-t sm:border-t-0 border-white/5 pt-4 sm:pt-0">
                          <ShoppingBag className="w-7 h-7 md:w-8 md:h-8 text-[#54F28A]/40" />
                          <div className="w-px h-8 bg-white/10"></div>
                          <div>
                            <p className="text-[#8E9A94] text-[13px] leading-tight mb-0.5">{testimonials[currentIndex].platform}</p>
                            <p className="text-[#6A7872] text-[12px] leading-tight">{testimonials[currentIndex].type}</p>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Slider Dots & Mobile Arrows */}
              <div className="absolute -bottom-12 left-0 right-0 flex justify-center items-center gap-4 md:gap-6">
                <button 
                  onClick={prevTestimonial} 
                  className="lg:hidden p-2 text-white/30 hover:text-white transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ArrowLeft className="w-4 h-4" />
                </button>

                <div className="flex justify-center gap-3 md:gap-4">
                  {testimonials.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className="py-2 px-1"
                      aria-label={`Go to slide ${idx + 1}`}
                    >
                      <div className={`h-[2px] transition-all duration-300 ${idx === currentIndex ? 'w-8 bg-[#54F28A]' : 'w-4 bg-white/20 hover:bg-white/40'}`} />
                    </button>
                  ))}
                </div>

                <button 
                  onClick={nextTestimonial} 
                  className="lg:hidden p-2 text-white/30 hover:text-white transition-colors"
                  aria-label="Next testimonial"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Controls right side */}
            <div className="hidden lg:flex flex-col justify-between h-auto self-stretch">
              <div className="flex gap-4">
                <button 
                  onClick={prevTestimonial}
                  className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white hover:border-white/30 transition-colors"
                >
                  <ArrowLeft className="w-5 h-5 text-white/70" />
                </button>
                <button 
                  onClick={nextTestimonial}
                  className="w-12 h-12 rounded-full border border-[#54F28A]/40 flex items-center justify-center text-[#54F28A] hover:bg-[#54F28A]/10 transition-colors"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              <div className="flex flex-col items-center gap-6 mt-16 flex-grow">
                <div className="w-px h-24 bg-gradient-to-b from-transparent via-white/10 to-transparent"></div>
                <div className="flex flex-col items-center">
                  <span className="text-white text-[28px] font-light tracking-widest">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="text-[#6A7872] text-[11px] tracking-widest mt-1">/ {String(testimonials.length).padStart(2, '0')}</span>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-[10px] tracking-[0.2em] text-[#6A7872] uppercase font-medium leading-loose text-right">
                  More stories<br />to come.
                </p>
                <div className="w-8 h-px bg-white/20 ml-auto mt-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
