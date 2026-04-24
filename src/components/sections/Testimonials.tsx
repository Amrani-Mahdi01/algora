"use client";

import { motion } from "framer-motion";
import { CardSwap } from "@/components/ui/CardSwap";
import ShinyText from "@/components/ui/ShinyText";

const testimonials = [
  {
    id: 1,
    quote: "Algora delivered our platform in record time without cutting any corners on quality. The code is clean, the UX is seamless, and our users absolutely love it.",
    name: "Karim Benyahia",
    role: "CEO",
    company: "Taskflow SaaS",
    initials: "KB",
  },
  {
    id: 2,
    quote: "They don't just build what you ask for — they question, refine, and improve your vision. The AI integration they built saved us 40 hours per week in manual work.",
    name: "Sarah Oukaci",
    role: "COO",
    company: "LogiCore DZ",
    initials: "SO",
  },
  {
    id: 3,
    quote: "From day one they felt like an extension of our team. The level of communication, craftsmanship, and post-launch support has been exceptional.",
    name: "Mehdi Larbi",
    role: "Founder",
    company: "Datavault Solutions",
    initials: "ML",
  },
  {
    id: 4,
    quote: "The mobile app they built outperformed our expectations on every metric. Downloads, retention, reviews — all exceeded targets within the first month.",
    name: "Amira Khelif",
    role: "Product Lead",
    company: "NomadPay",
    initials: "AK",
  },
  {
    id: 5,
    quote: "Finally an agency that speaks both design and engineering fluently. The final product looks stunning AND runs flawlessly under load.",
    name: "Yassine Boudour",
    role: "CTO",
    company: "FinStack",
    initials: "YB",
  },
];

type Testimonial = (typeof testimonials)[0];

function TestimonialCard({ t, isActive }: { t: Testimonial; isActive: boolean }) {
  return (
    <div
      className="h-full border flex flex-col gap-5 p-7 sm:p-8 transition-colors duration-300"
      style={{
        backgroundColor: isActive ? "rgba(var(--rgb),0.04)" : "rgba(var(--rgb),0.02)",
        borderColor: isActive ? "rgba(var(--rgb),0.12)" : "rgba(var(--rgb),0.07)",
      }}
    >
      <svg width="22" height="17" viewBox="0 0 32 24" fill="none" aria-hidden>
        <path
          d="M0 24V14.4C0 10.4 1.07 7.07 3.2 4.4 5.33 1.6 8.27 0 12 0v3.6c-2.53 0-4.53.8-6 2.4C4.67 7.6 4 9.73 4 12.4V13.6h4V24H0zm16 0V14.4c0-4 1.07-7.33 3.2-10C21.33 1.6 24.27 0 28 0v3.6c-2.53 0-4.53.8-6 2.4-1.33 1.6-2 3.73-2 6.4V13.6h4V24H16z"
          fill="currentColor"
          style={{ color: "rgba(var(--rgb),0.14)" }}
        />
      </svg>

      <p className="text-sm leading-relaxed flex-1" style={{ color: "rgba(var(--rgb),0.62)" }}>
        &ldquo;{t.quote}&rdquo;
      </p>

      <div
        className="flex items-center gap-3 pt-4 border-t"
        style={{ borderColor: "rgba(var(--rgb),0.08)" }}
      >
        <div
          className="w-8 h-8 border flex items-center justify-center font-mono text-[0.58rem] font-bold flex-shrink-0"
          style={{ borderColor: "rgba(var(--rgb),0.18)", color: "var(--text-solid)" }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-[0.82rem] font-semibold leading-none mb-1" style={{ color: "var(--text-solid)" }}>
            {t.name}
          </p>
          <p className="text-xs" style={{ color: "rgba(var(--rgb),0.35)" }}>
            {t.role} · {t.company}
          </p>
        </div>
      </div>
    </div>
  );
}

const METRICS = [
  { value: "98%", label: "Client satisfaction rate", detail: "Across all delivered projects" },
  { value: "50+", label: "Products shipped",         detail: "From MVP to enterprise scale" },
  { value: "3yr",  label: "Avg. engagement",          detail: "Clients keep coming back" },
];

export default function Testimonials() {
  return (
    <section
      className="relative py-28 border-t overflow-hidden"
      style={{ borderColor: "rgba(var(--rgb),0.1)" }}
    >
      {/* ── Background elements ── */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[560px] h-[380px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(ellipse, rgba(var(--rgb),0.05) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute -bottom-20 -right-20 w-[380px] h-[380px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(44px)", animationDelay: "2s" }} />
      <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.1)" }} />
      <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.1)", animationDelay: "1.5s" }} />
      <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.08)", animationDelay: "3s" }} />
      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.2)" }} />
      <div className="absolute right-0 top-1/3 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[14, 8, 18, 8, 14].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(var(--rgb),0.08)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b"
          style={{ borderColor: "rgba(var(--rgb),0.1)" }}
        >
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text="Client Stories" speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2
              className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]"
              style={{ fontWeight: 600 }}
            >
              Trusted by<br />Ambitious Teams.
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right leading-relaxed">
            <ShinyText
              text="The best measure of our work is what our clients say — and build next with us."
              speed={10}
              color="rgba(var(--rgb),0.35)"
              shineColor="rgba(var(--rgb),0.65)"
            />
          </p>
        </motion.div>

        {/* ── Content grid ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_40%] gap-16 lg:gap-24 items-start">

          {/* Left — CardSwap */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-3"
          >
            <CardSwap
              cards={testimonials}
              cardHeight={268}
              interval={4200}
              renderCard={(t, isActive) => (
                <TestimonialCard t={t} isActive={isActive} />
              )}
            />
            <p
              className="font-mono text-[0.56rem] tracking-[0.22em] uppercase"
              style={{ color: "rgba(var(--rgb),0.18)" }}
            >
              Click to browse →
            </p>
          </motion.div>

          {/* Right — Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="flex flex-col"
          >
            {METRICS.map((m, i) => (
              <div
                key={i}
                className="flex flex-col gap-1.5 py-8"
                style={{
                  paddingTop: i === 0 ? 0 : undefined,
                  paddingBottom: i === METRICS.length - 1 ? 0 : undefined,
                  borderTop: i > 0 ? "1px solid rgba(var(--rgb),0.08)" : "none",
                }}
              >
                <span
                  className="font-display text-[2.8rem] leading-none tracking-tight"
                  style={{ fontWeight: 600, color: "var(--text-solid)" }}
                >
                  {m.value}
                </span>
                <span className="text-sm font-medium" style={{ color: "rgba(var(--rgb),0.6)" }}>
                  {m.label}
                </span>
                <span className="text-xs leading-relaxed" style={{ color: "rgba(var(--rgb),0.28)" }}>
                  {m.detail}
                </span>
              </div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
