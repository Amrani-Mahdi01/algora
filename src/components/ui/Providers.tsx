"use client";

import { LanguageProvider } from "@/contexts/LanguageContext";
import PageLoader from "@/components/ui/PageLoader";
import type { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <LanguageProvider>
      <PageLoader />
      {children}
    </LanguageProvider>
  );
}
