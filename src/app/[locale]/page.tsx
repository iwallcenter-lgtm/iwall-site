import type { Metadata } from "next";

import { HomeHero, HomeSections } from "@/components/site/sections";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.seo.defaultTitle, messages.seo.defaultDescription);
}

export default async function HomePage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <HomeHero locale={locale} messages={messages} />
      <HomeSections locale={locale} messages={messages} />
    </>
  );
}
