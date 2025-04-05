"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { 
  FaEnvelope, 
  FaPhone, 
  FaMapMarkerAlt, 
  FaLinkedinIn, 
  FaGithub, 
  FaTwitter,
  FaCode,
  FaCheckCircle
} from "react-icons/fa";
import { SiSelenium, SiCypress } from "react-icons/si";
import { TbTestPipe } from "react-icons/tb";

export default function Contact() {
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  const [terminalText, setTerminalText] = useState<string>('');
  const [cursorVisible, setCursorVisible] = useState<boolean>(true);
  
  // Simulated terminal typing effect
  useEffect(() => {
    let fullText = '> Running automated tests...\n> All tests passed!\n> Ready to connect...';
    let currentIndex = 0;
    
    if (isInView) {
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setTerminalText(fullText.substring(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 40);
      
      // Blinking cursor effect
      const cursorInterval = setInterval(() => {
        setCursorVisible(prev => !prev);
      }, 500);
      
      return () => {
        clearInterval(typingInterval);
        clearInterval(cursorInterval);
      };
    }
  }, [isInView]);

  const contactDetails = [
    { icon: <FaEnvelope className="text-cyan-400" />, title: "Email", value: "contact@salmachakkour.com", href: "mailto:contact@salmachakkour.com" },
    { icon: <FaPhone className="text-blue-400" />, title: "Phone", value: "+1 (234) 567-8900", href: "tel:+12345678900" },
    { icon: <FaMapMarkerAlt className="text-purple-400" />, title: "Location", value: "New York, NY (Remote)" }
  ];

  const socialLinks = [ 
    { icon: <FaLinkedinIn />, label: "LinkedIn", href: "https://linkedin.com", color: "hover:bg-blue-500" },
    { icon: <FaGithub />, label: "GitHub", href: "https://github.com/salma-chakkour", color: "hover:bg-gray-700" }, 
    { icon: <FaTwitter />, label: "Twitter", href: "https://twitter.com", color: "hover:bg-blue-400" }
  ];

  return (
    <section 
      id="contact" 
      ref={containerRef}
      className="py-16 sm:py-20 md:py-32 section-bg light-bottom-left relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-contact" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-contact)" />
        </svg>
        
        {/* Animated elements */}
        {isInView && (
          <>
            <motion.div
              className="absolute w-80 h-80 rounded-full border border-cyan-500/10 top-1/4 -right-32"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
            />
            
            {/* Floating icons */}
            <motion.div 
              className="absolute text-cyan-500/5 text-5xl top-20 left-1/4"
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            >
              <SiCypress />
            </motion.div>
            
            <motion.div 
              className="absolute text-blue-500/5 text-4xl bottom-40 right-1/4"
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            >
              <SiSelenium />
            </motion.div>
          </>
        )}
      </div>

      <div className="section-content container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-8 sm:mb-12 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            Let&apos;s <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">Connect</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-6 sm:mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-2xl mx-auto text-sm sm:text-base md:text-lg text-[var(--text-light)]/80 leading-relaxed"
          >
            Ready to elevate your project with expert QA automation? Reach out through any of the channels below.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="glass p-5 sm:p-6 md:p-8 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-8 flex items-center gap-2">
                <FaCheckCircle className="text-cyan-400" /> 
                <span>Get in Touch</span>
              </h3>
              
              {/* Terminal window */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="glass p-3 sm:p-4 rounded-xl border border-white/5 mb-6 sm:mb-8 overflow-hidden"
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3 border-b border-white/10 pb-2">
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-red-400"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-green-400"></div>
                  <div className="text-xs text-white/60 ml-2">terminal</div>
                </div>
                <div className="font-mono text-xs sm:text-sm text-cyan-400/90 whitespace-pre-line">
                  {terminalText}
                  {cursorVisible && <span className="text-cyan-400">_</span>}
                </div>
              </motion.div>
              
              {/* Contact details with icons */}
              <div className="space-y-4 sm:space-y-6 mb-6 sm:mb-8">
                {contactDetails.map((item, index) => (
                  <motion.div 
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    whileHover={{ x: 5 }}
                    className="flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg glass flex-shrink-0 flex items-center justify-center border border-white/5 group-hover:border-cyan-500/30 transition-colors duration-300 shadow-md">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs sm:text-sm font-medium text-[var(--text-light)]/60 mb-0.5 sm:mb-1">{item.title}</h4>
                      {item.href ? (
                        <a 
                          href={item.href} 
                          className="text-sm sm:text-base text-[var(--text-light)]/90 hover:text-cyan-400 transition-colors group-hover:text-cyan-400"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="text-sm sm:text-base text-[var(--text-light)]/90">{item.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Social Links */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <h4 className="text-base sm:text-lg font-medium mb-3 sm:mb-4">Connect Online</h4>
                <div className="flex gap-2 sm:gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a 
                      key={social.label}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: 0.7 + index * 0.1 }}
                      whileHover={{ y: -5, scale: 1.05 }}
                      href={social.href} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`w-10 h-10 sm:w-12 sm:h-12 rounded-full glass flex items-center justify-center text-[var(--text-light)]/70 border border-white/5 hover:text-white ${social.color} hover:border-transparent transition-all duration-300 shadow-md`}
                      aria-label={social.label}
                    >
                      <span className="text-base sm:text-lg">{social.icon}</span>
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          {/* Right Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-6"
          >
            <div className="glass p-5 sm:p-6 md:p-8 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 shadow-lg h-full">
              <h3 className="text-xl sm:text-2xl font-semibold mb-5 sm:mb-8 flex items-center gap-2">
                <TbTestPipe className="text-cyan-400" />
                <span>Expertise Highlight</span>
              </h3>
              
              {/* QA Skills showcase */}
              <div className="space-y-6">
                {[
                  {
                    title: "Test Automation",
                    description: "End-to-end web and API test automation using Selenium, Cypress, and custom frameworks.",
                    icon: <SiSelenium className="text-cyan-400 text-xl" />
                  },
                  {
                    title: "CI/CD Integration",
                    description: "Seamless testing integration with Jenkins, GitHub Actions, and other CI platforms.",
                    icon: <FaCode className="text-blue-400 text-xl" />
                  },
                  {
                    title: "Performance Testing",
                    description: "Load and performance testing to ensure your systems scale efficiently.",
                    icon: <TbTestPipe className="text-purple-400 text-xl" />
                  }
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex gap-4 p-4 glass rounded-lg border border-white/5 hover:border-cyan-500/20 transition-all duration-300"
                  >
                    <div className="w-10 h-10 rounded-lg glass flex-shrink-0 flex items-center justify-center border border-white/5 transition-colors duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-medium text-lg mb-1">{item.title}</h4>
                      <p className="text-sm text-[var(--text-light)]/70">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Availability indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-16 max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10">
            <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
            <span className="text-sm">Currently available for new QA projects and consulting</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 