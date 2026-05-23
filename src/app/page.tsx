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
import ParallaxContainer from "@/components/ParallaxContainer";

const SECTIONS = [
  { id: "hero", label: "HERO" },
  { id: "about", label: "ABOUT" },
  { id: "projects", label: "PROJECTS" },
  // { id: "projects-lab", label: "LAB" },
  { id: "contact", label: "CONTACT" },
  { id: "experience", label: "EXPERIENCE" },
  { id: "validation", label: "VALIDATION" },
  { id: "footer", label: "FOOTER" },
];

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
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Header />
            <ParallaxContainer sections={SECTIONS}>
              {/* 0: Hero */}
              <section id="hero">
                <Hero />
              </section>

              {/* 1: About */}
              <section id="about">
                <AboutSection />
              </section>

              {/* 2: Projects */}
              <section id="projects">
                <ProjectsSection />
              </section>

              {/* 3: Project Lab */}
              {/* <section id="projects-lab">
                <ProjectGrid />
              </section> */}

              {/* 4: Contact / CTA */}
              <section id="contact">
                <CtaBlock />
              </section>

              {/* 5: Experience */}
              <section id="experience">
                <WorkHistory />
              </section>

              {/* 6: Validation */}
              <section id="validation">
                <ValidationLogs />
              </section>

              {/* 7: Footer */}
              <section id="footer-section">
                <Footer />
              </section>
            </ParallaxContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

