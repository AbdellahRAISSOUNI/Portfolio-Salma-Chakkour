"use client";

import React from 'react';
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaTools, 
  FaCode, 
  FaCubes, 
  FaServer, 
  FaCheckCircle,
  FaMobileAlt,
  FaDatabase,
  FaShieldAlt,
  FaChartBar,
  FaUsers,
  FaLink,
  FaBug,
  FaTasks,
  FaChartLine,
  FaRobot,
  FaVial,
  FaClipboardCheck,
  FaNetworkWired,
  FaGraduationCap,
  FaTheaterMasks,
} from "react-icons/fa";
import { SiCypress, SiSelenium, SiPostman, SiJenkins, SiJirasoftware, SiGithubactions, SiDocker, SiKubernetes } from "react-icons/si";
import { TbTestPipe, TbApi, TbBrandCucumber } from "react-icons/tb";
import { AiFillApi } from "react-icons/ai";
import { BiTestTube, BiCodeBlock } from "react-icons/bi";
import { MdSpeed, MdAutoGraph, MdOutlineIntegrationInstructions } from "react-icons/md";

// Types for our data structures
type SkillLevel = {
  level: string;
  range: [number, number];
  color: string;
};

type Skill = {
  name: string;
  proficiency: number;
  icon: React.ReactNode;
};

type SkillCategory = {
  name: string;
  icon: React.ReactNode;
  description: string;
  skills: Skill[];
};

type TestingType = {
  name: string;
  icon: React.ReactNode;
  description: string;
  tools: string[];
};

type Certification = {
  name: string;
  year: string;
  issuer: string;
};

// Add skill ranking levels with descriptors
const SkillLevels: SkillLevel[] = [
  { level: "Novice", range: [0, 25], color: "bg-blue-300" },
  { level: "Intermediate", range: [26, 50], color: "bg-blue-400" },
  { level: "Experienced", range: [51, 75], color: "bg-cyan-500" },
  { level: "Advanced", range: [76, 85], color: "bg-blue-500" },
  { level: "Expert", range: [86, 100], color: "bg-purple-500" },
];

// Main skill categories
const skillCategories: SkillCategory[] = [
  {
    name: "Automation Frameworks",
    icon: <TbTestPipe className="w-7 h-7"/>,
    description: "Industry-standard tools for creating robust, scalable test automation solutions",
    skills: [
      { name: "Selenium WebDriver", proficiency: 92, icon: <SiSelenium className="text-green-400" /> },
      { name: "Cypress", proficiency: 88, icon: <SiCypress className="text-green-400" /> },
      { name: "Playwright", proficiency: 84, icon: <FaTheaterMasks className="text-blue-500" /> },
      { name: "Appium", proficiency: 78, icon: <FaMobileAlt className="text-purple-400" /> },
      { name: "RestAssured", proficiency: 90, icon: <AiFillApi className="text-orange-400" /> },
    ],
  },
  {
    name: "Programming & Scripting",
    icon: <BiCodeBlock className="w-7 h-7"/>,
    description: "Languages and techniques for building powerful, maintainable test code",
    skills: [
      { name: "JavaScript", proficiency: 94, icon: <FaCode className="text-yellow-400" /> },
      { name: "TypeScript", proficiency: 90, icon: <FaCode className="text-blue-400" /> },
      { name: "Java", proficiency: 88, icon: <FaCode className="text-orange-400" /> },
      { name: "Python", proficiency: 82, icon: <FaCode className="text-green-400" /> },
      { name: "Gherkin/BDD", proficiency: 86, icon: <TbBrandCucumber className="text-green-500" /> },
    ],
  },
  {
    name: "Test Strategy & Design",
    icon: <FaClipboardCheck className="w-7 h-7"/>,
    description: "Methodologies and approaches for comprehensive test coverage",
    skills: [
      { name: "Test Pyramids", proficiency: 95, icon: <BiTestTube className="text-blue-400" /> },
      { name: "BDD/ATDD", proficiency: 90, icon: <FaCheckCircle className="text-green-500" /> },
      { name: "Page Object Pattern", proficiency: 96, icon: <FaCubes className="text-yellow-500" /> },
      { name: "Data-Driven Testing", proficiency: 92, icon: <FaDatabase className="text-purple-400" /> },
      { name: "Visual Testing", proficiency: 85, icon: <FaChartLine className="text-pink-400" /> },
    ],
  },
  {
    name: "CI/CD & DevOps",
    icon: <FaNetworkWired className="w-7 h-7"/>,
    description: "Tools and practices for continuous testing in modern delivery pipelines",
    skills: [
      { name: "Jenkins", proficiency: 88, icon: <SiJenkins className="text-blue-400" /> },
      { name: "GitHub Actions", proficiency: 86, icon: <SiGithubactions className="text-purple-400" /> },
      { name: "Docker", proficiency: 80, icon: <SiDocker className="text-blue-400" /> },
      { name: "Kubernetes", proficiency: 75, icon: <SiKubernetes className="text-blue-400" /> },
      { name: "Scripted Pipelines", proficiency: 83, icon: <FaServer className="text-cyan-400" /> },
    ],
  },
];

