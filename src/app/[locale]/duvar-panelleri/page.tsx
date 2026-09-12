import type { Metadata } from "next";
import Link from "next/link";

import { PanelCatalogs } from "@/components/site/panel-catalogs";
import { Container } from "@/components/ui/container";
import { getMessages } from "@/lib/messages";
import type { Locale } from "@/lib/locales";
import { createPageMetadata } from "@/lib/seo";
import { productCopy } from "@/lib/storefront";

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  return createPageMetadata(locale, productCopy.panels[locale], productCopy.panelNote[locale], "duvar-panelleri");
}

export default async function WallPanelsPage({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params;
  return (
    <section className="min-h-[55vh] bg-[#fafaf8] py-10 text-pine-deep sm:py-14">
      <Container className="max-w-[1440px]">
        <h1 className="text-3xl font-medium tracking-tight sm:text-4xl">{productCopy.panels[locale]}</h1>
        <p className="mb-8 mt-4 text-base leading-7 text-neutral-600">{productCopy.panelNote[locale]}</p>
        <PanelCatalogs locale={locale} />
        <Link href={`/${locale}/contact`} className="mt-8 inline-flex min-h-12 items-center rounded-full bg-pine px-6 py-3 text-sm font-semibold text-white hover:bg-pine-deep">{getMessages(locale).cta.contactUs}</Link>
      </Container>
    </section>
  );
}
