"use client";

import { motion } from "framer-motion";
import { Download, ChevronsRight, Send } from "lucide-react";
import { FadeIn } from "./AnimationHelpers";

export default function CtaBlock() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bento-grid border-b border-[var(--color-border)]">
      {/* Left Cell */}
      <FadeIn direction="left">
        <div className="bento-cell flex flex-col items-center justify-center p-16 md:p-24 border-b md:border-b-0 md:border-r border-[var(--color-border)] bg-[var(--color-background)] h-full">
          <h2 className="text-3xl md:text-4xl font-bold uppercase text-center max-w-sm leading-tight mb-8">
            READY TO DISCUSS<br />YOUR PROJECT?
          </h2>
          <motion.div
            className="w-64 h-24 bg-[var(--color-border)] border border-[var(--color-border)] flex items-center justify-center relative overflow-hidden cursor-pointer"
            whileHover={{ opacity: 0.8 }}
            transition={{ duration: 0.2 }}
          >
            <div className="absolute left-0 bottom-0 w-8 h-8 bg-[var(--color-border)] transform rotate-45 -translate-x-4 translate-y-4"></div>
            <motion.div
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <ChevronsRight className="w-12 h-12 text-[var(--color-foreground)]" strokeWidth={3} />
            </motion.div>
          </motion.div>
        </div>
      </FadeIn>

      {/* Right Cell */}
      <FadeIn direction="right">
        <div className="bento-cell flex flex-col items-center justify-center p-16 md:p-24 bg-[var(--color-surface)] gap-6 h-full">
          <motion.button
            className="w-full max-w-sm h-16 bg-[var(--color-accent)] text-white font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-4"
            whileHover={{ scale: 1.02, opacity: 0.95 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            HIRE ME <Send className="w-4 h-4" />
          </motion.button>
          <motion.button
            className="w-full max-w-sm h-16 bg-[var(--color-surface)] border-2 border-[var(--color-foreground)] text-[var(--color-foreground)] font-mono text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-4"
            whileHover={{ opacity: 0.8, scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ duration: 0.15 }}
          >
            DOWNLOAD CV <Download className="w-4 h-4" />
          </motion.button>
        </div>
      </FadeIn>
    </section>
  );
}
