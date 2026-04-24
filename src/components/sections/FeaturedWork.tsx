"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";

export default function FeaturedWork() {
  const { t } = useLanguage();

  const projects = [
    {
      number: "01", year: "2024", category: "FinTech · SaaS", name: "Finflow",
      description: t("wk_01_desc"), outcome: t("wk_01_out"),
      stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "WebSockets"],
      href: "/work/finflow",
    },
    {
      number: "02", year: "2024", category: "Healthcare · Platform", name: "MediTrack",
      description: t("wk_02_desc"), outcome: t("wk_02_out"),
      stack: ["React Native", "Node.js", "MongoDB", "Twilio", "Docker"],
      href: "/work/meditrack",
    },
    {
      number: "03", year: "2025", category: "AI · Enterprise", name: "Layla",
      description: t("wk_03_desc"), outcome: t("wk_03_out"),
      stack: ["LangChain", "GPT-4o", "FastAPI", "Redis", "Python"],
      href: "/work/layla",
    },
  ];

  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

      {/* ── Purple background elements ── */}
      <div className="absolute -top-24 -right-24 w-[440px] h-[440px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.13) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute -bottom-20 -left-20 w-[320px] h-[320px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.09) 0%, transparent 65%)", filter: "blur(40px)", animationDelay: "2s" }} />
      <div className="absolute right-0 inset-y-0 w-px pointer-events-none" aria-hidden
        style={{ background: "linear-gradient(to bottom, transparent 8%, rgba(139,92,246,0.38) 30%, rgba(139,92,246,0.38) 70%, transparent 92%)" }} />
      <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.35)" }} />
      <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.35)", animationDelay: "2.5s" }} />
      <div className="absolute top-[4.5rem] right-20 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.55)" }} />
      <div className="absolute top-16 right-[5.75rem] w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.3)", animationDelay: "1s" }} />
      <div className="absolute bottom-14 left-24 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.4)", animationDelay: "2s" }} />
      <div className="absolute left-0 top-1/3 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[14, 8, 18, 8, 14].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(139,92,246,0.25)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={t("wk_label")} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2 className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]" style={{ fontWeight: 600 }}>
              {t("wk_title1")}<br />{t("wk_title2")}
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-sm max-w-xs lg:text-right leading-relaxed">
              <ShinyText text={t("wk_sub")} speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
            </p>
            <Link href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
              style={{ color: "rgba(var(--rgb),0.3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-solid)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(var(--rgb),0.3)")}>
              {t("wk_all")} <ArrowUpRight size={11} />
            </Link>
          </div>
        </motion.div>

        <div className="flex flex-col divide-y" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          {projects.map((project, i) => (
            <motion.div key={project.name} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }}>
              <Link href={project.href}
                className="group grid grid-cols-1 lg:grid-cols-[6rem_1fr_1fr_auto] gap-6 lg:gap-10 py-9 -mx-6 px-6 items-start transition-colors duration-200"
                style={{ backgroundColor: "transparent" }}
                onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(var(--rgb),0.015)")}
                onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                <div className="flex lg:flex-col gap-4 lg:gap-2">
                  <span className="font-mono text-[0.6rem] tracking-wider" style={{ color: "rgba(var(--rgb),0.18)" }}>{project.number}</span>
                  <span className="font-mono text-[0.6rem] tracking-wider" style={{ color: "rgba(var(--rgb),0.18)" }}>{project.year}</span>
                </div>
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.15em] uppercase mb-2" style={{ color: "rgba(var(--rgb),0.3)" }}>{project.category}</p>
                  <h3 className="font-display text-2xl sm:text-3xl leading-none mb-1" style={{ fontWeight: 600, color: "var(--text-solid)" }}>
                    {project.name}
                  </h3>
                </div>
                <div>
                  <p className="text-sm leading-relaxed mb-4" style={{ color: "rgba(var(--rgb),0.45)" }}>{project.description}</p>
                  <p className="text-xs mb-4 italic" style={{ color: "rgba(var(--rgb),0.28)" }}>{project.outcome}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map(tech => (
                      <span key={tech} className="font-mono text-[0.6rem] tracking-wider px-2.5 py-1 border"
                        style={{ borderColor: "rgba(var(--rgb),0.08)", color: "rgba(var(--rgb),0.35)", backgroundColor: "rgba(var(--rgb),0.02)" }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="hidden lg:flex items-start pt-1">
                  <ArrowUpRight size={16} className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" style={{ color: "rgba(var(--rgb),0.2)" }} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
