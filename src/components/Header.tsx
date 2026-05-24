"use client";

import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";
import { useParallax } from "./ParallaxContainer";
import Image from 'next/image';

export default function Header() {

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
          src="/Icon.svg"
          alt="Logo Irfn.dev"
          width={32}
          height={32}
          className="mr-1"
        />
        <button
          className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity text-[var(--color-foreground)]"
        >
          Irfn.dev
        </button>
      </div>

      {/* Right: Theme Toggle + CTA */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
       </div>
    </motion.header>
  );
}

