import React from 'react';
import { Linkedin, Github, Mail } from 'lucide-react';

const SocialLinks = () => {
  return (
    <div className="flex items-center space-x-6">
      <a href="https://www.linkedin.com/in/ashiq-kakkat/" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <Linkedin className="w-5 h-5" />
      </a>
      <a href="https://github.com/AshiqKakkat" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white transition-colors">
        <Github className="w-5 h-5" />
      </a>
      <a href="mailto:ashiqkakkat01@gmail.com" className="text-gray-400 hover:text-white transition-colors">
        <Mail className="w-5 h-5" />
      </a>
    </div>
  );
};

export default SocialLinks;
