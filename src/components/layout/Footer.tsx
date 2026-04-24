"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const footerLinks = {
  Services: [
    { label: "Web Applications", href: "/services#web" },
    { label: "Mobile Apps",       href: "/services#mobile" },
    { label: "Desktop Software",  href: "/services#desktop" },
    { label: "Automation",        href: "/services#automation" },
    { label: "AI Solutions",      href: "/services#ai" },
  ],
  Company: [
    { label: "About",   href: "/about" },
    { label: "Work",    href: "/work" },
    { label: "Contact", href: "/contact" },
  ],
};

const socials = [
  {
    label: "LinkedIn", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>,
  },
  {
    label: "GitHub", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>,
  },
  {
    label: "X", href: "#",
    icon: <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>,
  },
];

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="border-t" style={{ borderColor: "rgba(var(--rgb),0.1)", backgroundColor: "var(--bg)" }}>
      <div className="max-w-7xl mx-auto px-6 pt-16 pb-8">

        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5 group w-fit">
              <div className="w-7 h-7">
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 3L29 27H3L16 3Z"
                    style={{ stroke: "var(--text-solid)", fill: "rgba(var(--rgb),0.06)" }}
                    strokeWidth="2" strokeLinejoin="round" />
                  <path d="M10 20H22"
                    style={{ stroke: "var(--text-solid)" }}
                    strokeWidth="2" strokeLinecap="round" />
                </svg>
              </div>
              <span className="font-display text-sm uppercase tracking-[0.1em]" style={{ fontWeight: 800, color: "var(--text-solid)" }}>
                ALGORA
              </span>
            </Link>
            <p className="text-sm leading-relaxed max-w-[280px]" style={{ color: "rgba(var(--rgb),0.45)" }}>
              {t("ft_tag")}
            </p>
            <div className="flex items-center gap-3 mt-6">
              {socials.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center border transition-all duration-200"
                  style={{ borderColor: "rgba(var(--rgb),0.1)", color: "rgba(var(--rgb),0.4)" }}
                  onMouseEnter={e => { e.currentTarget.style.color = "var(--text-solid)"; e.currentTarget.style.backgroundColor = "rgba(var(--rgb),0.06)"; }}
                  onMouseLeave={e => { e.currentTarget.style.color = "rgba(var(--rgb),0.4)"; e.currentTarget.style.backgroundColor = "transparent"; }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-xs font-semibold uppercase tracking-[0.12em] mb-4" style={{ color: "rgba(var(--rgb),0.35)" }}>
                {category}
              </h3>
              <ul className="flex flex-col gap-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href}
                      className="text-sm transition-colors duration-200"
                      style={{ color: "rgba(var(--rgb),0.45)" }}
                      onMouseEnter={e => (e.currentTarget.style.color = "var(--text-solid)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(var(--rgb),0.45)")}>
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs"
          style={{ borderColor: "rgba(var(--rgb),0.08)", color: "rgba(var(--rgb),0.3)" }}>
          <p>© {new Date().getFullYear()} Algora. {t("ft_copy")}</p>
          <p>{t("ft_loc")}</p>
        </div>

      </div>
    </footer>
  );
}
