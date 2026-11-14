import Link from "next/link";
import type { LegalDocument } from "@/content/legal";
import { formatDate } from "@/content/insights";
import { cn } from "@/lib/cn";
import { Prose } from "@/components/ui/Prose";
import { PageHero } from "./PageHero";
import styles from "./LegalPage.module.css";

const slugify = (text: string) =>
  text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const otherDocs = [
  { label: "Privacy Policy", href: "/privacy" },
  { label: "Terms & Conditions", href: "/terms" },
  { label: "Refund Policy", href: "/refund-policy" },
];

/** Shared layout for Privacy, Terms and Refund pages: hero, sticky contents list and readable body. */
export function LegalPage({ document, path }: { document: LegalDocument; path: string }) {
  return (
    <>
      <PageHero
        breadcrumbs={[{ label: document.title }]}
        eyebrow={`Last updated ${formatDate(document.updated)}`}
        title={document.title}
        intro={document.intro}
        compact
      />
      <section className={styles.section}>
        <div className={cn("container", styles.layout)}>
          <aside className={styles.aside}>
            <nav aria-label="On this page">
              <p className={styles.asideTitle}>On this page</p>
              <ol className={styles.toc}>
                {document.sections.map((section, index) => (
                  <li key={section.heading}>
                    <a href={`#${slugify(section.heading)}`}>
                      <span>{String(index + 1).padStart(2, "0")}</span>
                      {section.heading}
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
            <nav aria-label="Other policies" className={styles.others}>
              <p className={styles.asideTitle}>Other policies</p>
              {otherDocs
                .filter((doc) => doc.href !== path)
                .map((doc) => (
                  <Link key={doc.href} href={doc.href}>
                    {doc.label} →
                  </Link>
                ))}
            </nav>
          </aside>

          <Prose>
            {document.sections.map((section) => (
              <div key={section.heading} className={styles.block}>
                <h2 id={slugify(section.heading)}>{section.heading}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.list && (
                  <ul>
                    {section.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </Prose>
        </div>
      </section>
    </>
  );
}
