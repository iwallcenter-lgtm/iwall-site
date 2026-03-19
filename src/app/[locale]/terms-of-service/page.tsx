import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.legal.termsTitle, messages.legal.termsText, "terms-of-service");
}

export default async function TermsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <>
      <PageHero title={messages.legal.termsTitle} description={messages.legal.termsText} />
      <section className="py-20">
        <Container className="max-w-4xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          <p className="text-base leading-8 text-neutral-600">{messages.legal.termsText}</p>
        </Container>
      </section>
    </>
  );
}
