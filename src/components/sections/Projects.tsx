"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  FaGithub, 
  FaExternalLinkAlt, 
  FaCode, 
  FaCubes, 
  FaLink, 
  FaChartBar, 
  FaMobileAlt, 
  FaServer, 
  FaDatabase,
  FaRocket,
  FaTools,
  FaCodeBranch,
  FaCheck
} from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";
import { SiCypress, SiJenkins, SiSelenium, SiMeteor } from "react-icons/si";
import { BiTestTube } from "react-icons/bi";

// Enhanced projects with more details
const projects = [
  {
    title: "Enterprise Test Automation Framework",
    description: "Designed and implemented a scalable test automation framework using Selenium WebDriver and Java for a large e-commerce platform, resulting in 60% reduction in regression testing time.",
    icon: <TbTestPipe className="text-cyan-400"/>,
    image: "/images/projects/test-automation.jpg",
    tags: ["Java", "Selenium", "TestNG", "Maven", "Jenkins"],
    category: "Framework",
    links: {
      demo: "https://example.com/demo1",
      code: "https://github.com/salma-chakkour/test-automation-framework",
    },
    metrics: [
      { label: "Test Coverage", value: "85%" },
      { label: "Time Saved", value: "60%" }
    ],
    featured: true
  },
  {
    title: "API Testing Suite",
    description: "Built a comprehensive API testing solution using RestAssured and JUnit that automatically validates RESTful services, with detailed reporting and CI integration.",
    icon: <FaLink className="text-blue-500"/>,
    image: "/images/projects/api-testing.jpg",
    tags: ["Java", "RestAssured", "JUnit", "GitHub Actions", "Allure"],
    category: "API",
    links: {
      demo: "https://example.com/demo2",
      code: "https://github.com/salma-chakkour/api-testing-suite",
    },
    metrics: [
      { label: "Endpoints", value: "120+" },
      { label: "Success Rate", value: "99.5%" }
    ],
    featured: true
  },
  {
    title: "Performance Testing Dashboard",
    description: "Created a real-time dashboard for visualizing performance testing results from JMeter, helping teams quickly identify bottlenecks and performance regressions.",
    icon: <SiMeteor className="text-orange-500"/>,
    image: "/images/projects/performance-dashboard.jpg",
    tags: ["JMeter", "Grafana", "InfluxDB", "Docker", "JavaScript"],
    category: "Performance",
    links: {
      demo: "https://example.com/demo3",
      code: "https://github.com/salma-chakkour/performance-dashboard",
    },
    metrics: [
      { label: "Real-time", value: "Yes" },
      { label: "Data Points", value: "1M+" }
    ],
    featured: true
  },
  {
    title: "Mobile Automation Framework",
    description: "Developed a cross-platform mobile testing framework using Appium that supports both Android and iOS, with parallel execution capabilities.",
    icon: <FaMobileAlt className="text-green-500"/>,
    image: "/images/projects/mobile-automation.jpg",
    tags: ["Appium", "Java", "TestNG", "Docker", "Browserstack"],
    category: "Mobile",
    links: {
      demo: "https://example.com/demo4",
      code: "https://github.com/salma-chakkour/mobile-automation",
    },
    metrics: [
      { label: "Platforms", value: "2" },
      { label: "Devices", value: "50+" }
    ],
    featured: false
  },
  {
    title: "CI/CD Pipeline for Test Automation",
    description: "Architected and implemented a complete CI/CD pipeline for automated testing that seamlessly integrates with the development workflow.",
    icon: <SiJenkins className="text-red-400"/>,
    image: "/images/projects/cicd-pipeline.jpg",
    tags: ["Jenkins", "Docker", "Kubernetes", "GitOps", "Shell Scripting"],
    category: "DevOps",
    links: {
      demo: "https://example.com/demo5",
      code: "https://github.com/salma-chakkour/cicd-pipeline",
    },
    metrics: [
      { label: "Build Time", value: "-40%" },
      { label: "Reliability", value: "99.9%" }
    ],
    featured: false
  },
  {
    title: "Test Data Management Tool",
    description: "Built a custom tool for generating, managing, and provisioning test data across different environments, significantly reducing test setup time.",
    icon: <FaDatabase className="text-purple-500"/>,
    image: "/images/projects/test-data.jpg",
    tags: ["Python", "FastAPI", "PostgreSQL", "React", "Docker"],
    category: "Tools",
    links: {
      demo: "https://example.com/demo6",
      code: "https://github.com/salma-chakkour/test-data-tool",
    },
    metrics: [
      { label: "Setup Time", value: "-70%" },
      { label: "Data Sets", value: "1000+" }
    ],
    featured: false
  },
  {
    title: "Cypress E2E Framework",
    description: "Implemented a comprehensive E2E testing solution using Cypress with custom commands, POM pattern, and detailed reporting for a complex web application.",
    icon: <SiCypress className="text-green-400"/>,
    image: "/images/projects/cypress-framework.jpg",
    tags: ["Cypress", "JavaScript", "TypeScript", "GitHub Actions", "Mochawesome"],
    category: "Framework",
    links: {
      demo: "https://example.com/demo7",
      code: "https://github.com/salma-chakkour/cypress-framework",
    },
    metrics: [
      { label: "Test Speed", value: "+65%" },
      { label: "Coverage", value: "92%" }
    ],
    featured: false
  },
  {
    title: "Visual Regression Testing",
    description: "Created a visual regression testing system that automatically detects UI changes and provides detailed reports with side-by-side comparisons.",
    icon: <FaCheck className="text-blue-400"/>,
    image: "/images/projects/visual-testing.jpg",
    tags: ["JavaScript", "Percy", "Jest", "CI/CD", "HTML/CSS"],
    category: "Tools",
    links: {
      demo: "https://example.com/demo8",
      code: "https://github.com/salma-chakkour/visual-regression",
    },
    metrics: [
      { label: "Accuracy", value: "99.2%" },
      { label: "Issues Found", value: "235+" }
    ],
    featured: false
  },
];

