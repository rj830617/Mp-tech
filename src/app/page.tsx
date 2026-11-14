import { CtaBand } from "@/components/sections/CtaBand";
import { ClientMarquee } from "@/components/sections/home/ClientMarquee";
import { FeaturedWork } from "@/components/sections/home/FeaturedWork";
import { Hero } from "@/components/sections/home/Hero";
import { Process } from "@/components/sections/home/Process";
import { ServicesOverview } from "@/components/sections/home/ServicesOverview";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { WhyUs } from "@/components/sections/home/WhyUs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ClientMarquee />
      <ServicesOverview />
      <Process />
      <FeaturedWork />
      <WhyUs />
      <Testimonials />
      <CtaBand />
    </>
  );
}
