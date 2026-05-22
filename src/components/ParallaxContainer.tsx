"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useCallback,
  createContext,
  useContext,
} from "react";
import { motion, AnimatePresence } from "framer-motion";

/* ─── Context ────────────────────────────────────────────── */
interface ParallaxContextValue {
  currentSection: number;
  totalSections: number;
  goToSection: (index: number) => void;
  direction: number; // 1 = down, -1 = up
}

const ParallaxContext = createContext<ParallaxContextValue>({
  currentSection: 0,
  totalSections: 0,
  goToSection: () => {},
  direction: 1,
});

export const useParallax = () => useContext(ParallaxContext);

/* ─── Section Labels for Indicator ───────────────────────── */
interface SectionMeta {
  id: string;
  label: string;
}

/* ─── Indicator Dots ─────────────────────────────────────── */
function SectionIndicator({
  sections,
  current,
  onNavigate,
}: {
  sections: SectionMeta[];
  current: number;
  onNavigate: (index: number) => void;
}) {
  return (
    <div className="parallax-indicator" aria-label="Section navigation">
      {sections.map((section, i) => (
        <button
          key={section.id}
          onClick={() => onNavigate(i)}
          className={`parallax-indicator__dot ${
            i === current ? "parallax-indicator__dot--active" : ""
          }`}
          aria-label={`Go to ${section.label}`}
          title={section.label}
        >
          {/* Active label */}
          <span
            className={`parallax-indicator__label ${
              i === current ? "parallax-indicator__label--visible" : ""
            }`}
          >
            {section.label}
          </span>
        </button>
      ))}
    </div>
  );
}

/* ─── Section Progress Bar ───────────────────────────────── */
function SectionProgress({
  current,
  total,
}: {
  current: number;
  total: number;
}) {
  const progress = ((current + 1) / total) * 100;
  return (
    <div className="parallax-progress">
      <motion.div
        className="parallax-progress__bar"
        initial={{ height: "0%" }}
        animate={{ height: `${progress}%` }}
        transition={{ duration: 0.6, ease: [0.76, 0, 0.24, 1] }}
      />
    </div>
  );
}

/* ─── Main Container ─────────────────────────────────────── */
interface ParallaxContainerProps {
  children: React.ReactNode;
  sections: SectionMeta[];
}

const COOLDOWN_MS = 900;

