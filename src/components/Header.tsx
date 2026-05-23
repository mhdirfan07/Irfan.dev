"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useParallax } from "./ParallaxContainer";
import Image from 'next/image';
// Maps section index to which nav link should be active
const SECTION_TO_NAV: Record<number, number> = {
  0: 1, // Hero → highlight About
  1: 1, // About
  2: 2, // Projects
  3: 2, // Projects Lab → highlight Projects
  4: 4, // Contact
  5: 5, // Experience
  6: 5, // Validation → highlight Experience
  7: 5, // Footer → highlight Experience
};

export default function Header() {
  const { currentSection, goToSection } = useParallax();

  const activeNavIndex = SECTION_TO_NAV[currentSection] ?? 1;

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 flex h-16 w-full items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-background)] px-4 lg:px-8 z-40"
      style={{
        backgroundColor: "var(--color-background)",
        backdropFilter: "blur(12px)",
      }}
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Image
          src="/icon.svg" // Pastikan file ada di public/icon.svg
          alt="Logo Irfn.dev"
          width={32}
          height={32}
          className="mr-1"
        />
        <button
          onClick={() => goToSection(0)}
          className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity text-[var(--color-foreground)]"
        >
          Irfn.dev
        </button>
      </div>

      {/* Right: Theme Toggle + CTA */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <motion.button
          onClick={() => goToSection(4)}
          className="bg-[var(--color-accent)] text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-2 cursor-pointer"
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          CONTACT ME
        </motion.button>
      </div>
    </motion.header>
  );
}

