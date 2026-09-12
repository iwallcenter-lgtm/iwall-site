import type { Metadata } from "next";
import { FiArrowUpRight } from "react-icons/fi";

import { InquiryForm } from "@/components/site/forms";
import { SocialLinks } from "@/components/site/social-links";
import { Container } from "@/components/ui/container";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";
import { contactCopy } from "@/lib/storefront";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, getMessages(locale).nav.contact, contactCopy.description[locale], "contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const { company } = siteConfig;
  const fields = [
    { name: "name", label: contactCopy.name[locale] },
    { name: "phone", label: messages.forms.fields.phone, type: "tel" },
    { name: "email", label: messages.forms.fields.email, type: "email" },
    { name: "message", label: messages.forms.fields.message }
  ];
  const cardClass = "block rounded-2xl border border-pine/15 bg-white p-6 transition hover:border-pine/50 hover:bg-fog";

  return (
    <section className="bg-[#fafaf8] pb-14 pt-8 text-pine-deep sm:pb-20 sm:pt-10">
      <Container className="max-w-[1440px]">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{messages.nav.contact}</h1>
        <p className="mb-8 mt-4 text-base leading-7 text-neutral-600">{contactCopy.description[locale]}</p>
        <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="space-y-5">
            <a href={company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="block rounded-2xl bg-pine p-6 text-white transition hover:bg-pine-deep">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">WhatsApp</h2>
                <FiArrowUpRight aria-hidden="true" className="rtl:-rotate-90" />
              </div>
              <p className="mt-4 text-2xl font-semibold" dir="ltr">0505 296 74 73</p>
              <p className="mt-3 text-sm underline underline-offset-4">{contactCopy.whatsapp[locale]}</p>
            </a>
            <a href="tel:+905052967473" className={cardClass}>
              <h2 className="text-lg font-semibold">{messages.contact.cards.phone}</h2>
              <p className="mt-3 text-xl font-semibold" dir="ltr">{company.phone}</p>
            </a>
            <a href={`mailto:${company.email}`} className={cardClass}>
              <h2 className="text-lg font-semibold">{messages.contact.cards.email}</h2>
              <p className="mt-3 break-all text-lg font-semibold" dir="ltr">{company.email}</p>
            </a>
            <a href={`${company.whatsappUrl}?text=${encodeURIComponent(contactCopy.locationMessage[locale])}`} target="_blank" rel="noopener noreferrer" className={cardClass}>
              <h2 className="text-lg font-semibold">{contactCopy.location[locale]}</h2>
              <p className="mt-3 text-sm underline underline-offset-4">{contactCopy.locationAction[locale]}</p>
            </a>
            <div className="rounded-2xl bg-pine-deep p-6">
              <SocialLinks title={messages.contact.socialTitle} urls={company.social} />
            </div>
          </div>
          <InquiryForm locale={locale} messages={messages} fields={fields} submitLabel={messages.nav.contact} requiredFields={["name", "phone", "message"]} />
        </div>
      </Container>
    </section>
  );
}
