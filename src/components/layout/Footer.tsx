import Link from "next/link";
import { footerNav } from "@/config/navigation";
import { siteConfig } from "@/config/site";
import { allServices, serviceHref } from "@/content/services";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import { Logo } from "@/components/ui/Logo";
import styles from "./Footer.module.css";

const FEATURED_SERVICE_COUNT = 6;

export function Footer() {
  const { contact, socials } = siteConfig;
  const featuredServices = allServices.slice(0, FEATURED_SERVICE_COUNT);

  return (
    <footer className={styles.footer}>
      <div className="container">
        <div className={styles.top}>
          <div className={styles.brand}>
            <Logo inverted />
            <p className={styles.brandText}>
              A digital marketing agency from Indore helping brands grow with smart strategy, sharp design and honest
              reporting.
            </p>
            <div className={styles.socials}>
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                >
                  <Icon name={social.icon} size={18} />
                </a>
              ))}
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                <Icon name="whatsapp" size={18} />
              </a>
            </div>
          </div>

          <div>
            <p className={styles.title}>Services</p>
            <ul className={styles.list}>
              {featuredServices.map((service) => (
                <li key={service.slug}>
                  <Link href={serviceHref(service.slug)}>{service.title}</Link>
                </li>
              ))}
              <li>
                <Link href="/services" className={styles.more}>
                  All services →
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <p className={styles.title}>Company</p>
            <ul className={styles.list}>
              {footerNav.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className={styles.title}>Get in touch</p>
            <ul className={cn(styles.list, styles.contact)}>
              <li>
                <Icon name="mail" size={16} />
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              </li>
              <li>
                <Icon name="phone" size={16} />
                <a href={contact.phoneHref}>{contact.phone}</a>
              </li>
              <li>
                <Icon name="pin" size={16} />
                <span>{contact.location}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.bottom}>
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
          </p>
          <nav className={styles.legal} aria-label="Legal">
            {footerNav.legal.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <div className={styles.giant} aria-hidden="true">
        mptecc
      </div>
    </footer>
  );
}
