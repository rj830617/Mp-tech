import { siteConfig } from "@/config/site";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./contact.module.css";

const { contact, socials } = siteConfig;

const channels: { icon: IconName; label: string; value: string; href?: string; external?: boolean }[] = [
  { icon: "mail", label: "Email us", value: contact.email, href: `mailto:${contact.email}` },
  { icon: "phone", label: "Call us", value: contact.phone, href: contact.phoneHref },
  { icon: "whatsapp", label: "WhatsApp", value: "Chat with us", href: contact.whatsapp, external: true },
  { icon: "pin", label: "Visit us", value: contact.location },
];

export function ContactDetails() {
  return (
    <aside className={styles.details}>
      <h2 className={styles.detailsTitle}>Prefer to talk directly?</h2>
      <p className={styles.detailsText}>Reach out however suits you best — we&rsquo;re happy to help.</p>

      <ul className={styles.channels}>
        {channels.map((channel) => {
          const content = (
            <>
              <span className={styles.channelIcon}>
                <Icon name={channel.icon} size={20} />
              </span>
              <span>
                <span className={styles.channelLabel}>{channel.label}</span>
                <span className={styles.channelValue}>{channel.value}</span>
              </span>
            </>
          );
          return (
            <li key={channel.label}>
              {channel.href ? (
                <a
                  href={channel.href}
                  className={styles.channel}
                  {...(channel.external && { target: "_blank", rel: "noopener noreferrer" })}
                >
                  {content}
                </a>
              ) : (
                <div className={styles.channel}>{content}</div>
              )}
            </li>
          );
        })}
      </ul>

      <div className={styles.socials}>
        <span>Follow us</span>
        <div>
          {socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
            >
              <Icon name={social.icon} size={17} />
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
