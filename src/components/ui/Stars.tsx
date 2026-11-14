import { Icon } from "./Icon";
import styles from "./Stars.module.css";

type StarsProps = { rating?: number; size?: number };

/** Row of gold stars with an accessible label. */
export function Stars({ rating = 5, size = 16 }: StarsProps) {
  return (
    <div className={styles.stars} role="img" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: rating }, (_, i) => (
        <Icon key={i} name="star" size={size} />
      ))}
    </div>
  );
}