const categories = ["All", "Framework", "API", "Performance", "Mobile", "DevOps", "Tools"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const [activeCardIndex, setActiveCardIndex] = useState<number | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.2 });
  
  const filteredProjects = activeCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    },
    exit: { 
      y: -30, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <section id="projects" className="py-16 sm:py-20 md:py-32 section-bg light-bottom-right relative overflow-hidden" ref={containerRef}>
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-projects" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-projects)" />
        </svg>
        
        {/* Animated code particles */}
        {isInView && Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute opacity-20 text-cyan-400"
            style={{
              fontSize: Math.random() * 14 + 10,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -100 - 50],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.2, 0, 0.2, 0],
              rotate: [0, Math.random() * 360]
            }}
            transition={{
              duration: Math.random() * 15 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            {index % 2 === 0 ? <BiTestTube /> : <TbTestPipe />}
          </motion.div>
        ))}
      </div>

      <div className="section-content container mx-auto px-4 sm:px-6 relative z-10">
        <div className="mb-10 sm:mb-12 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6"
          >
            Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">Projects</span>
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "120px" }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="h-1.5 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"
          ></motion.div>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="max-w-3xl mx-auto text-sm sm:text-base md:text-lg text-[var(--text-light)]/80 leading-relaxed"
          >
            A showcase of test automation and quality engineering systems I've designed and implemented, 
            delivering measurable value through enhanced testing efficiency and quality assurance.
          </motion.p>
        </div>
        
        {/* Category filters - Scrollable on mobile */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-nowrap justify-start sm:justify-center gap-2 sm:gap-3 mb-8 sm:mb-12 overflow-x-auto pb-3 sm:pb-0 hide-scrollbar"
        >
          {categories.map(category => (
            <button
              key={category}
              onClick={() => {
                setActiveCardIndex(null);
                setActiveCategory(category);
              }}
              className={`px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${ 
                activeCategory === category 
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20" 
                  : "glass hover:bg-white/5 hover:text-cyan-400"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={activeCategory}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 }
                }}
                onHoverStart={() => setHoveredProject(project.title)}
                onHoverEnd={() => setHoveredProject(null)}
                onClick={() => setActiveCardIndex(activeCardIndex === index ? null : index)}
                className={`glass rounded-xl overflow-hidden border transition-all duration-300 flex flex-col cursor-pointer ${
                  activeCardIndex === index 
                    ? "border-cyan-500/50 shadow-lg shadow-cyan-500/10" 
                    : "border-white/5 hover:border-cyan-500/30"
                }`}
              >
                {/* Project card header */}
                <div className="h-3 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform duration-500" 
                  style={{ 
                    transform: hoveredProject === project.title || activeCardIndex === index
                      ? 'scaleX(1)' 
                      : 'scaleX(0.3)' 
                  }}
                />
                
                <div className="p-4 sm:p-6 flex-grow">
                  <div className="flex items-center justify-between mb-3 sm:mb-4">
                    <h3 className="text-lg sm:text-xl font-semibold">{project.title}</h3>
                    <span className="text-2xl sm:text-3xl">{project.icon}</span>
                  </div>
                  
                  <p className="text-xs sm:text-sm text-[var(--text-light)]/70 mb-4 sm:mb-5 leading-relaxed">{project.description}</p>
                  
                  {/* Project metrics */}
                  <div className="grid grid-cols-2 gap-2 mb-4 sm:mb-5">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="glass p-2 rounded text-center text-xs">
                        <div className="text-cyan-400 font-bold mb-1">{metric.value}</div>
                        <div className="text-[var(--text-light)]/60">{metric.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-1 sm:mb-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="px-1.5 sm:px-2.5 py-0.5 sm:py-1 text-[10px] sm:text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Project card footer */}
                <div className="border-t border-white/5 p-3 sm:p-4 bg-[var(--dark-surface)]/20">
                  <div className="flex justify-between items-center">
                    <a 
                      href={project.links.code} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-[var(--text-light)]/80 hover:text-cyan-400 transition-colors"
                      aria-label={`View code for ${project.title}`}
                    >
                      <FaGithub className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span>Repository</span>
                    </a>
                    <a 
                      href={project.links.demo} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="flex items-center gap-1 sm:gap-1.5 text-xs sm:text-sm text-[var(--text-light)]/80 hover:text-cyan-400 transition-colors"
                      aria-label={`View demo for ${project.title}`}
                    >
                      <FaExternalLinkAlt className="h-2.5 w-2.5 sm:h-3.5 sm:w-3.5" />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
                
                {/* Expanded details (shown when card is clicked) */}
                {activeCardIndex === index && (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="border-t border-white/5 p-5"
                  >
                    <h4 className="text-sm font-medium mb-3 text-cyan-400">Additional Information</h4>
                    <p className="text-xs text-[var(--text-light)]/70 mb-4">
                      This project demonstrates advanced automation techniques and best practices in quality assurance. 
                      It features extensive test coverage, detailed reporting, and integration with modern CI/CD pipelines.
                    </p>
                    <div className="flex gap-3">
                      <a 
                        href={project.links.code} 
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="px-4 py-2 rounded-full text-xs bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-sm"
                      >
                        View Details
                      </a>
                    </div>
                  </motion.div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* CTA Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-10 sm:mt-12 md:mt-16 text-center"
        >
          <a 
            href="https://github.com/salma-chakkour"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-sm sm:text-base font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            <FaGithub className="h-4 w-4 sm:h-5 sm:w-5" />
            Explore More on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
}