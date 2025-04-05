"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const navLinks = [
  { name: "Home", path: "#hero" },
  { name: "About", path: "#about" },
  { name: "Skills", path: "#skills" },
  { name: "Projects", path: "#projects" },
  { name: "Experience", path: "#experience" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Detect active section
      const sections = navLinks.map(link => link.path.substring(1));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= element.offsetTop - 150) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-500 px-3 sm:px-4 ${
        scrolled ? "py-4 sm:py-6" : "py-6 sm:py-8"
      }`}
    >
      {/* Main navbar container - floating glass effect */}
      <motion.div 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className={`mx-auto max-w-3xl rounded-xl sm:rounded-2xl overflow-hidden 
          ${scrolled 
            ? "bg-[var(--dark-surface)]/40 shadow-lg shadow-black/10" 
            : "bg-[var(--dark-surface)]/30 shadow-xl shadow-black/5"
          } 
          backdrop-blur-2xl backdrop-saturate-[180%] border border-white/10
          transition-all duration-500`}
      >
        {/* Glass panel light effects */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Top light reflection */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
          
          {/* Left edge light */}
          <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
          
          {/* Glass sheen effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-30"></div>
          
          {/* Colored accent glow */}
          <div className="absolute -inset-1 bg-[conic-gradient(from_220deg_at_50%_50%,rgba(6,182,212,0.05)_0deg,transparent_45deg,transparent_315deg,rgba(6,182,212,0.1)_360deg)]"></div>
        </div>

        <div className="container mx-auto py-2 sm:py-3 px-2 sm:px-3 relative z-10">
          <div className="flex items-center justify-center">
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center justify-center space-x-4 lg:space-x-6 mx-auto">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 + index * 0.05 }}
                >
                  <Link
                    href={link.path}
                    className={`relative group px-2 py-2 text-sm font-medium transition-all duration-300 hover:text-white ${
                      activeSection === link.path.substring(1)
                        ? "text-white"
                        : "text-[var(--text-light)]/80"
                    }`}
                  >
                    <span className="relative z-10 group-hover:translate-y-px transition-transform duration-200">
                      {link.name}
                    </span>
                    
                    {/* Hover background effect */}
                    <span className="absolute inset-0 rounded-md opacity-0 group-hover:opacity-10 bg-gradient-to-r from-cyan-400 to-blue-500 transition-opacity duration-300"></span>
                    
                    {/* Active indicator with enhanced transition */}
                    <motion.span
                      className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform duration-300 ease-out ${
                        activeSection === link.path.substring(1) ? "scale-x-100" : "scale-x-0"
                      }`}
                    />
                  </Link>
                </motion.div>
              ))}
            </nav>

            {/* Action Button - Now part of the main nav */}
            <div className="hidden md:block ml-4 lg:ml-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Link
                  href="#contact"
                  className="group relative inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 px-4 sm:px-5 py-1.5 sm:py-2 text-sm font-medium text-white shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/20 transition-all duration-300 overflow-hidden hover:scale-105 active:scale-95"
                >
                  <span className="relative z-10 flex items-center">
                    Hire Me
                    <FiArrowRight className="ml-1.5 text-white transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                  
                  {/* Hover effect */}
                  <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
                  </span>
                </Link>
              </motion.div>
            </div>

            {/* Mobile Menu Toggle - Left aligned for mobile */}
            <div className="md:hidden absolute left-2 sm:left-3">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="relative z-10 p-2 sm:p-2.5 rounded-full bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-white hover:from-cyan-500/20 hover:to-blue-500/20 transition-all duration-300 border border-white/10 hover:border-white/20 hover:scale-110 active:scale-95"
                aria-label="Toggle mobile menu"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {mobileMenuOpen ? (
                    <FaTimes className="h-4 w-4 sm:h-5 sm:w-5" />
                  ) : (
                    <FaBars className="h-4 w-4 sm:h-5 sm:w-5" />
                  )}
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden mt-2 sm:mt-3 overflow-hidden relative z-20 mx-auto max-w-3xl rounded-xl sm:rounded-2xl"
          >
            {/* Mobile menu glass effect */}
            <div className="absolute inset-0 bg-[var(--dark-surface)]/60 backdrop-blur-3xl backdrop-saturate-200 shadow-2xl border border-white/10"></div>
            
            {/* Glass reflections */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
              <div className="absolute left-0 inset-y-0 w-px bg-gradient-to-b from-white/10 via-white/5 to-transparent"></div>
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.1),transparent_50%)]"></div>
            </div>
            
            <div className="px-4 sm:px-6 py-4 sm:py-6 relative z-10">
              <nav className="flex flex-col space-y-1.5 sm:space-y-2">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <Link
                      href={link.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-medium transition-all duration-300 ${
                        activeSection === link.path.substring(1)
                          ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 text-white border-l-2 border-cyan-400"
                          : "text-[var(--text-light)]/80 hover:bg-white/10 hover:text-white border-l-2 border-transparent hover:border-cyan-400/50 hover:translate-x-1"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
                
                <div className="pt-3 sm:pt-4 mt-1.5 sm:mt-2 border-t border-white/10">
                  <Link
                    href="#contact"
                    onClick={() => setMobileMenuOpen(false)}
                    className="group relative flex items-center justify-center w-full gap-1.5 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 px-3 sm:px-4 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white transition-all duration-300 overflow-hidden shadow-lg shadow-cyan-500/10 hover:shadow-xl hover:shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    <span className="relative z-10 flex items-center">
                      Hire Me
                      <FiArrowRight className="ml-1.5 sm:ml-2 text-white transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                    
                    {/* Hover effect */}
                    <span className="absolute inset-0 overflow-hidden rounded-lg">
                      <span className="absolute left-0 aspect-square w-full origin-center -translate-x-full rounded-lg bg-gradient-to-r from-cyan-400 to-blue-400 transition-all duration-500 group-hover:translate-x-0 group-hover:scale-150"></span>
                    </span>
                  </Link>
                </div>
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
} 