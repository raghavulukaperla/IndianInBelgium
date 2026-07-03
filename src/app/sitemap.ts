import type { MetadataRoute } from "next";
import { getCategoryTree, getAllCitySlugs } from "@/lib/data";
import { SITE_URL } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const categoryUrls = getCategoryTree().map((category) => ({
    url: `${SITE_URL}${category.href}`,
    lastModified: new Date(),
  }));

  const cityUrls = getAllCitySlugs().map((slug) => ({
    url: `${SITE_URL}/cities/${slug}`,
    lastModified: new Date(),
  }));

  return [{ url: SITE_URL, lastModified: new Date() }, ...categoryUrls, ...cityUrls];
}
