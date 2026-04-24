"use client";

import { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import ShinyText from "@/components/ui/ShinyText";
import { FlipWords } from "@/components/ui/FlipWords";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

type BeamsProps = {
  beamWidth?: number;
  beamHeight?: number;
  beamNumber?: number;
  lightColor?: string;
  backgroundColor?: string;
  speed?: number;
  noiseIntensity?: number;
  scale?: number;
  rotation?: number;
  onReady?: () => void;
};

// Dynamic import wrapped so it fires onReady once the canvas is mounted
const Beams = dynamic<BeamsProps>(
  () =>
    import("@/components/ui/Beams").then((mod) => {
      const B = mod.default;
      function BeamsWrapper({ onReady, ...props }: BeamsProps) {
        useEffect(() => {
          onReady?.();
        }, []);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return <B {...(props as any)} />;
      }
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      return { default: BeamsWrapper } as any;
    }),
  { ssr: false }
);

const titleSpanStyle: React.CSSProperties = {
  background: "linear-gradient(180deg, var(--text-solid) 15.62%, var(--text-grad-end) 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const FLIP_WORDS: Record<Lang, string[]> = {
  en: ["Scales", "Ships", "Lasts", "Wins"],
  fr: ["Évoluent", "Livrent", "Performent", "Durent", "Gagnent"],
  ar: ["تتوسع", "تؤدي", "تستمر", "تنجح", "تتميز"],
};

const EASE = [0.16, 1, 0.3, 1] as [number, number, number, number];

export default function Hero() {
  const { t, lang } = useLanguage();
  const [ready, setReady] = useState(false);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 pb-20">

      <div className="absolute inset-0 z-0">
        <Beams
          beamWidth={1.8} beamHeight={16} beamNumber={8}
          lightColor="#c4b5fd" backgroundColor="#070707"
          speed={2.2} noiseIntensity={1.4} scale={0.18} rotation={0}
          onReady={() => setReady(true)}
        />
      </div>

      {/* Deep purple ambient */}
      <div className="absolute inset-0 z-[5] pointer-events-none" aria-hidden
        style={{ background: "radial-gradient(ellipse 80% 60% at 50% 42%, rgba(139,92,246,0.20) 0%, transparent 68%)" }} />

      <div className="absolute inset-x-0 top-0 h-40 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)" }} aria-hidden />
      <div className="absolute inset-x-0 bottom-0 h-48 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }} aria-hidden />
      <div className="absolute inset-y-0 left-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to right, var(--bg) 0%, transparent 100%)" }} aria-hidden />
      <div className="absolute inset-y-0 right-0 w-32 z-10 pointer-events-none"
        style={{ background: "linear-gradient(to left, var(--bg) 0%, transparent 100%)" }} aria-hidden />

      {/* Precision overlay */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden" aria-hidden>
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute top-24 left-8 flex items-center gap-2"
          style={{ color: "rgba(var(--rgb),0.22)" }}>
          <div className="w-3 h-px" style={{ backgroundColor: "rgba(var(--rgb),0.22)" }} />
          <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase">ALG — 01</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute top-24 right-8 flex items-center gap-2"
          style={{ color: "rgba(var(--rgb),0.22)" }}>
          <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase">DZA — 28</span>
          <div className="w-3 h-px" style={{ backgroundColor: "rgba(var(--rgb),0.22)" }} />
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={ready ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
          {[16, 8, 20, 8, 16].map((w, i) => (
            <div key={i} className="h-px" style={{ width: `${w}px`, backgroundColor: "rgba(var(--rgb),0.1)" }} />
          ))}
        </motion.div>
      </div>

      <div className="relative z-30 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="inline-flex items-center gap-3 mb-10">
          <div className="h-px w-8" style={{ backgroundColor: "rgba(var(--rgb),0.15)" }} />
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-medium"
            style={{ border: "1px solid rgba(var(--rgb),0.1)", backgroundColor: "rgba(var(--rgb),0.04)", backdropFilter: "blur(8px)", color: "rgba(var(--rgb),0.5)", letterSpacing: "0.09em" }}>
            <span className="inline-block w-1.5 h-1.5 animate-pulse" style={{ backgroundColor: "rgba(var(--rgb),0.5)" }} />
            <span className="uppercase">{t("hero_badge")}</span>
          </div>
          <div className="h-px w-8" style={{ backgroundColor: "rgba(var(--rgb),0.15)" }} />
        </motion.div>

        {/* Headline — 2 lines */}
        <h1 className="font-display text-[3rem] sm:text-[4.2rem] lg:text-[5.4rem] xl:text-[6rem] mb-7 leading-[1.1]" style={{ fontWeight: 600 }}>
          {/* Line 1 */}
          <motion.span className="block" style={titleSpanStyle}
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 22, filter: "blur(8px)" }}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}>
            {t("hero_line1")}
          </motion.span>

          {/* Line 2 — "Software That" + FlipWords inline */}
          <motion.span className="block"
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : { opacity: 0, y: 22, filter: "blur(8px)" }}
            transition={{ duration: 0.55, delay: 0.22, ease: EASE }}>
            <span style={titleSpanStyle}>{t("hero_line2")}&nbsp;</span>
            <FlipWords words={FLIP_WORDS[lang]} style={titleSpanStyle} duration={2600} />
          </motion.span>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 18 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, delay: 0.38, ease: EASE }}
          className="text-lg sm:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          style={{ color: "rgba(var(--rgb),0.5)" }}>
          {t("hero_sub")}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={ready ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          transition={{ duration: 0.7, delay: 0.52, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/contact"
            className="group inline-flex items-center gap-2.5 px-7 py-3.5 font-semibold text-[0.95rem] transition-opacity duration-200 hover:opacity-85"
            style={{ backgroundColor: "var(--text-solid)", color: "var(--bg)" }}>
            {t("hero_cta1")}
            <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
          <Link href="/work"
            className="inline-flex items-center gap-2 px-7 py-3.5 border font-medium text-[0.95rem] transition-colors duration-200"
            style={{ borderColor: "rgba(var(--rgb),0.1)", backdropFilter: "blur(8px)", backgroundColor: "rgba(var(--rgb),0.03)" }}>
            <ShinyText text={t("hero_cta2")} speed={3} color="rgba(var(--rgb),0.7)" shineColor="var(--text-solid)" />
          </Link>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={ready ? { opacity: 1 } : { opacity: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center gap-2"
        style={{ color: "rgba(var(--rgb),0.2)" }}>
        <div className="w-px h-10" style={{ backgroundImage: "linear-gradient(to bottom, rgba(var(--rgb),0.2), transparent)" }} />
        <span className="tracking-[0.18em] uppercase text-[0.6rem]">{t("hero_scroll")}</span>
      </motion.div>

    </section>
  );
}
