import { serviceGroups } from "@/content/services";
import { cn } from "@/lib/cn";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Icon } from "@/components/ui/Icon";
import styles from "./services.module.css";

/** All service groups, each with a header and a grid of service cards. */
export function ServiceGroupList() {
  return (
    <div className={cn("container", styles.groups)}>
      {serviceGroups.map((group, index) => (
        <section key={group.id} id={group.id} className={styles.group} aria-labelledby={`${group.id}-title`}>
          <header className={styles.groupHead}>
            <span className={styles.groupIcon}>
              <Icon name={group.icon} size={24} />
            </span>
            <div>
              <p className={styles.groupMeta}>
                {String(index + 1).padStart(2, "0")} · {group.services.length} services
              </p>
              <h2 id={`${group.id}-title`} className={styles.groupTitle}>
                {group.title}
              </h2>
              <p className={styles.groupSummary}>{group.summary}</p>
            </div>
          </header>
          <div className={styles.cardGrid}>
            {group.services.map((service) => (
              <ServiceCard key={service.slug} service={service} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
