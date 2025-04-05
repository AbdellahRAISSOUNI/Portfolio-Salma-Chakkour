"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState, useRef } from "react";
import { FaGithub, FaLinkedinIn, FaEnvelope, FaCode, FaLaptopCode, FaMobileAlt, FaDatabase, FaTasks, FaBug } from "react-icons/fa";
import { MdSecurity, MdOutlineAutoGraph } from "react-icons/md";
import { BsCodeSlash } from "react-icons/bs";
import { TbCodeDots } from "react-icons/tb";

// Staggered animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.5, ease: "easeOut" }
  },
};

const floatingIcons = [
  { Icon: FaLaptopCode, size: 22, color: "var(--accent)", initialPosition: { x: -35, y: -130 } },
  { Icon: MdSecurity, size: 24, color: "var(--secondary)", initialPosition: { x: 120, y: -80 } },
  { Icon: FaMobileAlt, size: 20, color: "var(--primary)", initialPosition: { x: 70, y: 150 } },
  { Icon: FaDatabase, size: 20, color: "var(--accent)", initialPosition: { x: -120, y: 70 } },
  { Icon: BsCodeSlash, size: 26, color: "var(--primary)", initialPosition: { x: -140, y: -40 } },
  { Icon: FaTasks, size: 18, color: "var(--secondary)", initialPosition: { x: 150, y: -30 } },
  { Icon: FaBug, size: 19, color: "var(--primary)", initialPosition: { x: -80, y: 120 } },
  { Icon: MdOutlineAutoGraph, size: 24, color: "var(--accent)", initialPosition: { x: 40, y: -110 } },
  { Icon: TbCodeDots, size: 23, color: "var(--secondary)", initialPosition: { x: 100, y: 90 } },
];

