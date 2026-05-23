"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Code2,
  Globe,
  Cloud,
  Terminal,
  Cpu,
  Atom,
  Wind,
  Layers,
  Boxes,
  GitBranch,
  Workflow,
  Blocks,
  FileCode,
  Flame,
  Binary,
  Network,
} from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

const skills = [
  { name: "C++", icon: <Cpu className="w-3.5 h-3.5" /> },
  { name: "GTK", icon: <Layers className="w-3.5 h-3.5" /> },
  { name: "LVGL", icon: <Blocks className="w-3.5 h-3.5" /> },
  { name: "HTML / CSS", icon: <FileCode className="w-3.5 h-3.5" /> },
  { name: "JavaScript", icon: <Code2 className="w-3.5 h-3.5" /> },
  { name: "TypeScript", icon: <Binary className="w-3.5 h-3.5" /> },
  { name: "React", icon: <Atom className="w-3.5 h-3.5" /> },
  { name: "Next.js", icon: <Globe className="w-3.5 h-3.5" /> },
  { name: "Tailwind CSS", icon: <Wind className="w-3.5 h-3.5" /> },
  { name: "Node.js", icon: <Terminal className="w-3.5 h-3.5" /> },
  { name: "Express", icon: <Cpu className="w-3.5 h-3.5" /> },
  { name: "REST API", icon: <Network className="w-3.5 h-3.5" /> },
  { name: "PHP / Laravel", icon: <Flame className="w-3.5 h-3.5" /> },
  { name: "Google Cloud Run", icon: <Cloud className="w-3.5 h-3.5" /> },
  { name: "Google App Engine", icon: <Layers className="w-3.5 h-3.5" /> },
  { name: "Docker", icon: <Boxes className="w-3.5 h-3.5" /> },
  { name: "Git / GitHub", icon: <GitBranch className="w-3.5 h-3.5" /> },
  { name: "CI/CD", icon: <Workflow className="w-3.5 h-3.5" /> },
  { name: "Antigravity" },
];

const specializations = [
  { icon: <Globe className="w-5 h-5" strokeWidth={1.5} />, label: "WEB_DEV" },
  { icon: <Cloud className="w-5 h-5" strokeWidth={1.5} />, label: "CLOUD_OPS" },
];