export default function ParallaxContainer({
  children,
  sections,
}: ParallaxContainerProps) {
  const childrenArray = React.Children.toArray(children);
  const [currentSection, setCurrentSection] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);
  const lastWheelTime = useRef(0);
  const touchStartY = useRef(0);
  const touchStartX = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const totalSections = childrenArray.length;

  const goToSection = useCallback(
    (index: number) => {
      if (isAnimating) return;
      if (index < 0 || index >= totalSections) return;
      if (index === currentSection) return;

      const now = Date.now();
      if (now - lastWheelTime.current < COOLDOWN_MS) return;
      lastWheelTime.current = now;

      setDirection(index > currentSection ? 1 : -1);
      setIsAnimating(true);
      setCurrentSection(index);

      // Reset animation lock after transition completes
      setTimeout(() => setIsAnimating(false), COOLDOWN_MS);
    },
    [currentSection, isAnimating, totalSections]
  );

  const navigateByDelta = useCallback(
    (delta: number) => {
      if (delta > 0 && currentSection < totalSections - 1) {
        goToSection(currentSection + 1);
      } else if (delta < 0 && currentSection > 0) {
        goToSection(currentSection - 1);
      }
    },
    [currentSection, totalSections, goToSection]
  );

  /* ─── Shared: check if inner content is at scroll boundary ── */
  const boundaryHits = useRef(0);
  const lastBoundaryDir = useRef(0);

  const getInnerElement = useCallback(() => {
    return containerRef.current?.querySelector(".parallax-section__inner") as HTMLElement | null;
  }, []);

  const checkBoundary = useCallback((scrollDir: number): "navigate" | "scroll" | "blocked" => {
    const inner = getInnerElement();
    if (!inner) return "navigate"; // no inner = non-scrollable, just navigate

    const { scrollTop, scrollHeight, clientHeight } = inner;
    const isScrollable = scrollHeight > clientHeight + 2;

    if (!isScrollable) return "navigate"; // content fits in viewport, navigate

    const isAtTop = scrollTop <= 1;
    const isAtBottom = scrollTop + clientHeight >= scrollHeight - 1;

    // Scrolling down (next section) but not at bottom → let it scroll
    if (scrollDir > 0 && !isAtBottom) {
      boundaryHits.current = 0;
      return "scroll";
    }
    // Scrolling up (prev section) but not at top → let it scroll
    if (scrollDir < 0 && !isAtTop) {
      boundaryHits.current = 0;
      return "scroll";
    }

    // At boundary! Track consecutive boundary hits in same direction
    if (lastBoundaryDir.current !== scrollDir) {
      boundaryHits.current = 0;
      lastBoundaryDir.current = scrollDir;
    }
    boundaryHits.current++;

    // Need 2 consecutive boundary hits to navigate (prevents accidental triggers)
    if (boundaryHits.current >= 2) {
      boundaryHits.current = 0;
      return "navigate";
    }

    return "blocked"; // at boundary but first hit, wait for confirmation
  }, [getInnerElement]);

  /* ─── Wheel Handler ──────────────────────────────────── */
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleWheel = (e: WheelEvent) => {
      if (isAnimating) {
        e.preventDefault();
        return;
      }

      const scrollDir = e.deltaY > 0 ? 1 : -1;
      const result = checkBoundary(scrollDir);

      if (result === "scroll") {
        // Let the inner element scroll naturally
        return;
      }

      // Prevent default for boundary/navigate cases
      e.preventDefault();

      if (result === "navigate") {
        navigateByDelta(scrollDir);
      }
      // "blocked" = at boundary, waiting for next scroll to confirm
    };

    container.addEventListener("wheel", handleWheel, { passive: false });
    return () => container.removeEventListener("wheel", handleWheel);
  }, [navigateByDelta, isAnimating, checkBoundary]);

  /* ─── Touch Handlers (Mobile) ────────────────────────── */
  const touchScrollStart = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartY.current = e.touches[0].clientY;
      touchStartX.current = e.touches[0].clientX;

      // Snapshot inner scroll position
      const inner = container.querySelector(".parallax-section__inner");
      touchScrollStart.current = inner ? inner.scrollTop : 0;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      if (isAnimating) return;

      const deltaY = touchStartY.current - e.changedTouches[0].clientY;
      const deltaX = touchStartX.current - e.changedTouches[0].clientX;

      // Ignore horizontal or tiny swipes
      if (Math.abs(deltaY) <= Math.abs(deltaX) || Math.abs(deltaY) < 60) return;

      const inner = container.querySelector(".parallax-section__inner");
      if (inner) {
        const { scrollHeight, clientHeight } = inner;
        const isScrollable = scrollHeight > clientHeight + 3;

        if (isScrollable) {
          // Check if we started the swipe at the boundaries (with a 5px tolerance)
          const isStartedAtTop = touchScrollStart.current <= 5;
          const isStartedAtBottom = touchScrollStart.current + clientHeight >= scrollHeight - 5;

          // If swiping UP (deltaY > 0) to navigate NEXT, but touch did not start at the bottom boundary, ignore
          if (deltaY > 0 && !isStartedAtBottom) {
            return;
          }
          // If swiping DOWN (deltaY < 0) to navigate PREV, but touch did not start at the top boundary, ignore
          if (deltaY < 0 && !isStartedAtTop) {
            return;
          }
        }
      }

      navigateByDelta(deltaY);
    };

    container.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });
    container.addEventListener("touchend", handleTouchEnd, { passive: true });
    return () => {
      container.removeEventListener("touchstart", handleTouchStart);
      container.removeEventListener("touchend", handleTouchEnd);
    };
  }, [navigateByDelta, isAnimating]);

  /* ─── Keyboard Handler ───────────────────────────────── */
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "ArrowDown":
        case "PageDown":
          e.preventDefault();
          navigateByDelta(1);
          break;
        case "ArrowUp":
        case "PageUp":
          e.preventDefault();
          navigateByDelta(-1);
          break;
        case "Home":
          e.preventDefault();
          goToSection(0);
          break;
        case "End":
          e.preventDefault();
          goToSection(totalSections - 1);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigateByDelta, goToSection, totalSections]);

  /* ─── Lock body scroll ───────────────────────────────── */
  useEffect(() => {
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
    };
  }, []);

  /* ─── Parallax Animation Variants ────────────────────── */
  const variants = {
    enter: (dir: number) => ({
      y: dir > 0 ? "80%" : "-80%",
      scale: 0.92,
      opacity: 0,
    }),
    center: {
      y: "0%",
      scale: 1,
      opacity: 1,
    },
    exit: (dir: number) => ({
      y: dir > 0 ? "-120%" : "120%",
      scale: 0.95,
      opacity: 0,
    }),
  };

  const transition = {
    y: {
      type: "tween" as const,
      duration: 0.85,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
    scale: {
      type: "tween" as const,
      duration: 0.85,
      ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
    },
    opacity: {
      type: "tween" as const,
      duration: 0.5,
      ease: "easeInOut" as const,
    },
  };

  return (
    <ParallaxContext.Provider
      value={{ currentSection, totalSections, goToSection, direction }}
    >
      <div ref={containerRef} className="parallax-container">
        {/* Section Counter */}
        <div className="parallax-counter">
          <motion.span
            key={currentSection}
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="parallax-counter__current"
          >
            {String(currentSection + 1).padStart(2, "0")}
          </motion.span>
          <span className="parallax-counter__separator">/</span>
          <span className="parallax-counter__total">
            {String(totalSections).padStart(2, "0")}
          </span>
        </div>

        {/* Progress Bar */}
        <SectionProgress current={currentSection} total={totalSections} />

        {/* Section Indicator */}
        <SectionIndicator
          sections={sections}
          current={currentSection}
          onNavigate={goToSection}
        />

        {/* Sections */}
        <AnimatePresence initial={false} custom={direction} mode="popLayout">
          <motion.div
            key={currentSection}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={transition}
            className="parallax-section"
          >
            <div className="parallax-section__inner">
              {childrenArray[currentSection]}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Scroll Hint (only on first section) */}
        <AnimatePresence>
          {currentSection === 0 && (
            <motion.div
              className="parallax-scroll-hint"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
            >
              <motion.div
                className="parallax-scroll-hint__mouse"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <svg
                  width="24"
                  height="36"
                  viewBox="0 0 24 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="1"
                    y="1"
                    width="22"
                    height="34"
                    rx="11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                  />
                  <motion.rect
                    x="11"
                    y="8"
                    width="2"
                    height="6"
                    rx="1"
                    fill="currentColor"
                    animate={{ y: [8, 16, 8] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </svg>
              </motion.div>
              <span className="parallax-scroll-hint__text">SCROLL_DOWN</span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </ParallaxContext.Provider>
  );
}
