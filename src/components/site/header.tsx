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
    { href: "#social-media", label: "Sosyal Medya" },
    { href: `/${locale}/contact`, label: messages.nav.contact }
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-pine/80 backdrop-blur-xl">
      <Container className="relative flex min-h-20 flex-wrap items-center justify-between gap-x-4 gap-y-3 py-3 lg:flex-nowrap">
        <div className="shrink-0 lg:mr-4 xl:mr-6">
          <Logo href={`/${locale}`} label="i-WALL" tone="light" />
        </div>
        <nav className="hidden min-w-0 flex-1 items-center justify-start gap-4 lg:flex xl:gap-5">
          {links.map((link) => (
            <Link key={link.href} href={link.href} className="text-sm font-medium tracking-[0.06em] text-white transition hover:text-white/75">
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="order-3 flex w-full items-center justify-start sm:justify-end lg:order-none lg:w-auto lg:shrink-0">
          <LocaleSwitcher currentLocale={locale} className="w-full max-w-full sm:w-auto sm:max-w-[320px] lg:max-w-[290px] xl:max-w-none" />
        </div>
        <div className="flex shrink-0 items-center gap-2 sm:gap-3">
          <Link href={`/${locale}/dealer`} className="hidden rounded-full bg-white px-5 py-3 text-sm font-semibold tracking-[0.08em] text-pine transition duration-200 hover:border-gold/40 hover:bg-[#f7faf8] lg:inline-flex">
            {messages.cta.becomeDealer}
          </Link>
          <div className="lg:hidden">
            <MobileMenu locale={locale} links={links} cta={{ href: `/${locale}/dealer`, label: messages.cta.becomeDealer }} />
          </div>
        </div>
      </Container>
    </header>
  );
}
