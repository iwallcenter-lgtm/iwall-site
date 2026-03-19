import type { Metadata } from "next";

import type { Locale } from "@/lib/locales";
import { buildAlternates, buildCanonical } from "@/lib/routes";

export function createPageMetadata(locale: Locale, title: string, description: string, path = ""): Metadata {
  return {
    title,
    description,
    alternates: {
      canonical: buildCanonical(locale, path),
      languages: buildAlternates(path)
    },
    openGraph: {
      title,
      description,
      url: buildCanonical(locale, path)
    }
  };
}
