import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { FiArrowDown, FiArrowRight } from "react-icons/fi";

import { Container } from "@/components/ui/container";
import { catalogs } from "@/lib/catalogs";
import { spaceCopy } from "@/lib/spaces";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  const messages = getMessages(locale);
  return createPageMetadata(locale, messages.nav.catalogs, messages.catalogs.heroText, "catalogs");
}

export default async function CatalogsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  const messages = getMessages(locale);

  return (
    <section id="catalog-list" className="bg-[#fafaf8] pb-14 pt-7 sm:pb-20 sm:pt-10">
        <Container className="max-w-[1440px]">
          <div className="mb-7 flex flex-wrap items-center justify-between gap-4 border-b border-pine/15 pb-6">
            <h1 className="text-3xl font-medium tracking-tight text-pine-deep sm:text-4xl">{messages.nav.catalogs}</h1>
            <Link href={`/${locale}/mekanlar`} className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-pine hover:underline">
              {spaceCopy.explore[locale]}<FiArrowRight className="rtl:rotate-180" aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {catalogs.map((catalog) => (
              <article key={catalog.href} className="catalog-card overflow-hidden rounded-lg border border-pine/10 bg-white">
                <a href={catalog.href} target="_blank" rel="noopener noreferrer" aria-label={catalog.title[locale]} className="relative block aspect-[4/3] overflow-hidden bg-sand">
                  <Image src={catalog.imageSrc} alt={catalog.imageAlt} fill unoptimized className="object-cover transition duration-300 hover:brightness-105" />
                </a>
                <div className="p-5 sm:p-6">
                  <h2 className="text-xl font-semibold text-pine-deep">{catalog.title[locale]}</h2>
                  {catalog.href.startsWith('/catalogs/iwall-') && catalog.href !== '/catalogs/iwall-lambiri-1-29.pdf' && <p className="mt-2 text-sm text-neutral-500">{catalog.description[locale]}</p>}
                  <a href={catalog.href} target="_blank" rel="noopener noreferrer" className="mt-5 inline-flex min-h-11 items-center gap-3 rounded-full border border-pine/20 px-5 py-2 text-sm font-semibold text-pine hover:bg-fog">
                    {messages.cta.downloadNow}<FiArrowDown aria-hidden="true" />
                  </a>
                </div>
              </article>
            ))}
          </div>
        </Container>
    </section>
  );
}
