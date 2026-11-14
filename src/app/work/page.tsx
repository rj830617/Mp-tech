import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Testimonials } from "@/components/sections/home/Testimonials";
import { ProjectGrid } from "@/components/sections/work/ProjectGrid";
import { projects } from "@/content/projects";

export const metadata: Metadata = {
  title: "Our Work",
  description:
    "Cafés, restaurants, education, film and lifestyle brands — see the businesses MP Tecc has helped grow with digital marketing, design and web.",
  alternates: { canonical: "/work" },
};

export default function WorkPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Work" }]}
        eyebrow={`${projects.length} brands and counting`}
        title={
          <>
            Work we&rsquo;re <span className="serif">proud</span> of.
          </>
        }
        intro="From neighbourhood cafés to education and film production, we help ambitious businesses look great, get found and grow."
      />
      <ProjectGrid />
      <Testimonials />
      <CtaBand
        title={
          <>
            Your brand <span className="serif">next?</span>
          </>
        }
      />
    </>
  );
}
