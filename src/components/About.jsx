import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden border-t border-border-subtle">
      <div className="w-full max-w-[1600px] mx-auto px-[4vw] lg:px-[3vw]">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-sm text-brand-green tracking-widest uppercase mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-serif text-white max-w-3xl leading-tight">
            Expert MERN & Shopify Developer from Malappuram, architecting secure, scalable web applications.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-gray-400 leading-relaxed text-lg">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="mb-6">
              With over 2 years of experience, I specialize in the MERN Stack and headless commerce platforms. My core focus is building robust digital storefronts using Shopify Hydrogen, React Router 7, and the Storefront API. 
            </p>
            <p>
              I have a deep understanding of traditional Shopify theme development, Liquid, and WordPress. By leveraging AI-assisted development tools like GitHub Copilot and Claude, I accelerate delivery while maintaining strict ownership of architecture, security, and code quality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 gap-6"
          >
            <div>
              <h4 className="text-white font-medium mb-3 text-sm tracking-wider uppercase">Headless</h4>
              <ul className="space-y-2 text-sm">
                <li>Shopify Hydrogen</li>
                <li>React Router 7</li>
                <li>GraphQL / Storefront API</li>
                <li>Shopify Oxygen</li>
              </ul>
            </div>
            <div>
              <h4 className="text-white font-medium mb-3 text-sm tracking-wider uppercase">Stack</h4>
              <ul className="space-y-2 text-sm">
                <li>MongoDB, Express, React, Node</li>
                <li>Laravel, PHP 8.2</li>
                <li>Tailwind CSS, GSAP, Framer</li>
                <li>WebSockets (Reverb)</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
