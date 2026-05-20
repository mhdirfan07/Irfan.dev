"use client";

import { useState } from "react";
import { Search, Box, Move, Clock, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

export default function ProjectGrid() {
  const [activeFilter, setActiveFilter] = useState("ALL");

  const filters = ["ALL", "BACKEND", "AI MODELS", "INFRASTRUCTURE"];

  const projects = [
    {
      id: "SYST_01",
      label: "CLOUD_RUN",
      icon: <Box className="w-5 h-5 text-[var(--color-muted)]" strokeWidth={1.5} />,
      title: "NEURAL_CORE_V2",
      metrics: [
        { label: "LATENCY", value: "41ms" },
        { label: "UPTIME", value: "99.9%" },
        { label: "NODES", value: "128" },
        { label: "STATUS", value: "STABLE", highlight: "text-green-500" },
      ]
    },
    {
      id: "SYST_02",
      label: "NLP_HORIZON",
      icon: <Move className="w-5 h-5 text-[var(--color-muted)]" strokeWidth={1.5} />,
      title: "SEMANTIC_GRID",
      metrics: [
        { label: "ACCURACY", value: "94.2%" },
        { label: "MEMORY", value: "2.4GB" },
        { label: "TOKENS/S", value: "1.2M" },
        { label: "LAYER", value: "TRANSFORM" },
      ]
    },
    {
      id: "SYST_03",
      label: "K8S_STACK",
      icon: <Clock className="w-5 h-5 text-[var(--color-muted)]" strokeWidth={1.5} />,
      title: "REALTIME_BROKER",
      metrics: [
        { label: "THROUGHPUT", value: "850K/s" },
        { label: "ERR_RATE", value: "0.001%" },
        { label: "STORAGE", value: "IN MEMORY" },
        { label: "ROUTING", value: "MULTI AZ" },
      ]
    }
  ];

  return (
    <section className="flex flex-col border-b border-[var(--color-border)]">
      {/* Filters Bar */}
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row border-b border-[var(--color-border)]">
          <div className="flex flex-wrap p-4 gap-2 md:border-r border-[var(--color-border)] md:flex-grow">
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className={`font-mono text-xs uppercase px-4 py-2 border border-[var(--color-border)] transition-colors ${
                  activeFilter === filter
                    ? "bg-[var(--color-foreground)] text-[var(--color-background)]"
                    : "bg-[var(--color-surface)] text-[var(--color-muted)] hover:text-[var(--color-foreground)]"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
          <div className="flex items-center p-4 bg-[var(--color-surface)] md:w-72 lg:w-96 flex-shrink-0">
            <div className="flex items-center w-full border border-[var(--color-border)] px-3 py-2 focus-within:border-black transition-colors">
              <input
                type="text"
                placeholder="SEARCH SYSTEMS..."
                className="w-full font-mono text-xs outline-none bg-transparent"
              />
              <Search className="w-4 h-4 text-[var(--color-muted)]" strokeWidth={1.5} />
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 bento-grid" delay={0.1}>
        {projects.map((project, idx) => (
          <StaggerItem key={idx}>
            <motion.div
              className="bento-cell bg-[var(--color-surface)] border-b md:border-b-0 md:border-r border-[var(--color-border)] flex flex-col h-[400px]"
              transition={{ duration: 0.2 }}
            >
              {/* Top row: Label and Icon */}
              <div className="flex justify-between items-center p-6 border-b border-[var(--color-border)]">
                <span className="font-mono text-xs border border-black px-2 py-1 uppercase tracking-wider font-bold">
                  [ {project.label} ]
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-[var(--color-muted)]">ID: {project.id}</span>
                  {project.icon}
                </div>
              </div>

              {/* Title */}
              <div className="flex-grow flex items-center justify-center p-8">
                <h3 className="text-2xl font-bold uppercase tracking-tight text-center">
                  {project.title}
                </h3>
              </div>

              {/* Metrics */}
              <div className="border-t border-[var(--color-border)]">
                <div className="grid grid-cols-2">
                  {project.metrics.map((metric, i) => (
                    <div
                      key={i}
                      className={`p-4 flex flex-col ${
                        i % 2 === 0 ? "border-r border-[var(--color-border)]" : ""
                      } ${i < 2 ? "border-b border-[var(--color-border)]" : ""}`}
                    >
                      <span className="font-mono text-[10px] text-[var(--color-muted)] uppercase mb-1">
                        {metric.label}
                      </span>
                      <span className={`font-mono text-sm ${metric.highlight || ""}`}>
                        {metric.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Right Arrow */}
              <div className="flex justify-end p-0">
                <motion.div
                  className="border-t border-l border-[var(--color-border)] p-4 cursor-pointer"
                  whileHover={{ backgroundColor: "var(--color-foreground)", color: "var(--color-background)" }}
                  transition={{ duration: 0.2 }}
                >
                  <ArrowUpRight className="w-5 h-5" strokeWidth={1.5} />
                </motion.div>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
