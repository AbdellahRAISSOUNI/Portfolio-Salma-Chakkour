"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.scrollY > 500) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-40 p-4 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/40 transition-all duration-300 border border-white/10 group"
          aria-label="Back to top"
        >
          <FaArrowUp className="h-5 w-5 transition-transform group-hover:animate-bounce" />
          
          {/* Pulsing background effect */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/60 to-blue-500/60 blur-sm -z-10 animate-pulse"></span>
          
          {/* Ripple effect on hover */}
          <span className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-blue-400 scale-0 opacity-0 group-hover:scale-150 group-hover:opacity-0 transition-all duration-1000"></span>
        </motion.button>
      )}
    </AnimatePresence>
  );
} 