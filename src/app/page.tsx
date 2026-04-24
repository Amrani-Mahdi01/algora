import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import ServicesPreview from "@/components/sections/ServicesPreview";
import TechStack from "@/components/sections/TechStack";
import Process from "@/components/sections/Process";
import FeaturedWork from "@/components/sections/FeaturedWork";
import WorkParallax from "@/components/sections/WorkParallax";
import Industries from "@/components/sections/Industries";
import Testimonials from "@/components/sections/Testimonials";
import Insights from "@/components/sections/Insights";
import CTABanner from "@/components/sections/CTABanner";
import Contact from "@/components/sections/Contact";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <TechStack />
      <Process />
      <FeaturedWork />
      <WorkParallax />
      <Industries />
      <Testimonials />
      <Insights />
      <CTABanner />
      <Contact />
    </>
  );
}
