"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import ShinyText from "@/components/ui/ShinyText";

const SERVICE_OPTS = [
  { id: "web",        en: "Web Application",  fr: "Application Web",    ar: "تطبيق ويب" },
  { id: "mobile",     en: "Mobile App",        fr: "Application Mobile", ar: "تطبيق موبايل" },
  { id: "desktop",    en: "Desktop Software",  fr: "Logiciel Desktop",   ar: "برنامج سطح مكتب" },
  { id: "ai",         en: "AI Solutions",      fr: "Solutions IA",       ar: "حلول الذكاء الاصطناعي" },
  { id: "automation", en: "Automation",        fr: "Automatisation",     ar: "أتمتة" },
  { id: "other",      en: "Other",             fr: "Autre",              ar: "أخرى" },
];

const BUDGETS: Record<string, { en: string; fr: string; ar: string }> = {
  "":        { en: "Select budget range",  fr: "Sélectionner le budget", ar: "اختر نطاق الميزانية" },
  "<10k":    { en: "Under $10k",           fr: "Moins de 10k€",          ar: "أقل من $10k" },
  "10-50k":  { en: "$10k – $50k",          fr: "10k€ – 50k€",            ar: "$10k – $50k" },
  "50-150k": { en: "$50k – $150k",         fr: "50k€ – 150k€",           ar: "$50k – $150k" },
  "150k+":   { en: "$150k+",               fr: "150k€+",                 ar: "$150k+" },
  "discuss": { en: "Let's discuss",        fr: "À discuter",             ar: "نناقش معاً" },
};

const TIMELINES: Record<string, { en: string; fr: string; ar: string }> = {
  "":       { en: "Select timeline",      fr: "Sélectionner le délai",  ar: "اختر الجدول الزمني" },
  "asap":   { en: "As soon as possible",  fr: "Dès que possible",       ar: "في أقرب وقت ممكن" },
  "1month": { en: "Within 1 month",       fr: "Sous 1 mois",            ar: "خلال شهر واحد" },
  "1-3m":   { en: "1 – 3 months",         fr: "1 – 3 mois",             ar: "1 – 3 أشهر" },
  "3-6m":   { en: "3 – 6 months",         fr: "3 – 6 mois",             ar: "3 – 6 أشهر" },
  "6m+":    { en: "6+ months",            fr: "6+ mois",                ar: "أكثر من 6 أشهر" },
};

