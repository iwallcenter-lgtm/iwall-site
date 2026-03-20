import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PageHero } from "@/components/ui/page-hero";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { referenceItems } from "@/lib/references";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.nav.references, messages.references.heroText, "references");
}

export default async function ReferencesPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <PageHero title={messages.references.heroTitle} description={messages.references.heroText} />
      <section className="py-20">
        <Container className="grid gap-6 lg:grid-cols-3">
          {referenceItems.map((item, index) => (
            <div key={item.key} className="overflow-hidden rounded-[1.75rem] border border-black/10 bg-white shadow-sm">
              <MediaPlaceholder label={item.alt} imageSrc={item.imageSrc} className="h-60" />
              <div className="p-6">
                <h2 className="text-xl font-semibold text-ink">{messages.references.items[index] ?? item.label}</h2>
                <p className="mt-3 text-sm leading-7 text-neutral-600">
                  {messages.references.heroText}
                </p>
              </div>
            </div>
          ))}
        </Container>
      </section>
    </>
  );
}
