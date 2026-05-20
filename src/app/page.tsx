"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import ProjectGrid from "@/components/ProjectGrid";
import CtaBlock from "@/components/CtaBlock";
import WorkHistory from "@/components/WorkHistory";
import ValidationLogs from "@/components/ValidationLogs";
import Footer from "@/components/Footer";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  const [splashDone, setSplashDone] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleSplashFinish = useCallback(() => {
    setSplashDone(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {!splashDone && <SplashScreen onFinish={handleSplashFinish} />}

      <AnimatePresence>
        {splashDone && (
          <motion.div
            key="main"
            className="min-h-screen max-w-[1400px] mx-auto border-x border-[var(--color-border)] bg-[var(--color-background)] shadow-2xl"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Header />
            <main className="flex flex-col">
              <section id="hero"><Hero /></section>
              <section id="about"><AboutSection /></section>
              <section id="projects"><ProjectsSection /></section>
              <section id="projects-lab"><ProjectGrid /></section>
              <section id="contact"><CtaBlock /></section>
              <section id="experience"><WorkHistory /></section>
              <ValidationLogs />
            </main>
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
