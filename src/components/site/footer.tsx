import Link from "next/link";

import { LocaleSwitcher } from "@/components/site/locale-switcher";
import { Logo } from "@/components/site/logo";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";
import { siteConfig } from "@/lib/site-config";
import type { SiteMessages } from "@/messages/schema";

type FooterProps = {
  locale: Locale;
  messages: SiteMessages;
};

export function Footer({ locale, messages }: FooterProps) {
  return (
    <footer className="border-t border-black/5 bg-[#ece4d7] py-14">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="space-y-5">
          <Logo href={`/${locale}`} label={messages.brand.name} compact />
          <p className="max-w-sm text-sm leading-7 text-neutral-700">{messages.brand.tagline}</p>
          <LocaleSwitcher currentLocale={locale} />
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">{messages.footer.quickLinks}</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-ink">
            <Link href={`/${locale}/about`}>{messages.nav.about}</Link>
            <Link href={`/${locale}/products`}>{messages.nav.products}</Link>
            <Link href={`/${locale}/catalogs`}>{messages.nav.catalogs}</Link>
            <Link href={`/${locale}/contact`}>{messages.nav.contact}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">{messages.footer.legal}</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-ink">
            <Link href={`/${locale}/privacy-policy`}>{messages.legal.privacyTitle}</Link>
            <Link href={`/${locale}/terms-of-service`}>{messages.legal.termsTitle}</Link>
            <Link href={`/${locale}/shipping-information`}>{messages.legal.shippingTitle}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-neutral-600">{messages.footer.contact}</h3>
          <div className="mt-5 space-y-3 text-sm text-neutral-700">
            <p>{siteConfig.company.phone}</p>
            <p>{siteConfig.company.email}</p>
            <p>{siteConfig.company.address}</p>
          </div>
          <div className="mt-5 flex gap-4 text-sm font-medium text-ink">
            <Link href={siteConfig.company.social.instagram}>Instagram</Link>
            <Link href={siteConfig.company.social.linkedin}>LinkedIn</Link>
            <Link href={siteConfig.company.social.youtube}>YouTube</Link>
          </div>
        </div>
      </Container>
      <Container className="mt-10 border-t border-black/10 pt-6 text-sm text-neutral-600">
        {new Date().getFullYear()} {messages.brand.name}. {messages.footer.rights}
      </Container>
    </footer>
  );
}
