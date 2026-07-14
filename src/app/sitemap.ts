import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/site-config";

const BLOG_API = `https://api-crm.goxt.io/api/blog-widget/${process.env.BLOG_API_KEY}/posts`;

interface BlogPost {
  slug: string;
  published_at: string;
}

async function getBlogRoutes(): Promise<MetadataRoute.Sitemap> {
  try {
    const res = await fetch(BLOG_API, { cache: "no-store" });
    if (!res.ok) return [];
    const json = await res.json();
    const posts: BlogPost[] = json.data?.posts ?? [];
    return posts.map((post) => ({
      url: `${SITE_URL}/blog/${post.slug}`,
      lastModified: post.published_at ? new Date(post.published_at) : new Date(),
      changeFrequency: "monthly",
      priority: 0.5,
    }));
  } catch {
    return [];
  }
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/postulantes`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/empresas`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${SITE_URL}/confirmar`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.6 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.7 },
  ];

  const blogRoutes = await getBlogRoutes();

  return [...staticRoutes, ...blogRoutes];
}
