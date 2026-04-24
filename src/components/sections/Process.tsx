"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";

export default function Process() {
  const { t } = useLanguage();

  const steps = [
    { number: "01", title: t("pr_01_title"), description: t("pr_01_desc") },
    { number: "02", title: t("pr_02_title"), description: t("pr_02_desc") },
    { number: "03", title: t("pr_03_title"), description: t("pr_03_desc") },
    { number: "04", title: t("pr_04_title"), description: t("pr_04_desc") },
  ];

  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
      {/* Purple glow — right side */}
      <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[520px] h-[520px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-20">
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={t("pr_label")} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2 className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]" style={{ fontWeight: 600 }}>
              {t("pr_title1")}<br className="hidden sm:block" />{t("pr_title2")}
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right leading-relaxed">
            <ShinyText text={t("pr_sub")} speed={10} color="rgba(var(--rgb),0.38)" shineColor="rgba(var(--rgb),0.65)" />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          {steps.map((step, i) => (
            <motion.div key={step.number} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-r border-b p-8 flex flex-col gap-7" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
              <span className="font-mono text-[3rem] leading-none font-bold select-none" style={{ color: "rgba(139,92,246,0.22)" }}>
                {step.number}
              </span>
              <div className="w-5 h-px" style={{ backgroundColor: "rgba(var(--rgb),0.2)" }} />
              <div>
                <h3 className="font-display text-[0.95rem] mb-3 leading-snug" style={{ fontWeight: 500, color: "var(--text-solid)" }}>
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(var(--rgb),0.38)" }}>
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
