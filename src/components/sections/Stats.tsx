"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { v: t("s1v"), l: t("s1l"), d: t("s1d") },
    { v: t("s2v"), l: t("s2l"), d: t("s2d") },
    { v: t("s3v"), l: t("s3l"), d: t("s3d") },
    { v: t("s4v"), l: t("s4l"), d: t("s4d") },
  ];

  return (
    <section className="border-t border-b relative overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
      {/* Edge glow */}
      <div className="absolute inset-0 pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(ellipse 40% 120% at 100% 50%, rgba(var(--rgb),0.05) 0%, transparent 70%)" }} />
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-y divide-x-0 lg:divide-x lg:divide-y-0" style={{ '--tw-divide-opacity': 1 } as React.CSSProperties}>
          {stats.map((stat, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col gap-1.5 py-10 px-6 lg:px-10"
              style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
              <span className="font-display text-[2.4rem] leading-none tracking-tight" style={{ fontWeight: 600, color: "var(--text-solid)" }}>
                {stat.v}
              </span>
              <span className="text-sm font-medium" style={{ color: "rgba(var(--rgb),0.7)" }}>{stat.l}</span>
              <span className="text-xs leading-relaxed mt-0.5" style={{ color: "rgba(var(--rgb),0.3)" }}>{stat.d}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
