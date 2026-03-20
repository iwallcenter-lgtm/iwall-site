import type { Metadata } from "next";

import { InquiryForm } from "@/components/site/forms";
import { SocialLinks } from "@/components/site/social-links";
import { ButtonLink } from "@/components/ui/button-link";
import { Container } from "@/components/ui/container";
import { MediaPlaceholder } from "@/components/ui/media-placeholder";
import { PageHero } from "@/components/ui/page-hero";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";
import { siteConfig } from "@/lib/site-config";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.nav.contact, messages.contact.heroText, "contact");
}

export default async function ContactPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);
  const whatsappUrl = "https://wa.me/905052967473";
  const whatsappPrefilledUrl =
    "https://wa.me/905052967473?text=Merhaba%2C%20i-WALL%20%C3%BCr%C3%BCnleri%20hakk%C4%B1nda%20bilgi%20almak%20istiyorum.";
  const fullNameLabel = locale === "tr" ? "Ad Soyad" : "Full Name";
  const submitLabel = locale === "tr" ? "Mesaj Gonder" : messages.cta.contactUs;
  const loadingLabel = locale === "tr" ? "Gonderiliyor..." : "Sending...";
  const successMessage =
    locale === "tr"
      ? "Mesajiniz alindi. En kisa surede size donus yapacagiz."
      : "Your message has been received. Our team will get back to you as soon as possible.";
  const primaryWhatsappLabel =
    locale === "tr" ? "WhatsApp ile ileti\u015Fime ge\u00E7" : "WhatsApp Quick Contact";
  const secondaryWhatsappLabel =
    locale === "tr" ? "Haz\u0131r mesaj ile ileti\u015Fime ge\u00E7" : "WhatsApp ile ileti\u015Fime ge\u00E7";

  const fields = [
    { name: "name", label: fullNameLabel },
    { name: "company", label: messages.forms.fields.company },
    { name: "phone", label: messages.forms.fields.phone },
    { name: "email", label: messages.forms.fields.email, type: "email" },
    { name: "message", label: messages.forms.fields.message }
  ];

  return (
    <>
      <PageHero title={messages.contact.heroTitle} description={messages.contact.heroText} />
      <section className="py-24">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.9rem] border border-white/10 bg-green-luxury p-6 shadow-luxury">
                <h2 className="text-lg font-semibold tracking-[0.02em] text-white">{messages.contact.cards.whatsapp}</h2>
                <p className="mt-4 text-sm text-white">{siteConfig.company.whatsapp}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <ButtonLink href={whatsappUrl} className="w-full" variant="primary" target="_blank" rel="noopener noreferrer">
                    {primaryWhatsappLabel}
                  </ButtonLink>
                  <ButtonLink
                    href={whatsappPrefilledUrl}
                    className="w-full"
                    variant="secondary"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {secondaryWhatsappLabel}
                  </ButtonLink>
                </div>
              </div>
              <div className="rounded-[1.9rem] border border-pine/10 bg-white p-6 shadow-panel">
                <h2 className="text-lg font-semibold tracking-[0.02em] text-pine-deep">{messages.contact.cards.phone}</h2>
                <div className="mt-4 space-y-2 text-sm text-neutral-600">
                  {siteConfig.company.phoneNumbers.map((phone) => (
                    <p key={phone}>{phone}</p>
                  ))}
                </div>
              </div>
              <div className="rounded-[1.9rem] border border-pine/10 bg-white p-6 shadow-panel">
                <h2 className="text-lg font-semibold tracking-[0.02em] text-pine-deep">{messages.contact.cards.email}</h2>
                <p className="mt-4 text-sm text-neutral-600">{siteConfig.company.email}</p>
              </div>
              <div className="rounded-[1.9rem] border border-pine/10 bg-white p-6 shadow-panel">
                <h2 className="text-lg font-semibold tracking-[0.02em] text-pine-deep">{messages.contact.cards.address}</h2>
                <p className="mt-4 text-sm text-neutral-600">{siteConfig.company.address}</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-pine/10 bg-white p-6 shadow-panel">
              <h2 className="text-lg font-semibold tracking-[0.02em] text-pine-deep">{messages.misc.mapPlaceholder}</h2>
              <MediaPlaceholder label={messages.misc.mapPlaceholder} className="mt-5 h-64" />
            </div>
            <div className="rounded-[1.9rem] border border-white/10 bg-green-luxury p-6 shadow-luxury">
              <SocialLinks title={messages.contact.socialTitle} urls={siteConfig.company.social} />
              <p className="mt-4 text-sm leading-7 text-white">{messages.contact.exportNote}</p>
            </div>
          </div>
          <InquiryForm
            messages={messages}
            fields={fields}
            submitLabel={submitLabel}
            requiredFields={["name", "phone", "email", "message"]}
            successMessage={successMessage}
            successAlertMessage="Mesajiniz alindi. En kisa surede size donus yapacagiz."
            loadingLabel={loadingLabel}
            shouldLogValues
          />
        </Container>
      </section>
    </>
  );
}
