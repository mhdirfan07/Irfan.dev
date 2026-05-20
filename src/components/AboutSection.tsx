"use client";

import { motion } from "framer-motion";
import { MapPin, Code2, Globe, Smartphone, Cloud } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

const skills = [
  { group: "WEB", items: ["HTML / CSS", "JavaScript", "TypeScript", "React", "Next.js", "Tailwind CSS"] },
  { group: "BACKEND", items: ["Node.js", "Express", "REST API", "PHP / Laravel"] },
  { group: "CLOUD & DEVOPS", items: ["Docker", "Git / GitHub", "CI/CD", "Linux"] },
  { group: "MOBILE", items: ["Flutter", "Dart", "Android Studio"] },
];

const specializations = [
  { icon: <Globe className="w-5 h-5" strokeWidth={1.5} />, label: "WEB_DEV" },
  { icon: <Cloud className="w-5 h-5" strokeWidth={1.5} />, label: "CLOUD_OPS" },
  { icon: <Smartphone className="w-5 h-5" strokeWidth={1.5} />, label: "MOBILE_DEV" },
];

export default function AboutSection() {
  return (
    <section id="about" className="flex flex-col border-b border-[var(--color-border)]">
      {/* Section Header */}
      <FadeIn direction="up">
        <div className="flex items-center justify-between p-8 border-b border-[var(--color-border)] bg-[var(--color-background)]">
          <div className="flex items-center gap-4">
            <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">// ABOUT_ME</span>
            <h2 className="text-3xl font-bold uppercase tracking-tight">SYSTEM_PROFILE</h2>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] text-[var(--color-muted)] uppercase">
            <MapPin className="w-3 h-3" />
            <span>BENGKULU, ID</span>
          </div>
        </div>
      </FadeIn>

      {/* Main Bento Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 bento-grid">

        {/* Bio Cell — spans 2 cols */}
        <FadeIn direction="left" className="lg:col-span-2">
          <div className="bento-cell bg-[var(--color-surface)] p-8 md:p-12 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-[var(--color-border)]">
            <div>
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-[var(--color-foreground)] text-[var(--color-background)] font-mono text-[10px] px-2 py-1 uppercase tracking-wider">ENTITY: IRFN</span>
                <span className="font-mono text-[10px] text-[var(--color-muted)] uppercase">STATUS: AVAILABLE_FOR_HIRE</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-6">
                MUHAMMAD<br />IRFAN
              </h3>

              <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest mb-6">
                &gt; SOFTWARE_ENGINEER / FULL_STACK_DEVELOPER
              </div>

              <p className="text-sm leading-relaxed text-[var(--color-muted)] max-w-xl mb-8">
                A passionate Software Engineer with 1–2 years of hands-on experience building scalable web applications,
                mobile apps, and cloud-integrated systems. Currently contributing as a part-time engineer at{" "}
                <span className="font-semibold text-[var(--color-foreground)]">Aranus Tech / Perseverance Tech</span>,
                focused on delivering high-quality, performant solutions across the full development stack.
              </p>

              <div className="flex flex-wrap gap-3">
                {specializations.map((s) => (
                  <motion.div
                    key={s.label}
                    className="flex items-center gap-2 border border-[var(--color-border)] px-4 py-2 font-mono text-xs uppercase"
                    whileHover={{ borderColor: "var(--color-foreground)", backgroundColor: "var(--color-background)" }}
                    transition={{ duration: 0.15 }}
                  >
                    {s.icon}
                    {s.label}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="grid grid-cols-3 border-t border-[var(--color-border)] mt-10 pt-6 gap-4">
              {[
                { label: "YEARS_EXP", value: "1-2" },
                { label: "PROJECTS", value: "10+" },
                { label: "FOCUS", value: "FULL_STK" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col">
                  <span className="font-mono text-[10px] text-[var(--color-muted)] uppercase mb-1">{stat.label}</span>
                  <span className="font-bold font-mono text-lg">{stat.value}</span>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>

        {/* Skills Cell */}
        <StaggerContainer className="bento-cell bg-[var(--color-background)] flex flex-col" delay={0.15}>
          <div className="p-6 border-b border-[var(--color-border)]">
            <div className="flex items-center gap-2">
              <Code2 className="w-4 h-4" strokeWidth={1.5} />
              <span className="font-mono text-xs uppercase tracking-widest font-bold">SKILL_MATRIX</span>
            </div>
          </div>
          <div className="flex-1 overflow-auto p-6 flex flex-col gap-6">
            {skills.map((group) => (
              <StaggerItem key={group.group}>
                <div>
                  <p className="font-mono text-[10px] text-[var(--color-accent)] uppercase tracking-widest mb-2 font-bold">
                    [{group.group}]
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <motion.span
                        key={item}
                        className="font-mono text-[10px] border border-[var(--color-border)] bg-[var(--color-surface)] px-2 py-1 uppercase"
                        whileHover={{ borderColor: "var(--color-foreground)", scale: 1.04 }}
                        transition={{ duration: 0.15 }}
                      >
                        {item}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
