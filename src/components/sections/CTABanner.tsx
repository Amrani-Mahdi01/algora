"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

export default function CTABanner() {
  const { t } = useLanguage();
  return (
    <section className="py-24 px-6 border-t" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }}
          className="relative border overflow-hidden"
          style={{ borderColor: "rgba(var(--rgb),0.1)", backgroundColor: "var(--bg-card)" }}>

          <div className="absolute inset-0 dot-grid opacity-50" aria-hidden />

          {/* Purple corner glow */}
          <div className="absolute -bottom-24 -left-24 w-96 h-96 pointer-events-none animate-glow-breathe" aria-hidden
            style={{ background: "radial-gradient(circle, rgba(139,92,246,0.22) 0%, transparent 65%)", filter: "blur(40px)" }} />

          <div className="absolute left-0 top-0 bottom-0 w-px" aria-hidden
            style={{ background: `linear-gradient(to bottom, transparent 10%, rgba(var(--rgb),0.2) 40%, rgba(var(--rgb),0.2) 60%, transparent 90%)` }} />

          <div className="absolute top-5 right-5 w-4 h-4 border-t border-r pointer-events-none" aria-hidden
            style={{ borderColor: "rgba(var(--rgb),0.1)" }} />
          <div className="absolute bottom-5 left-5 w-4 h-4 border-b border-l pointer-events-none" aria-hidden
            style={{ borderColor: "rgba(var(--rgb),0.1)" }} />

          <div className="relative z-10 px-10 sm:px-16 py-16 flex flex-col md:flex-row items-start md:items-end justify-between gap-14">
            <div>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-6 block" style={{ color: "rgba(var(--rgb),0.35)" }}>
                {t("ct_label")}
              </span>
              <h2 className="font-display text-3xl sm:text-[2.4rem] lg:text-[3rem] leading-[1.1]" style={{ fontWeight: 600 }}>
                <span className="title-gradient-text">{t("ct_line1")}</span>
                <br />
                <span style={{ color: "rgba(var(--rgb),0.3)" }}>{t("ct_line2")}</span>
                <br />
                <span className="title-gradient-text">{t("ct_line3")}</span>
              </h2>
            </div>

            <div className="flex flex-col gap-4 flex-shrink-0 w-full md:w-auto md:min-w-[240px]">
              <p className="text-sm leading-relaxed mb-2" style={{ color: "rgba(var(--rgb),0.38)" }}>
                {t("ct_sub")}
              </p>
              <Link href="/contact"
                className="group inline-flex items-center justify-center gap-2.5 px-8 py-3.5 font-semibold text-sm transition-opacity duration-200 hover:opacity-85 whitespace-nowrap"
                style={{ backgroundColor: "var(--text-solid)", color: "var(--bg)" }}>
                {t("ct_cta1")}
                <ArrowRight size={15} className="transition-transform duration-200 group-hover:translate-x-1" />
              </Link>
              <Link href="/work"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border text-sm font-medium transition-colors duration-200 whitespace-nowrap"
                style={{ borderColor: "rgba(var(--rgb),0.1)", color: "rgba(var(--rgb),0.4)" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(var(--rgb),0.2)"; e.currentTarget.style.color = "rgba(var(--rgb),0.6)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(var(--rgb),0.1)"; e.currentTarget.style.color = "rgba(var(--rgb),0.4)"; }}>
                {t("ct_cta2")}
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
