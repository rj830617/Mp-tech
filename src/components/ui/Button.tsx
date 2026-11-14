import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/cn";
import { Icon } from "./Icon";
import styles from "./Button.module.css";

type ButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "lime" | "ghost";
  size?: "md" | "sm";
  /** Show a trailing arrow that nudges on hover. */
  arrow?: boolean;
  className?: string;
};

const isExternal = (href: string) => /^(https?:|mailto:|tel:)/.test(href);

/** Pill-shaped call-to-action link. Internal hrefs use Next.js <Link>; external ones open in a new tab. */
export function Button({ href, children, variant = "dark", size = "md", arrow = false, className }: ButtonProps) {
  const classes = cn(styles.button, styles[variant], size === "sm" && styles.sm, className);
  const content = (
    <>
      {children}
      {arrow && <Icon name="arrow" size={size === "sm" ? 16 : 18} className={styles.arrow} />}
    </>
  );

  if (isExternal(href)) {
    const newTab = href.startsWith("http");
    return (
      <a href={href} className={classes} {...(newTab && { target: "_blank", rel: "noopener noreferrer" })}>
        {content}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {content}
    </Link>
  );
}