export default function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isMounted, setIsMounted] = useState(false);
  const sphereRef = useRef<HTMLDivElement>(null);
  
  // Handle client-side mounting to avoid 'window is not defined' errors
  useEffect(() => {
    setIsMounted(true);
  }, []);
  
  // Track mouse position for parallax effects
  useEffect(() => {
    if (!isMounted) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isMounted]);
  
  // Calculate parallax effect for the sphere
  const calculateParallax = () => {
    if (!sphereRef.current) return { x: 0, y: 0 };
    
    const rect = sphereRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    // Calculate distance from mouse to center of sphere
    const distX = mousePosition.x - centerX;
    const distY = mousePosition.y - centerY;
    
    // Normalize the effect (adjust divisor to control intensity)
    return { 
      x: distX / 30, 
      y: distY / 30 
    };
  };
  
  const parallax = calculateParallax();

  // Scroll to section safely
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center section-bg light-top-right light-purple relative overflow-hidden px-4 sm:px-6"
    >
      {/* Floating particles - only rendered client-side */}
      {isMounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-1.5 h-1.5 rounded-full bg-white/30"
              initial={{
                x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1000),
                y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
                opacity: Math.random() * 0.5 + 0.3,
              }}
              animate={{
                y: [null, "100vh"],
                opacity: [null, 0],
              }}
              transition={{
                duration: Math.random() * 20 + 10,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 20,
              }}
            />
          ))}
        </div>
      )}
      
      {/* Background ambient lights */}
      <motion.div 
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[var(--primary)]/10 blur-3xl opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div 
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-[var(--accent)]/10 blur-3xl opacity-30 pointer-events-none"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />
      
      <div className="section-content container mx-auto px-0 sm:px-6 py-16 md:py-24 relative z-10">
        {/* Animated geometric shapes */}
        <div className="absolute top-16 right-20 hidden lg:block">
          <motion.div
            className="absolute w-5 h-5 rounded-sm border border-[var(--accent)]/40"
            animate={{ 
              rotate: 360,
              y: [0, 15, 0],
            }}
            transition={{ 
              rotate: { duration: 20, repeat: Infinity, ease: "linear" },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
        
        <div className="absolute bottom-20 left-10 hidden lg:block">
          <motion.div
            className="absolute w-6 h-6 rounded-full border border-[var(--primary)]/40"
            animate={{ 
              scale: [1, 1.2, 1],
              x: [0, 10, 0],
            }}
            transition={{ 
              scale: { duration: 8, repeat: Infinity, ease: "easeInOut" },
              x: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 items-center justify-between">
          {/* Text Content with Enhanced Animations */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full md:w-1/2 text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="inline-block relative"
            >
              <motion.div
                className="absolute -left-5 top-1/2 transform -translate-y-1/2 w-2 h-16 bg-gradient-to-b from-[var(--accent)] to-[var(--primary)] rounded-full"
                initial={{ height: 0 }}
                animate={{ height: 16 }}
                transition={{ duration: 1.2, delay: 0.3 }}
              />
              <motion.h2 
                variants={itemVariants}
                className="text-xl md:text-2xl font-light text-[var(--accent)] pl-1 tracking-wider"
              >
                Hello, I&apos;m
              </motion.h2>
            </motion.div>
            
            <motion.div className="relative mt-2 mb-4 inline-block">
              <motion.h1 
                variants={itemVariants}
                className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-extrabold relative inline-block tracking-tight"
              >
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.3 }}
                >
                  <span className="text-white drop-shadow-[0_2px_20px_rgba(255,255,255,0.25)] inline-block mb-1">Salma</span>
                </motion.div>
                <br className="md:hidden" />
                <motion.div
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.5 }}
                >
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">Chakkour</span>
                  <motion.span
                    className="absolute -bottom-3 left-0 h-2 w-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full"
                    initial={{ width: 0, opacity: 0.3 }}
                    animate={{ width: '100%', opacity: 0.7 }}
                    transition={{ duration: 1, delay: 0.8, ease: "easeInOut" }}
                  />
                </motion.div>
              </motion.h1>
              
              {/* Animated glowing elements */}
              <motion.div
                className="absolute -right-12 -top-12 w-24 h-24 rounded-full bg-gradient-to-r from-cyan-400/10 to-purple-600/10 blur-xl"
                animate={{ 
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              
              <motion.div
                className="absolute -left-4 top-1/2 transform -translate-y-1/2 w-1 h-16 bg-gradient-to-b from-cyan-400 to-purple-600 rounded-full"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 60, opacity: 0.7 }}
                transition={{ duration: 0.8, delay: 1 }}
              />
              
              {/* Particle decorations */}
              {isMounted && [...Array(5)].map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute rounded-full bg-cyan-400"
                  style={{
                    width: 2 + Math.random() * 4,
                    height: 2 + Math.random() * 4,
                    left: `${40 + Math.random() * 60}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    opacity: [0, 0.8, 0],
                    y: [0, -20, -40],
                    x: [0, Math.random() * 10 - 5],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 2,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 3,
                  }}
                />
              ))}
            </motion.div>
            
            <motion.div
              className="relative inline-block mb-5 sm:mb-7"
              variants={itemVariants}
            >
              <div className="h-px w-12 bg-gradient-to-r from-cyan-400 to-purple-600 mb-3 hidden md:block"></div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-medium text-[var(--text-light)]/90 tracking-wide">
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8, staggerChildren: 0.08 }}
                  className="inline-flex flex-wrap"
                >
                  {["Automation", "Quality", "Assurance", "Engineer"].map((word, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.7 + (i * 0.1) }}
                      className={`mr-2 relative ${i === 0 || i === 2 ? 'text-cyan-400' : ''}`}
                    >
                      {word}
                    </motion.span>
                  ))}
                </motion.span>
              </h3>
              <motion.span
                className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 to-purple-600"
                initial={{ width: 0 }}
                animate={{ width: '100%' }}
                transition={{ duration: 1.5, delay: 1.5, ease: "easeInOut" }}
              />
            </motion.div>
            
            <motion.p 
              variants={itemVariants}
              className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 md:mb-10 max-w-xl mx-auto md:mx-0 text-[var(--text-light)]/80 leading-relaxed font-light"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <motion.span 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1.2 }}
              >
                Transforming software quality through meticulous automation and a passion for 
                <motion.span 
                  className="relative inline-block mx-1 px-1"
                  whileHover={{ scale: 1.05 }}
                >
                  <span className="text-cyan-400 font-medium">flawless user experiences</span>
                  <motion.span
                    className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: '100%' }}
                    transition={{ duration: 0.8, delay: 2 }}
                  />
                </motion.span>. Expert in building robust, scalable test frameworks.
              </motion.span>
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17,
                  duration: 0.5, 
                  delay: 1.5 
                }}
              >
                <Link 
                  href="#projects" 
                  className="px-8 py-3.5 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 border border-white/10 inline-block relative overflow-hidden group"
                >
                  <span className="relative z-10">View My Work</span>
                  <motion.span
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  />
                  <motion.span
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                  />
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ 
                  type: "spring", 
                  stiffness: 400, 
                  damping: 17,
                  duration: 0.5, 
                  delay: 1.7 
                }}
              >
                <Link 
                  href="#contact" 
                  className="px-8 py-3.5 rounded-full glass border border-white/10 hover:border-cyan-400/30 transition-all duration-300 inline-block shadow-lg shadow-transparent hover:shadow-cyan-400/10 relative group"
                >
                  <span className="relative z-10 group-hover:text-cyan-400 transition-colors duration-300">Contact Me</span>
                  <motion.span
                    className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"
                  />
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 mt-6 sm:mt-8 md:mt-10 justify-center md:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              {[
                { icon: <FaGithub className="h-5 w-5" />, href: "https://github.com", label: "GitHub", hoverColor: "hover:text-cyan-400" },
                { icon: <FaLinkedinIn className="h-5 w-5" />, href: "https://linkedin.com", label: "LinkedIn", hoverColor: "hover:text-blue-500" },
                { icon: <FaEnvelope className="h-5 w-5" />, href: "mailto:contact@salmachakkour.com", label: "Email", hoverColor: "hover:text-purple-500" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-11 h-11 rounded-full glass flex items-center justify-center hover:bg-white/5 hover:border-white/40 transition-all duration-300 border border-white/10 ${item.hoverColor}`}
                  aria-label={item.label}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 15px rgba(6, 182, 212, 0.3)"
                  }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 1.9 + index * 0.1 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Visual Element - Interactive Tech Sphere with floating icons */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="w-full md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0 relative"
            style={{ perspective: 1000 }}
            onMouseEnter={() => setCursorVariant("sphere")}
            onMouseLeave={() => setCursorVariant("default")}
          >
            {/* Animated code blocks in background - hide on small mobile */}
            {isMounted && (
              <>
                <motion.div
                  className="absolute -left-20 top-10 p-3 max-w-[240px] rounded-lg bg-[#1e293b]/60 backdrop-blur-sm border border-cyan-500/20 shadow-lg transform -rotate-6 z-[1] hidden md:block overflow-hidden"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 0.8, x: 0 }}
                  transition={{ duration: 0.7, delay: 1.2 }}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <div className="text-xs text-gray-400 ml-2">test.spec.js</div>
                  </div>
                  <pre className="text-xs text-cyan-400 font-mono">
                    <code>
                      <div className="flex flex-col gap-1">
                        <span><span className="text-purple-400">describe</span>(<span className="text-green-300">'Authentication'</span>, <span className="text-blue-300">{'() => '}</span> {'{'}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.5, duration: 0.5 }}
                        >  <span className="text-purple-400">it</span>(<span className="text-green-300">'should login successfully'</span>, <span className="text-blue-300">{'async () => '}</span> {'{'}</motion.span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.8, duration: 0.5 }}
                        >    <span className="text-orange-300">await</span> page.fill(<span className="text-green-300">'#email'</span>, <span className="text-green-300">'user@test.com'</span>);</motion.span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 2.2, repeat: Infinity, repeatDelay: 5 }}
                          className="h-full"
                        >
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2, duration: 0.5 }}
                          >    <span className="text-orange-300">await</span> page.fill(<span className="text-green-300">'#password'</span>, <span className="text-green-300">'password123'</span>);</motion.span>
                        </motion.div>
                      </div>
                    </code>
                  </pre>
                </motion.div>
                
                <motion.div
                  className="absolute -right-12 bottom-10 p-3 max-w-[220px] rounded-lg bg-[#1e293b]/60 backdrop-blur-sm border border-purple-500/20 shadow-lg transform rotate-6 z-[1] hidden md:block overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 0.7, x: 0 }}
                  transition={{ duration: 0.7, delay: 1.4 }}
                >
                  <div className="flex items-center gap-1.5 mb-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                    <div className="text-xs text-gray-400 ml-2">automation.cy.ts</div>
                  </div>
                  <pre className="text-xs text-purple-300 font-mono">
                    <code>
                      <div className="flex flex-col gap-1">
                        <span><span className="text-blue-300">const</span> <span className="text-yellow-300">testData</span> = {'{'}
                          <span className="text-cyan-300">users</span>: [...]
                        {'}'}</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.6, duration: 0.5 }}
                        ><span className="text-blue-300">function</span> <span className="text-yellow-300">validateResponse</span>(<span className="text-orange-300">res</span>) {'{'}</motion.span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 1.9, duration: 0.5 }}
                        >  <span className="text-purple-400">expect</span>(res.<span className="text-cyan-300">status</span>).<span className="text-yellow-300">to.equal</span>(200);</motion.span>
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 1.5, delay: 2.4, repeat: Infinity, repeatDelay: 5 }}
                          className="h-full"
                        >
                          <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 2.2, duration: 0.5 }}
                          >  <span className="text-purple-400">expect</span>(res.<span className="text-cyan-300">body</span>).<span className="text-yellow-300">to.have.property</span>(<span className="text-green-300">'data'</span>);</motion.span>
                        </motion.div>
                      </div>
                    </code>
                  </pre>
                </motion.div>
              </>
            )}

            <motion.div
              ref={sphereRef}
              className="relative w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 group cursor-pointer"
              animate={{
                rotateY: parallax.x,
                rotateX: -parallax.y,
              }}
              transition={{ type: "spring", stiffness: 100, damping: 30 }}
              whileHover={{ scale: 1.05 }}
            >
              {/* QA/Automation Test Concepts */}
              {isMounted && [
                { text: "TEST", x: -140, y: -120, delay: 0.5, color: "text-cyan-400", rotate: -15 },
                { text: "API", x: 130, y: -90, delay: 0.7, color: "text-blue-500", rotate: 10 },
                { text: "UI", x: -100, y: 130, delay: 0.9, color: "text-cyan-400", rotate: 5 },
                { text: "E2E", x: 120, y: 100, delay: 1.1, color: "text-purple-500", rotate: -5 },
                { text: "jest", x: -50, y: -150, delay: 1.3, color: "text-red-400", rotate: 8 },
                { text: "CI/CD", x: 90, y: -40, delay: 1.5, color: "text-green-400", rotate: -8 },
                { text: "Selenium", x: -120, y: 50, delay: 1.7, color: "text-blue-500", rotate: 12 },
                { text: "Cypress", x: 30, y: 140, delay: 1.9, color: "text-cyan-400", rotate: -10 },
                { text: "Puppeteer", x: 140, y: 30, delay: 2.1, color: "text-purple-500", rotate: 15 },
              ].map((item, index) => (
                <motion.div
                  key={`concept-${index}`}
                  className={`absolute font-mono text-xs font-bold ${item.color} top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 whitespace-nowrap`}
                  style={{ 
                    x: item.x, 
                    y: item.y,
                    rotate: item.rotate 
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: [0, 0.9, 0.9, 0],
                    scale: [0, 1, 1, 0.8]
                  }}
                  transition={{
                    duration: 8,
                    delay: item.delay,
                    repeat: Infinity,
                    repeatDelay: Math.random() * 8,
                    times: [0, 0.1, 0.9, 1]
                  }}
                >
                  {item.text}
                </motion.div>
              ))}
              
              {/* Floating technology icons around the sphere - only rendered client-side */}
              {isMounted && floatingIcons.map((item, index) => (
                <motion.div
                  key={index}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white/80 z-10"
                  initial={{
                    x: item.initialPosition.x,
                    y: item.initialPosition.y,
                    opacity: 0,
                  }}
                  animate={{
                    x: [
                      item.initialPosition.x,
                      item.initialPosition.x + (Math.random() * 20 - 10),
                      item.initialPosition.x,
                    ],
                    y: [
                      item.initialPosition.y,
                      item.initialPosition.y + (Math.random() * 20 - 10),
                      item.initialPosition.y,
                    ],
                    opacity: [0, 0.8, 0.8, 0],
                  }}
                  transition={{
                    duration: Math.random() * 4 + 6,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                    delay: index * 0.5,
                    opacity: {
                      duration: Math.random() * 4 + 6,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      times: [0, 0.2, 0.8, 1],
                    },
                  }}
                >
                  <item.Icon style={{ color: item.color, fontSize: item.size }} />
                </motion.div>
              ))}
              
              {/* Workflow lines connecting elements (like a test flow diagram) */}
              {isMounted && (
                <>
                  <motion.div 
                    className="absolute top-1/2 left-1/2 w-[350px] h-[350px] transform -translate-x-1/2 -translate-y-1/2 rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.3 }}
                    transition={{ duration: 1, delay: 2.5 }}
                  >
                    {[...Array(5)].map((_, i) => (
                      <motion.div
                        key={`flow-${i}`}
                        className="absolute top-1/2 left-1/2 h-px bg-gradient-to-r from-cyan-500/30 via-purple-500/30 to-transparent"
                        style={{ 
                          width: 150,
                          rotate: i * 72,
                          transformOrigin: 'left center'
                        }}
                        initial={{ opacity: 0 }}
                        animate={{ 
                          opacity: [0, 0.7, 0],
                          scaleX: [0, 1, 1]
                        }}
                        transition={{
                          duration: 4,
                          delay: 2 + i * 0.3,
                          repeat: Infinity,
                          repeatDelay: 6
                        }}
                      />
                    ))}
                  </motion.div>
                </>
              )}
              
              {/* Rotating outlines with dynamic effects */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-2 border-cyan-500/30 rounded-full"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  rotate: -360,
                  borderColor: ["rgba(6, 182, 212, 0.2)", "rgba(139, 92, 246, 0.2)", "rgba(6, 182, 212, 0.2)"],
                }}
                transition={{ 
                  rotate: { duration: 40, repeat: Infinity, ease: "linear" },
                  borderColor: { duration: 8, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-4 border border-[var(--accent)]/20 rounded-full"
              ></motion.div>
              
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.03, 1],
                }}
                transition={{ 
                  rotate: { duration: 30, repeat: Infinity, ease: "linear" },
                  scale: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                }}
                className="absolute inset-8 border-2 border-purple-500/20 rounded-full"
              ></motion.div>
              
              {/* Central glass sphere with QA/testing visualization */}
              <motion.div 
                className="absolute inset-12 rounded-full glass flex items-center justify-center overflow-hidden border border-cyan-500/20"
                whileHover={{ boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)" }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="absolute inset-0 bg-[#1e293b]/80 rounded-full overflow-hidden"
                >
                  {/* Animated checkmarks and test results visualization */}
                  {isMounted && (
                    <div className="absolute inset-0 flex items-center justify-center opacity-70">
                      <div className="w-3/4 h-3/4 relative">
                        {[...Array(5)].map((_, i) => (
                          <motion.div
                            key={`check-${i}`}
                            className="absolute bg-green-500 rounded-full flex items-center justify-center"
                            style={{
                              top: `${20 + (i % 3) * 30}%`,
                              left: `${15 + ((i + 1) % 3) * 30}%`,
                              width: 16,
                              height: 16,
                              opacity: 0
                            }}
                            animate={{
                              opacity: [0, 1, 1, 0],
                              scale: [0.5, 1.2, 1, 0.8]
                            }}
                            transition={{
                              duration: 2.5,
                              delay: i * 0.8,
                              repeat: Infinity,
                              repeatDelay: 5
                            }}
                          >
                            <span className="text-xs">✓</span>
                          </motion.div>
                        ))}
                        
                        {/* Animation "progress" bars like test runners */}
                        {[...Array(3)].map((_, i) => (
                          <motion.div
                            key={`progress-${i}`}
                            className="absolute h-1.5 rounded-full"
                            style={{
                              top: `${65 + i * 10}%`,
                              left: '15%',
                              width: '70%',
                              backgroundColor: '#1e293b',
                              borderRadius: '8px',
                              overflow: 'hidden'
                            }}
                          >
                            <motion.div
                              className="h-full bg-gradient-to-r from-cyan-400 to-blue-500"
                              initial={{ width: 0 }}
                              animate={{ width: '100%' }}
                              transition={{
                                duration: 3.5 + i * 0.8,
                                delay: 1 + i * 1.5,
                                repeat: Infinity,
                                repeatDelay: 7 - i
                              }}
                            />
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
                
                {/* Main centered icon with pulse effect */}
                <motion.div 
                  className="text-cyan-400 z-10"
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.5, 0.8, 0.5]
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FaCode className="text-6xl" />
                </motion.div>
              </motion.div>
              
              {/* Orbit particles - only rendered client-side */}
              {isMounted && [...Array(12)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute top-1/2 left-1/2 w-2 h-2 rounded-full ${i % 3 === 0 ? 'bg-cyan-400/60' : i % 3 === 1 ? 'bg-purple-500/60' : 'bg-blue-500/60'}`}
                  initial={{
                    x: Math.cos(i / 12 * 2 * Math.PI) * 160,
                    y: Math.sin(i / 12 * 2 * Math.PI) * 160,
                    opacity: 0.4 + Math.random() * 0.4,
                    scale: 0.5 + Math.random() * 0.5,
                  }}
                  animate={{
                    x: [
                      Math.cos(i / 12 * 2 * Math.PI) * 160,
                      Math.cos((i / 12 * 2 * Math.PI) + 0.2) * 160,
                      Math.cos(i / 12 * 2 * Math.PI) * 160,
                    ],
                    y: [
                      Math.sin(i / 12 * 2 * Math.PI) * 160,
                      Math.sin((i / 12 * 2 * Math.PI) + 0.2) * 160,
                      Math.sin(i / 12 * 2 * Math.PI) * 160,
                    ],
                    opacity: [0.4, 0.8, 0.4],
                  }}
                  transition={{
                    duration: 3 + i % 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden sm:block"
      >
        <motion.div 
          className="flex flex-col items-center cursor-pointer"
          whileHover={{ scale: 1.1 }}
          onClick={() => scrollToSection('about')}
        >
          <motion.p 
            className="text-[var(--text-light)]/50 text-sm mb-2"
            animate={{ opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            Scroll Down
          </motion.p>
          <div className="w-7 h-11 rounded-full border-2 border-[var(--text-light)]/20 flex justify-center items-start p-1">
            <motion.div 
              animate={{ 
                y: [0, 16, 0],
                backgroundColor: ["rgb(6, 182, 212)", "rgb(139, 92, 246)", "rgb(6, 182, 212)"],
              }}
              transition={{ 
                y: { repeat: Infinity, duration: 2, ease: "easeInOut" },
                backgroundColor: { repeat: Infinity, duration: 5, ease: "easeInOut" },
              }}
              className="w-2 h-2 rounded-full bg-[var(--accent)]"
            ></motion.div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
} 