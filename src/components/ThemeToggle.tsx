"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Monitor } from "lucide-react";

const THEMES = [
  { value: "light", icon: Sun,     label: "LIGHT" },
  { value: "dark",  icon: Moon,    label: "DARK"  },
  { value: "system",icon: Monitor, label: "SYS"   },
];

export default function ThemeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const current = THEMES.find((t) => t.value === theme) ?? THEMES[2];
  const Icon = current.icon;

  return (
    <div className="relative">
      <motion.button
        id="theme-toggle"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-2 border border-[var(--color-border)] px-3 py-2 font-mono text-[10px] uppercase tracking-wider text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:border-[var(--color-foreground)] transition-colors bg-[var(--color-surface)]"
        whileHover={{ scale: 1.03 }}
        whileTap={{ scale: 0.96 }}
        aria-label="Toggle theme"
      >
        <Icon className="w-3 h-3" strokeWidth={1.5} />
        <span>{current.label}</span>
      </motion.button>

      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />

            {/* Dropdown */}
            <motion.div
              className="absolute right-0 top-full mt-1 z-50 border border-[var(--color-border)] bg-[var(--color-surface)] shadow-lg min-w-[120px]"
              initial={{ opacity: 0, y: -6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.15 }}
            >
              {THEMES.map((t) => {
                const TIcon = t.icon;
                const isActive = theme === t.value;
                return (
                  <motion.button
                    key={t.value}
                    onClick={() => { setTheme(t.value); setOpen(false); }}
                    className={`w-full flex items-center gap-3 px-4 py-3 font-mono text-[10px] uppercase tracking-wider text-left border-b border-[var(--color-border)] last:border-0 transition-colors ${
                      isActive
                        ? "bg-[var(--color-accent)] text-white"
                        : "text-[var(--color-muted)] hover:text-[var(--color-foreground)] hover:bg-[var(--color-background)]"
                    }`}
                    whileHover={isActive ? {} : { x: 2 }}
                    transition={{ duration: 0.1 }}
                  >
                    <TIcon className="w-3 h-3 flex-shrink-0" strokeWidth={1.5} />
                    {t.label}
                    {isActive && <span className="ml-auto text-[8px]">●</span>}
                  </motion.button>
                );
              })}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
