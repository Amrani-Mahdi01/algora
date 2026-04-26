"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Monitor, Cpu, Bot, ArrowUpRight, ChevronDown } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { getOverviewI18n } from "@/lib/services-i18n";
import ShinyText from "@/components/ui/ShinyText";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

const HERO_BG_IMAGES = Array.from({ length: 2 }, () => [
  "/placeholder-card.png",
  "/card-2.png",
  "/card-3.png",
  "/card-4.png",
  "/card-5.png",
  "/card-6.png",
  "/webDev-image.png",
  "/mobile-Image.png",
  "/desktopApp-image.png",
  "/automation.png",
  "/aisolutions.png",
  "/all-in-one.png",
]).flat();

const SERVICES = [
  {
    id: "web", number: "01", icon: Globe,
    titleKey: "sv_01_title" as const,
    category: "Web · SaaS · Enterprise",
    headline: "Platforms built to handle real scale.",
    desc: "From early-stage MVPs to multi-tenant enterprise SaaS — we architect, build, and ship full-stack web applications that are fast, reliable, and ready for whatever comes next. Every delivery includes a clean API layer, tested codebase, and CI/CD from day one.",
    highlights: [
      { stat: "Sub-100ms", label: "data refresh on live dashboards" },
      { stat: "99.9%",     label: "uptime on production deployments" },
      { stat: "40%",       label: "faster time-to-market with our stack" },
    ],
    features: [
      "Multi-tenant SaaS & B2B platform architecture",
      "Real-time dashboards with WebSocket data streams",
      "OAuth 2.0, SSO, MFA & role-based access control",
      "Third-party API integrations & event-driven webhooks",
      "Admin panels, audit logs & advanced reporting",
      "Core Web Vitals, Lighthouse scores & SEO foundations",
    ],
    stack: ["Next.js", "React", "FastAPI", "PostgreSQL", "Redis", "Docker", "Tailwind CSS"],
  },
  {
    id: "mobile", number: "02", icon: Smartphone,
    titleKey: "sv_02_title" as const,
    category: "iOS · Android · Cross-platform",
    headline: "Native-quality apps at cross-platform speed.",
    desc: "We ship iOS and Android applications that feel genuinely native — 60fps animations, deep OS integration, offline capability, and a UX that earns five-star reviews. One shared codebase, two polished products, with zero compromises on performance or feel.",
    highlights: [
      { stat: "4.8★",  label: "average App Store rating on shipped apps" },
      { stat: "2×",    label: "faster delivery vs. two separate native teams" },
      { stat: "Day 1", label: "offline functionality as a default, not an afterthought" },
    ],
    features: [
      "Cross-platform React Native with native module bridges",
      "Offline-first architecture with local SQLite / MMKV",
      "Push notifications, background fetch & silent updates",
      "In-app payments via Stripe, Apple Pay & Google Pay",
      "Camera, GPS, biometrics & platform-specific device APIs",
      "App Store & Google Play submission & review support",
    ],
    stack: ["React Native", "Expo", "Node.js", "Firebase", "Redux Toolkit", "Reanimated 3"],
  },
  {
    id: "desktop", number: "03", icon: Monitor,
    titleKey: "sv_03_title" as const,
    category: "Windows · macOS · Linux",
    headline: "Desktop software professionals actually use.",
    desc: "Some workflows demand more than a browser tab — offline reliability, hardware access, native OS integration, and the kind of performance that web apps simply can't match. We build cross-platform desktop applications that feel at home on every operating system.",
    highlights: [
      { stat: "3 OS",   label: "from a single shared codebase" },
      { stat: "30MB",   label: "typical installer size with Tauri" },
      { stat: "Auto",   label: "updates with rollback and staged rollout" },
    ],
    features: [
      "Windows, macOS & Linux from one shared codebase",
      "Native OS integration — tray, notifications, file system",
      "Offline-first with embedded SQLite database",
      "Auto-update system with staged rollout & rollback",
      "Hardware access: serial ports, USB devices, printers",
      "Code-signed installers for trusted enterprise distribution",
    ],
    stack: ["Tauri", "Electron", "React", "Rust", "SQLite", "TypeScript"],
  },
  {
    id: "automation", number: "04", icon: Cpu,
    titleKey: "sv_04_title" as const,
    category: "RPA · Pipelines · Orchestration",
    headline: "Turn repetitive work into reliable systems.",
    desc: "Every manual, repeated task in your business is a cost centre and a risk. We audit your workflows, identify the automation opportunities with the highest ROI, and build reliable, monitored systems that run 24/7 — without the human error.",
    highlights: [
      { stat: "68%",    label: "reduction in manual processing hours (avg)" },
      { stat: "24/7",   label: "operation with alerting & automatic retry logic" },
      { stat: "< 1 hr", label: "mean time to alert on pipeline failures" },
    ],
    features: [
      "RPA bots for web scraping, form filling & data entry",
      "Scheduled & event-driven data pipeline orchestration",
      "Multi-system API integration & workflow chaining",
      "Document parsing, OCR & structured data extraction",
      "Error handling, retry logic & dead-letter queues",
      "Monitoring dashboards, Slack alerts & full audit logs",
    ],
    stack: ["Python", "Playwright", "Apache Airflow", "n8n", "PostgreSQL", "Docker", "Redis"],
  },
  {
    id: "ai", number: "05", icon: Bot,
    titleKey: "sv_05_title" as const,
    category: "LLM · RAG · Computer Vision",
    headline: "AI with measurable business impact.",
    desc: "We build AI that earns its place in your product with a clear ROI — not a chatbot bolted on the side. Custom LLM pipelines, RAG systems, computer vision models, and predictive analytics that reduce real operational costs and create genuine competitive advantages.",
    highlights: [
      { stat: "68%",  label: "live support volume reduction via AI triage" },
      { stat: "40hr", label: "per week saved through intelligent automation" },
      { stat: "AR",   label: "Arabic-first NLP for the MENA market" },
    ],
    features: [
      "Custom LLM fine-tuning & advanced prompt engineering",
      "RAG pipelines with vector search & context grounding",
      "AI customer support, ticket triage & escalation routing",
      "Computer vision, image classification & OCR pipelines",
      "Predictive analytics, demand forecasting & anomaly detection",
      "Arabic-first NLP — dialect-aware models for the MENA region",
    ],
    stack: ["LangChain", "GPT-4o", "FastAPI", "Pinecone", "Python", "Redis", "PostgreSQL"],
  },
];

