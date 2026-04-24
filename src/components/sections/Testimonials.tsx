"use client";

import { motion } from "framer-motion";
import { InfiniteMovingCards } from "@/components/ui/InfiniteMovingCards";
import BlurText from "@/components/ui/BlurText";
import ShinyText from "@/components/ui/ShinyText";

const testimonials = [
  {
    quote:
      "Algora delivered our platform in record time without cutting any corners on quality. The code is clean, the UX is seamless, and our users absolutely love it.",
    name: "Karim Benyahia",
    role: "CEO",
    company: "Taskflow SaaS",
    initials: "KB",
  },
  {
    quote:
      "They don't just build what you ask for — they question, refine, and improve your vision. The AI integration they built saved us 40 hours per week in manual work.",
    name: "Sarah Oukaci",
    role: "COO",
    company: "LogiCore DZ",
    initials: "SO",
  },
  {
    quote:
      "From day one they felt like an extension of our team. The level of communication, craftsmanship, and post-launch support has been exceptional.",
    name: "Mehdi Larbi",
    role: "Founder",
    company: "Datavault Solutions",
    initials: "ML",
  },
  {
    quote:
      "The mobile app they built outperformed our expectations on every metric. Downloads, retention, reviews — all exceeded targets within the first month.",
    name: "Amira Khelif",
    role: "Product Lead",
    company: "NomadPay",
    initials: "AK",
  },
  {
    quote:
      "Finally an agency that speaks both design and engineering fluently. The final product looks stunning AND runs flawlessly under load.",
    name: "Yassine Boudour",
    role: "CTO",
    company: "FinStack",
    initials: "YB",
  },
];

function TestimonialCard({ t }: { t: (typeof testimonials)[0] }) {
  return (
    <div
      className="relative flex flex-col gap-5 p-7 w-[340px] border border-border"
      style={{ backgroundColor: "#0d0d0d" }}
    >
      {/* Quote mark */}
      <svg width="28" height="22" viewBox="0 0 32 24" fill="none" aria-hidden className="opacity-25">
        <path
          d="M0 24V14.4C0 10.4 1.07 7.07 3.2 4.4 5.33 1.6 8.27 0 12 0v3.6c-2.53 0-4.53.8-6 2.4C4.67 7.6 4 9.73 4 12.4V13.6h4V24H0zm16 0V14.4c0-4 1.07-7.33 3.2-10C21.33 1.6 24.27 0 28 0v3.6c-2.53 0-4.53.8-6 2.4-1.33 1.6-2 3.73-2 6.4V13.6h4V24H16z"
          fill="#01B673"
        />
      </svg>

      <p className="text-[0.9rem] leading-relaxed flex-1" style={{ color: "hsla(0,0%,100%,0.68)" }}>
        "{t.quote}"
      </p>

      <div className="flex items-center gap-3 pt-1 border-t border-border">
        <div
          className="w-9 h-9 flex items-center justify-center text-[0.65rem] font-bold text-white flex-shrink-0"
          style={{ background: "linear-gradient(135deg, #01B673, #02412C)" }}
        >
          {t.initials}
        </div>
        <div>
          <p className="text-[0.85rem] font-semibold text-heading leading-none mb-0.5">{t.name}</p>
          <p className="text-xs text-subtitle-text">{t.role} · {t.company}</p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* ── Purple background elements ── */}
      <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[560px] h-[380px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.13) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute -bottom-20 -right-20 w-[380px] h-[380px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.10) 0%, transparent 65%)", filter: "blur(44px)", animationDelay: "2s" }} />
      <div className="absolute -bottom-16 -left-16 w-[300px] h-[300px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.08) 0%, transparent 65%)", filter: "blur(40px)", animationDelay: "4s" }} />
      <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.33)" }} />
      <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.33)", animationDelay: "1.5s" }} />
      <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.22)", animationDelay: "3s" }} />
      <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.22)", animationDelay: "4.5s" }} />
      <div className="absolute top-14 left-1/2 -translate-x-1/2 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.6)" }} />

      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="subtitle-pill inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium mb-5">
            <ShinyText text="Client Stories" speed={4} color="rgba(172,172,172,0.9)" shineColor="#ffffff" />
          </span>
          <h2
            className="font-display text-4xl sm:text-5xl mb-5"
            style={{ fontWeight: 800 }}
          >
            <BlurText
              text="Trusted By Ambitious Teams"
              as="span"
              className="justify-center"
              animateBy="words"
              direction="top"
              delay={100}
              spanStyle={{
                background: "linear-gradient(180deg, #ffffff 15.62%, #B8B8B8 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            />
          </h2>
          <p className="text-base max-w-lg mx-auto">
            The best measure of our work is what our clients say — and build next with us.
          </p>
        </motion.div>
      </div>

      {/* Infinite scroll row 1 */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <InfiniteMovingCards direction="left" speed="slow" className="mb-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.name} t={t} />
          ))}
        </InfiniteMovingCards>
      </motion.div>

      {/* Row 2 — reversed, slight offset */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <InfiniteMovingCards direction="right" speed="slow">
          {[...testimonials].reverse().map((t) => (
            <TestimonialCard key={`${t.name}-r`} t={t} />
          ))}
        </InfiniteMovingCards>
      </motion.div>

      {/* Stars */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-14"
      >
        <div className="flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#01B673">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
            </svg>
          ))}
        </div>
        <span className="text-sm text-subtitle-text">
          <span className="text-heading font-semibold">98% satisfaction rate</span>
          {" "}across 50+ delivered projects
        </span>
      </motion.div>
    </section>
  );
}
