"use client";

import React, { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  FaBriefcase, 
  FaGraduationCap, 
  FaCheckCircle, 
  FaCode, 
  FaStar, 
  FaMapMarkerAlt, 
  FaCalendarAlt, 
  FaTrophy,
  FaCertificate,
  FaTools,
  FaLaptopCode,
  FaRocket,
  FaServer,
  FaChartLine,
  FaUsers
} from "react-icons/fa";
import { TbTestPipe } from "react-icons/tb";
import { BsArrowRight } from "react-icons/bs";
import { SiJenkins, SiCypress, SiSelenium, SiJira } from "react-icons/si";

// Enhanced experiences data with skills and achievements
const experiences = [
  {
    title: "Senior QA Automation Engineer",
    company: "TechInnovate Solutions",
    location: "Remote",
    period: "2021 - Present",
    description: [
      "Lead a team of 5 QA engineers in designing and implementing automated testing strategies",
      "Architected and developed a comprehensive test automation framework using Cypress and JavaScript",
      "Reduced regression testing time by 70% through intelligent test selection and parallel execution",
      "Implemented advanced CI/CD pipelines for continuous testing using GitHub Actions",
      "Collaborated with cross-functional teams to define and enforce quality standards",
    ],
    skills: ["Cypress", "JavaScript", "CI/CD", "Leadership", "Test Architecture"],
    achievements: [
      { title: "70% Reduction", description: "in regression test time" },
      { title: "99.2% Test Coverage", description: "across critical systems" }
    ],
    technologies: [
      { name: "Cypress", icon: <SiCypress /> },
      { name: "Jenkins", icon: <SiJenkins /> },
      { name: "JavaScript", icon: <FaCode /> }
    ],
    type: "work",
    featured: true,
  },
  {
    title: "QA Automation Engineer",
    company: "Global Financial Tech",
    location: "New York, NY",
    period: "2018 - 2021",
    description: [
      "Designed and implemented test automation frameworks using Selenium WebDriver and Java",
      "Created and maintained over 300 automated test cases for web and mobile applications",
      "Conducted performance testing using JMeter and identified critical bottlenecks",
      "Integrated automated tests into CI/CD pipeline with Jenkins",
      "Performed API testing using RestAssured and Postman",
    ],
    skills: ["Selenium", "Java", "JMeter", "RestAssured", "Jenkins"],
    achievements: [
      { title: "300+ Test Cases", description: "automated & maintained" },
      { title: "40% Faster", description: "release cycles" }
    ],
    technologies: [
      { name: "Selenium", icon: <SiSelenium /> },
      { name: "Java", icon: <FaLaptopCode /> },
      { name: "Jenkins", icon: <SiJenkins /> }
    ],
    type: "work",
    featured: true,
  },
  {
    title: "QA Engineer",
    company: "InnovateTech Inc.",
    location: "Boston, MA",
    period: "2016 - 2018",
    description: [
      "Executed manual testing for web and mobile applications",
      "Documented detailed test cases and test plans",
      "Collaborated with developers to identify and resolve issues",
      "Introduced basic automation testing using Selenium",
      "Managed defect tracking and reporting using JIRA",
    ],
    skills: ["Manual Testing", "JIRA", "Test Planning", "Selenium", "Agile"],
    achievements: [
      { title: "First Automation", description: "initiative at company" },
      { title: "25% Defect Reduction", description: "through process improvements" }
    ],
    technologies: [
      { name: "JIRA", icon: <SiJira /> },
      { name: "Selenium", icon: <SiSelenium /> },
      { name: "Testing", icon: <TbTestPipe /> }
    ],
    type: "work",
    featured: false,
  },
  {
    title: "Master of Science in Computer Science",
    company: "Boston University",
    location: "Boston, MA",
    period: "2014 - 2016",
    description: [
      "Specialized in Software Engineering and Quality Assurance",
      "Conducted research on automated testing methodologies",
      "Graduate project: 'Automated Testing Framework for Microservices Architecture'",
      "Teaching Assistant for Software Quality Assurance course",
      "Published research paper on test automation for modern architectures"
    ],
    skills: ["Research", "Microservices", "Test Automation", "Academic Writing"],
    achievements: [
      { title: "Published Paper", description: "in IEEE conference" },
      { title: "3.9 GPA", description: "academic excellence" }
    ],
    certifications: [
      "Distinguished Graduate Award",
      "Academic Excellence Scholarship"
    ],
    type: "education",
    featured: true,
  },
  {
    title: "Bachelor of Science in Computer Science",
    company: "University of Massachusetts",
    location: "Amherst, MA",
    period: "2010 - 2014",
    description: [
      "Coursework included Software Engineering, Database Systems, and Web Development",
      "Senior project: 'Quality Assurance in Agile Development'",
      "Internship with local software company focusing on QA processes",
      "Member of university's Computer Science Club",
      "Dean's List for 6 semesters"
    ],
    skills: ["Software Engineering", "Databases", "Web Development", "QA Fundamentals"],
    achievements: [
      { title: "Dean's List", description: "6 semesters" },
      { title: "Outstanding Project", description: "senior year award" }
    ],
    certifications: [
      "Dean's List Honor Student"
    ],
    type: "education",
    featured: false,
  },
];

