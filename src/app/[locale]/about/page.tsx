import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/ui/container";
import { brandStory } from "@/lib/brand-story";
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
    <div className="bg-[#fafaf8] text-pine-deep">
      <section className="py-10 sm:py-16">
        <Container className="grid max-w-[1440px] items-center gap-9 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.22em] text-pine/70">{messages.nav.about}</p>
            <h1 className="max-w-xl text-4xl font-medium leading-[1.12] tracking-tight sm:text-5xl">{brandStory.title[locale]}</h1>
            <p className="mt-7 max-w-xl text-base leading-8 text-neutral-600">{aboutCopy.introduction[locale]}</p>
            <Link href={`/${locale}/products`} className="mt-7 inline-flex min-h-12 items-center rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white hover:bg-pine-deep">{messages.nav.products}</Link>
          </div>
          <div className="overflow-hidden rounded-xl bg-[#f1eee8]">
            <Image src="/images/paneller/dy2007-room.webp" alt={brandStory.detailTitle[locale]} width={1600} height={1000} unoptimized className="aspect-[4/3] h-auto w-full object-contain" />
          </div>
        </Container>
      </section>
      <section className="pb-12 sm:pb-16">
        <Container className="max-w-[1440px]">
          <div className="grid gap-6 border-t border-pine/20 pt-10 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
            <h2 className="text-3xl font-medium tracking-tight">{brandStory.detailTitle[locale]}</h2>
            <p className="max-w-3xl text-base leading-8 text-neutral-600">{brandStory.detail[locale]}</p>
          </div>
          <div className="mt-10 grid gap-7 md:grid-cols-3">
            {brandStory.values.map((value, index) => <article key={index} className="border-t border-[#bda268] pt-6">
              <span className="text-xs font-semibold tracking-widest text-pine/50">{String(index + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-xl font-semibold">{value.title[locale]}</h3>
              <p className="mt-4 text-sm leading-7 text-neutral-600">{value.body[locale]}</p>
            </article>)}
          </div>
        </Container>
      </section>
      <section className="bg-pine-deep py-12 text-white sm:py-16">
        <Container className="grid max-w-[1440px] gap-8 lg:grid-cols-2 lg:gap-16">
          <h2 className="max-w-lg text-3xl font-medium leading-tight sm:text-4xl">{brandStory.visionTitle[locale]}</h2>
          <div>
            <p className="text-base leading-8 text-white/90">{aboutCopy.ambition[locale]}</p>
            <p className="mt-5 text-base leading-8 text-white/80">{aboutCopy.approach[locale]}</p>
            <Link href={`/${locale}/contact`} className="mt-7 inline-flex min-h-12 items-center rounded-full border border-white/40 px-6 py-3 text-sm font-semibold hover:bg-white/10">{messages.cta.contactUs}</Link>
          </div>
        </Container>
      </section>
    </div>
  );
}
