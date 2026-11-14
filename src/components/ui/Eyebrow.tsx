import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Eyebrow.module.css";

type EyebrowProps = {
  children: ReactNode;
  /** "light" for pale backgrounds, "dark" for ink/violet backgrounds. */
  tone?: "light" | "dark";
  className?: string;
  style?: React.CSSProperties;
};

/** Small uppercase label with a dot, shown above section headings. */
export function Eyebrow({ children, tone = "light", className, style }: EyebrowProps) {
  return (
    <p className={cn(styles.eyebrow, tone === "dark" && styles.dark, className)} style={style}>
      {children}
    </p>
  );
}
