import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { Prose } from "@/components/ui/Prose";
import { articles, formatDate, getArticleBySlug, readingTime } from "@/content/insights";
import styles from "../insights.module.css";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/insights/${article.slug}` },
    openGraph: { type: "article", publishedTime: article.published },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);
  if (!article) notFound();

  const more = articles.filter((item) => item.slug !== article.slug).slice(0, 2);

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights", href: "/insights" }, { label: article.category }]}
        eyebrow={`${article.category} · ${formatDate(article.published)} · ${readingTime(article)} min read`}
        title={article.title}
        intro={article.excerpt}
        compact
      />

      <article className={styles.article}>
        <div className="container">
          <Prose>
            {article.body.map((block, index) => {
              if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
              if (block.type === "list")
                return (
                  <ul key={index}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                );
              return <p key={index}>{block.text}</p>;
            })}
          </Prose>
        </div>
      </article>

      {more.length > 0 && (
        <section className={styles.more}>
          <div className="container">
            <h2 className={styles.moreTitle}>Keep reading</h2>
            <div className={styles.grid}>
              {more.map((item) => (
                <ArticleCard key={item.slug} article={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaBand
        title={
          <>
            Want this done <span className="serif">for you?</span>
          </>
        }
        text="Our team can audit your website and put these ideas into action. Tell us what you need — no obligation."
      />
    </>
  );
}
