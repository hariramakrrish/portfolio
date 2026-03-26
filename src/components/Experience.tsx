"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="relative py-20">
      <div className="blob w-[500px] h-[500px] bg-blue-600 bottom-[10%] right-[-200px]" />

      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="section-heading">Career</span>
          <h2 className="text-4xl sm:text-5xl font-bold mt-3 text-dark-100">
            Professional{" "}
            <span className="gradient-text-accent">experience</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass-card rounded-2xl overflow-hidden gradient-border"
            >
              {/* Header strip */}
              <div className="px-8 py-6 border-b border-white/[0.03]">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-700/10 flex items-center justify-center shrink-0 mt-1">
                      <svg
                        className="w-6 h-6 text-accent-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-dark-100">
                        {exp.role}
                      </h3>
                      <p className="text-accent-400 font-medium text-base">
                        {exp.company}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 text-base text-dark-500">
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                        />
                      </svg>
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={1.5}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                      </svg>
                      {exp.location}
                    </span>
                  </div>
                </div>
              </div>

              {/* Highlights */}
              <div className="px-8 py-6">
                <div className="grid gap-4">
                  {exp.highlights.map((item, j) => (
                    <motion.div
                      key={j}
                      initial={{ opacity: 0, x: -15 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 + j * 0.05 }}
                      className="flex gap-3 group/item"
                    >
                      <div className="mt-2 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-accent-500/40 group-hover/item:bg-accent-400 transition-colors" />
                      </div>
                      <p className="text-dark-400 text-base leading-relaxed group-hover/item:text-dark-300 transition-colors">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>

                {/* Tech used */}
                <div className="flex flex-wrap gap-2 mt-6 pt-6 border-t border-white/[0.03]">
                  {[
                    "Java",
                    "Spring Boot",
                    "PostgreSQL",
                    "MongoDB",
                    "AWS",
                    "Docker",
                    "Kubernetes",
                    "REST APIs",
                  ].map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 text-sm rounded-full bg-accent-500/5 border border-accent-500/10 text-dark-400"
                    >
                      {tech}
                    </span>
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
