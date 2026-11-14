import { processSteps } from "@/content/company";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./Process.module.css";

export function Process() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          tone="dark"
          eyebrow="How we work"
          title={
            <>
              Simple process. <span className="serif">Serious</span> results.
            </>
          }
          intro="A scientific approach to inbound and outbound marketing: plan carefully, launch fast, automate the repetitive, and keep improving."
        />

        <ol className={styles.steps}>
          {processSteps.map((step, index) => (
            <li key={step.title} className={styles.step}>
              <span className={styles.number}>{String(index + 1).padStart(2, "0")}</span>
              <span className={styles.icon}>
                <Icon name={step.icon} size={22} />
              </span>
              <h3 className={styles.title}>{step.title}</h3>
              <p className={styles.text}>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
