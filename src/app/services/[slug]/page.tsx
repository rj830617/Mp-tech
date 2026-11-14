import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import {
  RelatedServices,
  ServiceFeatures,
  ServiceIncludes,
  ServiceProcess,
} from "@/components/sections/services/ServiceDetail";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";
import { allServices, getGroupForService, getServiceBySlug } from "@/content/services";

type Props = { params: Promise<{ slug: string }> };

/** Pre-render one page per service at build time. */
export function generateStaticParams() {
  return allServices.map((service) => ({ slug: service.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.intro,
    alternates: { canonical: `/services/${service.slug}` },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const service = getServiceBySlug(slug);
  const group = getGroupForService(slug);
  if (!service || !group) notFound();

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Services", href: "/services" }, { label: service.title }]}
        eyebrow={group.title}
        title={service.title}
        intro={service.intro}
      >
        <Button href="/contact" arrow>
          Get a free proposal
        </Button>
        <Button href={siteConfig.contact.whatsapp} variant="ghost">
          Chat on WhatsApp
        </Button>
      </PageHero>
      <ServiceFeatures service={service} />
      <ServiceIncludes service={service} />
      <ServiceProcess />
      <RelatedServices service={service} group={group} />
      <CtaBand
        title={
          <>
            Ready to get <span className="serif">started?</span>
          </>
        }
        text={`Tell us about your goals and we'll put together a ${service.title} plan that fits your budget — no obligation.`}
      />
    </>
  );
}
