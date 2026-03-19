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
  return createPageMetadata(locale, messages.nav.documents, messages.documents.heroText, "documents");
}

export default async function DocumentsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <PageHero title={messages.documents.heroTitle} description={messages.documents.heroText} />
      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {messages.documents.items.map((item) => (
            <ResourceCard key={item.title} title={item.title} description={item.description} action={messages.cta.learnMore} href="#" />
          ))}
        </Container>
      </section>
    </>
  );
}
