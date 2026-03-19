import Link from "next/link";

import { MobileMenu } from "@/components/site/mobile-menu";
import { LocaleSwitcher } from "@/components/site/locale-switcher";
import { Logo } from "@/components/site/logo";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";
import type { SiteMessages } from "@/messages/schema";

type HeaderProps = {
  locale: Locale;
  messages: SiteMessages;
};

export function Header({ locale, messages }: HeaderProps) {
  const links = [
    { href: `/${locale}`, label: messages.nav.home },
    { href: `/${locale}/about`, label: messages.nav.about },
    { href: `/${locale}/products`, label: messages.nav.products },
    { href: `/${locale}/catalogs`, label: messages.nav.catalogs },
    { href: `/${locale}/references`, label: messages.nav.references },
    { href: `/${locale}/documents`, label: messages.nav.documents },
    { href: `/${locale}/contact`, label: messages.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-[#f7f4ee]/90 backdrop-blur">
      <Container className="relative flex h-20 items-center justify-between gap-6">
        <Logo href={`/${locale}`} label={messages.brand.name} />
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium text-neutral-700 transition hover:text-ink">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <LocaleSwitcher currentLocale={locale} />
          <Link href={`/${locale}/dealer`} className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-neutral-800">
            {messages.cta.becomeDealer}
          </Link>
        </div>
        <MobileMenu locale={locale} links={links} cta={{ href: `/${locale}/dealer`, label: messages.cta.becomeDealer }} />
      </Container>
    </header>
  );
}