const LABELS = {
  en: {
    label: "Get in Touch",
    title1: "Start Your",
    title2: "Project.",
    sub: "Tell us about what you're building. We'll review your brief and get back within 24 hours.",
    name: "Full name", namePh: "Jane Smith",
    email: "Work email", emailPh: "jane@company.com",
    company: "Company", companyPh: "Acme Corp",
    role: "Your role", rolePh: "CTO / Founder / Product Manager",
    services: "What are you looking to build?",
    budget: "Estimated budget",
    timeline: "Timeline",
    message: "Tell us about your project",
    messagePh: "Describe your project, goals, constraints, and what success looks like...",
    submit: "Send Message",
    sending: "Sending...",
    successTitle: "Message received.",
    successBody: "We'll review your brief and reach out within 24 hours.",
    strip: [
      { label: "Response time", value: "< 24 hours" },
      { label: "Based in",      value: "Algeria, DZ" },
      { label: "Available",     value: "Worldwide"   },
      { label: "Founded",       value: "2019"        },
    ],
  },
  fr: {
    label: "Contactez-nous",
    title1: "Démarrons",
    title2: "Votre Projet.",
    sub: "Parlez-nous de ce que vous construisez. Nous examinerons votre brief et répondrons sous 24h.",
    name: "Nom complet", namePh: "Jean Dupont",
    email: "Email professionnel", emailPh: "jean@entreprise.com",
    company: "Entreprise", companyPh: "Acme Corp",
    role: "Votre rôle", rolePh: "CTO / Fondateur / Chef de produit",
    services: "Qu'est-ce que vous souhaitez construire ?",
    budget: "Budget estimé",
    timeline: "Délai",
    message: "Parlez-nous de votre projet",
    messagePh: "Décrivez votre projet, vos objectifs, contraintes et ce que représente le succès...",
    submit: "Envoyer",
    sending: "Envoi...",
    successTitle: "Message reçu.",
    successBody: "Nous examinerons votre brief et vous contacterons sous 24 heures.",
    strip: [
      { label: "Délai de réponse", value: "< 24 heures" },
      { label: "Basé en",          value: "Algérie, DZ"  },
      { label: "Disponible",       value: "Mondial"      },
      { label: "Fondé en",         value: "2019"         },
    ],
  },
  ar: {
    label: "تواصل معنا",
    title1: "ابدأ",
    title2: "مشروعك.",
    sub: "أخبرنا بما تبنيه. سنراجع ملخصك ونتواصل معك خلال 24 ساعة.",
    name: "الاسم الكامل", namePh: "أحمد المنصوري",
    email: "البريد المهني", emailPh: "ahmed@company.com",
    company: "الشركة", companyPh: "شركة المثال",
    role: "دورك", rolePh: "مدير تقني / مؤسس / مدير منتج",
    services: "ماذا تريد أن تبني؟",
    budget: "الميزانية التقديرية",
    timeline: "الجدول الزمني",
    message: "أخبرنا عن مشروعك",
    messagePh: "صف مشروعك وأهدافك وأي قيود وما يمثله النجاح...",
    submit: "إرسال الرسالة",
    sending: "جارٍ الإرسال...",
    successTitle: "تم استلام رسالتك.",
    successBody: "سنراجع ملخصك ونتواصل معك خلال 24 ساعة.",
    strip: [
      { label: "وقت الرد",  value: "أقل من 24 ساعة" },
      { label: "مقرنا في",  value: "الجزائر"         },
      { label: "متاحون",    value: "عالمياً"         },
      { label: "تأسست",     value: "2019"            },
    ],
  },
};

type Lang = "en" | "fr" | "ar";

