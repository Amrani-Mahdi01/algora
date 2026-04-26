"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import type { Lang } from "@/lib/translations";

const LANGS: { code: Lang; label: string }[] = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
];

function AlgoraLogo() {
  return (
    <Link href="/" className="flex items-center gap-3 group" aria-label="Algora home">
      <div className="w-8 h-8 flex-shrink-0">
        <svg viewBox="0 0 32 32" fill="none" className="w-full h-full">
          <path d="M16 3L29 27H3L16 3Z" stroke="var(--text-solid)" strokeWidth="2" strokeLinejoin="round" fill="rgba(var(--rgb),0.06)" />
          <path d="M10 20H22" stroke="var(--text-solid)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>
      <span className="font-display text-[1.05rem] uppercase tracking-[0.1em]"
        style={{ fontWeight: 700, color: "var(--text-solid)" }}>
        ALGORA
      </span>
    </Link>
  );
}

function LangToggle() {
  const { lang, setLang } = useLanguage();
  return (
    <div className="flex items-center border divide-x" style={{ borderColor: "rgba(var(--rgb),0.12)", '--tw-divide-opacity': 1 } as React.CSSProperties}>
      {LANGS.map(({ code, label }) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          className="px-2.5 py-1.5 font-mono text-[0.62rem] tracking-wider uppercase transition-colors duration-150"
          style={{
            color: lang === code ? "var(--text-solid)" : "rgba(var(--rgb),0.35)",
            backgroundColor: lang === code ? "rgba(var(--rgb),0.08)" : "transparent",
          }}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { t } = useLanguage();

  const navLinks = [
    { label: t("nav_home"),     href: "/" },
    { label: t("nav_services"), href: "/services" },
    { label: t("nav_about"),    href: "#" },
    { label: t("nav_blogs"),    href: "#" },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <header className={cn("fixed top-0 left-0 right-0 z-50 transition-all duration-500", scrolled ? "glass py-3" : "bg-transparent py-5")}>
        <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-4">
          <AlgoraLogo />

          <ul className="hidden md:flex items-center gap-9 flex-1 justify-center">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href}
                  className="relative text-sm font-medium transition-colors duration-200 group"
                  style={{ color: "rgba(var(--rgb),0.6)" }}>
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px group-hover:w-full transition-all duration-300"
                    style={{ backgroundColor: "var(--text-solid)" }} />
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-2">
            <LangToggle />
            <Link href="#contact"
              className="ml-2 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-85"
              style={{ backgroundColor: "var(--text-solid)", color: "var(--bg)" }}>
              {t("nav_cta")}
            </Link>
          </div>

          <button className="md:hidden transition-colors" onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu" style={{ color: "rgba(var(--rgb),0.6)" }}>
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 28, stiffness: 260 }}
            className="fixed inset-0 z-40 glass-bright flex flex-col pt-24 px-6 pb-10 md:hidden"
          >
            <div className="flex items-center gap-3 mb-10">
              <LangToggle />
            </div>

            <ul className="flex flex-col gap-7">
              {navLinks.map((link, i) => (
                <motion.li key={link.label} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.07 }}>
                  <Link href={link.href} onClick={() => setMobileOpen(false)}
                    className="text-2xl font-display transition-colors"
                    style={{ fontWeight: 600, color: "var(--text-solid)" }}>
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>

            <div className="mt-auto">
              <Link href="#contact" onClick={() => setMobileOpen(false)}
                className="block w-full text-center py-4 font-semibold text-base transition-opacity hover:opacity-85"
                style={{ backgroundColor: "var(--text-solid)", color: "var(--bg)" }}>
                {t("nav_cta")} →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
