import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import styles from "./Prose.module.css";

/** Comfortable reading typography for articles and legal pages. */
export function Prose({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn(styles.prose, className)}>{children}</div>;
}
