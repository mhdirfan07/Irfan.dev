"use client";

import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

export default function WorkHistory({ data }: { data: any[] }) {
  const defaultRoles = [
    {
      period: "JUL 2026 - PRESENT",
      company: "ARANUS_TECH",
      subtitle: "/ PERSEVERANCE_TECH",
      title: "SOFTWARE_ENGINEER (FULL_TIME)",
      tags: ["C++", "GTK", "LVGL", "NEXT.JS", "REACT", "NODE.JS", "TYPESCRIPT", "TAILWIND"],
      logs: [
        "> BUILD DESKTOP APPS",
        "> BUILT_SCALABLE_WEB_APPS: PRODUCTION",
        "> FULLSTACK_DELIVERY: CONSISTENT",
        "> CLOUD_INTEGRATION: ACTIVE"
      ],
      current: true,
    },
    {
      period: "FEB 2024 - JUL 2026",
      company: "ARANUS_TECH",
      subtitle: "/ PERSEVERANCE_TECH",
      title: "SOFTWARE_ENGINEER (PART_TIME)",
      tags: ["C++", "GTK", "LVGL", "NEXT.JS", "REACT", "NODE.JS", "TYPESCRIPT", "TAILWIND"],
      logs: [
        "> BUILD DESKTOP APPS",
        "> BUILT_SCALABLE_WEB_APPS: PRODUCTION",
        "> FULLSTACK_DELIVERY: CONSISTENT",
        "> CLOUD_INTEGRATION: ACTIVE"
      ],

      current: false,
    },
  ];

  // Sort: current jobs first, then by start date descending (newest first)
  const sortByDate = (roles: any[]) => {
    const monthMap: Record<string, number> = {
      JAN: 0, FEB: 1, MAR: 2, APR: 3, MAY: 4, JUN: 5,
      JUL: 6, AUG: 7, SEP: 8, OCT: 9, NOV: 10, DEC: 11,
    };
    return [...roles].sort((a, b) => {
      // Current jobs always come first
      if (a.current && !b.current) return -1;
      if (!a.current && b.current) return 1;
      // Parse start date from period (e.g. "FEB 2024 - JUL 2026")
      const parseStart = (period: string) => {
        const parts = period?.trim().split(/\s+/) || [];
        const month = monthMap[parts[0]?.toUpperCase()] ?? 0;
        const year = parseInt(parts[1]) || 0;
        return year * 12 + month;
      };
      return parseStart(b.period) - parseStart(a.period);
    });
  };

  const rawRoles = data && data.length > 0 ? data : defaultRoles;
  const displayRoles = sortByDate(rawRoles);

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

      {/* Timeline Grid */}
      <StaggerContainer className="grid grid-cols-1 bento-grid" delay={0.1}>
        {displayRoles.map((role, idx) => (
          <StaggerItem key={idx}>
            <motion.div
              className="bento-cell p-8 flex flex-col md:flex-row gap-8 justify-between border-b border-[var(--color-border)] bg-[var(--color-surface)] relative"
              whileHover={{ backgroundColor: "var(--color-background)" }}
              transition={{ duration: 0.3 }}
            >
              {/* Timeline indicator */}
              <div className="hidden md:flex absolute left-0 top-0 bottom-0 w-8 items-start justify-center pt-10">
                <div className="flex flex-col items-center h-full">
                  <div className={`w-2.5 h-2.5 flex-shrink-0 border-2 ${
                    role.current 
                      ? 'bg-[var(--color-accent)] border-[var(--color-accent)]' 
                      : 'bg-transparent border-[var(--color-muted)]'
                  }`} />
                  {idx < displayRoles.length - 1 && (
                    <div className="w-px flex-grow bg-[var(--color-border)] mt-1" />
                  )}
                </div>
              </div>

              {/* Left: Info */}
              <div className="flex-1 md:pl-6">
                <div className="flex items-center gap-3 mb-4">
                  <p className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">
                    {role.period}
                  </p>
                  {role.current && (
                    <motion.span
                      className="bg-green-500/90 text-white font-mono text-[9px] px-2 py-0.5 uppercase"
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
                    >
                      CURRENT
                    </motion.span>
                  )}
                </div>

                <h3 className="text-2xl font-bold uppercase tracking-tight mb-0.5">
                  {role.company}
                </h3>
                <p className="font-mono text-sm text-[var(--color-muted)] mb-1">{role.subtitle}</p>
                <p className="font-mono text-xs text-[var(--color-muted)] uppercase mb-5 opacity-70">{role.title}</p>

                <div className="flex flex-wrap gap-2">
                  {role.tags.map((tag: string) => (
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
                  // TASK_LOG
                </p>
                <div className="bg-black text-green-500 p-4 font-mono text-[10px] leading-loose uppercase border border-[#1a1a1a]">
                  {role.logs.map((log: string, i: number) => (
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
                  <motion.span
                    className="inline-block w-1.5 h-3 bg-green-500 ml-1 mt-1"
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: "reverse" }}
                  />
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
