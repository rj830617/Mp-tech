import { projects } from "@/content/projects";
import styles from "./ClientMarquee.module.css";

/** Infinite scrolling strip of client names. The list is rendered twice for a seamless loop. */
export function ClientMarquee() {
  const names = projects.map((project) => project.name);

  return (
    <section className={styles.wrap} aria-labelledby="clients-heading">
      <h2 id="clients-heading" className={styles.label}>
        Brands we&rsquo;ve helped grow
      </h2>
      <div className={styles.marquee}>
        <ul className={styles.track}>
          {[...names, ...names].map((name, i) => (
            <li key={i} aria-hidden={i >= names.length}>
              {name}
              <span className={styles.separator}>✦</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
