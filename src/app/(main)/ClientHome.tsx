"use client";

import { useState, useCallback, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
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
  { id: "experience", label: "EXPERIENCE" },
  { id: "validation", label: "VALIDATION" },
  { id: "contact", label: "CONTACT" },
  { id: "footer", label: "FOOTER" },
];

export default function ClientHome({ data }: { data: any }) {
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
           
              <section id="hero">
                <Hero data={data.heroData} />
              </section>
             
              <section id="about">
                <AboutSection data={data.aboutData} />
              </section>
             
              <section id="projects">
                <ProjectsSection data={data.projectsData} />
              </section>
           
              <section id="experience">
                <WorkHistory data={data.experienceData} />
              </section>
              
              <section id="validation">
                <ValidationLogs data={data.validationData} />
              </section>

              <section id="contact">
                <CtaBlock data={data.ctaData} />
              </section>

              
              <section id="footer-section">
                <Footer data={data.footerData} />
              </section>
            </ParallaxContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
