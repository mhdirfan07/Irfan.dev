"use client";

import { Hexagon, Circle, Share2, Cloud } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

export default function ValidationLogs() {
  const clients = [
    {
      id: "VAL_01",
      name: "CRYPTO_NODE",
      quote: `"Architectural masterpiece."`,
      icon: <Hexagon className="w-8 h-8 text-[var(--color-muted)] mb-4" strokeWidth={1} />
    },
    {
      id: "VAL_02",
      name: "SILICON_FOUNDRY",
      quote: `"Precision delivery."`,
      icon: <Circle className="w-8 h-8 text-[var(--color-muted)] mb-4" strokeWidth={1} />
    },
    {
      id: "VAL_03",
      name: "NETWORK_MESH",
      quote: `"High scalability expert."`,
      icon: <Share2 className="w-8 h-8 text-[var(--color-muted)] mb-4" strokeWidth={1} />
    },
    {
      id: "VAL_04",
      name: "VOID_CLOUD",
      quote: `"Zero downtime migration."`,
      icon: <Cloud className="w-8 h-8 text-[var(--color-muted)] mb-4" strokeWidth={1} />
    }
  ];

  return (
    <section className="flex flex-col border-b border-[var(--color-border)]">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 border-b border-[var(--color-border)] bg-[var(--color-background)]">
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 md:mb-0">VALIDATION_LOGS</h2>
          <div className="flex gap-8">
            <div className="flex flex-col text-right">
              <span className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">SATISFACTION</span>
              <motion.span
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                100%
              </motion.span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">RETENTION</span>
              <motion.span
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                95%
              </motion.span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Grid */}
      <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 bento-grid bg-[var(--color-surface)]" delay={0.1}>
        {clients.map((client) => (
          <StaggerItem key={client.id}>
            <motion.div
              className="bento-cell p-8 flex flex-col items-center justify-center border-b lg:border-b-0 lg:border-r border-[var(--color-border)] h-64 relative"
              whileHover={{ backgroundColor: "var(--color-background)" }}
              transition={{ duration: 0.2 }}
            >
              <span className="absolute top-4 right-4 font-mono text-[10px] text-[var(--color-muted)] uppercase">
                {client.id}
              </span>
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ duration: 0.2 }}
              >
                {client.icon}
              </motion.div>
              <h4 className="font-mono text-xs font-bold uppercase tracking-wider mb-2">
                {client.name}
              </h4>
              <p className="font-mono text-xs text-[var(--color-muted)] text-center italic">
                {client.quote}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}
