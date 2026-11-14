export type ArticleBlock =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "list"; items: string[] };

export type Article = {
  slug: string;
  title: string;
  excerpt: string;
  category: "SEO" | "Web" | "Design";
  /** ISO date, e.g. "2026-11-14" */
  published: string;
  body: ArticleBlock[];
};

export const articles: Article[] = [
  {
    slug: "website-speed-and-performance",
    title: "Why website speed matters — and how to fix a slow site",
    excerpt:
      "A slow website quietly costs you customers and search rankings. Here's why speed matters and the fixes that make the biggest difference.",
    category: "Web",
    published: "2026-11-14",
    body: [
      {
        type: "p",
        text: "Visitors decide in seconds whether to stay on your website. If a page takes too long to load, many will leave before they see what you offer — and they may not come back. Speed isn't just a technical detail; it's part of your customer experience.",
      },
      { type: "h2", text: "Why speed matters" },
      {
        type: "list",
        items: [
          "Better experience: fast pages feel professional and trustworthy.",
          "Higher conversions: fewer people abandon forms and checkouts.",
          "Stronger SEO: Google uses page experience, including speed, as a ranking signal.",
          "Mobile reach: many of your visitors browse on phones with slower connections.",
        ],
      },
      { type: "h2", text: "The most common causes of a slow site" },
      {
        type: "list",
        items: [
          "Large, uncompressed images",
          "Too many plugins, scripts and third-party widgets",
          "Cheap or overloaded hosting",
          "No caching, so every visit rebuilds the page from scratch",
        ],
      },
      { type: "h2", text: "Fixes that make the biggest difference" },
      {
        type: "p",
        text: "Start by compressing images and serving them in modern formats like WebP, sized for the screen they appear on. Remove plugins and scripts you don't need, and load the rest only on pages that use them. Turn on caching and consider a content delivery network (CDN) so files are served from a location close to each visitor.",
      },
      {
        type: "p",
        text: "Finally, measure. Free tools like Google PageSpeed Insights show what's slowing your pages down and how you compare on Core Web Vitals. Fix the biggest issues first, re-test, and repeat.",
      },
      { type: "h2", text: "The bottom line" },
      {
        type: "p",
        text: "A faster website keeps visitors engaged, helps you rank and turns more traffic into customers. If you're not sure where to start, a quick performance audit will show you the highest-impact fixes.",
      },
    ],
  },
  {
    slug: "ux-design-basics",
    title: "UX design basics that turn visitors into customers",
    excerpt:
      "Good user experience design isn't about decoration. It's about making it effortless for people to find what they need and take action.",
    category: "Design",
    published: "2026-11-14",
    body: [
      {
        type: "p",
        text: "User experience (UX) design is the practice of creating products that are useful, easy and pleasant to use. On a website, good UX means visitors can quickly understand what you do, find what they need and take the next step — without thinking too hard.",
      },
      { type: "h2", text: "Five principles to get right" },
      {
        type: "list",
        items: [
          "Clarity: say what you do and who it's for in the first screen.",
          "Simplicity: remove anything that doesn't help the visitor decide.",
          "Consistency: use the same patterns for buttons, links and layouts everywhere.",
          "Feedback: show clear responses when people click, submit or make a mistake.",
          "Accessibility: readable text, good contrast and keyboard-friendly navigation for everyone.",
        ],
      },
      { type: "h2", text: "Make the next step obvious" },
      {
        type: "p",
        text: "Every page should have one main goal — booking a call, buying a product, or sending an enquiry. Make that call to action stand out, use action-focused wording like “Get a free proposal”, and repeat it where it naturally fits as people scroll.",
      },
      { type: "h2", text: "Design for mobile first" },
      {
        type: "p",
        text: "Many of your visitors arrive on a phone. Design for small screens first: large tap targets, short forms, fast pages and text that's comfortable to read without zooming. A layout that works on mobile usually scales up well to desktop.",
      },
      { type: "h2", text: "Test with real people" },
      {
        type: "p",
        text: "You are not your user. Watch a handful of real people try to complete a task on your site and you'll quickly spot what's confusing. Combine this with analytics and heatmaps to see where visitors drop off, then improve one thing at a time.",
      },
    ],
  },
  {
    slug: "seo-strategy-that-lasts",
    title: "Building an SEO strategy that lasts",
    excerpt:
      "Quick tricks come and go with every algorithm update. A lasting SEO strategy rests on four foundations — here's how to build them.",
    category: "SEO",
    published: "2026-11-14",
    body: [
      {
        type: "p",
        text: "Search engine optimisation is often described as both an art and a science. The science is research: understanding what people search for and what search engines reward. The art is creating pages that genuinely deserve to rank. A lasting strategy needs both.",
      },
      { type: "h2", text: "1. Start with the right keywords" },
      {
        type: "p",
        text: "Find the words your customers actually use, not just industry jargon. Group them by intent — people researching, comparing or ready to buy — and give each group a dedicated page. Specific, longer phrases are often easier to rank for and convert better.",
      },
      { type: "h2", text: "2. Create content that answers questions" },
      {
        type: "p",
        text: "Quality of content is one of the strongest ranking factors. Write pages that fully answer the searcher's question, are easy to scan and are kept up to date. Helpful content earns links and keeps visitors engaged — both good signals.",
      },
      { type: "h2", text: "3. Fix the technical foundations" },
      {
        type: "list",
        items: [
          "Fast-loading, mobile-friendly pages",
          "Secure HTTPS across the site",
          "Clear titles, headings and meta descriptions on every page",
          "Logical internal links and an XML sitemap",
          "Structured data (schema) where it helps",
        ],
      },
      { type: "h2", text: "4. Build authority and local presence" },
      {
        type: "p",
        text: "Earn links from relevant, reputable websites through useful content and genuine relationships. If you serve a local area, optimise your Google Business Profile, keep your name, address and phone number consistent across directories, and encourage happy customers to leave reviews.",
      },
      { type: "h2", text: "Measure and keep improving" },
      {
        type: "p",
        text: "Track rankings, organic traffic and — most importantly — the enquiries and sales that come from search. SEO compounds over time, so steady, consistent improvements beat one-off bursts of activity.",
      },
    ],
  },
];

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug);
}

/** Rough reading time at ~200 words per minute. */
export function readingTime(article: Article): number {
  const words = article.body
    .flatMap((block) => (block.type === "list" ? block.items : [block.text]))
    .join(" ")
    .split(/\s+/).length;
  return Math.max(1, Math.round(words / 200));
}

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });
}
