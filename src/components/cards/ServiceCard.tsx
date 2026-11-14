import Link from "next/link";
import { serviceHref, type Service } from "@/content/services";
import { Icon } from "@/components/ui/Icon";
import styles from "./ServiceCard.module.css";

/** Clickable card linking to a service page. */
export function ServiceCard({ service }: { service: Service }) {
  return (
    <Link href={serviceHref(service.slug)} className={styles.card}>
      <h3 className={styles.title}>{service.title}</h3>
      <p className={styles.blurb}>{service.blurb}</p>
      <span className={styles.more}>
        Learn more
        <span className={styles.arrow}>
          <Icon name="arrowUpRight" size={16} />
        </span>
      </span>
    </Link>
  );
}
