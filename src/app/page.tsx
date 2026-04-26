import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import AboutSection from "@/components/sections/AboutSection";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import MacbookSection from "@/components/sections/MacbookSection";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WorkParallax from "@/components/sections/WorkParallax";
import Industries from "@/components/sections/Industries";
import Insights from "@/components/sections/Insights";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <AboutSection />
      <ServicesPreview />
      <TechStack />
      <Process />
      <MacbookSection />
      <FeaturedWork />
      <WorkParallax />
      <Industries />
      <Insights />
      <CTABanner />
      <Contact />
    </>
  );
}
