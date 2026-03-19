import type { Metadata } from "next";

import { ResourceCard } from "@/components/site/cards";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.nav.catalogs, messages.catalogs.heroText, "catalogs");
}

export default async function CatalogsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <PageHero title={messages.catalogs.heroTitle} description={messages.catalogs.heroText} />
      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {messages.catalogs.cards.map((card) => (
            <ResourceCard key={card.title} title={card.title} description={card.description} action={messages.cta.downloadNow} href="#" />
          ))}
        </Container>
      </section>
    </>
  );
}
