"use client";

import { motion } from "framer-motion";
import { Download, Send, Globe, Cpu, Clock, Terminal } from "lucide-react";
import { FadeIn } from "./AnimationHelpers";

export default function CtaBlock() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bento-grid border-b border-[var(--color-border)] h-full">
      {/* Left Cell: Info & Diagnostics Panel */}
      <FadeIn direction="left">
        <div className="bento-cell flex flex-col justify-center p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[var(--color-background)] h-full min-h-[400px]">
          <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest mb-2">// INITIATE_COMMUNICATION</span>
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-8">
            READY TO DISCUSS<br />YOUR PROJECT?
          </h2>

          {/* Diagnostic Info Panel */}
          <div className="w-full max-w-md border border-[var(--color-border)] bg-[var(--color-surface)] p-5 font-mono text-[10px] leading-relaxed uppercase shadow-sm">
            <div className="flex justify-between border-b border-[var(--color-border)] pb-2 mb-3">
              <span className="text-[var(--color-muted)]">// GEOLOCATION</span>
              <span className="text-[var(--color-accent)] font-bold">BENGKULU, ID</span>
            </div>
            <div className="grid grid-cols-2 gap-4 pb-2 mb-3 border-b border-[var(--color-border)]">
              <div>
                <span className="text-[var(--color-muted)]">AVAILABILITY:</span> 100% READY
              </div>
              <div>
                <span className="text-[var(--color-muted)]">RESPONSE_TIME:</span> &lt; 24 HOURS
              </div>
              <div>
                <span className="text-[var(--color-muted)]">LATITUDE:</span> -3.8004
              </div>
              <div>
                <span className="text-[var(--color-muted)]">LONGITUDE:</span> 102.2656
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <div className="text-green-500 font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                &gt; query --availability
              </div>
              <div className="text-[var(--color-muted)]">fetching open slots from registry...</div>
              <div className="text-[var(--color-accent)] font-bold">
                STATUS: 4 PROJECT SLOTS OPEN FOR THIS QUARTER
              </div>
            </div>
          </div>
        </div>
      </FadeIn>

      {/* Right Cell: Interactive Action Terminal */}
      <FadeIn direction="right">
        <div className="bento-cell flex items-center justify-center p-8 md:p-12 lg:p-16 bg-[var(--color-surface)] h-full min-h-[400px]">
          {/* Terminal Window Box */}
          <div className="w-full max-w-md border-2 border-[var(--color-foreground)] bg-[var(--color-surface)] shadow-[6px_6px_0px_0px_var(--color-foreground)] overflow-hidden flex flex-col">
            {/* Terminal Window Header */}
            <div className="bg-[var(--color-foreground)] text-[var(--color-background)] px-4 py-2.5 flex justify-between items-center font-mono text-xs font-bold">
              <div className="flex items-center gap-2">
                <Terminal className="w-3.5 h-3.5" />
                <span>bash: contact_session</span>
              </div>
              <div className="flex gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-muted)] inline-block opacity-40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-muted)] inline-block opacity-40"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-[var(--color-accent)] inline-block"></span>
              </div>
            </div>

            {/* Terminal Window Body */}
            <div className="p-6 md:p-8 flex flex-col gap-5 font-mono text-xs leading-relaxed">
              <div className="flex flex-col gap-1.5 border-b border-[var(--color-border)] pb-4">
                <span className="text-[var(--color-accent)]">irfn@dev:~$ <span className="text-[var(--color-foreground)]">cat info.json</span></span>
                <span className="text-[var(--color-muted)]">{`{`}</span>
                <span className="pl-4 text-[var(--color-muted)]">"email": <span className="text-green-500">"mhdirfan1537@gmail.com"</span>,</span>
                <span className="pl-4 text-[var(--color-muted)]">"status": <span className="text-green-500">"open_to_work"</span>,</span>
                <span className="pl-4 text-[var(--color-muted)]">"timezone": <span className="text-green-500">"GMT+7"</span></span>
                <span className="text-[var(--color-muted)]">{`}`}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3.5 mt-2">
                <motion.a
                  href="mailto:mhdirfan.dev@gmail.com"
                  className="w-full h-12 bg-[var(--color-accent)] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-3.5 shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.02, opacity: 0.95 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <span>SEND_EMAIL</span>
                  <Send className="w-4 h-4" />
                </motion.a>

                <motion.button
                  onClick={() => {
                    window.open("/cv.pdf", "_blank");
                  }}
                  className="w-full h-12 bg-[var(--color-surface)] border-2 border-[var(--color-foreground)] text-[var(--color-foreground)] font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-3.5 cursor-pointer hover:bg-[var(--color-foreground)] hover:text-[var(--color-background)] transition-colors"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <span>DOWNLOAD_CV</span>
                  <Download className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
