"use client";

import { motion } from "framer-motion";
import { personalInfo } from "@/data/portfolio";


export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20"
    >
      {/* Rich background layers */}
      <div className="absolute inset-0 grid-bg" />

      {/* Large vivid blobs */}
      <div className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] rounded-full bg-indigo-600 opacity-[0.07] blur-[120px]" />
      <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] rounded-full bg-violet-600 opacity-[0.06] blur-[100px]" />
      <div className="absolute top-[40%] left-[40%] w-[400px] h-[400px] rounded-full bg-accent-500 opacity-[0.04] blur-[80px]" />

      {/* Floating particles */}
      {[
        { top: "20%", left: "10%", size: "w-1 h-1", delay: 0 },
        { top: "60%", left: "5%", size: "w-1.5 h-1.5", delay: 1 },
        { top: "30%", right: "8%", size: "w-1 h-1", delay: 2 },
        { top: "70%", right: "12%", size: "w-2 h-2", delay: 0.5 },
        { top: "15%", left: "40%", size: "w-1 h-1", delay: 1.5 },
        { top: "80%", left: "30%", size: "w-1.5 h-1.5", delay: 3 },
      ].map((p, i) => (
        <motion.div
          key={i}
          animate={{ y: [-15, 15, -15], opacity: [0.3, 0.8, 0.3] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: "easeInOut", delay: p.delay }}
          className={`absolute ${p.size} rounded-full bg-accent-400`}
          style={{ top: p.top, left: (p as any).left, right: (p as any).right }}
        />
      ))}

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Status badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/5 mb-10"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
          </span>
          <span className="text-sm font-medium text-emerald-300 tracking-wide">
            Available for opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1 }}
        >
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-2 uppercase">
            <span className="text-white">{personalInfo.name.split(" ")[0]}</span>
          </h1>
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-tight mb-8 uppercase">
            <span
              style={{
                background: "linear-gradient(135deg, #818cf8 0%, #6366f1 40%, #a78bfa 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              {personalInfo.lastName}
            </span>
          </h1>
        </motion.div>

        {/* Role badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <div className="h-px w-16 bg-gradient-to-r from-transparent via-accent-500/40 to-accent-500/70" />
          <span className="text-xl sm:text-2xl font-semibold text-white/70 tracking-wide">
            {personalInfo.title}
          </span>
          <div className="h-px w-16 bg-gradient-to-l from-transparent via-accent-500/40 to-accent-500/70" />
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="text-white/45 text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed font-light"
        >
          {personalInfo.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          {/* Primary CTA */}
          <a
            href="#contact"
            className="group relative inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold text-white overflow-hidden"
            style={{ background: "linear-gradient(135deg, #6366f1, #4f46e5)" }}
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            Get in touch
          </a>

          {/* Secondary CTA */}
          <a
            href="#experience"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full font-semibold border border-white/10 text-white/60 hover:text-white hover:border-white/25 transition-all duration-300"
          >
            View my work
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </motion.div>

      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-white/20 tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center p-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-accent-500/60" />
        </motion.div>
      </motion.div>
    </section>
  );
}
