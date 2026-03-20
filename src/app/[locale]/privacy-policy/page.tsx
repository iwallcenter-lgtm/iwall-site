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
  const description = locale === "tr" ? trLegalContent.privacy.summary : messages.legal.privacyText;
  return createPageMetadata(locale, messages.legal.privacyTitle, description, "privacy-policy");
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const content = locale === "tr" ? trLegalContent.privacy : null;

  return (
    <>
      <PageHero title={messages.legal.privacyTitle} description={content?.summary ?? messages.legal.privacyText} />
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
            <p className="text-base leading-8 text-neutral-600">{messages.legal.privacyText}</p>
          )}
        </Container>
      </section>
    </>
  );
}
