import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Breadcrumbs, type Crumb } from "@/components/ui/Breadcrumbs";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  breadcrumbs: Crumb[];
  eyebrow: string;
  /** Use <span className="serif"> inside for the accent word. */
  title: ReactNode;
  intro?: ReactNode;
  /** Optional buttons or meta shown under the intro. */
  children?: ReactNode;
  /** Smaller title for long headings (articles, legal pages). */
  compact?: boolean;
};

/** Standard top section for inner pages. */
export function PageHero({ breadcrumbs, eyebrow, title, intro, children, compact = false }: PageHeroProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={cn("container", styles.inner)}>
        <div className="rise">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <Eyebrow className={cn("rise", styles.eyebrow)} style={{ animationDelay: "60ms" }}>
          {eyebrow}
        </Eyebrow>
        <h1 className={cn("display rise", styles.title, compact && styles.compact)} style={{ animationDelay: "120ms" }}>
          {title}
        </h1>
        {intro && (
          <p className={cn("lead rise", styles.intro)} style={{ animationDelay: "180ms" }}>
            {intro}
          </p>
        )}
        {children && (
          <div className={cn("rise", styles.extra)} style={{ animationDelay: "240ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
