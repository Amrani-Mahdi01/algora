"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";
import { siReact, siNextdotjs, siTypescript, siPython, siNodedotjs, siPostgresql, siMongodb, siDocker, siPrisma, siFastapi, siTensorflow, siFlutter, siElectron, siRedis, siVercel, siSupabase, siGraphql, siTailwindcss, siLangchain, siKubernetes } from "simple-icons";

const row1 = [siReact, siNextdotjs, siTypescript, siPython, siNodedotjs, siPostgresql, siMongodb, siDocker, siPrisma, siFastapi];
const row2 = [siTensorflow, siFlutter, siElectron, siRedis, siVercel, siSupabase, siGraphql, siTailwindcss, siLangchain, siKubernetes];

function TechPill({ icon }: { icon: { title: string; path: string } }) {
  return (
    <div className="inline-flex items-center gap-3 px-5 py-3 flex-shrink-0 mx-1.5 border"
      style={{ backgroundColor: "rgba(var(--rgb),0.02)", borderColor: "rgba(var(--rgb),0.07)" }}>
      <svg role="img" viewBox="0 0 24 24" aria-label={icon.title} width={15} height={15} style={{ fill: "rgba(var(--rgb),0.45)", flexShrink: 0 }}>
        <path d={icon.path} />
      </svg>
      <span className="text-sm font-medium whitespace-nowrap tracking-wide" style={{ color: "rgba(var(--rgb),0.5)" }}>
        {icon.title}
      </span>
    </div>
  );
}

function MarqueeRow({ items, reverse = false, duration = 36 }: { items: { title: string; path: string }[]; reverse?: boolean; duration?: number }) {
  const doubled = [...items, ...items];
  return (
    <div className="overflow-hidden w-full" dir="ltr">
      <div
        className="flex"
        style={{
          width: "max-content",
          animationName: "marquee",
          animationDuration: `${duration}s`,
          animationTimingFunction: "linear",
          animationIterationCount: "infinite",
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
        }}
      >
        {doubled.map((icon, i) => <TechPill key={`${icon.title}-${i}`} icon={icon} />)}
      </div>
    </div>
  );
}

export default function TechStack() {
  const { t } = useLanguage();
  return (
    <section className="relative py-28 overflow-hidden border-t" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

      {/* ── Background elements ── */}
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.05) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute -bottom-20 -left-20 w-[360px] h-[360px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(44px)", animationDelay: "3s" }} />
      <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.1)" }} />
      <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.1)", animationDelay: "2.5s" }} />
      <div className="absolute top-14 right-20 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.15)" }} />
      <div className="absolute bottom-14 left-20 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.12)", animationDelay: "1.5s" }} />
      <div className="absolute right-0 top-1/2 -translate-y-1/2 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[18, 8, 14, 8, 18].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(var(--rgb),0.08)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6 mb-14">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={t("st_label")} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2 className="font-display title-gradient-text text-3xl sm:text-[2.2rem]" style={{ fontWeight: 600 }}>
              {t("st_title1")}<br />{t("st_title2")}
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right leading-relaxed">
            <ShinyText text={t("st_sub")} speed={10} color="rgba(var(--rgb),0.38)" shineColor="rgba(var(--rgb),0.65)" />
          </p>
        </motion.div>
      </div>
      <div className="flex flex-col gap-2.5">
        <div style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
          <MarqueeRow items={row1} duration={36} />
        </div>
        <div style={{ maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)", WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)" }}>
          <MarqueeRow items={row2} reverse duration={44} />
        </div>
      </div>
    </section>
  );
}
