import type { Metadata } from "next";
import { Inter, Cairo } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { Providers } from "@/components/ui/Providers";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600"],
});

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Algora — Premium Software Agency",
    template: "%s | Algora",
  },
  description:
    "Algora builds world-class web apps, mobile solutions, automation systems, and AI-powered products for ambitious businesses in Algeria and worldwide.",
  keywords: ["software agency", "web development", "mobile apps", "AI solutions", "Algeria", "custom software"],
  openGraph: {
    title: "Algora — Premium Software Agency",
    description: "We engineer software that transforms businesses. Based in Algeria, working worldwide.",
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${GeistSans.variable} ${cairo.variable} h-full`} suppressHydrationWarning>
      <body className="text-base font-sans antialiased min-h-full flex flex-col overflow-x-hidden">
        <Providers>
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
