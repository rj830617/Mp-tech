import type { CSSProperties } from "react";
import { initials, team } from "@/content/team";
import { SectionHeading } from "@/components/ui/SectionHeading";
import styles from "./about.module.css";

const avatarHues = [262, 18, 152];

export function Team() {
  return (
    <section className={styles.section}>
      <div className="container">
        <SectionHeading
          eyebrow="Our team"
          title={
            <>
              The people behind <span className="serif">the</span> work.
            </>
          }
          intro="A dedicated team of marketers, designers and technologists who treat your business like their own."
        />
        <div className={styles.teamGrid}>
          {team.map((member, index) => (
            <article key={member.name} className={styles.member}>
              <div
                className={styles.avatar}
                style={{ "--hue": avatarHues[index % avatarHues.length] } as CSSProperties}
                aria-hidden="true"
              >
                {initials(member.name)}
              </div>
              <h3>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
              <p className={styles.bio}>{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
