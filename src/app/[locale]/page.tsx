import type { Metadata } from "next";

import { HomeIntro } from "@/components/site/home-intro";
import { homeCopy } from "@/lib/home";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const copy = homeCopy[locale];
  return createPageMetadata(locale, `i-WALL | ${getMessages(locale).nav.home}`, copy.description);
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return <HomeIntro locale={locale} />;
}
