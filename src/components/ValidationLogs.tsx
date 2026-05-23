"use client";

import { Cloud, Code, Wrench, BookOpen, Terminal } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn, StaggerContainer, StaggerItem } from "./AnimationHelpers";

export default function ValidationLogs({ data }: { data: any }) {
  const defaultValidations = [
    {
      id: "VAL_01",
      date: "2024",
      name: "BANGKIT_ACADEMY",
      quote: "Cloud Computing Cohort 2024",
      icon: <Cloud className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      id: "VAL_02",
      date: "2023 - 2024",
      name: "CODINGCAMP_DBS",
      quote: "Frontend & Backend Developer Cohort (powered by DBS Foundation)",
      icon: <Code className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      id: "VAL_03",
      date: "2024",
      name: "COLORADO_COURSE",
      quote: "Computer Technician Trainees in 2024",
      icon: <Wrench className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      id: "VAL_04",
      date: "PRESENT",
      name: "UNIV_BENGKULU",
      quote: "Framework-based Project Assistant Lecturer",
      icon: <BookOpen className="w-5 h-5" strokeWidth={1.5} />
    },
    {
      id: "VAL_05",
      date: "PRESENT",
      name: "UNIV_BENGKULU",
      quote: "Operating System Assistant Lecturer",
      icon: <Terminal className="w-5 h-5" strokeWidth={1.5} />
    }
  ];

  const validations = data?.logs && data.logs.length > 0 
    ? data.logs.map((log: any, idx: number) => ({
        id: `VAL_0${idx + 1}`,
        date: log.date || "2024",
        name: log.name || "UNKNOWN_CREDENTIAL",
        quote: log.quote || "",
        icon: log.icon === "Code" ? <Code className="w-5 h-5" strokeWidth={1.5} /> :
              log.icon === "Wrench" ? <Wrench className="w-5 h-5" strokeWidth={1.5} /> :
              log.icon === "BookOpen" ? <BookOpen className="w-5 h-5" strokeWidth={1.5} /> :
              log.icon === "Terminal" ? <Terminal className="w-5 h-5" strokeWidth={1.5} /> :
              <Cloud className="w-5 h-5" strokeWidth={1.5} />
      }))
    : defaultValidations;

  return (
    <section className="flex flex-col border-b border-[var(--color-border)]">
      {/* Header */}
      <FadeIn direction="up">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-8 border-b border-[var(--color-border)] bg-[var(--color-background)]">
          <h2 className="text-3xl font-bold uppercase tracking-tight mb-4 md:mb-0">VALIDATION_LOGS</h2>
          <div className="flex gap-8">
            <div className="flex flex-col text-right">
              <span className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">CREDENTIALS</span>
              <motion.span
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                {validations.length.toString().padStart(2, '0')}
              </motion.span>
            </div>
            <div className="flex flex-col text-right">
              <span className="font-mono text-[10px] text-[var(--color-accent)] font-bold uppercase tracking-widest">STATUS</span>
              <motion.span
                className="text-3xl font-bold"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.15 }}
              >
                VERIFIED
              </motion.span>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Timeline Container */}
      <div className="relative bg-[var(--color-surface)] p-6 md:p-12 overflow-hidden">
        
        {/* Continuous Vertical Lines (Mobile & Desktop) */}
        <div className="absolute left-[44px] md:hidden top-12 bottom-12 w-[1px] bg-[var(--color-border)] z-0" />
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block top-12 bottom-12 w-[1px] bg-[var(--color-border)] z-0" />

        <StaggerContainer className="flex flex-col w-full relative z-10" delay={0.1}>
          {validations.map((val, index) => {
            const isLeft = index % 2 === 0; // True untuk genap (Kiri), False untuk ganjil (Kanan)

            return (
              <StaggerItem key={val.id}>
                <div className="w-full mb-10 md:mb-16 last:mb-0 group">
                  
                  {/* ========================================= */}
                  {/* TATA LETAK MOBILE (< md) - Garis di Kiri  */}
                  {/* ========================================= */}
                  <div className="flex md:hidden flex-col flex-grow pl-0 pt-1 w-full relative">
                    <div className="absolute left-[15.5px] top-[14px] w-[9px] h-[9px] bg-[var(--color-background)] border border-[var(--color-border)] group-hover:border-[var(--color-accent)] z-10" />
                    
                    <div className="pl-12">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="font-mono text-[10px] font-bold bg-[var(--color-border)] text-[var(--color-foreground)] px-2 py-0.5">
                          {val.date}
                        </span>
                        <span className="font-mono text-[10px] text-[var(--color-muted)]">{val.id}</span>
                      </div>

                      <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-5 group-hover:border-[var(--color-accent)] transition-colors duration-300 w-full relative">
                        <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
                        <h4 className="font-mono text-sm font-bold uppercase tracking-wider mb-2 text-[var(--color-foreground)]">
                          {val.name}
                        </h4>
                        <p className="font-mono text-xs text-[var(--color-muted)] leading-relaxed">
                          {">"} {val.quote}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* ========================================= */}
                  {/* TATA LETAK DESKTOP (>= md) - Selang Seling */}
                  {/* ========================================= */}
                  <div className="hidden md:flex w-full items-center relative">
                    
                    {/* Sisi Kiri (Kolom 1) */}
                    <div className={`w-1/2 pr-12 flex ${isLeft ? 'justify-end' : 'justify-end'}`}>
                      {isLeft ? (
                        /* Kartu Konten di Kiri */
                        <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-6 group-hover:border-[var(--color-accent)] transition-colors duration-300 w-full max-w-[420px] relative text-left">
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
                          <h4 className="font-mono text-base font-bold uppercase tracking-wider mb-2 text-[var(--color-foreground)]">
                            {val.name}
                          </h4>
                          <p className="font-mono text-sm text-[var(--color-muted)] leading-relaxed">
                            {">"} {val.quote}
                          </p>
                        </div>
                      ) : (
                        /* Tanggal di Kiri */
                        <div className="flex flex-col text-right justify-center">
                          <span className="font-mono text-sm font-bold text-[var(--color-foreground)]">{val.date}</span>
                          <span className="font-mono text-[11px] text-[var(--color-muted)] mt-1">{val.id}</span>
                        </div>
                      )}
                    </div>

                    {/* Node Ikon Tengah */}
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex-shrink-0 w-12 h-12 bg-[var(--color-background)] border border-[var(--color-border)] flex items-center justify-center z-10 group-hover:border-[var(--color-accent)] group-hover:text-[var(--color-accent)] transition-colors duration-300">
                      {val.icon}
                    </div>

                    {/* Sisi Kanan (Kolom 2) */}
                    <div className={`w-1/2 pl-12 flex ${!isLeft ? 'justify-start' : 'justify-start'}`}>
                      {!isLeft ? (
                        /* Kartu Konten di Kanan */
                        <div className="bg-[var(--color-background)] border border-[var(--color-border)] p-6 group-hover:border-[var(--color-accent)] transition-colors duration-300 w-full max-w-[420px] relative text-left">
                          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[var(--color-foreground)] opacity-0 group-hover:opacity-100 transition-opacity" />
                          <h4 className="font-mono text-base font-bold uppercase tracking-wider mb-2 text-[var(--color-foreground)]">
                            {val.name}
                          </h4>
                          <p className="font-mono text-sm text-[var(--color-muted)] leading-relaxed">
                            {">"} {val.quote}
                          </p>
                        </div>
                      ) : (
                        /* Tanggal di Kanan */
                        <div className="flex flex-col text-left justify-center">
                          <span className="font-mono text-sm font-bold text-[var(--color-foreground)]">{val.date}</span>
                          <span className="font-mono text-[11px] text-[var(--color-muted)] mt-1">{val.id}</span>
                        </div>
                      )}
                    </div>

                  </div>
                  {/* End Desktop */}

                </div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </div>
    </section>
  );
}