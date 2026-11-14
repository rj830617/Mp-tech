import type { CSSProperties } from "react";
import { Icon, type IconName } from "@/components/ui/Icon";
import styles from "./HeroArt.module.css";

const channels: { label: string; icon: IconName }[] = [
  { label: "SEO", icon: "growth" },
  { label: "Paid ads", icon: "target" },
  { label: "Social", icon: "heart" },
  { label: "Power BI", icon: "data" },
];

const LINE = "M8 128 C48 122 70 104 104 104 S160 82 196 78 S256 50 290 46 S350 26 392 18";

/** Decorative hero illustration: a growth dashboard card with two floating notifications. */
export function HeroArt() {
  return (
    <div className={styles.art} aria-hidden="true">
      <div className={styles.card}>
        <div className={styles.head}>
          <div>
            <p className={styles.title}>Campaign growth</p>
            <p className={styles.subtitle}>All channels</p>
          </div>
          <span className={styles.badge}>
            <Icon name="growth" size={14} /> Trending up
          </span>
        </div>

        <svg viewBox="0 0 400 150" className={styles.chart}>
          <defs>
            <linearGradient id="hero-art-fill" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#5b4bff" stopOpacity=".28" />
              <stop offset="1" stopColor="#5b4bff" stopOpacity="0" />
            </linearGradient>
          </defs>
          {[40, 80, 120].map((y) => (
            <line key={y} x1="0" x2="400" y1={y} y2={y} className={styles.grid} />
          ))}
          <path d={`${LINE} V150 H8Z`} fill="url(#hero-art-fill)" className={styles.area} />
          <path d={LINE} className={styles.line} />
          <circle cx="392" cy="18" r="14" className={styles.pulse} />
          <circle cx="392" cy="18" r="6" className={styles.dot} />
        </svg>

        <ul className={styles.channels}>
          {channels.map((channel, i) => (
            <li key={channel.label} style={{ "--i": i } as CSSProperties}>
              <span className={styles.channelIcon}>
                <Icon name={channel.icon} size={16} />
              </span>
              {channel.label}
              <Icon name="arrowUpRight" size={14} className={styles.channelArrow} />
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.toast}>
        <span className={styles.toastIcon}>
          <Icon name="bolt" size={18} />
        </span>
        <div>
          <p className={styles.toastTitle}>New lead received</p>
          <p className={styles.toastText}>via Google Ads · just now</p>
        </div>
      </div>

      <div className={styles.report}>
        <span className={styles.reportIcon}>
          <Icon name="check" size={18} />
        </span>
        <div>
          <p className={styles.reportTitle}>Monthly report</p>
          <p className={styles.reportText}>Ready to view</p>
        </div>
      </div>
    </div>
  );
}
