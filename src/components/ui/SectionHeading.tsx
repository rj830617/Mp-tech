import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Eyebrow } from "./Eyebrow";
import styles from "./SectionHeading.module.css";

type SectionHeadingProps = {
  eyebrow: string;
  title: ReactNode;
  /** Short paragraph shown to the right of the title. */
  intro?: ReactNode;
  /** Optional element (e.g. a Button) shown to the right instead of / after the intro. */
  action?: ReactNode;
  tone?: "light" | "dark";
  className?: string;
};

/** Standard section header: eyebrow + large title on the left, intro or action on the right. */
export function SectionHeading({ eyebrow, title, intro, action, tone = "light", className }: SectionHeadingProps) {
  return (
    <div className={cn(styles.head, tone === "dark" && styles.dark, className)}>
      <div>
        <Eyebrow tone={tone}>{eyebrow}</Eyebrow>
        <h2 className={cn("display", styles.title)}>{title}</h2>
      </div>
      {intro && <p className={styles.intro}>{intro}</p>}
      {action}
    </div>
  );
}
