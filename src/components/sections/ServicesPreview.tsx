"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Smartphone, Monitor, Cpu, Bot, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const serviceIcons = [Globe, Smartphone, Monitor, Cpu, Bot];
const serviceHrefs = ["/services#web", "/services#mobile", "/services#desktop", "/services#automation", "/services#ai"];

export default function ServicesPreview() {
  const { t } = useLanguage();

  const services = [
    { number: "01", icon: serviceIcons[0], title: t("sv_01_title"), description: t("sv_01_desc"), href: serviceHrefs[0] },
    { number: "02", icon: serviceIcons[1], title: t("sv_02_title"), description: t("sv_02_desc"), href: serviceHrefs[1] },
    { number: "03", icon: serviceIcons[2], title: t("sv_03_title"), description: t("sv_03_desc"), href: serviceHrefs[2] },
    { number: "04", icon: serviceIcons[3], title: t("sv_04_title"), description: t("sv_04_desc"), href: serviceHrefs[3] },
    { number: "05", icon: serviceIcons[4], title: t("sv_05_title"), description: t("sv_05_desc"), href: serviceHrefs[4] },
  ];

  return (
    <section className="relative py-28 border-t overflow-hidden" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
      {/* ── Purple background elements ── */}

      {/* Glow — top left */}
      <div className="absolute -top-32 -left-32 w-[520px] h-[520px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.16) 0%, transparent 65%)", filter: "blur(48px)" }} />

      {/* Glow — bottom right counterpoint */}
      <div className="absolute -bottom-24 -right-24 w-[380px] h-[380px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(139,92,246,0.11) 0%, transparent 65%)", filter: "blur(40px)", animationDelay: "3s" }} />

      {/* Left vertical accent line */}
      <div className="absolute left-0 inset-y-0 w-px pointer-events-none" aria-hidden
        style={{ background: "linear-gradient(to bottom, transparent 8%, rgba(139,92,246,0.4) 28%, rgba(139,92,246,0.4) 72%, transparent 92%)" }} />

      {/* Corner bracket — top right */}
      <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.35)" }} />

      {/* Corner bracket — bottom left */}
      <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(139,92,246,0.35)", animationDelay: "2.5s" }} />

      {/* Small accent dots */}
      <div className="absolute top-16 right-20 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.55)" }} />
      <div className="absolute top-[4.5rem] right-[5.75rem] w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.3)", animationDelay: "1s" }} />
      <div className="absolute bottom-14 right-28 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(139,92,246,0.4)", animationDelay: "2s" }} />

      {/* Right-edge horizontal tick marks */}
      <div className="absolute right-0 top-1/3 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[14, 8, 18, 8, 14].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(139,92,246,0.25)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">

        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block" style={{ color: "rgba(var(--rgb),0.35)" }}>
              {t("sv_label")}
            </span>
            <h2 className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]" style={{ fontWeight: 600 }}>
              {t("sv_title1")}<br />{t("sv_title2")}
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right leading-relaxed" style={{ color: "rgba(var(--rgb),0.4)" }}>
            {t("sv_sub")}
          </p>
        </motion.div>

        <div className="divide-y" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          {services.map((service, i) => {
            const Icon = service.icon;
            return (
              <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.45, delay: i * 0.06 }}>
                <Link href={service.href}
                  className="group flex items-center gap-6 sm:gap-10 py-6 sm:py-7 transition-colors duration-150 -mx-6 px-6"
                  style={{ backgroundColor: "transparent" }}
                  onMouseEnter={e => (e.currentTarget.style.backgroundColor = "rgba(var(--rgb),0.018)")}
                  onMouseLeave={e => (e.currentTarget.style.backgroundColor = "transparent")}>
                  <span className="font-mono text-[0.65rem] tracking-wider flex-shrink-0 w-6" style={{ color: "rgba(var(--rgb),0.18)" }}>
                    {service.number}
                  </span>
                  <div className="w-9 h-9 flex items-center justify-center flex-shrink-0 border transition-colors duration-200"
                    style={{ borderColor: "rgba(var(--rgb),0.1)", backgroundColor: "rgba(var(--rgb),0.02)" }}>
                    <Icon size={14} style={{ color: "rgba(var(--rgb),0.35)" }} />
                  </div>
                  <h3 className="font-display text-base sm:text-lg flex-shrink-0 sm:w-52" style={{ fontWeight: 500, color: "var(--text-solid)" }}>
                    {service.title}
                  </h3>
                  <p className="text-sm flex-1 leading-relaxed hidden md:block" style={{ color: "rgba(var(--rgb),0.35)" }}>
                    {service.description}
                  </p>
                  <ArrowUpRight size={15} className="flex-shrink-0 ml-auto transition-all duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    style={{ color: "rgba(var(--rgb),0.2)" }} />
                </Link>
              </motion.div>
            );
          })}
        </div>

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