// Specialized testing types
const testingTypes: TestingType[] = [
  { 
    name: "API Testing", 
    icon: <TbApi className="w-8 h-8 text-blue-400" />,
    description: "Validating services, endpoints, and data contracts",
    tools: ["Postman", "RestAssured", "SuperTest", "Karate"]
  },
  { 
    name: "Performance Testing", 
    icon: <MdSpeed className="w-8 h-8 text-purple-400" />,
    description: "Measuring system behavior under load and stress",
    tools: ["JMeter", "Gatling", "k6", "Lighthouse"]
  },
  { 
    name: "Mobile Testing", 
    icon: <FaMobileAlt className="w-8 h-8 text-green-400" />,
    description: "Validating apps across devices and platforms",
    tools: ["Appium", "Detox", "XCUITest", "Espresso"]
  },
  { 
    name: "Security Testing", 
    icon: <FaShieldAlt className="w-8 h-8 text-red-400" />,
    description: "Detecting vulnerabilities and implementing safeguards",
    tools: ["OWASP ZAP", "Burp Suite", "Dependency Scanners"]
  },
  { 
    name: "Accessibility Testing", 
    icon: <FaUsers className="w-8 h-8 text-yellow-400" />,
    description: "Ensuring applications are usable by everyone",
    tools: ["Axe", "Lighthouse", "WAVE", "Screen Readers"]
  },
  { 
    name: "Integration Testing", 
    icon: <MdOutlineIntegrationInstructions className="w-8 h-8 text-cyan-400" />,
    description: "Validating component interactions and data flows",
    tools: ["Mockito", "WireMock", "MSW", "Pact"]
  },
];

