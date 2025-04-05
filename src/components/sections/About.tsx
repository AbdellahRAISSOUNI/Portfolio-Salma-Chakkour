"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  FaLaptopCode, 
  FaBug,
  FaTasks, 
  FaUsersCog, 
  FaRobot,
  FaCheckCircle,
  FaCode,
  FaCodeBranch,
  FaSyncAlt,
  FaChartLine
} from "react-icons/fa";
import { TbTestPipe, TbApi } from "react-icons/tb";
import { MdSpeed, MdDataUsage, MdHighlightAlt } from "react-icons/md";
import { RiTestTubeFill } from "react-icons/ri";
import { SiCypress, SiAppium, SiSelenium, SiJenkins, SiJirasoftware } from "react-icons/si";

const workValues = [
  { value: "99.8%", label: "Test Coverage", icon: <FaCheckCircle />, color: "text-green-400" },
  { value: "40%", label: "Faster Release Cycles", icon: <FaSyncAlt />, color: "text-blue-400" },
  { value: "85%", label: "Reduced Manual Testing", icon: <FaRobot />, color: "text-purple-500" },
  { value: "10x", label: "Improved Bug Detection", icon: <FaBug />, color: "text-cyan-400" },
];

const features = [
  {
    icon: <TbTestPipe className="w-7 h-7"/>,
    title: "Test Automation Architecture",
    description: "Building scalable frameworks with modular design patterns, reusable components, and best practices.",
    tools: ["Selenium", "Cypress", "Playwright"]
  },
  {
    icon: <TbApi className="w-7 h-7"/>,
    title: "API & Integration Testing",
    description: "Comprehensive validation of REST/GraphQL services with detailed assertions and mock integrations.",
    tools: ["RestAssured", "Postman", "WireMock"]
  },
  {
    icon: <MdSpeed className="w-7 h-7"/>,
    title: "Performance Testing",
    description: "Load, stress and endurance test design to ensure application stability under realistic conditions.",
    tools: ["JMeter", "Gatling", "Lighthouse"]
  },
  {
    icon: <FaCodeBranch className="w-7 h-7"/>,
    title: "CI/CD Pipeline Integration",
    description: "Seamlessly embedding test automation within development pipelines for continuous quality feedback.",
    tools: ["Jenkins", "GitHub Actions", "CircleCI"]
  },
  {
    icon: <FaUsersCog className="w-7 h-7"/>,
    title: "Quality Process Engineering",
    description: "Implementing metrics, standards and methodologies to build a quality-first engineering culture.",
    tools: ["BDD", "Shift-Left", "Test Pyramids"]
  },
  {
    icon: <MdDataUsage className="w-7 h-7"/>,
    title: "Data-Driven Testing",
    description: "Creating sophisticated test data strategies for comprehensive test coverage across scenarios.",
    tools: ["TestNG", "Faker", "JSON/CSV Parsers"]
  },
];

