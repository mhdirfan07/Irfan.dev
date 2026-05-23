"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, Cloud, Code2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

type CategoryKey = "ALL" | "WEB" | "MOBILE" | "CLOUD";

const filters: { label: string; value: CategoryKey }[] = [
  { label: "ALL", value: "ALL" },
  { label: "WEB", value: "WEB" },
  { label: "MOBILE", value: "MOBILE" },
  { label: "CLOUD", value: "CLOUD" },
];

export default function ProjectsSection({ data }: { data: any[] }) {
  const [active, setActive] = useState<CategoryKey>("ALL");

  // Format data dari Keystatic ke format yang dibutuhkan komponen
  const displayProjects = (data || []).map((p, idx) => ({
    id: `PROJ_0${idx + 1}`,
    title: p.title || "UNTITLED_PROJECT",
    description: p.description || "",
    coverImage: p.coverImage,
    link: p.link || "",
    repoUrl: p.repoUrl || "",
    category: (p.category as CategoryKey) || "WEB",
    tags: p.techStack || [],
    status: "LIVE",
    statusColor: "text-green-500",
    icon: <Globe className="w-8 h-8" strokeWidth={1} />,
    metrics: [
      { label: "FRAMEWORK", value: p.techStack?.[0] || "REACT" },
    ],
  }));

  const filtered = active === "ALL" ? displayProjects : displayProjects.filter((p) => p.category === active);

  return (
    <section id="projects" className="flex flex-col border-b border-[var(--color-border)]">
      {/* Section Header */}
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row md:items-center justify-between p-8 border-b border-[var(--color-border)] bg-[var(--color-background)] gap-4">
          <div>
            <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest">// PROJECT_REGISTRY</span>
            <h2 className="text-3xl font-bold uppercase tracking-tight">MY_PROJECTS</h2>
          </div>
          {/* Filters */}
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <motion.button
                key={f.value}
                onClick={() => setActive(f.value)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`font-mono text-xs uppercase px-4 py-2 border transition-colors ${active === f.value
                  ? "bg-[var(--color-foreground)] text-[var(--color-background)] border-[var(--color-foreground)]"
                  : "bg-[var(--color-surface)] text-[var(--color-muted)] border-[var(--color-border)]"
                  }`}
              >
                {f.label}
              </motion.button>
            ))}
          </div>
        </div>
      </FadeIn>

      {/* Project Grid */}
      <StaggerContainer
        key={active}
        className="grid grid-cols-1 md:grid-cols-2 bento-grid"
        delay={0.05}
      >
        {filtered.map((project) => (
          <StaggerItem key={project.id}>
            <motion.div
              className="bento-cell bg-[var(--color-surface)] flex flex-col h-[460px] border-b md:border-b-0 border-[var(--color-border)] group relative overflow-hidden"
              transition={{ duration: 0.2 }}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center p-4 px-6 border-b border-[var(--color-border)] relative z-20 bg-[var(--color-surface)]">
                <span className="font-mono text-[9px] bg-[var(--color-foreground)] text-[var(--color-background)] px-2 py-1 uppercase tracking-wider font-bold">
                  {project.category}
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[9px] text-[var(--color-muted)] tracking-widest">ID: {project.id}</span>
                </div>
              </div>

              {/* Visual Block (Top Half) */}
              <div className="relative h-48 border-b border-[var(--color-border)] bg-[var(--color-background)] flex items-center justify-center overflow-hidden flex-shrink-0">
                {project.coverImage ? (
                  <>
                    <div 
                      className="absolute inset-0 z-0 grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-in-out"
                      style={{
                        backgroundImage: `url('${project.coverImage}')`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                      }}
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                  </>
                ) : (
                  <div className="text-[var(--color-muted)] opacity-50 group-hover:opacity-100 transition-all group-hover:scale-110 duration-500 group-hover:text-[var(--color-foreground)]">
                    {project.icon}
                  </div>
                )}
                
                {/* Brutalist Scanline overlay */}
                <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(to_bottom,transparent_50%,rgba(0,0,0,0.05)_51%)] bg-[size:100%_4px] z-20 dark:bg-[linear-gradient(to_bottom,transparent_50%,rgba(255,255,255,0.02)_51%)]" />
              </div>

              {/* Content Block (Bottom Half) */}
              <div className="flex flex-col flex-grow p-6 pb-4 justify-between bg-[var(--color-surface)] relative z-20">
                <div>
                  <h3 className="text-xl font-bold uppercase tracking-tight mb-2 group-hover:text-[var(--color-accent)] transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[var(--color-muted)] leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
                
                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {project.tags.map((tag: string) => (
                    <span key={tag} className="font-mono text-[9px] border border-[var(--color-border)] px-1.5 py-0.5 uppercase text-[var(--color-muted)] group-hover:border-[var(--color-foreground)] group-hover:text-[var(--color-foreground)] transition-colors duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics & Footer */}
              <div className="flex justify-between border-t border-[var(--color-border)] mt-auto bg-[var(--color-surface)] relative z-20 h-[60px]">
                {project.metrics && project.metrics.length > 0 ? (
                  <div className="flex divide-x divide-[var(--color-border)] flex-grow">
                    {project.metrics.map((m, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 flex flex-col justify-center flex-1"
                      >
                        <span className="font-mono text-[9px] text-[var(--color-muted)] uppercase mb-0.5">{m.label}</span>
                        <span className="font-mono text-[10px] font-bold line-clamp-1">
                          {m.value}
                        </span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex-grow"></div>
                )}
                
                {/* Arrow */}
                <motion.a
                  href={project.link || project.repoUrl || "#"}
                  target={project.link || project.repoUrl ? "_blank" : "_self"}
                  className="border-l border-[var(--color-border)] px-6 flex items-center justify-center cursor-pointer hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors"
                  whileHover="hover"
                >
                  <motion.div
                    variants={{ hover: { scale: 1.2, x: 2, y: -2 } }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                  </motion.div>
                </motion.a>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>

      {/* More Projects Link */}
      <FadeIn direction="up">
        <div className="p-6 flex justify-center border-t border-[var(--color-border)] bg-[var(--color-surface)]">
          <motion.a
            href="https://github.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xs uppercase tracking-widest text-[var(--color-muted)] flex items-center gap-2 hover:text-[var(--color-foreground)] transition-colors"
            whileHover={{ scale: 1.03 }}
          >
            VIEW_MORE_ON_GITHUB <ArrowUpRight className="w-3 h-3" />
          </motion.a>
        </div>
      </FadeIn>
    </section>
  );
}
