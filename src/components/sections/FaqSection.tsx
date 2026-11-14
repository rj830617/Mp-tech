import Link from "next/link";
import { generalFaq } from "@/content/faq";
import { cn } from "@/lib/cn";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Faq } from "@/components/ui/Faq";
import styles from "./FaqSection.module.css";

/** Common questions, with a sticky intro column on desktop. */
export function FaqSection() {
  return (
    <section className={styles.section}>
      <div className={cn("container", styles.layout)}>
        <div className={styles.intro}>
          <Eyebrow>FAQ</Eyebrow>
          <h2 className={cn("display", styles.title)}>
            Questions, <span className="serif">answered.</span>
          </h2>
          <p className={styles.text}>
            Can&rsquo;t find what you&rsquo;re looking for? <Link href="/contact">Get in touch</Link> and we&rsquo;ll
            help.
          </p>
        </div>
        <Faq items={generalFaq} />
      </div>
    </section>
  );
}
