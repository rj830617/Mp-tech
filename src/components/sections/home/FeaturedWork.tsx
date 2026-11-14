import { projects } from "@/content/projects";
import { ProjectCard } from "@/components/cards/ProjectCard";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./FeaturedWork.module.css";

/** 1 wide + 1 normal on the first row, 3 on the second — keeps the grid even. */
const FEATURED_COUNT = 5;

export function FeaturedWork() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Selected work"
          title={
            <>
              Brands we&rsquo;ve <span className="serif">built</span> with.
            </>
          }
          action={
            <Button href="/work" variant="ghost" arrow>
              View all projects
            </Button>
          }
        />

        <div className={styles.grid}>
          {projects.slice(0, FEATURED_COUNT).map((project, index) => (
            <ProjectCard key={project.name} project={project} wide={index === 0} href="/work" />
          ))}
        </div>
      </div>
    </section>
  );
}
