import type { Metadata } from "next";
import { ContactDetails } from "@/components/sections/contact/ContactDetails";
import { ContactForm } from "@/components/sections/contact/ContactForm";
import { FaqSection } from "@/components/sections/FaqSection";
import { PageHero } from "@/components/sections/PageHero";
import { cn } from "@/lib/cn";
import styles from "@/components/sections/contact/contact.module.css";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Tell MP Tecc about your project. Email, call or WhatsApp our team in Indore, or send us a message and we'll get back to you with ideas and a plan.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title={
          <>
            Let&rsquo;s build something <span className="serif">great.</span>
          </>
        }
        intro="Tell us about your business and goals. We'll come back with ideas and a plan — no obligation."
      />
      <section className={styles.section}>
        <div className={cn("container", styles.layout)}>
          <div className={styles.formCard}>
            <ContactForm />
          </div>
          <ContactDetails />
        </div>
      </section>
      <FaqSection />
    </>
  );
}
