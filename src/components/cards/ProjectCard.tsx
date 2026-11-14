import Link from "next/link";
import type { CSSProperties } from "react";
import { projectMonogram, type Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import styles from "./ProjectCard.module.css";

type ProjectCardProps = {
  project: Project;
  /** Span two grid columns. */
  wide?: boolean;
  /** When set, the whole card becomes a link. */
  href?: string;
};

/** Gradient card with a large monogram and the project name. */
export function ProjectCard({ project, wide = false, href }: ProjectCardProps) {
  const className = cn(styles.card, wide && styles.wide, href && styles.interactive);
  const style = { "--hue": project.hue } as CSSProperties;

  const content = (
    <>
      <div className={styles.top}>
        <span className={styles.monogram} aria-hidden="true">
          {projectMonogram(project.name)}
        </span>
        <span className={styles.industry}>{project.industry}</span>
      </div>
      <div className={styles.meta}>
        <div>
          <h3 className={styles.name}>{project.name}</h3>
          <p className={styles.category}>{project.category}</p>
        </div>
        {href && (
          <span className={styles.arrow}>
            <Icon name="arrowUpRight" size={18} />
          </span>
        )}
      </div>
    </>
  );

  return href ? (
    <Link href={href} className={className} style={style}>
      {content}
    </Link>
  ) : (
    <article className={className} style={style}>
      {content}
    </article>
  );
}
