import React from 'react';
import { Phone, Mail, ArrowRight } from 'lucide-react';
import { Github, Linkedin } from './Icons';
import LogoImg from '../assets/image.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="relative z-10 bg-[#070B0A] pt-16 pb-8 font-sans">
      
      {/* Top faint border for section separation */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

      <div className="w-full max-w-[1600px] mx-auto px-[4vw] lg:px-[3vw] relative z-10 flex flex-col">
        
        {/* Top Row: Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
          
          {/* Card 1: Phone */}
          <a href="tel:+9180889478789" className="group relative bg-[#0C1210] border border-white/5 rounded-[20px] p-8 hover:border-[#54F28A]/30 transition-all duration-300 flex flex-col justify-between h-[190px]">
            <div className="flex justify-between items-start">
              <div className="w-[50px] h-[50px] rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[#54F28A]/50 group-hover:text-[#54F28A] transition-colors">
                <Phone className="w-[22px] h-[22px]" />
              </div>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] font-medium text-[#6A7872] mb-3 uppercase">Phone</div>
              <div className="text-white font-medium text-[17px] mb-1.5 tracking-wide">+91 80889478789</div>
              <div className="text-[13px] text-[#6A7872]">Call or WhatsApp</div>
            </div>
          </a>

          {/* Card 2: Email */}
          <a href="mailto:ashiqkakkat01@gmail.com" className="group relative bg-[#0C1210] border border-white/5 rounded-[20px] p-8 hover:border-[#54F28A]/30 transition-all duration-300 flex flex-col justify-between h-[190px]">
            <div className="flex justify-between items-start">
              <div className="w-[50px] h-[50px] rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[#54F28A]/50 group-hover:text-[#54F28A] transition-colors">
                <Mail className="w-[22px] h-[22px]" />
              </div>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] font-medium text-[#6A7872] mb-3 uppercase">Email</div>
              <div className="text-white font-medium text-[16px] mb-1.5 truncate tracking-wide">ashiqkakkat01@gmail.com</div>
              <div className="text-[13px] text-[#6A7872]">Drop me a line</div>
            </div>
          </a>

          {/* Card 3: LinkedIn */}
          <a href="https://www.linkedin.com/in/ashiq-kakkat/" target="_blank" rel="noreferrer" className="group relative bg-[#0C1210] border border-white/5 rounded-[20px] p-8 hover:border-[#54F28A]/30 transition-all duration-300 flex flex-col justify-between h-[190px]">
            <div className="flex justify-between items-start">
              <div className="w-[50px] h-[50px] rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[#54F28A]/50 group-hover:text-[#54F28A] transition-colors">
                <Linkedin className="w-[22px] h-[22px] fill-current" />
              </div>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] font-medium text-[#6A7872] mb-3 uppercase">LinkedIn</div>
              <div className="text-white font-medium text-[16px] mb-1.5 truncate tracking-wide">linkedin.com/in/ashiq-kakkat</div>
              <div className="text-[13px] text-[#6A7872]">Let's connect</div>
            </div>
          </a>

          {/* Card 4: GitHub */}
          <a href="https://github.com/AshiqKakkat" target="_blank" rel="noreferrer" className="group relative bg-[#0C1210] border border-white/5 rounded-[20px] p-8 hover:border-[#54F28A]/30 transition-all duration-300 flex flex-col justify-between h-[190px]">
            <div className="flex justify-between items-start">
              <div className="w-[50px] h-[50px] rounded-full border border-white/10 flex items-center justify-center text-white group-hover:border-[#54F28A]/50 group-hover:text-[#54F28A] transition-colors">
                <Github className="w-[22px] h-[22px] fill-current" />
              </div>
              <ArrowRight className="w-5 h-5 text-white/30 group-hover:text-white transition-colors" />
            </div>
            <div>
              <div className="text-[11px] tracking-[0.2em] font-medium text-[#6A7872] mb-3 uppercase">GitHub</div>
              <div className="text-white font-medium text-[16px] mb-1.5 truncate tracking-wide">github.com/AshiqKakkat</div>
              <div className="text-[13px] text-[#6A7872]">Check out my work</div>
            </div>
          </a>
        </div>

        {/* Middle Row */}
        <div className="py-12 border-t border-b border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-10">
          
          {/* Brand/Profile */}
          <div className="flex items-center gap-6 lg:w-[30%]">
            <img src={LogoImg} alt="Mohammed Ashiq K Logo" className="h-[50px] lg:h-[60px] w-auto object-contain opacity-60" />
            <div className="flex flex-col">
              <h3 className="text-white font-medium text-[17px] tracking-wide mb-1">Ashiq Kakkat</h3>
              <p className="text-[#8E9A94] text-[14px] mb-2">Software Engineer</p>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#54F28A]"></span>
                <span className="text-[#6A7872] text-[13px]">Turning ideas into impactful digital products.</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center lg:justify-center gap-x-10 gap-y-4 text-[12px] tracking-[0.2em] text-[#8E9A94] uppercase font-medium lg:w-[40%]">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#work" className="hover:text-white transition-colors">Work</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
          </nav>

          {/* Quote */}
          <div className="border-l-[1.5px] border-white/10 pl-6 py-1 lg:w-[30%] flex justify-end">
            <p className="text-[#8E9A94] font-serif italic text-[19px] leading-relaxed max-w-[280px]">
              "Build. Learn. Improve.<br/>Keep going."
            </p>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 text-[13px] text-[#6A7872]">
          <p className="w-full md:w-[30%] text-center md:text-left">&copy; {currentYear} Ashiq Kakkat. All rights reserved.</p>
          
          <div className="w-full md:w-[40%] flex justify-center items-center gap-6">
             <div className="hidden md:block w-px h-4 bg-white/5"></div>
             <p>Built with passion and purpose.</p>
             <div className="hidden md:block w-px h-4 bg-white/5"></div>
          </div>
          
          <div className="w-full md:w-[30%] flex justify-center md:justify-end items-center gap-3">
            <span>Available for new opportunities.</span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#54F28A] animate-pulse"></span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
