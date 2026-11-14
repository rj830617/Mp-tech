import { reasons } from "@/content/company";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import styles from "./WhyUs.module.css";

export function WhyUs() {
  return (
    <section className={styles.section}>
      <div className={cn("container", styles.layout)}>
        <div className={styles.intro}>
          <Eyebrow>Why MP Tecc</Eyebrow>
          <h2 className={cn("display", styles.title)}>
            Built to make every <span className="serif">rupee</span> count.
          </h2>
          <p className={cn("lead", styles.lead)}>
            We&rsquo;re a content-first agency that delivers on both strategy and execution — with the reporting to
            prove it.
          </p>
          <Button href="/about" arrow>
            About us
          </Button>
        </div>

        <div className={styles.grid}>
          {reasons.map((reason) => (
            <div key={reason.title} className={styles.card}>
              <span className={styles.icon}>
                <Icon name={reason.icon} size={20} />
              </span>
              <h3 className={styles.cardTitle}>{reason.title}</h3>
              <p className={styles.cardText}>{reason.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
