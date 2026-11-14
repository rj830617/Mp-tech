import { values } from "@/content/company";
import { Icon } from "@/components/ui/Icon";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./about.module.css";

export function Values() {
  return (
    <section className={styles.valuesSection}>
      <div className="container">
        <SectionHeading
          tone="dark"
          eyebrow="What we stand for"
          title={
            <>
              Values that guide <span className="serif">every</span> project.
            </>
          }
          intro="How we work matters as much as what we deliver. These four principles shape every plan, campaign and report."
        />
        <div className={styles.valuesGrid}>
          {values.map((value, index) => (
            <div key={value.title} className={styles.value}>
              <div className={styles.valueTop}>
                <span className={styles.valueIcon}>
                  <Icon name={value.icon} size={22} />
                </span>
                <span className={styles.valueNumber}>{String(index + 1).padStart(2, "0")}</span>
              </div>
              <h3>{value.title}</h3>
              <p>{value.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
