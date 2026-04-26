"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Globe, Smartphone, Monitor, Cpu, Bot, ArrowUpRight } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";

const serviceIcons = [Globe, Smartphone, Monitor, Cpu, Bot];
const serviceHrefs = ["/services#web", "/services#mobile", "/services#desktop", "/services#automation", "/services#ai"];
const serviceImages = [
  "/webDev-image.png",
  "/mobile-Image.png",
  "/desktopApp-image.png",
  "/automation.png",
  "/aisolutions.png",
];

export default function ServicesPreview() {
  const { t } = useLanguage();
  const [activeIndex, setActiveIndex] = useState(0);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  // Scroll-driven: whichever row's center is closest to the viewport midpoint becomes active.
  // No update() on mount so index 0 is always the starting image.
  useEffect(() => {
    const update = () => {
      const mid = window.scrollY + window.innerHeight * 0.5;
      let closest = 0;
      let minDist = Infinity;
      itemRefs.current.forEach((el, i) => {
        if (!el) return;
        const r = el.getBoundingClientRect();
        const itemMid = window.scrollY + r.top + r.height / 2;
        const dist = Math.abs(mid - itemMid);
        if (dist < minDist) { minDist = dist; closest = i; }
      });
      setActiveIndex(closest);
    };

    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);

  const services = [
    { number: "01", icon: serviceIcons[0], title: t("sv_01_title"), description: t("sv_01_desc"), href: serviceHrefs[0] },
    { number: "02", icon: serviceIcons[1], title: t("sv_02_title"), description: t("sv_02_desc"), href: serviceHrefs[1] },
    { number: "03", icon: serviceIcons[2], title: t("sv_03_title"), description: t("sv_03_desc"), href: serviceHrefs[2] },
    { number: "04", icon: serviceIcons[3], title: t("sv_04_title"), description: t("sv_04_desc"), href: serviceHrefs[3] },
    { number: "05", icon: serviceIcons[4], title: t("sv_05_title"), description: t("sv_05_desc"), href: serviceHrefs[4] },
  ];

  return (
    // overflow-hidden removed — it breaks position:sticky on the image panel
    <section className="relative py-28 border-t" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

      {/* Decorative bg wrapped so it doesn't cause page-level scroll */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
        <div className="absolute -top-32 -left-32 w-[520px] h-[520px] animate-glow-breathe"
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.06) 0%, transparent 65%)", filter: "blur(48px)" }} />
        <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] animate-glow-breathe"
          style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(40px)", animationDelay: "3s" }} />
        <div className="absolute left-0 inset-y-0 w-px"
          style={{ background: "linear-gradient(to bottom, transparent 8%, rgba(var(--rgb),0.12) 28%, rgba(var(--rgb),0.12) 72%, transparent 92%)" }} />
        <div className="absolute top-7 right-7 w-5 h-5 border-t border-r animate-bracket-fade"
          style={{ borderColor: "rgba(var(--rgb),0.12)" }} />
        <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l animate-bracket-fade"
          style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "2.5s" }} />
        <div className="absolute top-16 right-20 w-1 h-1 animate-dot-blink"
          style={{ backgroundColor: "rgba(var(--rgb),0.18)" }} />
        <div className="absolute top-[4.5rem] right-[5.75rem] w-1 h-1 animate-dot-blink"
          style={{ backgroundColor: "rgba(var(--rgb),0.1)", animationDelay: "1s" }} />
        <div className="absolute bottom-14 right-28 w-1 h-1 animate-dot-blink"
          style={{ backgroundColor: "rgba(var(--rgb),0.12)", animationDelay: "2s" }} />
        <div className="absolute right-0 top-1/3 flex flex-col gap-3">
          {[14, 8, 18, 8, 14].map((w, i) => (
            <div key={i} className="h-px animate-tick-shift"
              style={{ width: w, backgroundColor: "rgba(var(--rgb),0.1)", animationDelay: `${i * 0.18}s` }} />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b"
          style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={t("sv_label")} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2 className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]" style={{ fontWeight: 600 }}>
              {t("sv_title1")}<br />{t("sv_title2")}
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right leading-relaxed">
            <ShinyText text={t("sv_sub")} speed={10} color="rgba(var(--rgb),0.38)" shineColor="rgba(var(--rgb),0.65)" />
          </p>
        </motion.div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-[1fr_440px] xl:grid-cols-[1fr_500px] gap-10 xl:gap-16 items-start">

          {/* Left — service list */}
          <div className="divide-y" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
            {services.map((service, i) => {
              const Icon = service.icon;
              const isActive = activeIndex === i;
              return (
                <motion.div
                  key={i}
                  ref={el => { itemRefs.current[i] = el; }}
                  initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
                  <Link
                    href={service.href}
                    className="group flex items-start gap-5 sm:gap-7 py-8 sm:py-10 -mx-6 px-6 transition-colors duration-200"
                    style={{ backgroundColor: isActive ? "rgba(var(--rgb),0.025)" : "transparent" }}
                    onMouseEnter={() => setActiveIndex(i)}>
                    <span className="font-mono text-[0.6rem] tracking-wider flex-shrink-0 w-5 mt-[4px] transition-colors duration-200"
                      style={{ color: isActive ? "rgba(var(--rgb),0.5)" : "rgba(var(--rgb),0.18)" }}>
                      {service.number}
                    </span>
                    <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 border transition-all duration-200"
                      style={{
                        borderColor: isActive ? "rgba(var(--rgb),0.3)" : "rgba(var(--rgb),0.1)",
                        backgroundColor: isActive ? "rgba(var(--rgb),0.07)" : "rgba(var(--rgb),0.02)",
                      }}>
                      <Icon size={14} style={{ color: isActive ? "rgba(var(--rgb),0.7)" : "rgba(var(--rgb),0.35)" }} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-display text-base sm:text-lg mb-2.5 transition-colors duration-200"
                        style={{ fontWeight: 500, color: isActive ? "var(--text-solid)" : "rgba(var(--rgb),0.6)" }}>
                        {service.title}
                      </h3>
                      <p className="text-sm leading-relaxed hidden sm:block" style={{ color: "rgba(var(--rgb),0.35)" }}>
                        {service.description}
                      </p>
                    </div>
                    <ArrowUpRight size={14} className="flex-shrink-0 mt-1 transition-all duration-200"
                      style={{
                        color: isActive ? "rgba(var(--rgb),0.55)" : "rgba(var(--rgb),0.15)",
                        transform: isActive ? "translate(2px,-2px)" : "none",
                      }} />
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Right — sticky image panel (desktop only) */}
          <div className="hidden lg:block sticky top-24 self-start">
            <div className="relative border overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.12)", aspectRatio: "4/3" }}>
              {/* Corner accents */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t border-l z-10 pointer-events-none"
                style={{ borderColor: "rgba(var(--rgb),0.35)" }} />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b border-r z-10 pointer-events-none"
                style={{ borderColor: "rgba(var(--rgb),0.35)" }} />

              {/* All images always in DOM — CSS opacity crossfade, no AnimatePresence timing issues */}
              {serviceImages.map((src, i) => (
                <div
                  key={i}
                  className="absolute inset-0"
                  style={{
                    opacity: i === activeIndex ? 1 : 0,
                    transform: i === activeIndex ? "scale(1)" : "scale(1.03)",
                    transition: "opacity 0.45s ease-in-out, transform 0.45s ease-in-out",
                    willChange: "opacity, transform",
                  }}>
                  <Image
                    src={src}
                    alt={services[i].title}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    unoptimized
                  />
                </div>
              ))}

              {/* Gradient overlay — always on top */}
              <div className="absolute inset-0 z-[1] pointer-events-none"
                style={{ background: "linear-gradient(to top, rgba(0,0,0,0.65) 0%, rgba(0,0,0,0.08) 45%, transparent 70%)" }} />

              {/* Service label — CSS crossfade via opacity on each label */}
              <div className="absolute bottom-0 left-0 right-0 z-10 p-5">
                {services.map((service, i) => (
                  <div
                    key={i}
                    className="absolute bottom-5 left-5"
                    style={{
                      opacity: i === activeIndex ? 1 : 0,
                      transform: i === activeIndex ? "translateY(0)" : "translateY(6px)",
                      transition: "opacity 0.3s ease-out, transform 0.3s ease-out",
                      pointerEvents: "none",
                    }}>
                    <span className="font-mono text-[0.55rem] tracking-[0.22em] uppercase block mb-1"
                      style={{ color: "rgba(255,255,255,0.38)" }}>
                      {service.number}
                    </span>
                    <h4 className="font-display text-[0.95rem]" style={{ fontWeight: 500, color: "rgba(255,255,255,0.92)" }}>
                      {service.title}
                    </h4>
                  </div>
                ))}
              </div>
            </div>

            {/* Progress dots */}
            <div className="flex items-center gap-2 mt-4 justify-end">
              {services.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className="rounded-full transition-all duration-200 cursor-pointer"
                  style={{
                    width: i === activeIndex ? 16 : 4,
                    height: 4,
                    backgroundColor: i === activeIndex ? "rgba(var(--rgb),0.7)" : "rgba(var(--rgb),0.2)",
                  }} />
              ))}
            </div>
          </div>
        </div>

        {/* Footer link */}
        <div className="mt-10 flex justify-end">
          <Link href="/services"
            className="inline-flex items-center gap-2 text-xs font-medium tracking-wider uppercase transition-colors duration-200"
            style={{ color: "rgba(var(--rgb),0.35)" }}
            onMouseEnter={e => (e.currentTarget.style.color = "var(--text-solid)")}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(var(--rgb),0.35)")}>
            {t("sv_all")} <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>
    </section>
  );
}
