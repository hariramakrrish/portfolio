"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = navItems.map((item) => item.href.replace("#", ""));
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el && el.getBoundingClientRect().top <= 150) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "nav-glass" : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#hero" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-500 to-accent-700 flex items-center justify-center text-white font-bold text-sm">
              H
            </div>
            <span className="text-sm font-semibold text-dark-200 group-hover:text-white transition-colors hidden sm:block">
              hari.dev
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-sm font-medium transition-colors duration-300 rounded-full ${
                  activeSection === item.href.replace("#", "")
                    ? "text-white"
                    : "text-dark-400 hover:text-dark-200"
                }`}
              >
                {activeSection === item.href.replace("#", "") && (
                  <motion.div
                    layoutId="nav-active"
                    className="absolute inset-0 bg-accent-500/10 border border-accent-500/20 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>

          {/* Status Badge */}
          <div className="hidden md:flex items-center gap-2 text-xs text-dark-400">
            <div className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
            Open to work
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden relative w-8 h-8 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: 45, y: 5 }
                  : { rotate: 0, y: 0 }
              }
              className="w-5 h-0.5 bg-dark-300 block"
            />
            <motion.span
              animate={mobileOpen ? { opacity: 0 } : { opacity: 1 }}
              className="w-5 h-0.5 bg-dark-300 block"
            />
            <motion.span
              animate={
                mobileOpen
                  ? { rotate: -45, y: -5 }
                  : { rotate: 0, y: 0 }
              }
              className="w-5 h-0.5 bg-dark-300 block"
            />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#0a0a0f]/95 backdrop-blur-xl pt-20 px-6 md:hidden"
          >
            <div className="flex flex-col gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-semibold text-dark-300 hover:text-white py-3 border-b border-dark-800/50 transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