export default function Contact() {
  const { lang } = useLanguage();
  const L = LABELS[lang as Lang] ?? LABELS.en;

  const [services, setServices] = useState<string[]>([]);
  const [form, setForm] = useState({ name: "", email: "", company: "", role: "", budget: "", timeline: "", message: "" });
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const toggle = (id: string) =>
    setServices(prev => prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]);

  const set = (key: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(prev => ({ ...prev, [key]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise(r => setTimeout(r, 1400));
    setStatus("done");
  };

  const inputClass = "w-full px-4 py-3 text-sm border transition-colors duration-200";

  const fieldStyle = (key: string): React.CSSProperties => ({
    backgroundColor: "rgba(var(--rgb),0.03)",
    borderColor: focused === key ? "rgba(var(--rgb),0.3)" : "rgba(var(--rgb),0.1)",
    color: "var(--text-solid)",
    outline: "none",
  });

  return (
    <section id="contact" className="relative py-28 border-t overflow-hidden"
      style={{ borderColor: "rgba(var(--rgb),0.1)" }}>

      {/* ── Background elements ── */}
      <div className="absolute -top-24 -right-24 w-[500px] h-[500px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.05) 0%, transparent 65%)", filter: "blur(52px)" }} />
      <div className="absolute -bottom-20 -left-20 w-[380px] h-[380px] pointer-events-none animate-glow-breathe" aria-hidden
        style={{ background: "radial-gradient(circle, rgba(var(--rgb),0.04) 0%, transparent 65%)", filter: "blur(44px)", animationDelay: "3s" }} />
      <div className="absolute left-0 inset-y-0 w-px pointer-events-none" aria-hidden
        style={{ background: "linear-gradient(to bottom, transparent 8%, rgba(var(--rgb),0.1) 28%, rgba(var(--rgb),0.1) 72%, transparent 92%)" }} />
      <div className="absolute top-7 right-7 w-5 h-5 border-t border-r pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.12)" }} />
      <div className="absolute bottom-7 left-7 w-5 h-5 border-b border-l pointer-events-none animate-bracket-fade" aria-hidden
        style={{ borderColor: "rgba(var(--rgb),0.12)", animationDelay: "2.5s" }} />
      <div className="absolute top-[4.5rem] left-20 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.18)" }} />
      <div className="absolute top-16 left-[5.75rem] w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.1)", animationDelay: "1s" }} />
      <div className="absolute bottom-20 right-24 w-1 h-1 pointer-events-none animate-dot-blink" aria-hidden
        style={{ backgroundColor: "rgba(var(--rgb),0.12)", animationDelay: "2s" }} />
      <div className="absolute right-0 top-2/3 flex flex-col gap-3 pointer-events-none" aria-hidden>
        {[14, 8, 18, 8, 14].map((w, i) => (
          <div key={i} className="h-px animate-tick-shift" style={{ width: w, backgroundColor: "rgba(var(--rgb),0.08)", animationDelay: `${i * 0.18}s` }} />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Header — matches other sections */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 pb-10 border-b"
          style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
          <div>
            <span className="font-mono text-[0.6rem] tracking-[0.2em] uppercase mb-4 block">
              <ShinyText text={L.label} speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
            </span>
            <h2 className="font-display title-gradient-text text-3xl sm:text-[2.2rem] lg:text-[2.6rem]"
              style={{ fontWeight: 600 }}>
              {L.title1}<br />{L.title2}
            </h2>
          </div>
          <p className="text-sm max-w-xs lg:text-right leading-relaxed">
            <ShinyText text={L.sub} speed={10} color="rgba(var(--rgb),0.35)" shineColor="rgba(var(--rgb),0.65)" />
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          {status === "done" ? (
            <motion.div key="success"
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.45 }}
              className="flex flex-col items-start gap-4 py-20">
              <div className="w-10 h-10 border flex items-center justify-center mb-2"
                style={{ borderColor: "rgba(var(--rgb),0.2)", backgroundColor: "rgba(var(--rgb),0.04)" }}>
                <Check size={16} style={{ color: "var(--text-solid)" }} />
              </div>
              <h3 className="font-display text-2xl title-gradient-text" style={{ fontWeight: 600 }}>
                {L.successTitle}
              </h3>
              <p className="text-sm max-w-sm leading-relaxed" style={{ color: "rgba(var(--rgb),0.45)" }}>
                {L.successBody}
              </p>
            </motion.div>
          ) : (
            <motion.form key="form" onSubmit={submit}
              initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">

              {/* ── Left ── */}
              <div className="flex flex-col gap-8">

                {/* 01 Contact */}
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase mb-5">
                    <ShinyText text="01 — Contact" speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
                  </p>
                  <div className="flex flex-col gap-3">
                    {([
                      { key: "name",    label: L.name,    ph: L.namePh,    type: "text",  req: true  },
                      { key: "email",   label: L.email,   ph: L.emailPh,   type: "email", req: true  },
                      { key: "company", label: L.company, ph: L.companyPh, type: "text",  req: true  },
                      { key: "role",    label: L.role,    ph: L.rolePh,    type: "text",  req: false },
                    ] as const).map(f => (
                      <div key={f.key}>
                        <label className="block text-xs mb-1.5" style={{ color: "rgba(var(--rgb),0.4)" }}>{f.label}</label>
                        <input required={f.req} type={f.type}
                          value={form[f.key as keyof typeof form]}
                          onChange={set(f.key)} placeholder={f.ph}
                          className={inputClass} style={fieldStyle(f.key)}
                          onFocus={() => setFocused(f.key)} onBlur={() => setFocused(null)} />
                      </div>
                    ))}
                  </div>
                </div>

                {/* 02 Services */}
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase mb-5">
                    <ShinyText text="02 — Services" speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
                  </p>
                  <label className="block text-xs mb-3" style={{ color: "rgba(var(--rgb),0.4)" }}>{L.services}</label>
                  <div className="grid grid-cols-2 gap-2">
                    {SERVICE_OPTS.map(s => {
                      const active = services.includes(s.id);
                      return (
                        <button key={s.id} type="button" onClick={() => toggle(s.id)}
                          className="text-left px-4 py-3 text-xs border transition-all duration-150"
                          style={{
                            borderColor: active ? "rgba(var(--rgb),0.4)" : "rgba(var(--rgb),0.1)",
                            backgroundColor: active ? "rgba(var(--rgb),0.07)" : "transparent",
                            color: active ? "var(--text-solid)" : "rgba(var(--rgb),0.4)",
                          }}>
                          <span className="font-mono mr-2" style={{ color: active ? "rgba(var(--rgb),0.5)" : "rgba(var(--rgb),0.2)" }}>
                            {active ? "✓" : "○"}
                          </span>
                          {lang === "ar" ? s.ar : lang === "fr" ? s.fr : s.en}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* ── Right ── */}
              <div className="flex flex-col gap-8">

                {/* 03 Scope */}
                <div>
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase mb-5">
                    <ShinyText text="03 — Scope" speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
                  </p>
                  <div className="flex flex-col gap-3">
                    <div>
                      <label className="block text-xs mb-1.5" style={{ color: "rgba(var(--rgb),0.4)" }}>{L.budget}</label>
                      <select required value={form.budget} onChange={set("budget")}
                        className={inputClass + " appearance-none cursor-pointer"}
                        style={fieldStyle("budget")}
                        onFocus={() => setFocused("budget")} onBlur={() => setFocused(null)}>
                        {Object.entries(BUDGETS).map(([val, lbl]) => (
                          <option key={val} value={val} style={{ backgroundColor: "#0a0a0a" }}>
                            {lang === "ar" ? lbl.ar : lang === "fr" ? lbl.fr : lbl.en}
                          </option>
                        ))}
                      </select>
                    </div>
                    <div>
                      <label className="block text-xs mb-1.5" style={{ color: "rgba(var(--rgb),0.4)" }}>{L.timeline}</label>
                      <select required value={form.timeline} onChange={set("timeline")}
                        className={inputClass + " appearance-none cursor-pointer"}
                        style={fieldStyle("timeline")}
                        onFocus={() => setFocused("timeline")} onBlur={() => setFocused(null)}>
                        {Object.entries(TIMELINES).map(([val, lbl]) => (
                          <option key={val} value={val} style={{ backgroundColor: "#0a0a0a" }}>
                            {lang === "ar" ? lbl.ar : lang === "fr" ? lbl.fr : lbl.en}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                {/* 04 Project Brief */}
                <div className="flex-1 flex flex-col">
                  <p className="font-mono text-[0.6rem] tracking-[0.18em] uppercase mb-5">
                    <ShinyText text="04 — Project Brief" speed={7} color="rgba(var(--rgb),0.3)" shineColor="rgba(var(--rgb),0.7)" />
                  </p>
                  <label className="block text-xs mb-1.5" style={{ color: "rgba(var(--rgb),0.4)" }}>{L.message}</label>
                  <textarea required value={form.message} onChange={set("message")}
                    placeholder={L.messagePh} rows={8}
                    className={inputClass + " resize-none leading-relaxed"}
                    style={fieldStyle("message")}
                    onFocus={() => setFocused("message")} onBlur={() => setFocused(null)} />
                </div>

                {/* Submit */}
                <button type="submit" disabled={status === "sending"}
                  className="group self-start inline-flex items-center gap-3 px-8 py-3.5 text-sm font-semibold transition-opacity duration-200 hover:opacity-85 disabled:opacity-50"
                  style={{ backgroundColor: "var(--text-solid)", color: "var(--bg)" }}>
                  {status === "sending"
                    ? <><Loader2 size={14} className="animate-spin" />{L.sending}</>
                    : <>{L.submit}<ArrowRight size={14} className="transition-transform duration-200 group-hover:translate-x-1" /></>
                  }
                </button>

              </div>
            </motion.form>
          )}
        </AnimatePresence>

        {/* Info strip */}
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ delay: 0.2, duration: 0.6 }}
          className="mt-20 pt-8 border-t grid grid-cols-2 md:grid-cols-4 gap-8"
          style={{ borderColor: "rgba(var(--rgb),0.08)" }}>
          {L.strip.map(item => (
            <div key={item.label}>
              <p className="font-mono text-[0.58rem] tracking-widest uppercase mb-1"
                style={{ color: "rgba(var(--rgb),0.2)" }}>{item.label}</p>
              <p className="text-sm" style={{ color: "rgba(var(--rgb),0.5)" }}>{item.value}</p>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
