"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";

const insightsMeta = [
  { date: "Apr 2025", read: "6 min", href: "/blog/scalable-saas-architecture" },
  { date: "Mar 2025", read: "8 min", href: "/blog/digital-transformation" },
  { date: "Feb 2025", read: "5 min", href: "/blog/ai-worth-building-2025" },
];

export default function Insights() {
  const { t } = useLanguage();

  const insights = [
    { ...insightsMeta[0], category: t("ig_01_cat"), title: t("ig_01_title"), excerpt: t("ig_01_ex") },
    { ...insightsMeta[1], category: t("ig_02_cat"), title: t("ig_02_title"), excerpt: t("ig_02_ex") },
    { ...insightsMeta[2], category: t("ig_03_cat"), title: t("ig_03_title"), excerpt: t("ig_03_ex") },
  ];

  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

      {/* ── Purple glows ── */}
      <div className="absolute -top-20 -left-20 w-[420px] h-[420px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute -bottom-16 -right-16 w-[320px] h-[320px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)", filter: "blur(40px)", animationDelay: "3s" }} />
      <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.35)" }} />
      <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.35)", animationDelay: "2.5s" }} />
      <div className="absolute top-16 right-24 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.5)" }} />
      <div className="absolute bottom-16 left-24 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.38)", animationDelay: "1.5s" }} />
      <div className="absolute right-0 top-1/4 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[14, 8, 20, 8, 14].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(139,92,246,0.23)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <div className="absolute inset-0 pointer-events-none select-none" aria-hidden style={{ color: "var(--text-solid)" }}>
        <svg className="absolute top-1/2 -right-32 -translate-y-1/2" width="640" height="640" viewBox="0 0 640 640" fill="none" style={{ opacity: 0.12, color: "rgb(139,92,246)" }}>
          <circle cx="320" cy="320" r="280" stroke="currentColor" strokeWidth="0.8" />
          <circle cx="320" cy="320" r="210" stroke="currentColor" strokeWidth="0.6" />
          <circle cx="320" cy="320" r="140" stroke="currentColor" strokeWidth="0.5" />
          <circle cx="320" cy="320" r="70"  stroke="currentColor" strokeWidth="0.5" />
          <line x1="0"   y1="320" x2="640" y2="320" stroke="currentColor" strokeWidth="0.4" />
          <line x1="320" y1="0"   x2="320" y2="640" stroke="currentColor" strokeWidth="0.4" />
          <line x1="122" y1="122" x2="518" y2="518" stroke="currentColor" strokeWidth="0.3" />
          <line x1="518" y1="122" x2="122" y2="518" stroke="currentColor" strokeWidth="0.3" />
        </svg>

        <svg className="absolute inset-0 w-full h-full" style={{ opacity: 0.028 }}>
          {([
            [80, 120], [160, 340], [40, 520], [220, 200], [120, 460],
            [300, 80], [60, 260], [200, 580], [340, 400],
          ] as [number, number][]).map(([x, y], idx) => (
            <g key={idx} transform={`translate(${x},${y})`}>
              <line x1="-7" y1="0" x2="7" y2="0" stroke="currentColor" strokeWidth="0.8" />
              <line x1="0" y1="-7" x2="0" y2="7" stroke="currentColor" strokeWidth="0.8" />
            </g>
          ))}
        </svg>

        <svg className="absolute bottom-0 left-0" width="600" height="300" viewBox="0 0 600 300" fill="none" style={{ opacity: 0.04 }}>
          <line x1="0" y1="300" x2="600" y2="0" stroke="currentColor" strokeWidth="0.8" />
          <line x1="0" y1="280" x2="580" y2="0" stroke="currentColor" strokeWidth="0.4" />
        </svg>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={t("ig_label")} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2 className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]" style={{ fontWeight: 600 }}>
              {t("ig_title1")}<br />{t("ig_title2")}
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-sm max-w-xs lg:text-right leading-relaxed">
              <ShinyText text={t("ig_sub")} speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
            </p>
            <Link href="/blog"
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
              style={{ color: "rgba(var(--rgb),0.3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-solid)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(var(--rgb),0.3)")}>
              {t("ig_all")} <ArrowUpRight size={11} />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 border-l" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          {insights.map((post, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}
              className="border-r border-b" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
              <Link href={post.href}
                className="group flex flex-col gap-5 p-7 h-full transition-colors duration-200"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(var(--rgb),0.018)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[0.58rem] tracking-[0.18em] uppercase" style={{ color: "rgba(var(--rgb),0.4)" }}>
                    {post.category}
                  </span>
                  <span className="font-mono text-[0.58rem] tracking-wider" style={{ color: "rgba(var(--rgb),0.2)" }}>
                    {post.read}
                  </span>
                </div>
                <h3 className="font-display text-[1rem] leading-snug flex-1" style={{ fontWeight: 500, color: "var(--text-solid)" }}>
                  {post.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(var(--rgb),0.35)" }}>
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between pt-2 border-t" style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
                  <span className="font-mono text-[0.58rem] tracking-wider" style={{ color: "rgba(var(--rgb),0.2)" }}>
                    {post.date}
                  </span>
                  <ArrowUpRight size={13} className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "rgba(var(--rgb),0.25)" }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
