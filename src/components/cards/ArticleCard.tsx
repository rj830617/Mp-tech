import Link from "next/link";
import { formatDate, readingTime, type Article } from "@/content/insights";
import { cn } from "@/lib/cn";
import { Icon } from "@/components/ui/Icon";
import styles from "./ArticleCard.module.css";

const categoryHue: Record<Article["category"], number> = { SEO: 152, Web: 262, Design: 18 };

/** Article teaser card. `featured` renders a larger, horizontal layout. */
export function ArticleCard({ article, featured = false }: { article: Article; featured?: boolean }) {
  return (
    <Link
      href={`/insights/${article.slug}`}
      className={cn(styles.card, featured && styles.featured)}
      style={{ "--hue": categoryHue[article.category] } as React.CSSProperties}
    >
      <div className={styles.cover} aria-hidden="true">
        <span className={styles.coverLabel}>{article.category}</span>
      </div>
      <div className={styles.body}>
        <p className={styles.meta}>
          <span className={styles.category}>{article.category}</span>
          <span>{formatDate(article.published)}</span>
          <span className={styles.dot} />
          <span>{readingTime(article)} min read</span>
        </p>
        <h3 className={styles.title}>{article.title}</h3>
        <p className={styles.excerpt}>{article.excerpt}</p>
        <span className={styles.more}>
          Read article <Icon name="arrow" size={16} />
        </span>
      </div>
    </Link>
  );
}
