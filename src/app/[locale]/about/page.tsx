import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";
import { aboutCopy } from "@/lib/storefront";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, getMessages(locale).nav.about, aboutCopy.introduction[locale], "about");
}

export default async function AboutPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <section className="bg-[#fafaf8] py-10 text-pine-deep sm:py-16">
      <Container className="max-w-5xl">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{messages.nav.about}</h1>
        <p className="mt-7 max-w-3xl text-lg leading-8">{aboutCopy.introduction[locale]}</p>
        <div className="mt-10 grid gap-8 border-t border-pine/15 pt-8 sm:grid-cols-2">
          <div>
            <h2 className="text-xl font-semibold">{aboutCopy.approachTitle[locale]}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">{aboutCopy.approach[locale]}</p>
          </div>
          <div>
            <h2 className="text-xl font-semibold">{aboutCopy.ambitionTitle[locale]}</h2>
            <p className="mt-4 text-base leading-7 text-neutral-600">{aboutCopy.ambition[locale]}</p>
          </div>
        </div>
        <Link href={`/${locale}/contact`} className="mt-10 inline-flex min-h-12 items-center rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white hover:bg-pine-deep">{messages.cta.contactUs}</Link>
      </Container>
    </section>
  );
}
