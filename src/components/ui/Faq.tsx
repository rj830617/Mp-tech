import type { FaqItem } from "@/content/faq";
import { Icon } from "./Icon";
import styles from "./Faq.module.css";

/** Accessible accordion built on native <details>; works without JavaScript. */
export function Faq({ items }: { items: FaqItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((item, index) => (
        <details key={item.question} className={styles.item} open={index === 0}>
          <summary className={styles.question}>
            {item.question}
            <span className={styles.toggle} aria-hidden="true">
              <Icon name="plus" size={18} />
            </span>
          </summary>
          <p className={styles.answer}>{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
