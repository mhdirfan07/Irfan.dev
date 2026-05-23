"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal, ShieldCheck, RefreshCw, Cpu, HelpCircle } from "lucide-react";

export default function Footer() {
  const [time, setTime] = useState("");
  const [uptime, setUptime] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toTimeString().split(" ")[0]);
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const start = Date.now();
    const interval = setInterval(() => {
      setUptime(Math.floor((Date.now() - start) / 1000));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatUptime = (seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${String(m).padStart(2, "0")}M ${String(s).padStart(2, "0")}S`;
  };

  return (
    <footer className="flex flex-col justify-between h-full min-h-[calc(100vh-140px)] md:min-h-[calc(100vh-120px)] p-8 md:p-12 bg-[var(--color-background)] relative overflow-hidden">
      {/* Brutalist Tech Blueprint background lines */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      {/* Top row: System Diagnostics Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 z-10 w-full">
        {/* Clock & Uptime Card */}
        <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex flex-col justify-between h-36 font-mono uppercase">
          <div className="flex justify-between items-center text-[10px] text-[var(--color-muted)]">
            <span className="flex items-center gap-1.5">// DIAGNOSTICS</span>
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
          </div>
          <div className="my-2">
            <div className="text-2xl font-bold tracking-wider">{time || "00:00:00"}</div>
            <div className="text-[10px] text-[var(--color-muted)]">SYSTEM_TIME</div>
          </div>
          <div className="flex justify-between text-[10px] border-t border-[var(--color-border)] pt-2 mt-2">
            <span>UPTIME:</span>
            <span className="text-[var(--color-accent)] font-bold">{formatUptime(uptime)}</span>
          </div>
        </div>

        {/* System Info Card */}
        <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex flex-col justify-between h-36 font-mono uppercase text-[10px] leading-relaxed">
          <span className="text-[var(--color-muted)]">// ENVIRONMENT_SPECS</span>
          <div className="flex flex-col gap-1.5 my-2">
            <div className="flex justify-between">
              <span>HOST:</span> <span className="font-bold text-[var(--color-foreground)]">IRFN.DEV</span>
            </div>
            <div className="flex justify-between">
              <span>LOC:</span> <span className="font-bold text-[var(--color-foreground)]">BENGKULU, ID</span>
            </div>
            <div className="flex justify-between">
              <span>STACK:</span> <span className="font-bold text-[var(--color-foreground)]">NEXT.JS / TS</span>
            </div>
          </div>
          <div className="border-t border-[var(--color-border)] pt-2 flex justify-between text-[10px] text-green-500 font-bold">
            <span>STATUS:</span>
            <span>200_OK</span>
          </div>
        </div>

        {/* Console Logs Sim Card */}
        <div className="border border-[var(--color-border)] bg-[var(--color-surface)] p-5 flex flex-col h-36 font-mono text-[9px] text-[var(--color-muted)] overflow-hidden">
          <div className="flex justify-between items-center pb-2 border-b border-[var(--color-border)] mb-2 uppercase text-[9px]">
            <span>// INITIALIZATION_LOGS</span>
            <span className="text-[var(--color-accent)]">SHUTDOWN: FALSE</span>
          </div>
          <div className="flex-1 overflow-hidden select-none flex flex-col gap-1">
            <div>[SYS] LOADING CORE MODULES... SUCCESS</div>
            <div>[SYS] RENDER_ENGINE: PARALLAX_ACTIVED</div>
            <div className="text-green-500 font-semibold">[SYS] PORTFOLIO STATE: OPERATIONAL</div>
            <div className="animate-pulse">&gt; CONNECTION SECURE // _</div>
          </div>
        </div>
      </div>

      {/* Middle row: Huge Outline Glitching Banner */}
      <div className="my-auto py-12 flex flex-col items-center justify-center text-center z-10 w-full relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          {/* Big outline text */}
          <h2 className="text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter select-none font-sans text-transparent stroke-text opacity-15 dark:opacity-10">
            IRFN.DEV
          </h2>
          <h2 className="absolute top-0 left-0 text-6xl sm:text-7xl md:text-9xl font-black uppercase tracking-tighter select-none font-sans text-[var(--color-foreground)] translate-x-1.5 -translate-y-1.5">
            IRFN.DEV
          </h2>
        </motion.div>
        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] mt-6">
          &lt; END_OF_FILE // THANKS_FOR_VISITING &gt;
        </p>
      </div>

      {/* Bottom row: Footer Links & Copyright */}
      <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[var(--color-border)] z-10 w-full gap-4 mt-auto">
        <div className="font-mono text-[10px] text-[var(--color-muted)] uppercase tracking-widest text-center md:text-left">
          &copy; 2025_IRFN.DEV — ALL_SYSTEMS_PRESERVED
        </div>
        <div className="flex flex-wrap justify-center gap-6 font-mono text-[10px] text-[var(--color-muted)] uppercase tracking-widest">
          <a
            href="https://github.com/mhdirfan07"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            GITHUB
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-irfan-0ba9b326b/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="#about"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            ABOUT
          </a>
          <a
            href="#contact"
            className="hover:text-[var(--color-accent)] transition-colors"
          >
            CONTACT
          </a>
        </div>
      </div>
    </footer>
  );
}
