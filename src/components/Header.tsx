"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

const NAV_LINKS = [
  { label: "[ ABOUT ]",      href: "#about"      },
  { label: "[ PROJECTS ]",   href: "#projects"   },
  { label: "[ EXPERIENCE ]", href: "#experience" },
  { label: "[ CONTACT ]",    href: "#contact"    },
];

// Maps section IDs to which nav link should be active
const SECTION_TO_NAV: Record<string, string> = {
  hero:           "#about",     // top of page → highlight About
  about:          "#about",
  projects:       "#projects",
  "projects-lab": "#projects",
  contact:        "#contact",
  experience:     "#experience",
};

export default function Header() {
  const [activeHref, setActiveHref] = useState<string>("#about");

  useEffect(() => {
    const sectionIds = Object.keys(SECTION_TO_NAV);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];

    if (elements.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find the entry that is most visible
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          const id = visible[0].target.id;
          const mapped = SECTION_TO_NAV[id];
          if (mapped) setActiveHref(mapped);
        }
      },
      {
        // Trigger when section enters the top half of the viewport
        rootMargin: "-10% 0px -50% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      className="flex h-16 w-full items-center justify-between border-b border-[var(--color-border)] bg-[var(--color-background)] px-4 lg:px-8 sticky top-0 z-30"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1], delay: 0.1 }}
    >
      {/* Logo */}
      <div className="flex items-center">
        <Link
          href="/"
          className="text-xl font-bold tracking-tight hover:opacity-70 transition-opacity text-[var(--color-foreground)]"
        >
          Irfn.dev
        </Link>
      </div>

      {/* Center Navigation */}
      <nav className="hidden md:flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
        {NAV_LINKS.map((link) => {
          const isActive = activeHref === link.href;
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`relative px-4 py-2 transition-colors ${
                isActive
                  ? "text-[var(--color-foreground)] font-semibold"
                  : "text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
              }`}
            >
              {link.label}
              {/* Active underline indicator */}
              {isActive && (
                <motion.span
                  layoutId="nav-active-indicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[var(--color-accent)]"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          );
        })}
      </nav>

      {/* Right: Theme Toggle + CTA */}
      <div className="flex items-center gap-3">
        <ThemeToggle />
        <motion.a
          href="#contact"
          className="bg-[var(--color-accent)] text-white font-mono text-xs font-bold uppercase tracking-wider px-5 py-2"
          whileHover={{ scale: 1.05, opacity: 0.9 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.15 }}
        >
          CONTACT ME
        </motion.a>
      </div>
    </motion.header>
  );
}
