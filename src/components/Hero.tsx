"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Share2, ArrowUpRight, Activity } from "lucide-react"; // Tambahkan icon baru
import { StaggerContainer, StaggerItem } from "./AnimationHelpers";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useParallax } from "./ParallaxContainer";

type HeroProps = {
  data: any;
};

export default function Hero({ data }: HeroProps) {
  const titleLeft = data?.heroTitleLeft || "PORT";
  const titleRight = data?.heroTitleRight || "FOLIO";
  const { goToSection } = useParallax();

  return (
    <section className="flex flex-col border-b border-[var(--color-border)]">
      {/* Top Huge Text (Tetap Sama) */}
      <div className="flex w-full items-center justify-center border-b border-[var(--color-border)] py-16 md:py-24 lg:py-32 overflow-hidden bg-[var(--color-surface)] relative">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-5 pointer-events-none"></div>
        <div className="flex items-center text-[12vw] font-bold leading-none tracking-tighter relative z-10">
          <motion.span
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
          >
            {titleLeft}
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
            {titleRight}
          </motion.span>
        </div>
      </div>

      {/* NEW ASYMMETRICAL BENTO GRID */}
      <StaggerContainer className="grid grid-cols-1 lg:grid-cols-12 auto-rows-[minmax(12rem,auto)] bento-grid" delay={0.2}>

        {/* Cell 1: Info Box (Span 7 columns) */}
        <StaggerItem className="lg:col-span-7 border-b lg:border-b-0 lg:border-r border-[var(--color-border)]">
          <div className="bento-cell p-8 flex flex-col justify-between bg-[var(--color-surface)] h-full min-h-[16rem]">
            <div className="flex justify-between items-start">
              <p className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[var(--color-accent)] animate-pulse"></span>
                SYSTEM_STATUS: ONLINE
              </p>
              <Activity className="w-5 h-5 text-[var(--color-muted)]" />
            </div>

            <div className="mt-8">
              <h2 className="text-3xl md:text-5xl font-bold uppercase leading-tight mb-6">
                SOFTWARE<br />
                <span className="text-[var(--color-muted)]">ENGINEER</span>
              </h2>

              <div className="flex flex-wrap gap-2">
                <motion.button
                  onClick={() => goToSection(2)}
                  className="inline-flex items-center gap-2 border border-[var(--color-border)] px-4 py-2 font-mono text-xs bg-[var(--color-background)] hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors cursor-pointer"
                  whileHover={{ y: -2 }}
                >
                  EXPLORE PROJECTS <ArrowUpRight className="w-3 h-3" />
                </motion.button>
                <div className="inline-flex items-center px-4 py-2 font-mono text-xs border border-transparent text-[var(--color-muted)]">
                  BASED_IN: BENGKULU
                </div>
              </div>
            </div>
          </div>
        </StaggerItem>

        {/* Right Column Stack (Span 5 columns) */}
        <div className="lg:col-span-5 grid grid-rows-2">

          {/* Cell 2: Top Right (Pixel Art Animation) */}
          <StaggerItem className="border-b border-[var(--color-border)]">
            <div className="bento-cell p-0 flex items-center justify-between bg-[var(--color-background)] h-full overflow-hidden relative group">
              <div className="p-6 z-10">
                <p className="font-mono text-[10px] text-[var(--color-muted)] uppercase mb-2">Initialize</p>
                <p className="font-bold uppercase tracking-wider text-sm">Visual_Interface</p>
              </div>

              {/* Pixel Art Container - Di dorong ke kanan */}
              <div className="relative w-32 h-32 mr-8 group-hover:scale-110 transition-transform duration-500">
                <DotLottieReact
                  src="https://lottie.host/e2f33133-300f-4107-ad08-43a5f71d7070/DNqMpLaIpe.lottie"
                  loop
                  autoplay
                  speed={0.5}
                />
              </div>

              {/* Decorative Diagonal Lines */}
              <div className="absolute right-0 top-0 bottom-0 w-48 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, var(--color-foreground) 0, var(--color-foreground) 1px, transparent 0, transparent 50%)', backgroundSize: '10px 10px' }}></div>
            </div>
          </StaggerItem>

          {/* Cell 3: Bottom Right (Data / Metrics) */}
          <StaggerItem>
            <div className="bento-cell p-6 flex flex-col justify-center bg-[var(--color-surface)] h-full">
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] border border-[var(--color-foreground)] px-2 py-1 uppercase font-bold">
                  METRICS_LOG
                </span>
                <Share2 className="w-4 h-4 text-[var(--color-muted)] hover:text-[var(--color-foreground)] cursor-pointer transition-colors" />
              </div>

             <div className="grid grid-cols-3 gap-2">
                {[
                  { label: "DEV", value: "ACTV" },
                  { label: "SYS", value: "APP" },
                  { label: "LOC", value: "BKS" },
                ].map((item, i) => (
                  <div key={i} className="border border-[var(--color-border)] p-3 flex flex-col items-center justify-center bg-[var(--color-background)] hover:border-[var(--color-foreground)] transition-colors">
                    <span className="font-mono text-[10px] text-[var(--color-muted)] mb-1">{item.label}</span>
                    <span className="font-bold font-mono text-lg">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </StaggerItem>

        </div>
      </StaggerContainer>
    </section>
  );
}