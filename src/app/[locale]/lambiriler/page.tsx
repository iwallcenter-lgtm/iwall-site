import type { Metadata } from "next";

import { LambiriGallery } from "@/components/site/lambiri-gallery";
import { lambiriCopy } from "@/lib/lambiri";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = lambiriCopy[locale];
  return createPageMetadata(locale, copy.title, copy.description, "lambiriler");
}

export default async function LambiriPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <LambiriGallery locale={locale} />;
}
