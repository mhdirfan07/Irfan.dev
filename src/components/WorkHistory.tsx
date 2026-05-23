"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

export default function WorkHistory() {
  const roles = [
    {
      period: "2024 - PRESENT",
      company: "ARANUS_TECH",
      subtitle: "/ PERSEVERANCE_TECH",
      title: "SOFTWARE_ENGINEER (PART_TIME)",
      tags: ["C++", "GTK", "LVGL" ,"NEXT.JS", "REACT", "NODE.JS", "TYPESCRIPT", "TAILWIND"],
      logs: [
        "> BUILD DESTOP APPS",
        "> BUILT_SCALABLE_WEB_APPS: PRODUCTION",
        "> FULLSTACK_DELIVERY: CONSISTENT",
        "> CLOUD_INTEGRATION: ACTIVE"
      ],
      exp: "01",
      current: true,
    },
  ];

  return (
    <section className="flex flex-col border-b border-[var(--color-border)] bg-[var(--color-background)]">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex justify-between items-center p-8 border-b border-[var(--color-border)]">
          <div>
            <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">// EXPERIENCE_LOGS</span>
            <h2 className="text-3xl font-bold uppercase tracking-tight">WORK_HISTORY</h2>
          </div>
          <span className="font-mono text-xs border border-[var(--color-border)] px-3 py-1 uppercase text-[var(--color-muted)]">
            TOTAL_EXP: 1-2YRS
          </span>
        </div>
      </FadeIn>

      {/* Grid */}
      <StaggerContainer className="grid grid-cols-1 bento-grid" delay={0.1}>
        {roles.map((role, idx) => (
          <StaggerItem key={idx}>
            <motion.div
              className="bento-cell p-8 flex flex-col md:flex-row gap-8 justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)]"
              whileHover={{ boxShadow: "inset 0 0 0 1px #000" }}
              transition={{ duration: 0.2 }}
            >
              {/* Left: Info */}
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-4">
                  <p className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">
                    // {role.period}
                  </p>
                  {role.current && (
                    <motion.span
                      className="bg-green-500 text-white font-mono text-[9px] px-2 py-0.5 uppercase"
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      ACTIVE
                    </motion.span>
                  )}
                  <span className="font-mono text-[10px] text-[var(--color-muted)]">EXP: {role.exp}</span>
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-tight mb-0.5">
                  {role.company}
                </h3>
                <p className="font-mono text-sm text-[var(--color-muted)] uppercase mb-2">{role.subtitle}</p>
                <p className="font-mono text-xs text-[var(--color-muted)] uppercase mb-6">{role.title}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {role.tags.map((tag) => (
                    <motion.span
                      key={tag}
                      className="font-mono text-[10px] border border-[var(--color-border)] px-2 py-1 uppercase text-[var(--color-muted)] bg-[var(--color-background)]"
                      whileHover={{ borderColor: "var(--color-foreground)", color: "var(--color-foreground)" }}
                      transition={{ duration: 0.15 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Right: Performance Log */}
              <div className="md:w-80 flex-shrink-0">
                <p className="font-mono text-[10px] text-[var(--color-muted)] uppercase mb-2 tracking-widest">
                  // PERFORMANCE_LOG
                </p>
                <div className="bg-black text-green-500 p-4 font-mono text-[10px] leading-relaxed uppercase">
                  {role.logs.map((log, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      transition={{ delay: i * 0.15, duration: 0.4 }}
                      viewport={{ once: true }}
                    >
                      {log}
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* Open to work Banner */}
      <FadeIn direction="up">
        <div className="bento-cell p-6 flex items-center justify-between bg-[var(--color-background)] border-t border-[var(--color-border)]">
          <div className="flex items-center gap-4">
            <motion.span
              className="w-2 h-2 bg-green-500 rounded-full"
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
            <span className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)]">
              STATUS: OPEN_TO_NEW_OPPORTUNITIES
            </span>
          </div>
          <motion.a
            href="https://www.linkedin.com/in/muhammad-irfan-0ba9b326b/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase px-4 py-2 border border-[var(--color-border)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            VIEW_LINKEDIN →
          </motion.a>
        </div>
      </FadeIn>
    </section>
  );
}
