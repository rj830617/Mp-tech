import { story } from "@/content/company";
import { projects } from "@/content/projects";
import { allServices, serviceGroups } from "@/content/services";
import { cn } from "@/lib/cn";
import styles from "./about.module.css";

const facts = [
  { value: String(allServices.length), label: "Services under one roof" },
  { value: String(serviceGroups.length), label: "Specialist practice areas" },
  { value: String(projects.length), label: "Brands we've worked with" },
];

export function Story() {
  return (
    <section className={styles.section}>
      <div className={cn("container", styles.storyGrid)}>
        <p className={cn("display", styles.storyLead)}>
          Your trusted partner in the ever-evolving world of <span className="serif">digital</span> marketing.
        </p>
        <div className={styles.storyBody}>
          {story.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>

      <div className="container">
        <dl className={styles.facts}>
          {facts.map((fact) => (
            <div key={fact.label} className={styles.fact}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
