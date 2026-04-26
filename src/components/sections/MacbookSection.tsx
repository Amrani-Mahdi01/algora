"use client";

import { MacbookScroll } from "@/components/ui/macbook-scroll";
import { useLanguage } from "@/contexts/LanguageContext";

export default function MacbookSection() {
  const { t } = useLanguage();

  return (
    <div className="overflow-hidden border-t" style={{ borderColor: "rgba(var(--rgb),0.1)" }}>
      <MacbookScroll
        src="/all-in-one.png"
        showGradient={false}
        title={
          <span
            className="font-display title-gradient-text text-3xl sm:text-4xl lg:text-5xl leading-tight"
            style={{ fontWeight: 600 }}
          >
            {t("mac_title")}<br />
            <span style={{ color: "rgba(var(--rgb),0.45)", fontWeight: 400, fontSize: "0.6em" }}>
              {t("mac_sub")}
            </span>
          </span>
        }
      />
    </div>
  );
}
