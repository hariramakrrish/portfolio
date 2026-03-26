"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background effects */}
      <div className="absolute inset-0 grid-bg" />
      <div className="blob w-[600px] h-[600px] bg-accent-500 top-[-200px] right-[-200px]" />
      <div className="blob w-[400px] h-[400px] bg-indigo-600 bottom-[-100px] left-[-100px]" />

      {/* Floating orbs */}
      <motion.div
        animate={{ y: [-20, 20, -20], x: [-10, 10, -10] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 left-[15%] w-2 h-2 rounded-full bg-accent-400/40"
      />
      <motion.div
        animate={{ y: [15, -15, 15], x: [10, -10, 10] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/3 right-[20%] w-3 h-3 rounded-full bg-accent-300/20"
      />
      <motion.div
        animate={{ y: [10, -20, 10] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-1/3 left-[25%] w-1.5 h-1.5 rounded-full bg-emerald-400/30"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status chip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-500/5 border border-accent-500/10 mt-16 mb-8"
        >
          <div className="w-2 h-2 rounded-full bg-emerald-400 status-pulse" />
          <span className="text-xs font-medium text-dark-300">
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
        >
          <span className="text-dark-100">{personalInfo.name.split(" ")[0]}</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text-accent">
            {personalInfo.lastName}
          </span>
        </motion.h2>

        {/* Role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-accent-500/50" />
          <span className="text-lg sm:text-xl font-medium text-dark-300">
            {personalInfo.title}
          </span>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-accent-500/50" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-dark-400 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="#contact" className="magnetic-btn">
            <span className="flex items-center gap-2">
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in touch
            </span>
          </a>
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-dark-400 hover:text-dark-200 transition-colors"
          >
            View my work
            <svg
              className="w-4 h-4 group-hover:translate-y-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-5 h-8 rounded-full border border-dark-700 flex items-start justify-center p-1.5"
          >
            <div className="w-1 h-2 rounded-full bg-accent-500/60" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
