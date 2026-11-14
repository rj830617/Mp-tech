import { processSteps } from "@/content/company";
import type { Service, ServiceGroup } from "@/content/services";
import { cn } from "@/lib/cn";
import { ServiceCard } from "@/components/cards/ServiceCard";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./services.module.css";

/** Four headline capabilities of a service. */
export function ServiceFeatures({ service }: { service: Service }) {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              How we <span className="serif">help</span> you grow.
            </>
          }
        />
        <div className={styles.featureGrid}>
          {service.features.map((feature, index) => (
            <div key={feature.title} className={styles.feature}>
              <span className={styles.featureNumber}>{String(index + 1).padStart(2, "0")}</span>
              <h3>{feature.title}</h3>
              <p>{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Dark panel with the deliverables checklist. */
export function ServiceIncludes({ service }: { service: Service }) {
  return (
    <section className="container">
      <div className={styles.includes}>
        <div>
          <p className={styles.includesEyebrow}>What&rsquo;s included</p>
          <h2 className={cn("display", styles.includesTitle)}>
            Everything you need, <span className="serif">nothing</span> you don&rsquo;t.
          </h2>
        </div>
        <ul className={styles.checklist}>
          {service.includes.map((item) => (
            <li key={item}>
              <span className={styles.check}>
                <Icon name="check" size={16} />
              </span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Our four-step process, light version. */
export function ServiceProcess() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="How it works"
          title={
            <>
              A clear <span className="serif">process</span>, start to finish.
            </>
          }
          intro="No black boxes. You always know what we're doing, why, and what comes next."
        />
        <ol className={styles.steps}>
          {processSteps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <div className={styles.stepTop}>
                <span className={styles.stepIcon}>
                  <Icon name={step.icon} size={20} />
                </span>
                <span className={styles.stepNumber}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Other services from the same group. */
export function RelatedServices({ service, group }: { service: Service; group: ServiceGroup }) {
  const related = group.services.filter((item) => item.slug !== service.slug).slice(0, 3);
  if (related.length === 0) return null;

  return (
    <section className={styles.sectionTight}>
      <div className="container">
        <SectionHeading
          eyebrow={group.title}
          title={
            <>
              Related <span className="serif">services</span>
            </>
          }
        />
        <div className={styles.cardGrid}>
          {related.map((item) => (
            <ServiceCard key={item.slug} service={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