export default function About() {
  const [activeTab, setActiveTab] = useState("philosophy");
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  
  return (
    <section id="about" className="py-20 md:py-32 section-bg light-bottom-left relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg className="absolute w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
              <path d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(255, 255, 255, 0.03)" strokeWidth="1" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
        
        {/* Animated flow lines - representing automated test flow */}
        <motion.div
          className="absolute top-1/4 left-1/2 w-1/3 h-px bg-gradient-to-r from-cyan-500/20 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "30%", opacity: 0.3 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        />
        <motion.div
          className="absolute top-1/3 right-1/2 w-1/3 h-px bg-gradient-to-l from-purple-500/20 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "30%", opacity: 0.3 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 0.8 }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/2 w-1/3 h-px bg-gradient-to-r from-blue-500/20 to-transparent"
          initial={{ width: 0, opacity: 0 }}
          animate={isInView ? { width: "30%", opacity: 0.3 } : { width: 0, opacity: 0 }}
          transition={{ duration: 1.5, delay: 1.1 }}
        />
      </div>

      <div className="section-content container mx-auto px-6">
        <div className="mb-12 md:mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 inline-block text-transparent bg-clip-text">My Expertise</span>
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
            As a <span className="text-cyan-400 font-medium">Quality Automation Specialist</span>, I design and implement sophisticated testing frameworks that ensure software reliability while accelerating delivery cycles.
          </motion.p>
        </div>
        
        {/* Work impact metrics */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
        >
          {workValues.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="glass p-5 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 text-center flex flex-col items-center justify-center"
            >
              <div className={`text-3xl mb-2 ${item.color}`}>{item.icon}</div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.4 + index * 0.1 }}
                className="text-2xl md:text-3xl font-bold mb-1 bg-gradient-to-r from-cyan-400 to-blue-500 inline-block text-transparent bg-clip-text"
              >
                {item.value}
              </motion.div>
              <div className="text-sm font-medium text-[var(--text-light)]/70">{item.label}</div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Tabs for different sections */}
        <div className="mb-10">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <button
              onClick={() => setActiveTab("philosophy")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "philosophy" 
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20" 
                : "glass hover:bg-white/5"
              }`}
            >
              Testing Philosophy
            </button>
            <button
              onClick={() => setActiveTab("expertise")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "expertise" 
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20" 
                : "glass hover:bg-white/5"
              }`}
            >
              Technical Expertise
            </button>
            <button
              onClick={() => setActiveTab("tools")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "tools" 
                ? "bg-gradient-to-r from-blue-500 to-cyan-400 text-white shadow-lg shadow-blue-500/20" 
                : "glass hover:bg-white/5"
              }`}
            >
              Tools & Technologies
            </button>
          </div>
          
          {/* Tab content */}
          <div>
            {activeTab === "philosophy" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
              >
                <div className="order-2 lg:order-1">
                  <h3 className="text-2xl md:text-3xl font-semibold mb-5 relative inline-block">
                    My Testing <span className="text-cyan-400">Philosophy</span>
                    <motion.span
                      initial={{ width: 0 }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-blue-500 to-transparent"
                    />
                  </h3>
                  
                  <div className="space-y-4 mb-6">
                    <p className="text-base text-[var(--text-light)]/80 leading-relaxed">
                      My approach to quality automation is built on the foundation that <span className="text-cyan-400 font-medium">testing is not just verification, but a critical design activity</span> that shapes software architecture from the beginning.
                    </p>
                    <p className="text-base text-[var(--text-light)]/80 leading-relaxed">
                      I believe in "shift-left" testing principles, embedding quality validation early in the development lifecycle through <span className="text-purple-500 font-medium">comprehensive automation frameworks</span> that provide rapid feedback and enable continuous delivery.
                    </p>
                    <p className="text-base text-[var(--text-light)]/80 leading-relaxed">
                      By balancing the test pyramid—with strong unit test foundations, robust API testing, and targeted UI automation—I create efficient test suites that <span className="text-cyan-400 font-medium">maximize coverage while minimizing maintenance overhead</span>.
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400">
                      <FaRobot className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Test Automation Ratio</div>
                      <div className="w-full h-2 rounded-full bg-[var(--dark-surface)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "85%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.6 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                        />
                      </div>
                    </div>
                    <div className="text-sm font-bold">85%</div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-10 h-10 rounded-full glass flex items-center justify-center text-cyan-400">
                      <FaChartLine className="w-5 h-5" />
                    </div>
                    <div className="flex-1">
                      <div className="text-sm font-medium">Code Quality Impact</div>
                      <div className="w-full h-2 rounded-full bg-[var(--dark-surface)]">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: "92%" }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.7 }}
                          className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                        />
                      </div>
                    </div>
                    <div className="text-sm font-bold">92%</div>
                  </div>
                </div>
                
                <div className="order-1 lg:order-2 relative">
                  <div className="glass rounded-xl p-6 border border-white/5 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent opacity-30 transform group-hover:opacity-40 transition-opacity"></div>
                    
                    <h4 className="text-xl font-semibold mb-4 flex items-center gap-2">
                      <RiTestTubeFill className="text-cyan-400" /> Testing Hierarchy
                    </h4>
                    
                    <div className="space-y-4">
                      {[
                        { label: 'E2E Testing', percentage: 20, color: 'from-purple-500 to-purple-600' },
                        { label: 'Integration Testing', percentage: 30, color: 'from-blue-500 to-blue-600' },
                        { label: 'API Testing', percentage: 30, color: 'from-cyan-500 to-cyan-600' },
                        { label: 'Unit Testing', percentage: 20, color: 'from-teal-500 to-teal-600' },
                      ].map((level, index) => (
                        <div key={level.label} className="space-y-1">
                          <div className="flex justify-between text-sm">
                            <span>{level.label}</span>
                            <span>{level.percentage}%</span>
                          </div>
                          <motion.div 
                            className="w-full h-2 bg-[var(--dark-surface)]/50 rounded-full overflow-hidden"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 + index * 0.1 }}
                          >
                            <motion.div 
                              className={`h-full rounded-full bg-gradient-to-r ${level.color}`}
                              initial={{ width: 0 }}
                              whileInView={{ width: `${level.percentage * 2}%` }}
                              viewport={{ once: true }}
                              transition={{ duration: 1, delay: 0.5 + index * 0.2 }}
                            />
                          </motion.div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="mt-6 pt-4 border-t border-white/10">
                      <h5 className="text-sm font-medium mb-2">The Quality-First Approach</h5>
                      <div className="flex gap-2 flex-wrap">
                        {['BDD', 'TDD', 'ATDD', 'Continuous Testing', 'Shift-Left'].map(tag => (
                          <span key={tag} className="inline-block px-2 py-1 text-xs rounded-md bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
            
            {activeTab === "expertise" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                ref={containerRef}
              >
                {features.map((feature, index) => (
                  <motion.div 
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="glass p-6 rounded-xl border border-white/5 hover:border-cyan-500/20 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/5 group"
                  >
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/20 flex items-center justify-center text-cyan-400 mb-5 group-hover:scale-110 transition-transform duration-300">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl font-semibold mb-3">{feature.title}</h4>
                    <p className="text-sm text-[var(--text-light)]/70 mb-4 leading-relaxed">{feature.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {feature.tools.map(tool => (
                        <span key={tool} className="inline-block px-2 py-0.5 text-xs rounded-md bg-[var(--dark-surface)]/50 text-[var(--text-light)]/60 border border-white/5">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
            
            {activeTab === "tools" && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="space-y-8"
              >
                {/* Tech stack rows */}
                <div className="space-y-6">
                  {[
                    {
                      category: "Automation Frameworks",
                      tools: [
                        { name: "Selenium", icon: <SiSelenium className="text-green-400 text-2xl" />, level: 90 },
                        { name: "Cypress", icon: <SiCypress className="text-green-400 text-2xl" />, level: 85 },
                        { name: "Playwright", icon: <FaCode className="text-blue-400 text-2xl" />, level: 80 },
                        { name: "Appium", icon: <SiAppium className="text-purple-400 text-2xl" />, level: 75 },
                      ]
                    },
                    {
                      category: "CI/CD & Infrastructure",
                      tools: [
                        { name: "Jenkins", icon: <SiJenkins className="text-blue-400 text-2xl" />, level: 85 },
                        { name: "GitHub Actions", icon: <FaCodeBranch className="text-purple-400 text-2xl" />, level: 80 },
                        { name: "Docker", icon: <FaCode className="text-cyan-400 text-2xl" />, level: 75 },
                        { name: "Kubernetes", icon: <FaCode className="text-blue-400 text-2xl" />, level: 65 },
                      ]
                    },
                    {
                      category: "Programming Languages",
                      tools: [
                        { name: "JavaScript", icon: <FaCode className="text-yellow-400 text-2xl" />, level: 90 },
                        { name: "TypeScript", icon: <FaCode className="text-blue-400 text-2xl" />, level: 85 },
                        { name: "Java", icon: <FaCode className="text-orange-400 text-2xl" />, level: 80 },
                        { name: "Python", icon: <FaCode className="text-green-400 text-2xl" />, level: 70 },
                      ]
                    }
                  ].map((category, cIndex) => (
                    <motion.div 
                      key={category.category}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: cIndex * 0.2 }}
                      className="glass rounded-xl p-6 border border-white/5"
                    >
                      <h4 className="text-lg font-semibold mb-4">{category.category}</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {category.tools.map((tool, tIndex) => (
                          <div key={tool.name} className="space-y-2">
                            <div className="flex items-center gap-3">
                              <div className="w-10 h-10 rounded-lg glass flex items-center justify-center">
                                {tool.icon}
                              </div>
                              <div className="flex-1">
                                <div className="text-sm font-medium">{tool.name}</div>
                                <div className="w-full h-1.5 rounded-full bg-[var(--dark-surface)]">
                                  <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: `${tool.level}%` }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 1, delay: 0.3 + tIndex * 0.1 }}
                                    className="h-full rounded-full bg-gradient-to-r from-cyan-400 to-blue-500"
                                  />
                                </div>
                              </div>
                              <div className="text-xs font-semibold opacity-60">{tool.level}%</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                <div className="glass rounded-xl p-6 border border-white/5">
                  <h4 className="text-lg font-semibold mb-4">Testing Methodologies & Practices</h4>
                  <div className="flex flex-wrap gap-3">
                    {[
                      "BDD", "TDD", "ATDD", "Test Pyramids", "Contract Testing", "Shift-Left", 
                      "Page Object Model", "Keyword Driven", "Data Driven", "Visual Testing",
                      "Performance Testing", "Security Testing", "Accessibility Testing",
                      "Mocking & Stubbing", "API Test Automation", "Continuous Testing"
                    ].map((method, index) => (
                      <motion.span
                        key={method}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: 0.1 + index * 0.03 }}
                        className="px-3 py-1.5 rounded-md glass text-sm font-medium border border-transparent hover:border-cyan-500/30 hover:text-cyan-400 transition-colors cursor-pointer"
                      >
                        {method}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
        
        {/* Quote and CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="mt-16 text-center max-w-3xl mx-auto"
        >
          <div className="text-4xl text-cyan-400 mb-6">"</div>
          <blockquote className="text-xl md:text-2xl italic font-light text-[var(--text-light)]/80 mb-6">
            Quality isn't just testing what's built – it's building with quality in mind from the start. Automation isn't a tool, it's a mindset that transforms how we deliver software.
          </blockquote>
          <div className="flex justify-center gap-4 mt-8">
            <a 
              href="#contact" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white font-medium shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              Get in Touch
            </a>
            <a 
              href="#projects" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass border border-white/10 hover:border-cyan-400/30 transition-all duration-300 hover:text-cyan-400"
            >
              View Projects
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 