"use client";

import { FaHeart, FaGithub, FaLinkedinIn, FaTwitter, FaCode, FaBug, FaRobot } from "react-icons/fa";
import { SiSelenium, SiCypress, SiPostman } from "react-icons/si";
import { TbTestPipe } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://linkedin.com", color: "hover:text-blue-400" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/salma-chakkour", color: "hover:text-purple-400" },
    { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com", color: "hover:text-cyan-400" },
  ];
  
  const quickLinks = [
    { name: "Home", path: "#hero" },
    { name: "About", path: "#about" },
    { name: "Skills", path: "#skills" },
    { name: "Projects", path: "#projects" },
    { name: "Experience", path: "#experience" },
    { name: "Contact", path: "#contact" },
  ];
  
  return (
    <footer className="bg-[var(--dark-surface)]/60 backdrop-blur-md pt-12 sm:pt-16 pb-6 sm:pb-8 section-bg light-bottom-right relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-footer" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-footer)" />
        </svg>
        
        {/* QA/Testing themed floating elements */}
        <motion.div
          className="absolute w-64 h-64 rounded-full border border-cyan-500/10 -top-20 -right-20"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
        />
        
        {/* Testing icons floating */}
        <motion.div 
          className="absolute text-cyan-500/5 text-5xl top-20 left-1/4"
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        >
          <SiCypress />
        </motion.div>
        
        <motion.div 
          className="absolute text-blue-500/5 text-4xl bottom-20 right-1/4"
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <SiSelenium />
        </motion.div>
        
        <motion.div 
          className="absolute text-purple-500/5 text-4xl bottom-40 left-1/3"
          animate={{ 
            y: [0, -10, 0],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <TbTestPipe />
        </motion.div>
      </div>
      
      <div className="section-content container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 mb-8 sm:mb-12">
          {/* Logo and description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="sm:col-span-2"
          >
            <Link 
              href="/" 
              className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text mb-3 sm:mb-5 hover:opacity-90 transition-all duration-300 transform hover:translate-x-1"
            >
              Salma Chakkour
            </Link>
            <p className="text-[var(--text-light)]/70 mb-4 sm:mb-6 max-w-md text-xs sm:text-sm leading-relaxed">
              Dedicated Automation QA Engineer crafting high-quality software through robust testing strategies. 
              Specializing in end-to-end test automation, CI/CD integration, and performance testing.
            </p>
            <div className="flex gap-3 sm:gap-4">
              {socialLinks.map((social, index) => (
                <motion.a 
                  key={social.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileHover={{ y: -4, scale: 1.1 }}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full glass flex items-center justify-center text-[var(--text-light)]/70 ${social.color} border border-white/5 hover:border-white/20 transition-all duration-300 shadow-md`}
                  aria-label={social.label}
                >
                  <span className="text-base sm:text-lg">{social.icon}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          {/* Quick links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:justify-self-center"
          >
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-5 text-[var(--text-light)]/90 uppercase tracking-wider flex items-center gap-2">
              <span className="h-3 sm:h-4 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-2 sm:space-y-3">
              {quickLinks.map((item, index) => (
                <motion.li 
                  key={item.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.3 + 0.05 * index }}
                  whileHover={{ x: 3 }}
                >
                  <Link 
                    href={item.path} 
                    className="text-xs sm:text-sm text-[var(--text-light)]/70 hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1.5"
                  >
                    <span className="h-1 w-1 bg-cyan-400/50 rounded-full"></span>
                    {item.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:justify-self-start"
          >
            <h3 className="text-sm sm:text-base font-semibold mb-3 sm:mb-5 text-[var(--text-light)]/90 uppercase tracking-wider flex items-center gap-2">
              <span className="h-3 sm:h-4 w-1 bg-gradient-to-b from-cyan-400 to-blue-500 rounded-full"></span>
              Contact
            </h3>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-[var(--text-light)]/70">
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 }}
                whileHover={{ x: 3 }}
              >
                <a 
                  href="mailto:contact@salmachakkour.com" 
                  className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1.5"
                >
                  <span className="h-1 w-1 bg-cyan-400/50 rounded-full"></span>
                  contact@salmachakkour.com
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.45 }}
                whileHover={{ x: 3 }}
              >
                <a 
                  href="tel:+12345678900" 
                  className="hover:text-cyan-400 transition-colors duration-300 flex items-center gap-1.5"
                >
                  <span className="h-1 w-1 bg-cyan-400/50 rounded-full"></span>
                  +1 (234) 567-8900
                </a>
              </motion.li>
              <motion.li 
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="pt-1 flex items-center gap-1.5"
              >
                <span className="h-1 w-1 bg-cyan-400/50 rounded-full"></span>
                New York, NY (Remote)
              </motion.li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="pt-6 sm:pt-8 border-t border-white/10 text-center text-[10px] sm:text-xs text-[var(--text-light)]/60"
        >
          <p className="mb-2">
            © {currentYear} Salma Chakkour. All rights reserved.
          </p>
          <p className="flex items-center justify-center">
            <span className="group relative inline-flex items-center">
              Made by 
              <a 
                href="https://ma.linkedin.com/in/abdellah-raissouni-1419432a8" 
                target="_blank" 
                rel="noopener noreferrer"
                className="ml-1.5 font-medium bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent hover:underline group-hover:underline transition-all duration-300 inline-flex items-center"
              >
                Abdellah Raissouni
                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-1.5">
                  <FaLinkedinIn className="text-blue-400" />
                </span>
              </a>
            </span>
          </p>
        </motion.div>
      </div>
    </footer>
  );
} 