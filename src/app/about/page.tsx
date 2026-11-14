import type { Metadata } from "next";
import { Story } from "@/components/sections/about/Story";
import { Team } from "@/components/sections/about/Team";
import { Values } from "@/components/sections/about/Values";
import { CtaBand } from "@/components/sections/CtaBand";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Meet MP Tecc, a content-first digital marketing agency in Indore. Learn about our story, values and the team helping brands grow online.",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "About" }]}
        eyebrow="About MP Tecc"
        title={
          <>
            We help brands <span className="serif">grow</span> online.
          </>
        }
        intro="A digital marketing agency from Indore, combining strategy, creativity and data to turn attention into customers."
      >
        <Button href="/contact" arrow>
          Work with us
        </Button>
        <Button href="/services" variant="ghost">
          Our services
        </Button>
      </PageHero>
      <Story />
      <Values />
      <Team />
      <Testimonials />
      <CtaBand />
    </>
  );
}
