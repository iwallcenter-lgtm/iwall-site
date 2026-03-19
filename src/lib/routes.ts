import type { Locale } from "@/lib/locales";
import { locales } from "@/lib/locales";
import { siteConfig } from "@/lib/site-config";

export const staticPages = [
  "",
  "about",
  "products",
  "catalogs",
  "dealer",
  "sales-partner",
  "contact",
  "references",
  "documents",
  "privacy-policy",
  "terms-of-service",
  "shipping-information"
] as const;

export function buildLocalePath(locale: Locale, path = "") {
  return `/${locale}${path ? `/${path}` : ""}`;
}

export function buildCanonical(locale: Locale, path = "") {
  return `${siteConfig.domain}${buildLocalePath(locale, path)}`;
}

export function buildAlternates(path = "") {
  return Object.fromEntries(locales.map((locale) => [locale, buildCanonical(locale, path)]));
}
