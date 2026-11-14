import type { Metadata } from "next";
import { ArticleCard } from "@/components/cards/ArticleCard";
import { CtaBand } from "@/components/sections/CtaBand";
import { PageHero } from "@/components/sections/PageHero";
import { articles } from "@/content/insights";
import { cn } from "@/lib/cn";
import styles from "./insights.module.css";

export const metadata: Metadata = {
  title: "Insights",
  description:
    "Practical guides on SEO, website performance and UX design from the MP Tecc team — written to help you grow your business online.",
  alternates: { canonical: "/insights" },
};

export default function InsightsPage() {
  const [featured, ...rest] = [...articles].sort((a, b) => b.published.localeCompare(a.published));

  return (
    <>
      <PageHero
        breadcrumbs={[{ label: "Insights" }]}
        eyebrow="Insights"
        title={
          <>
            Ideas to help you <span className="serif">grow.</span>
          </>
        }
        intro="Practical, jargon-free guides on SEO, websites and design — the same advice we give our clients."
      />
      <section className={styles.section}>
        <div className={cn("container", styles.grid)}>
          {featured && <ArticleCard article={featured} featured />}
          {rest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>
      <CtaBand />
    </>
  );
}
