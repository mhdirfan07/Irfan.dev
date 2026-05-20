"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const BOOT_LINES = [
  "INITIALIZING SYSTEM...",
  "LOADING KERNEL MODULES...",
  "MOUNTING FILE SYSTEMS...",
  "STARTING NETWORK SERVICES...",
  "LOADING PORTFOLIO DATA...",
  "COMPILING SKILL MATRIX...",
  "BOOT SEQUENCE COMPLETE.",
];

export default function SplashScreen({ onFinish }: { onFinish: () => void }) {
  const [visibleLines, setVisibleLines] = useState<string[]>([]);
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let lineIndex = 0;

    const lineInterval = setInterval(() => {
      if (lineIndex < BOOT_LINES.length) {
        setVisibleLines((prev) => [...prev, BOOT_LINES[lineIndex]]);
        lineIndex++;
        setProgress(Math.round((lineIndex / BOOT_LINES.length) * 100));
      } else {
        clearInterval(lineInterval);
        setTimeout(() => {
          setDone(true);
          setTimeout(onFinish, 800);
        }, 400);
      }
    }, 200);

    return () => clearInterval(lineInterval);
  }, [onFinish]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="splash"
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-start justify-center p-10 md:p-24 font-mono overflow-hidden"
          exit={{
            y: "-100%",
            transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] },
          }}
        >
          {/* ASCII Top Border */}
          <div className="text-gray-700 text-xs mb-8 hidden md:block select-none">
            {Array.from({ length: 80 }).map((_, i) => (
              <span key={i}>─</span>
            ))}
          </div>

          {/* Boot Lines */}
          <div className="flex flex-col gap-1 w-full max-w-2xl">
            {visibleLines.map((line, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.15 }}
                className={`text-xs md:text-sm uppercase tracking-widest ${
                  i === visibleLines.length - 1
                    ? "text-[#F97316]"
                    : "text-green-500"
                }`}
              >
                {i === visibleLines.length - 1 ? (
                  <span className="font-bold">&gt; {line}</span>
                ) : (
                  <span className="text-gray-500">[OK] {line}</span>
                )}
              </motion.div>
            ))}
          </div>

          {/* Progress Bar */}
          <div className="mt-12 w-full max-w-2xl">
            <div className="flex justify-between text-xs text-gray-600 mb-2 uppercase tracking-widest">
              <span>PROGRESS</span>
              <span className="text-[#F97316] font-bold">{progress}%</span>
            </div>
            <div className="w-full h-px bg-gray-800 relative">
              <motion.div
                className="absolute top-0 left-0 h-px bg-[#F97316]"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.2, ease: "linear" }}
              />
            </div>
          </div>

          {/* DEV_LABS Branding */}
          <motion.div
            className="absolute bottom-10 right-10 text-gray-800 font-mono text-xs uppercase tracking-widest"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            DEV_LABS / PORTFOLIO_OS v2.4.1
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
