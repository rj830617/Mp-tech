import type { Metadata } from "next";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import styles from "./not-found.module.css";

export const metadata: Metadata = { title: "Page not found" };

export default function NotFound() {
  return (
    <section className={cn("container", styles.section)}>
      <Eyebrow>Error 404</Eyebrow>
      <h1 className={cn("display", styles.title)}>
        Lost in the <span className="serif">funnel.</span>
      </h1>
      <p className={cn("lead", styles.lead)}>
        The page you&rsquo;re looking for doesn&rsquo;t exist or has moved. Let&rsquo;s get you back on track.
      </p>
      <div className={styles.actions}>
        <Button href="/" arrow>
          Back to home
        </Button>
        <Button href="/contact" variant="ghost">
          Contact us
        </Button>
      </div>
    </section>
  );
}
