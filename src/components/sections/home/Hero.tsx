import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Stars } from "@/components/ui/Stars";
import { HeroArt } from "./HeroArt";
import styles from "./Hero.module.css";

const delay = (ms: number) => ({ animationDelay: `${ms}ms` });

export function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.glow} aria-hidden="true" />
      <div className={cn("container", styles.inner)}>
        <div>
          <Eyebrow className="rise">Digital marketing agency · Indore, India</Eyebrow>
          <h1 className={cn("display rise", styles.title)} style={delay(80)}>
            Marketing that <span className="serif">moves</span> your business forward.
          </h1>
          <p className={cn("lead rise", styles.lead)} style={delay(160)}>
            MP Tecc plans and runs content-first campaigns, builds websites that convert and turns your data into
            decisions — one partner for your whole funnel.
          </p>
          <div className={cn("rise", styles.actions)} style={delay(240)}>
            <Button href="/contact" arrow>
              Start a project
            </Button>
            <Button href="#services" variant="ghost">
              Explore services
            </Button>
          </div>
          <div className={cn("rise", styles.proof)} style={delay(320)}>
            <Stars />
            <span>Rated 5 stars on Google by our clients</span>
          </div>
        </div>

        <HeroArt />
      </div>
    </section>
  );
}
