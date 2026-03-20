import type { Metadata } from "next";

import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { trLegalContent } from "@/lib/legal-content";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  const description = locale === "tr" ? trLegalContent.shipping.summary : messages.legal.shippingText;
  return createPageMetadata(locale, messages.legal.shippingTitle, description, "shipping-information");
}

export default async function ShippingInfoPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const content = locale === "tr" ? trLegalContent.shipping : null;

  return (
    <>
      <PageHero title={messages.legal.shippingTitle} description={content?.summary ?? messages.legal.shippingText} />
      <section className="py-20">
        <Container className="max-w-4xl rounded-[2rem] border border-black/10 bg-white p-8 shadow-sm">
          {content ? (
            <div className="space-y-6">
              {content.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-base leading-8 text-neutral-600">
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <p className="text-base leading-8 text-neutral-600">{messages.legal.shippingText}</p>
          )}
        </Container>
      </section>
    </>
  );
}
