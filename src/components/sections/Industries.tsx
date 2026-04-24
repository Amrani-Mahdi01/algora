"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";

export default function Industries() {
  const { t } = useLanguage();

  const industries = [
    { number: "01", name: t("in_01_name"), description: t("in_01_desc") },
    { number: "02", name: t("in_02_name"), description: t("in_02_desc") },
    { number: "03", name: t("in_03_name"), description: t("in_03_desc") },
    { number: "04", name: t("in_04_name"), description: t("in_04_desc") },
    { number: "05", name: t("in_05_name"), description: t("in_05_desc") },
    { number: "06", name: t("in_06_name"), description: t("in_06_desc") },
    { number: "07", name: t("in_07_name"), description: t("in_07_desc") },
    { number: "08", name: t("in_08_name"), description: t("in_08_desc") },
  ];

  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

      {/* ── Background elements ── */}
      <div className="absolute -top-24 -left-24 w-[460px] h-[460px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.05) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute -bottom-16 right-1/4 w-[340px] h-[340px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(40px)", animationDelay: "3s" }} />
      <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.12)" }} />
      <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "2.5s" }} />
      <div className="absolute top-16 left-20 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.15)" }} />
      <div className="absolute bottom-16 right-20 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.12)", animationDelay: "1.5s" }} />
      <div className="absolute left-0 top-2/3 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[10, 18, 8, 14, 8].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(var(--rgb),0.08)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden style={{ color: "var(--text-solid)" }}>
        <svg width="100%" height="100%" className="absolute inset-0" style={{ opacity: 0.028 }}>
          <defs>
            <pattern id="ind-diag" x="0" y="0" width="56" height="56" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
              <line x1="0" y1="0" x2="0" y2="56" stroke="currentColor" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#ind-diag)" />
        </svg>

        <svg className="absolute -bottom-20 -right-20" width="520" height="520" viewBox="0 0 520 520" fill="none" style={{ opacity: 0.08 }}>
          <rect x="60" y="60" width="400" height="400" stroke="currentColor" strokeWidth="0.8" transform="rotate(45 260 260)" />
          <rect x="110" y="110" width="300" height="300" stroke="currentColor" strokeWidth="0.5" transform="rotate(45 260 260)" />
          <line x1="260" y1="0" x2="260" y2="520" stroke="currentColor" strokeWidth="0.4" />
          <line x1="0" y1="260" x2="520" y2="260" stroke="currentColor" strokeWidth="0.4" />
        </svg>

        <svg className="absolute top-0 left-0" width="120" height="120" viewBox="0 0 120 120" fill="none" style={{ opacity: 0.06 }}>
          <polyline points="40,12 12,12 12,40" stroke="currentColor" strokeWidth="1" />
          <polyline points="72,12 100,12 100,40" stroke="currentColor" strokeWidth="0.5" />
          <polyline points="12,72 12,100 40,100" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16">
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={t("in_label")} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2 className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]" style={{ fontWeight: 600 }}>
              {t("in_title1")}<br />{t("in_title2")}
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right leading-relaxed">
            <ShinyText text={t("in_sub")} speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 border-t border-l" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          {industries.map((industry, i) => (
            <motion.div key={industry.number} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}
              className="group border-r border-b p-6 sm:p-7 flex flex-col gap-4 transition-colors duration-200 cursor-default"
              style={{ borderColor: "rgba(var(--rgb),0.1)" }}
              onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(var(--rgb),0.018)")}
              onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
              <span className="font-mono text-[0.6rem] tracking-wider" style={{ color: "rgba(var(--rgb),0.15)" }}>
                {industry.number}
              </span>
              <div>
                <h3 className="font-display text-[0.88rem] mb-2 leading-snug" style={{ fontWeight: 500, color: "var(--text-solid)" }}>
                  {industry.name}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(var(--rgb),0.32)" }}>
                  {industry.description}
                </p>
              </div>
              <div className="w-4 h-px mt-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{ backgroundColor: "rgba(var(--rgb),0.25)" }} />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
