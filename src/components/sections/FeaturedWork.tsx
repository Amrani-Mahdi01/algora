"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";
import ScrollStack from "@/components/ScrollStack";

type Project = {
  number: string;
  year: string;
  category: string;
  name: string;
  description: string;
  outcome: string;
  stack: string[];
  href: string;
};

function FeaturedCard({ project }: { project: Project }) {
  return (
    <div
      className="scroll-stack-card relative w-full box-border border"
      style={{
        height: 320,
        backgroundColor: "var(--bg-card)",
        borderColor: "rgba(var(--rgb),0.1)",
        backfaceVisibility: "hidden",
        transformStyle: "preserve-3d",
      }}
    >
      <Link
        href={project.href}
        className="group flex flex-col h-full p-8 sm:p-10 gap-5"
      >
        {/* Meta row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-5">
            <span className="font-mono text-[0.58rem] tracking-wider" style={{ color: "rgba(var(--rgb),0.2)" }}>
              {project.number}
            </span>
            <span className="font-mono text-[0.58rem] tracking-wider" style={{ color: "rgba(var(--rgb),0.2)" }}>
              {project.year}
            </span>
            <span className="font-mono text-[0.58rem] tracking-[0.16em] uppercase" style={{ color: "rgba(var(--rgb),0.35)" }}>
              {project.category}
            </span>
          </div>
          <ArrowUpRight
            size={15}
            className="transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            style={{ color: "rgba(var(--rgb),0.2)" }}
          />
        </div>

        {/* Project name */}
        <h3
          className="font-display text-3xl sm:text-4xl leading-none"
          style={{ fontWeight: 600, color: "var(--text-solid)" }}
        >
          {project.name}
        </h3>

        {/* Description */}
        <p
          className="text-sm leading-relaxed flex-1 line-clamp-2"
          style={{ color: "rgba(var(--rgb),0.45)" }}
        >
          {project.description}
        </p>

        {/* Stack + outcome */}
        <div className="flex items-end justify-between gap-4 pt-1 border-t" style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
          <div className="flex flex-wrap gap-1.5">
            {project.stack.slice(0, 4).map(tech => (
              <span
                key={tech}
                className="font-mono text-[0.58rem] tracking-wider px-2 py-0.5 border"
                style={{
                  borderColor: "rgba(var(--rgb),0.08)",
                  color: "rgba(var(--rgb),0.32)",
                  backgroundColor: "rgba(var(--rgb),0.02)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-[0.7rem] italic flex-shrink-0" style={{ color: "rgba(var(--rgb),0.25)" }}>
            {project.outcome}
          </p>
        </div>
      </Link>
    </div>
  );
}

export default function FeaturedWork() {
  const { t } = useLanguage();

  const projects: Project[] = [
    {
      number: "01", year: "2024", category: "FinTech · SaaS", name: "Finflow",
      description: t("wk_01_desc"), outcome: t("wk_01_out"),
      stack: ["Next.js", "FastAPI", "PostgreSQL", "Redis"],
      href: "/work/finflow",
    },
    {
      number: "02", year: "2024", category: "Healthcare · Platform", name: "MediTrack",
      description: t("wk_02_desc"), outcome: t("wk_02_out"),
      stack: ["React Native", "Node.js", "MongoDB", "Docker"],
      href: "/work/meditrack",
    },
    {
      number: "03", year: "2025", category: "AI · Enterprise", name: "Layla",
      description: t("wk_03_desc"), outcome: t("wk_03_out"),
      stack: ["LangChain", "GPT-4o", "FastAPI", "Python"],
      href: "/work/layla",
    },
  ];

  return (
    <section
      className="relative border-t"
      style={{ borderColor: "rgba(var(--rgb),0.1)" }}
    >
      {/* ── Background elements ── */}
      <div className="absolute -top-24 -right-24 w-[440px] h-[440px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.05) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.12)" }} />
      <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "2.5s" }} />
      <div className="absolute top-[4.5rem] right-20 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.18)" }} />
      <div className="absolute left-0 top-1/3 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[14, 8, 18, 8, 14].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(var(--rgb),0.1)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 pt-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12 pb-10 border-b"
          style={{ borderColor: "rgba(var(--rgb),0.1)" }}
        >
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={t("wk_label")} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2
              className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]"
              style={{ fontWeight: 600 }}
            >
              {t("wk_title1")}<br />{t("wk_title2")}
            </h2>
          </div>
          <div className="flex flex-col items-start lg:items-end gap-4">
            <p className="text-sm max-w-xs lg:text-right leading-relaxed">
              <ShinyText text={t("wk_sub")} speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
            </p>
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
              style={{ color: "rgba(var(--rgb),0.3)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-solid)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(var(--rgb),0.3)")}
            >
              {t("wk_all")} <ArrowUpRight size={11} />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* ScrollStack cards */}
      <div className="max-w-7xl mx-auto px-6">
        <ScrollStack
          useWindowScroll
          innerClassName="scroll-stack-inner pb-48"
          itemDistance={60}
          itemScale={0.04}
          itemStackDistance={18}
          stackPosition="28%"
          scaleEndPosition="12%"
          baseScale={0.9}
        >
          {projects.map(project => (
            <FeaturedCard key={project.name} project={project} />
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
