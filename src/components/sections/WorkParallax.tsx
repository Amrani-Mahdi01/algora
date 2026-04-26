"use client";

import { HeroParallax } from "@/components/ui/HeroParallax";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";

const PRODUCTS = [
  // Row 1 (right → left)
  { title: "Finflow",     category: "FinTech · SaaS",        accent: "#8B5CF6", image: "/card-2.png",           tags: ["Next.js", "FastAPI"] },
  { title: "MediTrack",   category: "Healthcare · Platform",  accent: "#01B673", image: "/card-3.png",           tags: ["React Native", "Node.js"] },
  { title: "Layla",       category: "AI · Enterprise",        accent: "#8B5CF6", image: "/card-5.png",           tags: ["LangChain", "GPT-4o"] },
  { title: "LogiTrack",   category: "Logistics · Ops",        accent: "#01B673", image: "/card-4.png",           tags: ["Vue.js", "PostgreSQL"] },
  { title: "EduPath",     category: "EdTech · Platform",      accent: "#8B5CF6", image: "/card-6.png",           tags: ["React", "Supabase"] },
  // Row 2 (left → right)
  { title: "Commerce OS", category: "E-Commerce · Platform",  accent: "#01B673", image: "/placeholder-card.png", tags: ["GraphQL", "TypeScript"] },
  { title: "ReachCRM",    category: "CRM · Automation",       accent: "#8B5CF6", image: "/card-5.png",           tags: ["React", "Supabase"] },
  { title: "FleetOS",     category: "Transport · SaaS",       accent: "#01B673", image: "/card-4.png",           tags: ["Go", "Redis"] },
  { title: "DataVault",   category: "Data · Infrastructure",  accent: "#8B5CF6", image: "/card-2.png",           tags: ["Kafka", "Snowflake"] },
  { title: "NexusAPI",    category: "Developer · Tools",      accent: "#01B673", image: "/card-6.png",           tags: ["Rust", "Kubernetes"] },
];

const COPY = {
  en: { label: "Our Work",    title1: "Built Across",        title2: "Industries.", sub: "A selection of products engineered for clients worldwide." },
  fr: { label: "Nos Projets", title1: "Construit à Travers", title2: "les Secteurs.", sub: "Une sélection de produits développés pour nos clients dans le monde entier." },
  ar: { label: "أعمالنا",     title1: "مبني عبر",            title2: "القطاعات.",    sub: "مجموعة مختارة من المنتجات المطورة لعملائنا حول العالم." },
};

type Lang = "en" | "fr" | "ar";

export default function WorkParallax() {
  const { lang, isRTL } = useLanguage();
  const C = COPY[lang as Lang] ?? COPY.en;

  const header = (
    <div className="max-w-2xl">
      <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
        <ShinyText text={C.label} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
      </span>
      <h2
        className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem] mb-5"
        style={{ fontWeight: 600 }}
      >
        {C.title1}<br />{C.title2}
      </h2>
      <p
        className="text-sm leading-relaxed"
        style={{ color: "rgba(var(--rgb),0.38)" }}
      >
        {C.sub}
      </p>
    </div>
  );

  return (
    <section
      className="relative border-t overflow-hidden"
      style={{ borderColor: "rgba(var(--rgb),0.1)" }}
    >
      {/* Glows */}
      <div className="absolute -top-24 -right-24 w-[460px] h-[460px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.05) 0%, transparent 65%)", filter: "blur(48px)" }} />
      <div className="absolute bottom-1/3 -left-20 w-[340px] h-[340px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(40px)", animationDelay: "3s" }} />

      {/* Corner brackets */}
      <div className="absolute top-7 left-7 w-5 h-5 border-t border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.12)" }} />
      <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "2.5s" }} />

      {/* Dots */}
      <div className="absolute top-16 left-1/2 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.18)" }} />

      {/* Tick marks */}
      <div className="absolute right-0 top-1/3 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[14, 8, 20, 8, 14].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(var(--rgb),0.08)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <HeroParallax products={PRODUCTS} header={header} isRTL={isRTL} />
    </section>
  );
}
