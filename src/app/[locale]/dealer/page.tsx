import type { Metadata } from "next";

import { InquiryForm } from "@/components/site/forms";
import { Container } from "@/components/ui/container";
import { PageHero } from "@/components/ui/page-hero";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.nav.dealer, messages.dealer.heroText, "dealer");
}

export default async function DealerPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  const fields = [
    { name: "name", label: messages.forms.fields.name },
    { name: "company", label: messages.forms.fields.company },
    { name: "country", label: messages.forms.fields.country },
    { name: "city", label: messages.forms.fields.city },
    { name: "phone", label: messages.forms.fields.phone },
    { name: "email", label: messages.forms.fields.email, type: "email" },
    { name: "businessType", label: messages.forms.fields.businessType },
    { name: "message", label: messages.forms.fields.message }
  ];

  return (
    <>
      <PageHero title={messages.dealer.heroTitle} description={messages.dealer.heroText} />
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-black/10 bg-[#ece4d7] p-8 shadow-sm">
            <h2 className="text-2xl font-semibold text-ink">{messages.dealer.benefitsTitle}</h2>
            <ul className="mt-6 space-y-4">
              {messages.dealer.benefits.map((benefit) => (
                <li key={benefit} className="rounded-[1.5rem] bg-white px-5 py-4 text-sm leading-7 text-neutral-700">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
          <InquiryForm messages={messages} fields={fields} submitLabel={messages.cta.sendInquiry} />
        </Container>
      </section>
    </>
  );
}
