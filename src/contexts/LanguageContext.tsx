"use client";

import { createContext, useContext, useState, useEffect, type ReactNode } from "react";
import { translations, type Lang, type TKey } from "@/lib/translations";

interface LangCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: TKey) => string;
  isRTL: boolean;
}

const Ctx = createContext<LangCtx>({
  lang: "en",
  setLang: () => {},
  t: (k) => translations.en[k],
  isRTL: false,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = localStorage.getItem("algora-lang") as Lang | null;
    if (saved && translations[saved]) apply(saved);
  }, []);

  function apply(l: Lang) {
    setLangState(l);
    localStorage.setItem("algora-lang", l);
    document.documentElement.lang = l;
    document.documentElement.dir = l === "ar" ? "rtl" : "ltr";
  }

  function t(k: TKey): string {
    return (translations[lang] as Record<string, string>)[k] ?? translations.en[k];
  }

  return (
    <Ctx.Provider value={{ lang, setLang: apply, t, isRTL: lang === "ar" }}>
      {children}
    </Ctx.Provider>
  );
}

export const useLanguage = () => useContext(Ctx);
