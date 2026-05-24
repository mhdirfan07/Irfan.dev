"use client";

import { useState } from "react";
import { motion,AnimatePresence } from "framer-motion";
import {X, Download, Send, Loader2, CheckCircle2, AlertCircle, Terminal } from "lucide-react";
import { FadeIn } from "./AnimationHelpers";

export default function CtaBlock({ data }: { data: any }) {
  const heading = data?.heading || "READY TO DISCUSS\nYOUR PROJECT?";
  const email = data?.email || "mhdirfan1537@gmail.com";
  const buttonText = data?.buttonText || "SEND_EMAIL";

  // State untuk Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const formValues = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      if (response.ok) {
        setStatus("success");
        // Tutup modal otomatis setelah 2 detik jika sukses
        setTimeout(() => {
          setIsModalOpen(false);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 3000);
      }
    } catch (error) {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 bento-grid border-b border-[var(--color-border)] h-full">
      {/* Left Cell: Info & Diagnostics Panel */}
      <FadeIn direction="left">
        <div className="bento-cell flex flex-col justify-center p-8 md:p-12 lg:p-16 border-b lg:border-b-0 lg:border-r border-[var(--color-border)] bg-[var(--color-background)] h-full min-h-[400px]">
          <span className="font-mono text-xs text-[var(--color-muted)] uppercase tracking-widest mb-2">// INITIATE_COMMUNICATION</span>
          <h2 className="text-3xl md:text-4xl font-bold uppercase leading-tight mb-8 whitespace-pre-line">
            {heading}
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
              <div className="text-[var(--color-muted)]">fetching open project from registry...</div>
              <motion.div
                className="text-[var(--color-accent)] font-bold"
                animate={{ opacity: [1, 0, 1] }}
                transition={{
                  duration: 2.5, // Kecepatan 1 detik per siklus
                  repeat: Infinity, // Berkedip selamanya
                }}
              >
                STATUS: READY TO TAKE ON A PROJECT
              </motion.div>
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
                <span className="pl-4 text-[var(--color-muted)]">"email": <span className="text-green-500">"{email}"</span>,</span>
                <span className="pl-4 text-[var(--color-muted)]">"status": <span className="text-green-500">"open_to_work"</span>,</span>
                <span className="pl-4 text-[var(--color-muted)]">"timezone": <span className="text-green-500">"GMT+7"</span></span>
                <span className="text-[var(--color-muted)]">{`}`}</span>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col gap-3.5 mt-2">
                <motion.a
                  onClick={() => setIsModalOpen(true)}
                  className="w-full h-12 bg-[var(--color-accent)] text-white font-mono text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-3.5 shadow-sm cursor-pointer"
                  whileHover={{ scale: 1.02, opacity: 0.95 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ duration: 0.15 }}
                >
                  <span>{buttonText}</span>
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

      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            {/* Backdrop Gelap/Blur */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)} // Tutup jika klik area luar
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />

            {/* Kotak Modal */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg border border-[var(--color-border)] bg-[var(--color-background)] p-8 shadow-2xl z-10"
            >
              {/* Tombol Tutup */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-[var(--color-muted)] hover:text-[var(--color-foreground)] transition-colors"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mb-8">
                <p className="font-mono text-xs text-[var(--color-accent)] uppercase tracking-widest mb-2">
                  // SECURE_CHANNEL
                </p>
                <h3 className="text-2xl font-bold uppercase leading-tight">
                  Transmission<br />Protocol
                </h3>
              </div>

              {/* Form Input */}
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-[var(--color-muted)] uppercase">Sender Identity</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="John Doe"
                    className="border border-[var(--color-border)] bg-[var(--color-surface)] p-3 font-mono text-sm focus:outline-none focus:border-[var(--color-foreground)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-[var(--color-muted)] uppercase">Return Address</label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="john@example.com"
                    className="border border-[var(--color-border)] bg-[var(--color-surface)] p-3 font-mono text-sm focus:outline-none focus:border-[var(--color-foreground)] transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="font-mono text-[10px] text-[var(--color-muted)] uppercase">Payload Data</label>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    placeholder="Enter your message here..."
                    className="border border-[var(--color-border)] bg-[var(--color-surface)] p-3 font-mono text-sm focus:outline-none focus:border-[var(--color-foreground)] transition-colors resize-none"
                  ></textarea>
                </div>

                {/* Tombol Submit & Indikator Status */}
                <div className="mt-4">
                  <motion.button
                    type="submit"
                    disabled={status === "loading" || status === "success"}
                    className={`w-full border p-4 font-bold font-mono uppercase tracking-widest flex items-center justify-center gap-2 transition-colors
                      ${status === "success" ? "border-green-500 bg-green-500 text-white" :
                        status === "error" ? "border-red-500 bg-red-500 text-white" :
                          "border-[var(--color-foreground)] bg-[var(--color-foreground)] text-[var(--color-background)] hover:bg-transparent hover:text-[var(--color-foreground)]"
                      } disabled:opacity-80`}
                    whileTap={status === "idle" ? { scale: 0.98 } : {}}
                  >
                    {status === "idle" && <>TRANSMIT <Send className="w-4 h-4" /></>}
                    {status === "loading" && <>SENDING... <Loader2 className="w-4 h-4 animate-spin" /></>}
                    {status === "success" && <>DELIVERED <CheckCircle2 className="w-4 h-4" /></>}
                    {status === "error" && <>FAILED. RETRY <AlertCircle className="w-4 h-4" /></>}
                  </motion.button>
                </div>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
