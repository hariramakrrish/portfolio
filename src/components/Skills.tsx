"use client";

import { motion } from "framer-motion";
import { skills } from "@/data/portfolio";

const iconMap: Record<string, JSX.Element> = {
  code: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
    </svg>
  ),
  server: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
    </svg>
  ),
  database: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
    </svg>
  ),
  cloud: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
    </svg>
  ),
  brain: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  ),
  tool: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
  ),
};

const categoryColors: Record<string, string> = {
  Languages:              "from-blue-500/20 to-blue-600/5",
  "Backend & Frameworks": "from-violet-500/20 to-violet-600/5",
  Databases:              "from-emerald-500/20 to-emerald-600/5",
  "Cloud & DevOps":       "from-sky-500/20 to-sky-600/5",
  "Data & ML":            "from-pink-500/20 to-pink-600/5",
  "Practices & Tools":    "from-amber-500/20 to-amber-600/5",
};

const iconColors: Record<string, string> = {
  Languages:              "text-blue-400",
  "Backend & Frameworks": "text-violet-400",
  Databases:              "text-emerald-400",
  "Cloud & DevOps":       "text-sky-400",
  "Data & ML":            "text-pink-400",
  "Practices & Tools":    "text-amber-400",
};

export default function Skills() {
  return (
    <section id="skills" className="relative py-16 sm:py-20">
      <div className="absolute top-[20%] left-[-100px] w-[350px] h-[350px] rounded-full bg-violet-600 opacity-[0.05] blur-[80px]" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 sm:mb-16"
        >
          <span className="section-heading">Tech Stack</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 text-white">
            Tools & technologies I{" "}
            <span style={{
              background: "linear-gradient(135deg, #818cf8, #6366f1, #a78bfa)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              work with
            </span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.category}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              whileHover={{
                y: -6,
                rotateX: 4,
                rotateY: -4,
                scale: 1.02,
                transition: { duration: 0.25, ease: "easeOut" },
              }}
              style={{ perspective: 800, transformStyle: "preserve-3d" }}
              className="glass-card rounded-2xl p-5 sm:p-6 cursor-default relative overflow-hidden group"
            >
              {/* Gradient top-left glow on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${categoryColors[skill.category] ?? "from-indigo-500/10 to-transparent"} opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl`} />

              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl bg-white/5 border border-white/8 flex items-center justify-center ${iconColors[skill.category] ?? "text-indigo-400"} group-hover:scale-110 transition-transform duration-300`}>
                    {iconMap[skill.icon]}
                  </div>
                  <h3 className="font-bold text-white text-sm sm:text-base">
                    {skill.category}
                  </h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <motion.span
                      key={item}
                      whileHover={{ scale: 1.08 }}
                      className="inline-flex items-center px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full text-xs sm:text-sm font-medium bg-white/5 border border-white/8 text-white/60 hover:text-white hover:border-white/20 transition-all duration-200 cursor-default"
                    >
                      {item}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
