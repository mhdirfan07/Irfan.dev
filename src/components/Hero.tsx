"use client";

import { Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { StaggerContainer, StaggerItem } from "./AnimationHelpers";

export default function Hero() {
  return (
    <section className="flex flex-col border-b border-[var(--color-border)]">
      {/* Top Huge Text */}
      <div className="flex w-full items-center justify-center border-b border-[var(--color-border)] py-16 md:py-24 lg:py-32 overflow-hidden bg-[var(--color-surface)]">
        <div className="flex items-center text-[12vw] font-bold leading-none tracking-tighter">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            PORT
          </motion.span>
          <motion.span
            className="mx-4 md:mx-8 h-[10vw] w-px bg-[var(--color-border)]"
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          />
          <motion.span
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            FOLIO
          </motion.span>
        </div>
      </div>

      {/* 3 Bento Cells Row */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 bento-grid" delay={0.2}>
        {/* Cell 1 */}
        <StaggerItem>
          <div className="bento-cell p-8 flex flex-col justify-between border-b md:border-b-0 md:border-r border-[var(--color-border)] bg-[var(--color-surface)] h-64">
            <div>
              <p className="font-mono text-xs text-[var(--color-muted)] mb-4 uppercase tracking-widest">
                // MISSION_LOG
              </p>
              <h2 className="text-2xl md:text-3xl font-bold uppercase leading-tight">
                Meet Our Recent<br />Projects
              </h2>
            </div>
            <div className="mt-8">
              <motion.div
                className="inline-block border border-[var(--color-border)] px-4 py-2 font-mono text-xs font-bold bg-[var(--color-background)]"
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.2 }}
              >
                PROJECTS_COMPLETED: 10+
              </motion.div>
            </div>
          </div>
        </StaggerItem>

        {/* Cell 2 */}
        <StaggerItem>
          <div className="bento-cell p-8 flex items-center justify-center border-b md:border-b-0 md:border-r border-[var(--color-border)] bg-[var(--color-surface)] h-64 relative">
            <motion.div
              className="w-24 h-24 border border-[var(--color-border)] flex items-center justify-center relative"
              animate={{ rotate: [0, 2, -2, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <div className="absolute inset-0 border border-[var(--color-border)] -translate-x-2 -translate-y-2"></div>
              <Share2 className="w-8 h-8 text-[var(--color-foreground)] relative z-10" strokeWidth={1} />
            </motion.div>
          </div>
        </StaggerItem>

        {/* Cell 3 */}
        <StaggerItem>
          <div className="bento-cell p-8 flex flex-col justify-between bg-[var(--color-surface)] h-64">
            <div>
              <div className="flex items-center justify-between mb-4">
                <motion.span
                  className="bg-[var(--color-accent)] text-white font-mono text-[10px] font-bold uppercase px-2 py-1 tracking-wider"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
                >
                  NEW_RELEASE
                </motion.span>
                <span className="font-mono text-[10px] text-[var(--color-muted)]">
                  REF: 001.C
                </span>
              </div>
              <h2 className="text-2xl font-bold uppercase leading-tight">
                Microservice<br />Architecture
              </h2>
            </div>

            <div className="grid grid-cols-3 gap-4 border-t border-[var(--color-border)] pt-4 mt-4">
              {[
                { label: "Perf", value: "98%", color: "" },
                { label: "Eff", value: "89%", color: "" },
                { label: "Scale", value: "HIGH", color: "text-[var(--color-accent)]" },
              ].map((item) => (
                <div key={item.label} className="flex flex-col">
                  <span className="font-mono text-[10px] text-[var(--color-muted)] uppercase">{item.label}</span>
                  <span className={`font-bold font-mono ${item.color}`}>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </StaggerItem>
      </StaggerContainer>
    </section>
  );
}
