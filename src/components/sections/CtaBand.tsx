import type { ReactNode } from "react";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Icon } from "@/components/ui/Icon";
import styles from "./CtaBand.module.css";

type CtaBandProps = {
  eyebrow?: string;
  title?: ReactNode;
  text?: string;
};

/** Closing call-to-action panel. Reusable on any page; all props have sensible defaults. */
export function CtaBand({
  eyebrow = "Let’s work together",
  title = (
    <>
      Have a project in <span className="serif">mind?</span>
    </>
  ),
  text = "Tell us where you want to grow and we’ll come back with ideas and a plan — no obligation.",
}: CtaBandProps) {
  return (
    <section className={styles.wrap}>
      <div className="container">
        <div className={styles.panel}>
          <div className={styles.glow} aria-hidden="true" />
          <Eyebrow tone="dark">{eyebrow}</Eyebrow>
          <h2 className={cn("display", styles.title)}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <div className={styles.actions}>
            <Button href="/contact" variant="lime" arrow>
              Get a free proposal
            </Button>
            <a href={siteConfig.contact.whatsapp} target="_blank" rel="noopener noreferrer" className={styles.link}>
              <Icon name="whatsapp" size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