export default function Experience() {
  const [filterActive, setFilterActive] = useState("work");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.1 });
  
  // Filter the experiences or show all
  const filteredExperiences = filterActive === "All" 
    ? experiences 
    : experiences.filter(exp => exp.type === filterActive);

  // Functions to handle experience card expansion
  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

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
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 100, damping: 12 }
    }
  };

  return (
    <section 
      id="experience" 
      ref={containerRef}
      className="py-20 md:py-32 section-bg light-top-left relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-experience" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-experience)" />
        </svg>
        
        {/* Decorative elements */}
        {isInView && (
          <>
            <motion.div
              className="absolute w-64 h-64 rounded-full border border-cyan-500/20 top-1/4 -left-20"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.3, scale: 1 }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
            />
            <motion.div
              className="absolute w-96 h-96 rounded-full border border-blue-500/20 top-1/2 -right-32"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 0.2, scale: 1 }}
              transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", delay: 0.5 }}
            />
          </>
        )}
      </div>

      <div className="section-content container mx-auto px-6 relative z-10">
        <div className="mb-12 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Professional <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">Timeline</span>
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
            className="max-w-3xl mx-auto text-base md:text-lg text-[var(--text-light)]/80 leading-relaxed mb-4"
          >
            A journey of continuous growth in quality engineering and test automation excellence, 
            delivering measurable impact at leading organizations.
          </motion.p>
        </div>
        
        {/* Filter tabs */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center gap-4 mb-12"
        >
          <button 
            onClick={() => setFilterActive("work")}
            className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 ${ 
              filterActive === "work" 
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20" 
                : "glass hover:bg-white/5 hover:text-cyan-400"
            }`}
          >
            <FaBriefcase className="h-4 w-4" />
            Professional Experience
          </button>
          <button 
            onClick={() => setFilterActive("education")}
            className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 ${ 
              filterActive === "education" 
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20" 
                : "glass hover:bg-white/5 hover:text-cyan-400"
            }`}
          >
            <FaGraduationCap className="h-4 w-4" />
            Academic Background
          </button>
          <button 
            onClick={() => setFilterActive("All")}
            className={`px-5 py-2.5 rounded-full flex items-center gap-2 text-sm font-medium transition-all duration-300 ${ 
              filterActive === "All" 
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20" 
                : "glass hover:bg-white/5 hover:text-cyan-400"
            }`}
          >
            <FaCheckCircle className="h-4 w-4" />
            Show All
          </button>
        </motion.div>
        
        {/* Timeline */}
        <AnimatePresence mode="wait">
          <motion.div 
            key={filterActive}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="relative max-w-5xl mx-auto"
          >
            {/* Central line for timeline */}
            <div className="absolute hidden lg:block left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-400/30 via-blue-500/20 to-purple-600/10" />
            
            {/* Experience items */}
            {filteredExperiences.map((exp, index) => {
              const expId = `${exp.company}-${exp.period}`;
              const isExpanded = expandedId === expId;
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={expId}
                  variants={itemVariants}
                  className={`relative flex flex-col lg:flex-row items-stretch mb-10 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  {/* Timeline node */}
                  <div className="absolute hidden lg:flex left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-cyan-400/20 to-blue-500/20 rounded-full border-2 border-cyan-400 z-10 items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-white">
                      {exp.type === "work" ? <FaBriefcase className="w-3 h-3" /> : <FaGraduationCap className="w-3 h-3" />}
                    </div>
                  </div>
                  
                  {/* Timeline card */}
                  <div 
                    className={`w-full lg:w-1/2 flex ${isEven ? 'lg:pr-10 lg:justify-end' : 'lg:pl-10 lg:justify-start'}`}
                  >
                    <motion.div
                      whileHover={{ y: -5 }}
                      onClick={() => toggleExpand(expId)}
                      className={`glass p-6 rounded-xl border transition-all duration-300 w-full max-w-lg cursor-pointer ${
                        isExpanded 
                          ? 'border-cyan-500/50 shadow-lg shadow-cyan-500/10' 
                          : 'border-white/5 hover:border-cyan-500/30'
                      }`}
                    >
                      {/* Featured badge */}
                      {exp.featured && (
                        <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-cyan-400 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1">
                          <FaStar className="w-3 h-3" />
                          <span>Featured</span>
                        </div>
                      )}
                      
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-semibold mb-1">{exp.title}</h3>
                        <div className="text-lg font-medium text-cyan-400">{exp.company}</div>
                      </div>
                      
                      {/* Meta information */}
                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-[var(--text-light)]/70">
                        <div className="flex items-center gap-1">
                          <FaCalendarAlt className="text-blue-400" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <FaMapMarkerAlt className="text-purple-400" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      
                      {/* Technologies */}
                      <div className="flex gap-3 mb-4">
                        {exp.technologies?.map((tech, i) => (
                          <div 
                            key={i}
                            className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-500/10 to-blue-500/10 flex items-center justify-center text-cyan-400"
                          >
                            {tech.icon}
                          </div>
                        ))}
                      </div>
                      
                      {/* Skills */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {exp.skills.map((skill, i) => (
                          <span 
                            key={i}
                            className="px-2.5 py-0.5 text-xs rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                      
                      {/* Preview of responsibilities */}
                      <div className="text-sm text-[var(--text-light)]/70 mb-2">
                        {exp.description[0]}{isExpanded ? '' : '...'}
                      </div>
                      
                      {/* Expand/collapse button */}
                      <div className="flex justify-end">
                        <button 
                          className="text-xs flex items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors"
                        >
                          {isExpanded ? 'Show less' : 'Read more'}
                          <BsArrowRight className={`transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`} />
                        </button>
                      </div>
                      
                      {/* Expanded content */}
                      <AnimatePresence>
                        {isExpanded && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="pt-4 mt-4 border-t border-white/10"
                          >
                            {/* Responsibilities */}
                            <div className="mb-6">
                              <h4 className="text-sm font-medium mb-3 text-cyan-400">Key Responsibilities</h4>
                              <ul className="space-y-2">
                                {exp.description.map((item, i) => (
                                  <motion.li 
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="flex items-start gap-2 text-sm text-[var(--text-light)]/80"
                                  >
                                    <FaCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                                    <span>{item}</span>
                                  </motion.li>
                                ))}
                              </ul>
                            </div>
                            
                            {/* Achievements */}
                            {exp.achievements && (
                              <div className="mb-6">
                                <h4 className="text-sm font-medium mb-3 text-cyan-400 flex items-center gap-1.5">
                                  <FaTrophy className="text-yellow-400" /> Key Accomplishments
                                </h4>
                                <div className="grid grid-cols-2 gap-2">
                                  {exp.achievements.map((achievement, i) => (
                                    <motion.div
                                      key={i}
                                      initial={{ opacity: 0, scale: 0.9 }}
                                      animate={{ opacity: 1, scale: 1 }}
                                      transition={{ delay: i * 0.2 }}
                                      className="glass p-3 rounded-lg text-center"
                                    >
                                      <div className="text-lg font-bold text-cyan-400">{achievement.title}</div>
                                      <div className="text-xs text-[var(--text-light)]/60">{achievement.description}</div>
                                    </motion.div>
                                  ))}
                                </div>
                              </div>
                            )}
                            
                            {/* Certifications */}
                            {exp.certifications && (
                              <div>
                                <h4 className="text-sm font-medium mb-3 text-cyan-400 flex items-center gap-1.5">
                                  <FaCertificate className="text-yellow-400" /> Honors & Awards
                                </h4>
                                <ul className="space-y-1">
                                  {exp.certifications.map((cert, i) => (
                                    <motion.li
                                      key={i}
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ delay: i * 0.1 }}
                                      className="flex items-center gap-2 text-sm text-[var(--text-light)]/70"
                                    >
                                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                      {cert}
                                    </motion.li>
                                  ))}
                                </ul>
                              </div>
                            )}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden lg:block w-1/2" />
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
        
        {/* Career progression */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-16 max-w-4xl mx-auto"
        >
          <h3 className="text-2xl font-semibold mb-6 text-center">
            Growth <span className="text-cyan-400">Journey</span>
          </h3>
          
          <div className="relative">
            {/* Career path line */}
            <div className="absolute left-0 right-0 top-1/2 h-1 bg-gradient-to-r from-blue-500/20 via-cyan-400/20 to-purple-600/20 transform -translate-y-1/2 rounded-full" />
            
            <div className="flex justify-between relative">
              {[
                { year: "2016", role: "QA Engineer", icon: <TbTestPipe /> },
                { year: "2018", role: "Automation Engineer", icon: <FaLaptopCode /> },
                { year: "2021", role: "Senior QA Engineer", icon: <FaServer /> },
                { year: "2023", role: "Lead QA Engineer", icon: <FaUsers /> },
                { year: "Future", role: "QA Architect", icon: <FaRocket /> }
              ].map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400 flex items-center justify-center text-cyan-400 mb-3 relative z-10">
                    {milestone.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-bold text-cyan-400">{milestone.year}</div>
                    <div className="text-xs text-[var(--text-light)]/70">{milestone.role}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 