export default function AboutSection({ data }: { data: any }) {
  const safeData = data || {};
  const entity = safeData.entity || "ENTITY: IRFN";
  const status = safeData.status || "STATUS: AVAILABLE_FOR_HIRE";
  const name = safeData.name || "MUHAMMAD\nIRFAN";
  const role = safeData.role || "> SOFTWARE_ENGINEER / FULL_STACK_DEVELOPER";
  const description = safeData.description || "An Informatics alumnus from the University of Bengkulu and a passionate Software Engineer with 1–2 years of hands-on experience building scalable web applications, and cloud-integrated systems. Currently contributing as a part-time engineer at Aranus Tech / Perseverance Tech, focused on delivering high-quality, performant solutions across the full development stack.";
  const profileImage = safeData.profileImage || "images/profile3.png";

  const displaySpecializations = safeData.specializations || specializations;
  const displayStats = safeData.stats || [
    { label: "YEARS_EXP", value: "1-2" },
    { label: "PROJECTS", value: "6" },
    { label: "FOCUS", value: "FULL_STK" },
  ];
  const displaySkills = safeData.skills || skills;

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
          <div className="bento-cell bg-[var(--color-surface)] relative overflow-hidden p-8 md:p-12 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-[var(--color-border)]">

            {/* Background Profile Image */}
            <div
              className="absolute inset-y-0 right-0 w-[90%] md:w-[60%] pointer-events-none z-0 grayscale opacity-30 dark:opacity-20"
              style={{
                backgroundImage: `url('${profileImage}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
                WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)'
              }}
            />

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <span className="bg-[var(--color-foreground)] text-[var(--color-background)] font-mono text-[10px] px-2 py-1 uppercase tracking-wider">{entity}</span>
                <span className="font-mono text-[10px] text-[var(--color-muted)] uppercase">{status}</span>
              </div>

              <h3 className="text-4xl md:text-5xl font-bold uppercase leading-tight mb-6 whitespace-pre-line">
                {name}
              </h3>

              <div className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest mb-6">
                {role}
              </div>

              <p className="text-sm leading-relaxed text-[var(--color-muted)] max-w-xl mb-8">
                {description}
              </p>

              <div className="flex flex-wrap gap-3">
                {displaySpecializations.map((s: any, idx: number) => (
                  <motion.div
                    key={idx}
                    className="flex items-center gap-2 border border-[var(--color-border)] px-4 py-2 font-mono text-xs uppercase"
                    whileHover={{ borderColor: "var(--color-foreground)", backgroundColor: "var(--color-background)" }}
                    transition={{ duration: 0.15 }}
                  >
                    {/* Render Icon dynamically if mapped, otherwise default */}
                    {s.icon === 'Cloud' ? <Cloud className="w-5 h-5" strokeWidth={1.5} /> : <Globe className="w-5 h-5" strokeWidth={1.5} />}
                    {s.label}
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Stats Row */}
            <div className="relative z-10 grid grid-cols-3 border-t border-[var(--color-border)] mt-10 pt-6 gap-4">
              {displayStats.map((stat: any, idx: number) => (
                <div key={idx} className="flex flex-col">
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
          <div className="flex-1 overflow-y-auto p-6">
            <div className="flex flex-wrap gap-2.5">
              {displaySkills.map((skill: any, idx: number) => (
                <StaggerItem key={idx}>
                  <motion.div
                    className="font-mono text-[10px] border border-[var(--color-border)] bg-[var(--color-surface)] px-2.5 py-1.5 flex items-center gap-2 uppercase tracking-wide cursor-default"
                    whileHover={{
                      borderColor: "var(--color-foreground)",
                      scale: 1.05,
                      backgroundColor: "var(--color-background)"
                    }}
                    transition={{ duration: 0.15 }}
                  >
                    <span className="text-[var(--color-accent)]">
                      {skill.icon === 'Layers' ? <Layers className="w-3.5 h-3.5" /> :
                        skill.icon === 'Blocks' ? <Blocks className="w-3.5 h-3.5" /> :
                          skill.icon === 'FileCode' ? <FileCode className="w-3.5 h-3.5" /> :
                            skill.icon === 'Binary' ? <Binary className="w-3.5 h-3.5" /> :
                              skill.icon === 'Atom' ? <Atom className="w-3.5 h-3.5" /> :
                                skill.icon === 'Wind' ? <Wind className="w-3.5 h-3.5" /> :
                                  skill.icon === 'Terminal' ? <Terminal className="w-3.5 h-3.5" /> :
                                    skill.icon === 'Network' ? <Network className="w-3.5 h-3.5" /> :
                                      skill.icon === 'Flame' ? <Flame className="w-3.5 h-3.5" /> :
                                        skill.icon === 'Boxes' ? <Boxes className="w-3.5 h-3.5" /> :
                                          skill.icon === 'GitBranch' ? <GitBranch className="w-3.5 h-3.5" /> :
                                            skill.icon === 'Workflow' ? <Workflow className="w-3.5 h-3.5" /> :
                                              skill.icon === 'Globe' ? <Globe className="w-3.5 h-3.5" /> :
                                                skill.icon === 'Cloud' ? <Cloud className="w-3.5 h-3.5" /> :
                                                  skill.icon === 'Code2' ? <Code2 className="w-3.5 h-3.5" /> :
                                                    <Cpu className="w-3.5 h-3.5" />}
                    </span>
                    <span className="text-[var(--color-foreground)] font-bold">{skill.name}</span>
                  </motion.div>
                </StaggerItem>
              ))}
            </div>
          </div>
        </StaggerContainer>
      </div>
    </section>
  );
}
