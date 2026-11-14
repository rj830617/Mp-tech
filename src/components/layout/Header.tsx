"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { mainNav } from "@/config/navigation";
import { serviceGroups, serviceHref } from "@/content/services";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import styles from "./Header.module.css";

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Add a frosted background once the page scrolls.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile menu on navigation.
  useEffect(() => setMenuOpen(false), [pathname]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href));

  return (
    <header className={cn(styles.header, scrolled && styles.scrolled)}>
      <div className={cn("container", styles.inner)}>
        <Link href="/" aria-label="MP Tecc — home">
          <Logo />
        </Link>

        <nav className={styles.nav} aria-label="Main">
          {mainNav.map((item) =>
            item.hasMegaMenu ? (
              <div key={item.href} className={styles.menuItem}>
                <Link href={item.href} className={cn(styles.navLink, isActive(item.href) && styles.active)}>
                  {item.label} <Icon name="chevron" size={14} />
                </Link>
                <div className={styles.mega}>
                  {serviceGroups.map((group) => (
                    <div key={group.id}>
                      <p className={styles.megaTitle}>{group.title}</p>
                      <ul>
                        {group.services.map((service) => (
                          <li key={service.slug}>
                            <Link href={serviceHref(service.slug)} className={styles.megaLink}>
                              {service.title}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(styles.navLink, isActive(item.href) && styles.active)}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className={styles.actions}>
          <span className={styles.cta}>
            <Button href="/contact" size="sm" arrow>
              Let&rsquo;s talk
            </Button>
          </span>
          <button
            type="button"
            className={styles.menuButton}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={cn(styles.mobile, menuOpen && styles.mobileOpen)} hidden={!menuOpen}>
        <nav className={cn("container", styles.mobileNav)} aria-label="Mobile">
          {mainNav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(styles.mobileLink, isActive(item.href) && styles.mobileActive)}
            >
              {item.label}
              <Icon name="arrowUpRight" size={20} />
            </Link>
          ))}
          <Button href="/contact" variant="lime" arrow className={styles.mobileCta}>
            Start a project
          </Button>
        </nav>
      </div>
    </header>
  );
}
