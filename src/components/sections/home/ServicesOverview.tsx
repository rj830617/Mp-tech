import Link from "next/link";
import { serviceGroups, serviceHref, type ServiceGroup } from "@/content/services";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./ServicesOverview.module.css";

/** Rows visible before a card's list scrolls. Keep in sync with `--rows` in the CSS module. */
const VISIBLE_ROWS = 5;

const isScrollable = (group: ServiceGroup) => group.services.length > VISIBLE_ROWS;

export function ServicesOverview() {
  return (
    <section id="services" className={styles.section}>
      <div className="container">
        <SectionHeading
          tone="dark"
          eyebrow="What we do"
          title={
            <>
              One team. <span className="serif">Every</span> channel.
            </>
          }
          intro="From the first search to the final sale, we cover every step — so your marketing works as one connected system instead of scattered tactics."
        />

        <div className={styles.grid}>
          {serviceGroups.map((group, index) => (
            <article key={group.id} className={styles.card}>
              <div className={styles.cardTop}>
                <span className={styles.icon}>
                  <Icon name={group.icon} size={24} />
                </span>
                <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3 className={styles.cardTitle}>{group.title}</h3>
              <p className={styles.summary}>{group.summary}</p>
              <ul className={cn(styles.list, isScrollable(group) && styles.scrollable)}>
                {group.services.map((service) => (
                  <li key={service.slug}>
                    <Link href={serviceHref(service.slug)}>
                      {service.title}
                      <Icon name="arrowUpRight" size={16} />
                    </Link>
                  </li>
                ))}
              </ul>
              <div className={styles.footer}>
                <span>{group.services.length} services</span>
                {isScrollable(group) && (
                  <span className={styles.scrollHint} aria-hidden="true">
                    Scroll for more <Icon name="chevron" size={14} />
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
