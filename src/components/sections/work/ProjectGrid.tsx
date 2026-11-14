"use client";

import { useState } from "react";
import { projects, type Project } from "@/content/projects";
import { cn } from "@/lib/cn";
import { ProjectCard } from "@/components/cards/ProjectCard";
import styles from "./ProjectGrid.module.css";

type Filter = "All" | Project["industry"];

const filters: Filter[] = ["All", ...Array.from(new Set(projects.map((project) => project.industry)))];

/**
 * In a 3-column grid, make the first (and sometimes last) card span 2 columns
 * so that every row is completely filled.
 */
function isWide(index: number, total: number): boolean {
  const remainder = total % 3;
  if (remainder === 2) return index === 0;
  if (remainder === 1 && total > 1) return index === 0 || index === total - 1;
  return false;
}

/** Filterable grid of every project. */
export function ProjectGrid() {
  const [active, setActive] = useState<Filter>("All");
  const visible = active === "All" ? projects : projects.filter((project) => project.industry === active);

  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.filters} role="group" aria-label="Filter projects by industry">
          {filters.map((filter) => {
            const count =
              filter === "All" ? projects.length : projects.filter((project) => project.industry === filter).length;
            return (
              <button
                key={filter}
                type="button"
                className={cn(styles.filter, active === filter && styles.active)}
                aria-pressed={active === filter}
                onClick={() => setActive(filter)}
              >
                {filter}
                <span className={styles.count}>{count}</span>
              </button>
            );
          })}
        </div>

        <div className={styles.grid}>
          {visible.map((project, index) => (
            <ProjectCard key={project.name} project={project} wide={isWide(index, visible.length)} />
          ))}
        </div>
      </div>
    </section>
  );
}