// Certifications and Educational credentials
const certifications: Certification[] = [
  { name: "ISTQB Certified Tester", year: "2019", issuer: "International Software Testing Qualifications Board" },
  { name: "Certified Scrum Master", year: "2020", issuer: "Scrum Alliance" },
  { name: "AWS Certified Developer", year: "2021", issuer: "Amazon Web Services" },
  { name: "Certified Cypress Specialist", year: "2022", issuer: "Cypress.io" },
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<number>(0);
  const containerRef = useRef<HTMLElement>(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [selectedTestingType, setSelectedTestingType] = useState<number | null>(null);
  
  // Find skill level based on proficiency
  const getSkillLevel = (proficiency: number): SkillLevel => {
    return SkillLevels.find(level => 
      proficiency >= level.range[0] && proficiency <= level.range[1]
    ) || SkillLevels[4]; // Default to expert if out of range
  };
  
  // Staggered animation for skill bars
  const skillItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i: number) => ({ 
      opacity: 1, 
      x: 0, 
      transition: { 
        delay: i * 0.1,
        duration: 0.4
      }
    })
  };

  return (
    <section 
      id="skills" 
      className="py-20 md:py-28 section-bg light-top-right light-bottom-right relative overflow-hidden"
      ref={containerRef}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full opacity-5" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern-skills" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern-skills)" />
        </svg>
        
        {/* Animated particles representing automation flows */}
        {isInView && Array.from({ length: 10 }).map((_, index) => (
          <motion.div
            key={index}
            className={`absolute rounded-full ${
              index % 2 === 0 ? 'bg-cyan-400/20' : 'bg-purple-400/20'
            }`}
            style={{
              width: Math.random() * 12 + 4,
              height: Math.random() * 12 + 4,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * -150 - 50],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0, 0.7, 0],
              scale: [1, 1.2, 0.8]
            }}
            transition={{
              duration: Math.random() * 10 + 15,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
        
        {/* Code flow lines */}
        <motion.div
          className="absolute top-1/4 right-0 w-1/4 h-px bg-gradient-to-l from-blue-500/20 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "25%", opacity: 0.5 } : { width: 0, opacity: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-2/3 left-0 w-1/4 h-px bg-gradient-to-r from-cyan-500/20 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "25%", opacity: 0.5 } : { width: 0, opacity: 0 }}
          transition={{ duration: 2, delay: 1 }}
        />
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
            Technical <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">Arsenal</span>
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
            className="max-w-3xl mx-auto text-base md:text-lg text-[var(--text-light)]/80 leading-relaxed"
          >
            An extensive toolkit of modern quality engineering technologies, expertly <span className="text-cyan-400 font-medium">orchestrated</span> to deliver robust, automated testing solutions.
          </motion.p>
        </div>
        
        {/* Category navigation */}
        <div className="mb-12">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {skillCategories.map((category, index) => (
              <button
                key={category.name}
                onClick={() => setActiveCategory(index)}
                className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 ${
                  activeCategory === index 
                  ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20" 
                  : "glass hover:bg-white/5"
                }`}
              >
                <span className={activeCategory === index ? "text-white" : "text-cyan-400"}>
                  {category.icon}
                </span>
                <span className="hidden md:inline">{category.name}</span>
              </button>
            ))}
          </div>
          
          {/* Category description */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeCategory}
            transition={{ duration: 0.3 }}
            className="text-center mb-8"
          >
            <p className="text-base text-[var(--text-light)]/70 max-w-3xl mx-auto">
              {skillCategories[activeCategory].description}
            </p>
          </motion.div>
        </div>
        
        {/* Skills visualization */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          key={activeCategory}
          transition={{ duration: 0.4 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {skillCategories[activeCategory].skills.map((skill, index) => {
              const skillLevel = getSkillLevel(skill.proficiency);
              return (
                <motion.div 
                  key={skill.name}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={skillItemVariants}
                  onMouseEnter={() => setHoveredSkill(skill.name)}
                  onMouseLeave={() => setHoveredSkill(null)}
                  className="glass p-5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                        {skill.icon}
                      </div>
                      <div>
                        <div className="font-medium">{skill.name}</div>
                        <div className="text-xs text-[var(--text-light)]/50 group-hover:text-cyan-400/80 transition-colors">
                          {skillLevel.level}
                        </div>
                      </div>
                    </div>
                    <div className="text-lg font-bold bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text">
                      {skill.proficiency}%
                    </div>
                  </div>
                  
                  <div className="relative h-3 bg-[var(--dark-surface)]/60 rounded-full overflow-hidden">
                    <motion.div 
                      className="absolute inset-0 h-full rounded-full"
                      style={{
                        background: `linear-gradient(to right, var(--cyan-400), var(--blue-500)${hoveredSkill === skill.name ? ', var(--purple-500)' : ''})`
                      }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.proficiency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.15 + index * 0.1 }}
                    />
                    
                    {/* Highlight marks on the progress bar */}
                    {[25, 50, 75].map(mark => (
                      <div 
                        key={mark}
                        className="absolute h-full w-px bg-white/10 top-0"
                        style={{ left: `${mark}%` }}
                      />
                    ))}
                    
                    {/* Animated pulse when hovered */}
                    {hoveredSkill === skill.name && (
                      <motion.div
                        className="absolute inset-0 bg-white/10"
                        animate={{ opacity: [0, 0.5, 0] }}
                        transition={{ 
                          duration: 1.5, 
                          repeat: Infinity,
                          repeatType: "loop" 
                        }}
                      />
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
        
        {/* Testing specializations */}
        <div className="mb-16">
          <motion.h3 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-semibold mb-8 text-center"
          >
            Testing <span className="text-cyan-400">Specializations</span>
          </motion.h3>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {testingTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`glass p-4 rounded-xl border cursor-pointer transition-all duration-300 flex flex-col items-center text-center ${
                  selectedTestingType === index 
                    ? "border-cyan-500/50 bg-gradient-to-b from-cyan-500/10 to-transparent shadow-lg shadow-cyan-500/5" 
                    : "border-white/5 hover:border-white/20"
                }`}
                onClick={() => setSelectedTestingType(selectedTestingType === index ? null : index)}
              >
                <div className={`mb-3 transform transition-transform duration-300 ${selectedTestingType === index ? "scale-110" : "group-hover:scale-110"}`}>
                  {type.icon}
                </div>
                <h4 className="font-medium text-sm">{type.name}</h4>
              </motion.div>
            ))}
          </div>
          
          {/* Selected testing type details */}
          {selectedTestingType !== null && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-6 glass p-6 rounded-xl border border-cyan-500/20"
            >
              <div className="flex items-start gap-4">
                <div className="hidden md:block">
                  {testingTypes[selectedTestingType].icon}
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold mb-2 flex items-center gap-2">
                    <span className="md:hidden">
                      {testingTypes[selectedTestingType].icon}
                    </span>
                    {testingTypes[selectedTestingType].name}
                  </h4>
                  <p className="text-[var(--text-light)]/70 mb-4">
                    {testingTypes[selectedTestingType].description}
                  </p>
                  <div>
                    <div className="text-sm font-medium mb-2">Key Tools & Technologies:</div>
                    <div className="flex flex-wrap gap-2">
                      {testingTypes[selectedTestingType].tools.map(tool => (
                        <span 
                          key={tool}
                          className="px-3 py-1 text-xs rounded-full bg-[var(--dark-surface)]/60 border border-cyan-500/20 text-cyan-400/90"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
        
        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <h3 className="text-2xl font-semibold mb-8 text-center flex items-center justify-center gap-2">
            <FaGraduationCap className="text-cyan-400" />
            <span>Certifications & Credentials</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="glass p-5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 group"
              >
                <div className="text-xs text-cyan-400 mb-1">{cert.year}</div>
                <h4 className="font-semibold mb-2 group-hover:text-cyan-400 transition-colors">{cert.name}</h4>
                <div className="text-xs text-[var(--text-light)]/50">{cert.issuer}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Skills legend */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mt-12"
        >
          <div className="text-sm text-[var(--text-light)]/50 mb-3">Proficiency Scale</div>
          <div className="flex justify-center flex-wrap gap-3">
            {SkillLevels.map(level => (
              <div key={level.level} className="flex items-center gap-1 text-xs">
                <div className={`w-3 h-3 rounded-full ${level.color}`}></div>
                <span>{level.level} ({level.range[0]}-{level.range[1]}%)</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
} 