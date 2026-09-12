import type { Metadata } from "next";
import { SpacesGallery } from "@/components/site/spaces-gallery";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";
import { spaceCopy } from "@/lib/spaces";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, spaceCopy.title[locale], spaceCopy.description[locale], "mekanlar");
}

export default async function SpacesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <SpacesGallery locale={locale} />;
}
