import Link from "next/link";

import { MobileMenu } from "@/components/site/mobile-menu";
import { LocaleSwitcher } from "@/components/site/locale-switcher";
import { Logo } from "@/components/site/logo";
import { NavigationLink } from "@/components/site/navigation-link";
import { Container } from "@/components/ui/container";
import type { Locale } from "@/lib/locales";
import { lambiriCopy } from "@/lib/lambiri";
import { spaceCopy } from "@/lib/spaces";
import type { SiteMessages } from "@/messages/schema";

type HeaderProps = {
  locale: Locale;
  messages: SiteMessages;
};

export function Header({ locale, messages }: HeaderProps) {
  const links = [
    { href: `/${locale}`, label: messages.nav.home },
    { href: `/${locale}/lambiriler`, label: lambiriCopy[locale].title },
    { href: `/${locale}/mekanlar`, label: spaceCopy.nav[locale] },
    { href: `/${locale}/about`, label: messages.nav.about },
    { href: `/${locale}/products`, label: messages.nav.products },
    { href: `/${locale}/catalogs`, label: messages.nav.catalogs },
    { href: `/${locale}/contact`, label: messages.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-pine-deep text-white">
      <Container className="relative flex min-h-20 max-w-[1440px] items-center justify-between gap-4 py-2">
        <div className="shrink-0">
          <Logo href={`/${locale}`} label="i-WALL" tone="light" />
        </div>
        <nav aria-label={lambiriCopy[locale].menu} className="hidden min-w-0 flex-1 items-center justify-center gap-3 xl:flex 2xl:gap-5">
          {links.map((link) => (
            <NavigationLink key={link.href} href={link.href}>
              {link.label}
            </NavigationLink>
          ))}
        </nav>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <LocaleSwitcher currentLocale={locale} />
          <Link href={`/${locale}/dealer`} className="hidden whitespace-nowrap rounded-full border border-white/25 px-4 py-3 text-sm font-medium text-white transition hover:bg-white/10 sm:inline-flex">
            {messages.cta.becomeDealer}
          </Link>
          <div className="xl:hidden">
            <MobileMenu locale={locale} links={links} cta={{ href: `/${locale}/dealer`, label: messages.cta.becomeDealer }} />
          </div>
        </div>
      </Container>
    </header>
  );
}
