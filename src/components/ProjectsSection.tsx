"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Globe, Smartphone, Cloud, Code2 } from "lucide-react";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

type CategoryKey = "ALL" | "WEB" | "MOBILE" | "CLOUD";

const projects: {
  id: string;
  title: string;
  description: string;
  category: CategoryKey;
  tags: string[];
  status: string;
  statusColor: string;
  icon: React.ReactNode;
  metrics: { label: string; value: string }[];
}[] = [
    {
      id: "PROJ_01",
      title: "PORTFOLIO_OS",
      description: "High-fidelity Technical Blueprint Portfolio built with Next.js, Tailwind CSS, and Framer Motion.",
      category: "WEB",
      tags: ["NEXT.JS", "TYPESCRIPT", "TAILWIND", "FRAMER_MOTION"],
      status: "LIVE",
      statusColor: "text-green-500",
      icon: <Globe className="w-8 h-8" strokeWidth={1} />,
      metrics: [
        { label: "FRAMEWORK", value: "NEXT.JS" },
        { label: "TYPE", value: "PORTFOLIO" },
        { label: "DESIGN", value: "BRUTALIST" },
        { label: "STATUS", value: "LIVE" },
      ],
    },
    {
      id: "PROJ_02",
      title: "MOBILE_APP_V1",
      description: "Cross-platform mobile application built with Flutter & Dart, with clean architecture and state management.",
      category: "MOBILE",
      tags: ["FLUTTER", "DART", "REST_API", "STATE_MGMT"],
      status: "SHIPPED",
      statusColor: "text-blue-500",
      icon: <Smartphone className="w-8 h-8" strokeWidth={1} />,
      metrics: [
        { label: "PLATFORM", value: "ANDROID" },
        { label: "FRAMEWORK", value: "FLUTTER" },
        { label: "API", value: "REST" },
        { label: "STATUS", value: "SHIPPED" },
      ],
    },
    {
      id: "PROJ_03",
      title: "WEB_FULLSTACK",
      description: "Full-stack web application with Node.js backend, REST API, and React frontend with authentication flow.",
      category: "WEB",
      tags: ["REACT", "NODE.JS", "EXPRESS", "MYSQL"],
      status: "DEPLOYED",
      statusColor: "text-green-500",
      icon: <Code2 className="w-8 h-8" strokeWidth={1} />,
      metrics: [
        { label: "FRONTEND", value: "REACT" },
        { label: "BACKEND", value: "NODE.JS" },
        { label: "DATABASE", value: "MYSQL" },
        { label: "STATUS", value: "DEPLOYED" },
      ],
    },
    {
      id: "PROJ_04",
      title: "CLOUD_DEPLOY",
      description: "Containerized application deployment using Docker with CI/CD pipeline integration on a cloud provider.",
      category: "CLOUD",
      tags: ["DOCKER", "CI/CD", "LINUX", "GITHUB_ACTIONS"],
      status: "RUNNING",
      statusColor: "text-[var(--color-accent)]",
      icon: <Cloud className="w-8 h-8" strokeWidth={1} />,
      metrics: [
        { label: "CONTAINER", value: "DOCKER" },
        { label: "CI/CD", value: "GITHUB" },
        { label: "INFRA", value: "LINUX" },
        { label: "STATUS", value: "RUNNING" },
      ],
    },
  ];

const filters: { label: string; value: CategoryKey }[] = [
  { label: "ALL", value: "ALL" },
  { label: "WEB", value: "WEB" },
  { label: "MOBILE", value: "MOBILE" },
  { label: "CLOUD", value: "CLOUD" },
];

export default function ProjectsSection() {
  const [active, setActive] = useState<CategoryKey>("ALL");

  const filtered = active === "ALL" ? projects : projects.filter((p) => p.category === active);

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
              className="bento-cell bg-[var(--color-surface)] flex flex-col h-[420px] border-b md:border-b-0 border-[var(--color-border)]"
              // whileHover={{ backgroundColor: "var(--color-background)" }}
              transition={{ duration: 0.2 }}
            >
              {/* Card Header */}
              <div className="flex justify-between items-center p-6 border-b border-[var(--color-border)]">
                <span className="font-mono text-xs border border-[var(--color-foreground)] px-2 py-1 uppercase tracking-wider font-bold">
                  [ {project.category} ]
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[var(--color-muted)]">ID: {project.id}</span>
                </div>
              </div>

              {/* Icon + Title */}
              <div className="flex-grow flex flex-col items-center justify-center p-8 gap-4">
                <div className="text-[var(--color-muted)]">{project.icon}</div>
                <h3 className="text-2xl font-bold uppercase tracking-tight text-center">
                  {project.title}
                </h3>
                <p className="text-xs text-[var(--color-muted)] text-center leading-relaxed max-w-xs">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1.5 px-6 pb-4">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[9px] border border-[var(--color-border)] px-1.5 py-0.5 uppercase text-[var(--color-muted)]">
                    {tag}
                  </span>
                ))}
              </div>

              {/* Metrics */}
              <div className="border-t border-[var(--color-border)]">
                <div className="grid grid-cols-4">
                  {project.metrics.map((m, i) => (
                    <div
                      key={i}
                      className={`p-3 flex flex-col ${i < 3 ? "border-r border-[var(--color-border)]" : ""}`}
                    >
                      <span className="font-mono text-[9px] text-[var(--color-muted)] uppercase mb-1">{m.label}</span>
                      <span className={`font-mono text-[10px] font-bold ${i === 3 ? project.statusColor : ""}`}>
                        {m.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Arrow */}
              <div className="flex justify-end">
                <motion.div
                  className="border-t border-l border-[var(--color-border)] p-4 cursor-pointer"
                  whileHover="hover"
                >
                  <motion.div
                    variants={{ hover: { scale: 1.2 } }}
                    transition={{ duration: 0.2 }}
                  >
                    <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                  </motion.div>
                </motion.div>
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
