import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { articles } from "@/content/insights";
import { allServices } from "@/content/services";

/** Generates /sitemap.xml for search engines. */
export default function sitemap(): MetadataRoute.Sitemap {
  const url = (path: string) => `${siteConfig.url}${path}`;

  const pages = ["", "/about", "/services", "/work", "/insights", "/contact"].map((path) => ({
    url: url(path),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.8,
  }));

  const services = allServices.map((service) => ({
    url: url(`/services/${service.slug}`),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const posts = articles.map((article) => ({
    url: url(`/insights/${article.slug}`),
    lastModified: article.published,
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  const legal = ["/privacy", "/terms", "/refund-policy"].map((path) => ({
    url: url(path),
    changeFrequency: "yearly" as const,
    priority: 0.3,
  }));

  return [...pages, ...services, ...posts, ...legal];
}