// Navbar height used for sticky offset
const NAV_H = 64;

export default function ServicesPage() {
  const { lang, t } = useLanguage();
  const C = getOverviewI18n(lang);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Update active service based on scroll position
  useEffect(() => {
    const onScroll = () => {
      // trigger line = 38% down the viewport
      const trigger = window.scrollY + window.innerHeight * 0.38;
      let next = 0;
      sectionRefs.current.forEach((el, i) => {
        if (!el) return;
        if (el.getBoundingClientRect().top + window.scrollY <= trigger) next = i;
      });
      setActiveIndex(next);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const activeSvc = SERVICES[activeIndex];
  const SidebarIcon = activeSvc.icon;

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen lg:min-h-[780px] flex flex-col items-center justify-center overflow-hidden border-b pt-24 pb-20"
        style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

        <ThreeDMarquee
          images={HERO_BG_IMAGES}
          className="pointer-events-none absolute inset-0 h-full w-full rounded-none opacity-20"
        />
        <div className="absolute inset-0 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to bottom, rgba(7,7,7,0.6) 0%, rgba(7,7,7,0.45) 50%, rgba(7,7,7,0.7) 100%)" }} />

        <div className="absolute inset-x-0 top-0 h-40 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to bottom, var(--bg) 0%, transparent 100%)" }} />
        <div className="absolute inset-x-0 bottom-0 h-48 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to top, var(--bg) 0%, transparent 100%)" }} />
        <div className="absolute inset-y-0 left-0 w-32 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to right, var(--bg) 0%, transparent 100%)" }} />
        <div className="absolute inset-y-0 right-0 w-32 pointer-events-none" aria-hidden
          style={{ background: "linear-gradient(to left, var(--bg) 0%, transparent 100%)" }} />

        <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.14)" }} />
        <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.14)", animationDelay: "1.5s" }} />
        <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "2s" }} />
        <div className="absolute bottom-7 right-7 w-5 h-5 border-b border-r pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "0.8s" }} />

        <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute top-24 left-8 flex items-center gap-2"
            style={{ color: "rgba(var(--rgb),0.22)" }}>
            <div className="w-3 h-px" style={{ backgroundColor: "rgba(var(--rgb),0.22)" }} />
            <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase">SVC — 05</span>
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute top-24 right-8 flex items-center gap-2"
            style={{ color: "rgba(var(--rgb),0.22)" }}>
            <span className="font-mono text-[0.55rem] tracking-[0.2em] uppercase">ALG — 28</span>
            <div className="w-3 h-px" style={{ backgroundColor: "rgba(var(--rgb),0.22)" }} />
          </motion.div>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            className="absolute left-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
            {[16, 8, 20, 8, 16].map((w, i) => (
              <div key={i} className="h-px" style={{ width: `${w}px`, backgroundColor: "rgba(var(--rgb),0.1)" }} />
            ))}
          </motion.div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 flex flex-col items-center text-center">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="inline-flex items-center gap-3 mb-10">
            <div className="h-px w-8" style={{ backgroundColor: "rgba(var(--rgb),0.15)" }} />
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 text-xs font-medium"
              style={{ border: "1px solid rgba(var(--rgb),0.1)", backgroundColor: "rgba(var(--rgb),0.04)", backdropFilter: "blur(8px)", color: "rgba(var(--rgb),0.5)", letterSpacing: "0.09em" }}>
              <span className="inline-block w-1.5 h-1.5 animate-pulse rounded-full" style={{ backgroundColor: "rgba(var(--rgb),0.5)" }} />
              <span className="uppercase">{C.badge}</span>
            </div>
            <div className="h-px w-8" style={{ backgroundColor: "rgba(var(--rgb),0.15)" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 22, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.65, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
            className="font-display title-gradient-text text-[2.8rem] sm:text-[3.8rem] lg:text-[4.8rem] leading-[1.06] mb-7"
            style={{ fontWeight: 600 }}>
            {C.h1Lines[0]}<br />{C.h1Lines[1]}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="text-base sm:text-lg max-w-xl leading-relaxed"
            style={{ color: "rgba(var(--rgb),0.46)" }}>
            {C.sub}
          </motion.p>
        </div>

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
          style={{ color: "rgba(var(--rgb),0.2)" }}>
          <div className="w-px h-10" style={{ backgroundImage: "linear-gradient(to bottom, rgba(var(--rgb),0.2), transparent)" }} />
          <span className="tracking-[0.18em] uppercase text-[0.6rem]">{C.scroll}</span>
        </motion.div>
      </section>

      {/* ── Services ──────────────────────────────────────────────────────── */}
      <section className="relative border-t" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
        <div className="absolute inset-0 pointer-events-none select-none" aria-hidden
          style={{
            backgroundImage: "radial-gradient(rgba(var(--rgb),0.05) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }} />
        <div className="absolute top-0 right-0 w-[500px] h-[500px] pointer-events-none" aria-hidden
          style={{ background: "radial-gradient(circle at top right, rgba(var(--rgb),0.045) 0%, transparent 65%)" }} />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] pointer-events-none" aria-hidden
          style={{ background: "radial-gradient(circle at bottom left, rgba(var(--rgb),0.03) 0%, transparent 65%)" }} />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr]">

            {/* ── Sticky left sidebar (desktop only) ── */}
            <div
              className="hidden lg:flex flex-col border-r self-start"
              style={{
                borderColor: "rgba(var(--rgb),0.08)",
                position: "sticky",
                top: NAV_H,
              }}>

              {/* Top: label */}
              <div className="px-6 pt-6 pb-4 border-b" style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
                <span className="font-mono text-[0.52rem] tracking-[0.22em] uppercase"
                  style={{ color: "rgba(var(--rgb),0.26)" }}>
                  {C.sidebarLabel}
                </span>
              </div>

              {/* Middle: animated service info */}
              <div className="px-6 py-6 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col gap-4">

                    {/* Large number */}
                    <span className="font-mono leading-none select-none"
                      style={{ fontSize: "3.5rem", fontWeight: 800, color: "rgba(var(--rgb),0.18)" }}>
                      {activeSvc.number}
                    </span>

                    {/* Icon */}
                    <div className="w-8 h-8 border flex items-center justify-center"
                      style={{ borderColor: "rgba(var(--rgb),0.12)", backgroundColor: "rgba(var(--rgb),0.03)" }}>
                      <SidebarIcon size={13} style={{ color: "rgba(var(--rgb),0.52)" }} />
                    </div>

                    {/* Name + category */}
                    <div className="flex flex-col gap-1.5">
                      <span className="font-display text-[0.9rem] leading-snug"
                        style={{ fontWeight: 600, color: "var(--text-solid)" }}>
                        {t(activeSvc.titleKey)}
                      </span>
                      <span className="font-mono text-[0.48rem] tracking-wider"
                        style={{ color: "rgba(var(--rgb),0.28)" }}>
                        {C.services[activeIndex].category}
                      </span>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Bottom: progress + link */}
              <div className="px-6 pb-7 flex flex-col gap-5 border-t" style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
                {/* Progress indicators */}
                <div className="flex flex-col gap-2 pt-5">
                  {SERVICES.map((_, i) => (
                    <div key={i}
                      className="h-px rounded-full transition-all duration-500"
                      style={{
                        width: i === activeIndex ? 28 : 12,
                        backgroundColor: i === activeIndex
                          ? "rgba(var(--rgb),0.6)"
                          : "rgba(var(--rgb),0.12)",
                      }} />
                  ))}
                </div>

                {/* Details link — updates with active service */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeIndex}
                    initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}>
                    <Link
                      href={`/services/${activeSvc.id}`}
                      className="group inline-flex items-center gap-1.5 text-[0.65rem] font-medium tracking-wider uppercase transition-colors duration-200"
                      style={{ color: "rgba(var(--rgb),0.3)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-solid)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(var(--rgb),0.3)")}>
                      {C.viewDetails}
                      <ArrowUpRight size={11}
                        className="transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            {/* ── Scrolling right column ── */}
            <div>
              {SERVICES.map((service, i) => {
                const Icon = service.icon;
                return (
                  <motion.div
                    key={service.id}
                    id={service.id}
                    ref={el => { sectionRefs.current[i] = el; }}
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
                    className="border-b"
                    style={{ borderColor: "rgba(var(--rgb),0.08)" }}>

                    <Link
                      href={`/services/${service.id}`}
                      className="group block px-8 sm:px-10 lg:px-14 py-14 lg:py-16 transition-colors duration-150"
                      style={{ backgroundColor: "transparent" }}
                      onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(var(--rgb),0.016)")}
                      onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>

                      {/* Mobile-only service header */}
                      <div className="flex items-center gap-3 mb-7 lg:hidden">
                        <span className="font-mono text-[0.52rem] tracking-[0.14em]"
                          style={{ color: "rgba(var(--rgb),0.22)" }}>
                          {service.number}
                        </span>
                        <div className="w-7 h-7 border flex items-center justify-center flex-shrink-0"
                          style={{ borderColor: "rgba(var(--rgb),0.1)", backgroundColor: "rgba(var(--rgb),0.02)" }}>
                          <Icon size={12} style={{ color: "rgba(var(--rgb),0.38)" }} />
                        </div>
                        <span className="font-display text-sm" style={{ fontWeight: 600, color: "var(--text-solid)" }}>
                          {t(service.titleKey)}
                        </span>
                      </div>

                      {/* Headline + description */}
                      <div className="flex items-start justify-between gap-6 mb-6">
                        <h2 className="font-display title-gradient-text text-2xl sm:text-[1.95rem] leading-[1.16]"
                          style={{ fontWeight: 600 }}>
                          {C.services[i].headline}
                        </h2>
                        <ArrowUpRight
                          size={18}
                          className="flex-shrink-0 mt-1 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                          style={{ color: "rgba(var(--rgb),0.2)" }} />
                      </div>
                      <p className="text-sm leading-[1.78] max-w-xl mb-8"
                        style={{ color: "rgba(var(--rgb),0.44)" }}>
                        {C.services[i].desc}
                      </p>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-5 py-6 border-t border-b"
                        style={{ borderColor: "rgba(var(--rgb),0.07)" }}>
                        {service.highlights.map((h, j) => (
                          <div key={h.stat}>
                            <span className="font-display text-xl sm:text-2xl block leading-none mb-1.5"
                              style={{ fontWeight: 700, color: "var(--text-solid)" }}>
                              {h.stat}
                            </span>
                            <span className="text-[0.65rem] leading-snug block"
                              style={{ color: "rgba(var(--rgb),0.32)" }}>
                              {C.services[i].highlightLabels[j]}
                            </span>
                          </div>
                        ))}
                      </div>

                      {/* Footer: stack + explore link */}
                      <div className="flex items-center justify-between gap-6 pt-5">
                        <div className="flex flex-wrap gap-1.5">
                          {service.stack.map(tech => (
                            <span key={tech}
                              className="font-mono text-[0.55rem] tracking-wider px-2 py-1 border"
                              style={{ borderColor: "rgba(var(--rgb),0.08)", color: "rgba(var(--rgb),0.26)", backgroundColor: "rgba(var(--rgb),0.015)" }}>
                              {tech}
                            </span>
                          ))}
                        </div>
                        <span
                          className="flex-shrink-0 font-mono text-[0.55rem] tracking-[0.16em] uppercase transition-colors duration-200"
                          style={{ color: "rgba(var(--rgb),0.3)" }}>
                          {C.exploreService}
                        </span>
                      </div>

                    </Link>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>
      </section>

      {/* ── FAQ ───────────────────────────────────────────────────────────── */}
      <section className="relative py-28 border-t overflow-hidden"
        style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
        <div className="absolute -top-24 -left-24 w-[400px] h-[400px] pointer-events-none animate-glow-breathe" aria-hidden
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.045) 0%, transparent 65%)", filter: "blur(48px)" }} />
        <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.1)", animationDelay: "1s" }} />
        <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l pointer-events-none animate-bracket-fade" aria-hidden
          style={{ borderColor: "rgba(var(--rgb),0.08)", animationDelay: "2.5s" }} />
        <div className="absolute right-0 top-1/3 flex flex-col gap-3 pointer-events-none" aria-hidden>
          {[14, 8, 18, 8, 14].map((w, idx) => (
            <div key={idx} className="h-px animate-tick-shift"
              style={{ width: w, backgroundColor: "rgba(var(--rgb),0.08)", animationDelay: `${idx * 0.18}s` }} />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b"
            style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
            <div>
              <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
                <ShinyText text={C.faqLabel} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
              </span>
              <h2 className="font-display title-gradient-text text-2xl sm:text-[2rem] lg:text-[2.4rem]"
                style={{ fontWeight: 600 }}>
                {C.faqTitleLines[0]}<br />{C.faqTitleLines[1]}
              </h2>
            </div>
            <p className="text-sm max-w-xs lg:text-right leading-relaxed">
              <ShinyText
                text={C.faqSub}
                speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
            </p>
          </motion.div>

          <div className="flex flex-col">
            {C.faqs.map((faq, i) => {
              const isOpen = openFaq === i;
              return (
                <motion.div key={i}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.04 }}
                  style={{ borderTop: "1px solid rgba(var(--rgb),0.08)" }}>
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    className="w-full flex items-start gap-5 py-6 text-start group cursor-pointer"
                    aria-expanded={isOpen}>
                    <span className="font-mono text-[0.5rem] tracking-wider mt-[3px] flex-shrink-0 w-6"
                      style={{ color: "rgba(var(--rgb),0.2)" }}>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <h3 className="flex-1 text-[0.95rem] leading-snug transition-colors duration-200"
                      style={{ fontFamily: "var(--font-display, inherit)", fontWeight: 600, color: isOpen ? "var(--text-solid)" : "rgba(var(--rgb),0.72)" }}>
                      {faq.q}
                    </h3>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      className="flex-shrink-0 mt-[2px]">
                      <ChevronDown size={15} style={{ color: isOpen ? "var(--text-solid)" : "rgba(var(--rgb),0.25)" }} />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="answer"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
                        style={{ overflow: "hidden" }}>
                        <div className="ps-11 pb-7 pe-6">
                          <p className="text-sm leading-[1.82]" style={{ color: "rgba(var(--rgb),0.46)" }}>
                            {faq.a}
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            <div style={{ borderTop: "1px solid rgba(var(--rgb),0.08)" }} />
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-14 pt-10 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-6"
            style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
            <p className="text-sm" style={{ color: "rgba(var(--rgb),0.38)" }}>
              {C.stillHaveQ}
            </p>
            <Link href="/contact"
              className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase transition-colors duration-200 flex-shrink-0"
              style={{ color: "rgba(var(--rgb),0.35)" }}
              onMouseEnter={e => (e.currentTarget.style.color = "var(--text-solid)")}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(var(--rgb),0.35)")}>
              {C.askUs} <ArrowUpRight size={12} />
            </Link>
          </motion.div>
        </div>
      </section>

      <CTABanner />
      <Contact />
    </>
  );
}
