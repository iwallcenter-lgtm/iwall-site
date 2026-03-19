import type { MetadataRoute } from "next";

import { products } from "@/lib/products";
import { staticPages } from "@/lib/routes";
import { locales } from "@/lib/locales";
import { siteConfig } from "@/lib/site-config";

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = locales.flatMap((locale) =>
    staticPages.map((page) => ({
      url: `${siteConfig.domain}/${locale}${page ? `/${page}` : ""}`,
      lastModified: new Date()
    }))
  );

  const productPages = locales.flatMap((locale) =>
    products.map((product) => ({
      url: `${siteConfig.domain}/${locale}/products/${product.slug}`,
      lastModified: new Date()
    }))
  );

  return [...pages, ...productPages];
}
