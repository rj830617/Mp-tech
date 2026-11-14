import { cn } from "@/lib/cn";
import styles from "./Logo.module.css";

type LogoMarkProps = { size?: number; inverted?: boolean };

/** Brand mark: an "M" drawn as a rising growth line, with a lime signal dot. */
export function LogoMark({ size = 36, inverted = false }: LogoMarkProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill={inverted ? "var(--paper)" : "var(--ink)"} />
      <path
        d="M10 28V14.5l8.2 8.6 6.3-6.6L30 22"
        fill="none"
        stroke={inverted ? "var(--ink)" : "var(--paper)"}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="30" cy="12" r="3.4" fill="var(--lime)" />
    </svg>
  );
}

type LogoProps = { inverted?: boolean; className?: string };

/** Full logo: mark + "mptecc." wordmark. Use `inverted` on dark backgrounds. */
export function Logo({ inverted = false, className }: LogoProps) {
  return (
    <span className={cn(styles.logo, inverted && styles.inverted, className)}>
      <LogoMark inverted={inverted} />
      <span className={styles.word}>
        mptecc<span className={styles.dot}>.</span>
      </span>
    </span>
  );
}
