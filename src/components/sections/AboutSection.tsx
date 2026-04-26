"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";
import ShinyText from "@/components/ui/ShinyText";
import { useLanguage } from "@/contexts/LanguageContext";

export default function AboutSection() {
  const { t } = useLanguage();
  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] animate-glow-breathe"
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.05) 0%, transparent 65%)", filter: "blur(56px)" }} />
        <div className="absolute -bottom-20 -left-20 w-[380px] h-[380px] animate-glow-breathe"
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(44px)", animationDelay: "2.5s" }} />
        <div className="absolute top-7 left-7 w-5 h-5 border-t border-l animate-bracket-fade"
          style={{ borderColor: "rgba(var(--rgb),0.12)" }} />
        <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r animate-bracket-fade"
          style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "2s" }} />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* Label */}
        <motion.div
          initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5 }}
          className="mb-12">
          <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase">
            <ShinyText text="— About Us" speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
          </span>
        </motion.div>

        {/* ScrollReveal statement */}
        <ScrollReveal
          baseOpacity={0.12}
          enableBlur
          baseRotation={2}
          blurStrength={6}
          containerClassName="!my-0"
          textClassName="font-display !text-[clamp(1.8rem,3.5vw,2.8rem)] !leading-[1.25] !font-semibold !text-white"
          wordAnimationStart="top 60%"
          wordAnimationEnd="bottom 20%"
        >
          {t("ab_text")}
        </ScrollReveal>

        {/* Bottom divider line */}
        <motion.div
          initial={{ scaleX: 0 }} whileInView={{ scaleX: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-20 h-px origin-left"
          style={{ backgroundColor: "rgba(var(--rgb),0.08)" }} />

      </div>
    </section>
  );
}
