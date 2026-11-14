import type { Metadata } from "next";
import { CtaBand } from "@/components/sections/CtaBand";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { ServiceGroupList } from "@/components/sections/services/ServiceGroupList";
import { Button } from "@/components/ui/Button";
import { allServices, serviceGroups } from "@/content/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "SEO, paid ads, social media, content, websites, e-commerce, Power BI, automation and more — every digital marketing service your business needs, from MP Tecc in Indore.",
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services" }]}
        eyebrow={`${allServices.length} services · ${serviceGroups.length} specialisms`}
        title={
          <>
            Everything you need to <span className="serif">grow</span> online.
          </>
        }
        intro="From getting found on Google to building your website and making sense of your data — pick one service or let us run your whole funnel."
      >
        {serviceGroups.map((group) => (
          <Button key={group.id} href={`#${group.id}`} variant="ghost" size="sm">
            {group.title}
          </Button>
        ))}
      </PageHero>
      <ServiceGroupList />
      <FaqSection />
      <CtaBand />
    </>
  );
}
