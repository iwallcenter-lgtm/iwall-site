import type { Metadata } from "next";
import Link from "next/link";

import { InquiryForm } from "@/components/site/forms";
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
  const submitLabel = locale === "tr" ? "Mesaj Gönder" : messages.cta.contactUs;
  const loadingLabel = locale === "tr" ? "Gönderiliyor..." : "Sending...";
  const successMessage =
    locale === "tr"
      ? "Mesajınız alındı. En kısa sürede size dönüş yapacağız."
      : "Your message has been received. Our team will get back to you as soon as possible.";

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
      <section className="py-20">
        <Container className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="grid gap-5 sm:grid-cols-2">
              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-ink">{messages.contact.cards.whatsapp}</h2>
                <p className="mt-4 text-sm text-neutral-600">{siteConfig.company.whatsapp}</p>
                <div className="mt-5 flex flex-col gap-3">
                  <ButtonLink href={whatsappUrl} className="w-full" variant="primary">
                    WhatsApp Quick Contact
                  </ButtonLink>
                  <ButtonLink href={whatsappPrefilledUrl} className="w-full" variant="secondary">
                    WhatsApp ile iletişime geç
                  </ButtonLink>
                </div>
              </div>
              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-ink">{messages.contact.cards.phone}</h2>
                <p className="mt-4 text-sm text-neutral-600">{siteConfig.company.phone}</p>
              </div>
              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-ink">{messages.contact.cards.email}</h2>
                <p className="mt-4 text-sm text-neutral-600">{siteConfig.company.email}</p>
              </div>
              <div className="rounded-[1.75rem] border border-black/10 bg-white p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-ink">{messages.contact.cards.address}</h2>
                <p className="mt-4 text-sm text-neutral-600">{siteConfig.company.address}</p>
              </div>
            </div>
            <div className="rounded-[2rem] border border-black/10 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">{messages.misc.mapPlaceholder}</h2>
              <MediaPlaceholder label={messages.misc.mapPlaceholder} className="mt-5 h-64" />
            </div>
            <div className="rounded-[1.75rem] border border-black/10 bg-[#ece4d7] p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-ink">{messages.contact.cards.social}</h2>
              <div className="mt-4 flex gap-4 text-sm font-medium text-ink">
                <Link href={siteConfig.company.social.instagram}>Instagram</Link>
                <Link href={siteConfig.company.social.linkedin}>LinkedIn</Link>
                <Link href={siteConfig.company.social.youtube}>YouTube</Link>
              </div>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{messages.contact.exportNote}</p>
            </div>
          </div>
          <InquiryForm
            messages={messages}
            fields={fields}
            submitLabel={submitLabel}
            requiredFields={["name", "phone", "email", "message"]}
            successMessage={successMessage}
            successAlertMessage="Mesajınız alındı. En kısa sürede size dönüş yapacağız."
            loadingLabel={loadingLabel}
            shouldLogValues
          />
        </Container>
      </section>
    </>
  );
}
