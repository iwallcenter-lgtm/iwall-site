import Link from "next/link";

import { Logo } from "@/components/site/logo";
import { SocialLinks } from "@/components/site/social-links";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";
import { siteConfig } from "@/lib/site-config";
import type { SiteMessages } from "@/messages/schema";

export function Footer({ locale, messages }: { locale: Locale; messages: SiteMessages }) {
  return (
    <footer className="bg-pine-deep py-8 text-white">
      <Container className="max-w-[1440px]">
        <div className="flex flex-wrap items-center justify-between gap-7">
          <div className="flex items-center gap-5">
            <Logo href={`/${locale}`} label={messages.brand.name} compact />
            <div className="flex flex-col gap-2 text-sm">
              <a href="tel:+905052967473" dir="ltr" className="hover:text-gold">0505 296 74 73</a>
              <a href={siteConfig.company.whatsappUrl} target="_blank" rel="noopener noreferrer" className="hover:text-gold">WhatsApp</a>
              <a href={`mailto:${siteConfig.company.email}`} className="hover:text-gold">{siteConfig.company.email}</a>
            </div>
          </div>
          <SocialLinks urls={siteConfig.company.social} />
        </div>
        <div className="mt-7 flex flex-wrap items-center justify-between gap-x-6 gap-y-4 border-t border-white/15 pt-5 text-xs text-white/70">
          <span>© {new Date().getFullYear()} i-WALL</span>
          <div className="flex flex-wrap gap-x-5 gap-y-3">
            <Link href={`/${locale}/privacy-policy`} className="hover:text-white">{messages.legal.privacyTitle}</Link>
            <Link href={`/${locale}/terms-of-service`} className="hover:text-white">{messages.legal.termsTitle}</Link>
            <Link href={`/${locale}/shipping-information`} className="hover:text-white">{messages.legal.shippingTitle}</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
