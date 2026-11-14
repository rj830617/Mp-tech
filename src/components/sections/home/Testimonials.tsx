import { philosophy } from "@/content/company";
import { testimonials } from "@/content/testimonials";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Stars } from "@/components/ui/Stars";
import styles from "./Testimonials.module.css";

/** Philosophy & vision card alongside client reviews. */
export function Testimonials() {
  return (
    <section className={styles.section} aria-label="Our philosophy and client reviews">
      <div className="container">
        <div className={styles.grid}>
          <div className={styles.mission}>
            <Eyebrow tone="dark" className={styles.missionEyebrow}>
              Our philosophy
            </Eyebrow>
            <p className={styles.statement}>
              We craft digital strategies that <span className="serif">convert</span> — and measure every one of them.
            </p>
            <div className={styles.vision}>
              <span className={styles.visionLabel}>Our vision</span>
              <p>{philosophy.vision}</p>
            </div>
          </div>

          {testimonials.map((testimonial) => (
            <figure key={testimonial.name} className={styles.quote}>
              <Stars rating={testimonial.rating} />
              <blockquote className={styles.text}>&ldquo;{testimonial.quote}&rdquo;</blockquote>
              <figcaption className={styles.author}>
                <span className={styles.avatar} aria-hidden="true">
                  {testimonial.name[0].toUpperCase()}
                </span>
                <span>
                  <strong>{testimonial.name}</strong>
                  <small>{testimonial.source}</small>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
