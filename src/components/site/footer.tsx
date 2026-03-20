import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { SocialLinks } from "@/components/site/social-links";
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
    <footer className="border-t border-white/10 bg-green-luxury py-14 text-white">
      <Container className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_0.8fr_1fr]">
        <div className="space-y-5">
          <Logo href={`/${locale}`} label={messages.brand.name} compact tone="light" />
          <p className="max-w-sm text-sm leading-7 text-white">{messages.brand.tagline}</p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{messages.footer.quickLinks}</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white">
            <Link href={`/${locale}/about`}>{messages.nav.about}</Link>
            <Link href={`/${locale}/products`}>{messages.nav.products}</Link>
            <Link href={`/${locale}/catalogs`}>{messages.nav.catalogs}</Link>
            <Link href={`/${locale}/contact`}>{messages.nav.contact}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{messages.footer.legal}</h3>
          <div className="mt-5 flex flex-col gap-3 text-sm text-white">
            <Link href={`/${locale}/privacy-policy`}>{messages.legal.privacyTitle}</Link>
            <Link href={`/${locale}/terms-of-service`}>{messages.legal.termsTitle}</Link>
            <Link href={`/${locale}/shipping-information`}>{messages.legal.shippingTitle}</Link>
          </div>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-white">{messages.footer.contact}</h3>
          <div className="mt-5 space-y-3 text-sm text-white">
            <p>{siteConfig.company.phone}</p>
            <p>{siteConfig.company.email}</p>
            <p>{siteConfig.company.address}</p>
          </div>
          <SocialLinks title={messages.footer.socialTitle} urls={siteConfig.company.social} className="mt-6" />
        </div>
      </Container>
      <Container className="mt-10 border-t border-white/10 pt-6 text-sm text-white">
        {new Date().getFullYear()} {messages.brand.name}. {messages.footer.rights}
      </Container>
    </footer>
  );
}
